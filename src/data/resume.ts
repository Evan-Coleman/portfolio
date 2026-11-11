// Source of truth for the home page timeline and the /resume page.

/** Target-role line under your name on the résumé and its downloads. */
export const headline = 'Senior Backend Software Engineer | Technical Lead';

export const summary =
  'Backend engineer and technical lead with 8+ years in Java and Spring Boot. Leads 8 engineers and owns 9 services on AWS and Kubernetes that serve about 30 million API requests a day at the center of State Farm’s migration off legacy systems. Strongest in performance, production reliability, and mentoring; works daily with AI coding agents.';

export interface Role {
  company: string;
  note?: string;
  title: string;
  location: string;
  /** Year and month, e.g. "2022-10". */
  start: string;
  /** Year and month, or null for the current role. */
  end: string | null;
  /** One or two sentences for the home page. */
  summary: string;
  /** Full bullets for the résumé page. */
  highlights: string[];
}

export const roles: Role[] = [
  {
    company: 'State Farm',
    title: 'Lead Software Engineer',
    location: 'Seattle, Washington',
    start: '2022-10',
    end: null,
    summary:
      'Lead a team of eight engineers that owns nine Java and Spring Boot services on AWS and Kubernetes, serving about 30 million API requests a day. Every other team comes to us for policy data as State Farm moves off its legacy systems.',
    highlights: [
      'Lead a team of 8 engineers that owns 9 Java/Spring Boot services on AWS and Kubernetes, serving about 30 million API requests a day and supplying policy data to every other team in State Farm’s move off legacy systems.',
      'Cut p95 API latency by 60% by parallelizing request processing and reworking load balancing as nationwide rollouts increased traffic.',
      'Roughly doubled engineering throughput with AI coding agents (Claude Code, Cursor, GitHub Copilot, Codex) by writing detailed plans, scoping multi-file changes, and verifying output with targeted automated tests.',
      'Run production for the team: releases through GitLab CI/CD and Argo CD, monitoring with OpenTelemetry, Dynatrace, and Splunk, and cross-team coordination during rollouts.',
      'Own system design and code review; mentor junior engineers and built the onboarding documentation and terminal-based tools the team uses to ramp up and work faster.',
    ],
  },
  {
    company: 'Mobilitas / CSAA',
    title: 'Staff Software Engineer',
    location: 'Seattle, Washington',
    start: '2020-11',
    end: '2022-10',
    summary:
      'Delivered the MVP for a new insurance startup within two months, then built the backend and frontend for a fleet-vehicle product that took the company into a new market segment.',
    highlights: [
      'Delivered the MVP for a new insurance startup within 2 months, letting customer contracts be signed ahead of competitors.',
      'Built the Java/Guidewire backend and frontend for a fleet-vehicle product that took the company into a new market segment.',
      'Extended Guidewire PolicyCenter so each new-state rollout could be activated within a sprint.',
    ],
  },
  {
    company: 'Tata Consultancy Services',
    note: 'Client: State Farm',
    title: 'Software Engineer',
    location: 'Bloomington, Illinois',
    start: '2019-08',
    end: '2020-11',
    summary:
      'Designed and built nine Java backend services that replaced legacy data flows, alongside Guidewire PolicyCenter work at a scale of about 50 million policies.',
    highlights: [
      'Designed and built 9 Java backend services that replaced legacy data flows and enabled enterprise data migration across teams.',
      'Developed Guidewire PolicyCenter applications at a scale of about 50 million policies and set testing standards that held unit-test coverage above 95%.',
      'Load-tested new microservices with JMeter to confirm they held up under enterprise-scale traffic.',
    ],
  },
  {
    company: 'Farm Bureau Insurance of Idaho',
    title: 'Software Engineer',
    location: 'Pocatello, Idaho',
    start: '2018-01',
    end: '2019-08',
    summary:
      'Full-stack insurance applications in Java, SQL, Guidewire and Gosu. Cut the UI test suite from more than 12 hours to 4 with Docker.',
    highlights: [
      'Cut UI test-suite runtime by 67%, from more than 12 hours to 4, by refactoring the framework and running it in Docker containers.',
      'Built a third-party auto-policy API integration with up to 50% lower per-call latency than the one it replaced.',
      'Developed full-stack insurance applications and integrations in Java, SQL, Guidewire, and Gosu.',
    ],
  },
];

export const skills: { label: string; items: string[] }[] = [
  { label: 'Languages & frameworks', items: ['Java', 'Spring Boot', 'Spring Cloud', 'SQL', 'Gosu'] },
  { label: 'Backend', items: ['REST APIs', 'Microservices', 'Redis', 'Message queues', 'Guidewire PolicyCenter'] },
  { label: 'Cloud & delivery', items: ['AWS', 'Kubernetes', 'Docker', 'Argo CD', 'GitLab CI/CD'] },
  { label: 'Observability & testing', items: ['OpenTelemetry', 'Dynatrace', 'Splunk', 'JMeter'] },
  { label: 'AI-assisted engineering', items: ['Claude Code', 'Cursor', 'GitHub Copilot', 'Codex', 'MCP'] },
];

export const education = {
  school: 'Washington State University',
  degree: 'Bachelor’s degree',
  fields: 'Computer Science, German',
  year: '2017',
};

const MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

const month = (value: string) => `${MONTHS[Number(value.slice(5, 7)) - 1]} ${value.slice(0, 4)}`;
const year = (value: string) => value.slice(0, 4);

/** "Oct 2022 – Present" */
export function monthRange(role: Role) {
  return `${month(role.start)} – ${role.end ? month(role.end) : 'Present'}`;
}

/** "2022 – Present" */
export function yearRange(role: Role) {
  const end = role.end ? year(role.end) : 'Present';
  return year(role.start) === end ? end : `${year(role.start)} – ${end}`;
}
