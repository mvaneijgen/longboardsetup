<template>
  <div class="alloy-cards alloy-items alloy-items--tools" :data-type="notification.type" @click="notificationRemove(notification.id)">
    <h5>{{ notification.title }}</h5>
    <p>{{ notification.content }}</p>
  </div>
</template>

<script>
export default {
  props: ['notification'],
  name: 'Notification',
  data() {
    return {
      title: 'Notification'
    }
  }, // End data
  methods: {
    notificationRemove: function(id) {
      this.$store.commit('notifications/removeNotification', id);
    },
    notificationTimer: function(id, timer) {
      setTimeout( () => { 
        this.notificationRemove(id)
      }, timer);
    },
  },
  mounted() {
    this.notificationTimer(this.notification.index, this.notification.timer);
  }, 
}
</script>

<style lang="scss" scoped>
@import '~/assets/css/common/_variables.scss';

.alloy-cards {
  padding: $base-margin;
  font-size: .8rem;
  line-height: 1.4em;
  color: $brand-light;
  margin-bottom: $base-margin;
  h5 {
    font-size: 1rem;
  }
&:hover {
    transform: scale(1);
  }
  > *  {
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
</style>