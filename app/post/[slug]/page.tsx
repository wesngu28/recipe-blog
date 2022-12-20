import { readFileSync } from 'fs';
import matter from 'gray-matter';
import md from 'markdown-it';
import { resolve } from 'path';

type slug = {
  slug: string
}

interface Props {
  params: slug
}

export default function RecipeDynamicPage({ params: { slug } }: Props) {
  const configDirectory = resolve(process.cwd(), "posts");
  const fileName = readFileSync(`${configDirectory}/${slug}.md`, 'utf-8');
  const { data: frontmatter, content } = matter(fileName);
  return (
    <div className='prose mx-auto'>
      <div className='m-4' dangerouslySetInnerHTML={{ __html: md().render(content) }} />
    </div>
  );
}