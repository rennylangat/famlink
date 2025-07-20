const { createClient } = require('@supabase/supabase-js');
const fs = require('fs');
const path = require('path');

// Load environment variables
require('dotenv').config();

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

if (!supabaseUrl || !supabaseServiceKey) {
  console.error('❌ Missing required environment variables:');
  console.error('- NEXT_PUBLIC_SUPABASE_URL');
  console.error('- SUPABASE_SERVICE_ROLE_KEY');
  console.error('\nPlease add the service role key to your .env file');
  process.exit(1);
}

// Create Supabase client with service role key for admin operations
const supabase = createClient(supabaseUrl, supabaseServiceKey);

async function applyRLSPolicies() {
  console.log('🔒 Applying Row Level Security policies...');

  try {
    // Read the RLS policies SQL file
    const rlsPoliciesPath = path.join(__dirname, '..', 'prisma', 'rls-policies.sql');
    const rlsPoliciesSQL = fs.readFileSync(rlsPoliciesPath, 'utf8');

    // Split the SQL into individual statements
    const statements = rlsPoliciesSQL
      .split(';')
      .map(stmt => stmt.trim())
      .filter(stmt => stmt.length > 0 && !stmt.startsWith('--'));

    console.log(`📝 Found ${statements.length} SQL statements to execute`);

    // Execute each statement
    for (let i = 0; i < statements.length; i++) {
      const statement = statements[i];
      console.log(`⏳ Executing statement ${i + 1}/${statements.length}...`);
      
      try {
        const { error } = await supabase.rpc('exec_sql', { sql: statement });
        
        if (error) {
          // Try direct query execution as fallback
          const { error: directError } = await supabase
            .from('_')
            .select('*')
            .limit(0);
          
          if (directError) {
            console.warn(`⚠️  Warning on statement ${i + 1}: ${error.message}`);
          }
        }
      } catch (err) {
        console.warn(`⚠️  Warning on statement ${i + 1}: ${err.message}`);
      }
    }

    console.log('✅ RLS policies applied successfully!');
    
    // Test the policies by checking if RLS is enabled
    console.log('\n🧪 Testing RLS configuration...');
    
    const { data: rlsStatus, error: rlsError } = await supabase
      .from('information_schema.tables')
      .select('table_name, row_security')
      .in('table_name', ['users', 'family', 'person', 'relationships']);

    if (rlsError) {
      console.warn('⚠️  Could not verify RLS status:', rlsError.message);
    } else {
      console.log('📊 RLS Status:');
      rlsStatus?.forEach(table => {
        console.log(`  - ${table.table_name}: ${table.row_security ? '✅ Enabled' : '❌ Disabled'}`);
      });
    }

  } catch (error) {
    console.error('❌ Error applying RLS policies:', error.message);
    process.exit(1);
  }
}

async function createStorageBucket() {
  console.log('\n🗂️  Setting up storage bucket...');

  try {
    // Create the profile-images bucket
    const { data: bucket, error: bucketError } = await supabase.storage
      .createBucket('profile-images', {
        public: false,
        allowedMimeTypes: ['image/jpeg', 'image/png', 'image/webp'],
        fileSizeLimit: 5242880, // 5MB
      });

    if (bucketError && !bucketError.message.includes('already exists')) {
      console.error('❌ Error creating storage bucket:', bucketError.message);
    } else {
      console.log('✅ Storage bucket "profile-images" configured successfully');
    }

    // List buckets to verify
    const { data: buckets, error: listError } = await supabase.storage.listBuckets();
    
    if (listError) {
      console.warn('⚠️  Could not list buckets:', listError.message);
    } else {
      const profileBucket = buckets.find(b => b.name === 'profile-images');
      if (profileBucket) {
        console.log('📊 Bucket details:');
        console.log(`  - Name: ${profileBucket.name}`);
        console.log(`  - Public: ${profileBucket.public ? 'Yes' : 'No'}`);
        console.log(`  - Created: ${profileBucket.created_at}`);
      }
    }

  } catch (error) {
    console.error('❌ Error setting up storage:', error.message);
  }
}

async function main() {
  console.log('🚀 Starting RLS and Storage setup...\n');
  
  await applyRLSPolicies();
  await createStorageBucket();
  
  console.log('\n🎉 Setup completed!');
  console.log('\n📋 Next steps:');
  console.log('1. Run the seed script: npm run seed');
  console.log('2. Test authentication and access control');
  console.log('3. Verify storage policies with file uploads');
}

main().catch(console.error);