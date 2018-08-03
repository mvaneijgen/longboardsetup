<template>
  <header>
    <h1 class="centered">{{ this.$store.state.setup.title }}</h1>
    <SetupName/>
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