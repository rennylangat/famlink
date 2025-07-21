"use client";

import {
    Camera,
    Home,
    Settings,
    Share2,
    TreePine,
    UserPlus,
    Users,
} from "lucide-react";
import * as React from "react";

import { NavMain } from "@/components/nav-main";
import { NavSecondary } from "@/components/nav-secondary";
import { NavUser } from "@/components/nav-user";
import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarHeader,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
} from "@/components/ui/sidebar";

const data = {
  user: {
    name: "Bryce Cee",
    email: "bryce@familytree.com",
    avatar:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=80&q=60",
  },
  navMain: [
    {
      title: "Dashboard",
      url: "/dashboard",
      icon: Home,
      isActive: true,
    },
    {
      title: "Family Tree",
      url: "/dashboard/family",
      icon: TreePine,
      items: [
        {
          title: "View Tree",
          url: "/dashboard/family/tree",
        },
        {
          title: "Add Member",
          url: "/dashboard/family/add-member",
        },
        {
          title: "Relationships",
          url: "/dashboard/family/relationships",
        },
      ],
    },
    {
      title: "Members",
      url: "/dashboard/members",
      icon: Users,
      items: [
        {
          title: "All Members",
          url: "/dashboard/members",
        },
        {
          title: "Living",
          url: "/dashboard/members/living",
        },
        {
          title: "Deceased",
          url: "/dashboard/members/deceased",
        },
        {
          title: "Search",
          url: "/dashboard/members/search",
        },
      ],
    },
    {
      title: "Memories",
      url: "/dashboard/memories",
      icon: Camera,
      items: [
        {
          title: "Photos",
          url: "/dashboard/memories/photos",
        },
        {
          title: "Documents",
          url: "/dashboard/memories/documents",
        },
        {
          title: "Stories",
          url: "/dashboard/memories/stories",
        },
        {
          title: "Timeline",
          url: "/dashboard/memories/timeline",
        },
      ],
    },
    {
      title: "Settings",
      url: "/dashboard/settings",
      icon: Settings,
      items: [
        {
          title: "Profile",
          url: "/dashboard/settings/profile",
        },
        {
          title: "Privacy",
          url: "/dashboard/settings/privacy",
        },
        {
          title: "Notifications",
          url: "/dashboard/settings/notifications",
        },
        {
          title: "Family Settings",
          url: "/dashboard/settings/family",
        },
      ],
    },
  ],
  navSecondary: [
    {
      title: "Invite Family",
      url: "/dashboard/invite-family",
      icon: UserPlus,
    },
    {
      title: "Share Tree",
      url: "/dashboard/share-tree",
      icon: Share2,
    },
  ],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar variant="inset" {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size="lg" asChild>
              <a href="/dashboard">
                <div className="bg-sidebar-primary text-sidebar-primary-foreground flex aspect-square size-8 items-center justify-center rounded-lg">
                  <TreePine className="size-4" />
                </div>
                <div className="grid flex-1 text-left text-sm leading-tight">
                  <span className="truncate font-medium">Famlink</span>
                  <span className="truncate text-xs">Your Heritage</span>
                </div>
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
      </SidebarContent>
      <SidebarFooter>
        <NavSecondary items={data.navSecondary} className="mt-auto" />
        <NavUser user={data.user} />
      </SidebarFooter>
    </Sidebar>
  );
}
