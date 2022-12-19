export interface PostType {
  slug: string;
  frontmatter: {
      [key: string]: any;
  };
}