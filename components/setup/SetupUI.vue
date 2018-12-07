<template>
  <div class="alloy-setup">
    <div class="inner">
      <ItemSetup v-for="item in getSetupCurrent" :key="item.id" :item="item"/>

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
      queries: this.$route.query
    };
  },
  components: {
    ItemSetup,
    ItemAdd
  },
  computed: {
    ...mapGetters({
      getSetupCurrent: "setup/getSetupCurrent",
      getSetupNotEdited: "setup/getSetupNotEdited"
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
    }
  },
  mounted() {
    this.fetchItems();
  }
};
</script>