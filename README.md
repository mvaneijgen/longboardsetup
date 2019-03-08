# Longboard Setup

> Build and share your (dream) longboard setup!

![](https://longboardsetup.com/social.jpg)

## API

This site is build on a Wordpress Rest API that can be accessed here `https://api.longboardsetup.com/wp-json/wp/v2/POST_TYPE`, currently in the API there are `decks`, `trucks` and `wheels`.

### Examples

```bash
# retrive the fist 20 decks from the API with there images
https://api.longboardsetup.com/wp-json/wp/v2/dekcs?orderby=date&order=desc&per_page=20&page=1&_embed

# break down
dekcs # The post type
orderby=date # Order by date
order=desc # Newest first
per_page=20 # Amount of items per page
page=1 # the page
_embed # Get you all kinds of other data frim the WP Rest API including the featured image
```

## Build & Setup steps

You can either use `yarn` or `npm` I've used `yarn`

```bash
# install dependencies
$ yarn install

# serve with hot reload at localhost:3000
$ yarn run dev

# build for production and launch server
$ yarn run build
$ yarn start

# generate static project
$ yarn run generate
$ yarn run generate:gh-pages # to build the Github Pages project
```

## This site is build on Vue.js/Nuxt.js

For detailed explanation on how things work, checkout the [Nuxt.js docs](https://github.com/nuxt/nuxt.js).
