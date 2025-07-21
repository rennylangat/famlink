import {
  Camera,
  Video,
  FileText,
  Calendar,
  MapPin,
  Upload,
} from "lucide-react";

export default function MemoriesPage() {
  return (
    <>
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-foreground">Family Memories</h1>
        <p className="text-muted-foreground">
          Preserve and share your family's precious moments
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Photos */}
        <div className="bg-card border border-border rounded-lg p-6 hover:shadow-lg transition-shadow cursor-pointer">
          <div className="w-12 h-12 bg-blue-500/10 rounded-lg flex items-center justify-center mb-4">
            <Camera className="w-6 h-6 text-blue-600" />
          </div>
          <h3 className="font-semibold text-foreground mb-2">Photos</h3>
          <p className="text-sm text-muted-foreground mb-4">
            Family photos and portraits
          </p>
          <span className="text-xs bg-blue-500/10 text-blue-600 px-2 py-1 rounded">
            142 photos
          </span>
        </div>

        {/* Videos */}
        <div className="bg-card border border-border rounded-lg p-6 hover:shadow-lg transition-shadow cursor-pointer">
          <div className="w-12 h-12 bg-red-500/10 rounded-lg flex items-center justify-center mb-4">
            <Video className="w-6 h-6 text-red-600" />
          </div>
          <h3 className="font-semibold text-foreground mb-2">Videos</h3>
          <p className="text-sm text-muted-foreground mb-4">
            Family videos and recordings
          </p>
          <span className="text-xs bg-red-500/10 text-red-600 px-2 py-1 rounded">
            23 videos
          </span>
        </div>

        {/* Documents */}
        <div className="bg-card border border-border rounded-lg p-6 hover:shadow-lg transition-shadow cursor-pointer">
          <div className="w-12 h-12 bg-green-500/10 rounded-lg flex items-center justify-center mb-4">
            <FileText className="w-6 h-6 text-green-600" />
          </div>
          <h3 className="font-semibold text-foreground mb-2">Documents</h3>
          <p className="text-sm text-muted-foreground mb-4">
            Certificates, letters, and records
          </p>
          <span className="text-xs bg-green-500/10 text-green-600 px-2 py-1 rounded">
            67 documents
          </span>
        </div>

        {/* Timeline */}
        <div className="bg-card border border-border rounded-lg p-6 hover:shadow-lg transition-shadow cursor-pointer">
          <div className="w-12 h-12 bg-purple-500/10 rounded-lg flex items-center justify-center mb-4">
            <Calendar className="w-6 h-6 text-purple-600" />
          </div>
          <h3 className="font-semibold text-foreground mb-2">Timeline</h3>
          <p className="text-sm text-muted-foreground mb-4">
            Chronological family events
          </p>
          <span className="text-xs bg-purple-500/10 text-purple-600 px-2 py-1 rounded">
            View timeline
          </span>
        </div>

        {/* Locations */}
        <div className="bg-card border border-border rounded-lg p-6 hover:shadow-lg transition-shadow cursor-pointer">
          <div className="w-12 h-12 bg-orange-500/10 rounded-lg flex items-center justify-center mb-4">
            <MapPin className="w-6 h-6 text-orange-600" />
          </div>
          <h3 className="font-semibold text-foreground mb-2">Locations</h3>
          <p className="text-sm text-muted-foreground mb-4">
            Family places and landmarks
          </p>
          <span className="text-xs bg-orange-500/10 text-orange-600 px-2 py-1 rounded">
            15 locations
          </span>
        </div>

        {/* Upload New */}
        <div className="bg-card border border-border rounded-lg p-6 hover:shadow-lg transition-shadow cursor-pointer">
          <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
            <Upload className="w-6 h-6 text-primary" />
          </div>
          <h3 className="font-semibold text-foreground mb-2">Upload</h3>
          <p className="text-sm text-muted-foreground mb-4">Add new memories</p>
          <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded">
            Add memories
          </span>
        </div>

        {/* Recent Memories */}
        <div className="col-span-full bg-card border border-border rounded-lg p-6">
          <h3 className="font-semibold text-foreground mb-4">
            Recent Memories
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-secondary/50 rounded-lg p-4">
              <div className="w-full h-32 bg-secondary rounded mb-3 flex items-center justify-center">
                <Camera className="w-8 h-8 text-muted-foreground" />
              </div>
              <h4 className="font-medium text-foreground text-sm">
                Family Reunion 2024
              </h4>
              <p className="text-xs text-muted-foreground">Added 2 days ago</p>
            </div>
            <div className="bg-secondary/50 rounded-lg p-4">
              <div className="w-full h-32 bg-secondary rounded mb-3 flex items-center justify-center">
                <Video className="w-8 h-8 text-muted-foreground" />
              </div>
              <h4 className="font-medium text-foreground text-sm">
                Birthday Celebration
              </h4>
              <p className="text-xs text-muted-foreground">Added 1 week ago</p>
            </div>
            <div className="bg-secondary/50 rounded-lg p-4">
              <div className="w-full h-32 bg-secondary rounded mb-3 flex items-center justify-center">
                <FileText className="w-8 h-8 text-muted-foreground" />
              </div>
              <h4 className="font-medium text-foreground text-sm">
                Marriage Certificate
              </h4>
              <p className="text-xs text-muted-foreground">Added 2 weeks ago</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
