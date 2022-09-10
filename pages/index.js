import Head from 'next/head';
import { request } from "../lib/datocms";
import { Image } from 'react-datocms';
import Footer from '@/components/Footer';
import { HOMEPAGE_QUERY } from '../lib/datoQueries';
import ArticlesList from '@/components/ArticlesList';


export default function Home({  allArticles, author   }) {
  return (
    <>
      <Head>
        <title>Home</title>
      </Head>

      <section className='text-center  mb-12 container mx-auto'>
        <h1>{author.greeting}</h1>
        <div className='w-40 h-40 mx-auto'>
          <Image className='rounded-full' data={author.profileImage.responsiveImage} />
        </div>
        <p>{author.blurb}</p>

        <ArticlesList sectionHeader="Blog" articleListData={allArticles} />
      </section>

      <Footer articles={allArticles} />
    </>
  )
}


export async function getStaticProps() {
  const homePageRequest = {
    query: HOMEPAGE_QUERY,
    variables: {
      name: "John Kealy"
    }
  };

  return {
    props: await request(homePageRequest)
  };
}
