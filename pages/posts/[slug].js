import { Image, StructuredText, useQuerySubscription } from "react-datocms";
import Link from "next/link";
import { request } from "../../lib/datocms";

export default function BlogPost({ article }) {

  const { title, date, articleImage, content } = article;

  return (
    <div className="">
      <h1>{title}</h1>
      <span>{date}</span>
      <Image data={articleImage.responsiveImage} />
      <StructuredText data={content.value} />



    </div>
  );
}

const PATHS_QUERY = `
query MyQuery {
  allArticles {
    slug
  }
}
`;


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



const ARTICLE_QUERY = `
query MyQuery($slug: String) {
  article(filter: {slug: {eq: $slug}}) {
    articleImage {
      responsiveImage {
        alt
        aspectRatio
        base64
        bgColor
        height
        sizes
        src
        srcSet
        title
        webpSrcSet
        width
      }
    }
    author {
      name
    }
    date
    slug
    title
    content {
      value
    }
  }
}

`;


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
