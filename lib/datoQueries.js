

export const PATHS_QUERY = `
  query MyQuery {
    allArticles {
      slug
    }
  }
`;




export const HOMEPAGE_QUERY = `
  query HomePageQuery ($name: String) {
    allArticles (orderBy: [date_DESC]) {
      date
      title
      articleImage  {
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
      slug
    }
    author(filter: {name: {eq: $name}}) {
      name
      blurb
      greeting
      profileImage {
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
    }
  }
`;

export const ARTICLE_QUERY = `
  query ArticleQuery($slug: String) {
    article(filter: {slug: {eq: $slug}}) {
      articleImage {
        responsiveImage(imgixParams: { ar: "3:1", fit: crop }) {
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
        profileImage {
          responsiveImage {
            width
            webpSrcSet
            title
            srcSet
            src
            sizes
            height
            bgColor
            base64
            aspectRatio
            alt
          }
        }
      }
      date
      slug
      title
      content {
        value
      }
    }
    allArticles (orderBy: [date_DESC]) {
      date
      title
      articleImage  {
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
      slug
    }
  }
`;
