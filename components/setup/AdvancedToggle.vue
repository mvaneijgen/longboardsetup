<template>
  <div class="component-AdvancedToggle">
    <div class="toggle">
      <input class="tgl tgl-ios" id="cb2" type="checkbox" />
      <label @click="advancedToggle" class="tgl-btn" for="cb2"></label>
    </div>

    <span>{{ this.$store.state._advancedOn }} Looking for more items? Enable advanced mode.</span>
  </div>
</template>

<script>
export default {
  // props: ['item'],
  name: 'AdvancedToggle',
  data() {
    return {
      title: 'AdvancedToggle'

    }
  }, // End data
  // More info at https://css-tricks.com/methods-computed-and-watchers-in-vue-js/
  // computed: { }, // Data with computed logic
  methods: {
    advancedToggle: function() {
      this.$store.state._advancedOn = !this.$store.state._advancedOn;
    }
  }, // Are functions run on user actions example @click or on lifecycle hooks
  // watch: {}, // Watchs data, needs to have the same name as the data that is being watched


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
}
</script>

<style lang="scss"  scoped>
@import "~/assets/css/common/_variables.scss";

.component-AdvancedToggle {
  padding: $base-margin;
  > * {
    vertical-align: middle;
    margin-right: $base-margin;
  }
  span {
    color: $brand-light;
  }
}
</style>