import { GetStaticProps } from "next";
import Link from "next/link";
import React from "react";
import DateFormatter from "../../components/date-formatter";
import { getAllPosts } from "../../lib/api";
import { Post } from "../../types";

type Props = {
  allPosts: Post[];
};

const Blog = ({ allPosts }: Props): React.ReactElement => {
  return (
    <div>
      <p className="mt-0">A series of older blog posts ported over from an old platform.</p>
      {allPosts.map((p) => (
        <div key={p.slug} className="mt-2">
          <Link href="/blog/[slug]" as={`/blog/${p.slug}`}>
            <a className="flex">
              <div className="flex-1 pr-2">{p.title}</div>
              <DateFormatter dateString={p.date} />
            </a>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Blog;

export const getStaticProps: GetStaticProps<Props> = async () => {
  const allPosts = getAllPosts();
  return { props: { allPosts } };
};
