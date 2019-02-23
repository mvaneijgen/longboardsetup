export const state = () => ({
  types: ["Bearings", "Bushings", "Brackets", "Trucks", "Wheels"],
  decks: {
    items: [],
    page: 1,
    pageSearch: 1,
    search: "",
    searchResults: [],
  },
  trucks: {
    items: [],
    page: 1,
    pageSearch: 1,
    search: "",
    searchResults: [],
  },
  wheels: {
    items: [],
    page: 1,
    pageSearch: 1,
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
  incrementPage(state, payload) {
    state[payload.itemType].page++;
  },

  //------------------------------------------------------//
  // 🔎 Search items
  //------------------------------------------------------//
  addSearchItems(state, payload) {
    state[payload.itemType].searchResults = state[
      payload.itemType
    ].searchResults.concat(payload.items);
  },
  setSearch(state, payload) {
    state[payload.itemType].search = payload.searchTerm;
  },
  resetSearch(state, payload) {
    state[payload.itemType].searchResults = [];
    state[payload.itemType].pageSearch = 1;
  },
  incrementPageSearch(state, payload) {
    state[payload.itemType].pageSearch++;
  },
  // END 🔎 Search items
};

export const getters = {
  //------------------------------------------------------//
  // 🛠 get items
  //------------------------------------------------------//
  getItems: state => itemType => {
    return state[itemType].items;
  },
  getTypePage: state => itemType => {
    return state[itemType].page;
  },
  getTypes: state => {
    return state.types;
  },
  // END 🛠 get items

  //------------------------------------------------------//
  // 🔎 Search items
  //------------------------------------------------------//
  getSearch: state => itemType => {
    return state[itemType].search;
  },
  getSearchResults: state => itemType => {
    return state[itemType].searchResults;
  },
  getTypePageSearch: state => itemType => {
    return state[itemType].pageSearch;
  },
  // END 🔎 Search items
};
