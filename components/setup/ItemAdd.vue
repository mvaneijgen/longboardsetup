<template>
  <div @click="loadItemType" class="alloy-cards alloy-items" data-type="add">
    <div class="inner">
      <icon-base width="45" height="45" icon-name="add">
        <icon-add/>
      </icon-base>
      <span>Custom item</span>
    </div>
  </div>
</template>

<script>
import IconBase from "@/components/IconBase.vue";
import IconAdd from "@/components/icons/IconAdd.vue";

export default {
  // props: ['item'],
  name: "ItemAdd",
  components: {
    // Icon logic
    IconBase,
    IconAdd
  },
  data() {
    return {
      item: {}
    };
  }, // End data
  methods: {
    loadItemType: function() {
      this.$store.commit("setup/itemCurrentAdd", this.item);

      this.$router.push({
        path: `/setup/custom`
      });
    }
  }
};
</script>

<style lang="scss"  scoped>
@import "~/assets/css/common/_variables.scss";

.alloy-cards {
  background-color: $brand-one-lighten;
  grid-row: span 2;
  text-decoration: none;

  .inner {
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: 800;
    color: $brand-light;
    font-size: 54px;
    line-height: 1em;

    span {
      font-size: 1.4rem;
      display: inline-block;
      margin-left: $base-margin;
    }
  }
}
</style>