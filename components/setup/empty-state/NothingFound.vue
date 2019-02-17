<template>
  <div class="component-NothingFound">
    <div class="inner">
      <h1>
        Sorry, we haven't found any "{{this.$store.getters["items/getSearch"](this.$route.params.type)}}" products in {{this.$route.params.type}}
        <span>and we need your help!</span>
      </h1>
      <p>We've gathered around 2000+ products, but there are so much more items that we're still missing.</p>
      <p>If you're missing an item you want to use in your setup, please submit it. We'll review your submission and it will be on the website within hours.</p>
      <p>Even by submitting just one item, you'll be helping immensely! But for the brave we can also run an import if you have many products to submit at, follow the link below:</p>
      <nuxt-link to="/submit" class="btn btn--alt btn--large">Submit a product</nuxt-link>
      <nuxt-link to="/submit">Or multiple products</nuxt-link>
    </div>
  </div>
</template>

<script>
export default {
  // props: ['item'],
  name: "NothingFound",
  data() {
    return {
      title: "NothingFound"
    };
  } // End data
};
</script>
<style lang="scss" scoped>
@import "~/assets/css/common/_variables.scss";

.component-NothingFound {
  flex-grow: 2;
  position: relative;
  width: 100%;
  .inner {
    background-color: $brand-one;
    color: $brand-light;
    max-width: 650px;
    margin: 0 auto;
    padding: $base-margin;
    @include media-breakpoint-up(md) {
      padding: $base-margin * 2;
    }
  }
  .btn {
    margin-right: $base-margin;
  }
  a {
    color: $brand-light;
  }
}
</style>
