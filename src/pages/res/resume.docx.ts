import type { APIRoute } from 'astro';
import {
  AlignmentType,
  BorderStyle,
  Document,
  LevelFormat,
  Packer,
  Paragraph,
  TabStopType,
  TextRun,
} from 'docx';
import { headline, summary, roles, skills, education, monthRange } from '../../data/resume';
import { contactParts, docTitle, docAuthor, roleDetail, educationLine } from '../../lib/resume-export';

const FONT = 'Arial';
const BODY = 19; // half-points (9.5pt)
const WIDTH = 12240 - 2 * 864; // Letter minus 0.6in margins, in twips
const t = (text: string, o: Record<string, unknown> = {}) => new TextRun({ text, font: FONT, size: BODY, ...o });
const LINE = { line: 250 };

const heading = (text: string) =>
  new Paragraph({
    spacing: { before: 120, after: 50, ...LINE },
    keepNext: true,
    border: { bottom: { style: BorderStyle.SINGLE, size: 6, space: 1, color: '000000' } },
    children: [t(text.toUpperCase(), { bold: true, size: 22 })],
  });

const tabbed = (children: TextRun[], right: string, before = 0) =>
  new Paragraph({
    spacing: { before, ...LINE },
    tabStops: [{ type: TabStopType.RIGHT, position: WIDTH }],
    children: [...children, t(`\t${right}`)],
  });

export const GET: APIRoute = async () => {
  const doc = new Document({
    title: docTitle,
    creator: docAuthor,
    styles: { default: { document: { run: { font: FONT, size: BODY } } } },
    numbering: {
      config: [
        {
          reference: 'bullets',
          levels: [
            {
              level: 0,
              format: LevelFormat.BULLET,
              text: '•',
              alignment: AlignmentType.LEFT,
              style: { paragraph: { indent: { left: 360, hanging: 220 } } },
            },
          ],
        },
      ],
    },
    sections: [
      {
        properties: {
          page: {
            size: { width: 12240, height: 15840 },
            margin: { top: 864, bottom: 864, left: 864, right: 864 },
          },
        },
        children: [
          new Paragraph({ alignment: AlignmentType.CENTER, children: [t(docAuthor, { bold: true, size: 40 })] }),
          new Paragraph({ alignment: AlignmentType.CENTER, children: [t(headline, { bold: true, size: 21 })] }),
          new Paragraph({ alignment: AlignmentType.CENTER, children: [t(contactParts().join(' | '))] }),

          heading('Summary'),
          new Paragraph({ spacing: LINE, children: [t(summary)] }),

          heading('Technical Skills'),
          ...skills.map(
            (g) => new Paragraph({ spacing: LINE, children: [t(`${g.label}: `, { bold: true }), t(g.items.join(', '))] }),
          ),

          heading('Experience'),
          ...roles.flatMap((role, i) => [
            tabbed(
              [t(role.title, { bold: true }), t(' | '), t(roleDetail(role), { italics: true })],
              monthRange(role),
              i ? 60 : 0,
            ),
            ...role.highlights.map(
              (h) => new Paragraph({ numbering: { reference: 'bullets', level: 0 }, spacing: LINE, children: [t(h)] }),
            ),
          ]),

          heading('Education'),
          tabbed([t(educationLine())], education.year),
        ],
      },
    ],
  });
  const buf = await Packer.toBuffer(doc);
  return new Response(new Uint8Array(buf), {
    headers: {
      'Content-Type': 'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
    },
  });
};
