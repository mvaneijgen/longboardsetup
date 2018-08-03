export const state = () => ({
  title: "Longboard Setup",
  setupCurrent: [
    {
      id: "empty-deck",
      type: "decks",
      paramKey: "decks",
      slug: "",
      view: "empty",
      title: "Pick a deck",
      images: {
        full: "subsonic-century-36-deck-only.jpg",
      },
    },
    {
      id: "empty-trucks",
      type: "trucks",
      paramKey: "trucks",
      slug: "",
      view: "empty",
      title: "Pick a truck",
      images: {
        full: "subsonic-century-36-deck-only.jpg",
      },
    },
    {
      id: "empty-wheels",
      type: "wheels",
      paramKey: "wheels",
      slug: "",
      view: "empty",
      title: "Pick your wheels",
      images: {
        full: "subsonic-century-36-deck-only.jpg",
      },
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
    const paramKeyCurrent = payload.paramKey;

    const changeItemCheck = state.setupCurrent.findIndex(
      item => item.paramKey == paramKeyCurrent
    );
    state.setupCurrent[changeItemCheck] = payload;
  },
  setupDelete(state, payload) {},
};

// export const getters = {
//   get(state) {
//     return state.list;
//   }
// };
