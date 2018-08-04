export const state = () => ({
  // This is the name.js store, with all the logic containing the random name generator,
  // or the custom the visitor has chosen him or her self.

  // The name displayed in the app
  nameCurrent: "",

  // // The current name stored in individual parts
  // nameCurrentRandom: {
  //   prefix: "Savage",
  //   location: "City",
  //   suffix: "Cruiser",
  // },

  // A database of random names saved in three parts
  // 📝 this will later come from a real data base, but for testing purposes I have created a small demo
  nameRandom: {
    prefix: ["Amazing", "Awesome", "Groovy"],
    location: ["City", "Street", "Coast"],
    suffix: ["Cruiser", "Destroyer", "Shredder"],
  },

  // The index of what name of the three parts to update
  nameRandomIndex: 0,

  // Keep state if the visitor has chosen a custom name
  nameUserCustom: false,
});

// name.js state mutations
export const mutations = {
  nameSet(state, payload) {
    state.nameCurrent = payload;

    state.nameRandomIndex++;

    if (state.nameRandomIndex >= Object.keys(state.nameRandom).length) {
      state.nameRandomIndex = 0;
    }
  },
};
