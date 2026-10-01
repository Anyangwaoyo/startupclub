import React from 'react';
import { Mail, ArrowUpRight, Globe2, Sparkles, Heart } from 'lucide-react';

interface ContactFooterProps {
  onOpenApply: () => void;
  onOpenPartnership: () => void;
  onOpenLegal: (type: 'privacy' | 'terms') => void;
}

export const ContactFooter: React.FC<ContactFooterProps> = ({
  onOpenApply,
  onOpenPartnership,
  onOpenLegal,
}) => {
  const currentYear = new Date().getFullYear();

  const handleScroll = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer id="contact" className="bg-[#031d15] text-slate-300 pt-20 pb-12 border-t border-[#052e20]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-16 border-b border-white/10">
          {/* Brand Column */}
          <div className="lg:col-span-5 space-y-4">
            <a
              href="#home"
              className="text-2xl font-bold tracking-tight text-white font-display inline-block"
            >
              startupclub<span className="text-emerald-400">NG</span>
            </a>
            <div className="text-xs uppercase tracking-widest font-mono text-emerald-400 font-bold">
              BUILD. CONNECT. GROW.
            </div>
            <p className="text-sm text-slate-400 leading-relaxed max-w-sm">
              Nigeria’s curated startup community connecting ambitious founders, developers,
              investors, and operators. More than another group chat. We’re building an ecosystem.
            </p>

            <div className="pt-2 flex items-center gap-3">
              <a
                href="mailto:hello@startupclub.ng"
                className="inline-flex items-center gap-2 px-3.5 py-2 rounded-lg bg-white/5 hover:bg-white/10 text-xs text-white border border-white/10 transition-colors"
              >
                <Mail className="w-3.5 h-3.5 text-emerald-400" />
                <span>hello@startupclub.ng</span>
              </a>
              <button
                onClick={onOpenPartnership}
                className="inline-flex items-center gap-1 text-xs text-emerald-400 hover:text-emerald-300 underline underline-offset-4 cursor-pointer"
              >
                <span>Partner with us</span>
                <ArrowUpRight className="w-3 h-3" />
              </button>
            </div>
          </div>

          {/* Quick Nav Links */}
          <div className="lg:col-span-2 space-y-3">
            <div className="text-xs font-bold text-white uppercase tracking-wider">
              Navigation
            </div>
            <ul className="space-y-2 text-sm text-slate-400">
              <li>
                <a
                  href="#home"
                  onClick={(e) => {
                    e.preventDefault();
                    handleScroll('#home');
                  }}
                  className="hover:text-white transition-colors"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  onClick={(e) => {
                    e.preventDefault();
                    handleScroll('#about');
                  }}
                  className="hover:text-white transition-colors"
                >
                  About Ecosystem
                </a>
              </li>
              <li>
                <a
                  href="#community"
                  onClick={(e) => {
                    e.preventDefault();
                    handleScroll('#community');
                  }}
                  className="hover:text-white transition-colors"
                >
                  Community
                </a>
              </li>
              <li>
                <a
                  href="#events"
                  onClick={(e) => {
                    e.preventDefault();
                    handleScroll('#events');
                  }}
                  className="hover:text-white transition-colors"
                >
                  Events & Opportunities
                </a>
              </li>
              <li>
                <a
                  href="#membership"
                  onClick={(e) => {
                    e.preventDefault();
                    handleScroll('#membership');
                  }}
                  className="hover:text-white transition-colors"
                >
                  Membership
                </a>
              </li>
              <li>
                <a
                  href="#faq"
                  onClick={(e) => {
                    e.preventDefault();
                    handleScroll('#faq');
                  }}
                  className="hover:text-white transition-colors"
                >
                  FAQ
                </a>
              </li>
            </ul>
          </div>

          {/* Office Location */}
          <div className="lg:col-span-2 space-y-3">
            <div className="text-xs font-bold text-white uppercase tracking-wider">
              Office
            </div>
            <p className="text-sm text-slate-400 leading-relaxed">
              Lafia, Nasarawa State, Nigeria
            </p>
          </div>

          {/* Social Channels & Application CTA */}
          <div className="lg:col-span-3 space-y-4">
            <div className="text-xs font-bold text-white uppercase tracking-wider">
              Stay Connected
            </div>
            <p className="text-xs text-slate-400 leading-relaxed">
              Follow public dispatches, teardown summaries, and upcoming demo day announcements.
            </p>

            <div className="flex flex-wrap gap-2 text-xs text-slate-300">
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noreferrer"
                className="px-3 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 hover:text-white border border-white/10 transition-colors"
              >
                X (Twitter)
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="px-3 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 hover:text-white border border-white/10 transition-colors"
              >
                LinkedIn
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noreferrer"
                className="px-3 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 hover:text-white border border-white/10 transition-colors"
              >
                YouTube
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="px-3 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 hover:text-white border border-white/10 transition-colors"
              >
                Instagram
              </a>
            </div>

            <div className="pt-2">
              <button
                onClick={onOpenApply}
                className="w-full py-2.5 px-4 text-xs font-semibold text-[#04261b] bg-emerald-400 hover:bg-emerald-300 rounded-lg transition-colors flex items-center justify-center gap-1.5 cursor-pointer shadow-xs"
              >
                <span>Apply for Membership</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div className="flex items-center gap-2">
            <span>© {currentYear} startupclubNG. All rights reserved.</span>
            <span aria-hidden="true">·</span>
            <span>Built for African founders & technologists.</span>
          </div>

          <div className="flex items-center gap-5">
            <button
              onClick={() => onOpenLegal('privacy')}
              className="hover:text-white transition-colors cursor-pointer"
            >
              Privacy Policy
            </button>
            <button
              onClick={() => onOpenLegal('terms')}
              className="hover:text-white transition-colors cursor-pointer"
            >
              Terms of Membership
            </button>
            <button
              onClick={onOpenPartnership}
              className="hover:text-white transition-colors cursor-pointer"
            >
              Partnership Enquiries
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
