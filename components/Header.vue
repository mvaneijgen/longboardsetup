<template>
  <div class="component-Header">
    <header>
      <h1 v-if="'index' == this.$route.name" class="centered">{{ this.$store.state.setup.title }}</h1>
      <SetupName v-if="'index' != this.$route.name" />
    </header>
    <SlideNav/>
  </div>
</template>

<script>
import SetupName from '@/components/setup/SetupName.vue';
import SlideNav from '@/components/SlideNav.vue';

export default {
  // props: ['item'],
  name: 'Header',
  components: {
    SetupName,
    SlideNav
  },
  data() {
    return {
      title: 'Header'
    }
  }, // End data
}
</script>