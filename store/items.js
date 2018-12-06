export const state = () => ({
  types: ["Bearings", "Bushings", "Brackets", "Trucks", "Wheels"],
  decks: {
    items: [],
    page: 1,
    search: ''
  },
  trucks: {
    items: [],
    page: 1,
    search: ''
  },
  wheels: {
    items: [],
    page: 1,
    search: ''
  },
});

export const mutations = {
  addItems(state, payload) {
    state[payload.itemType].items = state[payload.itemType].items.concat(
      payload.items
    );
  },
  incrementPage(state, payload) {
    state[payload.itemType].page++;
  },
  setSearch(state, payload) {
    state[payload.itemType].search = payload.searchTerm;
  },
  error(state, payload) {},
};

export const getters = {
  getSearchItems: state => itemType => {
    return state[itemType].items.filter((item) => {
      return item.title.toLowerCase().match(state[itemType].search.toLowerCase());
    });
  },
  getTypePage: state => itemType => {
    return state[itemType].page;
  },
  getSearch: state => itemType => {
    return state[itemType].search;
  },
  getTypes: state => {
    return state.types;
  },
};
