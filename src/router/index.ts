import { createRouter, createWebHistory } from 'vue-router'
import PhonicsHome from '../views/PhonicsHome.vue'
import VowelsLearning from '../views/VowelsLearning.vue'
import ConsonantsLearning from '../views/ConsonantsLearning.vue'

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
    // 在路由配置中添加
    {
      path: '/phonics/consonants',
      name: 'consonants',
      component: ConsonantsLearning
    }
  ]
})

export default router