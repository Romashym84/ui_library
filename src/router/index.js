import { createRouter, createWebHistory } from 'vue-router'
import TestView from '@/views/TestView.vue'
import SearchGeoView from '@/views/SearchGeoView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: TestView,
    },
    {
      path: '/',
      name: 'home',
      component: SearchGeoView,
    },
    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (About.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import('../views/AboutView.vue'),
    // },
  ],
})

export default router
