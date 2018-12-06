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
  name: 'SetupUI',
  data() {
    return {
      title: 'SetupUI'
    }
  }, 
  components: {
    ItemSetup,
    ItemAdd,
  },
  computed: {
    ...mapGetters({
      getSetupCurrent: 'setup/getSetupCurrent',
    }),
  },
  methods: {
    fetchItems: function(){
      console.warn(this.$route.query);
      // this.$route.query.forEach(element => {
      //   console.warn(element);
      // });
    }
  },
  mounted() {
    this.fetchItems();
  },
}
</script>