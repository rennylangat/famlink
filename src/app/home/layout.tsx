'use client';

import { usePathname } from 'next/navigation';
import { AppSidebar } from '@/components/app-sidebar';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb';
import { Separator } from '@/components/ui/separator';
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from '@/components/ui/sidebar';

interface BreadcrumbData {
  label: string;
  href: string;
  isLast?: boolean;
}

const getBreadcrumbs = (pathname: string): BreadcrumbData[] => {
  const segments = pathname.split('/').filter(Boolean);

  // Remove 'dashboard' from segments as it's always the root
  const pathSegments = segments.slice(1);

  const breadcrumbs: BreadcrumbData[] = [];

  if (pathSegments.length === 0) {
    // Only show "Dashboard" when we're on the dashboard root
    breadcrumbs.push({ label: 'Home', href: '/home', isLast: true });
    return breadcrumbs;
  }

  // Add the root breadcrumb for non-dashboard pages - always use "Home" for consistency
  breadcrumbs.push({ label: 'Home', href: '/home' });

  // Build breadcrumbs based on path
  let currentPath = '/home';

  pathSegments.forEach((segment, index) => {
    currentPath += `/${segment}`;
    const isLast = index === pathSegments.length - 1;

    let label = segment;

    // Convert segments to readable labels
    switch (segment) {
      case 'family':
        label = 'Family Tree';
        break;
      case 'tree':
        label = 'View Tree';
        break;
      case 'add-member':
        label = 'Add Member';
        break;
      case 'relationships':
        label = 'Relationships';
        break;
      case 'members':
        label = 'Members';
        break;
      case 'memories':
        label = 'Memories';
        break;
      case 'settings':
        label = 'Settings';
        break;
      case 'invite-family':
        label = 'Invite Family';
        break;
      case 'share-tree':
        label = 'Share Tree';
        break;
      default:
        label = segment.charAt(0).toUpperCase() + segment.slice(1);
    }

    breadcrumbs.push({
      label,
      href: currentPath,
      isLast,
    });
  });

  return breadcrumbs;
};

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const breadcrumbs = getBreadcrumbs(pathname);

  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <header className="flex h-16 shrink-0 items-center gap-2">
          <div className="flex items-center gap-2 px-4">
            <SidebarTrigger className="-ml-1" />
            <Separator
              orientation="vertical"
              className="mr-2 data-[orientation=vertical]:h-4"
            />
            <Breadcrumb>
              <BreadcrumbList>
                {breadcrumbs.map((breadcrumb, index) => (
                  <div
                    key={`${breadcrumb.href}-${index}`}
                    className="flex items-center gap-2.5"
                  >
                    {index > 0 && (
                      <BreadcrumbSeparator className="hidden md:block" />
                    )}
                    <BreadcrumbItem className="hidden md:block">
                      {breadcrumb.isLast ? (
                        <BreadcrumbPage>{breadcrumb.label}</BreadcrumbPage>
                      ) : (
                        <BreadcrumbLink href={breadcrumb.href}>
                          {breadcrumb.label}
                        </BreadcrumbLink>
                      )}
                    </BreadcrumbItem>
                  </div>
                ))}
              </BreadcrumbList>
            </Breadcrumb>
          </div>
        </header>
        <main className="flex flex-1 flex-col gap-6 p-6 pt-0">{children}</main>
      </SidebarInset>
    </SidebarProvider>
  );
}
