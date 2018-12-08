<template>
  <div class="alloy-page alloy-page--setup">
    <SetupUI/>
    <Share/>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

import SetupUI from "@/components/setup/SetupUI.vue";
import Share from "@/components/setup/Share.vue";

export default {
  transition: "page-alt",
  components: {
    SetupUI,
    Share
  },
  computed: {
    ...mapGetters({
      getShareURL: "setup/getShareURL"
    })
  },
  mounted() {
    this.$router.push({
      query: this.getShareURL
    });
  }
};
</script>

