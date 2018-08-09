<template>
  <div class="component-SetupName">
    <h1 class="centered">{{ this.$store.state.name.nameCurrent }}</h1>
  </div>
</template>

<script>
export default {
  // props: ['item'],
  name: 'SetupName',
  data() {
    return {
      nameCurrentRandom: {
        prefix: "Your",
        location: "Amazing",
        suffix: "Setup",
      },
    }
  }, // End data
  methods: {
    nameRandomGenerator: function() {
      // Check if the vistitor has choosen a custom name
      if (this.$store.state.name.nameUserCustom) {
        return;
      } // if so quit this function

      // Generate random number between 0 and amount
      function randomNum(amount) {
        return Math.floor(Math.random() * amount);
      }
      
      // Get the next part of the name that should be updated
      const updateCurrent = Object.keys(this.$store.state.name.nameRandom)[this.$store.state.name.nameRandomIndex];

      this.nameCurrentRandom[updateCurrent] =
        this.$store.state.name.nameRandom[updateCurrent][
          randomNum(this.$store.state.name.nameRandom[updateCurrent].length)
        ];
        
      const nameCombined = `
        ${this.nameCurrentRandom.prefix} 
        ${this.nameCurrentRandom.location} 
        ${this.nameCurrentRandom.suffix}
      `;

      this.$store.commit('name/nameSet', nameCombined);

    },  
  },
  watch: {
    '$route': function(from, to) {
      this.nameRandomGenerator();
    }
  },
  created() {
    this.nameRandomGenerator();
  },
}
</script>