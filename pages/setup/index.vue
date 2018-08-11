<template>
  <div class="alloy-page alloy-page--setup">

    <SetupUI />

  </div>
</template>

<script>
import SetupUI from '@/components/setup/SetupUI.vue';

export default {
  transition: 'page-alt',
  components: {
    SetupUI,
  },
  // created() {
  //     // this.$router.query
  // }
}
</script>

<style>
</style>

