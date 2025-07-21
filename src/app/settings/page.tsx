import {
  User,
  Shield,
  Bell,
  Palette,
  Database,
  Globe,
  Lock,
  Trash2,
} from "lucide-react";

export default function SettingsPage() {
  return (
    <>
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-foreground">Settings</h1>
        <p className="text-muted-foreground">
          Manage your account and family tree preferences
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Profile Settings */}
        <div className="bg-card border border-border rounded-lg p-6 hover:shadow-lg transition-shadow cursor-pointer">
          <div className="w-12 h-12 bg-blue-500/10 rounded-lg flex items-center justify-center mb-4">
            <User className="w-6 h-6 text-blue-600" />
          </div>
          <h3 className="font-semibold text-foreground mb-2">Profile</h3>
          <p className="text-sm text-muted-foreground mb-4">
            Update your personal information
          </p>
          <span className="text-xs bg-blue-500/10 text-blue-600 px-2 py-1 rounded">
            Edit profile
          </span>
        </div>

        {/* Privacy Settings */}
        <div className="bg-card border border-border rounded-lg p-6 hover:shadow-lg transition-shadow cursor-pointer">
          <div className="w-12 h-12 bg-green-500/10 rounded-lg flex items-center justify-center mb-4">
            <Shield className="w-6 h-6 text-green-600" />
          </div>
          <h3 className="font-semibold text-foreground mb-2">Privacy</h3>
          <p className="text-sm text-muted-foreground mb-4">
            Control who can see your family tree
          </p>
          <span className="text-xs bg-green-500/10 text-green-600 px-2 py-1 rounded">
            Manage privacy
          </span>
        </div>

        {/* Notifications */}
        <div className="bg-card border border-border rounded-lg p-6 hover:shadow-lg transition-shadow cursor-pointer">
          <div className="w-12 h-12 bg-yellow-500/10 rounded-lg flex items-center justify-center mb-4">
            <Bell className="w-6 h-6 text-yellow-600" />
          </div>
          <h3 className="font-semibold text-foreground mb-2">Notifications</h3>
          <p className="text-sm text-muted-foreground mb-4">
            Configure email and push notifications
          </p>
          <span className="text-xs bg-yellow-500/10 text-yellow-600 px-2 py-1 rounded">
            Set preferences
          </span>
        </div>

        {/* Appearance */}
        <div className="bg-card border border-border rounded-lg p-6 hover:shadow-lg transition-shadow cursor-pointer">
          <div className="w-12 h-12 bg-purple-500/10 rounded-lg flex items-center justify-center mb-4">
            <Palette className="w-6 h-6 text-purple-600" />
          </div>
          <h3 className="font-semibold text-foreground mb-2">Appearance</h3>
          <p className="text-sm text-muted-foreground mb-4">
            Customize theme and display options
          </p>
          <span className="text-xs bg-purple-500/10 text-purple-600 px-2 py-1 rounded">
            Theme settings
          </span>
        </div>

        {/* Data & Export */}
        <div className="bg-card border border-border rounded-lg p-6 hover:shadow-lg transition-shadow cursor-pointer">
          <div className="w-12 h-12 bg-cyan-500/10 rounded-lg flex items-center justify-center mb-4">
            <Database className="w-6 h-6 text-cyan-600" />
          </div>
          <h3 className="font-semibold text-foreground mb-2">Data & Export</h3>
          <p className="text-sm text-muted-foreground mb-4">
            Export your family tree data
          </p>
          <span className="text-xs bg-cyan-500/10 text-cyan-600 px-2 py-1 rounded">
            Export options
          </span>
        </div>

        {/* Sharing Settings */}
        <div className="bg-card border border-border rounded-lg p-6 hover:shadow-lg transition-shadow cursor-pointer">
          <div className="w-12 h-12 bg-indigo-500/10 rounded-lg flex items-center justify-center mb-4">
            <Globe className="w-6 h-6 text-indigo-600" />
          </div>
          <h3 className="font-semibold text-foreground mb-2">Sharing</h3>
          <p className="text-sm text-muted-foreground mb-4">
            Manage family tree sharing options
          </p>
          <span className="text-xs bg-indigo-500/10 text-indigo-600 px-2 py-1 rounded">
            Share settings
          </span>
        </div>

        {/* Security */}
        <div className="bg-card border border-border rounded-lg p-6 hover:shadow-lg transition-shadow cursor-pointer">
          <div className="w-12 h-12 bg-red-500/10 rounded-lg flex items-center justify-center mb-4">
            <Lock className="w-6 h-6 text-red-600" />
          </div>
          <h3 className="font-semibold text-foreground mb-2">Security</h3>
          <p className="text-sm text-muted-foreground mb-4">
            Password and account security
          </p>
          <span className="text-xs bg-red-500/10 text-red-600 px-2 py-1 rounded">
            Security options
          </span>
        </div>

        {/* Account Management */}
        <div className="bg-card border border-border rounded-lg p-6 hover:shadow-lg transition-shadow cursor-pointer">
          <div className="w-12 h-12 bg-orange-500/10 rounded-lg flex items-center justify-center mb-4">
            <Trash2 className="w-6 h-6 text-orange-600" />
          </div>
          <h3 className="font-semibold text-foreground mb-2">Account</h3>
          <p className="text-sm text-muted-foreground mb-4">
            Delete account or manage subscription
          </p>
          <span className="text-xs bg-orange-500/10 text-orange-600 px-2 py-1 rounded">
            Danger zone
          </span>
        </div>

        {/* Help & Support */}
        <div className="bg-card border border-border rounded-lg p-6 hover:shadow-lg transition-shadow cursor-pointer">
          <div className="w-12 h-12 bg-gray-500/10 rounded-lg flex items-center justify-center mb-4">
            <span className="text-gray-600 text-lg">❓</span>
          </div>
          <h3 className="font-semibold text-foreground mb-2">Help & Support</h3>
          <p className="text-sm text-muted-foreground mb-4">
            Get help and contact support
          </p>
          <span className="text-xs bg-gray-500/10 text-gray-600 px-2 py-1 rounded">
            Get help
          </span>
        </div>
      </div>
    </>
  );
}
