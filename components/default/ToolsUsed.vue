<template>
  <div class="component-ToolsUsed">
    <div class="alloy-content alloy-text-light">
      <h4>Like the site?</h4>
      <h2>Here are some tools that have been used in the creation of this site.</h2>
    </div>
    <p></p>
    <div class="inner">
      <div class="alloy-cards alloy-items alloy-items--tools" v-for="(item, index) in tools" :key="index">
        <h4>{{ item.title }}</h4>
        <p>{{ item.about }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  // props: ['item'],
  name: 'ToolsUsed',
  data() {
    return {
      title: 'ToolsUsed',
    tools: this.$store.state.default.toolsUsed,
    }
  }, // End data

}
</script>

<style lang="scss" scoped>
@import "~/assets/css/common/_variables.scss";
.component-ToolsUsed {
  > .inner {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr) );
    grid-column-gap: $base-margin;
    grid-row-gap: $base-margin;
    > * {
      // flex-grow: 1;
      // width: 32%;
      // margin: $base-margin/2;
      // margin-bottom: 2%;
      padding: $base-margin;
      font-size: 16px;
      line-height: 1.4em;
      background-color: $brand-one-lighten;
      color: $brand-light;
    }
  }
}
</style>
