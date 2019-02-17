<template>
  <div
    class="alloy-cards alloy-items alloy-items--tools"
    :data-type="notification.type"
    @click="notificationRemove(notification.id)"
  >
    <div class="close" @click="notificationRemove(notification.id)">
      <icon-base width="20" height="20" icon-name="close">
        <icon-close/>
      </icon-base>
    </div>

    <h5 class="alloy-title">{{ notification.title }}</h5>
    <p>
      {{ notification.content }}
      <nuxt-link v-if="notification.link" :to="notification.link" class="read-more">Read more</nuxt-link>
    </p>
  </div>
</template>

<script>
import IconBase from "@/components/IconBase.vue";
import IconClose from "@/components/icons/IconClose.vue";
export default {
  props: ["notification"],
  name: "Notification",
  components: {
    // Icon logic
    IconBase,
    IconClose
  },
  data() {
    return {
      title: "Notification"
    };
  }, // End data
  methods: {
    notificationRemove: function(id) {
      this.$store.commit("notifications/removeNotification", id);
    },
    notificationTimer: function(id, timer) {
      setTimeout(() => {
        this.notificationRemove(id);
      }, timer);
    }
  },
  mounted() {
    this.notificationTimer(this.notification.index, this.notification.timer);
  }
};
</script>

<style lang="scss" scoped>
@import "~/assets/css/common/_variables.scss";

.alloy-cards {
  cursor: pointer;
  padding: $base-margin;
  font-size: 0.8rem;
  line-height: 1.4em;
  color: $brand-light;
  margin-bottom: $base-margin;
  .alloy-title {
    font-family: $font-base;
    font-size: 1rem;
  }
  &:hover {
    transform: scale(1);
  }
  > * {
    margin: 0;
  }
  .close {
    background-color: transparent;
    position: absolute;
    top: 5px;
    right: 5px;
    width: 10px;
    height: 10px;

    svg {
      width: 100%;
      height: auto;
      margin-bottom: 0;
    }
  }
}
[data-type] {
  background-color: $notification-notice;
}
[data-type="alert"] {
  background-color: $notification-alert;
}
[data-type="warning"] {
  background-color: $notification-warning;
}
a {
  color: $brand-light;
  text-decoration: none;
}
.read-more {
  text-decoration: underline;
}
</style>