<template>
  <div>
    <section class="bg-linear-to-br from-surface to-blue-50/50 py-12 lg:py-16">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-8">
          <h1 class="text-3xl sm:text-4xl lg:text-5xl font-bold text-accent mb-3">Catálogo de Enfermedades</h1>
          <p class="text-muted text-lg max-w-xl mx-auto">Explora nuestra base de datos de enfermedades y sus síntomas</p>
        </div>
        <div class="max-w-xl mx-auto">
          <div class="relative">
            <svg class="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/></svg>
            <input v-model="searchQuery" type="search" placeholder="Buscar enfermedades..." class="w-full pl-12 pr-4 py-3 rounded-xl border border-gray-200 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all shadow-sm">
          </div>
        </div>
      </div>
    </section>

    <section class="py-12 lg:py-16">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div v-if="!filteredDiseases.length" class="text-center py-16">
          <div class="w-16 h-16 rounded-full bg-gray-100 flex items-center justify-center mx-auto mb-4">
            <svg class="w-8 h-8 text-muted" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/></svg>
          </div>
          <h3 class="text-lg font-bold text-accent mb-1">Sin resultados</h3>
          <p class="text-sm text-muted">No encontramos enfermedades para "{{ searchQuery }}"</p>
        </div>
        <div v-else class="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <DiseaseCard v-for="d in paginatedDiseases" :key="d.id" :disease="d" />
        </div>

        <div v-if="totalPages > 1" class="flex items-center justify-center gap-2 mt-10">
          <button class="w-9 h-9 rounded-lg border border-gray-200 flex items-center justify-center hover:bg-gray-50 transition-colors disabled:opacity-30 disabled:cursor-not-allowed" :disabled="currentPage <= 1" @click="prevPage">
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"/></svg>
          </button>

          <template v-for="page in displayedPages" :key="page">
            <span v-if="page === '...'" class="w-9 h-9 flex items-center justify-center text-sm text-muted">...</span>
            <button v-else class="w-9 h-9 rounded-lg text-sm font-medium transition-all" :class="currentPage === page ? 'bg-accent text-white shadow-md' : 'border border-gray-200 hover:bg-gray-50'" @click="currentPage = page">{{ page }}</button>
          </template>

          <button class="w-9 h-9 rounded-lg border border-gray-200 flex items-center justify-center hover:bg-gray-50 transition-colors disabled:opacity-30 disabled:cursor-not-allowed" :disabled="currentPage >= totalPages" @click="nextPage">
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/></svg>
          </button>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref, computed, watch } from 'vue'
import { diseases } from '../data/diseases'
import DiseaseCard from '../components/DiseaseCard.vue'

const searchQuery = ref('')
const currentPage = ref(1)
const perPage = 6

const filteredDiseases = computed(() => {
  if (!searchQuery.value.trim()) return diseases
  const q = searchQuery.value.toLowerCase()
  return diseases.filter(d => d.name.toLowerCase().includes(q))
})

const totalPages = computed(() => Math.ceil(filteredDiseases.value.length / perPage))

const paginatedDiseases = computed(() => {
  const start = (currentPage.value - 1) * perPage
  return filteredDiseases.value.slice(start, start + perPage)
})

const displayedPages = computed(() => {
  const total = totalPages.value
  if (total <= 5) return Array.from({ length: total }, (_, i) => i + 1)
  const pages = []
  if (currentPage.value > 2) pages.push(1, '...')
  for (let i = Math.max(1, currentPage.value - 1); i <= Math.min(total, currentPage.value + 1); i++) pages.push(i)
  if (currentPage.value < total - 1) pages.push('...', total)
  return pages
})

watch(searchQuery, () => { currentPage.value = 1 })

function prevPage() { if (currentPage.value > 1) currentPage.value-- }
function nextPage() { if (currentPage.value < totalPages.value) currentPage.value++ }
</script>
