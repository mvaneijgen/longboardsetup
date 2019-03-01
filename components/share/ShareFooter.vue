<template>
  <div class="component-ShareFooter">
    <div class="inner">
      <div class="alloy-share-intro">
        <h3>I've build a setup what now?</h3>
        <p>First: you can be really proud of yourself! 👏</p>
        <p>When it is ready, you can share your setup. This site is build for people who like some feedback on their setup, to improve it or just to show the world how awesome it is!</p>
        <p>You can either just share the text list of your setup or you can share the direct link. With this link others can view and edit your setup and share their suggestions with you.</p>
        <h4>Here are some awesome communities to start with</h4>
        <ul>
          <li v-for="(community, index) in communities" :key="index">
            <a :href="community.url" target="_blank">
              <span class="alloy-title">{{community.title}}</span>
              <span>{{community.platform}}</span>
              <span>{{community.members}}</span>
            </a>
          </li>
        </ul>
      </div>
      <div class="alloy-cards" id="share-container">
        <Share/>
      </div>
    </div>
    <div class="banana" @click="foundBanana" v-if="banana">
      <svg
        viewBox="0 0 27 23"
        xmlns="http://www.w3.org/2000/svg"
        fill-rule="evenodd"
        clip-rule="evenodd"
        stroke-linejoin="round"
        stroke-miterlimit="1.414"
      >
        <path fill="none" d="M0 0h27v23H0z"></path>
        <clipPath id="a">
          <path d="M0 0h27v23H0z"></path>
        </clipPath>
        <g clip-path="url(#a)">
          <path
            d="M22.663 1.384l-.399 1.299a.5.5 0 0 0-.001.289s.351 1.2.593 1.837c.237.626.537 1.183.758 1.73.261.643.553 1.212.662 1.762.113.571.137 1.168.062 1.739a10.922 10.922 0 0 1-1.039 3.387c-.491.988-1.194 1.897-1.971 2.733-1.064 1.145-2.298 2.153-3.613 3.028-1.075.715-2.194 1.363-3.377 1.748-1.823.592-3.739 1.05-5.569.868-1.307-.131-2.612-.765-3.883-1.43-1.027-.536-2.642-1.826-3.055-2.152l.421-.597c.345.043 2.263.295 3.548.143 2.283-.269 4.524-.954 6.603-1.879 1.957-.871 3.896-1.956 5.489-3.451a14.306 14.306 0 0 0 3.192-4.431 8.562 8.562 0 0 0 .789-3.261c.013-.378-.068-.793-.143-1.15-.063-.294-.106-.452-.127-.53l.298-1.925.762.243z"
            fill="#f5d85f"
          ></path>
          <path
            d="M23.556.636a.521.521 0 0 0-.119-.057L21.648.013a.501.501 0 0 0-.646.398l-.403 2.596a.492.492 0 0 0 .013.209s.071.261.14.587c.069.327.128.733.123.909a7.611 7.611 0 0 1-.699 2.879 13.347 13.347 0 0 1-2.966 4.117c-1.474 1.382-3.316 2.421-5.214 3.266-2.002.891-4.15 1.545-6.313 1.8-1.082.128-3.623-.157-3.623-.157a.501.501 0 0 0-.47.209l-.865 1.23a.504.504 0 0 0 .096.676s2.214 1.804 3.602 2.529c1.284.671 2.692 1.382 4.246 1.537 2.06.205 4.107-.304 5.979-.912 1.319-.429 2.512-1.129 3.621-1.866 1.37-.911 2.664-1.966 3.791-3.179.817-.879 1.585-1.858 2.136-2.968a11.888 11.888 0 0 0 1.133-3.702c.09-.687.063-1.39-.07-2.065l-.002-.001c-.147-.741-.481-1.362-.716-1.94-.248-.614-.544-1.166-.751-1.711a30.45 30.45 0 0 1-.523-1.629l.498-1.622a.5.5 0 0 0-.209-.567zm-.893.748l-.399 1.299a.5.5 0 0 0-.001.289s.351 1.2.593 1.837c.237.626.537 1.183.758 1.73.261.643.553 1.212.662 1.762.113.571.137 1.168.062 1.739a10.922 10.922 0 0 1-1.039 3.387c-.491.988-1.194 1.897-1.971 2.733-1.064 1.145-2.298 2.153-3.613 3.028-1.075.715-2.194 1.363-3.377 1.748-1.823.592-3.739 1.05-5.569.868-1.307-.131-2.612-.765-3.883-1.43-1.027-.536-2.642-1.826-3.055-2.152l.421-.597c.345.043 2.263.295 3.548.143 2.283-.269 4.524-.954 6.603-1.879 1.957-.871 3.896-1.956 5.489-3.451a14.306 14.306 0 0 0 3.192-4.431 8.562 8.562 0 0 0 .789-3.261c.013-.378-.068-.793-.143-1.15-.063-.294-.106-.452-.127-.53l.298-1.925.762.243z"
          ></path>
          <path
            d="M15.051 18.066a.5.5 0 0 0-.506.062l-.363.271a4.756 4.756 0 0 1-2.897.952l-.453-.003a.5.5 0 1 0-.009 1l.453.003a5.76 5.76 0 0 0 3.506-1.152l.363-.271a.501.501 0 0 0-.07-.85l-.024-.012z"
          ></path>
        </g>
      </svg>
    </div>
  </div>
