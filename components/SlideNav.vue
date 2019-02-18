<template>
  <div class="component-CallToAction" :data-show-nav="show">
    <div @click="navToggle" id="alloy-nav-toggle">
      <div class="inner">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
    <div class="alloy-slide-nav" @click="closeToggle">
      <div class="inner">
        <nav>
          <nuxt-link to="/">Home</nuxt-link>
          <nuxt-link to="/setup">Your Setup</nuxt-link>
          <nuxt-link to="/setup/decks">All Decks</nuxt-link>
          <nuxt-link to="/setup/trucks">All Trucks</nuxt-link>
          <nuxt-link to="/setup/wheels">All Wheels</nuxt-link>
          <nuxt-link to="/submit">Submit products</nuxt-link>
          <nuxt-link to="/about">About</nuxt-link>
          <nuxt-link to="/contact">Contact</nuxt-link>
        </nav>
        <CallToAction/>
      </div>
    </div>
  </div>
</template>

<script>
import CallToAction from "@/components/default/CallToAction.vue";

export default {
  // props: ['item'],
  name: "SlideNav",
  components: {
    CallToAction
  },
  data() {
    return {
      title: "SlideNav",
      show: false
    };
  }, // End data
  methods: {
    navToggle() {
      this.show = !this.show;
    },
    closeToggle() {
      this.show = !this.show;
    }
  }
};
</script>