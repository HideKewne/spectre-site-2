'use client';

import React from 'react';

// --- Large Wireframe Globe (for background behind INFO section) ---
const WireframeGlobeLarge = () => (
  <svg viewBox="0 0 200 200" className="w-full h-full" fill="none" stroke="white" strokeWidth="0.8">
    <circle cx="100" cy="100" r="95" />
    <ellipse cx="100" cy="100" rx="95" ry="25" />
    <ellipse cx="100" cy="100" rx="95" ry="45" />
    <ellipse cx="100" cy="100" rx="95" ry="65" />
    <ellipse cx="100" cy="100" rx="95" ry="85" />
    <ellipse cx="100" cy="100" rx="25" ry="95" />
    <ellipse cx="100" cy="100" rx="45" ry="95" />
    <ellipse cx="100" cy="100" rx="65" ry="95" />
    <ellipse cx="100" cy="100" rx="85" ry="95" />
    <line x1="100" y1="5" x2="100" y2="195" />
    <line x1="5" y1="100" x2="195" y2="100" />
  </svg>
);

// --- Monitor Icon with code lines and music note ---
const MonitorIcon = () => (
  <svg viewBox="0 0 100 80" className="w-24 h-20" fill="none" stroke="white" strokeWidth="2">
    {/* Monitor frame */}
    <rect x="5" y="5" width="90" height="55" rx="3" />
    {/* Inner screen border */}
    <rect x="10" y="10" width="80" height="45" rx="2" strokeWidth="1" opacity="0.5" />
    {/* Code lines */}
    <line x1="18" y1="20" x2="55" y2="20" strokeWidth="2" opacity="0.8" />
    <line x1="18" y1="28" x2="45" y2="28" strokeWidth="2" opacity="0.6" />
    <line x1="18" y1="36" x2="60" y2="36" strokeWidth="2" opacity="0.6" />
    <line x1="18" y1="44" x2="38" y2="44" strokeWidth="2" opacity="0.6" />
    {/* Music note */}
    <circle cx="75" cy="42" r="5" fill="white" stroke="none" />
    <line x1="80" y1="42" x2="80" y2="22" strokeWidth="2.5" />
    <path d="M80 22 Q88 25 80 30" strokeWidth="2" fill="none" />
    {/* Stand */}
    <line x1="50" y1="60" x2="50" y2="70" strokeWidth="2.5" />
    <line x1="32" y1="70" x2="68" y2="70" strokeWidth="2.5" />
  </svg>
);

// --- Globe Icon for Info (with ..info.. text inside) ---
const GlobeInfoIcon = () => (
  <svg viewBox="0 0 90 90" className="w-20 h-20" fill="none" stroke="white" strokeWidth="1.5">
    <circle cx="45" cy="45" r="40" />
    <ellipse cx="45" cy="45" rx="40" ry="16" />
    <ellipse cx="45" cy="45" rx="16" ry="40" />
    <line x1="45" y1="5" x2="45" y2="85" strokeWidth="1" opacity="0.7" />
    <line x1="5" y1="45" x2="85" y2="45" strokeWidth="1" opacity="0.7" />
    {/* ..info.. text */}
    <text x="45" y="49" textAnchor="middle" fill="white" fontSize="10" fontFamily="monospace" opacity="0.8">..info..</text>
  </svg>
);

// --- Calendar with Alien Face ---
const CalendarAlienIcon = () => (
  <svg viewBox="0 0 80 90" className="w-20 h-22" fill="none" stroke="white" strokeWidth="2">
    {/* Calendar body */}
    <rect x="5" y="18" width="70" height="62" rx="4" />
    {/* Top divider line */}
    <line x1="5" y1="32" x2="75" y2="32" />
    {/* Calendar rings */}
    <line x1="22" y1="8" x2="22" y2="25" strokeWidth="4" strokeLinecap="round" />
    <line x1="58" y1="8" x2="58" y2="25" strokeWidth="4" strokeLinecap="round" />
    {/* Alien face */}
    <ellipse cx="40" cy="57" rx="22" ry="17" fill="white" stroke="none" />
    {/* Alien eyes - large almond shape */}
    <ellipse cx="32" cy="54" rx="6" ry="8" fill="black" />
    <ellipse cx="48" cy="54" rx="6" ry="8" fill="black" />
    {/* Alien mouth - small oval */}
    <ellipse cx="40" cy="68" rx="4" ry="3" fill="black" />
  </svg>
);

