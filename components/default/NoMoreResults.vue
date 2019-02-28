<template>
  <div class="component-NoMoreResults">
    <div class="inner">
      <h2>
        You've managed to reach the end of the results.
        <span>To bad it's not the end of the 🌈 rainbow!</span>
      </h2>

      <p>Do a refined search query to narrow down the item you are looking for. Or help yourself and others by submitting a product!</p>
      <nuxt-link to="/submit" class="btn btn--alt">Upload your own</nuxt-link>
    </div>
  </div>
</template>

<script>
export default {
  // props: ['item'],
  name: "NoMoreResults",
  data() {
    return {
      title: "NoMoreResults"
    };
  } // End data
  // More info at https://css-tricks.com/methods-computed-and-watchers-in-vue-js/
  // computed: {}, // Data with computed logic
  // methods: {}, // Are functions run on user actions example @click or on lifecycle hooks
  // watch: {}, // Watchs data, needs to have the same name as the data that is being watched
  // directives: {}, // Create custom v-directives accepts element and bindings

  // // Lifecycle hook. Check for more https://vuejs.org/v2/guide/instance.html or https://vuejs.org/v2/api/#Options-Lifecycle-Hooks
  // beforeCreate() {},
  // created() {}, // Each time the app is created (once?)
  // beforeMount() {},
  // mounted() {}, // Be sure all elements are drawn. Here you can use normal Javascript to interact with your page
  // beforeUpdate() {},
  // update() {},
  // activated() {},
  // deactivated() {},
  // beforeDestroy() {},
  // destroyed() {},
  // errorCaptured() {},
};
</script>

<style lang="scss" scoped>
@import "~/assets/css/common/_variables.scss";
.component-NoMoreResults {
  width: 100%;
  flex-grow: 1;
  margin-top: $base-margin;

  > .inner {
    padding: $base-margin;
    @include media-breakpoint-up(md) {
      padding: $base-margin * 2;
    }
    border-radius: 5px;
    margin: 0 auto;
    max-width: 600px;
    width: 100%;
    background-color: $brand-one-lighten;
    display: block;
    color: $brand-light;
    .btn {
      float: right;
    }
  }
}
</style>