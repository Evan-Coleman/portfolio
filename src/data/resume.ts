// Source of truth for the home page timeline and the /resume page.

/** Target-role line under your name on the résumé and its downloads. */
export const headline = 'Senior Backend Engineer | Technical Lead';

export const summary =
  'Backend engineer and tech lead with 8+ years of Java. Designed and built 9 Spring Boot services for State Farm’s migration off legacy systems; now lead the 8-engineer team that runs them on AWS and Kubernetes at about 30 million API requests a day. Strongest in performance, production reliability, and making AI coding agents work for a whole team.';

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
      'Lead a team of 8 engineers that owns 9 Java/Spring Boot microservices on AWS and Kubernetes, serving about 30 million API requests a day and supplying policy data to every other team in State Farm’s move off legacy systems.',
      'Cut average response time on the team’s largest service from 2–4 seconds to 250–500 ms as nationwide rollouts grew traffic, with multithreaded request processing and improved load balancing; what remains is downstream latency.',
      'Doubled deploy cadence and cut incidents 15% (rolling six months) by adding automated tests, verification steps, and AI code review to a GitLab CI/CD and Argo CD pipeline monitored with OpenTelemetry, Dynatrace, and Splunk.',
      'Built a modular onboarding CLI that took new-engineer setup from months to a few hours and configures existing developers’ machines for AI-assisted work with shared skills and workflows; other teams have adopted it.',
      'Consolidated documentation into one repository that AI agents index and search, ending waits on the architect for answers about existing systems, and wrote the team’s standards as shared agent skills with the senior engineers.',
      'Own system design and code review for the team: approve designs and pull requests, delegate work, manage production deploys and cross-team dependencies during rollouts, and mentor junior engineers.',
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
      'Delivered a new insurance startup’s MVP within 2 months, so it could sign customer contracts ahead of competitors.',
      'Built the Java/Guidewire backend and frontend of a fleet-vehicle product that opened a new market segment.',
      'Extended Guidewire PolicyCenter to activate each new-state rollout within a sprint; steered a TDD/BDD workflow.',
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
      'Designed and built from the ground up the 9 Java/Spring Boot services that replaced legacy data flows and enabled enterprise data migration across teams; they now run in production in many US states under the team I lead.',
      'Set testing standards that held unit-test coverage above 95%, and load-tested the new services with JMeter.',
      'Developed Guidewire PolicyCenter applications for about 50 million policies, and operated 15+ microservices.',
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
      'Cut UI test-suite runtime 67%, from more than 12 hours to 4, by refactoring the framework and running it in Docker.',
      'Built a third-party auto-policy API integration with up to 50% lower per-call latency than the one it replaced.',
      'Developed full-stack insurance applications and integrations in Java, SQL, and Gosu on Guidewire.',
    ],
  },
];

export const skills: { label: string; items: string[] }[] = [
  {
    label: 'Backend',
    // Insurance-platform skills last: true, findable, and out of the way for product companies.
    items: [
      'Java',
      'Spring Boot',
      'Spring Cloud',
      'REST APIs',
      'Microservices',
      'SQL',
      'Redis',
      'Guidewire PolicyCenter',
      'Gosu',
    ],
  },
  { label: 'Cloud and DevOps', items: ['AWS', 'Kubernetes', 'Docker', 'GitLab CI/CD', 'Argo CD'] },
  { label: 'Observability and testing', items: ['OpenTelemetry', 'Dynatrace', 'Splunk', 'JMeter'] },
  {
    label: 'AI-assisted engineering',
    items: ['Claude Code', 'Cursor', 'GitHub Copilot', 'Codex', 'Model Context Protocol (MCP)'],
  },
];

export const education = {
  school: 'Washington State University',
  degree: 'Bachelor’s',
  detail: 'Computer Science, German',
  year: '2017',
};

/** Personal projects listed on the résumé. Full write-ups live in src/content/projects. */
export const sideProjects: { name: string; link?: string; detail: string }[] = [
  {
    name: 'OrthoRep',
    link: 'orthorep.app',
    detail:
      'Strength-training logger for iPhone with a standalone Apple Watch app, built solo and live on the App Store. Native Swift, SwiftUI, and SwiftData; local-first, with two-way watch sync over WatchConnectivity.',
  },
  {
    name: 'Steady',
    detail:
      'Python CLI taking AI-agent tasks from plan through automated checks to human review (private prerelease).',
  },
];

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
