export const state = () => ({
  types: ["Bearings", "Bushings", "Pivot cups", "Brackets", "Trucks", "Wheels"],
  // decks: [],
  // decksPage: 1,
  // trucks: [],
  // trucksPage: 1,
  // wheels: [],
  // wheelsPage: 1,
  decks: {
    items: [],
    page: 1,
  },
  trucks: {
    items: [],
    page: 1,
  },
  wheels: {
    items: [],
    page: 1,
  },
});

export const mutations = {
  addDecks(state, payload) {
    // state.decks = payload;
    state.decks.items = state.decks.items.concat(payload);
  },
  addTrucks(state, payload) {
    // state.trucks = payload;
    state.trucks.items = state.trucks.items.concat(payload);
  },
  addWheels(state, payload) {
    // state.wheels = payload;
    state.wheels.items = state.wheels.items.concat(payload);
  },
  error(state, payload) {},
};

// export const getters = {
//   get(state) {
//     return state.list;
//   }
// };
