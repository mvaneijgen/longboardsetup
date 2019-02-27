<template>
  <div class="alloy-page alloy-page--setup">
    <SetupUI/>
    <transition name="slide-in">
      <ShareModal v-if="getShowShareModel"/>
    </transition>
    <ShareFooter/>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

import SetupUI from "@/components/setup/SetupUI.vue";
import ShareModal from "@/components/share/ShareModal.vue";
import ShareFooter from "@/components/share/ShareFooter.vue";

export default {
  transition: "page-alt",
  components: {
    SetupUI,
    ShareModal,
    ShareFooter
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

