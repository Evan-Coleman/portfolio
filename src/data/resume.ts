// Source of truth for the home page timeline and the /resume page.

/** Target-role line under your name on the résumé and its downloads. */
export const headline = 'Senior Backend Software Engineer | Technical Lead';

export const summary =
  'Backend engineer and technical lead with 8+ years in Java and Spring Boot. Built 9 services from the ground up for State Farm’s migration off legacy systems and now leads the 8-engineer team that runs them on AWS and Kubernetes at about 30 million API requests a day. Strongest in performance, production reliability, and tooling that makes AI coding agents useful to a whole team.';

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
      'Lead the eight engineers who own nine Java and Spring Boot services on AWS and Kubernetes, serving about 30 million API requests a day. Took the largest from 2–4 seconds to 250–500 ms, doubled deploy cadence, and built the onboarding CLI that cut setup from months to hours.',
    highlights: [
      'Lead a team of 8 engineers that owns 9 Java/Spring Boot services on AWS and Kubernetes, serving about 30 million API requests a day and supplying policy data to every other team in State Farm’s move off legacy systems.',
      'Cut average response time on the team’s largest service from 2–4 seconds to 250–500 ms by parallelizing request processing and reworking load balancing; the time that remains is all spent in downstream services.',
      'Doubled deploy cadence and cut incidents 15% over a rolling six months by adding automated tests, verification steps, and AI code review to a GitLab CI/CD and Argo CD pipeline monitored with OpenTelemetry, Dynatrace, and Splunk.',
      'Built an onboarding and conformance CLI that cut new-engineer setup from months to a few hours and configures every developer’s machine for AI-assisted work; it is modular, and other teams have adopted it.',
      'Consolidated scattered team documentation into one repository built for AI agents to search, so engineers get answers about existing systems without waiting on the architect, and worked with the team’s senior engineers to encode its standards as shared AI skills.',
      'Own system design and code review for the team, and mentor junior engineers.',
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
      'Designed and built, from the ground up, the nine Java backend services that replaced State Farm’s legacy data flows. They now run in production across many US states, and I lead the team that owns them.',
    highlights: [
      'Designed and built from the ground up the 9 Java backend services that replaced legacy data flows and enabled enterprise data migration across teams; they now run in production in many US states under the team I lead.',
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
  { label: 'Backend', items: ['REST APIs', 'Microservices', 'Redis', 'Guidewire PolicyCenter'] },
  { label: 'Cloud & delivery', items: ['AWS', 'Kubernetes', 'Docker', 'Argo CD', 'GitLab CI/CD'] },
  { label: 'Observability & testing', items: ['OpenTelemetry', 'Dynatrace', 'Splunk', 'JMeter'] },
  { label: 'AI-assisted engineering', items: ['Claude Code', 'Cursor', 'GitHub Copilot', 'Codex', 'MCP', 'Agent skills'] },
];

// State the degree exactly as the diploma does; employers verify this line.
export const education = {
  school: 'Washington State University',
  degree: 'Bachelor of Arts',
  detail: 'Coursework in computer science and German',
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
