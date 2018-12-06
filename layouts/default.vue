<template>
  <div>
    <Header/>
    <nuxt/>
    <Navigation v-if="'setup' == this.$route.name || 'setup-type' == this.$route.name || 'setup-custom' == this.$route.name "/>
    <NotificationsContainer/>
  </div>
</template>
<script>
import Header from '@/components/Header.vue';
import NotificationsContainer from '@/components/default/NotificationsContainer.vue';
import Navigation from '@/components/Navigation.vue';


export default {
  components: {
    Header,
    NotificationsContainer,
    Navigation,

  }
}
</script>

<style>
</style>

