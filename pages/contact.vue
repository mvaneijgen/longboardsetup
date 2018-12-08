<template>
  <div>
    <div class="alloy-page alloy-page--content alloy-page--about">
      <div class="alloy-conttent alloy-text-light">
        <section>
          <h1>Contact</h1>
          <p>
            This site is fully build and designed by me
            <a
              href="this.$store.state.me.url"
            >Mitchel van Eijgen</a>. Of course I got a lot of help and I want to thank these people:
          </p>
        </section>
        <section>
          <SpecialThanks/>
        </section>
        <section>
          <h2>Help me get a complete database of longboard products</h2>
          <p>All items from the site are scraped from various resources and is my no means complete. There are multiple older decks or diffrent variations that are not yet in the collection. If you are a longboard dealer (or enthusiastic) and are looking to add a lot of products at once, please contact me via one of the options below.</p>
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