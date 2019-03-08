# Longboard Setup

> Like PC part picker but for your longboard setup! Build and share your (dream) longboard setup!

![](https://longboardsetup.com/social.jpg)

**TL;DR** Like PC part picker but for your longboard setup!

Build and share your (dream) setup! The past half year I’ve spend building longboardsetup.com

The main reason for building this app was that I find it really hard to understand the feedback I’m getting while searching for a new setup, this resulted in doing some mispurchases in the past. I know the community has the knowledge, there only needs to be an easier way to share it… and that is where longboardsetup.com comes in! It is like PC Part Picker, but for longboards!

This site will be completely free, with no ads, and I promise to keep it that way. It’s just something that I want to give back to the awesome longboard community. I couldn’t have done it without the help of some awesome people along the way, from my amazing girlfriend who kept listening to all my crazy ideas. Also thanks for the amazing feedback aiyekara, aureex, FrodoTBaggins88 and JBizzy and all the random strangers I’ve forced my phone on and said “how about you test this app for me”, you guys roll (rock)!

[For anyone interested here is my setup](https://longboardsetup.com/setup/?decks=rayne-dee-lite-nemesis&trucks=caliber-ii-184mm-44-blackout-trucks&wheels=seismic-speed-vent-85mm-wheels-clear-blue&custom3=bearings~Amphetamine%20Ceramix%20Gold~undefined&custom4=custom~8.5mm%20Drop-thru%20shock-pads%20~Top%20mounted&custom5=custom~Hammerite%20black%20metal%20paint.%20Yep%20you%20read%20it%20right,%20this%20deck%20is%20not%20water%20prove,%20so%20I%20had%20to%20improvise%21~Side&name=Long%20distance%20push%20setup%20%40mvaneijgen). I’m looking for a deck upgrade for long distance pushing, it must be water prove and if I can keep my trucks and wheels that would be awesome. If you have any suggestions let me know!

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
