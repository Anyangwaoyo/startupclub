export interface CommunityMember {
  id: string;
  name: string;
  role: string;
  company: string;
  location: string;
  sector: string;
  initials: string;
  verified: boolean;
}

export interface PersonaItem {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  whoItIs: string;
  keyBenefits: string[];
  spotlightBadge: string;
}

export interface EventItem {
  id: string;
  title: string;
  category: 'Founder Meetup' | 'Startup Session' | 'Workshop' | 'Pitch Event' | 'Networking Event' | 'Funding Opportunity';
  date: string;
  time: string;
  location: string;
  format: 'In-Person (Lagos)' | 'In-Person (Abuja)' | 'Hybrid' | 'Virtual / Discord';
  description: string;
  speakers?: string[];
  capacity?: string;
  isCurated: boolean;
  actionText: string;
}

export interface BenefitItem {
  id: string;
  title: string;
  description: string;
  detail: string;
  iconName: string;
}

export interface PillarItem {
  pillar: 'BUILD' | 'CONNECT' | 'GROW';
  tagline: string;
  summary: string;
  description: string;
  highlights: string[];
  stat: string;
  statLabel: string;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
  category: 'Membership & Fees' | 'Review & Selection' | 'Community Access' | 'Benefits';
}

export interface ApplicationFormData {
  fullName: string;
  email: string;
  phone: string;
  countryCode: string;
  location: string;
  linkedinUrl: string;
  currentRole: string;
  companyOrStartup: string;
  areaOfInterest: string;
  currentProject: string;
  whyJoin: string;
  communityContribution: string;
  agreeToVetting: boolean;
}

export interface SubmittedApplication extends ApplicationFormData {
  id: string;
  submittedAt: string;
  status: 'PENDING_REVIEW';
}
