<template>
  <div class="component-Navigation">
    <nav>
      <div class="alloy-btn-group">
        <template v-if="'setup' != this.$route.name">
          <nuxt-link to="/setup" class="btn btn--icon btn--icon-left">
            <icon-base width="20" height="20" icon-name="arrow-left">
              <icon-arrow-left/>
            </icon-base>
            <span>Back</span>
          </nuxt-link>
        </template>

        <button v-if="'setup' == this.$route.name" @click="setupClear" class="btn btn--icon">
          <span>Clear</span>
          <icon-base width="20" height="20" icon-name="trash">
            <icon-trash/>
          </icon-base>
        </button>
        
        <button
          v-if="'setup' == this.$route.name || 'setup-type' == this.$route.name || 'setup-type-search' == this.$route.name"
          @click="toggleAllInfo"
          class="btn btn--icon"
        >
          <span>Info</span>
          <icon-base width="20" height="20" icon-name="info">
            <icon-info/>
          </icon-base>
        </button>

        <div
          v-if="'setup-type' == this.$route.name || 'setup-type-search' == this.$route.name"
          class="alloy-input-field"
        >
          <form id="searchForm" @submit.prevent="searchSubmit" action="#" method="post">
            <label for="searchTerm">Search</label>
            <input
              type="text"
              id="searchTerm"
              :placeholder="`Search ${this.$route.params.type}...`"
              v-model.lazy.trim="searchField"
            >
            <input type="submit" value="⏎">
          </form>
        </div>

        <template v-if="'setup' == this.$route.name">
          <button class="alloy-share btn btn--alt btn--icon" @click="openShareModal">
            <span>Share</span>
            <icon-base width="20" height="20" icon-name="share">
              <icon-share/>
            </icon-base>
          </button>
        </template>
      </div>
    </nav>
  </div>
</template>

<script>
// import { mapGetters } from 'vuex'
// 🛠 Utils
import { fromInputData } from "@/assets/utils/fromInputData.js";

// const queries = ["orderby=title", "order=asc", "per_page=18", "_embed"];
// Icon logic
import IconBase from "@/components/IconBase.vue";
import IconInfo from "@/components/icons/IconInfo.vue";
import IconTrash from "@/components/icons/IconTrash.vue";
import IconShare from "@/components/icons/IconShare.vue";
import IconArrowLeft from "@/components/icons/IconArrowLeft.vue";

export default {
  // props: ['item'],
  name: "Navigation",
  components: {
    // Icon logic
    IconBase,
    IconInfo,
    IconTrash,
    IconShare,
    IconArrowLeft
  },
  methods: {
    toggleAllInfo: function(event) {
      document.body.classList.toggle("showAllInfo");
      // event.target.parentNode.classList.toggle('showAllInfo');
    },
    setupClear: function() {
      if (confirm("Are you sure? This will remove all your hard work.")) {
        this.$store.commit("setup/setupClear");
      }
    },
    openShareModal: function() {
      this.$store.commit("setup/setShowShareModel", true);
    },
    //------------------------------------------------------//
    // 🔎 Submit Search form
    //------------------------------------------------------//
    searchSubmit: function(event) {
      const value = this.$store.getters["items/getSearch"](
        this.$route.params.type
      );
      this.$axios
        .get(
          `wp/v2/${
            this.$route.params.type
          }?orderby=title&order=asc&per_page=100&search=${value}&_embed`
        )
        .then(response => {
          // console.warn(response.data);
          // Push the data to the store
          this.$store.commit({
            type: "items/addSearchItems",
            itemType: this.$route.params.type,
            items: response.data.map(fromInputData)
          });
        });
      // 📲 Route to _type search page
      this.$router.push({
        path: `/setup/${this.$route.params.type}/search`
      });
    }
    // 🔎 Submit Search form
  },
  computed: {
    // ...mapGetters({
    //   getShareURL: 'setup/getShareURL',
    // }),
    searchField: {
      get() {
        return this.$store.getters["items/getSearch"](this.$route.params.type);
      },
      set(value) {
        // Set search term 🔎 for correct type
        this.$store.commit({
          type: "items/setSearch",
          itemType: this.$route.params.type,
          searchTerm: value
        });
      }
    }
  }
};
</script>

<style lang="scss" scoped>
@import "~/assets/css/common/_variables.scss";
button,
input[type="submit"],
.btn {
  margin-bottom: 0;
  background-color: $brand-one;
  &.btn--alt {
    background-color: $brand-two;
  }
}
input[type="text"] {
  line-height: 1.3em;
}
input {
  border-color: $brand-one;
}
.component-Navigation {
  position: fixed;
  z-index: 1000;
  bottom: 0;
  left: 0;
  width: 100%;
  background-color: $brand-one-lighten;
  padding: 10px;
  @include media-breakpoint-up(lg) {
    padding: $base-margin;
  }
}
.alloy-share {
  margin-left: auto;
  margin-right: 0;
}
.alloy-input-field {
  display: inline-block;
  width: 100%;
  input {
    margin-bottom: 0;
  }
}
#searchForm {
  position: relative;
  [type="submit"] {
    font-size: 0.8rem;
    line-height: 1.2em;
    position: absolute;
    top: 3px;
    right: 0;
    transform: scale(0.6);
    margin: 0;
    background-color: $brand-one-lighten;
    border-color: $brand-one-lighten;
  }
}
</style>
