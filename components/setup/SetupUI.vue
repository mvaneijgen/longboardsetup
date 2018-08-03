<template>
  <div class="alloy-setup">
    <div class="inner">

      <Item v-for="item in setupCurrent" :key="item.id" :item="item" />

      <ItemAdd v-show="advancedOn" />

    </div>
    <AdvancedToggle />
  </div>

</template>

<script>
import Item from '@/components/setup/Item.vue';
import AdvancedToggle from '@/components/setup/AdvancedToggle.vue';
import ItemAdd from '@/components/setup/ItemAdd.vue';

export default {
  // props: ['item'],
  name: 'SetupUI',
  data() {
    return {
      title: 'SetupUI'
    }
  }, 
  components: {
    Item,
    ItemAdd,
    AdvancedToggle,
  },
  computed: {
    setupCurrent: {
      get () {
          return this.$store.state.setup.setupCurrent;
        }
    },
    advancedOn: {
      get () {
        return this.$store.state.setup.advancedOn;
      },
    },
  }
}
</script>

<style lang="scss"  scoped>
// @import '~/assets/css/common/_variables.scss';
</style>