"use client";

import { useContext } from "react";
import { FilterContext } from "../contexts/FilterProvider";
import Image from "next/image";
import Link from "next/link";
import { PostType } from "../types/Post";

interface Props {
  posts: PostType[];
}

export default function PostCollector({ posts }: Props) {
  const filterContext = useContext(FilterContext);
  const filter = filterContext?.filter;

  return (
    <>
      {filter
        ? posts
            .filter(({ frontmatter }) => frontmatter.categories[0] === filter)
            .map(({ slug, frontmatter }) => (
              <div
                key={slug}
                className="group relative hover:scale-105 hover:cursor-pointer z-10 duration-700 ease-out bg-gray-50 border border-gray-200 m-2 rounded-xl shadow-lg overflow-hidden flex flex-col h-96"
              >
                <Link href={`/post/${slug}`}>
                  <Image
                    className="group-hover:blur-md hover:cursor-pointer z-10 duration-700 ease-out object-cover min-w-full max-w-full h-96 max-h-full min-h-full"
                    width={650}
                    height={650}
                    alt={frontmatter.title}
                    src={`/${frontmatter.socialImage}`}
                  />
                  <div className="top-1/2 left-1/2 text-center -translate-y-1/2 -translate-x-1/2 absolute invisible group-hover:visible hover:visible text-white font-bold text-xl">
                    {frontmatter.title}
                  </div>
                </Link>
              </div>
            ))
        : posts.map(({ slug, frontmatter }) => (
            <div
              key={slug}
              className="group relative hover:scale-105 hover:cursor-pointer z-10 duration-700 ease-out bg-gray-50 border border-gray-200 m-2 rounded-xl shadow-lg overflow-hidden flex flex-col h-96"
            >
              <Link href={`/post/${slug}`}>
                <Image
                  className="group-hover:blur-md hover:cursor-pointer z-10 duration-700 ease-out object-cover min-w-full max-w-full h-96 max-h-full min-h-full"
                  width={650}
                  height={650}
                  alt={frontmatter.title}
                  src={`/${frontmatter.socialImage}`}
                />
                <div className="top-1/2 left-1/2 text-center -translate-y-1/2 -translate-x-1/2 absolute invisible group-hover:visible hover:visible text-white font-bold text-xl">
                  {frontmatter.title}
                </div>
              </Link>
            </div>
          ))}
    </>
  );
}
