export const state = () => ({
  callToActions: [
    {
      title: "Are you missing products?",
      description: "Help fill our database by uploading your own!",
      cta: "Upload your own",
      type: "cta--alt",
      url: "#",
    },
    {
      title: "Have a lot of products to add?",
      description:
        "If you have a large collection or products, we love to add them all at once. Just get in contact with us.",
      cta: "Contact",
      type: "",
      url: "#",
    },
  ],
  specialThanks: [
    {
      name: "username",
      realname: "Real name",
      url: "#",
    },
    // {
    //   name: "aureex",
    //   realname: "",
    //   url: "https://www.reddit.com/user/aureex",
    // },
    // {
    //   name: "aiyekara",
    //   realname: "",
    //   url: "https://www.reddit.com/user/aiyekara",
    // },
  ],
  todos: [
    {
      name: "Allow saving setups in localStorage()",
      description: "",
    },
    {
      name: "Store most visited/popular in firebase database",
      description: "",
    },
  ],
});

// export const mutations = {
//   setupClear(state, payload) {
//     state.setupCurrent = state.initSetupCurrent;
//   },
// };

// export const getters = {
//   get(state) {
//     return state.list;
//   }
// };
