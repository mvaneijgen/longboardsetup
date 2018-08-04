<template>
  <div>
    <!-- <Background/> -->
    <Header/>
    <nuxt/>
    <Navigation v-if="'index' != this.$route.name" />
    <Footer/>

  </div>
</template>
<script>
import Header from '@/components/Header.vue';
import Footer from '@/components/Footer.vue';
// import Background from '@/components/Background.vue';
import Navigation from '@/components/Navigation.vue';

export default {
  components: {
    Header,
    Footer,
    // Background,
    Navigation,
  }
  
}
</script>

<style>
</style>

