<template>
  <nuxt-link to="setup/add" class="alloy-cards alloy-items" data-type="add">
    <div class="inner">
      <span>+</span>
    </div>
  </nuxt-link>
</template>

<script>
export default {
  // props: ['item'],
  name: 'ItemAdd',
  data() {
    return {
      title: 'ItemAdd'
    }
  }, // End data
}
</script>

<style lang="scss"  scoped>
@import "~/assets/css/common/_variables.scss";

.alloy-cards {
  background-color: $brand-one-lighten;
  grid-row: span 2;
  .inner {
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: 800;
    color: $brand-light;
    font-size: 54px;
    line-height: 1em;
  }
}
</style>