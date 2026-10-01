import React, { useState } from 'react';
import { EventItem } from '../types';
import { X, Calendar, Clock, MapPin, CheckCircle, ArrowRight, Building, Mail, User } from 'lucide-react';
import { ApplicationForm } from './ApplicationForm';

interface EventDetailModalProps {
  event: EventItem | null;
  onClose: () => void;
  onApplyForEvent: () => void;
}

export const EventDetailModal: React.FC<EventDetailModalProps> = ({ event, onClose, onApplyForEvent }) => {
  const [rsvpSuccess, setRsvpSuccess] = useState(false);

  if (!event) return null;

  const handleRsvp = () => {
    setRsvpSuccess(true);
    setTimeout(() => {
      setRsvpSuccess(false);
      onClose();
    }, 2200);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-in fade-in duration-150">
      <div className="bg-white rounded-3xl max-w-lg w-full p-6 sm:p-8 shadow-2xl border border-slate-200 space-y-6 relative max-h-[90vh] overflow-y-auto">
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="space-y-2">
          <div className="flex items-center gap-2 text-xs font-semibold text-[#059669]">
            <span>{event.category}</span>
            <span aria-hidden="true">·</span>
            <span className="text-slate-500 font-normal">{event.format}</span>
          </div>

          <h3 className="text-xl sm:text-2xl font-bold text-[#04261b] font-display">
            {event.title}
          </h3>
        </div>

        {/* Date and Location Details */}
        <div className="p-4 rounded-xl bg-slate-50 border border-slate-100 space-y-2 text-xs text-slate-700">
          <div className="flex items-center gap-2.5">
            <Calendar className="w-4 h-4 text-[#059669]" />
            <span className="font-semibold">{event.date}</span>
          </div>
          <div className="flex items-center gap-2.5">
            <Clock className="w-4 h-4 text-[#059669]" />
            <span>{event.time}</span>
          </div>
          <div className="flex items-center gap-2.5">
            <MapPin className="w-4 h-4 text-[#059669]" />
            <span>{event.location}</span>
          </div>
        </div>

        <div className="space-y-3">
          <h4 className="text-xs font-bold uppercase tracking-wider text-slate-800">
            Session Overview
          </h4>
          <p className="text-sm text-slate-600 leading-relaxed">
            {event.description}
          </p>
        </div>

        {event.speakers && event.speakers.length > 0 && (
          <div className="space-y-2">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-800">
              Featured Contributors
            </h4>
            <div className="flex flex-wrap gap-2">
              {event.speakers.map((spk, i) => (
                <span
                  key={i}
                  className="text-xs text-slate-700 bg-slate-100 px-3 py-1 rounded-lg font-medium"
                >
                  {spk}
                </span>
              ))}
            </div>
          </div>
        )}

        {event.capacity && (
          <div className="text-xs text-slate-500 font-medium">
            Room capacity: <span className="text-slate-800">{event.capacity}</span>
          </div>
        )}

        {rsvpSuccess ? (
          <div className="p-4 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-800 text-center flex items-center justify-center gap-2 text-sm font-semibold">
            <CheckCircle className="w-4 h-4 text-[#059669]" />
            <span>Reminder Saved! Details sent to your calendar.</span>
          </div>
        ) : (
          <div className="flex flex-col sm:flex-row gap-3 pt-2">
            <button
              onClick={handleRsvp}
              className="flex-1 py-3 px-4 rounded-xl bg-[#04261b] hover:bg-[#064e3b] text-white font-semibold text-xs sm:text-sm transition-colors text-center cursor-pointer shadow-xs"
            >
              Add to Calendar / Save Reminder
            </button>
            <button
              onClick={() => {
                onClose();
                onApplyForEvent();
              }}
              className="py-3 px-4 rounded-xl border border-slate-200 hover:bg-slate-50 text-slate-800 font-semibold text-xs sm:text-sm transition-colors text-center cursor-pointer"
            >
              Apply for Member Pass
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

interface PartnershipModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const PartnershipModal: React.FC<PartnershipModalProps> = ({ isOpen, onClose }) => {
  const [partnerType, setPartnerType] = useState('Venture Capital / Angel Syndicate');
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    organization: '',
    proposal: '',
  });

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      onClose();
    }, 2400);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-in fade-in duration-150">
      <div className="bg-white rounded-3xl max-w-lg w-full p-6 sm:p-8 shadow-2xl border border-slate-200 space-y-6 relative max-h-[90vh] overflow-y-auto">
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="space-y-1">
          <div className="text-xs font-semibold text-[#059669] uppercase tracking-wider">
            Ecosystem Collaboration
          </div>
          <h3 className="text-2xl font-bold text-[#04261b] font-display">
            Partner with startupclubNG
          </h3>
          <p className="text-xs sm:text-sm text-slate-600">
            We collaborate with leading venture funds, cloud infrastructure providers, banks,
            and corporate accelerators to empower African tech builders.
          </p>
        </div>

        {submitted ? (
          <div className="py-10 text-center space-y-3">
            <CheckCircle className="w-12 h-12 text-[#059669] mx-auto" />
            <h4 className="text-lg font-bold text-[#04261b]">Partnership Proposal Received</h4>
            <p className="text-xs text-slate-600 max-w-sm mx-auto">
              Our ecosystem partnerships team will review your proposal and get in touch within 2 business days.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4 text-left">
            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">
                Partner Category
              </label>
              <select
                value={partnerType}
                onChange={(e) => setPartnerType(e.target.value)}
                className="w-full px-3.5 py-2 rounded-xl border border-slate-200 text-xs focus:outline-none focus:border-[#059669]"
              >
                <option value="Venture Capital / Angel Syndicate">Venture Capital / Angel Syndicate</option>
                <option value="Cloud / Infrastructure Provider (Credits & Tools)">Cloud / Infrastructure Provider (Credits & Tools)</option>
                <option value="Commercial Bank / Payment Infrastructure">Commercial Bank / Payment Infrastructure</option>
                <option value="Legal & Regulatory Advisory Practice">Legal & Regulatory Advisory Practice</option>
                <option value="Co-Working & Innovation Hub Partner">Co-Working & Innovation Hub Partner</option>
              </select>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">Your Name</label>
                <input
                  required
                  type="text"
                  placeholder="e.g. Bukola Johnson"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-3 py-2 rounded-xl border border-slate-200 text-xs focus:outline-none focus:border-[#059669]"
                />
              </div>
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">Work Email</label>
                <input
                  required
                  type="email"
                  placeholder="bukola@venturepartners.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-3 py-2 rounded-xl border border-slate-200 text-xs focus:outline-none focus:border-[#059669]"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">Organization / Brand</label>
              <input
                required
                type="text"
                placeholder="e.g. Future Africa / AWS / Flutterwave / Moniepoint"
                value={formData.organization}
                onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                className="w-full px-3 py-2 rounded-xl border border-slate-200 text-xs focus:outline-none focus:border-[#059669]"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">Brief Collaboration Proposal</label>
              <textarea
                required
                rows={3}
                placeholder="How would you like to support or collaborate with startupclubNG members?"
                value={formData.proposal}
                onChange={(e) => setFormData({ ...formData, proposal: e.target.value })}
                className="w-full px-3 py-2 rounded-xl border border-slate-200 text-xs focus:outline-none focus:border-[#059669]"
              />
            </div>

            <div className="pt-2">
              <button
                type="submit"
                className="w-full py-3 rounded-xl bg-[#04261b] hover:bg-[#064e3b] text-white font-semibold text-xs sm:text-sm transition-colors cursor-pointer"
              >
                Submit Partnership Inquiry
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};

interface LegalModalProps {
  type: 'privacy' | 'terms' | null;
  onClose: () => void;
}

export const LegalModal: React.FC<LegalModalProps> = ({ type, onClose }) => {
  if (!type) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-in fade-in duration-150">
      <div className="bg-white rounded-3xl max-w-2xl w-full p-6 sm:p-10 shadow-2xl border border-slate-200 space-y-6 relative max-h-[85vh] overflow-y-auto">
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {type === 'privacy' ? (
          <div className="space-y-4 text-left">
            <h3 className="text-2xl font-bold text-[#04261b] font-display">
              Privacy & Data Protection Policy
            </h3>
            <div className="text-xs text-slate-400 font-mono">Last updated: 2026</div>

            <div className="space-y-3 text-xs sm:text-sm text-slate-600 leading-relaxed">
              <p>
                startupclubNG is committed to safeguarding the privacy and confidential intellectual
                property of Nigerian entrepreneurs, developers, and investors in our community.
              </p>
              <h4 className="font-bold text-slate-900 pt-2">1. Data Collected</h4>
              <p>
                We collect application information including your full name, work email, phone number,
                professional profile, and venture focus strictly for admissions auditing and member
                matchmaking.
              </p>
              <h4 className="font-bold text-slate-900 pt-2">2. Confidentiality & Chatham House Rules</h4>
              <p>
                Unreleased products, pitch decks, cap tables, and revenue data shared during private
                sessions or community channels are strictly confidential. Sharing member data externally
                results in immediate expulsion without refund.
              </p>
              <h4 className="font-bold text-slate-900 pt-2">3. No Third-Party Data Sales</h4>
              <p>
                We never sell, rent, or monetize member personal data to external advertisers.
              </p>
            </div>
          </div>
        ) : (
          <div className="space-y-4 text-left">
            <h3 className="text-2xl font-bold text-[#04261b] font-display">
              Membership Terms & Community Code of Conduct
            </h3>
            <div className="text-xs text-slate-400 font-mono">Last updated: 2026</div>

            <div className="space-y-3 text-xs sm:text-sm text-slate-600 leading-relaxed">
              <p>
                startupclubNG exists to foster an environment of high agency, radical candor, and
                peer generosity.
              </p>
              <h4 className="font-bold text-slate-900 pt-2">1. Curated Membership & Dues</h4>
              <p>
                Membership is subject to manual application review. Acceptance is contingent on
                payment of annual or quarterly dues. Dues are non-refundable after community onboarding.
              </p>
              <h4 className="font-bold text-slate-900 pt-2">2. Zero Spam & Solicitation Policy</h4>
              <p>
                Unsolicited mass DMing, cold pitching irrelevancies, aggressive multi-level schemes,
                or cryptocurrency scams are strictly banned and result in immediate revocation of
                membership.
              </p>
              <h4 className="font-bold text-slate-900 pt-2">3. Respect & Integrity</h4>
              <p>
                All members are expected to conduct themselves with professional integrity, constructive
                feedback, and mutual respect across every virtual channel and in-person gathering.
              </p>
            </div>
          </div>
        )}

        <div className="pt-4 border-t border-slate-100 text-right">
          <button
            onClick={onClose}
            className="px-5 py-2 text-xs font-semibold text-white bg-[#04261b] rounded-xl hover:bg-[#064e3b]"
          >
            I Understand
          </button>
        </div>
      </div>
    </div>
  );
};

interface ApplicationModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialRole?: string;
}

export const ApplicationModal: React.FC<ApplicationModalProps> = ({ isOpen, onClose, initialRole }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/65 backdrop-blur-xs animate-in fade-in duration-150">
      <div className="bg-white rounded-3xl max-w-3xl w-full p-2 sm:p-6 shadow-2xl border border-slate-200 relative max-h-[94vh] overflow-y-auto">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2 rounded-full text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors cursor-pointer"
          aria-label="Close application form"
        >
          <X className="w-5 h-5" />
        </button>
        <ApplicationForm initialRole={initialRole} />
      </div>
    </div>
  );
};

