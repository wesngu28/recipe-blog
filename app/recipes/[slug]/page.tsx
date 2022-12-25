import { readFileSync } from 'fs';
import matter from 'gray-matter';
import md from 'markdown-it';
import { resolve } from 'path';
import { Print } from '../../../components/Print';

export default function RecipeDynamicPage({ params }: { params: { slug: string } }) {
  const configDirectory = resolve(process.cwd(), "recipes");
  const fileName = readFileSync(`${configDirectory}/${params.slug}.md`, 'utf-8');
  const { data: frontmatter, content } = matter(fileName);
  return (
    <div className='prose mx-auto'>
      <Print />
      <div className='m-4' dangerouslySetInnerHTML={{ __html: md().render(content) }} />
    </div>
  );
}