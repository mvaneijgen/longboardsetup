<template>
  <div>
    <Header/>
    <nuxt/>
    <NotificationsContainer/>
  </div>
</template>
<script>
import Header from '@/components/Header.vue';
import NotificationsContainer from '@/components/default/NotificationsContainer.vue';

export default {
  components: {
    Header,
    NotificationsContainer,
  }
}
</script>

<style>
</style>

