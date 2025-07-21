export default function DashboardPage() {
  return (
    <>
      {/* Quick Stats */}
      <div className="grid auto-rows-min gap-6 md:grid-cols-3">
        <div className="bg-card border border-border rounded-lg p-6 flex flex-col justify-between shadow-sm">
          <div>
            <h3 className="text-2xl font-bold text-foreground">127</h3>
            <p className="text-sm text-muted-foreground">Family Members</p>
          </div>
          <div className="text-xs text-primary font-medium">+3 this month</div>
        </div>
        <div className="bg-card border border-border rounded-lg p-6 flex flex-col justify-between shadow-sm">
          <div>
            <h3 className="text-2xl font-bold text-foreground">5</h3>
            <p className="text-sm text-muted-foreground">Generations</p>
          </div>
          <div className="text-xs text-primary font-medium">
            Complete lineage
          </div>
        </div>
        <div className="bg-card border border-border rounded-lg p-6 flex flex-col justify-between shadow-sm">
          <div>
            <h3 className="text-2xl font-bold text-foreground">342</h3>
            <p className="text-sm text-muted-foreground">Photos & Documents</p>
          </div>
          <div className="text-xs text-primary font-medium">+12 this week</div>
        </div>
      </div>

      {/* Main Content */}
      <div className="grid gap-6 md:grid-cols-2">
        {/* Recent Activity */}
        <div className="bg-card border border-border rounded-lg p-6 shadow-sm">
          <h3 className="text-lg font-semibold mb-4 text-foreground">
            Recent Activity
          </h3>
          <div className="space-y-4">
            <div className="flex items-start gap-3 p-3 rounded-md bg-muted/30">
              <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
              <div className="text-sm text-muted-foreground">
                <span className="font-medium text-foreground">
                  Sarah Johnson
                </span>{" "}
                added new photos to
                <span className="font-medium text-foreground">
                  {" "}
                  Grandma Rose's
                </span>{" "}
                profile
              </div>
            </div>
            <div className="flex items-start gap-3 p-3 rounded-md bg-muted/30">
              <div className="w-2 h-2 bg-chart-2 rounded-full mt-2"></div>
              <div className="text-sm text-muted-foreground">
                <span className="font-medium text-foreground">Mike Chen</span>{" "}
                joined the family tree
              </div>
            </div>
            <div className="flex items-start gap-3 p-3 rounded-md bg-muted/30">
              <div className="w-2 h-2 bg-chart-3 rounded-full mt-2"></div>
              <div className="text-sm text-muted-foreground">
                <span className="font-medium text-foreground">Emma Davis</span>{" "}
                updated
                <span className="font-medium text-foreground">
                  {" "}
                  Uncle Tom's
                </span>{" "}
                birth information
              </div>
            </div>
            <div className="flex items-start gap-3 p-3 rounded-md bg-muted/30">
              <div className="w-2 h-2 bg-chart-4 rounded-full mt-2"></div>
              <div className="text-sm text-muted-foreground">
                <span className="font-medium text-foreground">You</span> added a
                new branch for the
                <span className="font-medium text-foreground">
                  {" "}
                  Wilson family
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="bg-card border border-border rounded-lg p-6 shadow-sm">
          <h3 className="text-lg font-semibold mb-4 text-foreground">
            Quick Actions
          </h3>
          <div className="grid gap-3">
            <button className="flex items-center gap-3 p-4 rounded-lg bg-muted/50 hover:bg-muted transition-colors text-left border border-border/50">
              <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                <span className="text-primary text-lg">+</span>
              </div>
              <div>
                <div className="font-medium text-sm text-foreground">
                  Add Family Member
                </div>
                <div className="text-xs text-muted-foreground">
                  Expand your tree
                </div>
              </div>
            </button>
            <button className="flex items-center gap-3 p-4 rounded-lg bg-muted/50 hover:bg-muted transition-colors text-left border border-border/50">
              <div className="w-10 h-10 bg-chart-2/10 rounded-full flex items-center justify-center">
                <span className="text-chart-2 text-sm">📷</span>
              </div>
              <div>
                <div className="font-medium text-sm text-foreground">
                  Upload Photos
                </div>
                <div className="text-xs text-muted-foreground">
                  Share memories
                </div>
              </div>
            </button>
            <button className="flex items-center gap-3 p-4 rounded-lg bg-muted/50 hover:bg-muted transition-colors text-left border border-border/50">
              <div className="w-10 h-10 bg-chart-3/10 rounded-full flex items-center justify-center">
                <span className="text-chart-3 text-sm">🌳</span>
              </div>
              <div>
                <div className="font-medium text-sm text-foreground">
                  View Family Tree
                </div>
                <div className="text-xs text-muted-foreground">
                  Interactive visualization
                </div>
              </div>
            </button>
            <button className="flex items-center gap-3 p-4 rounded-lg bg-muted/50 hover:bg-muted transition-colors text-left border border-border/50">
              <div className="w-10 h-10 bg-chart-4/10 rounded-full flex items-center justify-center">
                <span className="text-chart-4 text-sm">📤</span>
              </div>
              <div>
                <div className="font-medium text-sm text-foreground">
                  Invite Family
                </div>
                <div className="text-xs text-muted-foreground">
                  Share your tree
                </div>
              </div>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
