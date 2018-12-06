<template>
  <div>
    <div class="alloy-page alloy-page--content alloy-page--about">
      <div class="alloy-conttent alloy-text-light">

        <h2>About</h2>
        <div v-html="this.$store.state.default.about_text"></div>
      </div>

      <ToolsUsed />
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
      notificationShow: true,
    }
  },
  methods: {
    notificationAbout: function() {
      this.notificationShow = false;

      const notification = {
        title: "You should be building a deck!",
        content: "But if you really want here is boring text",
        image: '',
        type: '',
        timer: 3500,
      }
      this.$store.commit('notifications/addNotification', notification);
    }
  },
  created() {
    if (process.browser) {
    if(this.notificationShow) {
      this.notificationAbout();
    }
    }
  }
};
</script>
