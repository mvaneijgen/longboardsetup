export const state = () => ({
  title: "Longboard Setup",
  setupCurrent: [],
  advancedOn: false,
});

export const mutations = {
  advancedToggle(state, payload) {
    state.advancedOn = !state.advancedOn;
  },
  setupAdd(state, payload) {
    state.setupCurrent.push(payload);
  },
  setupChange(state, payload) {},
  setupDelete(state, payload) {},
};

// export const getters = {
//   get(state) {
//     return state.list;
//   }
// };
