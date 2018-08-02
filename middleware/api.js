import axios from "axios";
axios.defaults.baseURL = "https://api.longboardsetup.com/wp-json";

function postTypeFunction(items) {
  let itemsResult = [];

  items.forEach(item => {
    let itemObj = {
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

    itemsResult.push(itemObj);
  });
  return itemsResult;
}

export default function({ params, store }) {
  return axios
    .get(`/wp/v2/decks?orderby=title&order=asc&_embed`)
    .then(response => {
      const itemsAll = response.data;

      let itemsResult = postTypeFunction(itemsAll);

      store.commit("items/addDecks", itemsResult);

      // Done ➡️ next post type
      return axios.get(`/wp/v2/trucks?orderby=title&order=asc&_embed`);
    })
    .then(response => {
      const itemsAll = response.data;

      let itemsResult = postTypeFunction(itemsAll);

      store.commit("items/addTrucks", itemsResult);

      // Done ➡️ next post type
      return axios.get(`/wp/v2/wheels?orderby=title&order=asc&_embed`);
    })
    .then(response => {
      const itemsAll = response.data;

      let itemsResult = postTypeFunction(itemsAll);

      store.commit("items/addWheels", itemsResult);
    })
    .catch(function(error) {
      store.commit("error", error);
    });
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
