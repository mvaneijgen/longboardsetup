<template>
  <header>
    <h1 class="centered">{{ this.$store.state.setup.title }}</h1>
    <h2 class="centered" contenteditable="true">{{ this.$store.state.name.nameCurrent }}</h2>
    <button @click="nameGenerate">Random</button>
  </header>
</template>

<script>
export default {
  // props: ['item'],
  name: 'Header',
  data() {
    return {
      title: 'Header'
    }
  }, // End data
  // More info at https://css-tricks.com/methods-computed-and-watchers-in-vue-js/
  // computed: {}, // Data with computed logic
  methods: {
    nameGenerate: function() {
      const prefix = this.$store.state.name.nameRandom.prefix;
      const location = this.$store.state.name.nameRandom.location;
      const suffix = this.$store.state.name.nameRandom.suffix;
      
      function randomNum(amount) {
        return Math.floor(Math.random() * amount);
      }
      this.$store.state.name.nameCurrent = `${prefix[randomNum(prefix.length)]} ${location[randomNum(location.length)]} ${suffix[randomNum(suffix.length)]}`;
    }
  }, // Are functions run on user actions example @click or on lifecycle hooks
}
</script>

<style lang="scss"  scoped>
// @import '~/assets/css/common/_variables.scss';
</style>