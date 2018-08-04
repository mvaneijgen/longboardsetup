<template>
  <div class="alloy-page alloy-page--type">
    <CustomForm v-if="'/setup/custom' == this.$route.path" />
    <div class="alloy-select-grid">
      <div class="inner">
        <Item v-for="item in itemsType" :key="item.id" :item="item" />
      </div>
    </div>
  </div>
</template>

<script>
import CustomForm from '@/components/setup/CustomForm.vue';
import Item from '@/components/setup/Item.vue';

export default {
  name: 'type',
  components: {
    CustomForm,
    Item,
  },
  middleware: "api",
  data() {
    return {
      customShow: false,
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

