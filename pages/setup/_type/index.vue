<template>
  <div class="alloy-page alloy-page--type">
    <h1 style="color: #fff;">{{this.$store.state.items.decks.page}}</h1>
    <CustomForm v-if="'/setup/custom' == this.$route.path" />
    <div class="alloy-select-grid">
      <div class="inner">
        <Item v-for="item in allItems" :key="item.id" :item="item" />
      </div>
    </div>
    <button @click="loadMore">Load more</button>
  </div>
</template>

<script>
import CustomForm from '@/components/setup/CustomForm.vue';
import Item from '@/components/setup/Item.vue';

const queries = [
  "orderby=title",
  "order=asc",
  "per_page=18",
  "_embed",
];

/**
 * Converts the input data from the api into an internal data structure
 * @param {Object} item
 * @returns {Object}
 */
function fromInputData(item) {
  //
  let imageFull = 'image-not-found.png';
  let imageObj = {};

  if(item._embedded !== undefined) {
    imageFull = item._embedded["wp:featuredmedia"][0].media_details.sizes.full.source_url;
    imageObj = item._embedded["wp:featuredmedia"][0].media_details.sizes;
  } 
  // Return object 
  return {
    id: item.id,
    title: item.title.rendered,
    slug: item.slug,
    type: item.type,
    view: "advanced",
    image: imageFull,
    images: imageObj,
  };
}

export default {
  name: 'type',
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
  // async asyncData({ fetch, store, params }) {
  //   await fetch(params.type)
  //   let itemsType = store.state.items[params.type].items;

  //   return {
  //     itemsType: itemsType
  //   }
  // },
  methods: {
    loadMore() {
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
      });
    }
  }
}
</script>

