import React from 'react';
import { ArrowUpRight, ArrowDown } from 'lucide-react';
import heroImage from '../assets/images/hero_african_founders_1790694703862.jpg';

interface HeroProps {
  onOpenApply: () => void;
  onExploreCommunity: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenApply, onExploreCommunity }) => {
  return (
    <section id="home" className="relative pt-28 sm:pt-36 pb-16 lg:pb-24 overflow-hidden">
      {/* Subtle architectural background grid */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage:
            'radial-gradient(#04261b 1px, transparent 1px), radial-gradient(#04261b 1px, #FBFBFA 1px)',
          backgroundSize: '40px 40px',
          backgroundPosition: '0 0, 20px 20px',
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          {/* Natural human editorial kicker */}
          <div className="text-xs sm:text-sm font-semibold tracking-wider text-[#059669] uppercase">
            Curated Nigerian Startup Network
          </div>

          {/* Primary Headline: BUILD. CONNECT. GROW. */}
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-[#04261b] tracking-tight leading-[1.05] font-display text-balance">
            BUILD. CONNECT. GROW.
          </h1>

          {/* Subheadline */}
          <p className="text-lg sm:text-xl lg:text-2xl text-slate-700 font-normal leading-relaxed max-w-3xl mx-auto text-balance">
            Nigeria’s curated community for founders, builders, investors, operators and people
            shaping the future of technology and business.
          </p>

          {/* Call to Actions */}
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
            <button
              onClick={onOpenApply}
              type="button"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 text-sm sm:text-base font-semibold text-white bg-[#04261b] hover:bg-[#064e3b] active:scale-[0.98] rounded-xl transition-all duration-150 shadow-md hover:shadow-lg cursor-pointer whitespace-nowrap"
            >
              <span>Apply to Join</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
            <button
              onClick={onExploreCommunity}
              type="button"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 text-sm sm:text-base font-semibold text-[#04261b] bg-white hover:bg-slate-100/80 border border-slate-200 active:scale-[0.98] rounded-xl transition-all duration-150 cursor-pointer whitespace-nowrap shadow-2xs"
            >
              <span>Explore Community</span>
              <ArrowDown className="w-4 h-4" />
            </button>
          </div>

          {/* Social Proof & Quantitative Rigor Adjacent */}
          <div className="pt-8 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 border-t border-slate-200/80 max-w-3xl mx-auto text-left">
            <div>
              <div className="text-2xl sm:text-3xl font-extrabold text-[#04261b] font-display tabular-nums">
                ₦1.8B+
              </div>
              <div className="text-xs text-slate-500 font-medium mt-0.5">
                Venture & angel capital raised
              </div>
            </div>
            <div>
              <div className="text-2xl sm:text-3xl font-extrabold text-[#04261b] font-display tabular-nums">
                10
              </div>
              <div className="text-xs text-slate-500 font-medium mt-0.5">
                Founding members
              </div>
            </div>
            <div>
              <div className="text-2xl sm:text-3xl font-extrabold text-[#04261b] font-display tabular-nums">
                100%
              </div>
              <div className="text-xs text-slate-500 font-medium mt-0.5">
                Curated admissions (no spam)
              </div>
            </div>
            <div>
              <div className="text-2xl sm:text-3xl font-extrabold text-[#04261b] font-display tabular-nums">
                24–48h
              </div>
              <div className="text-xs text-slate-500 font-medium mt-0.5">
                Admissions committee review
              </div>
            </div>
          </div>
        </div>

        {/* Hero Visual Asset */}
        <div className="mt-12 lg:mt-16 max-w-5xl mx-auto">
          <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-slate-200/80 bg-slate-900 group">
            <img
              src={heroImage}
              alt="Nigerian startup founders and engineers collaborating in a modern tech hub"
              referrerPolicy="no-referrer"
              className="w-full aspect-16/9 object-cover object-center transform transition-transform duration-700 ease-out group-hover:scale-[1.01]"
              loading="eager"
            />
            {/* Measured contrast scrim */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#04261b]/80 via-transparent to-black/10 pointer-events-none" />

            {/* In-image caption & reality anchor */}
            <div className="absolute bottom-4 sm:bottom-6 left-4 sm:left-6 right-4 sm:right-6 flex flex-col sm:flex-row items-start sm:items-end justify-between gap-3 text-white">
              <div className="space-y-1">
                <div className="text-xs font-semibold tracking-wider text-emerald-300 uppercase">
                  Lafia, Nasarawa State
                </div>
                <div className="text-base sm:text-lg font-bold font-display">
                  Where Africa’s highest-agency builders congregate.
                </div>
              </div>
              <div className="text-xs text-slate-200/90 hidden sm:block text-right">
                Monthly founder roundtables · Closed demo days · Technical teardowns
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
