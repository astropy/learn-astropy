// Templates for search result items and listings

// Empty results template
// https://www.algolia.com/doc/api-reference/widgets/hits/js/#widget-param-empty
export const emptyTemplate = `
<p>No results for <q>{{ query }}.</q></p>
`;

// Result item template
// https://www.algolia.com/doc/api-reference/widgets/hits/js/#widget-param-item
// important: any attribute used with helpers.highlight *must* be configured
// in the index as "Attributes to highlight"
//
// Snippeting: this is how you can add snippeting to the content/description:
// <p >{{#helpers.snippet}}{ "attribute": "content", "highlightedTagName": "mark"}{{/helpers.snippet}}</p>
// Note that we only really want snippeting when show the full text; we always
// want the whole description to be shown if we're looking at the h1 record.
// I think we can do this by using a template *function* rather than a static
// template since we can change the rendering based on the record (i.e. snippet
// only if there is an h2 etc attribute).
export const itemTemplate = `
<article class="search-item">
  <h2 class="search-item__header">{{#helpers.highlight}}{ "attribute": "h1" }{{/helpers.highlight}}</h2>
  <img class="search-item__thumbnail" src={{ thumbnail }} alt="">
  <div class="search-item__description">
    <p >{{#helpers.highlight}}{ "attribute": "content" }{{/helpers.highlight}}</p>
  </div>
</article>
`;
