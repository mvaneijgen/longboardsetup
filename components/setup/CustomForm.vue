<template>
  <div class="component-Custom">
    <div data-view="simple" class="alloy-items alloy-cards alloy-card--preview">
      <div class="inner">
        <div class="preview">Preview</div>
        <img v-if="item.custom" :src="imageLink(item.custom)">
        <img v-else :src="imageLink('custom')">
        <div class="alloy-content">
          <div class="alloy-meta">
            <p>
              <strong v-if="item.custom">{{item.custom}}</strong>
              <strong v-else>Item type</strong>
              <span v-if="item.location && locationOn">| {{item.location}}</span>
            </p>
          </div>
          <h3 v-if="item.title">{{ item.title }}</h3>
          <h3 v-else>Input a name</h3>
        </div>
      </div>
    </div>

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
        <label for="selectedLocation">Define a custom position (e.g. back, top, bottom, ect.)</label>
      </div>

      <div class="alloy-input-field" v-show="locationOn">
        <label for="selectedLocation">Location</label>
        <input id="selectedLocation" type="text" v-model="item.location">
      </div>

      <div class="alloy-btn-group">
        <button v-if="item.id" @click.prevent="deleteMe" class="btn btn--icon">
          <span>Delete this item</span>
          <icon-base width="20" height="20" icon-name="trash">
            <icon-trash/>
          </icon-base>
        </button>
        
        <input
          v-if="item.id"
          type="submit"
          value="Change"
          :disabled="item.custom == '' || item.title == ''"
        >
        <input v-else type="submit" value="Add" :disabled="!item.custom || !item.title">
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
      this.item.view = "simple";
      if (!this.item.id) {
        this.item.id = `${this.item.custom}${currentSetupNumber}`;
      }

      if (!this.item.type) {
        this.item.type = `custom${currentSetupNumber}`;
      }

      // this.item.slug = `${this.item.custom}~${slugify(this.item.title)}`; // ! Will remove capitalize words by user
      this.item.slug = `${this.item.custom}~${this.item.title}`;
      if (this.item.location && this.locationOn) {
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
        content: "We'll shall miss it.",
        image: "",
        type: "warning",
        timer: 6000
      };
      this.$store.commit("notifications/addNotification", notification);
    },
    // END Create Notification 💌

    setItemFromStore: function() {
      // console.warn(this.getCurrentItem);
      if (
        this.getCurrentItem.location &&
        this.getCurrentItem.location !== "undefined"
      ) {
        this.locationOn = true;
      }
      this.item = { ...this.getCurrentItem };
    },
    imageLink: function(image) {
      return require(`~/assets/images/${image}.svg`);
    }
  }, // Are functions run on user actions example @click or on lifecycle hooks
  created() {
    this.setItemFromStore();
  }
};
</script>

<style lang="scss"  scoped>
@import "~/assets/css/common/_variables.scss";
.alloy-btn-group {
  justify-content: space-between;
  input[type="submit"] {
    margin-left: auto;
  }
}
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
.alloy-card--preview {
  margin-bottom: $base-margin * 2;
  height: 120px;
  .alloy-meta {
    span {
      margin-left: 5px;
    }
  }
}
.preview {
  position: absolute;
  top: 0;
  right: 0;
  text-transform: uppercase;
  color: $brand-grey;
  padding: 5px;
  font-size: 12px;
  line-height: 1em;
}
</style>