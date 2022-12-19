import fs from 'fs';
import matter from 'gray-matter';
import md from 'markdown-it';

export default function RecipeDynamicPage({ params: { slug } }) {
  const files = fs.readdirSync('posts');
  const paths = files.map((fileName) => ({

    params: {

      slug: fileName.replace('.md', ''),

    },

}));

  const fileName = fs.readFileSync(`posts/${slug}.md`, 'utf-8');

  const { data: frontmatter, content } = matter(fileName);

  return (

    <div className='prose mx-auto'>

      <div dangerouslySetInnerHTML={{ __html: md().render(content) }} />

    </div>

  );
}