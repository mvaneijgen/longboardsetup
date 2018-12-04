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
  }
];
export const state = () => ({
  title: "Longboard Setup",
  setupCurrent: [...initSetupCurrent],
  // initSetupCurrent: [{
  //     id: "empty-deck",
  //     type: "decks",
  //     slug: "",
  //     view: "empty",
  //     title: "Pick a deck",
  //   },
  //   {
  //     id: "empty-trucks",
  //     type: "trucks",
  //     slug: "",
  //     view: "empty",
  //     title: "Pick a truck",
  //   },
  //   {
  //     id: "empty-wheels",
  //     type: "wheels",
  //     slug: "",
  //     view: "empty",
  //     title: "Pick your wheels",
  //   }
  // ],
  // advancedOn: false,
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
  },
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
  setupClear(state, payload) {
    state.setupCurrent = [];
    state.initSetupCurrent.forEach(item => {
      state.setupCurrent.push(item);
    });
  },
  // END ❌ Clear the whole setup 🧰 and restore it 

};
//------------------------------------------------------//
// Getters
//------------------------------------------------------//
export const getters = {
  //------------------------------------------------------//
  // 🧰 Get current setup 
  //------------------------------------------------------//
  getSetupCurrent: state => {
    return state.setupCurrent;
  },
  // END 🧰 Get current setup

  //------------------------------------------------------//
  // 🐦 Create share URL 
  //------------------------------------------------------//
  getShareURL: state => {
    let parameters = '';

    state.setupCurrent.forEach(item => {
      const type = item.type;
      const slug = item.slug;
      parameters += `${type}=${slug}&`
    });
    
    return `https://longboardsetup.com/setup?${parameters}`
  },
  // END 🐦 Create share URL
  getShareArray: state => {
    let parameters = [];
    state.setupCurrent.forEach(item => {
      let obj = new Object();
      obj[item.type] = item.slug;
      parameters.push(obj)
    });
    
    return parameters;
  },
};
//------------------------------------------------------//
// END Getters
//------------------------------------------------------//