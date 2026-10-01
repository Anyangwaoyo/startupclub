import React from 'react';
import { ArrowUpRight } from 'lucide-react';

interface MembershipSectionProps {
  onOpenApply: () => void;
}

export const MembershipSection: React.FC<MembershipSectionProps> = ({ onOpenApply }) => {
  return (
    <section id="membership" className="py-20 lg:py-28 bg-[#FBFBFA]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-10">
        {/* Section Header */}
        <div className="space-y-3 max-w-2xl mx-auto">
          <div className="text-xs font-semibold tracking-wider text-[#059669] uppercase">
            Curated Admissions
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-[#04261b] font-display tracking-tight text-balance">
            Membership
          </h2>
          <p className="text-base text-slate-600 leading-relaxed text-balance">
            A paid, vetted network for high-agency African builders. No open spam, no lurkers.
          </p>
        </div>

        {/* Card with Active Network */}
        <div className="bg-[#04261b] text-white rounded-3xl p-8 sm:p-10 border border-emerald-900/50 shadow-md max-w-sm mx-auto text-center space-y-2">
          <div className="text-xs font-mono text-emerald-400 font-semibold uppercase tracking-wider">
            Active Network
          </div>
          <div className="text-4xl sm:text-5xl font-extrabold text-white font-display tabular-nums">
            10
          </div>
          <div className="text-sm text-slate-300">
            Founding members
          </div>
        </div>

        {/* ONE Button to Apply */}
        <div>
          <button
            onClick={onOpenApply}
            type="button"
            className="inline-flex items-center justify-center gap-2 px-9 py-4 text-base font-semibold text-white bg-[#04261b] hover:bg-[#064e3b] active:scale-[0.98] rounded-xl transition-all shadow-md cursor-pointer whitespace-nowrap"
          >
            <span>Apply to Join</span>
            <ArrowUpRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
};
