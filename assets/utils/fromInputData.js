module.exports = {
  /**
   * Converts the input data from the api into an internal data structure
   * @param {Object} item
   * @returns {Object}
   */
  fromInputData: function(item) {
    //
    let imageFull = "/image-not-found.jpg";
    let imageObj = {};

    if (item._embedded !== undefined) {
      imageFull =
        item._embedded["wp:featuredmedia"][0].media_details.sizes.full
          .source_url;
      imageObj = item._embedded["wp:featuredmedia"][0].media_details.sizes;
    }
    // Return object
    return {
      id: item.id,
      title: item.title.rendered,
      slug: item.slug,
      type: item.type,
      view: "advanced",
      image: imageFull,
      images: imageObj,
    };
  },
};
