# Recipe Blog

Repo for the recipe blog for co2x5 homecooking!

This blog is built using [Next.js](https://nextjs.org/), a framework for building server-rendered React apps. We use Typescript as our programming language, and have styled the blog using the [Tailwind CSS](https://tailwindcss.com/) library.

Our posts are written in [Markdown](https://www.markdownguide.org/) and stored as .md files in the `/recipes` directory. We use the [markdown-it](https://markdown-it.github.io/) library to parse the Markdown and render it as HTML, and the [gray-matter](https://github.com/jonschlinkert/gray-matter) library to extract the frontmatter data (such as the title and date) from the Markdown files.

## Getting Started

To get started with the blog, follow these steps:

1. Clone the repository using `git clone`
2. Install the dependencies using `npm install`
3. Start the development server using `npm run dev`

## Adding a New Recipe

To add a new recipe to the blog, follow these steps:

1. Create a new .md file in the `/recipes` directory
2. Add the frontmatter data at the top of the file, surrounded by triple dashes (`---`). The frontmatter should include the `title` and `date` of the recipe.
3. Add the recipe instructions in Markdown format below the frontmatter.
4. Save the file. The blog will automatically update with the new recipe.