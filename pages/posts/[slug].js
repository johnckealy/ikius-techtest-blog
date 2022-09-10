import Link from "next/link";
import { Image, StructuredText } from "react-datocms";
import { request } from "../../lib/datocms";
import ArticlesList from "@/components/ArticlesList";
import { ARTICLE_QUERY, PATHS_QUERY } from "../../lib/datoQueries";
import Footer from '@/components/Footer';


export default function BlogPost({ article, allArticles }) {
  const { title, date, articleImage, content, author } = article;

  return (
    <>
      <div className="container mx-auto">
        <div className="flex items-center justify-between py-4">
          <div className="flex items-center">
            <div className="w-10 h-10">
              <Image className="rounded-full" data={author.profileImage.responsiveImage} />
            </div>
            <span className="pl-2">{author.name}</span>
          </div>
          <span className="text-gray-400">{date}</span>
        </div>

        <section>
          <Image className=" " data={articleImage.responsiveImage} />
          <Link href="/"><a className="hover:underline">&#8592; Back to home</a></Link>
          <h1>{title}</h1>
          <StructuredText data={content.value} />
        </section>

        <ArticlesList sectionHeader="Other Posts" articleListData={allArticles} />
      </div >
      <Footer articles={allArticles} />
    </>
  );
}


export const getStaticPaths = async (context) => {
  const slugQuery = await request({
    query: PATHS_QUERY,
  });

  let paths = [];
  slugQuery.allArticles.map((p) => paths.push(`/posts/${p.slug}`));

  return {
    paths,
    fallback: "blocking",
  };
};


export const getStaticProps = async ({ params }) => {
  const graphqlRequest = {
    query: ARTICLE_QUERY,
    variables: {
      slug: params.slug
    }
  };
  return {
    props: await request(graphqlRequest),
  }
};
