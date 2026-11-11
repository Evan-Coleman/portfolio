import type { APIRoute } from 'astro';
import PDFDocument from 'pdfkit';
import { headline, summary, roles, skills, education, monthRange } from '../../data/resume';
import { contactParts, docTitle, docAuthor, roleDetail, educationLine } from '../../lib/resume-export';

const R = 'Helvetica';
const B = 'Helvetica-Bold';
const I = 'Helvetica-Oblique';
const BODY = 9.5;
const GAP = 1;

export const GET: APIRoute = async () => {
  const doc = new PDFDocument({
    size: 'LETTER',
    margins: { top: 43, bottom: 43, left: 43, right: 43 },
    info: { Title: docTitle, Author: docAuthor },
  });
  const chunks: Buffer[] = [];
  doc.on('data', (c: Buffer) => chunks.push(c));
  const done = new Promise<void>((resolve) => doc.on('end', () => resolve()));

  const left = doc.page.margins.left;
  const width = doc.page.width - left - doc.page.margins.right;

  const heading = (text: string) => {
    doc.moveDown(0);
    doc.y += 6;
    doc.font(B).fontSize(11).fillColor('black').text(text.toUpperCase(), left, doc.y, { width, lineGap: 0 });
    const y = doc.y + 1;
    doc.moveTo(left, y).lineTo(left + width, y).lineWidth(0.6).strokeColor('black').stroke();
    doc.y = y + 3;
  };

  doc.fillColor('black');
  doc.font(B).fontSize(20).text(docAuthor, left, doc.y, { width, align: 'center' });
  doc.font(B).fontSize(10.5).text(headline, { width, align: 'center' });
  doc.font(R).fontSize(9.5).text(contactParts().join(' | '), { width, align: 'center' });

  heading('Summary');
  doc.font(R).fontSize(BODY).text(summary, left, doc.y, { width, lineGap: GAP });

  heading('Technical Skills');
  for (const g of skills) {
    doc.font(B).fontSize(BODY).text(`${g.label}: `, left, doc.y, { width, continued: true, lineGap: GAP });
    doc.font(R).text(g.items.join(', '));
  }

  heading('Experience');
  roles.forEach((role, i) => {
    if (i) doc.y += 3;
    const y = doc.y;
    doc.font(R).fontSize(BODY);
    const range = monthRange(role);
    const rangeW = doc.widthOfString(range);
    doc.font(B).fontSize(BODY).text(role.title, left, y, { width: width - rangeW - 6, continued: true, lineGap: GAP });
    doc.font(R).text(' | ', { continued: true });
    doc.font(I).text(roleDetail(role));
    const after = doc.y;
    doc.font(R).fontSize(BODY).text(range, left, y, { width, align: 'right', lineGap: GAP });
    doc.y = after;
    for (const h of role.highlights) {
      const by = doc.y;
      doc.font(R).fontSize(BODY).text('•', left + 4, by, { lineBreak: false });
      doc.text(h, left + 16, by, { width: width - 16, lineGap: GAP });
    }
  });

  heading('Education');
  {
    const y = doc.y;
    doc.font(R).fontSize(BODY);
    const yw = doc.widthOfString(education.year);
    doc.text(educationLine(), left, y, { width: width - yw - 6, lineGap: GAP });
    const after = doc.y;
    doc.text(education.year, left, y, { width, align: 'right' });
    doc.y = after;
  }

  doc.end();
  await done;
  return new Response(Buffer.concat(chunks), {
    headers: { 'Content-Type': 'application/pdf' },
  });
};
