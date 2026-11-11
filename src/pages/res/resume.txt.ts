import type { APIRoute } from 'astro';
import { headline, summary, roles, skills, sideProjects, education, monthRange } from '../../data/resume';
import { contactParts, docAuthor, roleDetail, educationLine } from '../../lib/resume-export';

const COLS = 90;

function wrap(text: string, width: number, first = '', rest = first): string[] {
  const lines: string[] = [];
  let line = first;
  let empty = true;
  for (const word of text.split(/\s+/)) {
    if (!empty && line.length + 1 + word.length > width) {
      lines.push(line);
      line = rest + word;
    } else {
      line += (empty ? '' : ' ') + word;
    }
    empty = false;
  }
  lines.push(line);
  return lines;
}

const center = (s: string) => ' '.repeat(Math.max(0, Math.floor((COLS - s.length) / 2))) + s;

export const GET: APIRoute = () => {
  const out: string[] = [];
  out.push(center(docAuthor.toUpperCase()), center(headline), center(contactParts().join(' | ')), '');

  out.push('SUMMARY', ...wrap(summary, COLS), '');

  out.push('TECHNICAL SKILLS');
  for (const g of skills) out.push(...wrap(`${g.label}: ${g.items.join(', ')}`, COLS, '', '  '));
  out.push('');

  out.push('EXPERIENCE');
  roles.forEach((role, i) => {
    if (i) out.push('');
    out.push(...wrap(`${role.title} | ${roleDetail(role)} | ${monthRange(role)}`, COLS, '', '  '));
    for (const h of role.highlights) out.push(...wrap(h, COLS, '- ', '  '));
  });
  out.push('');

  if (sideProjects.length) {
    out.push('PROJECTS');
    for (const p of sideProjects) {
      out.push(...wrap(`${p.name}${p.link ? ' (link)' : ''} - ${p.detail}`, COLS, '', '  '));
    }
    out.push('');
  }

  out.push('EDUCATION', ...wrap(`${educationLine()}, ${education.year}`, COLS, '', '  '), '');

  return new Response(out.join('\n'), {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  });
};
