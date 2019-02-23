<template>
  <footer>
    <div class="inner">
      <div class="alloy-col">
        <CallToAction/>
      </div>

      <div class="alloy-col">
        <h3>Road map</h3>
        <p>Projects are never done! Therefore you’ll get to peek behind the scenes. This is my todo list:</p>
        <ul>
          <li v-for="(todo, index) in todos" :key="index">{{ todo.name }}</li>
        </ul>
        <h4>Want to help?</h4>
        <p>Are you a Vue.js/Nuxt or Javascript developer?</p>
        <nuxt-link to="/contact" class="btn btn--small">Shoot me a message</nuxt-link>

        <h4>This site is hosted on Github Pages</h4>
        <p>If you're looking for the source code or if you’re just interested to see how it's build you can take a look at the repository.</p>
        <a href="https://github.com/mvaneijgen/longboardsetup" class="btn btn--small">Github repo</a>
      </div>

      <div class="alloy-col">
        <h3>About</h3>
        <div v-html="this.$store.state.default.about_text"></div>

        <h4>Mitchel van Eijgen</h4>
        <p>
          Graphic designer who loves technology.
          <a href="https://mvaneijgen.nl">mvaneijgen.nl</a>
        </p>
      </div>

      <div class="alloy-col">
        <SpecialThanks/>
      </div>
    </div>
    <div class="banana" @click="foundBanana" v-if="banana">
      <svg
        viewBox="0 0 27 23"
        xmlns="http://www.w3.org/2000/svg"
        fill-rule="evenodd"
        clip-rule="evenodd"
        stroke-linejoin="round"
        stroke-miterlimit="1.414"
      >
        <path fill="none" d="M0 0h27v23H0z"></path>
        <clipPath id="a">
          <path d="M0 0h27v23H0z"></path>
        </clipPath>
        <g clip-path="url(#a)">
          <path
            d="M22.663 1.384l-.399 1.299a.5.5 0 0 0-.001.289s.351 1.2.593 1.837c.237.626.537 1.183.758 1.73.261.643.553 1.212.662 1.762.113.571.137 1.168.062 1.739a10.922 10.922 0 0 1-1.039 3.387c-.491.988-1.194 1.897-1.971 2.733-1.064 1.145-2.298 2.153-3.613 3.028-1.075.715-2.194 1.363-3.377 1.748-1.823.592-3.739 1.05-5.569.868-1.307-.131-2.612-.765-3.883-1.43-1.027-.536-2.642-1.826-3.055-2.152l.421-.597c.345.043 2.263.295 3.548.143 2.283-.269 4.524-.954 6.603-1.879 1.957-.871 3.896-1.956 5.489-3.451a14.306 14.306 0 0 0 3.192-4.431 8.562 8.562 0 0 0 .789-3.261c.013-.378-.068-.793-.143-1.15-.063-.294-.106-.452-.127-.53l.298-1.925.762.243z"
            fill="#f5d85f"
          ></path>
          <path
            d="M23.556.636a.521.521 0 0 0-.119-.057L21.648.013a.501.501 0 0 0-.646.398l-.403 2.596a.492.492 0 0 0 .013.209s.071.261.14.587c.069.327.128.733.123.909a7.611 7.611 0 0 1-.699 2.879 13.347 13.347 0 0 1-2.966 4.117c-1.474 1.382-3.316 2.421-5.214 3.266-2.002.891-4.15 1.545-6.313 1.8-1.082.128-3.623-.157-3.623-.157a.501.501 0 0 0-.47.209l-.865 1.23a.504.504 0 0 0 .096.676s2.214 1.804 3.602 2.529c1.284.671 2.692 1.382 4.246 1.537 2.06.205 4.107-.304 5.979-.912 1.319-.429 2.512-1.129 3.621-1.866 1.37-.911 2.664-1.966 3.791-3.179.817-.879 1.585-1.858 2.136-2.968a11.888 11.888 0 0 0 1.133-3.702c.09-.687.063-1.39-.07-2.065l-.002-.001c-.147-.741-.481-1.362-.716-1.94-.248-.614-.544-1.166-.751-1.711a30.45 30.45 0 0 1-.523-1.629l.498-1.622a.5.5 0 0 0-.209-.567zm-.893.748l-.399 1.299a.5.5 0 0 0-.001.289s.351 1.2.593 1.837c.237.626.537 1.183.758 1.73.261.643.553 1.212.662 1.762.113.571.137 1.168.062 1.739a10.922 10.922 0 0 1-1.039 3.387c-.491.988-1.194 1.897-1.971 2.733-1.064 1.145-2.298 2.153-3.613 3.028-1.075.715-2.194 1.363-3.377 1.748-1.823.592-3.739 1.05-5.569.868-1.307-.131-2.612-.765-3.883-1.43-1.027-.536-2.642-1.826-3.055-2.152l.421-.597c.345.043 2.263.295 3.548.143 2.283-.269 4.524-.954 6.603-1.879 1.957-.871 3.896-1.956 5.489-3.451a14.306 14.306 0 0 0 3.192-4.431 8.562 8.562 0 0 0 .789-3.261c.013-.378-.068-.793-.143-1.15-.063-.294-.106-.452-.127-.53l.298-1.925.762.243z"
          ></path>
          <path
            d="M15.051 18.066a.5.5 0 0 0-.506.062l-.363.271a4.756 4.756 0 0 1-2.897.952l-.453-.003a.5.5 0 1 0-.009 1l.453.003a5.76 5.76 0 0 0 3.506-1.152l.363-.271a.501.501 0 0 0-.07-.85l-.024-.012z"
          ></path>
        </g>
      </svg>
    </div>
  </footer>
</template>

<script>
import CallToAction from "@/components/default/CallToAction.vue";
import SpecialThanks from "@/components/default/SpecialThanks.vue";

export default {
  // props: ['item'],
  name: "Footer",
  components: {
    CallToAction,
    SpecialThanks
  },
  data() {
    return {
      title: "Footer",
      todos: this.$store.state.default.todos,
      banana: true
    };
  }, // End data
  methods: {
    foundBanana: function() {
      this.banana = false;

      const notification = {
        title: "You've found a banana!",
        content: "I hope you're proud of yourself",
        image: "",
        type: "",
        timer: 6000
      };
      this.$store.commit("notifications/addNotification", notification);
    }
  }
};
</script>
<style scoped>
.banana {
  position: absolute;
  bottom: 10px;
  right: 15px;
  width: 40px;
  cursor: pointer;
}
</style>