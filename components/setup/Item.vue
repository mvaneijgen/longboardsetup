<template>
  <div
    class="alloy-items alloy-cards"
    :data-type="item.type"
    :data-view="item.view"
    :data-item-id="item.id"
    :data-info="showInfo"
  >
    <div class="inner" @click="itemEdit">
      <img v-if="item.view != 'simple'" :src="item.image" :alt="item.title">
      <img v-else src="http://alloy.work/codepen/QBOyJj/custom.jpg" :alt="item.title">
      <div class="alloy-content">
        <div class="alloy-meta">
          <p>
            <strong>{{ item.custom }}</strong>
          </p>
        </div>
        <h3 v-html="item.title"></h3>
        <a :href="'http://www.google.com/search?q=' + item.title.replace(/ /g,'+')">Search online</a>
      </div>
    </div>
    <button v-if="item.view != 'simple'" @click="toggleInfo" class="btn btn--small btn--subtle">
      <icon-base width="20" height="20" icon-name="info">
        <icon-info/>
      </icon-base>
    </button>
  </div>
</template>

<script>
// Icon logic
import IconBase from "@/components//IconBase.vue";
import IconInfo from "@/components/icons/IconInfo.vue";

export default {
  props: ["item"],
  name: "Item",
  components: {
    // Icon logic
    IconBase,
    IconInfo
  },
  data() {
    return {
      showInfo: false
    };
  }, // End data
  methods: {
    toggleInfo: function(event) {
      // event.target.parentNode.classList.toggle('showInfo');
      this.showInfo = !this.showInfo;
    },
    itemEdit: function(event) {
      this.$store.commit("setup/setupAdd", this.item);

      this.$router.push({
        path: "/setup"
      });
    }
  }
};
</script>

