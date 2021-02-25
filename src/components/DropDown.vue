<template>
  <transition>
    <ul v-show="list.isOpen" class="sub-items">
      <li
        class="sub-item"
        v-for="(item, index) in list.subnav"
        :key="'item' + index"
      >
        <div class="title" @click="setItem(item)">
          <router-link
            :to="{
              name: item.title,
              params:
                item.id === 2 ? { bands: item.title } : { id: item.title },
            }"
          >
            {{ item.title }}
          </router-link>
        </div>
        <Dropdown class="subnav" v-if="item.subnav" :list="item" />
      </li>
    </ul>
  </transition>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import { NavigationItem } from "../mockedAPI/interfaces";

@Component({
  name: "Dropdown",
})
export default class DropDown extends Vue {
  @Prop() list?: object[];

  setItem(item: NavigationItem) {
    this.$store.dispatch("getData", item);
  }
}
</script>

<style scoped>
.sub-items {
  list-style: none;
}
.sub-item {
  position: relative;
  color: black;
  cursor: pointer;
}

</style>
