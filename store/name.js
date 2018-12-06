export const state = () => ({
  // This is the name.js store, with all the logic containing the random name generator,
  // or the custom the visitor has chosen him or her self.
  nameCurrent: "Your Setup",

  // A database of random names saved in three parts
  // 📝 this will later come from a real data base, but for testing purposes I have created a small demo
  nameRandom: {
    prefix: ["Amazing", "Awesome", "Groovy"],
    location: ["City", "Street", "Coast"],
    suffix: ["Cruiser", "Destroyer", "Shredder"],
  },

  nameCurrentRandom: {
    prefix: "Your",
    location: "Cool",
    suffix: "Setup",
  },

  // The index of what name of the three parts to update
  nameRandomIndex: 0,

  // Keep state if the visitor has chosen a custom name
  nameUserCustom: false,
});

// name.js state mutations
export const mutations = {
  nameGenerator(state) {
    function randomNum(amount) {
      return Math.floor(Math.random() * amount);
    }
    // Get the next part of the name that should be updated
    const updateCurrent = Object.keys(state.nameRandom)[state.nameRandomIndex];
    state.nameCurrentRandom[updateCurrent] =
      state.nameRandom[updateCurrent][
        randomNum(state.nameRandom[updateCurrent].length)
      ];
      
    const nameCombined = `${state.nameCurrentRandom.prefix} ${state.nameCurrentRandom.location} ${state.nameCurrentRandom.suffix}`;

    state.nameCurrent = nameCombined;
    state.nameRandomIndex++;
    if (state.nameRandomIndex >= Object.keys(state.nameRandom).length) {
      state.nameRandomIndex = 0;
    }
  },
  setName(state, payload) {
    state.nameCurrent = payload;

  },
  setNameUser(state) {
    state.nameUserCustom = true;
  }
};
export const getters = {
  getName: state => {
    return state.nameCurrent;
  },
  getUserBool: state => {
    return state.nameUserCustom;
  },
};