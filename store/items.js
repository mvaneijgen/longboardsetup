export const state = () => ({
  types: ["Bearings", "Bushings", "Pivot cups", "Brackets", "Trucks", "Wheels"],
  decks: [],
  trucks: [],
  wheels: [],
});

export const mutations = {
  addDecks(state, payload) {
    state.decks = payload;
  },
  addTrucks(state, payload) {
    state.trucks = payload;
  },
  addWheels(state, payload) {
    state.wheels = payload;
  },
  error(state, payload) {},
};

// export const getters = {
//   get(state) {
//     return state.list;
//   }
// };
