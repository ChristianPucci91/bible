import { createRouter, createWebHistory } from 'vue-router'

// Qui carichi le tue viste/pagine
import Home from '/src/views/Home.vue'
import Mantra from '/src/views/Mantra.vue'
import BestPractise from '@/views/BestPractise.vue'
import Tests from '@/views/Tests.vue'
import Handlers from '@/views/Handlers.vue'

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/mantra', name: 'Mantra', component: Mantra },
  { path: '/best-practise', name: 'Best Practise', component: BestPractise },
  { path: '/tests', name: 'Tests', component: Tests },
  { path: '/handlers', name: 'Handlers', component: Handlers }

]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
