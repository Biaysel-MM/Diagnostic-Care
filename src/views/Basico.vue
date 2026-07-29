<template>
  <div>
    <section class="bg-linear-to-br from-primary-light via-blue-50 to-sky-50 py-12 lg:py-16">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div class="flex items-center justify-center gap-3 mb-3">
          <span class="flex items-center justify-center w-10 h-10 rounded-xl bg-linear-to-br from-primary to-secondary text-white shadow-lg shadow-primary/25">
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"/></svg>
          </span>
          <h1 class="text-3xl sm:text-4xl lg:text-5xl font-bold text-accent">Análisis Básico</h1>
        </div>
        <p class="text-muted text-lg max-w-xl mx-auto">Selecciona tus síntomas y obtén un diagnóstico preliminar al instante</p>
      </div>
    </section>

    <section class="py-12 lg:py-16">
      <div class="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 sm:p-8">
          <div class="mb-6">
            <label class="block text-sm font-semibold text-accent mb-2">Selecciona tus síntomas</label>
            <div class="relative">
              <div
                class="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white text-sm cursor-pointer flex items-center justify-between hover:border-primary/50 transition-colors"
                :class="{ 'ring-2 ring-primary/20 border-primary': isDropdownOpen }"
                @click="toggleDropdown"
              >
                <span :class="selectedSymptoms.length ? 'text-accent' : 'text-muted'">
                  {{ selectedSymptoms.length ? selectedSymptoms.map(s => symptomLabel(s)).join(', ') : 'Haz clic para seleccionar síntomas...' }}
                </span>
                <svg class="w-4 h-4 text-muted transition-transform duration-200" :class="{ 'rotate-180': isDropdownOpen }" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/></svg>
              </div>
              <transition name="dropdown">
                <ul v-if="isDropdownOpen" class="absolute z-50 mt-1 w-full bg-white border border-gray-200 rounded-xl shadow-lg shadow-gray-200/50 overflow-hidden">
                  <li
                    v-for="symptom in availableSymptoms"
                    :key="symptom.id"
                    class="px-4 py-3 text-sm cursor-pointer hover:bg-primary-light hover:text-primary-dark transition-colors flex items-center gap-3"
                    @click="addSymptom(symptom.id)"
                  >
                    <span class="w-2 h-2 rounded-full bg-primary/30"></span>
                    {{ symptom.label }}
                  </li>
                  <li v-if="!availableSymptoms.length" class="px-4 py-3 text-sm text-muted italic text-center">Ya seleccionaste todos los síntomas disponibles</li>
                </ul>
              </transition>
            </div>
          </div>

          <div v-if="selectedSymptoms.length" class="mb-6">
            <label class="block text-sm font-semibold text-accent mb-2">Síntomas seleccionados</label>
            <div class="flex flex-wrap gap-2">
              <span
                v-for="symptom in selectedSymptoms"
                :key="symptom"
                class="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-sm bg-primary-light text-primary-dark font-medium"
              >
                {{ symptomLabel(symptom) }}
                <button class="hover:bg-primary-dark/20 rounded-full p-0.5 transition-colors" @click="removeSymptom(symptom)">
                  <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/></svg>
                </button>
              </span>
            </div>
          </div>

          <button
            class="w-full py-3 rounded-xl text-white font-semibold text-sm transition-all duration-200 disabled:opacity-40 disabled:cursor-not-allowed"
            :class="selectedSymptoms.length ? 'bg-linear-to-r from-primary to-secondary hover:opacity-90 shadow-lg shadow-primary/25' : 'bg-gray-300'"
            :disabled="!selectedSymptoms.length"
            @click="runDiagnosis"
          >
            {{ diagnosisLoading ? 'Analizando...' : 'Diagnosticar' }}
          </button>
        </div>

        <transition name="slide">
          <div v-if="hasDiagnosed" class="mt-8">
            <div v-if="!diagnosisResults.length" class="bg-white rounded-2xl border border-gray-100 shadow-sm p-8 text-center">
              <div class="w-16 h-16 rounded-full bg-gray-100 flex items-center justify-center mx-auto mb-4">
                <svg class="w-8 h-8 text-muted" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
              </div>
              <h3 class="text-lg font-bold text-accent mb-1">Sin resultados</h3>
              <p class="text-sm text-muted">No se encontraron enfermedades que coincidan con los síntomas seleccionados. Intenta con otros síntomas.</p>
            </div>
            <div v-else>
              <h3 class="text-lg font-bold text-accent mb-4">Resultados del diagnóstico</h3>
              <div class="space-y-4">
                <div
                  v-for="(result, index) in diagnosisResults"
                  :key="result.id"
                  class="bg-white rounded-2xl border shadow-sm p-5 transition-all duration-300"
                  :class="index === 0 ? 'border-primary/30 shadow-primary/5 ring-1 ring-primary/10' : 'border-gray-100'"
                >
                  <div class="flex items-start gap-4">
                    <img :src="result.image" :alt="result.name" class="w-14 h-14 rounded-xl object-cover shrink-0">
                    <div class="flex-1 min-w-0">
                      <div class="flex items-center gap-2 mb-1">
                        <h4 class="font-bold text-accent">{{ result.name }}</h4>
                        <span class="text-xs font-medium px-2 py-0.5 rounded-full shrink-0" :class="severityClass(result.severity)">{{ result.severity }}</span>
                      </div>
                      <p class="text-sm text-muted line-clamp-2">{{ result.description }}</p>
                      <div class="mt-3">
                        <div class="flex items-center justify-between text-xs text-muted mb-1">
                          <span>Coincidencia</span>
                          <span class="font-semibold" :class="result.matchPercentage >= 70 ? 'text-success' : result.matchPercentage >= 40 ? 'text-warning' : 'text-danger'">{{ result.matchPercentage }}%</span>
                        </div>
                        <div class="h-2 bg-gray-100 rounded-full overflow-hidden">
                          <div
                            class="h-full rounded-full transition-all duration-500"
                            :class="result.matchPercentage >= 70 ? 'bg-success' : result.matchPercentage >= 40 ? 'bg-warning' : 'bg-danger'"
                            :style="{ width: result.matchPercentage + '%' }"
                          ></div>
                        </div>
                        <p class="text-xs text-muted mt-1.5">Síntomas coincidentes: {{ result.matchCount }} de {{ result.totalSymptoms }}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="flex gap-3 mt-6">
                <button class="flex-1 py-2.5 rounded-xl border border-gray-200 text-sm font-semibold text-muted hover:bg-gray-50 transition-colors" @click="clearAll">Limpiar</button>
                <button class="flex-1 py-2.5 rounded-xl bg-accent text-white text-sm font-semibold hover:opacity-90 transition-opacity" @click="runDiagnosis">Repetir diagnóstico</button>
              </div>
            </div>
          </div>
        </transition>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { allSymptoms } from '../data/diseases'
