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
  // store.commit({
  //   type: 'add',
  //   dataType: 10,
  //   items: []
  // })
  addItems(state, payload) {
    state[payload.itemType].items = state[payload.itemType].items.concat(
      payload.items
    );
  },
  incrementPage(state, payload) {
    state[payload.itemType].page++;
  },
  error(state, payload) {},
};

export const getters = {
  // get(state) {
  //   return state.list;
  // }
  getTypeItems: state => itemType => {
    return state[itemType].items;
  },
  getTypePage: state => itemType => {
    return state[itemType].page;
  },
};
