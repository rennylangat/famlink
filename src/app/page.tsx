'use client';

import Image from 'next/image';
import { SignUpButton, useUser } from '@clerk/nextjs';
import { Heart, Home as HomeIcon, Camera } from 'lucide-react';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

export default function Home() {
  const [year, setYear] = useState('');
  const { isSignedIn, isLoaded } = useUser();
  const router = useRouter();

  useEffect(() => {
    setYear(new Date().getFullYear().toString());
  }, []);

  useEffect(() => {
    if (isLoaded && isSignedIn) {
      router.push('/dashboard');
    }
  }, [isLoaded, isSignedIn, router]);

  // Show loading state while checking authentication
  if (!isLoaded) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#0f172a]">
        <div className="text-slate-100 text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-green-500 mx-auto mb-4"></div>
          <p>Loading...</p>
        </div>
      </div>
    );
  }

  // If user is signed in, don't render the landing page (redirect will happen)
  if (isSignedIn) {
    return null;
  }

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#0f172a] text-slate-100 font-sans">
      <section className="flex-1 flex items-center">
        <div className="max-w-7xl mx-auto px-6 md:px-10 py-16 grid md:grid-cols-2 gap-10 place-items-center">
          <div className="space-y-6 animate-fadeIn delay-150">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-slate-100">
              Welcome Home,
              <br className="hidden sm:block" /> Cherish Your Family Roots
            </h1>
            <p className="text-lg md:text-xl text-slate-300">
              Build a beautiful, interactive family tree, preserve precious
              memories, and celebrate your loved ones—together.
            </p>
            <div className="flex space-x-4">
              <SignUpButton>
                <button className="inline-flex items-center bg-green-500 text-white font-medium rounded-full px-6 py-3 hover:bg-green-600 transition shadow-lg">
                  Get Started Free
                </button>
              </SignUpButton>
              <a
                href="#benefits"
                className="inline-flex items-center bg-white text-green-700 font-medium rounded-full px-6 py-3 hover:bg-green-50 transition shadow border border-green-200"
              >
                Learn More
              </a>
            </div>
          </div>
          <div className="w-full h-80 md:h-96 relative animate-fadeIn delay-200 rounded-2xl overflow-hidden shadow-xl">
            <Image
              src="https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&fit=crop&w=900&q=60"
              alt="Family hugging and smiling together"
              fill
              className="absolute inset-0 w-full h-full object-cover rounded-2xl"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a]/70 to-transparent" />
          </div>
        </div>
      </section>

      <section id="benefits" className="py-20 bg-transparent">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-100 text-center animate-fadeIn">
            Why Families Love Family Tree
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-center text-slate-300 animate-fadeIn delay-100">
            Everything you need to keep your family history alive and thriving.
          </p>

          <div className="mt-14 grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
            <div className="group rounded-2xl p-8 bg-[#1e293b]/80 hover:bg-[#334155]/80 transition border border-[#334155] shadow-lg animate-fadeIn delay-150">
              <div className="w-12 h-12 flex items-center justify-center rounded-full bg-green-500/10 text-green-400 mb-6">
                <HomeIcon className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold tracking-tight text-slate-100 mb-2">
                Build Your Family Home
              </h3>
              <p className="text-slate-300 leading-relaxed">
                Map generations and see your family blossom with an intuitive,
                interactive tree.
              </p>
            </div>
            <div className="group rounded-2xl p-8 bg-[#1e293b]/80 hover:bg-[#334155]/80 transition border border-[#334155] shadow-lg animate-fadeIn delay-200">
              <div className="w-12 h-12 flex items-center justify-center rounded-full bg-purple-500/10 text-purple-400 mb-6">
                <Heart className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold tracking-tight text-slate-100 mb-2">
                Share Love &amp; Memories
              </h3>
              <p className="text-slate-300 leading-relaxed">
                Invite family to add stories, photos, and celebrate milestones
                together.
              </p>
            </div>
            <div className="group rounded-2xl p-8 bg-[#1e293b]/80 hover:bg-[#334155]/80 transition border border-[#334155] shadow-lg animate-fadeIn delay-300">
              <div className="w-12 h-12 flex items-center justify-center rounded-full bg-yellow-400/10 text-yellow-300 mb-6">
                <Camera className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold tracking-tight text-slate-100 mb-2">
                Preserve Family Photos
              </h3>
              <p className="text-slate-300 leading-relaxed">
                Keep precious moments safe for generations—upload, organize, and
                relive memories.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-r from-green-900/80 via-purple-900/80 to-green-900/80 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=900&q=60')] opacity-10 mix-blend-overlay"></div>
        <div className="relative z-10 max-w-4xl mx-auto text-center px-6 md:px-10 animate-fadeIn">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
            Invite Your Loved Ones
          </h2>
          <p className="mt-4 text-lg md:text-xl opacity-90">
            Family is better together. Start your family story and invite
            everyone to join.
          </p>
          <SignUpButton>
            <button className="mt-8 inline-flex items-center bg-green-500 text-white font-medium rounded-full px-6 py-3 hover:bg-green-600 transition shadow-lg">
              Sign Up Free
            </button>
          </SignUpButton>
        </div>
      </section>

      <section className="py-16 bg-transparent">
        <div className="max-w-3xl mx-auto px-6 text-center animate-fadeIn">
          <div className="flex flex-col items-center">
            <Image
              src="https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=100&q=60"
              alt="Family testimonial"
              width={80}
              height={80}
              className="rounded-full mb-4 border-4 border-green-400"
            />
            <blockquote className="text-xl text-slate-200 italic mb-2">
              “Family Tree helped us reconnect with distant relatives and
              preserve our family’s story for the next generation.”
            </blockquote>
            <span className="text-green-300 font-semibold">
              — The Johnson Family
            </span>
          </div>
        </div>
      </section>

      <footer className="text-center py-6 text-slate-400 text-sm">
        <span>
          Made with <span className="text-red-400">♥</span> for families
          everywhere. © {year} Family Tree
        </span>
      </footer>
    </div>
  );
}
