<template>
  <div class="alloy-items alloy-cards" :data-type="item.type" :data-view="item.view" :data-item-id="item.id" :data-info="showInfo">
    <div class="inner" @click="itemEdit">
      <img v-if="item.view != 'simple'" :src="item.image" :alt="item.title">
      <img v-else src="http://alloy.work/codepen/QBOyJj/custom.jpg" :alt="item.title">
      <div class="alloy-content">
        <div class="alloy-meta">
          <p>
            <strong>{{ item.custom }}</strong>
          </p>
        </div>
        <h3 class="item-title" v-html="item.title"></h3>
        <a :href="'http://www.google.com/search?q=' + item.title.replace(/ /g,'+')">Search online</a>
        <a :href="`//api.longboardsetup.com/${item.type}/${item.slug}`" target="_blank" class="report">Fix item?</a>
      </div>
    </div>
    <!-- <button v-if="item.view != 'simple'" @click="toggleInfo" class="btn btn--small btn--subtle">
      <icon-base width="20" height="20" icon-name="info">
        <icon-info/>
      </icon-base>
    </button>-->
  </div>
</template>

<script>
// Icon logic
// import IconBase from "@/components/IconBase.vue";
// import IconInfo from "@/components/icons/IconInfo.vue";

export default {
  props: ["item"],
  name: "Item",
  components: {
    // // Icon logic
    // IconBase,
    // IconInfo,
  },
  data() {
    return {
      showInfo: false,
    };
  }, // End data
  methods: {
    toggleInfo: function(event) {
      // event.target.parentNode.classList.toggle('showInfo');
      this.showInfo = !this.showInfo;
    },
    //------------------------------------------------------//
    // 🔔Create notification based on the amount of items in the setup
    //------------------------------------------------------//
    triggerNameSetupNotification: function() {
      const notification = {
        title: "Nice your setup is coming along nicely",
        content:
          "Why don't you give it a name! Just lick on the title on top of the screen",
        image: "",
        type: "warning",
        timer: 6000,
      };
      this.$store.commit("notifications/addNotification", notification);
    },
    // END 🔔Create notification based on the amount of items in the setup
    itemEdit: function(event) {
      this.$store.commit("setup/setupAdd", this.item);
      this.$store.commit("setup/setSetupNotEdited", true);
      if (this.$store.getters["setup/getRealSetupLength"] === 3) {
        this.triggerNameSetupNotification();
      }
      this.$router.push({
        path: "/setup",
      });
    },
  },
};
</script>

