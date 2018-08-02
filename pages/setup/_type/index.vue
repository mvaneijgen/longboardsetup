<template>
  <div class="alloy-page alloy-page--type">
    <div class="alloy-select-grid">
      <div class="inner">
        <ItemAPI v-for="item in this.$store.state.items.decks" :key="item.id" :item="item" />
      </div>
    </div>
    <h1>raw data</h1>
    <pre>{{ this.$store.state.items.decks }}</pre>
  </div>
</template>

<script>
import ItemAPI from '@/components/setup/ItemAPI.vue';

export default {
  name: 'type',
  components: {
    ItemAPI,
  },
  middleware: "api",
  data() {
    return {
      
    }
  }, // End data
}
</script>

