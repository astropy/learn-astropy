import algoliasearch from 'algoliasearch/lite';
import instantsearch from 'instantsearch.js';
import {
  searchBox,
  hits,
  poweredBy,
  currentRefinements,
  refinementList,
} from 'instantsearch.js/es/widgets';

import { emptyTemplate, itemTemplate } from './templates';

// This is the Search-only API key
const searchClient = algoliasearch(
  'KSDFJKHCO2',
  'fadf7c74af324735d9e45d68481531ab'
);

const search = instantsearch({
  indexName: 'astropy_fulltext_dev',
  searchClient,
});

search.addWidgets([
  poweredBy({
    container: '#powered-by',
    theme: 'light',
  }),
  searchBox({
    container: '#searchbox',
  }),

  hits({
    container: '#hits',
    templates: {
      empty: emptyTemplate,
      item: itemTemplate,
    },
  }),

  currentRefinements({
    container: '#current-refinements',
  }),

  refinementList({
    container: '#astropy-keywords-facet',
    attribute: 'astropy_package_keywords',
    sortBy: ['isRefined', 'name:asc'],
    searchable: true,
    searchablePlaceholder: 'Search packages',
    searchableIsAlwaysActive: false, // only add search if "showMore" also visible
    showMore: true,
    limit: 20,
    showMoreLimit: 500,
  }),

  refinementList({
    container: '#python-keywords-facet',
    attribute: 'python_package_keywords',
    sortBy: ['isRefined', 'name:asc'],
    searchable: true,
    searchablePlaceholder: 'Search packages',
    searchableIsAlwaysActive: false, // only add search if "showMore" also visible
    showMore: true,
    limit: 20,
    showMoreLimit: 500,
  }),

  refinementList({
    container: '#task-keywords-facet',
    attribute: 'task_keywords',
    sortBy: ['isRefined', 'name:asc'],
    searchable: true,
    searchablePlaceholder: 'Search tasks',
    searchableIsAlwaysActive: false, // only add search if "showMore" also visible
    showMore: true,
    limit: 20,
    showMoreLimit: 500,
  }),

  refinementList({
    container: '#science-keywords-facet',
    attribute: 'science_keywords',
    sortBy: ['isRefined', 'name:asc'],
    searchable: true,
    searchablePlaceholder: 'Search science areas',
    searchableIsAlwaysActive: false, // only add search if "showMore" also visible
    showMore: true,
    limit: 20,
    showMoreLimit: 500,
  }),
]);

search.start();
