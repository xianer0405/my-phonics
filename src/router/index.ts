import { createRouter, createWebHistory } from 'vue-router'
import PhonicsHome from '../views/PhonicsHome.vue'
import VowelsLearning from '../views/VowelsLearning.vue'
import ConsonantsLearning from '../views/ConsonantsLearning.vue'
import PhonicsBlends from '../views/PhonicsBlends.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: PhonicsHome
    },
    {
      path: '/phonics/vowels',
      name: 'vowels',
      component: VowelsLearning
    },
    {
      path: '/phonics/consonants',
      name: 'consonants',
      component: ConsonantsLearning
    },
    {
      path: '/phonics/blends',
      name: 'blends',
      component: PhonicsBlends
    }
  ]
})

export default router