// Shared by the /res/resume.{pdf,docx,txt} endpoints.
import { site } from '../data/site';
import { education, type Role } from '../data/resume';

const bare = (url: string) => url.replace(/^https?:\/\/(www\.)?/, '').replace(/\/$/, '');

/** Contact strings in order: email, phone (if set), LinkedIn, site. */
export function contactParts(): string[] {
  const email = process.env.RESUME_EMAIL?.trim() || site.email;
  const phone = process.env.RESUME_PHONE?.trim();
  return [email, ...(phone ? [phone] : []), bare(site.links.linkedin), bare(site.url)];
}

export const docTitle = `${site.name} - Resume`;
export const docAuthor = site.name;

/** "Company (note) - Location" */
export function roleDetail(role: Role): string {
  return `${role.company}${role.note ? ` (${role.note})` : ''} - ${role.location}`;
}

/** "School – degree – fields" */
export function educationLine(): string {
  return `${education.school} – ${education.degree} – ${education.fields}`;
}
