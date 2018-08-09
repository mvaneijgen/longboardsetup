<template>
  <div class="component-CallToAction">
    <div v-for="(cta, index) in callToActions" :key="index" class="alloy-cards cta" :data-cta-type="cta.type">
      <div class="inner">
        <p>
          <strong>{{ cta.title }}</strong>
          <span>{{ cta.description }}</span>
        </p>
        <a :href="cta.url" class="btn btn--small">{{ cta.cta }}</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  // props: ['item'],
  name: 'CallToAction',
  data() {
    return {
      title: 'CallToAction',
      callToActions: this.$store.state.default.callToActions
    }
  }, // End data
}
</script>