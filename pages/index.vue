<template>
  <div>
    <div class="alloy-page alloy-page--setup">

      <SetupUI />

    </div>
    <Footer/>

  </div>
</template>

<script>
import SetupUI from '@/components/setup/SetupUI.vue';
import Footer from '@/components/Footer.vue';


export default {
  transition: 'page-alt',
  components: {
    SetupUI,
    Footer,
  },
}
</script>

<style>
</style>

