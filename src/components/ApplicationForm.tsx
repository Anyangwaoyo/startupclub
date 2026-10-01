import React, { useState } from 'react';
import { ApplicationFormData } from '../types';
import { CheckCircle, Clock, ShieldCheck, ArrowRight, AlertCircle, Sparkles } from 'lucide-react';

interface ApplicationFormProps {
  initialRole?: string;
  onSuccess?: () => void;
}

export const ApplicationForm: React.FC<ApplicationFormProps> = ({ initialRole = '', onSuccess }) => {
  const [formData, setFormData] = useState<ApplicationFormData>({
    fullName: '',
    email: '',
    phone: '',
    countryCode: '+234',
    location: 'Lafia (Nasarawa State)',
    linkedinUrl: '',
    currentRole: initialRole || 'Founder / Co-Founder',
    companyOrStartup: '',
    areaOfInterest: 'Fintech',
    currentProject: '',
    whyJoin: '',
    communityContribution: '',
    agreeToVetting: false,
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedRefId, setSubmittedRefId] = useState<string | null>(null);

  const locations = [
    'Lafia (Nasarawa State)',
    'Abuja (FCT)',
    'Lagos (Island - VI / Ikoyi / Lekki)',
    'Lagos (Mainland - Yaba / Ikeja)',
    'Jos / North-Central',
    'Port Harcourt (Rivers)',
    'Ibadan / South-West',
    'Enugu / South-East',
    'Remote (Other Nigerian City)',
    'Diaspora (International)',
  ];

  const roles = [
    'Founder / Co-Founder',
    'Solo-Founder (Bootstrapped)',
    'Software Engineer / Tech Lead',
    'CTO / Engineering Architect',
    'Product Manager / Head of Product',
    'Growth / Marketing Lead',
    'Angel Investor / Syndicate Lead',
    'Venture Capital Associate / Partner',
    'Legal / Finance / Compliance Lead',
    'Tech Enthusiast / Researcher',
    'Aspiring Founder (Validating Idea)',
  ];

  const sectors = [
    'Fintech & Payments',
    'Healthtech & Biotech',
    'Agritech & Supply Chain',
    'Commerce, Retail & Logistics',
    'AI, Machine Learning & Data Infrastructure',
    'Developer Tools & Cloud Infrastructure',
    'EdTech & Future of Work',
    'GovTech & Public Sector Tech',
    'CleanTech & Renewable Energy',
    'Media, Entertainment & Web3',
  ];

  const validate = () => {
    const errs: Record<string, string> = {};

    if (!formData.fullName.trim()) errs.fullName = 'Full Name is required';
    if (!formData.email.trim()) {
      errs.email = 'Email address is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errs.email = 'Please provide a valid email address';
    }
    if (!formData.phone.trim()) {
      errs.phone = 'Phone number is required';
    } else if (formData.phone.trim().length < 7) {
      errs.phone = 'Please provide a valid phone number';
    }
    if (!formData.linkedinUrl.trim()) {
      errs.linkedinUrl = 'LinkedIn or profile URL is required for identity verification';
    }
    if (!formData.currentRole.trim()) errs.currentRole = 'Current Role is required';
    if (!formData.companyOrStartup.trim()) errs.companyOrStartup = 'Startup or Company name is required';
    if (!formData.currentProject.trim() || formData.currentProject.trim().length < 20) {
      errs.currentProject = 'Please describe what you are building in at least 20 characters';
    }
    if (!formData.whyJoin.trim() || formData.whyJoin.trim().length < 20) {
      errs.whyJoin = 'Please explain why you wish to join startupclubNG in at least 20 characters';
    }
    if (!formData.communityContribution.trim() || formData.communityContribution.trim().length < 20) {
      errs.communityContribution = 'Please share what you can contribute to fellow members';
    }
    if (!formData.agreeToVetting) {
      errs.agreeToVetting = 'You must acknowledge our paid & curated membership standards';
    }

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) {
      const firstError = Object.keys(errors)[0];
      const el = document.getElementById(firstError);
      if (el) el.scrollIntoView({ behavior: 'smooth', block: 'center' });
      return;
    }

    setIsSubmitting(true);

    // Simulate review committee queue submission
    setTimeout(() => {
      const generatedRef = `SCNG-${new Date().getFullYear()}-${Math.floor(10000 + Math.random() * 90000)}`;
      setSubmittedRefId(generatedRef);
      setIsSubmitting(false);

      // Save locally to persist submission for review tracking
      const previousSubmissions = JSON.parse(localStorage.getItem('scng_applications') || '[]');
      previousSubmissions.push({
        ...formData,
        id: generatedRef,
        submittedAt: new Date().toISOString(),
        status: 'PENDING_REVIEW',
      });
      localStorage.setItem('scng_applications', JSON.stringify(previousSubmissions));

      if (onSuccess) onSuccess();
    }, 900);
  };

  if (submittedRefId) {
    return (
      <div className="bg-white rounded-3xl p-8 sm:p-12 border border-slate-200/90 shadow-md text-center max-w-2xl mx-auto space-y-6 animate-in fade-in zoom-in-95 duration-200">
        <div className="w-16 h-16 rounded-full bg-emerald-50 text-[#059669] flex items-center justify-center mx-auto border border-emerald-100">
          <Clock className="w-8 h-8" />
        </div>

        <div className="space-y-2">
          <div className="text-xs font-mono font-semibold text-[#059669] tracking-wider uppercase">
            Application Queued · Ref: {submittedRefId}
          </div>
          <h3 className="text-2xl sm:text-3xl font-extrabold text-[#04261b] font-display">
            Application Received & In Review
          </h3>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed max-w-lg mx-auto">
            Thank you, <strong className="text-slate-900">{formData.fullName}</strong>. To protect
            the high-signal environment of startupclubNG, access is strictly curated.
          </p>
        </div>

        {/* Explicit Review Notice as requested */}
        <div className="p-5 rounded-2xl bg-amber-50/70 border border-amber-200 text-left space-y-2">
          <div className="flex items-center gap-2 text-xs font-bold text-amber-900 uppercase">
            <ShieldCheck className="w-4 h-4 text-amber-700" />
            <span>Important: Curation & Admission Policy</span>
          </div>
          <p className="text-xs sm:text-sm text-amber-950 leading-relaxed">
            <strong>No automatic group or community links are issued.</strong> Every submission is
            manually reviewed by the Admissions Committee within <strong>24–48 hours</strong>.
          </p>
          <p className="text-xs text-amber-900">
            If accepted, you will receive an invitation email at <span className="font-semibold underline">{formData.email}</span> with your verified onboarding package and membership fee invoice.
          </p>
        </div>

        <div className="pt-4 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-center gap-3">
          <button
            onClick={() => {
              setSubmittedRefId(null);
              setFormData({
                fullName: '',
                email: '',
                phone: '',
                countryCode: '+234',
                location: 'Lagos',
                linkedinUrl: '',
                currentRole: 'Founder / Co-Founder',
                companyOrStartup: '',
                areaOfInterest: 'Fintech',
                currentProject: '',
                whyJoin: '',
                communityContribution: '',
                agreeToVetting: false,
              });
            }}
            className="text-xs text-slate-500 hover:text-slate-900 underline cursor-pointer"
          >
            Submit another application
          </button>
        </div>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white rounded-3xl p-6 sm:p-10 lg:p-12 border border-slate-200/90 shadow-sm space-y-8"
      noValidate
    >
      <div className="border-b border-slate-100 pb-6 space-y-1">
        <h3 className="text-xl sm:text-2xl font-extrabold text-[#04261b] font-display">
          Curated Membership Application
        </h3>
        <p className="text-xs sm:text-sm text-slate-500">
          All fields are required for our admissions committee to assess domain expertise and community fit.
        </p>
      </div>

      {/* Grid of Inputs */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {/* Full Name */}
        <div className="space-y-1.5">
          <label htmlFor="fullName" className="block text-xs font-semibold text-slate-800">
            Full Name <span className="text-rose-500">*</span>
          </label>
          <input
            id="fullName"
            type="text"
            placeholder="e.g. Babatunde Adeyemi"
            value={formData.fullName}
            onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
            className={`w-full px-3.5 py-2.5 rounded-xl border text-sm transition-colors focus:outline-none ${
              errors.fullName
                ? 'border-rose-400 bg-rose-50/20 focus:ring-1 focus:ring-rose-400'
                : 'border-slate-200 hover:border-slate-300 focus:border-[#059669] focus:ring-1 focus:ring-[#059669]'
            }`}
          />
          {errors.fullName && <p className="text-xs text-rose-500">{errors.fullName}</p>}
        </div>

        {/* Email Address */}
        <div className="space-y-1.5">
          <label htmlFor="email" className="block text-xs font-semibold text-slate-800">
            Work or Primary Email <span className="text-rose-500">*</span>
          </label>
          <input
            id="email"
            type="email"
            placeholder="tunde@startup.ng"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            className={`w-full px-3.5 py-2.5 rounded-xl border text-sm transition-colors focus:outline-none ${
              errors.email
                ? 'border-rose-400 bg-rose-50/20 focus:ring-1 focus:ring-rose-400'
                : 'border-slate-200 hover:border-slate-300 focus:border-[#059669] focus:ring-1 focus:ring-[#059669]'
            }`}
          />
          {errors.email && <p className="text-xs text-rose-500">{errors.email}</p>}
        </div>

        {/* Phone Number */}
        <div className="space-y-1.5">
          <label htmlFor="phone" className="block text-xs font-semibold text-slate-800">
            Phone / WhatsApp Number <span className="text-rose-500">*</span>
          </label>
          <div className="flex gap-2">
            <select
              aria-label="Country Dial Code"
              value={formData.countryCode}
              onChange={(e) => setFormData({ ...formData, countryCode: e.target.value })}
              className="px-2.5 py-2.5 rounded-xl border border-slate-200 bg-slate-50 text-xs font-medium focus:outline-none"
            >
              <option value="+234">+234 (NG)</option>
              <option value="+44">+44 (UK)</option>
              <option value="+1">+1 (US/CA)</option>
              <option value="+233">+233 (GH)</option>
              <option value="+254">+254 (KE)</option>
            </select>
            <input
              id="phone"
              type="tel"
              placeholder="0803 123 4567"
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              className={`flex-1 px-3.5 py-2.5 rounded-xl border text-sm transition-colors focus:outline-none ${
                errors.phone
                  ? 'border-rose-400 bg-rose-50/20 focus:ring-1 focus:ring-rose-400'
                  : 'border-slate-200 hover:border-slate-300 focus:border-[#059669] focus:ring-1 focus:ring-[#059669]'
              }`}
            />
          </div>
          {errors.phone && <p className="text-xs text-rose-500">{errors.phone}</p>}
        </div>

        {/* Location */}
        <div className="space-y-1.5">
          <label htmlFor="location" className="block text-xs font-semibold text-slate-800">
            Location <span className="text-rose-500">*</span>
          </label>
          <select
            id="location"
            value={formData.location}
            onChange={(e) => setFormData({ ...formData, location: e.target.value })}
            className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm bg-white focus:outline-none focus:border-[#059669]"
          >
            {locations.map((loc) => (
              <option key={loc} value={loc}>
                {loc}
              </option>
            ))}
          </select>
        </div>

        {/* LinkedIn or Profile URL */}
        <div className="space-y-1.5 sm:col-span-2">
          <label htmlFor="linkedinUrl" className="block text-xs font-semibold text-slate-800">
            LinkedIn / Professional Profile URL <span className="text-rose-500">*</span>
          </label>
          <input
            id="linkedinUrl"
            type="url"
            placeholder="https://linkedin.com/in/yourname or GitHub / portfolio"
            value={formData.linkedinUrl}
            onChange={(e) => setFormData({ ...formData, linkedinUrl: e.target.value })}
            className={`w-full px-3.5 py-2.5 rounded-xl border text-sm transition-colors focus:outline-none ${
              errors.linkedinUrl
                ? 'border-rose-400 bg-rose-50/20 focus:ring-1 focus:ring-rose-400'
                : 'border-slate-200 hover:border-slate-300 focus:border-[#059669] focus:ring-1 focus:ring-[#059669]'
            }`}
          />
          {errors.linkedinUrl && <p className="text-xs text-rose-500">{errors.linkedinUrl}</p>}
        </div>

        {/* Current Role */}
        <div className="space-y-1.5">
          <label htmlFor="currentRole" className="block text-xs font-semibold text-slate-800">
            Current Role <span className="text-rose-500">*</span>
          </label>
          <select
            id="currentRole"
            value={formData.currentRole}
            onChange={(e) => setFormData({ ...formData, currentRole: e.target.value })}
            className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm bg-white focus:outline-none focus:border-[#059669]"
          >
            {roles.map((r) => (
              <option key={r} value={r}>
                {r}
              </option>
            ))}
          </select>
        </div>

        {/* Startup / Company */}
        <div className="space-y-1.5">
          <label htmlFor="companyOrStartup" className="block text-xs font-semibold text-slate-800">
            Startup / Company Name <span className="text-rose-500">*</span>
          </label>
          <input
            id="companyOrStartup"
            type="text"
            placeholder="e.g. PaySwitch Technologies, Freelance, or Stealth"
            value={formData.companyOrStartup}
            onChange={(e) => setFormData({ ...formData, companyOrStartup: e.target.value })}
            className={`w-full px-3.5 py-2.5 rounded-xl border text-sm transition-colors focus:outline-none ${
              errors.companyOrStartup
                ? 'border-rose-400 bg-rose-50/20 focus:ring-1 focus:ring-rose-400'
                : 'border-slate-200 hover:border-slate-300 focus:border-[#059669] focus:ring-1 focus:ring-[#059669]'
            }`}
          />
          {errors.companyOrStartup && (
            <p className="text-xs text-rose-500">{errors.companyOrStartup}</p>
          )}
        </div>

        {/* Area of Interest */}
        <div className="space-y-1.5 sm:col-span-2">
          <label htmlFor="areaOfInterest" className="block text-xs font-semibold text-slate-800">
            Primary Tech Sector / Area of Interest <span className="text-rose-500">*</span>
          </label>
          <select
            id="areaOfInterest"
            value={formData.areaOfInterest}
            onChange={(e) => setFormData({ ...formData, areaOfInterest: e.target.value })}
            className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm bg-white focus:outline-none focus:border-[#059669]"
          >
            {sectors.map((sec) => (
              <option key={sec} value={sec}>
                {sec}
              </option>
            ))}
          </select>
        </div>

        {/* What are you currently building or working on? */}
        <div className="space-y-1.5 sm:col-span-2">
          <label htmlFor="currentProject" className="block text-xs font-semibold text-slate-800">
            What are you currently building or working on? <span className="text-rose-500">*</span>
          </label>
          <textarea
            id="currentProject"
            rows={3}
            placeholder="Describe your current product, venture, engineering stack, or problem you are validating..."
            value={formData.currentProject}
            onChange={(e) => setFormData({ ...formData, currentProject: e.target.value })}
            className={`w-full px-3.5 py-2.5 rounded-xl border text-sm transition-colors focus:outline-none ${
              errors.currentProject
                ? 'border-rose-400 bg-rose-50/20 focus:ring-1 focus:ring-rose-400'
                : 'border-slate-200 hover:border-slate-300 focus:border-[#059669] focus:ring-1 focus:ring-[#059669]'
            }`}
          />
          {errors.currentProject && (
            <p className="text-xs text-rose-500">{errors.currentProject}</p>
          )}
        </div>

        {/* Why do you want to join startupclubNG? */}
        <div className="space-y-1.5 sm:col-span-2">
          <label htmlFor="whyJoin" className="block text-xs font-semibold text-slate-800">
            Why do you want to join startupclubNG? <span className="text-rose-500">*</span>
          </label>
          <textarea
            id="whyJoin"
            rows={3}
            placeholder="What specific connections, knowledge, or collaboration are you seeking in the community?"
            value={formData.whyJoin}
            onChange={(e) => setFormData({ ...formData, whyJoin: e.target.value })}
            className={`w-full px-3.5 py-2.5 rounded-xl border text-sm transition-colors focus:outline-none ${
              errors.whyJoin
                ? 'border-rose-400 bg-rose-50/20 focus:ring-1 focus:ring-rose-400'
                : 'border-slate-200 hover:border-slate-300 focus:border-[#059669] focus:ring-1 focus:ring-[#059669]'
            }`}
          />
          {errors.whyJoin && <p className="text-xs text-rose-500">{errors.whyJoin}</p>}
        </div>

        {/* What can you contribute to the community? */}
        <div className="space-y-1.5 sm:col-span-2">
          <label htmlFor="communityContribution" className="block text-xs font-semibold text-slate-800">
            What can you contribute to the community? <span className="text-rose-500">*</span>
          </label>
          <textarea
            id="communityContribution"
            rows={3}
            placeholder="e.g. Technical mentoring in Go/Rust, introductions to angel syndicates, advice on CBN licensing, product teardowns..."
            value={formData.communityContribution}
            onChange={(e) => setFormData({ ...formData, communityContribution: e.target.value })}
            className={`w-full px-3.5 py-2.5 rounded-xl border text-sm transition-colors focus:outline-none ${
              errors.communityContribution
                ? 'border-rose-400 bg-rose-50/20 focus:ring-1 focus:ring-rose-400'
                : 'border-slate-200 hover:border-slate-300 focus:border-[#059669] focus:ring-1 focus:ring-[#059669]'
            }`}
          />
          {errors.communityContribution && (
            <p className="text-xs text-rose-500">{errors.communityContribution}</p>
          )}
        </div>
      </div>

      {/* Vetting & Paid Curated Acknowledgment */}
      <div className="pt-2">
        <label className="flex items-start gap-3 p-4 rounded-xl bg-slate-50 border border-slate-200/80 cursor-pointer">
          <input
            type="checkbox"
            checked={formData.agreeToVetting}
            onChange={(e) => setFormData({ ...formData, agreeToVetting: e.target.checked })}
            className="mt-1 w-4 h-4 rounded text-[#059669] border-slate-300 focus:ring-[#059669]"
          />
          <div className="text-xs text-slate-600 leading-relaxed">
            <strong className="text-slate-900 block mb-0.5">
              I understand startupclubNG is a paid, curated community.
            </strong>
            I acknowledge that submitting this form does not grant immediate WhatsApp or community
            access. My application will be reviewed for quality and fit within 24–48 hours, and I will
            be sent an invitation with payment details only upon acceptance.
          </div>
        </label>
        {errors.agreeToVetting && (
          <p className="text-xs text-rose-500 mt-1.5">{errors.agreeToVetting}</p>
        )}
      </div>

      {/* Submit Button */}
      <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="text-xs text-slate-500 flex items-center gap-1.5">
          <ShieldCheck className="w-4 h-4 text-[#059669]" />
          <span>Encrypted data · Strictly confidential admissions</span>
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 text-sm font-semibold text-white bg-[#04261b] hover:bg-[#064e3b] active:scale-[0.98] rounded-xl transition-all shadow-md cursor-pointer disabled:opacity-70"
        >
          {isSubmitting ? (
            <span>Processing Application...</span>
          ) : (
            <>
              <span>Submit Application for Review</span>
              <ArrowRight className="w-4 h-4" />
            </>
          )}
        </button>
      </div>
    </form>
  );
};
