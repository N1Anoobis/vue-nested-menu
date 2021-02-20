<template>
  <div id="app">
    <SideBar />
    <router-view />
  </div>
</template>
<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
// import HelloWorld from "@/components/HelloWorld.vue"; // @ is an alias to /src SideBar
import SideBar from "@/components/SideBar.vue";
@Component({
  components: {
    // HelloWorld,
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
</style>
