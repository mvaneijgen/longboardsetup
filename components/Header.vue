<template>
  <header>
    <h1 class="centered">{{ this.$store.state.setup.title }}</h1>
    <h2 class="centered" contenteditable="true">{{ this.$store.state.name.nameCurrent }}</h2>
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
}
</script>

<style lang="scss"  scoped>
// @import '~/assets/css/common/_variables.scss';
</style>