import { getAllPostsIds, getPostData } from "@/lib/posts";
import Head from "next/head";

export async function getStaticProps({ params }) {
  const postData = await getPostData(params.id);
  return {
    props: {
      postData,
    },
  };
}

export async function getStaticPaths() {
  const paths = getAllPostsIds();
  return {
    paths,
    fallback: false,
  }
}

export default function Post({postData}) {
  return (
    <>
      <Head>
        <title>{postData.title}</title>
      </Head>
      <h1 className="font-bold text-3xl mb-8">{postData.title}</h1>
      <div className="sm:text-xl pb-36" dangerouslySetInnerHTML={{__html: postData.contentHtml }}/>
    </>
  );
}