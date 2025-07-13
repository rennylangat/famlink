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
        <body className="bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#0f172a] text-slate-100 font-sans min-h-screen flex flex-col">
          <header className="w-full animate-fadeIn delay-100 bg-transparent">
            <div className="max-w-7xl mx-auto px-6 md:px-10 py-6 flex items-center justify-between">
              <Link href="/" className="flex items-center space-x-2">
                <svg
                  className="w-8 h-8 text-green-400"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M12 2v20M2 12h20" />
                </svg>
                <span className="text-lg font-semibold tracking-tight text-slate-100">
                  Family&nbsp;Tree
                </span>
              </Link>
              <nav className="hidden md:flex space-x-8 text-sm">
                <a
                  href="#benefits"
                  className="hover:text-green-400 transition-colors"
                >
                  Features
                </a>
                <a
                  href="#footer"
                  className="hover:text-green-400 transition-colors"
                >
                  Contact
                </a>
              </nav>
              <div className="flex items-center space-x-2">
                <SignedOut>
                  <SignInButton>
                    <button className="inline-flex items-center bg-white text-green-700 font-medium rounded-full px-4 py-2 hover:bg-green-50 transition shadow border border-green-200">
                      Sign In
                    </button>
                  </SignInButton>
                  <SignUpButton>
                    <button className="inline-flex items-center bg-green-500 text-white font-medium rounded-full px-4 py-2 hover:bg-green-600 transition shadow">
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
          <footer
            id="footer"
            className="bg-transparent border-t border-slate-800"
          >
            <div className="max-w-7xl mx-auto px-6 md:px-10 py-12 grid md:grid-cols-3 gap-8 text-sm">
              <div>
                <a href="#" className="flex items-center space-x-2">
                  <svg
                    className="w-6 h-6 text-green-400"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M12 2v20M2 12h20" />
                  </svg>
                  <span className="font-medium text-slate-100">
                    Family&nbsp;Tree
                  </span>
                </a>
                <p className="mt-4 text-slate-400">
                  © 2024 Family Tree. All rights reserved.
                </p>
              </div>
              <div>
                <h4 className="font-medium text-slate-100 mb-3">Company</h4>
                <ul className="space-y-2">
                  <li>
                    <a
                      href="#benefits"
                      className="hover:text-green-400 transition-colors"
                    >
                      Features
                    </a>
                  </li>
                  <li>
                    <SignUpButton>
                      <span className="hover:text-green-400 cursor-pointer transition-colors text-slate-100">
                        Sign Up
                      </span>
                    </SignUpButton>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="font-medium text-slate-100 mb-3">Legal</h4>
                <ul className="space-y-2">
                  <li>
                    <a
                      href="#"
                      className="hover:text-green-400 transition-colors"
                    >
                      Privacy
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="hover:text-green-400 transition-colors"
                    >
                      Terms
                    </a>
                  </li>
                  <li>
                    <a
                      href="mailto:support@familytreeapp.com"
                      className="hover:text-green-400 transition-colors"
                    >
                      Contact
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </footer>
        </body>
      </html>
    </ClerkProvider>
  );
}
