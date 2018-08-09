<template>
  <footer>
    <div class="inner">
      <div class="alloy-col">

        <CallToAction/>

      </div>

      <div class="alloy-col">
        <h3>Road map</h3>
        <p>Projects are never done, as specially not personal side projects </p>
        <ul>
          <li v-for="(todo, index) in todos" :key="index">{{ todo.name }}</li>
        </ul>
        <h4>What to help?</h4>
        <p>Are you a Vue.js/Nuxt or Javascript developer? </p>
        <a href="#" class="btn btn--small">Shoot me a message</a>
      </div>

      <div class="alloy-col">
        <h3>About</h3>
        <div v-html="this.$store.state.default.about_text"></div>

        <h4>Mitchel van Eijgen</h4>
        <p>Graphic designer who loves technology.
          <a href="https://mvaneijgen.nl">mvaneijgen.nl</a>
        </p>
      </div>

      <div class="alloy-col">
        <h3>Special thanks!</h3>
        <ul>
          <li v-for="(person, index) in specialThanks" :key="index">{{ person.name }}
            <small>({{ person.realname }})</small>
          </li>
        </ul>
      </div>

    </div>
  </footer>
</template>

<script>
import CallToAction from '@/components/CallToAction.vue';

export default {
  // props: ['item'],
  name: 'Footer',
  components: {
    CallToAction,
  },
  data() {
    return {
      title: 'Footer',
      todos: this.$store.state.default.todos,
      specialThanks: this.$store.state.default.specialThanks,
    }
  }, // End data
}
</script>