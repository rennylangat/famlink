-- Row Level Security Policies for Family Tree Application
-- These policies ensure users can only access data they own or have been granted access to

-- Enable RLS on all tables
ALTER TABLE users ENABLE ROW LEVEL SECURITY;
ALTER TABLE family ENABLE ROW LEVEL SECURITY;
ALTER TABLE person ENABLE ROW LEVEL SECURITY;
ALTER TABLE relationships ENABLE ROW LEVEL SECURITY;

-- =============================================
-- USER TABLE POLICIES
-- =============================================

-- Users can only see and update their own user record
CREATE POLICY "Users can view own profile" ON users
    FOR SELECT USING (auth.uid()::text = id);

CREATE POLICY "Users can update own profile" ON users
    FOR UPDATE USING (auth.uid()::text = id);

CREATE POLICY "Users can insert own profile" ON users
    FOR INSERT WITH CHECK (auth.uid()::text = id);

-- =============================================
-- FAMILY TABLE POLICIES
-- =============================================

-- Family owners can do everything with their families
CREATE POLICY "Family owners have full access" ON family
    FOR ALL USING (auth.uid()::text = owner_id);

-- Users can view public families
CREATE POLICY "Anyone can view public families" ON family
    FOR SELECT USING (privacy_level = 'PUBLIC');

-- TODO: Add collaborator policies when collaboration feature is implemented
-- For now, only owners have access to private families

-- =============================================
-- PERSON TABLE POLICIES
-- =============================================

-- Users can manage people in families they own
CREATE POLICY "Family owners can manage people" ON person
    FOR ALL USING (
        EXISTS (
            SELECT 1 FROM family 
            WHERE family.id = person.family_id 
            AND family.owner_id = auth.uid()::text
        )
    );

-- Users can view people in public families
CREATE POLICY "Anyone can view people in public families" ON person
    FOR SELECT USING (
        EXISTS (
            SELECT 1 FROM family 
            WHERE family.id = person.family_id 
            AND family.privacy_level = 'PUBLIC'
        )
    );

-- =============================================
-- RELATIONSHIPS TABLE POLICIES
-- =============================================

-- Users can manage relationships in families they own
CREATE POLICY "Family owners can manage relationships" ON relationships
    FOR ALL USING (
        EXISTS (
            SELECT 1 FROM person p1
            JOIN family f ON f.id = p1.family_id
            WHERE p1.id = relationships.from_person_id
            AND f.owner_id = auth.uid()::text
        )
        AND
        EXISTS (
            SELECT 1 FROM person p2
            JOIN family f ON f.id = p2.family_id
            WHERE p2.id = relationships.to_person_id
            AND f.owner_id = auth.uid()::text
        )
    );

-- Users can view relationships in public families
CREATE POLICY "Anyone can view relationships in public families" ON relationships
    FOR SELECT USING (
        EXISTS (
            SELECT 1 FROM person p1
            JOIN family f ON f.id = p1.family_id
            WHERE p1.id = relationships.from_person_id
            AND f.privacy_level = 'PUBLIC'
        )
        AND
        EXISTS (
            SELECT 1 FROM person p2
            JOIN family f ON f.id = p2.family_id
            WHERE p2.id = relationships.to_person_id
            AND f.privacy_level = 'PUBLIC'
        )
    );

-- =============================================
-- STORAGE POLICIES
-- =============================================

-- Create storage bucket for profile images if it doesn't exist
INSERT INTO storage.buckets (id, name, public)
VALUES ('profile-images', 'profile-images', false)
ON CONFLICT (id) DO NOTHING;

-- Allow authenticated users to upload their own profile images
CREATE POLICY "Users can upload profile images" ON storage.objects
    FOR INSERT WITH CHECK (
        bucket_id = 'profile-images' 
        AND auth.role() = 'authenticated'
        AND (storage.foldername(name))[1] = auth.uid()::text
    );

-- Allow users to view profile images they have access to
CREATE POLICY "Users can view accessible profile images" ON storage.objects
    FOR SELECT USING (
        bucket_id = 'profile-images' 
        AND (
            -- Users can view their own images
            (storage.foldername(name))[1] = auth.uid()::text
            OR
            -- Users can view images in public families
            EXISTS (
                SELECT 1 FROM person p
                JOIN family f ON f.id = p.family_id
                WHERE p.profile_image_url LIKE '%' || name || '%'
                AND f.privacy_level = 'PUBLIC'
            )
            OR
            -- Users can view images in families they own
            EXISTS (
                SELECT 1 FROM person p
                JOIN family f ON f.id = p.family_id
                WHERE p.profile_image_url LIKE '%' || name || '%'
                AND f.owner_id = auth.uid()::text
            )
        )
    );

-- Allow users to update their own profile images
CREATE POLICY "Users can update own profile images" ON storage.objects
    FOR UPDATE USING (
        bucket_id = 'profile-images' 
        AND (storage.foldername(name))[1] = auth.uid()::text
    );

-- Allow users to delete their own profile images
CREATE POLICY "Users can delete own profile images" ON storage.objects
    FOR DELETE USING (
        bucket_id = 'profile-images' 
        AND (storage.foldername(name))[1] = auth.uid()::text
    );