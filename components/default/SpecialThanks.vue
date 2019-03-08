<template>
  <div class="component-SpecialThanks">
    <h3>Special thanks to!</h3>
    <ul>
      <li v-for="(person, index) in people" :key="index">
        <a v-if="person.url" target="_blank" :href="person.url">
          {{ person.name }}
          <small v-if="person.realname">({{ person.realname }})</small>
        </a>
        <template v-else>
          {{ person.name }}
          <small v-if="person.realname">({{ person.realname }})</small>
        </template>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "SpecialThanks",
  data() {
    return {
      people: this.$store.state.default.specialThanks
    };
  } // End data
};
</script>