import { createRouter, createWebHistory } from 'vue-router'
import Introduction from '@/pages/Introduction.vue'
import DataTypes from '@/pages/DataTypes.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'introduction',
      component: Introduction
    },
    {
      path: '/data-types',
      name: 'dataTypes',
      component: DataTypes
    }
  ]
})

export default router
