<template>
  <div id="app">
    <SideBar />
    <router-view />
  </div>
</template>
<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import SideBar from "@/components/SideBar.vue";
@Component({
  components: {
    SideBar,
  },
})
export default class App extends Vue {}
</script>

<style>
#app {
  display: flex;
  flex-direction: row;
}

h1 {
  padding: 20px;
}

.title {
  text-align: left;
}
a {
  text-decoration: none;
  color: black;
  display: block;
  width: 100%;
  height: 100%;
  text-align: center;
  padding: 10px 0;
}
.router-link-exact-active {
  color: orange;
}
</style>
