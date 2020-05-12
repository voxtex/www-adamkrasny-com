import { GetStaticPaths, GetStaticProps } from "next";
import Error from "next/error";
import { useRouter } from "next/router";
import React from "react";
import { getAllPosts, getPostBySlug } from "../../lib/api";
import markdownToHtml from "../../lib/markdown-to-html";
import { Post as TPost } from "../../types";

type Props = {
  post: TPost;
};

const Post = ({ post }: Props): React.ReactElement => {
  const router = useRouter();
  if (!router.isFallback && !post?.slug) {
    return <Error statusCode={404} />;
  }

  return <div dangerouslySetInnerHTML={{ __html: post.content }} />;
};

export default Post;

export const getStaticProps: GetStaticProps<Props, { slug: string }> = async ({ params }) => {
  const post = getPostBySlug(params!.slug);
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
