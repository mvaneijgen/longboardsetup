<template>
  <div>
    <div class="alloy-page alloy-page--content alloy-page--about">
      <div class="alloy-conttent alloy-text-light">
        <h1>Contact</h1>
        <p>
          This site is fully build and designed by me
          <a
            href="this.$store.state.me.url"
          >Mitchel van Eijgen</a>. Of course I got a lot of help and I want to thank these people:
        </p>
        <SpecialThanks/>
        <CallToAction/>
        <ToolsUsed/>
      </div>
    </div>
    <Footer/>
  </div>
</template>

<script>
import ToolsUsed from "@/components/default/ToolsUsed.vue";
import SpecialThanks from "@/components/default/SpecialThanks.vue";
import CallToAction from "@/components/default/CallToAction.vue";
import Footer from "@/components/Footer.vue";

export default {
  transition: "page-alt",
  components: {
    ToolsUsed,
    SpecialThanks,
    CallToAction,
    Footer
  }
};
</script>