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
export const itemTemplate = `
<article class="search-item">
  <h2>{{#helpers.highlight}}{ "attribute": "h1" }{{/helpers.highlight}}</h2>
  <img src={{ thumbnail }} alt="">
  <p>{{#helpers.highlight}}{ "attribute": "content" }{{/helpers.highlight}}</p>
</article>
`;
