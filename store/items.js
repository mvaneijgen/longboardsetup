export const state = () => ({
  types: ["Bearings", "Bushings", "Brackets", "Trucks", "Wheels"],
  decks: {
    items: [],
    page: 1,
    search: "",
    searchResults: [],
  },
  trucks: {
    items: [],
    page: 1,
    search: "",
    searchResults: [],
  },
  wheels: {
    items: [],
    page: 1,
    search: "",
    searchResults: [],
  },
});

export const mutations = {
  addItems(state, payload) {
    state[payload.itemType].items = state[payload.itemType].items.concat(
      payload.items
    );
  },
  addSearchItems(state, payload) {
    state[payload.itemType].searchResults = payload.items;
    // state[payload.itemType].searchResults = state[
    //   payload.itemType
    // ].searchResults.concat();
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
  // getItems: state => itemType => {
  //   return state[itemType].items.filter(item => {
  //     return item.title
  //       .toLowerCase()
  //       .match(state[itemType].search.toLowerCase());
  //   });
  // },
  getItems: state => itemType => {
    return state[itemType].items;
  },
  getSearch: state => itemType => {
    return state[itemType].search;
  },
  getSearchResults: state => itemType => {
    return state[itemType].searchResults;
  },
  getTypePage: state => itemType => {
    return state[itemType].page;
  },
  getTypes: state => {
    return state.types;
  },
};
