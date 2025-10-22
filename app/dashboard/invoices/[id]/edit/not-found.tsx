"use client";

import React, { useEffect, useRef } from 'react';
import Link from 'next/link';

export default function NotFound() {
  const bgRef = useRef<HTMLDivElement | null>(null);
  const midRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    let raf = 0;

    const onScroll = () => {
      if (raf) cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const y = window.scrollY;
        if (bgRef.current) {
          // background moves slower
          bgRef.current.style.transform = `translateY(${y * 0.15}px)`;
        }
        if (midRef.current) {
          // mid layer moves a bit faster for depth
          midRef.current.style.transform = `translateY(${y * 0.4}px)`;
        }
      });
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <main className="relative flex min-h-screen w-full items-center justify-center bg-gradient-to-b from-slate-900 via-slate-800 to-slate-700 text-white overflow-hidden">
      {/* Background starfield layer */}
      <div
        ref={bgRef}
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top_right,rgba(255,255,255,0.03),transparent_20%),radial-gradient(ellipse_at_bottom_left,rgba(255,255,255,0.02),transparent_10%)]"
        style={{ transform: 'translateY(0px)', transition: 'transform 0.1s linear' }}
      />

      {/* Mid layer with simple stars (slightly brighter) */}
      <div
        ref={midRef}
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-20 bg-[repeating-radial-gradient(#fff0_0_1px,#fff2_ 1px_2px)] opacity-5"
        style={{ transform: 'translateY(0px)', transition: 'transform 0.1s linear' }}
      />

      <div className="container relative mx-auto flex w-full max-w-4xl flex-col items-center px-6 py-24 text-center">
        <div className="mb-6 flex items-center justify-center">
          <span className="mr-4 rounded-md bg-slate-800/60 px-3 py-1 text-sm font-mono text-slate-300">404</span>
          <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl">We couldn’t find the droids you’re looking for</h1>
        </div>

        <p className="max-w-2xl text-lg text-slate-200">
          The invoice you requested may have taken a hyperspace jump. Either the ID is wrong, the
          droid ran off with it, or it never existed. Try returning to the invoices list or create a new one.
        </p>

        {/* Robot / droid illustration (inline SVG) */}
        <div className="my-10 flex items-center justify-center">
          <svg
            width="220"
            height="160"
            viewBox="0 0 220 160"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden
          >
            <defs>
              <linearGradient id="g1" x1="0" x2="1">
                <stop offset="0" stopColor="#94a3b8" />
                <stop offset="1" stopColor="#cbd5e1" />
              </linearGradient>
            </defs>
            <rect x="40" y="40" width="140" height="90" rx="12" fill="url(#g1)" />
            <circle cx="110" cy="70" r="16" fill="#0f172a" opacity="0.9" />
            <circle cx="110" cy="70" r="7" fill="#60a5fa" />
            <rect x="94" y="100" width="32" height="6" rx="3" fill="#0f172a" opacity="0.7" />
            <rect x="54" y="60" width="12" height="6" rx="3" fill="#0f172a" opacity="0.6" />
            <rect x="154" y="60" width="12" height="6" rx="3" fill="#0f172a" opacity="0.6" />
            <rect x="20" y="120" width="40" height="8" rx="4" fill="#94a3b8" />
            <rect x="160" y="120" width="40" height="8" rx="4" fill="#94a3b8" />
            <circle cx="110" cy="70" r="52" stroke="#ffffff10" strokeWidth="2" />
          </svg>
        </div>

        <div className="flex gap-3">
          <Link
            href="/dashboard/invoices"
            className="inline-flex items-center rounded-md bg-sky-500 px-4 py-2 text-sm font-medium text-white shadow hover:bg-sky-400"
          >
            Back to invoices
          </Link>

          <Link
            href="/dashboard/invoices/create"
            className="inline-flex items-center rounded-md bg-transparent px-4 py-2 text-sm font-medium text-slate-200 ring-1 ring-slate-600 hover:bg-slate-800/40"
          >
            Create invoice
          </Link>
        </div>

        <p className="mt-8 text-sm text-slate-400">
          If you expected this invoice to exist, double-check the ID or contact support. May the
          force be with your debugger.
        </p>
      </div>
    </main>
  );
}