// --- Mascot Head (3 eyes, heart-ish shape with crosshair) ---
const MascotHead = () => (
  <svg viewBox="0 0 110 100" className="w-28 h-24" fill="none">
    {/* Head outline - rounded heart-ish shape */}
    <path
      d="M55 5 Q20 5 14 35 Q5 55 12 78 Q22 98 55 98 Q88 98 98 78 Q105 55 96 35 Q90 5 55 5"
      stroke="white"
      strokeWidth="2.5"
      fill="none"
    />
    {/* Crosshair target on forehead */}
    <circle cx="55" cy="28" r="10" stroke="white" strokeWidth="1.5" fill="none" />
    <line x1="55" y1="15" x2="55" y2="41" stroke="white" strokeWidth="1.5" />
    <line x1="42" y1="28" x2="68" y2="28" stroke="white" strokeWidth="1.5" />
    {/* Three eyes with green pupils */}
    {/* Left eye */}
    <circle cx="32" cy="58" r="14" fill="black" stroke="white" strokeWidth="2" />
    <circle cx="32" cy="58" r="6" fill="#26ff6a" />
    {/* Middle eye */}
    <circle cx="55" cy="65" r="14" fill="black" stroke="white" strokeWidth="2" />
    <circle cx="55" cy="65" r="6" fill="#26ff6a" />
    {/* Right eye */}
    <circle cx="78" cy="58" r="14" fill="black" stroke="white" strokeWidth="2" />
    <circle cx="78" cy="58" r="6" fill="#26ff6a" />
  </svg>
);

