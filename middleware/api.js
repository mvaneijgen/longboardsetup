import axios from "axios";
axios.defaults.baseURL = "https://api.longboardsetup.com/wp-json";
const queries = [
  "orderby=title",
  "order=asc",
  "page=1",
  "per_page=18",
  "_embed",
];

/**
 * Converts the input data from the api into an internal data structure
 * @param {Object} item
 * @returns {Object}
 */
function fromInputData(item) {
  return {
    id: item.id,
    title: item.title.rendered,
    slug: item.slug,
    type: item.type,
    view: "advanced",
    image:
      item._embedded["wp:featuredmedia"][0].media_details.sizes.full
        .source_url,
    images: {
      thumbnail:
        item._embedded["wp:featuredmedia"][0].media_details.sizes.thumbnail
          .source_url,
      medium:
        item._embedded["wp:featuredmedia"][0].media_details.sizes.medium
          .source_url,
      // large:
      //   item._embedded["wp:featuredmedia"][0].media_details.sizes.large
      //     .source_url,
      full:
        item._embedded["wp:featuredmedia"][0].media_details.sizes.full
          .source_url,
    },
  };
}

/**
 * Capitalizes the first letter of a string
 * @param {string} input
 * @returns {string}
 */
function ucfirst(input) {
    return input.charAt(0).toUpperCase() + input.slice(1);
}

export default function(context) {
  context.fetch = type => {
    return axios
      .get(`/wp/v2/${type}?${queries.join("&")}`)
      .then(response => {
        context.store.commit(`items/add${ucfirst(type)}`, response.data.map(fromInputData));
      });
  }
}

// export default function ({ params, store }) {

//   return axios
//     .get(`/wp/v2/decks?orderby=title&order=asc&_embed`)
//     .then(response => {
//       const itemsAll = response.data;

//       let itemsResult = postTypeFunction(itemsAll);

//       store.commit("items/addDecks", itemsResult);
//     })
//     .catch(function (error) {
//       store.commit("error", error);
//     });

//   return axios
//     .get(`/wp/v2/trucks?orderby=title&order=asc&_embed`)
//     .then(response => {
//       const itemsAll = response.data;

//       let itemsResult = postTypeFunction(itemsAll);

//       store.commit("items/addTrucks", itemsResult);
//     })
//     .catch(function (error) {
//       store.commit("error", error);
//     });

//   return axios
//     .get(`/wp/v2/wheels?orderby=title&order=asc&_embed`)
//     .then(response => {
//       const itemsAll = response.data;

//       let itemsResult = postTypeFunction(itemsAll);

//       store.commit("items/addWheels", itemsResult);
//     })
//     .catch(function (error) {
//       store.commit("error", error);
//     });
// }
