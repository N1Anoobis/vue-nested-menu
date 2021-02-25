<template>
  <div class="sidebar">
    <ul class="navigation">
      <div class="home title" @click="setItem()">
        <router-link :to="{ name: 'Home' }">
          home
        </router-link>
      </div>
      <li v-for="(item, index) in navigation" :key="'item' + index">
        <div class="title" @click="setItem(item)">
          <router-link
            :to="{ name: item.title, params: { idGen: item.title } }"
          >
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
import { NavigationItem } from "../mockedAPI/interfaces";

@Component({
  name: "sidebar",
  components: {
    DropDown,
  },
})
export default class SideBar extends Vue {
  created() {
    this.$store.dispatch("getData");
  }
  get navigation() {
    return this.$store.getters.navigation;
  }

  setItem(item: NavigationItem) {
    this.$store.dispatch("getData", item);
  }
}
</script>

<style scoped>
.home {
  border-bottom: 1px black solid;
}

.sidebar {
  width: 20vw;
  min-height: 90vh;
  border-right: 1px black solid;
}
.navigation {
  margin: 0;
  padding: 0;
  list-style: none;
}
.navigation li {
  width: 100%;
  cursor: pointer;
  border-bottom: 1px black solid;
}

</style>
