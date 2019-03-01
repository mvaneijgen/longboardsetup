<template>
  <div class="component-ShareFooter">
    <div class="inner">
      <div class="alloy-share-intro">
        <h3>I've build a setup what now?</h3>
        <p>First you can be really proud of yourself! 👏</p>
        <p>When you are ready, you can share your setup from here. This site is build for people who like some feedback on their setup, to improve it or just to show the world how awesome it is!</p>
        <p>You can either just share the text list of your setup or you can share the direct link. With this link other can view and edit your setup and share their suggestions right back at you.</p>
        <h4>Here are some awesome communities to start with</h4>
        <ul>
          <li v-for="(community, index) in communities" :key="index">
            <a :href="community.url">
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
      communities: this.$store.state.default.communities
    };
  } // End data
};
</script>

<style lang="scss" scoped>
@import "~/assets/css/common/_variables.scss";
.component-ShareFooter {
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
</style>