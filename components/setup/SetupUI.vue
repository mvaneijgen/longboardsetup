<template>
  <div class="alloy-setup">
    <div class="inner">

      <ItemSetup v-for="item in getSetupCurrent" :key="item.id" :item="item" />

      <ItemAdd/>
    </div>
  </div>

</template>

<script>
import { mapGetters } from 'vuex'

import ItemSetup from '@/components/setup/ItemSetup.vue';
// import AdvancedToggle from '@/components/setup/AdvancedToggle.vue';
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
    ItemSetup,
    ItemAdd,
    // AdvancedToggle,
  },
  computed: {
    ...mapGetters({
      getSetupCurrent: 'setup/getSetupCurrent',
    }),
  },
  // created() {
  //   // ❌ Create a empty setup on first load
  //   this.$store.commit('setup/setupClear');
  // }
}
</script>

<style lang="scss"  scoped>
// @import '~/assets/css/common/_variables.scss';
</style>