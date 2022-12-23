"use client";

import { useContext, useEffect, useState } from "react";
import { FilterContext } from "../contexts/FilterProvider";
import Image from "next/image";
import Link from "next/link";
import { PostType } from "../types/Post";

interface Props {
  recipes: PostType[];
}

export default function PostCollector({ recipes }: Props) {

  const [hoverable, setHoverable] = useState(true)
  const filterContext = useContext(FilterContext);
  const filter = filterContext?.filter;
  useEffect(() => {
    const isHoverableDevice = window.matchMedia(
      '(hover: hover) and (pointer: fine)'
    )
    setHoverable(isHoverableDevice.matches)
  }, []);

  return (
    <>
      {filter
        ? recipes
            .filter(({ frontmatter }) => frontmatter.categories[0] === filter)
            .map(({ slug, frontmatter }) => (
              <div
                key={slug}
                className="group relative betterhover:hover:scale-105 betterhover:hover:cursor-pointer z-10 duration-700 ease-out bg-gray-50 border border-gray-200 m-2 rounded-xl shadow-lg overflow-hidden
                flex flex-col aspect-square"
              >
                <Link href={`/recipes/${slug}`}>
                  <Image
                    className="group-hover:blur-md betterhover:hover:cursor-pointer z-10 duration-700 ease-out
                    object-cover aspect-square"
                    width={650}
                    height={650}
                    alt={frontmatter.title}
                    src={`/${frontmatter.socialImage}`}
                  />
                  <div className="top-1/2 left-1/2 text-center -translate-y-1/2 -translate-x-1/2 absolute invisible group-hover:visible betterhover:hover:visible text-white font-bold text-xl">
                    {frontmatter.title}
                  </div>
                </Link>
              </div>
            ))
        : recipes.map(({ slug, frontmatter }) => (
            <div
              key={slug}
              className="group relative betterhover:hover:scale-105 betterhover:hover:cursor-pointer z-10 duration-700 ease-out bg-gray-50 border border-gray-200 m-2 rounded-xl shadow-lg overflow-hidden
              flex flex-col aspect-square"
            >
              <Link href={`/recipes/${slug}`}>
                <Image
                  className="group-hover:blur-md betterhover:hover:cursor-pointer z-10 duration-700 ease-out
                  object-cover aspect-square"
                  width={650}
                  height={650}
                  alt={frontmatter.title}
                  src={`/${frontmatter.socialImage}`}
                />
                <div className={`top-1/2 left-1/2 text-center -translate-y-1/2 -translate-x-1/2 absolute ${hoverable ? 'invisible text-xl' : 'visible text-sm'} group-hover:visible betterhover:hover:visible text-white font-bold`}>
                  {frontmatter.title}
                </div>
              </Link>
            </div>
          ))}
    </>
  );
}
