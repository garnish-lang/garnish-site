import { createRouter, createWebHistory } from 'vue-router'
import Introduction from '@/pages/Introduction.vue'
import BasicTypes from '@/pages/BasicTypes.vue'
import Primer from '@/pages/Primer.vue'
import ContainerTypes from '@/pages/ContainerTypes.vue'
import MathOperations from '@/pages/MathOperations.vue'
import Comparisons from '@/pages/Comparisons.vue'
import Logic from '@/pages/Logic.vue'
import Conditionals from '@/pages/Conditionals.vue'
import Bitwise from '@/pages/Bitwise.vue'
import Expressions from '@/pages/Expressions.vue'
import SideEffects from '@/pages/SideEffects.vue'
import Annotations from '@/pages/Annotations.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'introduction',
      component: Introduction
    },
    {
      path: '/primer',
      name: 'primer',
      component: Primer
    },
    {
      path: '/basic-types',
      name: 'basicTypes',
      component: BasicTypes
    },
    {
      path: '/container-types',
      name: 'containerTypes',
      component: ContainerTypes
    },
    {
      path: '/math-ops',
      name: 'mathOps',
      component: MathOperations
    },
    {
      path: '/comparisons',
      name: 'comparisons',
      component: Comparisons
    },
    {
      path: '/logic',
      name: 'logic',
      component: Logic
    },
    {
      path: '/conditionals',
      name: 'conditionals',
      component: Conditionals
    },
    {
      path: '/bitwise',
      name: 'bitwise',
      component: Bitwise
    },
    {
      path: '/expressions',
      name: 'expressions',
      component: Expressions
    },
    {
      path: '/side-effects',
      name: 'sideEffects',
      component: SideEffects
    },
    {
      path: '/annotations',
      name: 'annotations',
      component: Annotations
    }
  ]
})

export default router
