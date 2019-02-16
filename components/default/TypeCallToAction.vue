<template>
  <div class="alloy-items alloy-cards cta type-call-to-action" data-cta-type="cta--alt">
    <div id="banaan"></div>
    <div class="inner">
      <h3>Are you missing products?</h3>
      <p>We've gathered 2000+ products, but there are so much more items that we ware still missing.</p>
      <p>If you're missing a item you want to use in your setup, please submit it. We'll review it and it will be on the website within hours.</p>
      <p>By even submitting just one item, you'll be helping greatly! But for the brave we can also run an import if you have many products to submit, follow the link below</p>
      <nuxt-link to="/submit" class="btn">Upload products</nuxt-link>
    </div>
  </div>
</template>

<script>
export default {
  // props: ['item'],
  name: "ToolsUsed",
  data() {
    return {
      title: "ToolsUsed",
      tools: this.$store.state.default.toolsUsed
    };
  }, // End data
  methods: {
    imageLink: function(image) {
      return require(`~/assets/images/ToolsUsed/${image}`);
    }
  }
};
</script>

<style lang="scss" scoped>
@import "~/assets/css/common/_variables.scss";
.type-call-to-action {
  background-color: $brand-one-lighten;
  color: $brand-light;
  .inner {
    padding: $base-margin;
  }
  p {
    font-size: 0.9rem;
    line-height: 1.4em;
  }
  .btn {
    background-color: darken($brand-one-lighten, 10%);
    border-color: darken($brand-one-lighten, 10%);
  }
}
</style>