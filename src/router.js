import { createRouter, createWebHistory } from "vue-router";

import Home from './pages/Home.vue';
import ChiSiamo from './pages/ChiSiamo.vue';
import Contatti from './pages/Contatti.vue';
import Error404 from './pages/Error404.vue';


const router = createRouter({
  history: createWebHistory(),
  linkExactActiveClass: 'active',
  routes: [
    {
      path: "/twinsart-ritratti/",
      name: "home",
      component: Home
    },
    {
      path: "/twinsart-ritratti/contatti",
      name: "contatti",
      component: Contatti
    },
    {
      path: "/twinsart-ritratti/chi-siamo",
      name: "chi-siamo",
      component: ChiSiamo
    },

    // {
    //   path: "/project-detail/:slug",
    //   name: "ProjectDetail",
    //   component: ProjectDetail
    // },
    {
      path: '/:pathMatch(.*)*',
      name: 'error-404',
      component: Error404
    }
  ]
});

export { router };