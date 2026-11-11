// Shared by the /res/ résumé download endpoints (PDF, Word, plain text).
import { site } from '../data/site';
import { education, headline, skills, monthRange, type Role } from '../data/resume';

const bare = (url: string) => url.replace(/^https?:\/\/(www\.)?/, '').replace(/\/$/, '');

/** Between items that share a line. A spaced pipe survives every parser and encoding. */
export const SEP = ' | ';

export interface ContactPart {
  text: string;
  /** Link target, for formats that can carry one without changing the visible text. */
  href?: string;
}

/** Contact details in order: location, email, phone (if set), LinkedIn, site. */
export function contactParts(): ContactPart[] {
  const email = process.env.RESUME_EMAIL?.trim() || site.email;
  const phone = process.env.RESUME_PHONE?.trim();
  return [
    { text: site.location },
    { text: email, href: `mailto:${email}` },
    ...(phone ? [{ text: phone, href: `tel:${phone.replace(/[^+\d]/g, '')}` }] : []),
    { text: bare(site.links.linkedin), href: site.links.linkedin },
    { text: bare(site.url), href: site.url },
  ];
}

/** Citizenship, work authorization and relocation: the line under the contact details. */
export const authorizationParts: readonly string[] = site.workAuthorization;

export const docTitle = `${site.name} - Resume`;
export const docAuthor = site.name;
export const docSubject = headline;
export const docKeywords = skills.flatMap((group) => group.items).join(', ');

/** "Oct 2022 - Present". A plain hyphen: date ranges feed parsed fields, so they stay ASCII. */
export function dateRange(role: Role): string {
  return monthRange(role).replace('–', '-');
}

/** "Company (note), Location" */
export function roleDetail(role: Role): string {
  return `${role.company}${role.note ? ` (${role.note})` : ''}, ${role.location}`;
}

/** "School – degree – fields" */
export function educationLine(): string {
  return `${education.school} – ${education.degree} – ${education.detail}`;
}

/** Typographic punctuation and accents down to ASCII, for the plain-text download. */
export function ascii(text: string): string {
  return text
    .replace(/[‘’]/g, "'")
    .replace(/[“”]/g, '"')
    .replace(/[–—]/g, '-')
    .replace(/…/g, '...')
    .replace(/[·•]/g, '|')
    .replace(/ /g, ' ')
    .normalize('NFKD')
    .replace(/[^\x20-\x7e\n]/g, '');
}