import { basicDiagnosis } from '../utils/diagnosis'

const isDropdownOpen = ref(false)
const selectedSymptoms = ref([])
const diagnosisResults = ref([])
const hasDiagnosed = ref(false)
const diagnosisLoading = ref(false)

const availableSymptoms = computed(() =>
  allSymptoms.filter(s => !selectedSymptoms.value.includes(s.id))
)

function symptomLabel(id) {
  return allSymptoms.find(s => s.id === id)?.label || id
}

function toggleDropdown() {
  isDropdownOpen.value = !isDropdownOpen.value
}

function addSymptom(id) {
  if (!selectedSymptoms.value.includes(id)) {
    selectedSymptoms.value.push(id)
    hasDiagnosed.value = false
  }
}

function removeSymptom(id) {
  selectedSymptoms.value = selectedSymptoms.value.filter(s => s !== id)
  hasDiagnosed.value = false
}

function runDiagnosis() {
  if (!selectedSymptoms.value.length) return
  diagnosisLoading.value = true
  setTimeout(() => {
    diagnosisResults.value = basicDiagnosis(selectedSymptoms.value)
    hasDiagnosed.value = true
    diagnosisLoading.value = false
    isDropdownOpen.value = false
  }, 600)
}

function clearAll() {
  selectedSymptoms.value = []
  diagnosisResults.value = []
  hasDiagnosed.value = false
}

function severityClass(severity) {
  return {
    Leve: 'bg-green-100 text-green-700',
    Moderada: 'bg-yellow-100 text-yellow-700',
    Grave: 'bg-red-100 text-red-700',
    Crónica: 'bg-purple-100 text-purple-700',
  }[severity] || 'bg-gray-100 text-gray-700'
}
</script>

<style>
.dropdown-enter-active, .dropdown-leave-active { transition: all 0.2s ease; }
.dropdown-enter-from, .dropdown-leave-to { opacity: 0; transform: translateY(-8px); }
.slide-enter-active, .slide-leave-active { transition: all 0.3s ease; }
.slide-enter-from { opacity: 0; transform: translateY(20px); }
.slide-leave-to { opacity: 0; transform: translateY(-10px); }
</style>
