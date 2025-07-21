import { Mail, Link, Users, Share2, MessageCircle, Copy } from "lucide-react";

export default function InviteFamilyPage() {
  return (
    <>
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-foreground">Invite Family</h1>
        <p className="text-muted-foreground">
          Invite family members to collaborate on your family tree
        </p>
      </div>

      <div className="grid gap-6">
        {/* Quick Invite */}
        <div className="bg-card border border-border rounded-lg p-6">
          <h3 className="text-lg font-semibold text-foreground mb-4">
            Send Invitations
          </h3>
          <div className="space-y-4">
            <div>
              <label
                htmlFor="emails"
                className="block text-sm font-medium text-foreground mb-2"
              >
                Email Addresses
              </label>
              <textarea
                id="emails"
                rows={3}
                className="w-full px-3 py-2 border border-input bg-background rounded-md text-foreground focus:ring-2 focus:ring-ring focus:border-ring"
                placeholder="Enter email addresses separated by commas&#10;example: john@email.com, jane@email.com, bob@email.com"
              ></textarea>
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-foreground mb-2"
              >
                Personal Message (Optional)
              </label>
              <textarea
                id="message"
                rows={3}
                className="w-full px-3 py-2 border border-input bg-background rounded-md text-foreground focus:ring-2 focus:ring-ring focus:border-ring"
                placeholder="Add a personal message to your invitation..."
              ></textarea>
            </div>

            <button className="bg-primary text-primary-foreground px-6 py-2 rounded-md hover:bg-primary/90 transition-colors flex items-center gap-2">
              <Mail className="w-4 h-4" />
              Send Invitations
            </button>
          </div>
        </div>

        {/* Invitation Methods */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Email Invite */}
          <div className="bg-card border border-border rounded-lg p-6 hover:shadow-lg transition-shadow cursor-pointer">
            <div className="w-12 h-12 bg-blue-500/10 rounded-lg flex items-center justify-center mb-4">
              <Mail className="w-6 h-6 text-blue-600" />
            </div>
            <h3 className="font-semibold text-foreground mb-2">Email Invite</h3>
            <p className="text-sm text-muted-foreground mb-4">
              Send personalized email invitations
            </p>
            <span className="text-xs bg-blue-500/10 text-blue-600 px-2 py-1 rounded">
              Most popular
            </span>
          </div>

          {/* Share Link */}
          <div className="bg-card border border-border rounded-lg p-6 hover:shadow-lg transition-shadow cursor-pointer">
            <div className="w-12 h-12 bg-green-500/10 rounded-lg flex items-center justify-center mb-4">
              <Link className="w-6 h-6 text-green-600" />
            </div>
            <h3 className="font-semibold text-foreground mb-2">Share Link</h3>
            <p className="text-sm text-muted-foreground mb-4">
              Generate a shareable invitation link
            </p>
            <span className="text-xs bg-green-500/10 text-green-600 px-2 py-1 rounded">
              Quick & easy
            </span>
          </div>

          {/* Bulk Import */}
          <div className="bg-card border border-border rounded-lg p-6 hover:shadow-lg transition-shadow cursor-pointer">
            <div className="w-12 h-12 bg-purple-500/10 rounded-lg flex items-center justify-center mb-4">
              <Users className="w-6 h-6 text-purple-600" />
            </div>
            <h3 className="font-semibold text-foreground mb-2">Bulk Import</h3>
            <p className="text-sm text-muted-foreground mb-4">
              Import contacts from CSV file
            </p>
            <span className="text-xs bg-purple-500/10 text-purple-600 px-2 py-1 rounded">
              For large families
            </span>
          </div>
        </div>

        {/* Share Link Section */}
        <div className="bg-card border border-border rounded-lg p-6">
          <h3 className="text-lg font-semibold text-foreground mb-4">
            Invitation Link
          </h3>
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <input
                type="text"
                value="https://famlink.app/invite/abc123xyz"
                readOnly
                className="flex-1 px-3 py-2 border border-input bg-secondary rounded-md text-foreground"
              />
              <button className="bg-secondary text-secondary-foreground px-4 py-2 rounded-md hover:bg-secondary/80 transition-colors flex items-center gap-2">
                <Copy className="w-4 h-4" />
                Copy
              </button>
            </div>

            <div className="flex gap-3">
              <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition-colors flex items-center gap-2">
                <Share2 className="w-4 h-4" />
                Share via Social
              </button>
              <button className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 transition-colors flex items-center gap-2">
                <MessageCircle className="w-4 h-4" />
                Share via WhatsApp
              </button>
            </div>
          </div>
        </div>

        {/* Pending Invitations */}
        <div className="bg-card border border-border rounded-lg p-6">
          <h3 className="text-lg font-semibold text-foreground mb-4">
            Pending Invitations
          </h3>
          <div className="space-y-3">
            <div className="flex items-center justify-between p-3 bg-secondary/50 rounded-lg">
              <div>
                <div className="text-sm font-medium text-foreground">
                  john.doe@email.com
                </div>
                <div className="text-xs text-muted-foreground">
                  Sent 2 days ago
                </div>
              </div>
              <div className="flex gap-2">
                <button className="text-primary hover:text-primary/80 text-sm">
                  Resend
                </button>
                <button className="text-destructive hover:text-destructive/80 text-sm">
                  Cancel
                </button>
              </div>
            </div>

            <div className="flex items-center justify-between p-3 bg-secondary/50 rounded-lg">
              <div>
                <div className="text-sm font-medium text-foreground">
                  jane.smith@email.com
                </div>
                <div className="text-xs text-muted-foreground">
                  Sent 1 week ago
                </div>
              </div>
              <div className="flex gap-2">
                <button className="text-primary hover:text-primary/80 text-sm">
                  Resend
                </button>
                <button className="text-destructive hover:text-destructive/80 text-sm">
                  Cancel
                </button>
              </div>
            </div>

            <div className="flex items-center justify-between p-3 bg-secondary/50 rounded-lg">
              <div>
                <div className="text-sm font-medium text-foreground">
                  bob.wilson@email.com
                </div>
                <div className="text-xs text-muted-foreground">
                  Sent 3 days ago
                </div>
              </div>
              <div className="flex gap-2">
                <button className="text-primary hover:text-primary/80 text-sm">
                  Resend
                </button>
                <button className="text-destructive hover:text-destructive/80 text-sm">
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
