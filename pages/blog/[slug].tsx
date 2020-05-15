import { GetStaticPaths, GetStaticProps } from "next";
import Error from "next/error";
import React from "react";
import { getAllPosts, getPostBySlug } from "../../lib/api";
import markdownToHtml from "../../lib/markdown-to-html";
import { Post as TPost } from "../../types";

type Props = {
  post?: TPost;
};

const Post = ({ post }: Props): React.ReactElement => {
  if (!post) {
    return <Error statusCode={404} />;
  }

  return (
    <div>
      <div className="post" dangerouslySetInnerHTML={{ __html: post.content }} />
      <style jsx>
        {`
          .post > :global(h1:first-child) {
            margin-top: 0;
          }
        `}
      </style>
    </div>
  );
};

export default Post;

export const getStaticProps: GetStaticProps<Props, { slug: string }> = async ({ params }) => {
  if (!params) {
    return {
      props: {},
    };
  }

  const post = getPostBySlug(params.slug);
  const content = await markdownToHtml(post.content || "");

  return {
    props: {
      post: {
        ...post,
        content,
      },
    },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const posts = getAllPosts();

  return {
    paths: posts.map((posts) => {
      return {
        params: {
          slug: posts.slug,
        },
      };
    }),
    fallback: false,
  };
};
