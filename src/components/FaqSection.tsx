import React, { useState } from 'react';
import { FAQS_DATA } from '../data/content';
import { Plus, Minus, HelpCircle } from 'lucide-react';

export const FaqSection: React.FC = () => {
  const [openId, setOpenId] = useState<string | null>('faq-01');
  const [activeCategory, setActiveCategory] = useState<string>('All');

  const categories = [
    'All',
    'Membership & Fees',
    'Review & Selection',
    'Community Access',
    'Benefits',
  ];

  const filteredFaqs =
    activeCategory === 'All'
      ? FAQS_DATA
      : FAQS_DATA.filter((f) => f.category === activeCategory);

  const toggleFaq = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section id="faq" className="py-20 lg:py-28 bg-[#F4F4F0]/60 border-t border-slate-200/80">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-12">
          <div className="text-xs font-semibold tracking-wider text-[#059669] uppercase">
            Frequently Asked Questions
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-[#04261b] font-display tracking-tight text-balance">
            Everything you need to know
          </h2>
          <p className="text-base text-slate-600 leading-relaxed max-w-2xl mx-auto text-balance">
            Transparent answers regarding our admissions process, membership fees, code of conduct,
            and ecosystem programming.
          </p>

          {/* Category Tabs */}
          <div className="pt-2 flex flex-wrap items-center justify-center gap-1.5 p-1.5 bg-white rounded-xl border border-slate-200/80 max-w-xl mx-auto">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-all cursor-pointer ${
                  activeCategory === cat
                    ? 'bg-[#04261b] text-white shadow-xs font-semibold'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {filteredFaqs.map((faq) => {
            const isOpen = openId === faq.id;
            return (
              <div
                key={faq.id}
                className="bg-white rounded-2xl border border-slate-200/80 overflow-hidden shadow-2xs transition-all duration-200"
              >
                <button
                  onClick={() => toggleFaq(faq.id)}
                  className="w-full px-6 py-5 text-left flex items-center justify-between gap-4 cursor-pointer hover:bg-slate-50/50 transition-colors"
                  aria-expanded={isOpen}
                >
                  <span className="text-base sm:text-lg font-bold text-[#04261b] font-display">
                    {faq.question}
                  </span>
                  <div className="shrink-0 p-1.5 rounded-lg bg-slate-100 text-slate-700">
                    {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 pt-1 text-sm text-slate-600 leading-relaxed border-t border-slate-100/60 animate-in fade-in-50 duration-150">
                    <p>{faq.answer}</p>
                    <div className="mt-3 text-xs text-slate-400 font-mono">
                      Category: {faq.category}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Direct Contact help note */}
        <div className="mt-12 text-center p-6 bg-white rounded-2xl border border-slate-200/80">
          <HelpCircle className="w-6 h-6 text-[#059669] mx-auto mb-2" />
          <h4 className="text-sm font-bold text-[#04261b]">Have a specific query about membership?</h4>
          <p className="text-xs text-slate-500 mt-1">
            Reach out directly to the admissions team at{' '}
            <a href="mailto:admissions@startupclub.ng" className="text-[#059669] font-medium hover:underline">
              admissions@startupclub.ng
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};
