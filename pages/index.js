
import React from 'react'
import Head from 'next/head'
import content from '../content/home.json';
import Nextify from '../components/nextifyHome'

const HomePage = ({ tagline }) => {
  return (
    <>
      <Head>
        <title>{content.pageTitle}</title>
      </Head>

      <Nextify />
    </>
  )
}

export async function getStaticProps() {
  return {
    props: { tagline: "The pickleback press" },
  };
}

export default HomePage
