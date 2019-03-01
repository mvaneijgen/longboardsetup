<template>
  <div>
    <div class="alloy-page alloy-page--content alloy-page--about">
      <div class="alloy-conttent alloy-text-light">
        <section>
          <h1>Contact</h1>

          <p>
            This site is entirely build and designed by me
            <a
              href="this.$store.state.me.url"
            >Mitchel van Eijgen</a>. The code can be found in the
            <a
              href="https://github.com/mvaneijgen/longboardsetup"
            >Github repository</a>, it's also being hosted on Github, with the help of
            <a
              href="//pages.github.com"
            >Github Pages</a>.
          </p>
        </section>
        <section>
          <SpecialThanks/>
        </section>
        <section>
          <h2>Help others by submitting products and complete the database of longboard products</h2>
          <p>All items from the site are scraped from different resources and the list is by no means complete. There are multiple older decks or different variations that are not yet present in the current collection. If you are a longboard dealer (or enthusiastic) and are looking to add multiple products at once, please contact me through one of the options below.</p>
          <br>
          <CallToAction/>
        </section>
        <section>
          <ToolsUsed/>
        </section>
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