<template>
  <div>
    <div v-if="copiedURL" class="copied centered">
      <div v-if="copiedURL" class="circle-scale"></div>

      <div v-if="copiedURLfailed" class="failed">
        <span class="emoji">🙈</span>
        <h3>Something went wrong!</h3>
        <p>Please copy the link manually</p>
        <form action id="share-url">
          <input type="text" :value="fullURL" ref="fullURLstring" readonly>
        </form>
      </div>
      <div class="pass">
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
            <span v-if="item.custom">{{item.custom.replace(/[0-9]/g, "")}}</span>
            <span v-else>{{item.type}}</span>
            
            <span
              class="location"
              v-if="item.location && item.location !== '' && item.location !== 'undefined'"
            >| {{ item.location }}</span>
          </span>
          <span v-html="item.title"></span>
        </li>
      </ul>
      <input type="text" :value="fullURL" ref="fullURLstring">
      <div class="centered">
        <button class="btn btn--large btn--alt" @click="copyURL">Copy link!</button>
      </div>
      <Social/>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import Social from "@/components/default/Social.vue";
import IconBase from "@/components/IconBase.vue";

export default {
  name: "Share",
  components: {
    Social,
    IconBase
  },
  data() {
    return {
      title: "Share your setup",
      copiedURL: false,
      copiedURLfailed: false,
      fullURL: ""
    };
  }, // End data
  computed: {
    ...mapGetters({
      getSetupCurrent: "setup/getSetupCurrent",
      getName: "name/getName"
    })
    // fullURL: function() {
    //   if (process.browser) {
    //     return window.location.href;
    //   }
    // }
  },
  methods: {
    copyURL: function() {
      this.copiedURL = true;

      window.Clipboard = (function(window, document, navigator) {
        var textArea, copy;

        function isOS() {
          return navigator.userAgent.match(/ipad|iphone/i);
        }

        function createTextArea(text) {
          textArea = document.createElement("textArea");
          textArea.value = text;
          document.body.appendChild(textArea);
        }

        function selectText() {
          var range, selection;

          if (isOS()) {
            range = document.createRange();
            range.selectNodeContents(textArea);
            selection = window.getSelection();
            selection.removeAllRanges();
            selection.addRange(range);
            textArea.setSelectionRange(0, 999999);
          } else {
            textArea.select();
          }
        }

        function copyToClipboard() {
          document.execCommand("copy");
          document.body.removeChild(textArea);
        }

        copy = function(text) {
          createTextArea(text);
          selectText();
          copyToClipboard();
        };

        return {
          copy: copy
        };
      })(window, document, navigator);

      Clipboard.copy(this.fullURL);
    }
  },
  watch: {
    $route() {
      if (process.browser) {
        this.fullURL = window.location.href;
      }
    }
  }
};
</script>

<style lang="scss" scoped>
@import "~/assets/css/common/_variables.scss";

.sub-title {
  margin-bottom: -$base-margin;
}
.setup-name {
  font-size: 42px;
  line-height: 1.4em;
  text-shadow: makelongshadow($brand-one-lighten, $brand-two-lighten);
}

input {
  border-color: $brand-one;
}
.inner {
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
        font-weight: 700;
        font-size: 0.8rem;
        line-height: 1.2em;
        .location {
          margin-left: 5px;
        }
        &:first-of-type {
          text-transform: uppercase;
        }
        &:last-of-type {
          font-size: 1.2rem;
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