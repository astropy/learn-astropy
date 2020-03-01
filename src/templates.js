// Templates for search result items and listings

export const emptyTemplate = `
<p>No results for <q>{{ query }}.</q></p>
`;

export const itemTemplate = `
<article class="search-item">
  <h2>{{ h1 }}</h2>
  <img src={{ thumbnail }} alt="">
  <p>{{ content }}</p>
</article>
`;
