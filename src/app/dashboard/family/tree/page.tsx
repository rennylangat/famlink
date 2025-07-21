export default function ViewTreePage() {
  return (
    <>
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-foreground">Family Tree View</h1>
        <p className="text-muted-foreground">
          Interactive visualization of your family connections
        </p>
      </div>

      {/* Tree Placeholder */}
      <div className="bg-card border border-border rounded-lg p-8 text-center shadow-sm">
        <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
          <span className="text-primary text-2xl">🌳</span>
        </div>
        <h3 className="text-lg font-semibold text-foreground mb-2">
          Interactive Family Tree
        </h3>
        <p className="text-muted-foreground mb-4">
          Your family tree visualization will appear here
        </p>
        <button className="bg-primary text-primary-foreground px-4 py-2 rounded-md hover:bg-primary/90 transition-colors">
          Load Family Tree
        </button>
      </div>
    </>
  );
}
