<template>
  <div class="component-Custom">
    <form @submit.prevent="handleSubmit">

      <div class="alloy-input-field">
        <label for="selectType">Select part</label>
        <select id="selectType" v-model="item.custom" required>
          <option disabled value="">Please select one</option>
          <option v-for="(item, index) in this.types" :key="index" :value="item.toLowerCase()">{{ item }}</option>
          <option value="custom">Everything else</option>
        </select>
      </div>

      <div class="alloy-input-field">
        <label for="selectedProductName">Product name</label>
        <textarea v-model="item.title" id="selectedProductName" cols="30" rows="4" required></textarea>
      </div>

      <div class="alloy-checkbox-field">
        <input id="selectedLocation" type="checkbox" v-model="locationOn">
        <label for="selectedLocation">Add custom location</label>
        <small>Do you want to define a custom for this part of your setup, e.g. back, front, top, bottom, ect.</small>
      </div>

      <div class="alloy-input-field" v-show="locationOn">
        <label for="selectedLocation">Location</label>
        <input id="selectedLocation" type="text" v-model="item.location">
      </div>

      <div class="alloy-btn-group">

        <button v-if="hasQueries" @click.prevent="deleteMe" class="btn btn--icon">
          <span>Delete this item</span>
          <icon-base width="20" height="20" icon-name="trash">
            <icon-trash />
          </icon-base>
        </button>

        <input v-if="hasQueries" type="submit" value="Change" :disabled="item.custom == '' || item.title == ''">
        <input v-else type="submit" value="Add" :disabled="item.custom == '' || item.title == ''">

      </div>

    </form>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

import IconBase from '@/components//IconBase.vue'
import IconTrash from '@/components/icons/IconTrash.vue'

export default {
  // props: ['item'],
  name: 'CustomForm',
    components: {
    IconBase,
    IconTrash,
  },
  data() {
    return {
      types: this.$store.state.items.types,
      hasQueries: false,
      locationOn: false,
      item: {
        view: 'simple',
        type: '',
        id: '',
        custom: '',
        title: '',
        slug: '',
        location: '',
      },
    }
  }, // End data
  computed: {
    ...mapGetters({
      // map `this.doneCount` to `this.$store.getters.doneTodosCount`
      getShareURL: "setup/getShareURL",
      getSetupCurrent: "setup/getSetupCurrent",
    })
  },
  methods: {
    routeToSetup: function() {
      // const queries = this.getShareURL.reduce((key, value) => { return { ...key, ...value } }, {});

      this.$router.push({
        path: '/setup',
        query: this.getShareURL,
      });
    },
    handleSubmit: function() {
      // Give custom item a unique ID
      const currentSetupNumber = this.getSetupCurrent.length;
      let slugCustom = `${this.item.custom}~`;

      if (this.item.location != '') {
        slugCustom = `${this.item.custom}~${this.item.location}~`;
      }

      if (this.item.type == '') {
        this.item.type = `custom${currentSetupNumber}`;
      }

      if(this.item.id == '') {
        this.item.id = `${this.item.custom}${currentSetupNumber}`;
      }
      this.item.slug = `${slugCustom}~${this.item.title}`;

      this.$store.commit('setup/setupAdd', this.item);
      this.routeToSetup();
    },
    deleteMe: function(){
      this.$store.commit('setup/setupRemove', this.item);

      this.routeToSetup();
    }
  }, // Are functions run on user actions example @click or on lifecycle hooks
  created() {
    // const queryLength = Object.keys(this.$route.query).length;

    if (Object.keys(this.$route.query).length) {
      this.hasQueries = true;
      // console.warn(this.$route.query.length);
      this.item.id = this.$route.query.id;
      // this.item.custom = this.$route.query.id.replace(/\d+/g,'');
      this.item.custom = this.$route.query.custom;
      if(this.$route.query.location != '') {
        this.locationOn = true;
      }
      this.item.location = this.$route.query.location;
      this.item.title = this.$route.query.title;
      this.item.slug = this.$route.query.slug;
      this.item.type = this.$route.query.type;
    }
  },
}
</script>

<style lang="scss"  scoped>
@import "~/assets/css/common/_variables.scss";

.alloy-checkbox-field {
  color: $brand-light;
  margin-bottom: $base-margin * 2;
  [type="checkbox"] {
    margin-right: $base-margin;
  }
  small {
    display: block;
  }
}
</style>