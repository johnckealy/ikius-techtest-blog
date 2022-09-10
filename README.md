# Ikius Tech Test





## Adding SEO from DatoCMS

DatoCMS has some really comprehensive SEO tools, but they come with a steep learning
curve. I discovered that you can add a `_seoMetaTags` field to any graphQL query
and this allows you to populate each page with the SEO data from Dato, while
also falling back to some defaults if they're missing. There's more to learn here,
but my app has meta title, description, and many more tags on each page. It's pretty
cool that you can just plug the data into the `renderMetaTags` from `react-datocms`
and it'll just work. 


## Bonus round: Open Graph and Json-ld

Things got a little hacky at this stage since this was entirely new ground for me 🤔 As
I understood it, the function of json-ld is this context is to create rich-text meta data. It
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
and fonts from the DatoCMS React library).
