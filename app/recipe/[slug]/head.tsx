import { readFileSync } from 'fs';
import matter from 'gray-matter';
import md from 'markdown-it';
import { resolve } from 'path';

export default function Head({ params }: { params: { slug: string } }) {
  const configDirectory = resolve(process.cwd(), "posts");
  const fileName = readFileSync(`${configDirectory}/${params.slug}.md`, 'utf-8');
  const { data: frontmatter, content } = matter(fileName);
  return (
    <>
      <title>{frontmatter.title}</title>
      <meta name="description" content={frontmatter.metaDesc}></meta>
      <meta property="og:title" content={frontmatter.title} />
      <meta property="og:description" content={frontmatter.metaDesc}></meta>
      <meta property="og:image" content={frontmatter.socialImage} />
      <meta name="twitter:title" content={frontmatter.title} />
      <meta name="twitter:description" content={frontmatter.metaDesc}></meta>
      <meta name="twitter:image" content={frontmatter.socialImage} />
    </>
  );
}