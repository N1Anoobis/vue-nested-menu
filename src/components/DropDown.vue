<template>
  <transition>
    <ul v-show="list.open" class="sub-items">
      <li
        class="sub-item"
        v-for="(item, index) in list.subnav"
        :key="'item' + index"
      >
        <div class="title" @click="item.open = !item.open">
          <router-link :to="{ name: item.title }">
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

@Component({
  name: "Dropdown",
})
export default class DropDown extends Vue {
  @Prop() list?: object[];
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

.title {
  padding: 10px 0;
  text-align: left;
}
</style>
