import { createRouter, createWebHistory } from 'vue-router'

// Qui carichi le tue viste/pagine
import Home from '/src/views/Home.vue'
import About from '/src/views/About.vue'
import BestPractise from '@/views/BestPractise.vue'

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/about', name: 'About', component: About },
  { path: '/best-practise', name: 'Best Practise', component: BestPractise }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
