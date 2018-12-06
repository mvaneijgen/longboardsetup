export const state = () => ({
  notifications: [],
});

export const mutations = {
  addNotification(state, payload) {
    const notification = payload;
    notification.id = state.notifications.length;

    state.notifications.push(notification);
  },
  removeNotification(state, id) {
    const removeIndex = state.notifications.findIndex(
      item => item.id == id
    );
    state.notifications.splice(removeIndex, 1);
  },
};

export const getters = {
  getNotifications: state => {
    return state.notifications;
  }
};
