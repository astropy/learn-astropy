import algoliasearch from 'algoliasearch/lite';
import instantsearch from 'instantsearch.js';
import {
  searchBox,
  hits,
  poweredBy,
  currentRefinements,
  refinementList,
} from 'instantsearch.js/es/widgets';

import {
  emptyTemplate,
  itemTemplate,
  refinementListItemTemplate,
} from './templates';

// This is the Search-only API key
const searchClient = algoliasearch(
  'KSDFJKHCO2',
  'fadf7c74af324735d9e45d68481531ab'
);

const search = instantsearch({
  indexName: 'astropy_fulltext_dev',
  searchClient,
});

// Map record field names to readable labels for the currentRefinements widget
const refinementLabelMap = {
  astropy_package_keywords: 'Astropy package',
  python_package_keywords: 'Python package',
  task_keywords: 'Task',
  science_keywords: 'Science area',
};

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
    transformItems(items) {
      // replace the label (the record field by default) with a readable label
      return items.map(item => ({
        ...item,
        label: refinementLabelMap[item.label],
      }));
    },
  }),

  refinementList({
    container: '#astropy-keywords-facet',
    attribute: 'astropy_package_keywords',
    sortBy: ['isRefined', 'name:asc'],
    searchable: true,
    searchablePlaceholder: 'Search packages',
    searchableIsAlwaysActive: false, // only add search if "showMore" also visible
    showMore: true,
    limit: 15,
    templates: {
      item: refinementListItemTemplate,
    },
  }),

  refinementList({
    container: '#python-keywords-facet',
    attribute: 'python_package_keywords',
    sortBy: ['isRefined', 'name:asc'],
    searchable: true,
    searchablePlaceholder: 'Search packages',
    searchableIsAlwaysActive: false, // only add search if "showMore" also visible
    showMore: true,
    limit: 15,
    templates: {
      item: refinementListItemTemplate,
    },
  }),

  refinementList({
    container: '#task-keywords-facet',
    attribute: 'task_keywords',
    sortBy: ['isRefined', 'name:asc'],
    searchable: true,
    searchablePlaceholder: 'Search tasks',
    searchableIsAlwaysActive: false, // only add search if "showMore" also visible
    showMore: true,
    limit: 15,
    templates: {
      item: refinementListItemTemplate,
    },
  }),

  refinementList({
    container: '#science-keywords-facet',
    attribute: 'science_keywords',
    sortBy: ['isRefined', 'name:asc'],
    searchable: true,
    searchablePlaceholder: 'Search science areas',
    searchableIsAlwaysActive: false, // only add search if "showMore" also visible
    showMore: true,
    limit: 15,
    templates: {
      item: refinementListItemTemplate,
    },
  }),
]);

search.start();
