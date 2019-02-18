<template>
  <div>
    <div class="alloy-page alloy-page--content alloy-page--about">
      <div class="alloy-conttent alloy-text-light">
        <section>
          <h1>I need your help getting all longboard parts on this site!</h1>
          <p>All items from this site are manually add through various means of finding items online. We've around 2000+ product at the moment and the list is my no means complete.</p>
          <p>There are multiple older decks or different variations that are not yet in the collection. If you are a longboard dealer (or enthusiastic) and are looking to add a lot of products at once, please contact me via one of the options below.</p>
        </section>

        <section>
          <h2>What would you like to submit?</h2>
          <p>If you want to submit more than one product at a time, refer to the info down below</p>
        </section>

        <section>
          <div class="alloy-btn-group alloy-submit">
            <a
              v-for="(type, index) in types"
              :key="index"
              :href="`https://api.longboardsetup.com/submit-${type}`"
              class="btn btn--large"
            >{{type}} from</a>
            <!-- <div class="alloy-cards submit" v-for="(type, index) in types" :key="index">
              <div class="inner">
                <h3>{{type}}</h3>
                <a :href="`/${type}`" class="btn">{{type}}</a>
              </div>
            </div>-->
          </div>
        </section>

        <section>
          <h2>Are you a longboard seller?</h2>
          <p>Do you have more than ten items to submit? I can run an importer. What I would need from you is some sort of data set file (eg a .json, .csv, .xml, ect)</p>
          <p>The link below takes you to a form where I would ask some general information from you and if you can already provide the data files. If you like some help you can also use the same form.</p>
          <br>
          <a
            href="https://api.longboardsetup.com/bulk-submit"
            class="btn btn--alt btn--large"
          >Go to the submit form</a>
        </section>
      </div>
    </div>
    <Footer/>
  </div>
</template>

<script>
import Footer from "@/components/Footer.vue";

export default {
  transition: "page-alt",
  data() {
    return {
      types: ["decks", "trucks", "wheels"]
    };
  },
  components: {
    Footer
  }
};
</script>
<style lang="scss" scoped>
@import "~/assets/css/common/_variables.scss";

// .alloy-cards.submit {
//   background-color: $brand-one-lighten;
//   padding: $base-margin;
//   .btn {
//     background-color: $brand-one;
//   }
// }
// .submit-container {
//   display: grid;
//   grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
//   grid-column-gap: $base-margin;
//   grid-row-gap: $base-margin;
// }
.alloy-submit {
  text-transform: capitalize;
}
</style>
