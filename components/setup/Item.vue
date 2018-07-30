<template>
  <div class="alloy-items alloy-cards" :data-type="item.type" :data-view="item.view">
    <div class="inner" @click="itemEdit">
      <img v-if="item.view != 'simple'" :src="'http://alloy.work/codepen/QBOyJj/' + item.image" :alt="item.title">
      <img v-else src="http://alloy.work/codepen/QBOyJj/custom.jpg" :alt="item.title">
      <div class="alloy-content">
        <div class="alloy-meta">
          <p>
            <strong>{{ item.type }}</strong>
          </p>
        </div>
        <h3>{{ item.title }}</h3>
        <a :href="'http://www.google.com/search?q=' + item.title.replace(/ /g,'+')">Search for this product</a>
      </div>
    </div>
    <button v-if="item.view != 'simple'" @click="toggleInfo">info</button>

  </div>
</template>

<script>
export default {
  props: ['item'],
  name: 'Item',
  data() {
    return {
    }
  }, // End data
  methods: {
    toggleInfo: function (event) {
      event.target.parentNode.classList.toggle('showInfo');
    },
    itemEdit: function() {
      // 📝 how to push prop 'item' to this page?
      this.$router.push({
        path: '/setup/add',
        query: {
          id: this.item.id,
          type: this.item.type,
          title: this.item.title,
          location: this.item.location,
        }
        // name: 'setup-add',
        // params: { index: this.item.id },
      });
    }
  },
}
</script>

<style lang="scss"  scoped>
// @import '~/assets/css/common/_variables.scss';
</style>