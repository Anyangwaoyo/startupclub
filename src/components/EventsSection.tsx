import React from 'react';
import { ArrowRight, Clock } from 'lucide-react';

interface EventsSectionProps {
  onOpenApply: () => void;
}

export const EventsSection: React.FC<EventsSectionProps> = ({ onOpenApply }) => {
  return (
    <section id="events" className="py-20 lg:py-28 bg-[#F4F4F0]/60 border-t border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-3xl mx-auto space-y-5">
          <div className="text-xs font-semibold tracking-wider text-[#059669] uppercase">
            Curated Gatherings
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold text-[#04261b] font-display tracking-tight text-balance">
            Events Coming Soon
          </h2>

          <p className="text-base sm:text-lg text-slate-600 leading-relaxed text-balance">
            We are currently in our MVP stage. Private founder dinners, closed angel demo days, and
            technical architecture teardowns are in preparation and will be announced directly to
            approved members.
          </p>

          <div className="pt-3">
            <button
              onClick={onOpenApply}
              type="button"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-[#04261b] hover:bg-[#064e3b] text-white font-semibold text-sm transition-all shadow-xs cursor-pointer"
            >
              <span>Apply to Join for First Priority Invites</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
