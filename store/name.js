export const state = () => ({
  nameCurrent: "randomName",
  nameRandom: {
    prefix: [
      "Amazing",
      "Awesome",
      "Groovy",
      "Supreme",
      "Prime",
      "Golden",
      "Steel"
    ],
    location: ["City", "Street", "Coast"],
    suffix: ["Cruiser", "Destroyer", "Shredder"],
    index: 0
  }
});

// export const mutations = {
//   add(state, title) {
//     state.list.push(title);
//   }
// };

// export const getters = {
//   get(state) {
//     return state.list;
//   }
// };
