// Everything about you that appears in more than one place lives here.

export const site = {
  name: 'Evan Coleman',
  title: 'Evan Coleman — Lead Software Engineer',
  role: 'Lead Software Engineer',
  description:
    'Evan Coleman is a lead software engineer and technical lead building backend services in Java and Spring Boot on AWS and Kubernetes. Résumé, projects and writing.',
  url: 'https://ecoleman.dev',
  email: 'jobs@ecoleman.dev',
  // First item of the résumé's contact line. Recruiters and résumé parsers both filter on it.
  location: 'Seattle, WA, USA',
  // Shown in the hero.
  availability: 'US and German citizen · open to relocating to Europe',
  // Second line of the résumé header, on the page and in the downloads. The same file goes to
  // US and European employers, so it says "relocation" without naming a destination.
  workAuthorization: [
    'US and German (EU) citizen',
    'Authorized to work in the US and EU without sponsorship',
    'Open to relocation',
  ],
  links: {
    github: 'https://github.com/Evan-Coleman',
    linkedin: 'https://www.linkedin.com/in/evan-coleman/',
  },
} as const;
