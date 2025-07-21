import { Users, UserSearch, Heart, UserPlus } from "lucide-react";

export default function MembersPage() {
  return (
    <>
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-foreground">Family Members</h1>
        <p className="text-muted-foreground">
          Manage and browse your family members
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {/* All Members */}
        <div className="bg-card border border-border rounded-lg p-6 hover:shadow-lg transition-shadow cursor-pointer">
          <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
            <Users className="w-6 h-6 text-primary" />
          </div>
          <h3 className="font-semibold text-foreground mb-2">All Members</h3>
          <p className="text-sm text-muted-foreground mb-4">
            View complete list of family members
          </p>
          <span className="text-xs bg-secondary text-secondary-foreground px-2 py-1 rounded">
            24 members
          </span>
        </div>

        {/* Living Members */}
        <div className="bg-card border border-border rounded-lg p-6 hover:shadow-lg transition-shadow cursor-pointer">
          <div className="w-12 h-12 bg-green-500/10 rounded-lg flex items-center justify-center mb-4">
            <Heart className="w-6 h-6 text-green-600" />
          </div>
          <h3 className="font-semibold text-foreground mb-2">Living</h3>
          <p className="text-sm text-muted-foreground mb-4">
            Currently living family members
          </p>
          <span className="text-xs bg-green-500/10 text-green-600 px-2 py-1 rounded">
            18 living
          </span>
        </div>

        {/* Deceased Members */}
        <div className="bg-card border border-border rounded-lg p-6 hover:shadow-lg transition-shadow cursor-pointer">
          <div className="w-12 h-12 bg-gray-500/10 rounded-lg flex items-center justify-center mb-4">
            <span className="text-gray-600 text-lg">🕊️</span>
          </div>
          <h3 className="font-semibold text-foreground mb-2">Deceased</h3>
          <p className="text-sm text-muted-foreground mb-4">
            Remembering departed family members
          </p>
          <span className="text-xs bg-gray-500/10 text-gray-600 px-2 py-1 rounded">
            6 deceased
          </span>
        </div>

        {/* Search Members */}
        <div className="bg-card border border-border rounded-lg p-6 hover:shadow-lg transition-shadow cursor-pointer">
          <div className="w-12 h-12 bg-blue-500/10 rounded-lg flex items-center justify-center mb-4">
            <UserSearch className="w-6 h-6 text-blue-600" />
          </div>
          <h3 className="font-semibold text-foreground mb-2">Search</h3>
          <p className="text-sm text-muted-foreground mb-4">
            Find specific family members
          </p>
          <span className="text-xs bg-blue-500/10 text-blue-600 px-2 py-1 rounded">
            Advanced search
          </span>
        </div>

        {/* Add New Member */}
        <div className="bg-card border border-border rounded-lg p-6 hover:shadow-lg transition-shadow cursor-pointer">
          <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
            <UserPlus className="w-6 h-6 text-primary" />
          </div>
          <h3 className="font-semibold text-foreground mb-2">Add Member</h3>
          <p className="text-sm text-muted-foreground mb-4">
            Add new family member to tree
          </p>
          <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded">
            Quick add
          </span>
        </div>

        {/* Recent Additions */}
        <div className="bg-card border border-border rounded-lg p-6 hover:shadow-lg transition-shadow cursor-pointer">
          <div className="w-12 h-12 bg-orange-500/10 rounded-lg flex items-center justify-center mb-4">
            <span className="text-orange-600 text-lg">⭐</span>
          </div>
          <h3 className="font-semibold text-foreground mb-2">Recent</h3>
          <p className="text-sm text-muted-foreground mb-4">
            Recently added members
          </p>
          <span className="text-xs bg-orange-500/10 text-orange-600 px-2 py-1 rounded">
            3 this week
          </span>
        </div>

        {/* Member Statistics */}
        <div className="bg-card border border-border rounded-lg p-6 hover:shadow-lg transition-shadow cursor-pointer">
          <div className="w-12 h-12 bg-purple-500/10 rounded-lg flex items-center justify-center mb-4">
            <span className="text-purple-600 text-lg">📊</span>
          </div>
          <h3 className="font-semibold text-foreground mb-2">Statistics</h3>
          <p className="text-sm text-muted-foreground mb-4">
            Family member analytics
          </p>
          <span className="text-xs bg-purple-500/10 text-purple-600 px-2 py-1 rounded">
            View insights
          </span>
        </div>

        {/* Import Members */}
        <div className="bg-card border border-border rounded-lg p-6 hover:shadow-lg transition-shadow cursor-pointer">
          <div className="w-12 h-12 bg-cyan-500/10 rounded-lg flex items-center justify-center mb-4">
            <span className="text-cyan-600 text-lg">📥</span>
          </div>
          <h3 className="font-semibold text-foreground mb-2">Import</h3>
          <p className="text-sm text-muted-foreground mb-4">
            Import from other sources
          </p>
          <span className="text-xs bg-cyan-500/10 text-cyan-600 px-2 py-1 rounded">
            CSV, GEDCOM
          </span>
        </div>
      </div>
    </>
  );
}