</template>

<script>
import Share from "@/components/share/Share.vue";

export default {
  name: "ShareFooter",
  components: {
    Share
  },
  data() {
    return {
      communities: this.$store.state.default.communities,
      banana: true
    };
  }, // End data
  methods: {
    foundBanana: function() {
      this.banana = false;

      const notification = {
        title: "You've found 1/2 bananas!",
        content: "Their you go Sherlock",
        image: "",
        type: "",
        timer: 6000
      };
      this.$store.commit("notifications/addNotification", notification);
    }
  }
};
</script>

<style lang="scss" scoped>
@import "~/assets/css/common/_variables.scss";
.component-ShareFooter {
  position: relative;
  background-color: $brand-light;
  > .inner {
    max-width: 1000px;
    margin-left: auto;
    margin-right: auto;
    display: flex;
    padding-top: $base-margin * 2;
    padding-bottom: $base-margin * 6;
    flex-direction: column;
    @include media-breakpoint-up(lg) {
      flex-direction: row;
      // width: 130%;
      // transform: translateX(-15%);
      > * {
        flex-grow: 1;
        width: 50%;
      }
    }
  }
}
.alloy-share-intro {
  padding: $base-margin;

  // font-size: 16px;
  // color: $brand-light;
}

// .alloy-cards {
//   padding: $base-margin;
//   grid-auto-rows: min-content;
// }
#share-container {
  transform: translateY(-80px);
  // width: 500px;
  max-width: 100%;
  background-color: $brand-two;
  color: $brand-light;
  padding: $base-margin;
  // @include media-breakpoint-up(md) {
  //   padding: $base-margin * 2;
  // }
  .btn {
    background-color: $brand-one-lighten;
    border-color: $brand-one-lighten;
  }
}
ul {
  list-style: none;
  padding: 0;
  margin: 0;
  a {
    background-color: $brand-one-lighten;
    color: $brand-light;
    display: block;
    padding: 5px 10px;
    border-radius: 5px;
    margin-bottom: 5px;
    text-decoration: none;
    transition: transform;
    transition-duration: 300ms;
    transition-timing-function: ease;

    &:hover {
      transform: scale(1.05);
    }
    span {
      margin-right: 5px;
      font-size: 0.8rem;
      line-height: 1em;
    }
    .alloy-title {
      font-weight: 700;
      display: block;
      font-size: 1rem;
      line-height: 1.4em;
    }
  }
}
.banana {
  position: absolute;
  bottom: 60px;
  right: 15px;
  width: 40px;
  cursor: pointer;
}
</style>