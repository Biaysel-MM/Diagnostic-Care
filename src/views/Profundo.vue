<template>
  <div>
    <section class="bg-linear-to-br from-cyan-50 via-blue-50 to-sky-50 py-12 lg:py-16">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div class="flex items-center justify-center gap-3 mb-3">
          <span class="flex items-center justify-center w-10 h-10 rounded-xl bg-linear-to-br from-secondary to-primary text-white shadow-lg shadow-secondary/25">
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z"/></svg>
          </span>
          <h1 class="text-3xl sm:text-4xl lg:text-5xl font-bold text-accent">Análisis Profundo</h1>
        </div>
        <p class="text-muted text-lg max-w-xl mx-auto">Completa el formulario con tus datos para un diagnóstico más preciso</p>
      </div>
    </section>

    <section class="py-12 lg:py-16">
      <div class="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div>
            <div class="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 sm:p-8">
              <form @submit.prevent="submitForm" class="space-y-5">
                <div class="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label class="block text-sm font-semibold text-accent mb-1.5" for="edad">Edad</label>
                    <input id="edad" v-model="formData.edad" type="number" placeholder="Tu edad" class="w-full px-4 py-2.5 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all">
                  </div>
                  <div>
                    <label class="block text-sm font-semibold text-accent mb-1.5" for="genero">Género</label>
                    <select id="genero" v-model="formData.genero" class="w-full px-4 py-2.5 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all bg-white">
                      <option value="masculino">Masculino</option>
                      <option value="femenino">Femenino</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label class="block text-sm font-semibold text-accent mb-2">Síntomas</label>
                  <div class="grid grid-cols-2 sm:grid-cols-3 gap-2">
                    <label v-for="symptom in allSymptoms" :key="symptom.id" class="flex items-center gap-2 px-3 py-2 rounded-lg border border-gray-200 cursor-pointer transition-all text-sm"
                      :class="formData.sintomas.includes(symptom.id) ? 'border-primary bg-primary-light text-primary-dark' : 'hover:border-gray-300'">
                      <input type="checkbox" :value="symptom.id" v-model="formData.sintomas" class="hidden">
                      <span class="w-4 h-4 rounded border-2 flex items-center justify-center shrink-0 transition-colors" :class="formData.sintomas.includes(symptom.id) ? 'bg-primary border-primary' : 'border-gray-300'">
                        <svg v-if="formData.sintomas.includes(symptom.id)" class="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M5 13l4 4L19 7"/></svg>
                      </span>
                      {{ symptom.label }}
                    </label>
                  </div>
                </div>

                <div class="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label class="block text-sm font-semibold text-accent mb-1.5" for="presion">Presión Arterial (mmHg)</label>
                    <input id="presion" v-model="formData.presion" type="text" placeholder="Ej: 120/80" class="w-full px-4 py-2.5 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all">
                  </div>
                  <div>
                    <label class="block text-sm font-semibold text-accent mb-1.5" for="colesterol">Colesterol (mg/dL)</label>
                    <input id="colesterol" v-model="formData.colesterol" type="text" placeholder="Ej: 200" class="w-full px-4 py-2.5 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all">
                  </div>
                </div>

                <div>
                  <label class="block text-sm font-semibold text-accent mb-1.5" for="alergias">Alergias</label>
                  <textarea id="alergias" v-model="formData.alergias" rows="2" placeholder="Describe tus alergias conocidas..." class="w-full px-4 py-2.5 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all resize-none"></textarea>
                </div>

                <div>
                  <label class="block text-sm font-semibold text-accent mb-1.5" for="enfermedades">Enfermedades Crónicas</label>
                  <textarea id="enfermedades" v-model="formData.enfermedades" rows="2" placeholder="Describe enfermedades crónicas que padezcas..." class="w-full px-4 py-2.5 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all resize-none"></textarea>
                </div>

                <button type="submit"
                  class="w-full py-3 rounded-xl text-white font-semibold text-sm transition-all duration-200 disabled:opacity-40 disabled:cursor-not-allowed"
                  :class="formData.sintomas.length ? 'bg-linear-to-r from-secondary to-primary hover:opacity-90 shadow-lg shadow-primary/25' : 'bg-gray-300'"
                  :disabled="!formData.sintomas.length">
                  {{ loading ? 'Analizando...' : 'Enviar Consulta' }}
                </button>
              </form>
            </div>

            <transition name="slide">
              <div v-if="hasDiagnosed" class="mt-8">
                <div v-if="!diagnosisResults.length" class="bg-white rounded-2xl border border-gray-100 shadow-sm p-8 text-center">
                  <div class="w-16 h-16 rounded-full bg-gray-100 flex items-center justify-center mx-auto mb-4">
                    <svg class="w-8 h-8 text-muted" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
                  </div>
                  <h3 class="text-lg font-bold text-accent mb-1">Sin resultados</h3>
                  <p class="text-sm text-muted">No se encontraron coincidencias con los datos ingresados.</p>
                </div>
                <div v-else>
                  <h3 class="text-lg font-bold text-accent mb-4">Resultados del diagnóstico profundo</h3>
                  <div class="space-y-4">
                    <div v-for="(result, index) in diagnosisResults" :key="result.id"
                      class="bg-white rounded-2xl border shadow-sm p-5 transition-all duration-300"
                      :class="index === 0 ? 'border-secondary/30 shadow-secondary/5 ring-1 ring-secondary/10' : 'border-gray-100'">
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
                              <span>Probabilidad</span>
                              <span class="font-semibold" :class="result.matchPercentage >= 70 ? 'text-success' : result.matchPercentage >= 40 ? 'text-warning' : 'text-danger'">{{ result.matchPercentage }}%</span>
                            </div>
                            <div class="h-2 bg-gray-100 rounded-full overflow-hidden">
                              <div class="h-full rounded-full transition-all duration-500" :class="result.matchPercentage >= 70 ? 'bg-success' : result.matchPercentage >= 40 ? 'bg-warning' : 'bg-danger'" :style="{ width: result.matchPercentage + '%' }"></div>
                            </div>
                            <p class="text-xs text-muted mt-1.5">Coinciden {{ result.matchCount }} de {{ result.totalSymptoms }} síntomas</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="flex gap-3 mt-6">
                    <button class="flex-1 py-2.5 rounded-xl border border-gray-200 text-sm font-semibold text-muted hover:bg-gray-50 transition-colors" @click="clearForm">Limpiar</button>
                    <button class="flex-1 py-2.5 rounded-xl bg-accent text-white text-sm font-semibold hover:opacity-90 transition-opacity" @click="submitForm">Repetir</button>
                  </div>
                </div>
              </div>
            </transition>
          </div>
        </div>
    </section>
  </div>
