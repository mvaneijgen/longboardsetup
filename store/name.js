export const state = () => ({
  nameCurrent: "randomName",
  nameCurrentRandom: {
    prefix: "prefix",
    location: "location",
    suffix: "suffix",
  },
  nameRandom: {
    prefix: ["Amazing", "Awesome", "Groovy"],
    location: ["City", "Street", "Coast"],
    suffix: ["Cruiser", "Destroyer", "Shredder"],
  },
  nameRandomIndex: 0,
});

export const mutations = {
  nameRandomGenerator(state, payload) {
    const prefix = state.nameRandom.prefix;
    const location = state.nameRandom.location;
    const suffix = state.nameRandom.suffix;

    function randomNum(amount) {
      return Math.floor(Math.random() * amount);
    }

    const updateCurrent = Object.keys(state.nameRandom)[state.nameRandomIndex];
    console.warn(state.nameCurrentRandom[updateCurrent]);
    // What I want to write
    state.nameCurrentRandom[updateCurrent] =
      updateCurrent[randomNum(updateCurrent.length)];

    // // What I have to write
    // if (updateCurrent == "prefix") {
    //   state.nameCurrentRandom.prefix = prefix[randomNum(prefix.length)];
    // } else if (updateCurrent == "location") {
    //   state.nameCurrentRandom.location = location[randomNum(location.length)];
    // } else if (updateCurrent == "suffix") {
    //   state.nameCurrentRandom.suffix = suffix[randomNum(suffix.length)];
    // }

    state.nameCurrent = `
    ${state.nameCurrentRandom.prefix} 
    ${state.nameCurrentRandom.location} 
    ${state.nameCurrentRandom.suffix}
    `;

    state.nameRandomIndex++;

    if (state.nameRandomIndex >= Object.keys(state.nameRandom).length) {
      state.nameRandomIndex = 0;
    }
  },
};

// export const getters = {
//   get(state) {
//     return state.list;
//   }
// };
