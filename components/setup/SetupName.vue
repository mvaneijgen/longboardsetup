<template>
  <div class="component-SetupName">
    <div class="inner">
    <h1>{{ this.setupName }}<button class="editName" v-if="!showNameInput" @click="showNameInput = true">Edit</button></h1>
    
    <div v-if="showNameInput" class="alloy-input-field">
      <input type="text" v-model="setupName">
      <button @click="showNameInput = fale">Save</button>
    </div>
  </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: 'SetupName',
  data() {
    return {
      showNameInput: false,
    }
  },
  computed: {
    ...mapGetters({
      getName: 'name/getName',
      getUserBool: 'name/getUserBool',
    }),
    setupName: {
      get(){ 
        return this.getName;
      },
      set( value ){ 
        this.$store.commit('name/setName', value);
        this.$store.commit('name/setNameUser');
      }
    }
  },
  watch: {
    $route() {
      if(!this.getUserBool) {
        this.$store.commit('name/nameGenerator');
      }
    }
  },
}
</script>
<style lang="scss" scoped>
.inner {
  // display: flex;
  // justify-content: center;
  position: relative;
  z-index: 10;
  // max-width: 800px;
  // margin: 0 auto;
  text-align: center;
}
.alloy-input-field {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  max-width: 300px;
  display: flex;
  position: absolute;
  z-index: 2000;
  > * {
    margin: 0;
  }
}
.editName {
  position: absolute;
  height: 100%;
  top: 50%;
  transform: translateY(-25%);
  right: -60px;
}
</style>
