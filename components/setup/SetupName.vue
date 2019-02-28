<template>
  <div class="component-SetupName">
    <div class="inner">
      <h1 @click="nameInputToggle">
        {{ this.setupName }}
        <button class="editName" v-if="!showNameInput" @click="nameInputToggle">
          <IconBase width="20" height="20" icon-name="edit">
            <icon-edit/>
          </IconBase>
        </button>
      </h1>

      <form v-show="showNameInput" @submit.prevent="saveNameInput">
        <div class="alloy-input-field">
          <input type="text" ref="nameInput" v-model="setupName">
          <input type="submit" value="Save">
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
// Icon logic
import IconBase from "@/components/IconBase.vue";
import IconEdit from "@/components/icons/IconEdit.vue";

export default {
  name: "SetupName",
  components: {
    IconBase,
    IconEdit
  },
  data() {
    return {
      showNameInput: false,
      nameNotification: true
    };
  },
  computed: {
    ...mapGetters({
      getName: "name/getName",
      getUserBool: "name/getUserBool",
      getShareURL: "setup/getShareURL"
    }),
    setupName: {
      get() {
        return this.getName;
      },
      set(value) {
        // router.push({ path: 'register', query: { plan: 'private' }})
        this.$store.commit("name/setName", value);
        this.$store.commit("name/setNameUser");
      }
    }
  },
  methods: {
    nameInputToggle: function() {
      this.showNameInput = true;
      this.$nextTick(() => {
        this.$refs.nameInput.select();
      });
    },
    saveNameInput: function() {
      this.showNameInput = false;
      this.$router.push({
        query: this.getShareURL
      });
      if (this.nameNotification) {
        // console.warn(this.getUserBool);
        this.nameNotification = false;
        const notification = {
          title: "You've given your baby a name",
          content: "Hope it will grow up agile & strong!",
          image: "",
          type: "",
          timer: 6000
        };
        this.$store.commit("notifications/addNotification", notification);
      }
    }
  }
  // watch: {
  //   $route() {
  //     if (!this.getUserBool) {
  //       this.$store.commit("name/nameGenerator");
  //     }
  //   }
  // }
};
</script>
<style lang="scss" scoped>
.component-SetupName {
  // overflow: hidden;

  .inner {
    // display: flex;
    // justify-content: center;
    position: relative;
    z-index: 10;
    // max-width: 800px;
    // margin: 0 auto;
    text-align: center;
  }
}
.alloy-input-field {
  position: absolute;
  top: 100%;
  left: 50%;
  transform: translate(-50%, -20%);
  padding: 0 10px;
  width: 400px;
  max-width: 100%;
  display: flex;
  position: absolute;
  z-index: 2000;
  [type="text"] {
    width: 100%;
  }
  > * {
    margin: 0;
  }
  input[type="submit"] {
    position: absolute;
    top: 7px;
    right: 7px + 10px;
    padding: 5px 10px;
    line-height: 1em;
  }
}
.editName {
  position: absolute;
  height: 100%;
  top: 50%;
  right: -35px;
  height: auto;
  padding: 5px;
  padding-left: 25px;
  z-index: -1;
}
</style>
