import type { APIRoute } from 'astro';
import { headline, summary, roles, skills, sideProjects, education } from '../../data/resume';
import {
  ascii,
  authorizationParts,
  contactParts,
  dateRange,
  docAuthor,
  educationLine,
  roleDetail,
} from '../../lib/resume-export';

// The copy for pasting into application forms: ASCII only, nothing centered, one fact per line
// in the header and in each role's heading, and hard-wrapped so it reads the same in any text box.
const COLS = 80;

function wrap(text: string, first = '', rest = first): string[] {
  const lines: string[] = [];
  let line = first;
  let empty = true;
  for (const word of ascii(text).split(/\s+/)) {
    if (!empty && line.length + 1 + word.length > COLS) {
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

export const GET: APIRoute = () => {
  const out: string[] = [];
  out.push(...wrap(docAuthor), ...wrap(headline));
  for (const part of contactParts()) out.push(...wrap(part.text));
  for (const part of authorizationParts) out.push(...wrap(part));
  out.push('');

  out.push('SUMMARY', ...wrap(summary), '');

  out.push('EXPERIENCE');
  for (const role of roles) {
    out.push('', ...wrap(role.title), ...wrap(roleDetail(role)), dateRange(role));
    for (const h of role.highlights) out.push(...wrap(h, '- ', '  '));
  }
  out.push('');

  out.push('TECHNICAL SKILLS');
  for (const g of skills) out.push(...wrap(`${g.label}: ${g.items.join(', ')}`, '', '  '));
  out.push('');

  if (sideProjects.length) {
    out.push('PROJECTS');
    for (const p of sideProjects) {
      out.push(...wrap(`${p.name}${p.link ? ` (${p.link})` : ''} - ${p.detail}`, '', '  '));
    }
    out.push('');
  }

  out.push('EDUCATION', ...wrap(`${educationLine()}, ${education.year}`, '', '  '), '');

  return new Response(out.join('\n'), {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  });
};
