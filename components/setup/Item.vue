<template>
  <div class="alloy-items alloy-cards" :data-type="item.type" :data-view="item.view">
    <div class="inner" @click="itemEdit" :data-item-id="item.id">

      <template v-if="item.view == 'empty'">
        <EmptyDecksIcon v-if="item.type == 'decks'" />
        <EmptyTrucksIcon v-if="item.type == 'trucks'" />
        <EmptyWheelsIcon v-if="item.type == 'wheels'" />
      </template>

      <template v-else>
        <img v-if="item.view != 'simple'" :src="item.images.full" :alt="item.title">
        <img v-else src="http://alloy.work/codepen/QBOyJj/custom.jpg" :alt="item.title">
      </template>

      <div class="alloy-content">
        <div class="alloy-meta">
          <!-- <p>
            <strong>{{ item.type }}</strong>
          </p> -->
        </div>
        <h3 v-html="item.title"></h3>
        <a :href="'http://www.google.com/search?q=' + item.title.replace(/ /g,'+')">Search online</a>
      </div>

    </div>
    <button v-if="item.view != 'simple'" @click="toggleInfo" class="btn btn--small btn--subtle">info</button>

  </div>
</template>

<script>
import EmptyDecksIcon from '@/components/setup/empty-state/EmptyDecksIcon.vue';
import EmptyTrucksIcon from '@/components/setup/empty-state/EmptyTrucksIcon.vue';
import EmptyWheelsIcon from '@/components/setup/empty-state/EmptyWheelsIcon.vue';

export default {
  props: ['item'],
  name: 'Item',
  components: {
    EmptyDecksIcon,
    EmptyTrucksIcon,
    EmptyWheelsIcon,
  },
  data() {
    return {
    }
  }, // End data
  methods: {
    toggleInfo: function (event) {
      event.target.parentNode.classList.toggle('showInfo');
    },

    //------------------------------------------------------//
    // Variable function move, add or change and route 
    //------------------------------------------------------//
    itemEdit: function(event) {
      if('setup-type' === this.$route.name) {
        
        // find the item in the store/items.js
        const itemId = event.target.dataset.itemId;
        const storeTypeDataset = this.$store.state.items[this.$route.params.type];
        const result = storeTypeDataset.find(function(item) {
          return item.id == itemId;
        });
        // Add custom 🔑 key to the API object
        const paramKeyCurrent = this.$route.query.paramKey;
        result['paramKey'] = paramKeyCurrent;

        // Get the current setup
        const items = this.$store.state.setup.setupCurrent;

        const changeItemCheck = items.findIndex(item => item.paramKey == paramKeyCurrent);

        if (changeItemCheck <= -1) {
          this.$store.commit('setup/setupAdd', result);
        } else {
          this.$store.commit('setup/setupChange', result);
        }

        // 📩 Add item and navigate to 📲 to the setup route
        this.$router.push({
          path: '/setup',
        });

      } else {
        // navigate to 📲 to the setup route
        this.$router.push({
          path: `/setup/${this.item.type}`,
          query: {
            paramKey: this.item.paramKey,
            id: this.item.id,
            type: this.item.type,
            slug: this.item.slug,
            location: this.item.location,
          }
        });
      }
      // If in SetupUI component
      // // Go to this.$router.push({ 
      // this.$store.commit('name/nameRandomGenerator');

      // // 📝 how to push prop 'item' to this page?
      
    }
    //------------------------------------------------------//
    // END Variable function move, add or change and route
    //------------------------------------------------------//
  },
}
</script>

<style lang="scss"  scoped>
// @import '~/assets/css/common/_variables.scss';
</style>