<template>
  <div id="modal-Share">
    <div class="alloy-cards" id="share-container">
      <button class="btn close" @click="closeShareModal">close</button>
      <div v-if="copiedURL" class="copied centered">
        <div v-if="copiedURL" class="circle-scale"></div>

        <div v-if="copiedURLfailed" class="failed">
          <span class="emoji">🙈</span>
          <h3>Something went wrong!</h3>
          <p>Please copy the link manually</p>
          <input type="text" :value="fullURL" ref="fullURLstring">
        </div>
        <div v-else class="pass">
          <span class="emoji">🎉</span>
          <h3>Copied link!</h3>
          <p>Do with it what ever you want!</p>
        </div>
      </div>
      <div class="inner">
        <h3 class="centered sub-title">{{ title }}</h3>
        <h2 class="centered setup-name">{{ getName }}</h2>
        <ul>
          <li v-for="item in getSetupCurrent" :key="item.id">
            <span>
              {{item.type}}
              <span v-if="item.location && item.location !== ''">| {{ item.location }}</span>
            </span>
            {{item.title}}
          </li>
        </ul>
        <input type="text" :value="fullURL" ref="fullURLstring">
        <div class="centered">
          <button class="btn btn--alt btn--large" @click="copyURL">Copy link!</button>
        </div>
        <Social/>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import Social from "@/components/default/Social.vue";

export default {
  name: "Share",
  components: {
    Social
  },
  data() {
    return {
      title: "Share your setup",
      copiedURL: false,
      copiedURLfailed: false
    };
  }, // End data
  computed: {
    ...mapGetters({
      getSetupCurrent: "setup/getSetupCurrent",
      getName: "name/getName"
    }),
    fullURL: function() {
      if (process.browser) {
        return window.location.href;
      }
    }
  },
  methods: {
    closeShareModal: function() {
      this.$store.commit("setup/setShowShareModel", false);
    },
    copyURL: function() {
      this.copiedURL = true;
      function fallbackCopyTextToClipboard(text) {
        var textArea = document.createElement("textarea");
        textArea.value = text;
        document.body.appendChild(textArea);
        textArea.focus();
        textArea.select();

        try {
          var successful = document.execCommand("copy");
          var msg = successful ? "successful" : "unsuccessful";
          console.log("Fallback: Copying text command was " + msg);
        } catch (err) {
          console.error("Fallback: Oops, unable to copy", err);
        }

        document.body.removeChild(textArea);
      }
      function copyTextToClipboard(text) {
        if (!navigator.clipboard) {
          fallbackCopyTextToClipboard(text);
          return;
        }
        navigator.clipboard.writeText(text).then(
          function() {
            console.log("Async: Copying to clipboard was successful!");
          },
          function(err) {
            this.copiedURLfailed = true;
            console.error("Async: Could not copy text: ", err);
          }
        );
      }
      copyTextToClipboard(this.fullURL);
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
  .sub-title {
    margin-bottom: -$base-margin;
  }
  .setup-name {
    font-size: 42px;
    line-height: 1.4em;
    text-shadow: makelongshadow($brand-one-lighten, $brand-two-lighten);
  }
  #share-container {
    width: 500px;
    max-width: 100%;
    background-color: $brand-one-lighten;
    color: $brand-light;
    input {
      border-color: $brand-one;
    }
    .close {
      position: absolute;
      top: 0;
      right: 0;
      z-index: 9000;
      background-color: $brand-light;
      border-color: $brand-light;
      color: $brand-one-lighten;
      border-radius: 0;
      text-transform: uppercase;
      padding: 3px 5px;
      font-size: 0.8rem;
      line-height: 1em;
      font-weight: 700;
      opacity: 0.8;
      transition: opacity, border-color, color, background-color;
      transition-duration: 300ms;
      transition-timing-function: ease;

      &:hover {
        opacity: 1;
        background-color: $notification-warning;
        border-color: $notification-warning;
        color: $brand-light;
      }
    }
    > .inner {
      padding: $base-margin;

      @include media-breakpoint-up(md) {
        padding: $base-margin * 2;
      }
      ul {
        list-style: none;
        padding: 0;
        margin: $base-margin * 3 0;
        li {
          margin-bottom: $base-margin;
          font-size: 24px;
          line-height: 1.4em;
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
  .copied {
    position: absolute;
    z-index: 300;
    left: 0;
    top: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 100%;
    flex-direction: column;
    color: $brand-one-lighten;
    h3 {
      font-size: 32px;
    }
    .emoji {
      transform: translateX($base-margin);
    }
    .circle-scale {
      z-index: -1;
      position: absolute;
      // top: 50%;
      // left: 50%;
      transform: translate(-50%, -50%);
      transform-origin: center;
      width: 300px;
      height: 300px;
      border-radius: 50%;
      background-color: $brand-light;

      animation-name: pop;
      animation-duration: 1s;
      animation-delay: 0s;
      animation-timing-function: cubic-bezier(0.785, 0.135, 0.15, 0.86);
      animation-direction: normal; // normal, reverse, alternate, alternate-reverse
      animation-iteration-count: 1; // infinite or number
      animation-fill-mode: forwards; // none, forwards, backwards, both
      animation-play-state: running; // running, paused
    }
  }
}

@keyframes pop {
  from {
    transform: scale(0) translate(-50%, -50%);
    transform: scale(0);
  }
  to {
    transform: scale(3) translate(-50%, -50%);
    transform: scale(3);
  }
}
</style>