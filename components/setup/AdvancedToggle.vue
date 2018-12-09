<template>
  <div class="component-AdvancedToggle">
    <div class="toggle">
      <input
        class="tgl tgl-ios"
        id="cb2"
        type="checkbox"
        :checked="this.$store.state.setup.advancedOn"
      />
      <label
        @click="advancedToggle"
        class="tgl-btn"
        for="cb2"
      ></label>
    </div>

    <span>Looking for more items? Enable advanced mode.</span>
  </div>
</template>

<script>
export default {
  // props: ['item'],
  name: "AdvancedToggle",
  data() {
    return {
      // title: 'AdvancedToggle'
    };
  }, // End data
  methods: {
    advancedToggle: function() {
      this.$store.commit("setup/advancedToggle");
    }
  } // Are functions run on user actions example @click or on lifecycle hooks
};
</script>

<style lang="scss" scoped>
@import "~/assets/css/common/_variables.scss";

.component-AdvancedToggle {
  padding: $base-margin;
  display: flex;
  align-items: center;
  @include media-breakpoint-up(lg) {
    // @media only screen and (min-width: $alloy-md-mq)
    padding: $base-margin * 2;
  }

  > * {
    // display: inline;
    vertical-align: middle;
    margin-right: $base-margin;
  }
  span {
    color: $brand-light;
    font-size: 0.8rem;
    @include media-breakpoint-up(lg) {
      font-size: 1rem;
    }
    line-height: 1.2em;
    display: inline-block;
  }
}
</style>