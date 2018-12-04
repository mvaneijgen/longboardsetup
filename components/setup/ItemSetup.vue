<template>
  <div
    class="alloy-items alloy-cards"
    :data-type="item.type"
    :data-view="item.view"
    :data-item-id="item.id"
    :data-info="showInfo"
  >
    <div
      class="inner"
      @click="loadItemType"
    >

      <template v-if="item.view == 'empty'">
        <EmptyDecksIcon v-if="item.type == 'decks'" />
        <EmptyTrucksIcon v-if="item.type == 'trucks'" />
        <EmptyWheelsIcon v-if="item.type == 'wheels'" />
      </template>

      <template v-else>
        <img v-if="item.view != 'simple'" :src="item.image" :alt="item.title">
        <img v-else src="http://alloy.work/codepen/QBOyJj/custom.jpg" :alt="item.title">
      </template>
      
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
    <button
      v-if="item.view != 'simple'"
      @click="toggleInfo"
      class="btn btn--small btn--subtle"
    >
      <icon-base
        width="20"
        height="20"
        icon-name="info"
      >
        <icon-info />
      </icon-base>
    </button>

  </div>
</template>

<script>
import EmptyDecksIcon from "@/components/setup/empty-state/EmptyDecksIcon.vue";
import EmptyTrucksIcon from "@/components/setup/empty-state/EmptyTrucksIcon.vue";
import EmptyWheelsIcon from "@/components/setup/empty-state/EmptyWheelsIcon.vue";

// Icon logic
import IconBase from "@/components//IconBase.vue";
import IconInfo from "@/components/icons/IconInfo.vue";

export default {
  props: ["item"],
  name: "Item",
  components: {
    EmptyDecksIcon,
    EmptyTrucksIcon,
    EmptyWheelsIcon,
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
      this.showInfo = !this.showInfo;
    },
    loadItemType: function(event) {
      this.$router.push({
        path: `/setup/${this.item.type}`,
        query: {
          id: this.item.id,
          custom: this.item.custom,
          title: this.item.title,
          location: this.item.location
        }
      });
    }
  }
};
</script>

<style lang="scss"  scoped>
@import "~/assets/css/common/_variables.scss";
.btn {
  color: $brand-dark-grey;
}
</style>