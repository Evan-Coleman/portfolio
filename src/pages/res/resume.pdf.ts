import type { APIRoute } from 'astro';
import PDFDocument from 'pdfkit';
import { headline, summary, roles, skills, sideProjects, education } from '../../data/resume';
import {
  SEP,
  authorizationParts,
  contactParts,
  dateRange,
  docAuthor,
  docKeywords,
  docSubject,
  docTitle,
  educationLine,
  roleDetail,
  type ContactPart,
} from '../../lib/resume-export';

// Built for résumé parsers first: one column, standard fonts, and every piece of text drawn in
// the order it is read, so position-based and stream-based extractors return the same thing.
const R = 'Helvetica';
const B = 'Helvetica-Bold';
const I = 'Helvetica-Oblique';
const BODY = 9.5;
const GAP = 1;
const MARGIN = 43.2; // 0.6in

export const GET: APIRoute = async () => {
  const doc = new PDFDocument({
    size: 'LETTER',
    margins: { top: MARGIN, bottom: MARGIN, left: MARGIN, right: MARGIN },
    pdfVersion: '1.7',
    tagged: true,
    lang: 'en-US',
    displayTitle: true,
    info: { Title: docTitle, Author: docAuthor, Subject: docSubject, Keywords: docKeywords },
  });
  const chunks: Buffer[] = [];
  doc.on('data', (c: Buffer) => chunks.push(c));
  const done = new Promise<void>((resolve) => doc.on('end', () => resolve()));
  let pages = 1;
  doc.on('pageAdded', () => (pages += 1));

  const left = MARGIN;
  const width = doc.page.width - 2 * MARGIN;
  const lineHeight = () => doc.currentLineHeight(true) + GAP;

  // Tags give the file a logical structure (headings, paragraphs, lists, links) for screen
  // readers and for tools that follow structure rather than position.
  const root = doc.struct('Document');
  doc.addStructure(root);
  type Parent = PDFKit.PDFStructureElement;
  const tag = (type: string, draw: () => void, parent: Parent = root) => {
    parent.add(doc.struct(type, {}, draw));
  };

  const heading = (text: string) => {
    doc.y += 7;
    tag('H2', () => {
      doc.font(B).fontSize(11).text(text.toUpperCase(), left, doc.y, { width, lineGap: 0 });
    });
    const y = doc.y + 1;
    doc.markContent('Artifact', { type: 'Layout' });
    doc.moveTo(left, y).lineTo(left + width, y).lineWidth(0.6).strokeColor('black').stroke();
    doc.endMarkedContent();
    doc.y = y + 4;
  };

  /**
   * Left text with a right-aligned date on the same line. The gap between them is filled with
   * real spaces: extractors that read the content stream (pdfminer and what is built on it)
   * otherwise treat a far-right date as a separate block and drop it into the bullets below.
   */
  const dated = (type: string, font: string, text: string, date: string) => {
    const y = doc.y;
    doc.font(R).fontSize(BODY);
    const dateWidth = doc.widthOfString(date);
    const space = doc.widthOfString(' ');
    const textWidth = doc.font(font).widthOfString(text);
    const gap = width - textWidth - dateWidth;
    // Each space is stretched to at most twice its width, which those extractors still chain.
    const count = Math.ceil(gap / (2 * space));
    if (gap < 3 * space) {
      // Too long for one line: wrap the text beside the date.
      tag(type, () => doc.text(text, left, y, { width: width - dateWidth - 8, lineGap: GAP }));
      const after = doc.y;
      tag('P', () => doc.font(R).text(date, left, y, { width, align: 'right', lineGap: GAP }));
      doc.y = after;
      return;
    }
    tag(type, () => doc.text(text, left, y, { lineBreak: false }));
    tag('P', () => {
      doc.font(R).text(' '.repeat(count), left + textWidth, y, {
        lineBreak: false,
        characterSpacing: gap / count - space,
      });
      doc.text(date, left + width - dateWidth, y, { lineBreak: false, characterSpacing: 0 });
    });
    doc.x = left;
    doc.y = y + lineHeight();
  };

  /** One centered line of contact details, each address its own link. */
  const contactLine = (parts: ContactPart[]) => {
    const y = doc.y;
    let x = left + (width - doc.widthOfString(parts.map((p) => p.text).join(SEP))) / 2;
    const line = doc.struct('P');
    root.add(line);
    const put = (text: string, link?: string) => {
      doc.text(text, x, y, { lineBreak: false, link });
      x += doc.widthOfString(text);
    };
    parts.forEach((part, i) => {
      if (i) line.add(() => put(SEP));
      if (part.href) line.add(doc.struct('Link', {}, () => put(part.text, part.href)));
      else line.add(() => put(part.text));
    });
    line.end();
    doc.x = left;
    doc.y = y + lineHeight();
  };

  doc.fillColor('black');
  tag('H1', () => {
    doc.font(B).fontSize(20).text(docAuthor, left, doc.y, { width, align: 'center' });
  });
  tag('P', () => {
    doc.font(B).fontSize(10.5).text(headline, left, doc.y, { width, align: 'center' });
  });
  doc.y += 1;

  // Contact details on one line; a long private email or phone number moves the rest to a second.
  doc.font(R).fontSize(BODY);
  const rows: ContactPart[][] = [];
  for (const part of contactParts()) {
    const row = rows[rows.length - 1];
    if (row && doc.widthOfString([...row, part].map((p) => p.text).join(SEP)) <= width) row.push(part);
    else rows.push([part]);
  }
  rows.forEach(contactLine);
  tag('P', () => {
    doc.text(authorizationParts.join(SEP), left, doc.y, { width, align: 'center', lineGap: GAP });
  });

  heading('Summary');
  tag('P', () => {
    doc.font(R).fontSize(BODY).text(summary, left, doc.y, { width, lineGap: GAP });
  });

  heading('Experience');
  roles.forEach((role, i) => {
    if (i) doc.y += 4;
    dated('H3', B, role.title, dateRange(role));
    tag('P', () => {
      doc.font(I).fontSize(BODY).text(roleDetail(role), left, doc.y, { width, lineGap: GAP });
    });
    const list = doc.struct('L');
    root.add(list);
    for (const h of role.highlights) {
      const y = doc.y;
      const item = doc.struct('LI');
      list.add(item);
      tag('Lbl', () => doc.font(R).fontSize(BODY).text('•', left + 4, y, { lineBreak: false }), item);
      tag('LBody', () => doc.text(h, left + 16, y, { width: width - 16, lineGap: GAP }), item);
      item.end();
    }
    list.end();
  });

  heading('Technical Skills');
  for (const g of skills) {
    tag('P', () => {
      doc.font(B).fontSize(BODY).text(`${g.label}: `, left, doc.y, { width, continued: true, lineGap: GAP });
      doc.font(R).text(g.items.join(', '));
    });
  }

  if (sideProjects.length) {
    heading('Projects');
    for (const p of sideProjects) {
      const para = doc.struct('P');
      root.add(para);
      para.add(() => {
        doc.font(B).fontSize(BODY).text(p.name, left, doc.y, { width, continued: true, lineGap: GAP });
        if (p.link) doc.font(R).text(' (', { continued: true });
      });
      if (p.link) {
        const { link } = p;
        para.add(doc.struct('Link', {}, () => doc.text(link, { continued: true, link: `https://${link}` })));
      }
      para.add(() => doc.font(R).text(`${p.link ? ')' : ''} – ${p.detail}`, { link: null }));
      para.end();
    }
  }

  heading('Education');
  dated('P', R, educationLine(), education.year);

  root.end();
  doc.end();
  await done;
  // The résumé is one page by design. Fail the build rather than publish a second one.
  if (pages > 1) throw new Error('resume.pdf runs past one page: shorten the text in src/data/resume.ts.');
  return new Response(Buffer.concat(chunks), {
    headers: { 'Content-Type': 'application/pdf' },
  });
};
