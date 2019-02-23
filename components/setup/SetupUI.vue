<template>
  <div class="alloy-setup">
    <div class="inner">
      <ItemSetup v-for="item in getSetupCurrent" :key="item.id" :item="item"/>
      <div v-if="!getIfCustomItem" class="advanced-info">
        <span>
          <strong>Looking for more items?</strong> Such as brackets, bearings or a second pair of trucks (maybe even a third... weirdo)?
        </span>
      </div>
      <ItemAdd/>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
// 🛠 Utils
import { fromInputData } from "@/assets/utils/fromInputData.js";

import ItemSetup from "@/components/setup/ItemSetup.vue";
import ItemAdd from "@/components/setup/ItemAdd.vue";

// const queries = ["orderby=title", "order=asc", "per_page=1", "_embed"];

export default {
  name: "SetupUI",
  data() {
    return {
      queries: this.$route.query,
      notificationTrigger: false,
      setupLength: this.$store.state.setup.getRealSetupLength
    };
  },
  components: {
    ItemSetup,
    ItemAdd
  },
  computed: {
    ...mapGetters({
      getSetupCurrent: "setup/getSetupCurrent",
      getSetupNotEdited: "setup/getSetupNotEdited",
      getShareURL: "setup/getShareURL",
      // getRealSetupLength: "setup/getRealSetupLength",
      getIfCustomItem: "setup/getIfCustomItem"
    })
  },
  methods: {
    apiCallItems: function(item) {
      this.$axios
        .get(
          `wp/v2/${item}?per_page=1&slug=${this.queries[item]}&page=1&_embed`
        )
        .then(response => {
          // Push the data to the store
          this.$store.commit(
            "setup/setupAdd",
            response.data.map(fromInputData)[0]
          );
          // ! update the the URL after each API call to fix none after load
          this.$router.push({
            query: this.getShareURL
          });
        });
    },
    setCustom: function(item) {
      const itemData = this.queries[item].split("~");
      const itemObj = {
        view: "simple",
        type: item,
        id: item,
        custom: itemData[0],
        title: itemData[1],
        slug: `${itemData[0]}~${itemData[1]}~${itemData[2]}`,
        location: itemData[2]
      };
      this.$store.commit("setup/setupAdd", itemObj);
    },
    setName: function(name) {
      this.$store.commit("name/setName", this.queries[name]);
    },
    fetchItems: function() {
      // Check if the user 👩‍💻 is not editing the setup 🧰
      // console.warn(!this.getSetupEdited);
      if (this.getSetupNotEdited) {
        const apiCall = ["decks", "wheels", "trucks"];
        // Get all the queries from the URL
        Object.keys(this.queries).forEach(item => {
          // Check if the value of the key is not 'none'
          if (this.queries[item] !== "none") {
            if (apiCall.includes(item)) {
              this.apiCallItems(item);
            }
            if (item === "name") {
              this.setName(item);
            }
            if (item.replace(/\d+/g, "") === "custom") {
              this.setCustom(item);
            }
          }
        });
      }
    },
    //------------------------------------------------------//
    // 🔔Create notification based on the amount of items in the setup
    //------------------------------------------------------//
    triggerNameSetupNotification: function() {
      const notification = {
        title: "Nice your setup is coming along nicely",
        content:
          "Why don't you give it a name! Just lick on the title on top of the screen",
        image: "",
        type: "warning",
        timer: 6000
      };
      this.$store.commit("notifications/addNotification", notification);
    }
    // END 🔔Create notification based on the amount of items in the setup
  },
  mounted() {
    this.fetchItems();
  },
  watch: {
    setupLength: function(value) {
      console.warn(value);
      console.warn(this.setupLength);
      if (value === 3) {
        this.triggerNameSetupNotification();
      }
    }
  }
};
</script>
<style lang="scss" scoped>
@import "~/assets/css/common/_variables.scss";

.advanced-info {
  display: grid;
  grid-column: span 2;
  // grid-auto-rows: minmax(min-content, max-content);

  justify-items: center;
  align-items: center;
  color: $brand-light;
  span {
    font-size: 0.8rem;
    line-height: 1rem;
  }
}
</style>
