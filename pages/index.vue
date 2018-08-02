<template>
  <div class="alloy-page alloy-page--setup">

    <div class="alloy-setup">
      <div class="inner">

        <Item v-for="item in this.$store.state.setup.setupCurrent" :key="item.id" :item="item" />

        <ItemAdd v-show="advancedOn" />

      </div>
      <AdvancedToggle />
      <pre>{{ this.$store.state.items.decks }}</pre>
    </div>
  </div>
</template>

<script>
import Item from '@/components/setup/Item.vue';
import AdvancedToggle from '@/components/setup/AdvancedToggle.vue';
import ItemAdd from '@/components/setup/ItemAdd.vue';

export default {
  transition: 'page-alt',
  components: {
    Item,
    ItemAdd,
    AdvancedToggle,
  },
  computed: {
    advancedOn: {
      get () {
        return this.$store.state.setup.advancedOn;
      },
    },
  }
}
</script>

<style>
</style>

