export const state = () => ({
  // This is the name.js store, with all the logic containing the random name generator,
  // or the custom the vistor has choosen him or her self.

  // The name displayed in the app
  nameCurrent: "randomName",

  // The current name stored in indivitual parts
  nameCurrentRandom: {
    prefix: "val-prefix",
    location: "val-location",
    suffix: "val-suffix",
  },

  // A database of random names saved in three parts
  // 📝 this will later come from a real data base, but for testing purposes I have created a small demo
  nameRandom: {
    prefix: ["Amazing", "Awesome", "Groovy"],
    location: ["City", "Street", "Coast"],
    suffix: ["Cruiser", "Destroyer", "Shredder"],
  },

  // The index of what name of the three parts to update
  nameRandomIndex: 0,

  // Keep state if the vistor has choosen a custom name
  nameUserCustom: false,
});

// name.js state mutations
export const mutations = {
  nameRandomGenerator(state, payload) {
    // Check if the vistitor has choosen a custom name
    if (state.nameUserCustom) {
      return;
    } // if so quit this function

    // Generate random number between 0 and amount
    function randomNum(amount) {
      return Math.floor(Math.random() * amount);
    }

    // Get the next part of the name that should be updated
    const updateCurrent = Object.keys(state.nameRandom)[state.nameRandomIndex];

    // Update the next part of the name and make it a random name stored in that specific name part array
    state.nameCurrentRandom[updateCurrent] =
      state.nameRandom[updateCurrent][
        randomNum(state.nameRandom[updateCurrent].length)
      ];

    // contatinate al the nameCurrentRandom names to create the full random name
    state.nameCurrent = `
    ${state.nameCurrentRandom.prefix} 
    ${state.nameCurrentRandom.location} 
    ${state.nameCurrentRandom.suffix}
    `;

    // Increase the index so that the next time the function is ran it will update the next part of the name
    state.nameRandomIndex++;

    // Check if the the function is at the last (third) part of the name and reset it to the first part
    if (state.nameRandomIndex >= Object.keys(state.nameRandom).length) {
      state.nameRandomIndex = 0;
    }
  },
};
