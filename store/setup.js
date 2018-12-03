export const state = () => ({
  title: "Longboard Setup",
  setupCurrent: [
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
  ],
  initSetupCurrent: [
    {
      id: "empty-deck",
      type: "decks",
      slug: "",
      view: "empty",
      title: "Pick a deck",
    },
    {
      id: "empty-trucks",
      type: "trucks",
      slug: "",
      view: "empty",
      title: "Pick a truck",
    },
    {
      id: "empty-wheels",
      type: "wheels",
      slug: "",
      view: "empty",
      title: "Pick your wheels",
    },
  ],
  advancedOn: false,
});

export const mutations = {
  advancedToggle(state, payload) {
    state.advancedOn = !state.advancedOn;
  },
  setupAdd(state, payload) {
    state.setupCurrent.push(payload);
  },
  setupChange(state, payload) {
    const changeItemCheck = state.setupCurrent.findIndex(
      item => item.type == payload.type
    );
    state.setupCurrent[changeItemCheck] = payload;
  },
  setupAddOrChange(state, payload) {
    const changeItemCheck = state.setupCurrent.findIndex(
      item => item.id == payload.id
    );
    if (changeItemCheck >= 0) {
      state.setupCurrent[changeItemCheck] = payload;
    } else {
      state.setupCurrent.push(payload);
    }
  },
  setupDelete(state, payload) {
    const changeItemCheck = state.setupCurrent.findIndex(
      item => item.id == payload.id
    );
    state.setupCurrent.splice(changeItemCheck, 1);
    // console.warn(payload);
  },
  setupClear(state, payload) {
    state.setupCurrent = state.initSetupCurrent;
  },
};
//------------------------------------------------------//
// Getters 
//------------------------------------------------------//
export const getters = {
  getShareURL: state => {
    let parameters = '';

    state.setupCurrent.forEach(item => {
      const type = item.type;
      const slug = item.slug;
      parameters += `${type}=${slug}&`
    });
    
    return `/setup?${parameters}`

  }
};
//------------------------------------------------------//
// END Getters
//------------------------------------------------------//