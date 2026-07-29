<template>
  <header class="fixed top-0 left-0 w-full z-50 bg-white/90 backdrop-blur-md border-b border-gray-200/50">
    <nav class="max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6 lg:px-8 h-16">
      <router-link to="/" class="flex items-center gap-2.5 no-underline group">
        <span class="flex items-center justify-center w-9 h-9 rounded-xl bg-gradient-to-br from-primary to-secondary text-white shadow-md group-hover:shadow-lg group-hover:scale-105 transition-all duration-300">
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2.5"><path stroke-linecap="round" stroke-linejoin="round" d="M12 8v8m4-4H8"/></svg>
        </span>
        <span class="text-lg font-bold text-accent leading-tight tracking-tight">
          Diagnostic<span class="text-primary">Care</span>
        </span>
      </router-link>

      <button class="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors relative z-[60]" @click="isOpen = true" aria-label="Abrir menú">
        <svg class="w-6 h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"/></svg>
      </button>

      <ul class="hidden lg:flex items-center gap-1">
        <li v-for="link in links" :key="link.path">
          <router-link
            :to="link.path"
            class="px-4 py-2 rounded-xl text-sm font-medium transition-all duration-200 no-underline"
            :class="$route.path === link.path ? 'bg-primary-light text-primary-dark' : 'text-muted hover:text-accent hover:bg-gray-100'"
          >
            {{ link.label }}
          </router-link>
        </li>
        <li>
          <router-link to="/analisis" class="ml-2 inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-sm font-semibold text-white bg-gradient-to-r from-primary to-secondary hover:opacity-90 transition-opacity no-underline shadow-lg shadow-primary/25">
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/></svg>
            Diagnosticar
          </router-link>
        </li>
      </ul>
    </nav>
  </header>

  <div v-if="isOpen" class="fixed inset-0 bg-black/50 z-[60] lg:hidden" @click="isOpen = false"></div>

  <div :class="[
    'fixed top-0 right-0 h-full w-72 bg-white z-[70] shadow-2xl transition-transform duration-300 ease-out lg:hidden',
    isOpen ? 'translate-x-0' : 'translate-x-full'
  ]">
    <div class="flex items-center justify-between p-4 border-b border-gray-100">
      <span class="font-bold text-accent">Menú</span>
      <button class="p-2 rounded-lg hover:bg-gray-100 transition-colors" @click="isOpen = false" aria-label="Cerrar menú">
        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/></svg>
      </button>
    </div>
    <ul class="flex flex-col p-4 gap-1">
      <li v-for="link in links" :key="link.path">
        <router-link
          :to="link.path"
          class="flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-all duration-200 no-underline"
          :class="$route.path === link.path ? 'bg-primary-light text-primary-dark' : 'text-muted hover:text-accent hover:bg-gray-50'"
          @click="isOpen = false"
        >
          <span class="w-5 h-5 flex items-center justify-center" v-html="link.icon"></span>
          {{ link.label }}
        </router-link>
      </li>
      <li class="mt-2 pt-2 border-t border-gray-100">
        <router-link to="/analisis" class="flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-semibold no-underline text-white bg-gradient-to-r from-primary to-secondary hover:opacity-90 transition-opacity" @click="isOpen = false">
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/></svg>
          Comenzar diagnóstico
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const isOpen = ref(false)

const links = [
  { path: '/', label: 'Inicio', icon: '<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.25 12l8.954-8.955a1.126 1.126 0 011.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"/></svg>' },
  { path: '/analisis', label: 'Análisis', icon: '<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5m.75-9l3-3 2.148 2.148A12.061 12.061 0 0116.5 7.605"/></svg>' },
  { path: '/catalogo', label: 'Catálogo', icon: '<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15a2.25 2.25 0 012.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z"/></svg>' },
  { path: '/informacion', label: 'Información', icon: '<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z"/></svg>' },
]
</script>
