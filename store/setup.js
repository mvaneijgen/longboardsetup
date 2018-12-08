const initSetupCurrent = [
  {
    id: "empty-deck",
    type: "decks",
    slug: "none",
    view: "empty",
    title: "Pick a deck",
  },
  {
    id: "empty-trucks",
    type: "trucks",
    slug: "none",
    view: "empty",
    title: "Pick a truck",
  },
  {
    id: "empty-wheels",
    type: "wheels",
    slug: "none",
    view: "empty",
    title: "Pick your wheels",
  },
];
const initItem = {
  view: "simple",
  type: "",
  id: "",
  custom: "",
  title: "",
  slug: "",
  location: "",
};
export const state = () => ({
  title: "Longboard Setup",
  setupCurrent: [...initSetupCurrent],
  itemCurrent: { ...initItem },
  setupNotEdited: true,
});

export const mutations = {
  //------------------------------------------------------//
  // Add a item 🔨 to the setup 🧰 or change one
  //------------------------------------------------------//
  setupAdd(state, payload) {
    const changeItemCheck = state.setupCurrent.findIndex(
      item => item.type == payload.type
    );
    if (changeItemCheck >= 0) {
      state.setupCurrent.splice(changeItemCheck, 1, payload);
    } else {
      state.setupCurrent.push(payload);
    }
    state.setupEdited = true;
  },
  // END Add a item 🔨 to the setup 🧰 or change one

  // END Add a item 🔨 to the setup 🧰 or change one

  //------------------------------------------------------//
  // Remove an item 🔨 from the setup 🧰
  //------------------------------------------------------//
  setupRemove(state, payload) {
    const changeItemCheck = state.setupCurrent.findIndex(
      item => item.id == payload.id
    );

    state.setupCurrent.splice(changeItemCheck, 1);
  },
  // END Remove an item 🔨 from the setup 🧰

  //------------------------------------------------------//
  // ❌ Clear the whole setup 🧰 and restore it
  //------------------------------------------------------//
  setupClear(state) {
    state.setupCurrent = [...initSetupCurrent];
  },
  // END ❌ Clear the whole setup 🧰 and restore it

  //------------------------------------------------------//
  // ❌ Clear the whole item 🔨 and restore it
  //------------------------------------------------------//
  itemCurrentClear(state) {
    state.itemCurrent = { ...initItem };
  },
  // END ❌ Clear the whole setup 🔨 and restore it
  itemCurrentAdd(state, payload) {
    state.itemCurrent = { ...payload };
  },
};
//------------------------------------------------------//
// Getters
//------------------------------------------------------//
export const getters = {
  //------------------------------------------------------//
  // Get current setup 🧰
  //------------------------------------------------------//
  getSetupCurrent: state => {
    return state.setupCurrent;
  },
  // END Get current setup 🧰

  //------------------------------------------------------//
  // Get current item 🔨
  //------------------------------------------------------//
  getCurrentItem: state => {
    return state.itemCurrent;
  },
  // END Get current setup 🔨

  //------------------------------------------------------//
  // 🐦 Create share URL
  //------------------------------------------------------//
  getShareURL: (state, getters, rootState, rootGetters) => {
    const queries = state.setupCurrent.reduce((obj, item) => {
      obj[item.type] = item.slug;
      return obj;
    }, {});
    queries.name = rootGetters["name/getName"];
    return queries;
  },
  getSetupNotEdited: state => {
    return state.setupNotEdited;
  },
  // END 🐦 Create share URL
};
//------------------------------------------------------//
// END Getters
//------------------------------------------------------//
