<template>
  <div class="alloy-items alloy-cards" :data-type="item.type">
    <div class="inner">
      <img v-if="item.type != 'custom'" :src="'http://alloy.work/codepen/QBOyJj/' + item.image" :alt="item.title">
      <img v-else src="http://alloy.work/codepen/QBOyJj/custom.jpg" :alt="item.title">
      <div class="alloy-content">
        <div class="alloy-meta">
          <p>
            <strong>{{ item.type }}</strong>
          </p>
        </div>
        <h3>{{ item.title }}</h3>
        <a :href="'http://www.google.com/search?q=' + item.title.replace(/ /g,'+')">Search for this product</a>
      </div>
      <button v-if="item.type != 'custom'" @click="toggleInfo">info</button>
    </div>
  </div>
</template>

<script>
export default {
  props: ['item'],
  name: 'Item',
  data() {
    return {
    }
  }, // End data
  methods: {
    toggleInfo: function (event) {
      event.target.parentNode.classList.toggle('showInfo');
    }
  }
  // More info at https://css-tricks.com/methods-computed-and-watchers-in-vue-js/
  // computed: {}, // Data with computed logic
  // methods: {}, // Are functions run on user actions example @click or on lifecycle hooks
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
// @import '~/assets/css/common/_variables.scss';
</style>