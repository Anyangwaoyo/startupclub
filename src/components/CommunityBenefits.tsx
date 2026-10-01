import React, { useState } from 'react';
import { BENEFITS_DATA } from '../data/content';
import {
  Users,
  UserCheck,
  TrendingUp,
  Briefcase,
  Calendar,
  Compass,
  Workflow,
  BookOpen,
  ChevronRight,
} from 'lucide-react';

export const CommunityBenefits: React.FC = () => {
  const [selectedBenefit, setSelectedBenefit] = useState<string | null>(null);

  const getIcon = (name: string) => {
    const props = { className: 'w-5 h-5 text-[#059669]' };
    switch (name) {
      case 'Users':
        return <Users {...props} />;
      case 'UserCheck':
        return <UserCheck {...props} />;
      case 'TrendingUp':
        return <TrendingUp {...props} />;
      case 'Briefcase':
        return <Briefcase {...props} />;
      case 'Calendar':
        return <Calendar {...props} />;
      case 'Compass':
        return <Compass {...props} />;
      case 'Workflow':
        return <Workflow {...props} />;
      case 'BookOpen':
        return <BookOpen {...props} />;
      default:
        return <Users {...props} />;
    }
  };

  return (
    <section id="benefits" className="py-20 lg:py-28 bg-[#FBFBFA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <div className="text-xs font-semibold tracking-wider text-[#059669] uppercase">
            Exclusive Member Value
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-[#04261b] font-display tracking-tight text-balance">
            Designed for tangible startup momentum
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed text-balance">
            Every benefit is structured to remove operational friction, shorten your fundraising
            runway, and surround you with peer operators who have solved your exact problems.
          </p>
        </div>

        {/* Bento grid layout for 8 benefits */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {BENEFITS_DATA.map((benefit, index) => {
            const isExpanded = selectedBenefit === benefit.id;
            return (
              <div
                key={benefit.id}
                onClick={() => setSelectedBenefit(isExpanded ? null : benefit.id)}
                className={`bg-white rounded-2xl p-6 border transition-all duration-200 cursor-pointer flex flex-col justify-between ${
                  isExpanded
                    ? 'border-[#059669] ring-2 ring-[#059669]/20 shadow-md'
                    : 'border-slate-200/80 hover:border-slate-300 shadow-2xs hover:shadow-xs'
                }`}
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-100">
                      {getIcon(benefit.iconName)}
                    </div>
                    <span className="font-mono text-xs text-slate-400">0{index + 1}</span>
                  </div>

                  <div>
                    <h3 className="text-base sm:text-lg font-bold text-[#04261b] font-display">
                      {benefit.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 mt-1.5 leading-snug">
                      {benefit.description}
                    </p>
                  </div>
                </div>

                <div className="pt-4 mt-4 border-t border-slate-100">
                  <p className="text-xs text-slate-500 leading-relaxed">
                    {benefit.detail}
                  </p>
                  <div className="mt-3 flex items-center justify-between text-xs font-semibold text-[#059669]">
                    <span>{isExpanded ? 'Collapse' : 'Learn more'}</span>
                    <ChevronRight
                      className={`w-3.5 h-3.5 transform transition-transform ${
                        isExpanded ? 'rotate-90' : ''
                      }`}
                    />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
