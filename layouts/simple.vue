<template>
  <div>
    <!-- <Background/> -->
    <Header/>
    <!-- <transition name="layout" mode="out-in"> -->
      <nuxt/>
    <!-- </transition> -->
    <Navigation v-if="'index' != this.$route.name" />

  </div>
</template>
<script>
import Header from '@/components/Header.vue';
// import Background from '@/components/Background.vue';
import Navigation from '@/components/Navigation.vue';

export default {
  components: {
    Header,
    // Background,
    Navigation,
  }
  
}
</script>

<style>
</style>

