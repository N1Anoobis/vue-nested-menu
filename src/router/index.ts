import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import Home from "../views/Home.vue";
import Pop from "../views/Pop.vue";
import Rock from "../views/Rock.vue";
import RockBand1 from "../views/RockBand1.vue";
import RockBand2 from "../views/RockBand2.vue";
import PopBand1 from "../views/PopBand1.vue";
import PopBand2 from "../views/PopBand2.vue";
import RockGuy1 from "../views/RockGuy1.vue";
import RockGuy2 from "../views/RockGuy2.vue";
import RockGuy3 from "../views/RockGuy3.vue";
import RockGuy4 from "../views/RockGuy4.vue";
import PopGuy1 from "../views/PopGuy1.vue";
import PopGuy2 from "../views/PopGuy2.vue";
import PopGuy3 from "../views/PopGuy3.vue";
import PopGuy4 from "../views/PopGuy4.vue";
Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/pop",
    name: "pop",
    component: Pop,
    children: [
      {
        path: "pop band1",
        name: "pop band1",
        component: PopBand1,
        children: [
          {
            path: ":id",
            name: "pop guy1",
            component: PopGuy1,
          },
          {
            path: ":id",
            name: "pop guy2",
            component: PopGuy2,
          },
        ],
      },
      {
        path: "pop band2",
        name: "pop band2",
        component: PopBand2,
        children: [
          {
            path: ":id",
            name: "pop guy3",
            component: PopGuy3,
          },
          {
            path: ":id",
            name: "pop guy4",
            component: PopGuy4,
          },
        ],
      },
    ],
  },
  {
    path: "/rock",
    name: "rock",
    component: Rock,
    children: [
      {
        path: "rock band1",
        name: "rock band1",
        component: RockBand1,
        children: [
          {
            path: ":id",
            name: "rock guy1",
            component: RockGuy1,
          },
          {
            path: ":id",
            name: "rock guy2",
            component: RockGuy2,
          },
        ],
      },
      {
        path: "rock band2",
        name: "rock band2",
        component: RockBand2,
        children: [
          {
            path: ":id",
            name: "rock guy3",
            component: RockGuy3,
          },
          {
            path: ":id",
            name: "rock guy4",
            component: RockGuy4,
          },
        ],
      },
    ],
  },
];

const router = new VueRouter({
  routes,
});

export default router;
