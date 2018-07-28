<template>
  <section>
    <header>
      <h1 class="centered">{{ this.$store.state.title }}</h1>
    </header>
    <div class="alloy-setup">
      <div class="inner">
        <Item v-for="item in this.$store.state.setup" :key="item.id" :item="item" />
      </div>
    </div>
  </section>
</template>

<script>
import Item from '@/components/Item.vue';

export default {
  components: {
    Item,
  },
}
</script>

<style>
</style>

