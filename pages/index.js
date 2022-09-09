import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';
// import { getSortedPostsData } from '../lib/posts';
import { request } from "../lib/datocms";
import ArticleCard from '@/components/ArticleCard';

const HOMEPAGE_QUERY = `
query MyQuery {
  allArticles {
    date
    title
    articleImage {
      responsiveImage {
        alt
        base64
        bgColor
        title
      }
    }
    slug
  }
}
`;

export async function getStaticProps() {
  const data = await request({
    query: HOMEPAGE_QUERY,
  });
  return {
    props: { data }
  };
}


export default function Home({ data }) {
  return (
    <Layout home>
      <Head>
        <title>Home </title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>Hi, I'm John!</p>
        <p>
          (This is a sample website - you’ll be building a site like this on{' '}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
      </section>


      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <div className='grid grid-cols-1 md:grid-cols-3'>

          {data.allArticles.map((article) => (
            <ArticleCard
              key={article.title}
              title={article.title}
              articleImage={article.articleImage.responsiveImage}
              date={article.date}
              slug={article.slug} />
          ))}
        </div>
      </section>

    </Layout>
  )
}
