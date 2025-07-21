import {
  Share2,
  Link,
  Download,
  QrCode,
  Globe,
  Lock,
  Users,
  Mail,
} from "lucide-react";

export default function ShareTreePage() {
  return (
    <>
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-foreground">
          Share Family Tree
        </h1>
        <p className="text-muted-foreground">
          Share your family tree with others or make it publicly accessible
        </p>
      </div>

      <div className="grid gap-6">
        {/* Privacy Settings */}
        <div className="bg-card border border-border rounded-lg p-6">
          <h3 className="text-lg font-semibold text-foreground mb-4">
            Privacy Settings
          </h3>
          <div className="space-y-4">
            <div className="flex items-center justify-between p-4 border border-border rounded-lg">
              <div className="flex items-center gap-3">
                <Lock className="w-5 h-5 text-red-500" />
                <div>
                  <div className="font-medium text-foreground">Private</div>
                  <div className="text-sm text-muted-foreground">
                    Only you and invited members can view
                  </div>
                </div>
              </div>
              <input
                type="radio"
                name="privacy"
                value="private"
                defaultChecked
                className="text-primary"
              />
            </div>

            <div className="flex items-center justify-between p-4 border border-border rounded-lg">
              <div className="flex items-center gap-3">
                <Users className="w-5 h-5 text-yellow-500" />
                <div>
                  <div className="font-medium text-foreground">Family Only</div>
                  <div className="text-sm text-muted-foreground">
                    Shareable with family members via link
                  </div>
                </div>
              </div>
              <input
                type="radio"
                name="privacy"
                value="family"
                className="text-primary"
              />
            </div>

            <div className="flex items-center justify-between p-4 border border-border rounded-lg">
              <div className="flex items-center gap-3">
                <Globe className="w-5 h-5 text-green-500" />
                <div>
                  <div className="font-medium text-foreground">Public</div>
                  <div className="text-sm text-muted-foreground">
                    Anyone with the link can view
                  </div>
                </div>
              </div>
              <input
                type="radio"
                name="privacy"
                value="public"
                className="text-primary"
              />
            </div>
          </div>
        </div>

        {/* Sharing Options */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Share Link */}
          <div className="bg-card border border-border rounded-lg p-6 hover:shadow-lg transition-shadow cursor-pointer">
            <div className="w-12 h-12 bg-blue-500/10 rounded-lg flex items-center justify-center mb-4">
              <Link className="w-6 h-6 text-blue-600" />
            </div>
            <h3 className="font-semibold text-foreground mb-2">Share Link</h3>
            <p className="text-sm text-muted-foreground mb-4">
              Generate a shareable link
            </p>
            <span className="text-xs bg-blue-500/10 text-blue-600 px-2 py-1 rounded">
              Quick share
            </span>
          </div>

          {/* QR Code */}
          <div className="bg-card border border-border rounded-lg p-6 hover:shadow-lg transition-shadow cursor-pointer">
            <div className="w-12 h-12 bg-purple-500/10 rounded-lg flex items-center justify-center mb-4">
              <QrCode className="w-6 h-6 text-purple-600" />
            </div>
            <h3 className="font-semibold text-foreground mb-2">QR Code</h3>
            <p className="text-sm text-muted-foreground mb-4">
              Generate QR code for easy access
            </p>
            <span className="text-xs bg-purple-500/10 text-purple-600 px-2 py-1 rounded">
              Mobile friendly
            </span>
          </div>

          {/* Download */}
          <div className="bg-card border border-border rounded-lg p-6 hover:shadow-lg transition-shadow cursor-pointer">
            <div className="w-12 h-12 bg-green-500/10 rounded-lg flex items-center justify-center mb-4">
              <Download className="w-6 h-6 text-green-600" />
            </div>
            <h3 className="font-semibold text-foreground mb-2">Download</h3>
            <p className="text-sm text-muted-foreground mb-4">
              Export as PDF or image
            </p>
            <span className="text-xs bg-green-500/10 text-green-600 px-2 py-1 rounded">
              Offline sharing
            </span>
          </div>

          {/* Email Share */}
          <div className="bg-card border border-border rounded-lg p-6 hover:shadow-lg transition-shadow cursor-pointer">
            <div className="w-12 h-12 bg-orange-500/10 rounded-lg flex items-center justify-center mb-4">
              <Mail className="w-6 h-6 text-orange-600" />
            </div>
            <h3 className="font-semibold text-foreground mb-2">Email</h3>
            <p className="text-sm text-muted-foreground mb-4">Send via email</p>
            <span className="text-xs bg-orange-500/10 text-orange-600 px-2 py-1 rounded">
              Direct delivery
            </span>
          </div>
        </div>

        {/* Current Share Link */}
        <div className="bg-card border border-border rounded-lg p-6">
          <h3 className="text-lg font-semibold text-foreground mb-4">
            Current Share Link
          </h3>
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <input
                type="text"
                value="https://famlink.app/tree/share/abc123xyz"
                readOnly
                className="flex-1 px-3 py-2 border border-input bg-secondary rounded-md text-foreground"
              />
              <button className="bg-secondary text-secondary-foreground px-4 py-2 rounded-md hover:bg-secondary/80 transition-colors">
                Copy Link
              </button>
            </div>

            <div className="flex items-center gap-4 text-sm text-muted-foreground">
              <span>🔒 Private</span>
              <span>👥 3 viewers</span>
              <span>📅 Created 2 days ago</span>
            </div>

            <div className="flex gap-3">
              <button className="bg-primary text-primary-foreground px-4 py-2 rounded-md hover:bg-primary/90 transition-colors">
                Generate New Link
              </button>
              <button className="bg-destructive text-destructive-foreground px-4 py-2 rounded-md hover:bg-destructive/90 transition-colors">
                Disable Link
              </button>
            </div>
          </div>
        </div>

        {/* Share Analytics */}
        <div className="bg-card border border-border rounded-lg p-6">
          <h3 className="text-lg font-semibold text-foreground mb-4">
            Share Analytics
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="text-center p-4 bg-secondary/50 rounded-lg">
              <div className="text-2xl font-bold text-foreground">127</div>
              <div className="text-sm text-muted-foreground">Total Views</div>
            </div>
            <div className="text-center p-4 bg-secondary/50 rounded-lg">
              <div className="text-2xl font-bold text-foreground">23</div>
              <div className="text-sm text-muted-foreground">
                Unique Visitors
              </div>
            </div>
            <div className="text-center p-4 bg-secondary/50 rounded-lg">
              <div className="text-2xl font-bold text-foreground">5</div>
              <div className="text-sm text-muted-foreground">Shares</div>
            </div>
          </div>
        </div>

        {/* Recent Activity */}
        <div className="bg-card border border-border rounded-lg p-6">
          <h3 className="text-lg font-semibold text-foreground mb-4">
            Recent Activity
          </h3>
          <div className="space-y-3">
            <div className="flex items-center justify-between p-3 bg-secondary/50 rounded-lg">
              <div>
                <div className="text-sm font-medium text-foreground">
                  Jane viewed your family tree
                </div>
                <div className="text-xs text-muted-foreground">2 hours ago</div>
              </div>
              <span className="text-xs bg-blue-500/10 text-blue-600 px-2 py-1 rounded">
                View
              </span>
            </div>

            <div className="flex items-center justify-between p-3 bg-secondary/50 rounded-lg">
              <div>
                <div className="text-sm font-medium text-foreground">
                  Bob shared the tree link
                </div>
                <div className="text-xs text-muted-foreground">1 day ago</div>
              </div>
              <span className="text-xs bg-green-500/10 text-green-600 px-2 py-1 rounded">
                Share
              </span>
            </div>

            <div className="flex items-center justify-between p-3 bg-secondary/50 rounded-lg">
              <div>
                <div className="text-sm font-medium text-foreground">
                  Alice downloaded the tree as PDF
                </div>
                <div className="text-xs text-muted-foreground">3 days ago</div>
              </div>
              <span className="text-xs bg-purple-500/10 text-purple-600 px-2 py-1 rounded">
                Download
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
