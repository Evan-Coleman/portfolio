// Source of truth for the home page timeline and the /resume page.

export interface Role {
  company: string;
  note?: string;
  title: string;
  start: string;
  end: string;
  /** One or two sentences for the home page. */
  summary: string;
  /** Full bullets for the résumé page. */
  highlights: string[];
}

export const roles: Role[] = [
  {
    company: 'State Farm',
    title: 'Lead Software Engineer',
    start: '2022',
    end: 'Present',
    summary:
      'Lead the team that owns nine mission-critical backend services at the center of State Farm’s move off legacy systems. Every other team comes to us for policy data.',
    highlights: [
      'Lead the team that owns nine mission-critical backend services in State Farm’s modernization away from legacy systems. We supply data on every aspect of every insurance policy to every other team, and run the migration of that data from the legacy system to the modern one.',
      'Tackled production performance problems as nationwide rollouts loaded the system, with rewrites and refactors that cut per-service resource usage.',
      'Manage production deploys for the team and coordinate cross-team dependencies through complex rollouts.',
      'Mentor junior developers toward more performant, maintainable code.',
    ],
  },
  {
    company: 'CSAA · Mobilitas',
    title: 'Staff Software Engineer',
    start: '2020',
    end: '2020',
    summary:
      'Built the product from scratch at a brand-new insurance startup: live in key states within two months, then a pivot to a new product that shipped within a month.',
    highlights: [
      'Mobilitas was a brand-new startup; my job was to get the product running from scratch.',
      'Rolled out a working product in key states within two months of starting, which let contracts be signed ahead of competitors.',
      'Pivoted to a completely new product when a business opportunity came up, and had it built and deployed within a month.',
      'Used my PolicyCenter knowledge to streamline new state rollouts so each could be activated within a sprint.',
      'Steered the TDD/BDD workflow to get maximum test coverage for the time spent.',
    ],
  },
  {
    company: 'Tata Consultancy Services',
    note: 'Client: State Farm',
    title: 'Software Engineer',
    start: '2019',
    end: '2020',
    summary:
      'Spring Boot APIs on Pivotal Cloud Foundry and full-stack Guidewire PolicyCenter work at a scale of roughly 50 million policies.',
    highlights: [
      'Built APIs as Spring Boot (Java) applications deployed on Pivotal Cloud Foundry.',
      'Full-stack Guidewire PolicyCenter development at large scale, around 50 million insurance policies.',
      'Managed, modified and monitored more than 15 microservices integrating with other services and Guidewire.',
      'Load-tested new microservices to make sure they would hold up under enterprise levels of traffic.',
    ],
  },
  {
    company: 'Farm Bureau Insurance',
    title: 'Software Engineer',
    start: '2018',
    end: '2019',
    summary:
      'Full-stack Guidewire development in Java, SQL and Gosu. Cut the UI test suite from 12+ hours to 4 with Docker.',
    highlights: [
      'Full-stack Guidewire development with Java, SQL and the DSL Gosu.',
      'Refactored the UI test framework with Docker, cutting test run time from 12+ hours to 4.',
      'Built a new integration with a third-party API for auto policies.',
    ],
  },
];

export const skills: { label: string; items: string[] }[] = [
  { label: 'Languages & frameworks', items: ['Java', 'Spring Boot', 'SQL', 'Gosu'] },
  { label: 'Backend', items: ['API design', 'Microservices', 'Performance tuning', 'Load testing', 'Legacy migration'] },
  { label: 'Practice', items: ['Unit testing', 'TDD / BDD', 'Production deploys', 'Docker'] },
  { label: 'Leadership', items: ['Team lead', 'Mentoring', 'Cross-team coordination'] },
  { label: 'Domain', items: ['Insurance', 'Guidewire PolicyCenter'] },
];

export const education = {
  school: 'Washington State University',
  degree: 'Bachelor’s degree',
  fields: 'Computer Science, German',
  year: '2017',
};
