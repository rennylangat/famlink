import { TreePine, UserPlus, Users } from "lucide-react";

export default function FamilyPage() {
  return (
    <>
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-foreground">Family Tree</h1>
        <p className="text-muted-foreground">
          Manage your family tree and relationships
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* View Tree */}
        <div className="bg-card border border-border rounded-lg p-6 hover:shadow-lg transition-shadow cursor-pointer">
          <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
            <TreePine className="w-6 h-6 text-primary" />
          </div>
          <h3 className="font-semibold text-foreground mb-2">View Tree</h3>
          <p className="text-sm text-muted-foreground mb-4">
            Interactive family tree visualization
          </p>
          <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded">
            Explore
          </span>
        </div>

        {/* Add Member */}
        <div className="bg-card border border-border rounded-lg p-6 hover:shadow-lg transition-shadow cursor-pointer">
          <div className="w-12 h-12 bg-green-500/10 rounded-lg flex items-center justify-center mb-4">
            <UserPlus className="w-6 h-6 text-green-600" />
          </div>
          <h3 className="font-semibold text-foreground mb-2">Add Member</h3>
          <p className="text-sm text-muted-foreground mb-4">
            Add new family members to your tree
          </p>
          <span className="text-xs bg-green-500/10 text-green-600 px-2 py-1 rounded">
            Add new
          </span>
        </div>

        {/* Relationships */}
        <div className="bg-card border border-border rounded-lg p-6 hover:shadow-lg transition-shadow cursor-pointer">
          <div className="w-12 h-12 bg-blue-500/10 rounded-lg flex items-center justify-center mb-4">
            <Users className="w-6 h-6 text-blue-600" />
          </div>
          <h3 className="font-semibold text-foreground mb-2">Relationships</h3>
          <p className="text-sm text-muted-foreground mb-4">
            Manage family relationships and connections
          </p>
          <span className="text-xs bg-blue-500/10 text-blue-600 px-2 py-1 rounded">
            Connect
          </span>
        </div>
      </div>
    </>
  );
}
