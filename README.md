# Ikius Tech Test


## Final result

I had an old domain lying around, so you can view the final result at:
[surfledger.com](https://www.surfledger.com/)

or if you prefer, here's the vercel link:
[ikius-techtest-blog.vercel.app](https://ikius-techtest-blog.vercel.app)

Github Link:
[ikius-techtest-blog](https://github.com/johnckealy/ikius-techtest-blog)


## Time taken
I worked on this for most of Friday and little on Saturday morning.


## Deployment

Two clicks, lightning quick builds.. Vercel is awesome. I think I actually prefer it
to Netlify.


## External libraries

I choose `Tailwindcss` for the styling/theming, `luxon` for date formatting, `react-datocms`
to interact with DatoCMS, `next-seo` for Json-ld rich-text content, and `graphql-request`
for graphQL queries.


## Performance

The homepage scored mostly green on lighthouse:

![home](https://user-images.githubusercontent.com/43955976/189484230-fd1e1310-665a-4418-a174-d6e791412623.png)


with the blog pages doing a little better:

![page](https://user-images.githubusercontent.com/43955976/189484287-4799fde7-83da-408b-b32f-03fc47cb115d.png)

What let me down was image optimisation – I have a little more to learn about that.


## Fetching content from DatoCMS

Dato has a bit of a learning curve, and since I've never used it, it probably
took the most time to figure out. I do wish their docs were a little better 🤨

All the same, it's a REALLY powerful CMS. It's cool how you can do things like,
for example, require a content creator to add an alt tag to an image, so that
good SEO and accessibility can be enforced. Images were probably the hardest part, but
it was also clear how comprehensive the tooling is. You can add focal points, resize, crop,
and set aspect ratios with queries like

```
responsiveImage(imgixParams: { ar: "3:1", fit: crop })...
```

Imaging with the mobile view of the blog index did make my lighthouse score suffer on best
practice a little, so I do have more to learn on that one. But overall, I was able
to optimise the images fairly well.

The rest of the data was just a case of learning how to build the graphQL queries and
setting up `getStaticProps` and `getStaticPaths` props in Next.js.


## Adding SEO from DatoCMS

DatoCMS has some really comprehensive SEO tools, but they come with a steep learning
curve. I discovered that you can add a `_seoMetaTags` field to any graphQL query
and this allows you to populate each page with the SEO data from Dato, while
also falling back on site-wide defaults if they're missing. There's more to learn here,
but my app has meta title, description, and many more tags on each page. It's pretty
cool that you can just plug the data into the `renderMetaTags` from `react-datocms`
and it'll just work.


## Bonus round: Open Graph and Json-ld

Things got a little hacky at this stage since Json-ld was entirely new ground for me 🤔 As
I understood it, the function of json-ld in this context is to create rich-text meta data. It
seemed as though the `next-seo` package was a good fit, so I added it
to the blog page (but not the homepage) as an experiment. This was in addition to
using the `renderMetaTags()` from Datocms.

There are definitely going to be best practices that I was not aware of, but for each blog page
I was able to render OG-tags and json-ld – here's
an example of the rendered json-ld for one of the blog pages:

```javascript
<script type="application/ld+json">
  {
    "@context":"https://schema.org","@type":"Blog","description":"When to Use Static Generation v.s. Server-side Rendering","mainEntityOfPage": {
    "@type": "WebPage",
    "@id": "/blog/when-to-use-static-generation-vs-server-side-rendering"
  },
  "headline": "When to Use Static Generation v.s. Server-side Rendering",
  "author": {
    "@type": "Person",
    "name": "John Kealy"
  }}
</script>
```

Some things went wrong, like having a `<head>` embedded in another, which was probably the result
of using a head in `_document.js` as well as in each page. I didn't really have time to figure this
out, but it's probaby a simple case of learning some best practices (like serving the favicon
and fonts from the DatoCMS React library instead of `document.js`).
