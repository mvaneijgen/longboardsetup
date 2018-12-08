<template>
  <div class="component-Custom">
    <form @submit.prevent="handleSubmit">
      <div class="alloy-input-field">
        <label for="selectType">Select part</label>
        <select id="selectType" v-model="item.custom" required>
          <option disabled value>Please select one</option>
          <option
            v-for="(item, index) in this.types"
            :key="index"
            :value="item.toLowerCase()"
          >{{ item }}</option>
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
            <icon-trash/>
          </icon-base>
        </button>
        
        <input
          v-if="hasQueries"
          type="submit"
          value="Change"
          :disabled="item.custom == '' || item.title == ''"
        >
        <input v-else type="submit" value="Add" :disabled="item.custom == '' || item.title == ''">
      </div>
    </form>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
// 🛠 Utils
import { slugify } from "@/assets/utils/filters.js";

import IconBase from "@/components/IconBase.vue";
import IconTrash from "@/components/icons/IconTrash.vue";

export default {
  name: "CustomForm",
  components: {
    IconBase,
    IconTrash
  },
  data() {
    return {
      types: this.$store.state.items.types,
      hasQueries: false,
      locationOn: false,
      item: {}
    };
  }, // End data
  computed: {
    ...mapGetters({
      getSetupCurrent: "setup/getSetupCurrent",
      getCurrentItem: "setup/getCurrentItem"
    })
  },
  methods: {
    routeToSetup: function() {
      this.$router.push({
        path: "/setup"
      });
    },
    handleSubmit: function() {
      const currentSetupNumber = this.getSetupCurrent.length;
      if (this.item.id == "") {
        this.item.id = `${this.item.custom}${currentSetupNumber}`;
      }

      if (this.item.type == "") {
        this.item.type = `custom${currentSetupNumber}`;
      }

      this.item.slug = `${this.item.custom}~${slugify(this.item.title)}`;
      if (this.item.location != "") {
        this.item.slug += `~${this.item.location}`;
      }
      this.$store.commit("setup/setupAdd", this.item);
      this.$store.commit("setup/itemCurrentClear");
      this.routeToSetup();
    },
    //------------------------------------------------------//
    // Delete ❌ item from Setup 🧰 and Create Notification 💌
    //------------------------------------------------------//
    deleteMe: function() {
      this.$store.commit("setup/setupRemove", this.item);

      this.routeToSetup();

      const notification = {
        title: `${this.item.title} removed from your setup`,
        content: "We'll miss him",
        image: "",
        type: "warning",
        timer: 3500
      };
      this.$store.commit("notifications/addNotification", notification);
    },
    // END Create Notification 💌

    setItemFromStore: function() {
      this.item = { ...this.getCurrentItem };
    }
  }, // Are functions run on user actions example @click or on lifecycle hooks
  created() {
    this.setItemFromStore();
  }
};
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