<template>
  <div>
    <div class="alloy-page alloy-page--content alloy-page--about">
      <div class="alloy-conttent alloy-text-light">
        <section>
          <h1>Contact</h1>

          <p>
            This site is entirely build and designed by me (
            <a
              :href="this.$store.state.default.me.url"
            >Mitchel van Eijgen</a> ). The code can be found in the
            <a
              href="https://github.com/mvaneijgen/longboardsetup"
            >Github repository</a>, it's also being hosted on Github, with the help of
            <a
              href="//pages.github.com"
            >Github Pages</a>.
          </p>
          <p v-html="this.$store.state.default.description"></p>
          <p>
            You can send me a message via
            <a
              :href="`mailto:${this.$store.state.default.me.email}`"
              v-html="this.$store.state.default.me.email"
            ></a> or contact me via any social network mentioned below here.
          </p>
          <ul>
            <li>
              <a target="_blank" :href="`${this.$store.state.default.me.twitter_username}`">Twitter</a>
            </li>
            <li>
              <a target="_blank" :href="`${this.$store.state.default.me.reddit_username}`">Reddit</a>
            </li>
            <li>
              <a target="_blank" :href="`${this.$store.state.default.me.github_username}`">Github</a>
            </li>
            <li>
              <a
                target="_blank"
                :href="`${this.$store.state.default.me.linkedin_username}`"
              >Linkedin</a>
            </li>
            <li>
              <a target="_blank" :href="`${this.$store.state.default.me.codepen_username}`">Codepen</a>
            </li>
          </ul>
        </section>
        <section>
          <ToolsUsed/>
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