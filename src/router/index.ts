import { createRouter, createWebHistory } from 'vue-router'
import Welcome from '@/pages/Welcome.vue'
import DataTypes from '@/pages/DataTypes.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'welcome',
      component: Welcome
    },
    {
      path: '/data-types',
      name: 'dataTypes',
      component: DataTypes
    }
  ]
})

export default router
