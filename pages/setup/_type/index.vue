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
      <transition name="slide-in">
        <NoMoreResults v-if="!moreResults"/>
      </transition>
      <h1 style="color: #fff" v-if="loading && moreResults">Loading {{type}}...</h1>
      <button @click="itemsLoad" class="centered" v-if="moreResults" :disabled="loading">Load more</button>
    </div>
  </div>
</template>

<script>
import CustomForm from "@/components/setup/CustomForm.vue";
import Item from "@/components/setup/Item.vue";
import NoMoreResults from "@/components/default/NoMoreResults.vue";
// 🛠 Utils
import { fromInputData } from "@/assets/utils/fromInputData.js";

const queries = ["orderby=date", "order=desc", "per_page=20", "_embed"];

export default {
  name: "type",
  components: {
    CustomForm,
    Item,
    NoMoreResults
  },
  data() {
    return {
      type: this.$route.params.type,
      page: this.$store.state.items[this.$route.params.type].page,
      loading: false,
      moreResults: true,
      notificationMissing: false
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
      if (this.moreResults) {
        this.loading = true;

        this.$axios
          .get(
            `wp/v2/${this.type}?${queries.join("&")}&page=${this.$store.getters[
              "items/getTypePage"
            ](this.$route.params.type)}&_embed`
          )
          .then(response => {
            // Check if its the last page of the API call
            const pageTotal = response.headers["x-wp-totalpages"];
            const pageCurrent = this.$store.getters["items/getTypePage"](
              this.$route.params.type
            );
            // console.warn(`pageTotal = ${pageTotal} pageCurrent = ${pageCurrent}`);
            if (pageCurrent >= pageTotal) {
              this.moreResults = false;
            }
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
    //------------------------------------------------------//
    // Infinity scroll
    //------------------------------------------------------//
    itemsinfIniteScroll() {
      window.addEventListener("scroll", () => {
        const docHeight = document.documentElement.offsetHeight;
        const scrollTop = Math.max(
          window.pageYOffset,
          document.documentElement.scrollTop,
          document.body.scrollTop
        );
        const offset = 200;
        let bottomOfWindow = scrollTop + window.innerHeight >= docHeight;

        if (!this.loading && bottomOfWindow) {
          this.loading = true;
          this.itemsLoad();
        }
      });
    }
    // END Infinity scroll
  },
  // Life cycle hooks
  mounted() {
    //------------------------------------------------------//
    // Create Notification
    //------------------------------------------------------//
    if (!this.notificationMissing) {
      const notification = {
        title: "Are you missing products?",
        content:
          "We've gathered around 2000+ items, but there are so much more items that we’re still missing.",
        image: "",
        type: "",
        link: "/submit",
        timer: 10000
      };
      this.$store.commit("notifications/addNotification", notification);
      this.notificationMissing = true;
    }
    // END Create Notification

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

