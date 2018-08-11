<template>
  <div class="alloy-page alloy-page--type">
    <CustomForm v-if="'/setup/custom' == this.$route.path" />
    <div class="alloy-select-flexbox">
      <div class="inner">
        <!-- <transition-group appear name="slide-up" tag="div" class="inner"> -->
        <Item v-for="item in allItems" :key="item.id" :item="item" />
        <!-- </transition-group> -->
      </div>
    </div>
    <h1 style="color: #fff" v-if="loading">Loading...</h1>
    <button @click="itemsLoad" class="centered" :disabled="loading">Load more</button>
  </div>
</template>

<script>
import CustomForm from '@/components/setup/CustomForm.vue';
import Item from '@/components/setup/Item.vue';

// 🛠 Utils
import { fromInputData } from '@/assets/utils/fromInputData.js';

const queries = [
  "orderby=title",
  "order=asc",
  "per_page=18",
  "_embed",
];

export default {
  name: 'type',
  // layout: 'simple',
  components: {
    CustomForm,
    Item,
  },
  // middleware: "api",
  data() {
    return {
      customShow: false,
      type: this.$route.params.type,
      page: this.$store.state.items[this.$route.params.type].page,
      loading: false,
    }
  }, // End data
  computed: {
    allItems() {
      // return .allItemsType(this.$route.params.type);
      return this.$store.getters['items/getTypeItems'](this.$route.params.type);
    },
    pageNumber() {
      return this.$store.getters['items/getTypePage'](this.$route.params.type);
    }
  },
  // async asyncData({ app, store, params }) {
  //   if (!store.state.items[params.type].items.length) {
  //     app.$axios.get(`wp/v2/${params.type}?${queries.join("&")}&page=${store.getters['items/getTypePage'](params.type)}&_embed`).then(response => {
  //       // Push the data to the store
  //       store.commit({
  //         type: 'items/addItems',
  //         itemType: params.type,
  //         items: response.data.map(fromInputData),
  //       });

  //       // Increase the page number each time the function is run 
  //       store.commit({
  //         type: 'items/incrementPage',
  //         itemType: params.type,
  //       });
  //     });
  //   }
  // },
  methods: {
    itemsLoad() {
      this.loading = true;

      this.$axios.get(`wp/v2/${this.type}?${queries.join("&")}&page=${this.$store.getters['items/getTypePage'](this.$route.params.type)}&_embed`).then(response => {

        // Push the data to the store
        this.$store.commit({
          type: 'items/addItems',
          itemType: this.type,
          items: response.data.map(fromInputData),
        });

        // Increase the page number each time the function is run 
        this.$store.commit({
          type: 'items/incrementPage',
          itemType: this.type,
        });
        this.loading = false;
      });
    },
    itemsinfIniteScroll() {
      window.addEventListener('scroll', () => {
        const scrollTop = Math.max(window.pageYOffset, document.documentElement.scrollTop, document.body.scrollTop)

        let bottomOfWindow = scrollTop + window.innerHeight === document.documentElement.offsetHeight;
      
        if (!this.loading && bottomOfWindow) {
          this.itemsLoad();
        }
      });
    },
  },
  // Life cycle hooks
  mounted() {
    this.itemsinfIniteScroll();
  },
  created() {
    if (!this.$store.state.items[this.$route.params.type].items.length) {
      this.itemsLoad();
    }
  },
  destroyed () {
    // window.removeEventListener('scroll');
  }
}
</script>

