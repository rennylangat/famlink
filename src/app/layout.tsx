// src/app/layout.tsx
import type { Metadata } from 'next';
import Link from 'next/link';
import {
  ClerkProvider,
  SignInButton,
  SignUpButton,
  SignedIn,
  SignedOut,
  UserButton,
} from '@clerk/nextjs';
import './globals.css';

export const metadata: Metadata = {
  title: 'Family Tree – Discover Your Roots',
  description:
    'Build your family tree, share memories, and preserve your family legacy.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className="bg-gray-50 text-gray-700 selection:bg-rose-200/60 font-sans min-h-screen flex flex-col">
          {/* NAVBAR */}
          <header className="w-full animate-fadeIn delay-100">
            <div className="max-w-7xl mx-auto px-6 md:px-10 py-6 flex items-center justify-between">
              <Link href="/" className="flex items-center space-x-2">
                <svg
                  className="w-8 h-8 text-rose-600"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M12 2v20M2 12h20" />
                </svg>
                <span className="text-lg font-semibold tracking-tight">
                  Family&nbsp;Tree
                </span>
              </Link>
              <nav className="hidden md:flex space-x-8 text-sm">
                <a href="#benefits" className="hover:text-gray-900">
                  Features
                </a>
                <a href="#footer" className="hover:text-gray-900">
                  Contact
                </a>
              </nav>
              <div className="flex items-center space-x-2">
                <SignedOut>
                  <SignInButton>
                    <button className="inline-flex items-center bg-white text-rose-600 border border-rose-600 font-medium rounded-md px-4 py-2 hover:bg-rose-50 transition shadow-sm">
                      Sign In
                    </button>
                  </SignInButton>
                  <SignUpButton>
                    <button className="inline-flex items-center bg-rose-600 text-white font-medium rounded-md px-4 py-2 hover:bg-rose-700 transition shadow">
                      Sign Up
                    </button>
                  </SignUpButton>
                </SignedOut>
                <SignedIn>
                  <UserButton afterSignOutUrl="/" />
                </SignedIn>
              </div>
            </div>
          </header>
          <main className="flex-1 flex flex-col">{children}</main>
        </body>
      </html>
    </ClerkProvider>
  );
}
