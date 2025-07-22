'use client';

import {
  Users,
  TreePine,
  Camera,
  Settings,
  Home,
  Share2,
  UserPlus,
} from 'lucide-react';
import * as React from 'react';

import { NavMain } from '@/components/nav-main';
import { NavSecondary } from '@/components/nav-secondary';
import { NavUser } from '@/components/nav-user';
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from '@/components/ui/sidebar';

const data = {
  user: {
    name: 'Bryce Cee',
    email: 'bryce@familytree.com',
    avatar:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=80&q=60',
  },
  navMain: [
    {
      title: 'Home',
      url: '/home',
      icon: Home,
      isActive: true,
    },
    {
      title: 'Family Tree',
      url: '/home/family',
      icon: TreePine,
      items: [
        {
          title: 'View Tree',
          url: '/home/family/tree',
        },
        {
          title: 'Add Member',
          url: '/home/family/add-member',
        },
        {
          title: 'Relationships',
          url: '/home/family/relationships',
        },
      ],
    },
    {
      title: 'Members',
      url: '/home/members',
      icon: Users,
      items: [
        {
          title: 'All Members',
          url: '/home/members',
        },
        {
          title: 'Living',
          url: '/home/members/living',
        },
        {
          title: 'Deceased',
          url: '/home/members/deceased',
        },
        {
          title: 'Search',
          url: '/home/members/search',
        },
      ],
    },
    {
      title: 'Memories',
      url: '/home/memories',
      icon: Camera,
      items: [
        {
          title: 'Photos',
          url: '/home/memories/photos',
        },
        {
          title: 'Documents',
          url: '/home/memories/documents',
        },
        {
          title: 'Stories',
          url: '/home/memories/stories',
        },
        {
          title: 'Timeline',
          url: '/home/memories/timeline',
        },
      ],
    },
    {
      title: 'Settings',
      url: '/home/settings',
      icon: Settings,
      items: [
        {
          title: 'Profile',
          url: '/home/settings/profile',
        },
        {
          title: 'Privacy',
          url: '/home/settings/privacy',
        },
        {
          title: 'Notifications',
          url: '/home/settings/notifications',
        },
        {
          title: 'Family Settings',
          url: '/home/settings/family',
        },
      ],
    },
  ],
  navSecondary: [
    {
      title: 'Invite Family',
      url: '/home/invite-family',
      icon: UserPlus,
    },
    {
      title: 'Share Tree',
      url: '/home/share-tree',
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
              <a href="/home">
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
