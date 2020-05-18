import { parseISO } from "date-fns";
import fs from "fs";
import matter from "gray-matter";
import { join } from "path";
import { Post } from "../types";

type MatterData = {
  title: string;
  date: string;
  draft?: boolean;
};

const postsDirectory = join(process.cwd(), "_posts");

export const getPostSlugs = (): string[] => fs.readdirSync(postsDirectory);

export const getPostBySlug = (slug: string, includeContent = true): Post => {
  const realSlug = slug.replace(/\.md$/, "");
  const fullPath = join(postsDirectory, `${realSlug}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { content, data } = matter(fileContents);

  return {
    ...(data as MatterData),
    slug: realSlug,
    content: includeContent ? content : "",
  };
};

export const getAllPosts = (): Post[] => {
  const slugs = getPostSlugs();
  return slugs
    .map((slug) => getPostBySlug(slug, false))
    .filter((post) => !post.draft)
    .sort((a, b) => parseISO(b.date).valueOf() - parseISO(a.date).valueOf());
};
