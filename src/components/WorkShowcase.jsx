import React from 'react';

const projects = [
  {
    title: 'Neon Commerce',
    tag: 'E-commerce, 3D',
    gradient: 'from-indigo-500 via-sky-400 to-emerald-400',
  },
  {
    title: 'Motion Stories',
    tag: 'Film, Motion',
    gradient: 'from-fuchsia-500 via-rose-400 to-amber-300',
  },
  {
    title: 'Play OS',
    tag: 'Concept, UI/UX',
    gradient: 'from-emerald-500 via-teal-400 to-cyan-300',
  },
  {
    title: 'Nova Labs',
    tag: 'Brand, WebGL',
    gradient: 'from-amber-400 via-orange-500 to-rose-500',
  },
];

const WorkCard = ({ title, tag, gradient }) => {
  return (
    <a href="#" className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 transition-transform duration-300 hover:-translate-y-1">
      <div className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-20 transition-opacity duration-300 group-hover:opacity-30`} />
      <div className="pointer-events-none absolute -right-10 -top-10 h-36 w-36 rounded-full bg-white/10 blur-2xl transition-all duration-300 group-hover:scale-125" />
      <div className="relative">
        <div className="mb-24 h-40 w-full rounded-xl bg-white/5 ring-1 ring-white/10" />
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-lg font-medium">{title}</h3>
            <p className="text-xs text-white/60">{tag}</p>
          </div>
          <div className="rounded-full border border-white/10 bg-white/10 px-3 py-1 text-xs text-white/80">Case Study</div>
        </div>
      </div>
    </a>
  );
};

const WorkShowcase = () => {
  return (
    <section id="work" className="relative py-10 md:py-16">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-8 flex items-end justify-between md:mb-10">
          <div>
            <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">Selected Work</h2>
            <p className="mt-1 text-sm text-white/60">A few favorites I’ve designed and built recently.</p>
          </div>
          <a href="#" className="text-sm text-white/80 underline-offset-4 hover:text-white hover:underline">View all</a>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {projects.map((p) => (
            <WorkCard key={p.title} title={p.title} tag={p.tag} gradient={p.gradient} />)
          )}
        </div>
      </div>

      <div className="pointer-events-none absolute inset-x-0 top-1/2 -translate-y-1/2 bg-gradient-to-b from-white/5 to-transparent py-px" />
    </section>
  );
};

export default WorkShowcase;
