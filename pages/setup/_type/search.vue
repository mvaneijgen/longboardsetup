<template>
  <div>
    <div class="alloy-page alloy-page--type">
      <CustomForm v-if="'/setup/custom' == this.$route.path"/>
      <div class="alloy-select-flexbox">
        <div class="inner">
          <div class="alloy-result-info">
            <span>
              We've found {{allSearchItems.length}} items for "{{this.$store.getters["items/getSearch"](this.$route.params.type)}}". If your product is not shown, refine your search result
              <nuxt-link to="/submit">or submit a product!</nuxt-link>
            </span>
          </div>
          <transition-group name="slide-in" tag="div" class="transition-card">
            <Item v-for="item in allSearchItems" :key="item.id" :item="item"/>
          </transition-group>
          <transition name="slide-in">
            <NothingFound v-if="allSearchItems.length < 1"></NothingFound>
          </transition>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CustomForm from "@/components/setup/CustomForm.vue";
import Item from "@/components/setup/Item.vue";
import NothingFound from "@/components/setup/empty-state/NothingFound.vue";
// import TypeCallToAction from "@/components/default/TypeCallToAction.vue";

// 🛠 Utils
import { fromInputData } from "@/assets/utils/fromInputData.js";

const queries = ["orderby=title", "order=asc", "per_page=18", "_embed"];

export default {
  name: "type",
  // layout: 'simple',
  components: {
    CustomForm,
    Item,
    NothingFound
    // TypeCallToAction
  },
  // middleware: "api",
  data() {
    return {
      customShow: false,
      type: this.$route.params.type,
      loading: false,
      hasSearchResults: false
    };
  }, // End data
  computed: {
    allSearchItems() {
      return this.$store.getters["items/getSearchResults"](
        this.$route.params.type
      );
    }
  },
  // Life cycle hooks
  mounted() {
    const notification = {
      title: "Are you missing products?",
      content:
        "We've gathered around 2000+ items, but there are so much more items that we ware still missing.",
      image: "",
      type: "",
      link: "/submit",
      timer: 10000
    };
    this.$store.commit("notifications/addNotification", notification);
  }
};
</script>
<style lang="scss" scoped>
@import "~/assets/css/common/_variables.scss";

.alloy-result-info {
  flex-grow: 1;
  background-color: $brand-light;
  padding: 0 $base-margin;
  position: relative;
  text-align: center;
  span {
    font-size: 0.8rem;
    line-height: 1em;
  }
}
</style>

