<template>
  <div class="alloy-page alloy-page--setup">
    <SetupUI/>
    <Share v-if="getShowShareModel"/>
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
      getShareURL: "setup/getShareURL",
      getShowShareModel: "setup/getShowShareModel"
    })
  },
  mounted() {
    this.$router.push({
      query: this.getShareURL
    });
  }
};
</script>