// --- Main Component ---
export default function SpectreLandingPage() {
  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      {/* Noise texture overlay */}
      <div
        className="fixed inset-0 opacity-[0.02] pointer-events-none z-50"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`
        }}
      />

      <div className="relative mx-auto flex flex-col min-h-screen max-w-5xl px-4 py-8 md:px-8">

        {/* === HERO / LOGO SECTION === */}
        <section className="relative flex flex-col items-center pt-2 pb-8">
          {/* SPECTRE Logo with glow */}
          <div className="relative w-full max-w-2xl">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/assets/spectre-logo-green.png"
              alt="SPECTRE"
              className="mx-auto w-full drop-shadow-[0_0_60px_rgba(38,255,106,0.5)]"
            />
          </div>
        </section>

        {/* === TRI-NAV SECTION === */}
        <section className="relative py-6">
          {/* Navigation titles and icons row */}
          <div className="flex justify-center items-start gap-12 md:gap-20 lg:gap-28">

            {/* WEB SHOP */}
            <div className="flex flex-col items-center gap-4 cursor-pointer group">
              <h2 className="font-rajdhani text-lg md:text-2xl font-bold tracking-[0.15em] group-hover:text-[#26ff6a] transition-colors">
                WEB SHOP
              </h2>
              <div className="group-hover:drop-shadow-[0_0_15px_rgba(38,255,106,0.6)] transition-all">
                <MonitorIcon />
              </div>
            </div>

            {/* INFO - with large wireframe globe behind */}
            <div className="flex flex-col items-center gap-4 cursor-pointer group relative">
              <h2 className="font-rajdhani text-lg md:text-2xl font-bold tracking-[0.15em] group-hover:text-[#26ff6a] transition-colors">
                INFO
              </h2>
              <div className="relative">
                {/* Large wireframe globe background */}
                <div className="absolute -inset-6 md:-inset-10 flex items-center justify-center opacity-30">
                  <div className="w-36 h-36 md:w-48 md:h-48">
                    <WireframeGlobeLarge />
                  </div>
                </div>
                <div className="relative z-10 group-hover:drop-shadow-[0_0_15px_rgba(38,255,106,0.6)] transition-all">
                  <GlobeInfoIcon />
                </div>
              </div>
            </div>

            {/* BOOKING */}
            <div className="flex flex-col items-center gap-4 cursor-pointer group">
              <h2 className="font-rajdhani text-lg md:text-2xl font-bold tracking-[0.15em] group-hover:text-[#26ff6a] transition-colors">
                BOOKING
              </h2>
              <div className="group-hover:drop-shadow-[0_0_15px_rgba(38,255,106,0.6)] transition-all">
                <CalendarAlienIcon />
              </div>
            </div>
          </div>
        </section>

        {/* Spacer to push promo band down */}
        <div className="flex-1" />

        {/* === PROMO BAND SECTION === */}
        <section className="relative py-6 border-t border-white/20">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-4">

            {/* Left: Mascot Head */}
            <div className="flex-shrink-0 order-1 md:order-1">
              <MascotHead />
            </div>

            {/* Center: Shop The Future Box */}
            <div className="flex-shrink-0 order-2 md:order-2">
              <div className="relative border border-white/50 px-10 py-6 text-center">
                {/* Corner decorations */}
                <div className="absolute -top-[3px] -left-[3px] w-4 h-4 border-t-2 border-l-2 border-white" />
                <div className="absolute -top-[3px] -right-[3px] w-4 h-4 border-t-2 border-r-2 border-white" />
                <div className="absolute -bottom-[3px] -left-[3px] w-4 h-4 border-b-2 border-l-2 border-white" />
                <div className="absolute -bottom-[3px] -right-[3px] w-4 h-4 border-b-2 border-r-2 border-white" />

                {/* Star decoration */}
                <div className="flex justify-center mb-3">
                  <svg viewBox="0 0 24 24" className="w-4 h-4" fill="white">
                    <polygon points="12,0 14,9 24,9 16,15 19,24 12,18 5,24 8,15 0,9 10,9" />
                  </svg>
                </div>

                <h3 className="font-rajdhani text-xl md:text-2xl font-bold tracking-[0.2em] mb-2">
                  SHOP THE FUTURE
                </h3>
                <p className="font-mono text-[9px] uppercase tracking-[0.15em] text-white/60 mb-4">
                  Y2K FASHION &amp; PIXEL GEAR ++
                </p>
                <div className="flex justify-center gap-5 text-white/40 text-sm font-bold tracking-[0.5em]">
                  <span>X</span>
                  <span>X</span>
                  <span>X</span>
                </div>
              </div>
            </div>

            {/* Right: Barcode Chip */}
            <div className="flex-shrink-0 order-3 md:order-3">
              <div className="relative border border-white/40 rounded-lg p-4 w-48">
                {/* Top right decorative elements */}
                <div className="absolute top-2 right-2 flex items-center gap-2">
                  <div className="flex gap-[2px]">
                    <span className="w-1.5 h-1.5 bg-white/50" />
                    <span className="w-2.5 h-1.5 bg-white/50" />
                    <span className="w-1.5 h-1.5 border border-white/50" />
                  </div>
                  <div className="flex gap-1 text-[9px] text-white/50">
                    <span>+</span>
                    <span>†</span>
                    <span>+</span>
                  </div>
                </div>

                {/* Barcode */}
                <div className="h-12 w-full mb-3 mt-4 bg-[repeating-linear-gradient(90deg,white_0,white_2px,transparent_2px,transparent_5px)]" />

                {/* Phone + code */}
                <div className="flex items-center gap-2 text-[10px] text-white/60 font-mono">
                  <span className="inline-flex h-5 w-5 items-center justify-center rounded-full border border-white/50 text-[9px]">
                    ☎
                  </span>
                  <span>8841387400800-00</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* === FOOTER === */}
        <footer className="py-4 border-t border-white/20">
          <div className="flex items-center justify-between text-[8px] font-mono uppercase tracking-[0.12em] text-white/40">
            <div className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-[#26ff6a]" />
              <span>SPECTRE SYSTEM v2.6 // y2k (stylé)</span>
            </div>
            <div className="flex items-center gap-3 text-white/50">
              <span>X</span>
              <span>X</span>
              <span>X</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="h-3 w-14 bg-[repeating-linear-gradient(90deg,white_0,white_1px,transparent_1px,transparent_3px)] opacity-40" />
              <span>CODE-0077</span>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}
