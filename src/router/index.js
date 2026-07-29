import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  { path: '/', name: 'Home', component: () => import('../views/Home.vue') },
  { path: '/analisis', name: 'Analisis', component: () => import('../views/Analisis.vue') },
  { path: '/basico', name: 'Basico', component: () => import('../views/Basico.vue') },
  { path: '/profundo', name: 'Profundo', component: () => import('../views/Profundo.vue') },
  { path: '/catalogo', name: 'Catalogo', component: () => import('../views/Catalogo.vue') },
  { path: '/informacion', name: 'Informacion', component: () => import('../views/Informacion.vue') },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

export default router
