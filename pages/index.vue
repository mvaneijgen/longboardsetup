<template>
  <div class="alloy-page alloy-page--setup">

    <div class="alloy-setup">
      <div class="inner">

        <Item v-for="item in this.$store.state.setup.setupCurrent" :key="item.id" :item="item" />

        <ItemAdd v-show="_advancedOn" />

      </div>
      <AdvancedToggle />
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
    _advancedOn: {
      get () {
        return this.$store.state.setup._advancedOn;
      },
    },
  }
}
</script>

<style>
</style>

