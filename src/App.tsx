/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AboutSection } from './components/AboutSection';
import { WhoItsFor } from './components/WhoItsFor';
import { PillarsSection } from './components/PillarsSection';
import { EventsSection } from './components/EventsSection';
import { MembershipSection } from './components/MembershipSection';
import { FaqSection } from './components/FaqSection';
import { ContactFooter } from './components/ContactFooter';
import { EventDetailModal, PartnershipModal, LegalModal, ApplicationModal } from './components/Modals';
import { EventItem } from './types';

export default function App() {
  const [selectedRole, setSelectedRole] = useState<string>('Founder / Co-Founder');
  const [selectedEvent, setSelectedEvent] = useState<EventItem | null>(null);
  const [isPartnershipOpen, setIsPartnershipOpen] = useState(false);
  const [legalModalType, setLegalModalType] = useState<'privacy' | 'terms' | null>(null);
  const [isApplyModalOpen, setIsApplyModalOpen] = useState(false);

  const openApplyModal = (role?: string) => {
    if (role) setSelectedRole(role);
    setIsApplyModalOpen(true);
  };

  const scrollToCommunity = () => {
    const el = document.getElementById('community');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#FBFBFA] text-[#0f172a] flex flex-col font-sans selection:bg-[#059669]/20 selection:text-[#04261b]">
      {/* 1. Navigation */}
      <Navbar onOpenApply={() => openApplyModal()} />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* 2. Hero Section */}
        <Hero
          onOpenApply={() => openApplyModal()}
          onExploreCommunity={scrollToCommunity}
        />

        {/* 3. About Section */}
        <AboutSection />

        {/* 4. Community Members List (without category explanations) */}
        <WhoItsFor onOpenApply={() => openApplyModal()} />

        {/* 5. BUILD. CONNECT. GROW. */}
        <PillarsSection onOpenApply={() => openApplyModal()} />

        {/* 6. Events (MVP Coming Soon) */}
        <EventsSection onOpenApply={() => openApplyModal()} />

        {/* 8. Membership (Short statistics card and one Apply button) */}
        <MembershipSection onOpenApply={() => openApplyModal()} />

        {/* 9. FAQ */}
        <FaqSection />
      </main>

      {/* 10. Contact & Footer */}
      <ContactFooter
        onOpenApply={() => openApplyModal()}
        onOpenPartnership={() => setIsPartnershipOpen(true)}
        onOpenLegal={(type) => setLegalModalType(type)}
      />

      {/* Interactive Modals */}
      <ApplicationModal
        isOpen={isApplyModalOpen}
        onClose={() => setIsApplyModalOpen(false)}
        initialRole={selectedRole}
      />

      <EventDetailModal
        event={selectedEvent}
        onClose={() => setSelectedEvent(null)}
        onApplyForEvent={() => openApplyModal()}
      />

      <PartnershipModal
        isOpen={isPartnershipOpen}
        onClose={() => setIsPartnershipOpen(false)}
      />

      <LegalModal
        type={legalModalType}
        onClose={() => setLegalModalType(null)}
      />
    </div>
  );
}
