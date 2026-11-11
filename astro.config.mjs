import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import { readdirSync, readFileSync } from 'node:fs';

// True when a content folder has at least one entry whose frontmatter matches.
// Used to keep the empty /blog and /projects index pages out of the sitemap.
function hasEntry(dir, test) {
  try {
    return readdirSync(dir, { recursive: true })
      .filter((file) => /\.mdx?$/.test(file) && !/(^|[\\/])_/.test(file))
      .some((file) => test(readFileSync(`${dir}/${file}`, 'utf8').split(/^---$/m)[1] ?? ''));
  } catch {
    return false;
  }
}

const hasPosts = hasEntry('./src/content/posts', (fm) => !/^draft:\s*true/m.test(fm));
const hasProjects = hasEntry('./src/content/projects', (fm) => /^published:\s*true/m.test(fm));

export default defineConfig({
  site: 'https://ecoleman.dev',
  trailingSlash: 'ignore',
  integrations: [
    sitemap({
      filter: (page) =>
        !(page.endsWith('/blog/') && !hasPosts) && !(page.endsWith('/projects/') && !hasProjects),
    }),
  ],
  devToolbar: { enabled: false },
  markdown: {
    // Code colours come from the site's own tokens (see "Code" in src/styles/global.css),
    // so highlighting follows the light and dark themes without a second Shiki theme.
    shikiConfig: { theme: 'css-variables' },
  },
});
