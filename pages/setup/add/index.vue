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

      <input type="submit" value="Add +" :disabled="item.type == '' || item.title == ''">

    </form>

  </div>
</template>

<script>
export default {
  // props: ['item'],
  name: 'add',
  data() {
    return {
      types: this.$store.state.types,
      item: {
        id: "",
        type: "",
        view: 'simple',
        location: "",
        title: "",
      },
    }
  }, // End data
  methods: {
    handleSubmit: function() {
      this.$store.state.setup.push(this.item);
      this.$router.push({
        path: '/'
      });
    }
  }, // Are functions run on user actions example @click or on lifecycle hooks
}

</script>

<style lang="scss"  scoped>
@import "~/assets/css/common/_variables.scss";
select {
  text-transform: capitalize;
}
</style>