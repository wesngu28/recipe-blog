import fs from "fs";
import matter from "gray-matter";
import { PostType } from "../types/Post";
import PostCollector from "./PostCollector";

export default function Post() {
  const files = fs.readdirSync("recipes");
  const recipes: PostType[] = files.map((fileName) => {
    const slug = fileName.replace(".md", "");
    const readFile = fs.readFileSync(`recipes/${fileName}`, "utf-8");
    const { data: frontmatter } = matter(readFile);
    return {
      slug,
      frontmatter,
    };
  });

  return (
    <div className="grid grid-cols-2 md:w-3/4 md:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 md:m-4 items-center justify-center place-items-center">
      <PostCollector recipes={recipes} />
    </div>
  );
}
