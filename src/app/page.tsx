'use client';

import Image from 'next/image';
import { SignUpButton } from '@clerk/nextjs';
import { TreeDeciduous, Share2, BookOpen } from 'lucide-react';
import { useEffect, useState } from 'react';

export default function Home() {
  const [year, setYear] = useState('');
  useEffect(() => {
    setYear(new Date().getFullYear().toString());
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-gray-50 text-gray-700 selection:bg-rose-200/60 font-sans">
      {/* HERO */}
      <section className="flex-1 flex items-center">
        <div className="max-w-7xl mx-auto px-6 md:px-10 py-16 grid md:grid-cols-2 gap-10 place-items-center">
          {/* Text */}
          <div className="space-y-6 animate-slideUp delay-150">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-gray-900">
              Discover Your Roots,
              <br className="hidden sm:block" /> Connect with Family
            </h1>
            <p className="text-lg md:text-xl text-gray-600">
              Build a beautiful, interactive family tree and share cherished
              memories with loved ones—anywhere, anytime.
            </p>
            <div className="flex space-x-4">
              <SignUpButton>
                <button className="inline-flex items-center bg-rose-600 text-white font-medium rounded-md px-6 py-3 hover:bg-rose-700 transition shadow">
                  Get Started Free
                </button>
              </SignUpButton>
              <a
                href="#benefits"
                className="inline-flex items-center text-rose-600 font-medium hover:underline"
              >
                Learn More
              </a>
            </div>
          </div>

          {/* Image */}
          <div className="w-full h-80 md:h-96 relative animate-fadeIn delay-200">
            <Image
              src="https://images.unsplash.com/photo-1487528278747-ba99ed528ebc?auto=format&fit=crop&w=900&q=60"
              alt="Family smiling together"
              fill
              className="absolute inset-0 w-full h-full object-cover rounded-lg shadow-lg ring-1 ring-gray-200/70"
              priority
            />
          </div>
        </div>
      </section>

      {/* BENEFITS */}
      <section id="benefits" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-gray-900 text-center animate-fadeIn">
            Why Families Love Us
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-center text-gray-600 animate-fadeIn delay-100">
            Everything you need to keep your family history alive and thriving.
          </p>

          <div className="mt-14 grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
            {/* Card 1 */}
            <div className="group rounded-lg p-8 bg-gray-50 hover:bg-gray-100 transition border border-gray-100 shadow-sm animate-slideUp delay-150">
              <div className="w-12 h-12 flex items-center justify-center rounded-full bg-rose-100 text-rose-600 mb-6">
                <TreeDeciduous className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold tracking-tight text-gray-900 mb-2">
                Visualize Your Family Tree
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Map generations with an intuitive drag-and-drop interface and
                interactive zoom.
              </p>
            </div>
            {/* Card 2 */}
            <div className="group rounded-lg p-8 bg-gray-50 hover:bg-gray-100 transition border border-gray-100 shadow-sm animate-slideUp delay-200">
              <div className="w-12 h-12 flex items-center justify-center rounded-full bg-rose-100 text-rose-600 mb-6">
                <Share2 className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold tracking-tight text-gray-900 mb-2">
                Share with Relatives
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Invite family members to view, contribute, and celebrate your
                collective heritage.
              </p>
            </div>
            {/* Card 3 */}
            <div className="group rounded-lg p-8 bg-gray-50 hover:bg-gray-100 transition border border-gray-100 shadow-sm animate-slideUp delay-300">
              <div className="w-12 h-12 flex items-center justify-center rounded-full bg-rose-100 text-rose-600 mb-6">
                <BookOpen className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold tracking-tight text-gray-900 mb-2">
                Preserve Family Stories
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Attach photos, documents, and anecdotes so memories never fade
                away.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-rose-600 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1503264116251-35a269479413?auto=format&fit=crop&w=900&q=60')] opacity-20 mix-blend-overlay"></div>
        <div className="relative z-10 max-w-4xl mx-auto text-center px-6 md:px-10 animate-fadeIn">
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">
            Ready to build your legacy?
          </h2>
          <p className="mt-4 text-lg md:text-xl opacity-90">
            Join thousands of families who have already started their journey.
          </p>
          <SignUpButton>
            <button className="mt-8 inline-flex items-center bg-white text-rose-600 font-medium rounded-md px-6 py-3 hover:bg-gray-100 transition shadow">
              Sign Up Free
            </button>
          </SignUpButton>
        </div>
      </section>

      {/* FOOTER */}
      <footer id="footer" className="bg-gray-50 border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-6 md:px-10 py-12 grid md:grid-cols-3 gap-8 text-sm">
          <div>
            <a href="#" className="flex items-center space-x-2">
              <svg
                className="w-6 h-6 text-rose-600"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M12 2v20M2 12h20" />
              </svg>
              <span className="font-medium">Family&nbsp;Tree</span>
            </a>
            <p className="mt-4 text-gray-600">
              © <span>{year}</span> Family Tree. All rights reserved.
            </p>
          </div>
          <div>
            <h4 className="font-medium text-gray-900 mb-3">Company</h4>
            <ul className="space-y-2">
              <li>
                <a href="#benefits" className="hover:underline">
                  Features
                </a>
              </li>
              <li>
                <SignUpButton>
                  <span className="hover:underline cursor-pointer">
                    Sign Up
                  </span>
                </SignUpButton>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-medium text-gray-900 mb-3">Legal</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:underline">
                  Privacy
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Terms
                </a>
              </li>
              <li>
                <a
                  href="mailto:support@familytreeapp.com"
                  className="hover:underline"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </footer>

      {/* Animations */}
      <style jsx global>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.8s ease forwards;
        }
        .animate-slideUp {
          animation: slideUp 0.8s ease forwards;
        }
      `}</style>
    </div>
  );
}
