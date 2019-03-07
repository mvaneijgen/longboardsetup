<template>
  <div>
    <div class="alloy-page alloy-page--content alloy-page--about">
      <div class="alloy-conttent alloy-text-light">
        <h2>Privacy</h2>
        <p>We use a few methods in which we save your data and most of it is either functional or for analytical purposes. At the moment we save your setup to your browsers local storage, this is so that when you either refresh the browser or leave and come back at a later time, your setup is saved and you can pick up where you left off.</p>
        <p>Next to that we use Google Analytics & Hotjar to track user behavior, to possibly find bottle necks in our design that we could improve in the future. All this data is anonymized and is not kept longer then necessary.</p>
      </div>
    </div>
    <Footer/>
  </div>
</template>

<script>
import ToolsUsed from "@/components/default/ToolsUsed.vue";
import Footer from "@/components/Footer.vue";

export default {
  transition: "page-alt",
  components: {
    ToolsUsed,
    Footer
  },
  data() {
    return {
      notificationShow: true
    };
  },
  methods: {
    notificationAbout: function() {
      this.notificationShow = false;

      const notification = {
        title: "You should be building a deck!",
        content: "But if you really want here is boring text",
        image: "",
        type: "",
        timer: 6000
      };
      this.$store.commit("notifications/addNotification", notification);
    }
  },
  created() {
    if (process.browser) {
      if (this.notificationShow) {
        this.notificationAbout();
      }
    }
  }
};
</script>
