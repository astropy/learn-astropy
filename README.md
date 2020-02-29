# Astropy Search Demo

This repository is a demonstration of a documentation search service for the [Astropy Project](https://www.astropy.org).
The site itself is built around [Algolia](https://www.algolia.com).
Records for the Algolia database are curated and formatted by the [astropy-librarian](https://github.com/jonathansick/astropy-librarian) app.
Ultimately this search functionality will be built into the [learn.astropy.org](https://learn.astropy.org) site; in the meantime this stripped-down site lets us explore the interplay between front-end search experience and back-end data preparation.

## Developer guide

### Initial set up

```bash
git clone https://github.com/jonathansick/astropy-search-demo
cd astropy-search-demo
npm install
```

### Run a development server

You can run a development server that will serve the site and reload as you develop the app:

```bash
npm run dev
```

By default the app is hosted at `http://localhost:1234`.

### Build for production

```bash
npm run build
```

### Linting and autoformatting

This app uses ESLint to lint JavaScript, which in turn runs Prettier to format JavaScript.
The configuration is based on [wesbos/eslint-config-wesbos](https://github.com/wesbos/eslint-config-wesbos).

To manually lint the code base:

```bash
npm run lint
```

To also fix issues and format the code base:

```bash
npm run lint:fix
```

Ideally your editor will also apply eslint/prettier on save, though these commands are handy as a fallback.
