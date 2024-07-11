"use client";

import fs from "fs";
import matter from "gray-matter";
import Markdown from "markdown-to-jsx";

export default async function BlogPage({ params }) {
  const { slug } = params;
  var filePath = "content/" + slug + ".md";
  const str = fs.readFileSync(filePath, "utf8");
  const matterResult = matter(str);
  console.log(matterResult);
  const artData = {
    title: matterResult.data.title,
    slug: matterResult.data.slug,
    date: matterResult.data.date,
    desc: matterResult.data.description,
  };
  return (
    <main className="">
      <header className="flex flex-col py-4 rounded shadow-sm">
        <div className="items-center block mx-auto w-[80%] lg:w-[50%]">
          <div className="flex flex-col mb-4">
            <h1 className="text-5xl font-extrabold">{artData.title}</h1>
          </div>
          <div className="flex flex-col m-0">
            <p className="text-gray-600 dark:text-gray-300 text-sm font-bold">
              {artData.date}
            </p>
            <p className="text-gray-700 dark:text-gray-400 text-base">
              {artData.desc}
            </p>
          </div>
        </div>
      </header>

      <article
        className="flex items-center justify-center px-6 min-w-full"
        data-color-mode="dark"
      >
        <Markdown className="prose dark:prose-invert markdown max-w-[80%] md:max-w-[50%] m-[20px]">
          {matterResult.content}
        </Markdown>
      </article>
    </main>
  );
}
