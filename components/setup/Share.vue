<template>
  <div id="modal-Share">
    <div class="alloy-cards" id="share-container">
      <div class="copied">
        <span>Copied!</span>
        <span class="emoji">🎉</span>
      </div>
      <div class="inner">
        <h3>{{ title }}</h3>
        <ul>
          <li v-for="item in getSetupCurrent" :key="item.id">
            <span>
              {{item.type}}
              <span v-if="item.location && item.location !== ''">| {{ item.location }}</span>
            </span>
            {{item.title}}
          </li>
        </ul>
        <input type="text" :value="fullURL">
        
        <button class="btn">Copy link!</button>
        <div class="share">share: r,t,f</div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "Share",
  data() {
    return {
      title: "Share your setup"
    };
  }, // End data
  computed: {
    ...mapGetters({
      getSetupCurrent: "setup/getSetupCurrent"
    }),
    fullURL: function() {
      if (process.browser) {
        return window.location.href;
      }
    }
  }
};
</script>

<style lang="scss" scoped>
@import "~/assets/css/common/_variables.scss";
#modal-Share {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: rgba($brand-dark, $base-alpha/2);
  z-index: 9000;
  display: flex;
  justify-content: center;
  align-items: center;
  #share-container {
    width: 400px;
    max-width: 100%;
    > .inner {
      padding: $base-margin;

      @include media-breakpoint-up(md) {
        padding: $base-margin * 2;
      }
      ul {
        list-style: none;
        padding: 0;
        margin: 0;
        margin-bottom: $base-margin * 2;
        li {
          margin-bottom: 10px;
          > span {
            display: block;
            text-transform: uppercase;
            font-weight: 700;
            font-size: 0.8rem;
            line-height: 1.2em;
          }
        }
      }
    }
  }
}
</style>