</template>

<script setup>
import { ref, reactive } from 'vue'
import { allSymptoms } from '../data/diseases'
import { profundoDiagnosis } from '../utils/diagnosis'

const formData = reactive({
  edad: '', genero: 'masculino', sintomas: [], presion: '', colesterol: '', alergias: '', enfermedades: '',
})
const diagnosisResults = ref([])
const hasDiagnosed = ref(false)
const loading = ref(false)

function submitForm() {
  if (!formData.sintomas.length) return
  loading.value = true
  setTimeout(() => {
    diagnosisResults.value = profundoDiagnosis(formData)
    hasDiagnosed.value = true
    loading.value = false
  }, 600)
}

function clearForm() {
  formData.edad = ''; formData.genero = 'masculino'; formData.sintomas = []; formData.presion = ''; formData.colesterol = ''; formData.alergias = ''; formData.enfermedades = ''
  diagnosisResults.value = []; hasDiagnosed.value = false
}

function severityClass(severity) {
  return { Leve: 'bg-green-100 text-green-700', Moderada: 'bg-yellow-100 text-yellow-700', Grave: 'bg-red-100 text-red-700', Crónica: 'bg-purple-100 text-purple-700' }[severity] || 'bg-gray-100 text-gray-700'
}
</script>

<style>
.slide-enter-active, .slide-leave-active { transition: all 0.3s ease; }
.slide-enter-from { opacity: 0; transform: translateY(20px); }
.slide-leave-to { opacity: 0; transform: translateY(-10px); }
</style>
