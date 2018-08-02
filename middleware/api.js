import axios from "axios";

// axios.defaults.headers.common["Authorization"] =
//   "Bearer f5125aed0f383716e33f9dedf5715b9ace5c3825";

export default function({ params, store }) {
  return axios
    .get(
      `https://api.longboardsetup.com/wp-json/wp/v2/decks?orderby=title&order=asc&_embed`
    )
    .then(response => {
      const itemsAll = response.data;
      let itemsResult = [];

      itemsAll.forEach(item => {
        // const imageSizes =
        //   '_embedded["wp:featuredmedia"][0].media_details.sizes';
        // Strip out all the Wordpress data I don't need
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
              item._embedded["wp:featuredmedia"][0].media_details.sizes
                .thumbnail.source_url,
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
          // thumbnail: item.imageSizes.thumbnail.source_url,
          // images: {
          //   thumbnail: item.imageSizes.thumbnail.source_url,
          // },
        };

        itemsResult.push(itemObj);
      });

      store.commit("items/add", itemsResult);
    })
    .catch(function(error) {
      store.commit("error", error);
      // console.log(error);
    });
}
