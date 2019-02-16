<template>
  <div>
    <div class="alloy-page alloy-page--type">
      <CustomForm v-if="'/setup/custom' == this.$route.path"/>
      <div class="alloy-select-flexbox">
        <div class="inner">
          <transition-group name="slide-in" tag="div" class="transition-card">
            <Item v-for="item in allSearchItems" :key="item.id" :item="item"/>
          </transition-group>
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
      page: this.$store.state.items[this.$route.params.type].page,
      loading: false,
      hasSearchResults: false
    };
  }, // End data
  computed: {
    allItems() {
      return this.$store.getters["items/getItems"](this.$route.params.type);
    },
    allSearchItems() {
      return this.$store.getters["items/getSearchResults"](
        this.$route.params.type
      );
    },
    pageNumber() {
      return this.$store.getters["items/getTypePage"](this.$route.params.type);
    }
  },
  methods: {
    itemsLoad() {
      this.loading = true;

      this.$axios
        .get(
          `wp/v2/${this.type}?${queries.join("&")}&page=${this.$store.getters[
            "items/getTypePage"
          ](this.$route.params.type)}&_embed`
        )
        .then(response => {
          // Push the data to the store
          this.$store.commit({
            type: "items/addItems",
            itemType: this.type,
            items: response.data.map(fromInputData)
          });

          // Increase the page number each time the function is run
          this.$store.commit({
            type: "items/incrementPage",
            itemType: this.type
          });
          this.loading = false;
        });
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

