<template>
  <div
    class="alloy-cards alloy-items alloy-items--tools"
    :data-type="notification.type"
    @click="notificationRemove(notification.id)"
  >
    <button @click="notificationRemove(notification.id)">close</button>
    <h5 class="alloy-title">{{ notification.title }}</h5>
    <p>
      {{ notification.content }}
      <nuxt-link v-if="notification.link" :to="notification.link" class="read-more">Read more</nuxt-link>
    </p>
  </div>
</template>

<script>
export default {
  props: ["notification"],
  name: "Notification",
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