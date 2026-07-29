<template>
  <div>
    <section class="relative overflow-hidden bg-linear-to-br from-primary-light via-blue-50 to-sky-50">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
        <div class="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <span class="inline-block px-3 py-1 rounded-full bg-primary-light text-primary-dark text-xs font-semibold mb-3">Información</span>
            <h1 class="text-3xl sm:text-4xl lg:text-5xl font-bold text-accent leading-tight mb-4">Recibe un pronóstico básico de enfermedades en segundos</h1>
            <p class="text-muted text-lg mb-6">Nuestro sistema analiza tus síntomas y te proporciona información útil para comprender mejor tu estado de salud.</p>
            <router-link to="/analisis" class="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-white font-semibold bg-linear-to-r from-primary to-secondary hover:opacity-90 transition-opacity shadow-lg shadow-primary/25 no-underline">
              Recibir diagnóstico
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/></svg>
            </router-link>
          </div>
          <div class="relative h-64 lg:h-80 rounded-2xl overflow-hidden shadow-xl">
            <div class="absolute inset-0 bg-linear-to-tr from-primary/20 to-secondary/20"></div>
            <div class="flex h-full transition-transform duration-500 ease-in-out" :style="{ transform: `translateX(-${(currentSlide - 1) * 100}%)` }">
              <div v-for="(slide, i) in slides" :key="i" class="min-w-full h-full bg-cover bg-center" :style="{ backgroundImage: `url(${slide})` }"></div>
            </div>
            <div class="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
              <button v-for="n in 3" :key="n" class="w-2.5 h-2.5 rounded-full transition-all duration-300" :class="currentSlide === n ? 'bg-primary w-8' : 'bg-gray-400/60 hover:bg-gray-400'" @click="currentSlide = n"></button>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="py-16 lg:py-24 bg-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-10">
          <h2 class="text-3xl sm:text-4xl font-bold text-accent mb-3">Enfermedades comunes de la temporada</h2>
          <p class="text-muted text-lg">Conoce las enfermedades más frecuentes y cómo identificarlas</p>
        </div>
        <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <DiseaseCard v-for="d in diseases" :key="d.id" :disease="d" />
        </div>
        <div class="text-center mt-8">
          <router-link to="/catalogo" class="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-primary-dark transition-colors no-underline">
            Ver catálogo completo
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/></svg>
          </router-link>
        </div>
      </div>
    </section>

    <section class="py-16 lg:py-24 bg-surface">
      <div class="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div class="bg-white rounded-2xl border border-gray-100 shadow-sm p-8 sm:p-12">
          <div class="w-16 h-16 rounded-2xl bg-linear-to-br from-primary-light to-blue-50 flex items-center justify-center mx-auto mb-6">
            <svg class="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"/></svg>
          </div>
          <h2 class="text-2xl sm:text-3xl font-bold text-accent mb-3">Recomendaciones y consejos</h2>
          <p class="text-muted mb-6">Valoramos tus comentarios. Comparte tus recomendaciones para seguir mejorando.</p>
          <form @submit.prevent="submitRecommendation" class="space-y-4">
            <textarea v-model="recommendation" rows="4" placeholder="Escribe tus recomendaciones aquí..." class="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all resize-none"></textarea>
            <button type="submit" class="w-full sm:w-auto px-8 py-3 rounded-xl text-white font-semibold bg-linear-to-r from-primary to-secondary hover:opacity-90 transition-opacity shadow-lg shadow-primary/25 cursor-pointer disabled:opacity-50" :disabled="!recommendation.trim()">Enviar recomendación</button>
          </form>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { img } from '../utils/paths'
import DiseaseCard from '../components/DiseaseCard.vue'

const currentSlide = ref(1)
const recommendation = ref('')
const slides = [img('/Imagenes/analisis-1.png'), img('/Imagenes/analisis-2.jpg'), img('/Imagenes/analisis-3.jpg')]

setInterval(() => {
  currentSlide.value = currentSlide.value >= 3 ? 1 : currentSlide.value + 1
}, 5000)

const diseases = [
  { id: 'resfriado', name: 'Resfriado', image: img('/Imagenes/resfriado.png'), description: 'Infección viral leve que afecta la nariz y la garganta. Causa estornudos, congestión y malestar general.', severity: 'Leve' },
  { id: 'gripe', name: 'Gripe', image: img('/Imagenes/gripe.png'), description: 'Infección viral respiratoria que causa fiebre, escalofríos, dolor muscular y fatiga intensa.', severity: 'Moderada' },
  { id: 'migrana', name: 'Migraña', image: img('/Imagenes/migraña.png'), description: 'Dolor de cabeza intenso y pulsátil acompañado de náuseas y sensibilidad a la luz y al sonido.', severity: 'Moderada' },
  { id: 'gastritis', name: 'Gastritis', image: img('/Imagenes/gastritis.png'), description: 'Inflamación del revestimiento del estómago que causa ardor, dolor abdominal y náuseas.', severity: 'Moderada' },
  { id: 'asma', name: 'Asma', image: img('/Imagenes/asma.png'), description: 'Enfermedad crónica que inflama las vías respiratorias causando sibilancias y dificultad para respirar.', severity: 'Crónica' },
  { id: 'diabetes', name: 'Diabetes', image: img('/Imagenes/diabetes.png'), description: 'Trastorno metabólico caracterizado por niveles elevados de glucosa en sangre.', severity: 'Crónica' },
]

function submitRecommendation() {
  if (recommendation.value.trim()) {
    alert('Gracias por tu recomendación. Ha sido enviada exitosamente.')
    recommendation.value = ''
  }
}
</script>
