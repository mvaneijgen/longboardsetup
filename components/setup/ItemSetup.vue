 <template>
  <div class="alloy-items alloy-cards" :data-type="item.type" :data-view="item.view" :data-item-id="item.id" :data-info="showInfo">
    <div class="inner" @click="loadItemType">
      <template v-if="item.view == 'empty'">
        <EmptyDecksIcon v-if="item.type == 'decks'" key="decks" />
        <EmptyTrucksIcon v-if="item.type == 'trucks'" key="decks" />
        <EmptyWheelsIcon v-if="item.type == 'wheels'" key="decks" />
      </template>

      <template v-else>
        <img v-if="item.view != 'simple'" :src="item.image" :alt="item.title" :key="item.title">
        <img v-else :src="imageLink(item.custom)" :alt="item.title">
      </template>

      <div class="alloy-content">
        <div class="alloy-meta">
          <p>
            <strong>{{ item.custom }}</strong>
            <span v-if="item.location && item.location !== '' && item.location !== 'undefined'">| {{ item.location }}</span>
          </p>
        </div>
        <div v-if="item.view === 'advanced'">
          <h6>{{item.type.replace('decks','deck')}}</h6>
        </div>
        <h3 class="item-title" v-html="item.title"></h3>
        <div v-if="item.view === 'advanced'">
          <a :href="'http://www.google.com/search?q=' + item.title.replace(/ /g,'+')">Search online</a>
          <a :href="`//api.longboardsetup.com/${item.type}/${item.slug}`" target="_blank" class="report">Fix item?</a>
        </div>
        <!-- <div v-else>
          <a href style="pointen-events: none;">Browse all products</a>
        </div>-->
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
import EmptyDecksIcon from "@/components/setup/empty-state/EmptyDecksIcon.vue";
import EmptyTrucksIcon from "@/components/setup/empty-state/EmptyTrucksIcon.vue";
import EmptyWheelsIcon from "@/components/setup/empty-state/EmptyWheelsIcon.vue";

// // Icon logic
// import IconBase from "@/components/IconBase.vue";
// import IconInfo from "@/components/icons/IconInfo.vue";

export default {
  props: ["item"],
  name: "ItemSetup",
  components: {
    EmptyDecksIcon,
    EmptyTrucksIcon,
    EmptyWheelsIcon,
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
    imageLink: function(image) {
      return require(`~/assets/images/${image}.svg`);
    },
    toggleInfo: function() {
      this.showInfo = !this.showInfo;
    },
    loadItemType: function() {
      this.$store.commit("setup/itemCurrentAdd", this.item);

      this.$router.push({
        path: `/setup/${this.item.type.replace(/\d+/g, "")}`,
        // path: `/setup/${this.item.type}`
      });
    },
  },
};
</script>
<style lang="scss" scoped>
.alloy-meta {
  p {
    span {
      margin-left: 5px;
    }
  }
}
</style>
