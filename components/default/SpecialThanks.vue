<template>
  <div class="component-SpecialThanks">
    <h3>Special thanks!</h3>
    <ul>
      <li v-for="(person, index) in poeple" :key="index">
        {{ person.name }}
        <small>({{ person.realname }})</small>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "SpecialThanks",
  data() {
    return {
      poeple: this.$store.state.default.specialThanks
    };
  } // End data
};
</script>