import React from 'react';
import Spline from '@splinetool/react-spline';

const Hero = () => {
  return (
    <section className="relative" aria-label="Hero">
      <div className="mx-auto max-w-7xl px-6">
        <div className="relative grid min-h-[78vh] grid-cols-1 items-center gap-10 py-14 md:grid-cols-2 md:py-20">
          {/* Left: Content */}
          <div className="relative z-10 space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/70 backdrop-blur">
              <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>Available for new projects</span>
            </div>
            <h1 className="text-4xl font-semibold leading-tight tracking-tight sm:text-5xl md:text-6xl">
              Designing playful, modern experiences
              <span className="block bg-gradient-to-r from-indigo-400 via-sky-300 to-emerald-300 bg-clip-text text-transparent">for ambitious brands</span>
            </h1>
            <p className="max-w-xl text-white/70">
              I craft interactive portfolios, 3D scenes, and product websites that feel alive. Let’s build something people can’t ignore.
            </p>
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <a href="#work" className="rounded-xl bg-white px-5 py-3 text-sm font-medium text-black transition hover:bg-white/90">See my work</a>
              <a href="#contact" className="rounded-xl border border-white/15 bg-white/5 px-5 py-3 text-sm font-medium text-white/90 backdrop-blur transition hover:bg-white/10">Get in touch</a>
            </div>

            <div className="flex items-center gap-6 pt-6 text-xs text-white/60">
              <span>3D • UI/UX • Motion</span>
              <span className="h-1 w-1 rounded-full bg-white/30" />
              <span>San Francisco, CA</span>
            </div>
          </div>

          {/* Right: Spline Scene */}
          <div className="relative h-[60vh] w-full md:h-[70vh]">
            <div className="absolute inset-0 overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-b from-white/5 to-white/0">
              <Spline scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode" style={{ width: '100%', height: '100%' }} />
              {/* soft glow overlay that doesn't block interaction */}
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
            </div>
          </div>
        </div>
      </div>

      {/* Background accents */}
      <div className="pointer-events-none absolute -top-24 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-indigo-500/20 blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 right-0 h-80 w-80 translate-x-1/3 translate-y-1/3 rounded-full bg-emerald-500/10 blur-3xl" />
    </section>
  );
};

export default Hero;
