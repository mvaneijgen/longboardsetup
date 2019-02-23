<template>
  <div>
    <div class="alloy-page alloy-page--type">
      <CustomForm v-if="'/setup/custom' == this.$route.path"/>
      <div class="alloy-select-flexbox">
        <div class="inner">
          <div class="alloy-result-info">
            <!-- <span>
              We've found {{allSearchItems.length}} items for "{{this.$store.getters["items/getSearch"](this.$route.params.type)}}". If your product is not shown, refine your search result
              <nuxt-link to="/submit">or submit a product!</nuxt-link>
            </span>-->
          </div>
          <transition-group name="slide-in" tag="div" class="transition-card">
            <Item v-for="item in allSearchItems" :key="item.id" :item="item"/>
          </transition-group>
          <transition name="slide-in">
            <NothingFound v-if="allSearchItems.length < 1"></NothingFound>
          </transition>
          <h1 style="color: #fff" v-if="loading">Loading {{type}}...</h1>
          <button @click="itemsLoad" class="centered" :disabled="loading">Load more</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Item from "@/components/setup/Item.vue";
import NothingFound from "@/components/setup/empty-state/NothingFound.vue";

// 🛠 Utils
import { fromInputData } from "@/assets/utils/fromInputData.js";

const queries = ["orderby=date", "order=desc", "per_page=20", "_embed"];

export default {
  name: "type",
  components: {
    Item,
    NothingFound
  },
  data() {
    return {
      type: this.$route.params.type,
      page: this.$store.state.items[this.$route.params.type].pageSearch,
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
  methods: {
    itemsLoad() {
      this.loading = true;
      // Get the search term
      const value = this.$store.getters["items/getSearch"](
        this.$route.params.type
      );
      // Start API call
      this.$axios
        .get(
          `wp/v2/${this.$route.params.type}?${queries.join(
            "&"
          )}&search=${value}&page=${this.$store.getters[
            "items/getTypePageSearch"
          ](this.$route.params.type)}&_embed`
        )
        .then(response => {
          // console.warn(response.data);
          // Push the data to the store
          this.$store.commit({
            type: "items/addSearchItems",
            itemType: this.$route.params.type,
            items: response.data.map(fromInputData)
          });
          // increment page by +1
          this.$store.commit({
            type: "items/incrementPageSearch",
            itemType: this.type
          });
          // Set loading animation to false
          this.loading = false;
        });
    },
    itemsinfIniteScroll() {
      window.addEventListener("scroll", () => {
        const scrollTop = Math.max(
          window.pageYOffset,
          document.documentElement.scrollTop,
          document.body.scrollTop
        );

        let bottomOfWindow =
          scrollTop + window.innerHeight ===
          document.documentElement.offsetHeight;

        if (!this.loading && bottomOfWindow) {
          this.itemsLoad();
        }
      });
    }
  },
  // Life cycle hooks
  mounted() {
    // Start API cal on frist load
    this.itemsinfIniteScroll();
  },
  created() {
    if (
      !this.$store.state.items[this.$route.params.type].searchResults.length
    ) {
      this.itemsLoad();
    }
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

