<template>
  <div class="component-ShareFooter">
    <div class="alloy-share-intro">
      <h3>Sharing is caring.</h3>
      <p>When you are ready, you can share your setup from here. This site is build for people who like some feedback on their setup, to improve it or just to show the world how awesome it is!</p>
      <p>You can either just share the text list of your setup or you can share the direct link. With this link other can view and edit your setup and share their suggestions right back at you.</p>
      <h4>Here are some nice communities to start with:</h4>
      <ul>
        <li>
          <a href="https://reddit.com/r/longboarding/">/r/longboarding</a>
        </li>
        <li>
          <a
            href="https://www.facebook.com/groups/429473203919081/members/"
          >Distance Skateboarding Worldwide</a>
        </li>
      </ul>
    </div>
    <div class="alloy-cards" id="share-container">
      <Share/>
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
      title: "ShareFooter"
    };
  } // End data
};
</script>

<style lang="scss" scoped>
@import "~/assets/css/common/_variables.scss";
.component-ShareFooter {
  padding-top: $base-margin * 2;
  display: flex;
  > * {
    flex-grow: 1;
    width: 50%;
  }
}
.alloy-share-intro {
  padding: $base-margin;

  font-size: 16px;
  color: $brand-light;
}

// .alloy-cards {
//   padding: $base-margin;
//   grid-auto-rows: min-content;
// }
#share-container {
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
  }
}
ul {
  padding-left: $base-margin;
  a {
    color: $brand-light;
  }
}
</style>