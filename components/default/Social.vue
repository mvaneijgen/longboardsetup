<template>
  <div class="component-Social">
    <ul class="share-buttons">
      <li>
        <h3>Share</h3>
      </li>
      <li>
        <a
          :href="`http://www.reddit.com/submit?url=${fullURL}&title=${shareText}`"
          target="_blank"
          title="Submit to Reddit"
        >
          <icon-base width="20" height="20" icon-name="Reddit">
            <icon-reddit/>
          </icon-base>
        </a>
      </li>
      <li>
        <a
          href="`https://www.facebook.com/sharer/sharer.php?u=${fullURL}&t=${shareText}`"
          target="_blank"
          title="Share on Facebook"
        >
          <icon-base width="20" height="20" icon-name="Facebook">
            <icon-facebook/>
          </icon-base>
        </a>
      </li>
      <li>
        <a
          :href="`https://twitter.com/intent/tweet?source=${fullURL}&text=${shareText}`"
          target="_blank"
          title="Tweet"
        >
          <icon-base width="20" height="20" icon-name="Twitter">
            <icon-twitter/>
          </icon-base>
        </a>
      </li>

      <!-- <li class="whatsapp"  v-if="isMobile">
        <a
          href="`whatsapp://send?text=${fullURL}%20${shareText}`"
          target="_blank"
          title="Share via WhatsApp"
        >
          <icon-base width="20" height="20" icon-name="WhatsApp">
            <icon-whatsapp/>
          </icon-base>
        </a>
      </li>-->
    </ul>
  </div>
</template>

<script>
// Icon logic
// import { isMobile } from "@/assets/utils/filters.js";

import IconBase from "@/components/IconBase.vue";
import IconFacebook from "@/components/icons/IconFacebook.vue";
import IconReddit from "@/components/icons/IconReddit.vue";
import IconTwitter from "@/components/icons/IconTwitter.vue";
import IconWhatsapp from "@/components/icons/IconWhatsapp.vue";

export default {
  // props: ['item'],
  name: "Social",
  components: {
    // Icon logic
    IconBase,
    IconFacebook,
    IconTwitter,
    IconWhatsapp,
    IconReddit
  },
  data() {
    return {
      title: "Social",
      // shareText: this.$store.getters("name/getName")
      shareText: "test"
    };
  }, // End data
  computed: {
    fullURL: function() {
      if (process.browser) {
        return window.location.href;
      }
    }
  }
  // mounted:
};
</script>

<style lang="scss" scoped>
@import "~/assets/css/common/_variables.scss";
.component-Social {
  margin-top: $base-margin * 2;
}
ul {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  justify-content: space-around;
  align-items: center;
  h3 {
    margin-bottom: 0;
  }
  a {
    display: inline-block;
    width: $base-margin * 3;
    height: $base-margin * 3;
    padding: 10px;
    text-align: center;
    background-color: $brand-one;
    border-radius: 50%;
    &:hover {
      background-color: $brand-two;
    }
  }
  svg {
    width: 100%;
    height: auto;
    * {
      fill: $brand-light;
    }
  }
  // .whatsapp {
  //   display: none;
  // }
}
</style>