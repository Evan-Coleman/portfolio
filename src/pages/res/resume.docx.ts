import type { APIRoute } from 'astro';
import {
  AlignmentType,
  BorderStyle,
  Document,
  HeadingLevel,
  LevelFormat,
  LineRuleType,
  Packer,
  Paragraph,
  Tab,
  TabStopType,
  TextRun,
} from 'docx';
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
} from '../../lib/resume-export';

// Built for résumé parsers first: one column, no tables or text boxes, real Word styles
// (Title, Heading 1, Heading 2, List Paragraph) and plain-text contact details.
const FONT = 'Arial';
const BODY = 19; // half-points (9.5pt)
// 0.575in in twips: a hair narrower than the PDF's margin, so a line that fits there cannot
// wrap here when Word measures a word a fraction wider.
const MARGIN = 828;
const WIDTH = 12240 - 2 * MARGIN;
// Exact line heights, so Word, LibreOffice and Google Docs all break the page in the same place.
const exact = (points: number) => ({ line: points * 20, lineRule: LineRuleType.EXACT });
const LINE = exact(11.5);
const BLACK = '000000';

const t = (text: string, o: Record<string, unknown> = {}) => new TextRun({ text, ...o });

const centered = (text: string, o: Record<string, unknown> = {}) =>
  new Paragraph({ alignment: AlignmentType.CENTER, children: [t(text, o)] });

const heading = (text: string) => new Paragraph({ heading: HeadingLevel.HEADING_1, children: [t(text.toUpperCase())] });

/** Left text with a right-aligned date on the same line, by tab stop (no table). */
const dated = (left: TextRun, date: string, options: Record<string, unknown> = {}) =>
  new Paragraph({
    tabStops: [{ type: TabStopType.RIGHT, position: WIDTH }],
    children: [left, new TextRun({ children: [new Tab(), date], bold: false })],
    ...options,
  });

export const GET: APIRoute = async () => {
  const doc = new Document({
    title: docTitle,
    subject: docSubject,
    creator: docAuthor,
    lastModifiedBy: docAuthor,
    keywords: docKeywords,
    styles: {
      default: {
        document: {
          run: { font: FONT, size: BODY, color: BLACK, language: { value: 'en-US' } },
          paragraph: { spacing: LINE },
        },
        title: {
          run: { font: FONT, size: 40, bold: true, color: BLACK },
          paragraph: { alignment: AlignmentType.CENTER, spacing: exact(24) },
        },
        heading1: {
          run: { font: FONT, size: 22, bold: true, color: BLACK },
          paragraph: {
            spacing: { before: 140, after: 60, ...exact(13) },
            keepNext: true,
            border: { bottom: { style: BorderStyle.SINGLE, size: 6, space: 1, color: BLACK } },
          },
        },
        heading2: {
          run: { font: FONT, size: BODY, bold: true, color: BLACK },
          paragraph: { spacing: LINE, keepNext: true },
        },
        listParagraph: { run: { font: FONT, size: BODY, color: BLACK }, paragraph: { spacing: LINE } },
      },
    },
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
              style: { paragraph: { indent: { left: 320, hanging: 240 } } },
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
            margin: { top: MARGIN, bottom: MARGIN, left: MARGIN, right: MARGIN },
          },
        },
        children: [
          new Paragraph({ heading: HeadingLevel.TITLE, children: [t(docAuthor)] }),
          new Paragraph({
            alignment: AlignmentType.CENTER,
            spacing: exact(13),
            children: [t(headline, { bold: true, size: 21 })],
          }),
          centered(
            contactParts()
              .map((part) => part.text)
              .join(SEP),
          ),
          centered(authorizationParts.join(SEP)),

          heading('Summary'),
          new Paragraph({ children: [t(summary)] }),

          heading('Experience'),
          ...roles.flatMap((role, i) => [
            dated(t(role.title), dateRange(role), {
              heading: HeadingLevel.HEADING_2,
              spacing: { before: i ? 80 : 0, ...LINE },
            }),
            new Paragraph({ keepNext: true, children: [t(roleDetail(role), { italics: true })] }),
            ...role.highlights.map(
              (h) => new Paragraph({ numbering: { reference: 'bullets', level: 0 }, children: [t(h)] }),
            ),
          ]),

          heading('Technical Skills'),
          ...skills.map(
            (g) => new Paragraph({ children: [t(`${g.label}: `, { bold: true }), t(g.items.join(', '))] }),
          ),

          ...(sideProjects.length
            ? [
                heading('Projects'),
                ...sideProjects.map(
                  (p) =>
                    new Paragraph({
                      children: [t(p.name, { bold: true }), t(`${p.link ? ` (${p.link})` : ''} – ${p.detail}`)],
                    }),
                ),
              ]
            : []),

          heading('Education'),
          dated(t(educationLine()), education.year),
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
