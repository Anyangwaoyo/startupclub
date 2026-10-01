import React from 'react';
import communityBuilderImg from '../assets/images/community_builder_session_1790694723681.jpg';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-20 lg:py-28 bg-[#F4F4F0]/60 border-y border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Photographic Evidence / Community Session */}
          <div className="lg:col-span-6 order-2 lg:order-1">
            <div className="relative rounded-2xl overflow-hidden shadow-xl border border-slate-200/80 bg-slate-900 group">
              <img
                src={communityBuilderImg}
                alt="Nigerian software engineers and startup operators collaborating during a session"
                referrerPolicy="no-referrer"
                className="w-full aspect-4/3 object-cover object-center transform transition-transform duration-700 ease-out group-hover:scale-[1.01]"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent pointer-events-none" />
              <div className="absolute bottom-5 left-5 right-5 text-white">
                <div className="text-xs uppercase tracking-wider text-emerald-400 font-semibold mb-1">
                  Cross-Discipline Collaboration
                </div>
                <div className="text-sm font-medium text-slate-100">
                  Engineers, founders, and operators solving real systemic friction together.
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Mission, Disconnected Circles Reality & Flagship Statement */}
          <div className="lg:col-span-6 order-1 lg:order-2 space-y-6">
            <div className="space-y-2">
              <div className="text-xs font-semibold tracking-wider text-[#059669] uppercase">
                About startupclubNG
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#04261b] font-display tracking-tight leading-tight">
                Bridging the fragmented circles of Nigerian tech
              </h2>
            </div>

            <p className="text-base sm:text-lg text-slate-700 leading-relaxed">
              Nigeria possesses one of the most dynamic and resilient startup ecosystems in the
              world. Yet, brilliant founders, skilled developers, active angel investors, and experienced
              operators often operate in isolated, disconnected circles.
            </p>

            <p className="text-base text-slate-600 leading-relaxed">
              Without intentional spaces, founders struggle in isolation, engineers remain trapped in
              outsourcing loops, and investors miss high-conviction teams before public rounds.
              startupclubNG exists to create a trusted, vetted network where ambitious people can
              meet, collaborate, learn, discover opportunities, and grow together.
            </p>

            {/* Required Flagship Statement */}
            <div className="p-6 rounded-xl bg-[#04261b] text-white space-y-2 shadow-sm border border-[#04261b]/20">
              <div className="text-xs uppercase tracking-wider text-emerald-400 font-bold">
                Our Operating Conviction
              </div>
              <blockquote className="text-xl sm:text-2xl font-bold font-display leading-snug">
                “More than another group chat. We're building an ecosystem.”
              </blockquote>
              <p className="text-xs text-slate-300 pt-1">
                A permanent, structured alliance of builders who share operational playbooks,
                co-invest in deals, and champion each other’s ventures.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
