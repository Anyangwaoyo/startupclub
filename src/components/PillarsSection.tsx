import React from 'react';
import { ArrowUpRight } from 'lucide-react';

interface PillarsSectionProps {
  onOpenApply: () => void;
}

export const PillarsSection: React.FC<PillarsSectionProps> = ({ onOpenApply }) => {
  const pillars = [
    {
      title: 'BUILD',
      description:
        'Find collaborators, talent and resources to turn ideas into products and businesses.',
    },
    {
      title: 'CONNECT',
      description:
        'Meet founders, investors, developers, operators and ambitious professionals.',
    },
    {
      title: 'GROW',
      description:
        'Access knowledge, opportunities, events, partnerships and meaningful relationships.',
    },
  ];

  return (
    <section className="py-20 lg:py-28 bg-[#04261b] text-white relative overflow-hidden">
      {/* Subtle organic light accent */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-14">
          <div className="text-xs font-semibold tracking-wider text-emerald-400 uppercase">
            The Three Pillars
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight font-display text-balance">
            BUILD. CONNECT. GROW.
          </h2>
        </div>

        {/* 3 Prominent Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 max-w-5xl mx-auto">
          {pillars.map((item) => (
            <div
              key={item.title}
              className="bg-[#052e20]/80 rounded-2xl p-8 sm:p-10 border border-emerald-500/20 hover:border-emerald-400/50 transition-all duration-200 group flex flex-col justify-between"
            >
              <div className="space-y-4">
                <h3 className="text-3xl sm:text-4xl font-extrabold font-display tracking-tight text-white group-hover:text-emerald-300 transition-colors">
                  {item.title}
                </h3>
                <p className="text-base sm:text-lg text-slate-200 leading-relaxed font-normal">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Action Prompt */}
        <div className="mt-12 text-center">
          <button
            onClick={onOpenApply}
            type="button"
            className="inline-flex items-center gap-2 px-8 py-3.5 text-sm font-semibold text-[#04261b] bg-emerald-400 hover:bg-emerald-300 active:scale-[0.98] rounded-xl transition-all shadow-md cursor-pointer"
          >
            <span>Apply to Join</span>
            <ArrowUpRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
};
