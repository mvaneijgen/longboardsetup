<template>
  <div class="alloy-page">

    <form @submit.prevent="handleSubmit">

      <div class="alloy-form-group">

        <div class="alloy-input-field">
          <label for="selectType">Select part</label>
          <select id="selectType" v-model="item.type">
            <option disabled value="">Please select one</option>
            <option v-for="(item, index) in this.types" :key="index">{{ item }}</option>
          </select>
        </div>

        <div class="alloy-input-field">
          <label for="selectedLocation">Location</label>
          <input id="selectedLocation" type="text" v-model="item.location">
        </div>

      </div>

      <div class="alloy-input-field">
        <label for="selectedProductName">Product name</label>
        <textarea v-model="item.title" id="selectedProductName" cols="30" rows="4"></textarea>
      </div>

      <nuxt-link to="/" class="btn">Back</nuxt-link>
      <input type="submit" value="Add +/change" :disabled="item.type == '' || item.title == ''">

    </form>

    <button class="btn" @click="deleteMe">delete</button>

    <pre>{{item}}</pre>
  </div>
</template>

<script>
export default {
  name: 'add',
  data() {
    return {
      types: this.$store.state.items.types,
      item: {
        id: 0,
        type: '',
        view: 'simple',
        location: '',
        title: '',
      },
    }
  }, // End data
  methods: {
    handleSubmit: function() {
      this.$store.commit('setup/setupAdd', this.item);
      this.$router.push({
        path: '/setup'
      });
    },
    deleteMe: function(){
      this.$store.commit('setup/setupAdd', this.item);
      // confirm(`are you sure you want to delete ${this.item.title}?`)
    }
  }, // Are functions run on user actions example @click or on lifecycle hooks
  created() {
    this.item.id = this.$route.query.id;
    // console.warn(this.$route.query);
    this.item.type = this.$route.query.type;
    this.item.location = this.$route.query.location;
    this.item.title = this.$route.query.title;
  },
}

</script>

<style lang="scss"  scoped>
@import "~/assets/css/common/_variables.scss";
select {
  text-transform: capitalize;
}
pre {
  color: $brand-light;
}
</style>