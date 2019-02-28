import VuexPersistence from "vuex-persist";

export default ({ store }) => {
  window.onNuxtReady(() => {
    new VuexPersistence({
      key: "local-setup",
      storage: window.localStorage,
      modules: ["setup"],
    }).plugin(store);
  });
};
