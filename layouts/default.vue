<template>
  <div>
    <Header/>
    <nuxt/>
    <transition name="slide-up">
      <Navigation
        v-if="'setup' == this.$route.name || 'setup-type' == this.$route.name || 'setup-custom' == this.$route.name || 'setup-type-search' == this.$route.name || !this.$store.state.setup.setupNotEdited"
      />
    </transition>
    <NotificationsContainer/>
  </div>
</template>
<script>
import Header from "@/components/Header.vue";
import NotificationsContainer from "@/components/default/NotificationsContainer.vue";
import Navigation from "@/components/Navigation.vue";

export default {
  components: {
    Header,
    NotificationsContainer,
    Navigation
  },
  data() {
    return {
      cookies: false
    };
  }, // End data
  mounted() {
    //------------------------------------------------------//
    // Create cookies notification
    //------------------------------------------------------//
    if (!this.cookies) {
      const notification = {
        title: "This site uses cookies",
        content:
          "We use functional cookies and track page views using Google Analytics & Hotjar. All data is anonymized and is not kept longer than necessary.",
        image: "",
        type: "warning",
        link: "/privacy",
        timer: 10000
      };
      this.$store.commit("notifications/addNotification", notification);
      this.cookies = true;
    }
    // END Create cookies notification
  },
  created() {
    if (process.browser) {
      localStorage.removeItem("vuex");
    }
  }
};
</script>

<style>
</style>

