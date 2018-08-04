<template>
  <div class="component-Navigation">
    <nav>
      <div class="alloy-btn-group">
        <template v-if="'setup' != this.$route.name">
          <nuxt-link to="/setup" class="btn">Back</nuxt-link>
        </template>
        <button v-if="'setup' == this.$route.name" @click="setupClear">Clear</button>
        <button @click="toggleAllInfo">Toggle info</button>
        <div v-if="'setup' != this.$route.name" class="alloy-input-field">
          <label for="search">Seach</label>
          <input type="text" id="search" :placeholder="`Search ${this.$route.params.type}...`">
        </div>
        <template v-if="'setup' == this.$route.name">
          <button class="alloy-share btn--alt">Share</button>
        </template>

      </div>
    </nav>
  </div>
</template>

<script>
export default {
  // props: ['item'],
  name: 'Navigation',
  data() {
    return {
      title: 'Navigation'
    }
  }, // End data
    methods: {
    toggleAllInfo: function (event) {
      document.body.classList.toggle('showAllInfo');
      // event.target.parentNode.classList.toggle('showAllInfo');
    },
    setupClear: function() {
      var result = confirm('Are you sure? This will remove all your hard work.');
      if (result) {
        this.$store.commit('setup/setupClear');
      }
      
    }
  },
}
</script>

<style lang="scss" scoped>
@import "~/assets/css/common/_variables.scss";

.component-Navigation {
  position: fixed;
  z-index: 1000;
  bottom: 0;
  left: 0;
  width: 100%;
  background-color: $brand-two-lighten;
  padding: $base-margin;
}
.alloy-share {
  float: right;
  margin-right: 0;
}
.alloy-input-field {
  display: inline-block;
  input {
    margin-bottom: 0;
  }
}
</style>
