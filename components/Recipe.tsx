import Image from "next/image";
import Link from "next/link";
import { PostType } from "../types/Post";

interface Props {
  recipe: PostType;
  hoverable: boolean;
}

export function Recipe({ recipe, hoverable }: Props) {
  return (
    <div
      key={recipe.slug}
      className="font-poppins group relative betterhover:hover:scale-105 betterhover:hover:cursor-pointer z-10 duration-700 ease-out bg-gray-50 border border-gray-200 m-2 rounded-xl shadow-lg overflow-hidden
  flex flex-col aspect-square"
    >
      <Link href={`/recipes/${recipe.slug}`}>
        <Image
          className="group-hover:blur-md betterhover:hover:cursor-pointer z-10 duration-700 ease-out
      object-cover aspect-square"
          width={650}
          height={650}
          alt={recipe.frontmatter.title}
          src={`/${recipe.frontmatter.socialImage}`}
        />
        <div
          className={`${
            hoverable
              ? "invisible top-1/2 left-1/2 text-center -translate-y-1/2 -translate-x-1/2 text-white font-bold text-base"
              : "w-full p-1 bg-white bottom-0 visible text-sm text-black"
          } absolute group-hover:visible betterhover:hover:visible`}
        >
          {recipe.frontmatter.title}
        </div>
      </Link>
    </div>
  );
}
