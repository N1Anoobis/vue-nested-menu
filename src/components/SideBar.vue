<template>
  <div id="sidebar">
    <ul id="navigation">
      <li v-for="(item, index) in navigation" :key="'item' + index">
        <div class="title" @click="item.open = !item.open">
          <router-link :to="item.title">
            {{ item.title }}
          </router-link>
        </div>
        <DropDown v-if="item.subnav" :list="item" />
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import DropDown from "./DropDown.vue";
@Component({
  name: "sidebar",
  components: {
    DropDown,
  },
})
export default class SideBar extends Vue {
  get navigation() {
    return this.$store.getters.navigation;
  }
}
</script>

<style scoped>
#sidebar {
  width: 20vw;
  min-height: 90vh;
  border-right: 1px black solid;
}
#navigation {
  margin: 0;
  padding: 0;
  list-style: none;
}
#navigation li {
  width: 100%;
  cursor: pointer;
  border-bottom: 1px black solid;
}
.title {
  padding: 10px 0;
  text-align: left;
  /* text-indent: -20px; */
}
</style>
