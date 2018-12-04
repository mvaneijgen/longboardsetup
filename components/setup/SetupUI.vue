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
}
</script>