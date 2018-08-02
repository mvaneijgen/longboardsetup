export const state = () => ({
  types: [
    "trucks",
    "wheels",
    "bearings",
    "bushings",
    "pivot cups",
    "brackets",
    "custom",
  ],
  decks: [],
  trucks: [],
  wheels: [],
});

export const mutations = {
  add(state, payload) {
    state.decks = payload;
  },
  error(state, payload) {},
};

// export const getters = {
//   get(state) {
//     return state.list;
//   }
// };
