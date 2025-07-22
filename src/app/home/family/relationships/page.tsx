export default function RelationshipsPage() {
  return (
    <>
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-foreground">
          Family Relationships
        </h1>
        <p className="text-muted-foreground">
          Manage connections and relationships between family members
        </p>
      </div>

      <div className="grid gap-6">
        {/* Add New Relationship */}
        <div className="bg-card border border-border rounded-lg p-6 shadow-sm">
          <h3 className="text-lg font-semibold text-foreground mb-4">
            Add New Relationship
          </h3>
          <form className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label
                  htmlFor="person1"
                  className="block text-sm font-medium text-foreground mb-2"
                >
                  First Person
                </label>
                <select className="w-full px-3 py-2 border border-input bg-background rounded-md text-foreground focus:ring-2 focus:ring-ring focus:border-ring">
                  <option value="">Select family member</option>
                  <option value="john-doe">John Doe</option>
                  <option value="jane-doe">Jane Doe</option>
                  <option value="bob-smith">Bob Smith</option>
                </select>
              </div>
              <div>
                <label
                  htmlFor="person2"
                  className="block text-sm font-medium text-foreground mb-2"
                >
                  Second Person
                </label>
                <select className="w-full px-3 py-2 border border-input bg-background rounded-md text-foreground focus:ring-2 focus:ring-ring focus:border-ring">
                  <option value="">Select family member</option>
                  <option value="john-doe">John Doe</option>
                  <option value="jane-doe">Jane Doe</option>
                  <option value="bob-smith">Bob Smith</option>
                </select>
              </div>
            </div>

            <div>
              <label
                htmlFor="relationshipType"
                className="block text-sm font-medium text-foreground mb-2"
              >
                Relationship Type
              </label>
              <select className="w-full px-3 py-2 border border-input bg-background rounded-md text-foreground focus:ring-2 focus:ring-ring focus:border-ring">
                <option value="">Select relationship</option>
                <option value="parent-child">Parent - Child</option>
                <option value="spouse">Spouse/Partner</option>
                <option value="sibling">Sibling</option>
                <option value="grandparent-grandchild">
                  Grandparent - Grandchild
                </option>
                <option value="aunt-uncle-niece-nephew">
                  Aunt/Uncle - Niece/Nephew
                </option>
                <option value="cousin">Cousin</option>
              </select>
            </div>

            <button
              type="submit"
              className="bg-primary text-primary-foreground px-6 py-2 rounded-md hover:bg-primary/90 transition-colors"
            >
              Add Relationship
            </button>
          </form>
        </div>

        {/* Existing Relationships */}
        <div className="bg-card border border-border rounded-lg p-6 shadow-sm">
          <h3 className="text-lg font-semibold text-foreground mb-4">
            Existing Relationships
          </h3>
          <div className="space-y-3">
            {/* Relationship Item */}
            <div className="flex items-center justify-between p-3 bg-secondary/50 rounded-lg">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                  <span className="text-primary text-sm font-medium">JD</span>
                </div>
                <div>
                  <div className="text-sm font-medium text-foreground">
                    John Doe → Jane Doe
                  </div>
                  <div className="text-xs text-muted-foreground">
                    Spouse/Partner
                  </div>
                </div>
              </div>
              <button className="text-destructive hover:text-destructive/80 text-sm">
                Remove
              </button>
            </div>

            <div className="flex items-center justify-between p-3 bg-secondary/50 rounded-lg">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                  <span className="text-primary text-sm font-medium">BS</span>
                </div>
                <div>
                  <div className="text-sm font-medium text-foreground">
                    Bob Smith → John Doe
                  </div>
                  <div className="text-xs text-muted-foreground">
                    Parent - Child
                  </div>
                </div>
              </div>
              <button className="text-destructive hover:text-destructive/80 text-sm">
                Remove
              </button>
            </div>

            <div className="flex items-center justify-between p-3 bg-secondary/50 rounded-lg">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                  <span className="text-primary text-sm font-medium">MS</span>
                </div>
                <div>
                  <div className="text-sm font-medium text-foreground">
                    Mary Smith → Jane Doe
                  </div>
                  <div className="text-xs text-muted-foreground">Sibling</div>
                </div>
              </div>
              <button className="text-destructive hover:text-destructive/80 text-sm">
                Remove
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
