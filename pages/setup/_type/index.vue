<template>
  <div>
    <div class="alloy-page alloy-page--type">
      <CustomForm v-if="'/setup/custom' == this.$route.path"/>
      <div class="alloy-select-flexbox">
        <div class="inner">
          <transition-group name="slide-in" tag="div" class="transition-card">
            <Item v-for="item in allItems" :key="item.id" :item="item"/>
          </transition-group>
        </div>
      </div>
      <h1 style="color: #fff" v-if="loading">Loading {{type}}...</h1>
      <button @click="itemsLoad" class="centered" :disabled="loading">Load more</button>
    </div>
  </div>
</template>

<script>
import CustomForm from "@/components/setup/CustomForm.vue";
import Item from "@/components/setup/Item.vue";

// 🛠 Utils
import { fromInputData } from "@/assets/utils/fromInputData.js";

const queries = ["orderby=date", "order=desc", "per_page=20", "_embed"];

export default {
  name: "type",
  components: {
    CustomForm,
    Item
  },
  data() {
    return {
      type: this.$route.params.type,
      page: this.$store.state.items[this.$route.params.type].page,
      loading: false
    };
  }, // End data
  computed: {
    allItems() {
      return this.$store.getters["items/getItems"](this.$route.params.type);
    }
    // pageNumber() {
    //   return this.$store.getters["items/getTypePage"](this.$route.params.type);
    // }
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
    this.itemsinfIniteScroll();
  },
  created() {
    if (!this.$store.state.items[this.$route.params.type].items.length) {
      this.itemsLoad();
    }
  },
  destroyed() {
    // window.removeEventListener('scroll');
  }
};
</script>

