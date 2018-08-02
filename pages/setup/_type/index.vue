<template>
  <div class="alloy-page alloy-page--type">
    <div class="alloy-select-grid">
      <div class="inner">
        <Item v-for="item in itemsType" :key="item.id" :item="item" />
      </div>
    </div>
  </div>
</template>

<script>
import Item from '@/components/setup/Item.vue';

export default {
  name: 'type',
  components: {
    Item,
  },
  middleware: "api",
  data() {
    return {
    }
  }, // End data
  computed: {
    itemsType: {
      get() { 
        return this.$store.state.items[this.$route.params.type]; 
      }
    },
  }
}
</script>

