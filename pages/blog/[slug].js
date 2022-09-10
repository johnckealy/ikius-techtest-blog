import Link from "next/link";
import Head from 'next/head';
import Footer from '@/components/Footer';
import ArticlesList from "@/components/ArticlesList";
import { useRouter } from 'next/router';
import { Image, StructuredText } from "react-datocms";
import { request } from "@/lib/datocms";
import { ARTICLE_QUERY, PATHS_QUERY } from "@/lib/datoQueries";
import { DateTime } from "luxon";
import { renderMetaTags } from 'react-datocms';
import { ArticleJsonLd } from 'next-seo';


const BlogPost = ({ article, allArticles }) => {
  const { title, date, articleImage, content, author } = article;
  const formattedDate = DateTime.fromISO(date).toLocaleString(DateTime.DATE_FULL)
  const { asPath } = useRouter()

  return (
    <>
      <Head>
        {renderMetaTags(article._seoMetaTags)}
      </Head>

      <ArticleJsonLd
        type="Blog"
        url={asPath}
        title={title}
        authorName={author.name}
        description={title}
      />

      <div className="container mx-auto">
        <div className="flex items-center mt-10 justify-between py-4">
          <div className="flex items-center">
            <div className="w-10 h-10">
              <Image className="rounded-full" data={author.profileImage.responsiveImage} />
            </div>
            <span className="pl-2">{author.name}</span>
          </div>
          <span className="text-gray-400">{formattedDate}</span>
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


export const getStaticPaths = async () => {
  const slugQuery = await request({
    query: PATHS_QUERY,
  });

  let paths = [];
  slugQuery.allArticles.map((p) => paths.push(`/blog/${p.slug}`));

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


export default BlogPost;
