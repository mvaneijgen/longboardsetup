<template>
  <footer>
    <div class="inner">
      <div class="alloy-col">

        <div v-for="(cta, index) in this.$store.state.footer.callToActions" :key="index" class="alloy-cards cta" :data-cta-type="cta.type">
          <div class="inner">
            <p>
              <strong>{{ cta.title }}</strong>
              <span>{{ cta.description }}</span>
            </p>
            <a :href="cta.url" class="btn btn--small">{{ cta.cta }}</a>
          </div>
        </div>

      </div>

      <div class="alloy-col  alloy-text-light">
        <h3>Road map</h3>
        <p>Projects are never done, as specially not personal side projects </p>
        <ul>
          <li v-for="(todo, index) in this.$store.state.footer.todos" :key="index">{{ todo.name }}</li>
        </ul>
        <h4>What to help?</h4>
        <p>Are you a Vue.js/Nuxt or Javascript developer? </p>
        <a href="#" class="btn btn--small">Shoot me a message</a>
      </div>

      <div class="alloy-col alloy-text-light">
        <h3>About</h3>
        <p>As a long distance push boarder myself I’ve found it difficult to find the right setup for me, this resulted in doing some miss buys. Next to that is hard to get effective feedback via online platforms, but I believe the community has the knowledge, it just needs to be easier to share setups.</p>
        <p>This tool makes is easy to share your current, dream or complicated setup. It can also be used to request feedback on a specific part, just leave that part empty and share the URL to /r/longboarding, Discord or any other platform or your choosing.</p>

        <h4>Mitchel van Eijgen</h4>
        <p>Graphic designer who loves technology.
          <a href="https://mvaneijgen.nl">mvaneijgen.nl</a>
        </p>
      </div>

      <div class="alloy-col alloy-text-light">
        <h3>Special thanks!</h3>
        <ul>
          <li v-for="(person, index) in this.$store.state.footer.specialThanks" :key="index">{{ person.name }}
            <small>({{ person.realname }})</small>
          </li>
        </ul>
      </div>

    </div>
  </footer>
</template>

<script>
export default {
  // props: ['item'],
  name: 'Footer',
  data() {
    return {
      title: 'Footer'
    }
  }, // End data
}
</script>