import fs from 'fs';
import matter from 'gray-matter';
import md from 'markdown-it';

type slug = {
  slug: string
}

interface Props {
  params: slug
}

export default function RecipeDynamicPage({ params: { slug } }: Props) {
  const fileName = fs.readFileSync(`../../../posts/${slug}.md`, 'utf-8');
  const { data: frontmatter, content } = matter(fileName);
  return (
    <div className='prose mx-auto'>
      <div className='m-4' dangerouslySetInnerHTML={{ __html: md().render(content) }} />
    </div>
  );
}