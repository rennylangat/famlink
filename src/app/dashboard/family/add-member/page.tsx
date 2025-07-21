export default function AddMemberPage() {
  return (
    <>
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-foreground">
          Add Family Member
        </h1>
        <p className="text-muted-foreground">
          Add a new member to your family tree
        </p>
      </div>

      <div className="bg-card border border-border rounded-lg p-6 shadow-sm">
        <form className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label
                htmlFor="firstName"
                className="block text-sm font-medium text-foreground mb-2"
              >
                First Name
              </label>
              <input
                type="text"
                id="firstName"
                className="w-full px-3 py-2 border border-input bg-background rounded-md text-foreground focus:ring-2 focus:ring-ring focus:border-ring"
                placeholder="Enter first name"
              />
            </div>
            <div>
              <label
                htmlFor="lastName"
                className="block text-sm font-medium text-foreground mb-2"
              >
                Last Name
              </label>
              <input
                type="text"
                id="lastName"
                className="w-full px-3 py-2 border border-input bg-background rounded-md text-foreground focus:ring-2 focus:ring-ring focus:border-ring"
                placeholder="Enter last name"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label
                htmlFor="birthDate"
                className="block text-sm font-medium text-foreground mb-2"
              >
                Birth Date
              </label>
              <input
                type="date"
                id="birthDate"
                className="w-full px-3 py-2 border border-input bg-background rounded-md text-foreground focus:ring-2 focus:ring-ring focus:border-ring"
              />
            </div>
            <div>
              <label
                htmlFor="gender"
                className="block text-sm font-medium text-foreground mb-2"
              >
                Gender
              </label>
              <select className="w-full px-3 py-2 border border-input bg-background rounded-md text-foreground focus:ring-2 focus:ring-ring focus:border-ring">
                <option value="">Select gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
                <option value="prefer-not-to-say">Prefer not to say</option>
              </select>
            </div>
          </div>

          <div>
            <label
              htmlFor="relationship"
              className="block text-sm font-medium text-foreground mb-2"
            >
              Relationship to You
            </label>
            <select className="w-full px-3 py-2 border border-input bg-background rounded-md text-foreground focus:ring-2 focus:ring-ring focus:border-ring">
              <option value="">Select relationship</option>
              <option value="parent">Parent</option>
              <option value="child">Child</option>
              <option value="sibling">Sibling</option>
              <option value="spouse">Spouse/Partner</option>
              <option value="grandparent">Grandparent</option>
              <option value="grandchild">Grandchild</option>
              <option value="aunt-uncle">Aunt/Uncle</option>
              <option value="cousin">Cousin</option>
              <option value="other">Other</option>
            </select>
          </div>

          <div>
            <label
              htmlFor="notes"
              className="block text-sm font-medium text-foreground mb-2"
            >
              Notes (Optional)
            </label>
            <textarea
              id="notes"
              rows={3}
              className="w-full px-3 py-2 border border-input bg-background rounded-md text-foreground focus:ring-2 focus:ring-ring focus:border-ring"
              placeholder="Add any additional notes or information"
            ></textarea>
          </div>

          <div className="flex gap-3 pt-4">
            <button
              type="submit"
              className="bg-primary text-primary-foreground px-6 py-2 rounded-md hover:bg-primary/90 transition-colors"
            >
              Add Member
            </button>
            <button
              type="button"
              className="bg-secondary text-secondary-foreground px-6 py-2 rounded-md hover:bg-secondary/80 transition-colors"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
