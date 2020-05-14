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
      <p className="mt-0">A series of older blog posts that I ported over from another platform.</p>
      {allPosts.map((p) => (
        <div key={p.slug}>
          <Link href={`/blog/${p.slug}`}>
            <a className="flex">
              <div className="flex-1">{p.title}</div>
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
