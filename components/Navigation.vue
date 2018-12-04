<template>
  <div class="component-Navigation">
    <nav>
      <div class="alloy-btn-group">

        <template v-if="'setup' != this.$route.name">
          <nuxt-link to="/setup" class="btn btn--icon btn--icon-left">
            <icon-base width="20" height="20" icon-name="arrow-left">
              <icon-arrow-left />
            </icon-base>
            <span>Back</span>
          </nuxt-link>
        </template>

        <button v-if="'setup' == this.$route.name" @click="setupClear" class="btn btn--icon">
          <span>Clear</span>
          <icon-base width="20" height="20" icon-name="trash">
            <icon-trash />
          </icon-base>
        </button>

        <button @click="toggleAllInfo" class="btn btn--icon">
          <span>Info</span>
          <icon-base width="20" height="20" icon-name="info">
            <icon-info />
          </icon-base>
        </button>

        <div v-if="'setup-type' == this.$route.name" class="alloy-input-field">
          <label for="searchTerm">Search</label>
          <input type="text" id="searchTerm" v-model="searchField" :placeholder="`Search ${this.$route.params.type}...`">
        </div>

        <template v-if="'setup' == this.$route.name">
          <button class="alloy-share btn btn--alt btn--icon">
            <span>Share</span>
            <icon-base width="20" height="20" icon-name="share">
              <icon-share />
            </icon-base>
          </button>
        </template>

         <div class="alloy-input-field">
          <label for="share">URL</label>
          <input type="text" id="share" :value="getShareURL">
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

// Icon logic
import IconBase from '@/components//IconBase.vue'
import IconInfo from '@/components/icons/IconInfo.vue'
import IconTrash from '@/components/icons/IconTrash.vue'
import IconShare from '@/components/icons/IconShare.vue'
import IconArrowLeft from '@/components/icons/IconArrowLeft.vue'

export default {
  // props: ['item'],
  name: 'Navigation',
  components: {
    // Icon logic
    IconBase,
    IconInfo,
    IconTrash,
    IconShare,
    IconArrowLeft,
  },
  data() {
    return {
      title: 'Navigation',
    }
  }, // End data
  methods: {
    toggleAllInfo: function (event) {
      document.body.classList.toggle('showAllInfo');
      // event.target.parentNode.classList.toggle('showAllInfo');
    },
    setupClear: function() {
      if (confirm('Are you sure? This will remove all your hard work.')) {
        this.$store.commit('setup/setupClear');
      }
    }
  },
  computed: {
    ...mapGetters({
      getShareURL: 'setup/getShareURL',
    }),
    searchField: {
      get(){ 
        return this.$store.getters['items/getSearch'](this.$route.params.type);
      },
      set( value ){ 
        this.$store.commit({
          type: 'items/setSearch',
          itemType: this.$route.params.type,
          searchTerm: value,
        });
      }
    }
  }
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
  padding: 10px;
  @include media-breakpoint-up(lg) {
    padding: $base-margin;
  }
}
.alloy-share {
  // float: right;
  align-self: flex-end;
  margin-right: 0;
}
.alloy-input-field {
  display: inline-block;
  input {
    margin-bottom: 0;
  }
}
// @include media-breakpoint-down(md) {
//   input,
//   .btn {
//     font-size: 0.8rem;
//     line-height: 1em;
//     padding: 5px 10px;
//   }
//   label {
//     font-size: 0.4rem;
//     padding: 3px 5px;
//     top: -5px;
//   }
// }
</style>
