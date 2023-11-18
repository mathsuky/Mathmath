import { createRouter, createWebHistory } from 'vue-router'
const HomeView = () => import('../views/HomeView.vue')
const AboutView = () => import('../views/AboutView.vue')
const ProblemView = () => import('../views/ProblemView.vue')
const CreateProblemView = () => import('../views/CreateProblemView.vue')

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      component: AboutView
    },
    {
      path: '/problem/:id',
      name: 'problem',
      component: ProblemView
    },
    {
      path: '/createproblem',
      name: 'create',
      component: CreateProblemView
    }
  ]
})

export default router
