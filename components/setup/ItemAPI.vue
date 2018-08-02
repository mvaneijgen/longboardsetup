<template>
  <div class="alloy-items alloy-cards" :data-type="item.type" :data-view="item.view">
    <div class="inner" @click="itemEdit">
      <img v-if="item.view != 'simple'" :src="item.image" :alt="item.slug">
      <img v-else src="http://alloy.work/codepen/QBOyJj/custom.jpg" :alt="item.slug">
      <div class="alloy-content">
        <div class="alloy-meta">
          <p>
            <strong>{{ item.type }}</strong>
          </p>
        </div>
        <h3>{{ item.slug }}</h3>
        <h1>banaan</h1>
        <p>{{item.image}}</p>
        <a :href="'http://www.google.com/search?q=' + item.slug.replace(/ /g,'+')">Search for this product</a>
      </div>
    </div>
    <button v-if="item.view != 'simple'" @click="toggleInfo">info</button>

  </div>
</template>

<script>
export default {
  props: ['item'],
  name: 'ItemAPI',
  data() {
    return {
    }
  }, // End data
  methods: {
    toggleInfo: function (event) {
      event.target.parentNode.classList.toggle('showInfo');
    },
    itemEdit: function() {
      // this.$store.commit('name/nameRandomGenerator');

      // // 📝 how to push prop 'item' to this page?
      // this.$router.push({
      //   path: '/setup/add',
      //   query: {
      //     id: this.item.id,
      //     type: this.item.type,
      //     title: this.item.slug,
      //     location: this.item.location,
      //   }
      // });
    }
  },
}
</script>

<style lang="scss"  scoped>
// @import '~/assets/css/common/_variables.scss';
</style>