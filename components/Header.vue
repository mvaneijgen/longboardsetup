<template>
  <header>
    <h1 v-if="'index' == this.$route.name" class="centered">{{ this.$store.state.setup.title }}</h1>
    <SetupName v-if="'index' != this.$route.name" />

  </header>
</template>

<script>
import SetupName from '@/components/setup/SetupName.vue';

export default {
  // props: ['item'],
  name: 'Header',
  components: {
    SetupName,
  },
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