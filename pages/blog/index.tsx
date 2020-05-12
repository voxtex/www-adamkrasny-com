import { GetStaticProps } from "next";
import Link from "next/link";
import React from "react";
import DateFormatter from "../../components/date-formatter";
import { getAllPosts } from "../../lib/api";
import { Post } from "../../types";

type Props = {
  allPosts: Post[];
};

const Blog = ({ allPosts }: Props) => {
  return (
    <div>
      {allPosts.map((p) => (
        <div>
          <Link key={p.slug} href={`/blog/${p.slug}`}>
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
