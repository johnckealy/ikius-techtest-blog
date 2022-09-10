

export const PATHS_QUERY = `
  query MyQuery {
    allArticles {
      slug
    }
  }
`;




export const HOMEPAGE_QUERY = `
  query HomePageQuery ($name: String) {
    allArticles (first: "3", orderBy: [date_DESC]) {
      date
      title
      articleImage  {
        responsiveImage  (imgixParams: {h: "350", w: "350"}) {
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
      _seoMetaTags {
        tag
        attributes
        content
      }
      name
      blurb
      greeting
      profileImage {
        responsiveImage (imgixParams: {h: "160", w: "160"}) {
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
      _seoMetaTags {
        tag
        attributes
        content
      }
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
          responsiveImage (imgixParams: {h: "80", w: "80"}) {
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
    allArticles (first: "3", orderBy: [date_DESC]) {
      date
      title
      articleImage  {
        responsiveImage  (imgixParams: {h: "350", w: "350"}) {
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
