import React from 'react';
import { ArrowUpRight } from 'lucide-react';

interface CommunitySectionProps {
  onOpenApply?: () => void;
}

export const WhoItsFor: React.FC<CommunitySectionProps> = ({ onOpenApply }) => {
  return (
    <section id="community" className="py-20 lg:py-28 bg-[#FBFBFA]">
      <div id="who-its-for" className="-mt-20 pt-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <div className="text-xs font-semibold tracking-wider text-[#059669] uppercase">
            The Network
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-[#04261b] font-display tracking-tight text-balance">
            Our Community
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed text-balance max-w-2xl mx-auto">
            A curated network of active founders, software architects, growth operators, and angel
            investors shaping the future of technology and business across Nigeria and the diaspora.
          </p>

          {onOpenApply && (
            <div className="pt-4">
              <button
                onClick={onOpenApply}
                type="button"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-semibold text-white bg-[#04261b] hover:bg-[#064e3b] active:scale-[0.98] rounded-xl transition-all shadow-md cursor-pointer whitespace-nowrap"
              >
                <span>Join Community</span>
                <ArrowUpRight className="w-5 h-5" />
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
