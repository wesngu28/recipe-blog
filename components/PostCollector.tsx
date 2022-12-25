"use client";

import { useContext, useEffect, useState } from "react";
import { FilterContext } from "../contexts/FilterProvider";
import Image from "next/image";
import Link from "next/link";
import { PostType } from "../types/Post";
import { Recipe } from "./Recipe";

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
            .filter(({ frontmatter }) => frontmatter.categories.includes(filter))
            .map(recipe => (
              <Recipe key={recipe.slug} recipe={recipe} hoverable={hoverable} />
            ))
        : recipes.map(recipe => (
            <Recipe key={recipe.slug} recipe={recipe} hoverable={hoverable} />
          ))}
    </>
  );
}
