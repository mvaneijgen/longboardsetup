<template>
  <div>
    <Background/>
    <Header/>
    <nuxt/>
    <Footer/>
  </div>
</template>
<script>
import Header from '@/components/Header.vue';
import Footer from '@/components/Footer.vue';
import Background from '@/components/Background.vue';

export default {
  components: {
    Header,
    Footer,
    Background,
  }
  
}
</script>

<style>
</style>

