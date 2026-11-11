import { getCollection } from 'astro:content';

const showHidden = import.meta.env.DEV;

/** Published posts, newest first. Drafts are included only in dev. */
export async function getPosts() {
  const posts = await getCollection('posts', ({ data }) => showHidden || !data.draft);
  return posts.sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf());
}

/** Published projects in display order. Unpublished ones are included only in dev. */
export async function getProjects() {
  const projects = await getCollection('projects', ({ data }) => showHidden || data.published);
  return projects.sort((a, b) => a.data.order - b.data.order);
}

export function formatDate(date: Date) {
  return date.toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric', timeZone: 'UTC' });
}
