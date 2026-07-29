<template>
  <div>
    <section class="relative min-h-[90vh] flex items-center overflow-hidden bg-linear-to-br from-primary-light via-blue-50 to-sky-50">
      <div class="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl"></div>
      <div class="absolute bottom-20 right-10 w-96 h-96 bg-secondary/10 rounded-full blur-3xl"></div>
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24 relative">
        <div class="grid lg:grid-cols-2 gap-12 items-center">
          <div class="text-center lg:text-left">
            <span class="inline-block px-3 py-1 rounded-full bg-primary-light text-primary-dark text-xs font-semibold mb-4">Plataforma de diagnóstico inteligente</span>
            <h1 class="text-4xl sm:text-5xl lg:text-6xl font-bold text-accent leading-tight mb-6">
              Diagnóstico de enfermedades<br>
              <span class="bg-linear-to-r from-primary to-secondary bg-clip-text text-transparent">al alcance de tu mano</span>
            </h1>
            <p class="text-lg sm:text-xl text-muted max-w-xl mx-auto lg:mx-0 mb-8 leading-relaxed">Introduce tus síntomas y recibe un diagnóstico probable en minutos, con información detallada y recomendaciones personalizadas.</p>
            <div class="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start">
              <router-link to="/analisis" class="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-white font-semibold bg-linear-to-r from-primary to-secondary hover:opacity-90 transition-opacity shadow-lg shadow-primary/25 no-underline">
                Empezar diagnóstico
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/></svg>
              </router-link>
              <router-link to="/informacion" class="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-accent font-semibold bg-white border border-gray-200 hover:border-gray-300 hover:bg-gray-50 transition-all no-underline shadow-sm">
                Más información
              </router-link>
            </div>
            <div class="flex items-center gap-6 mt-8 justify-center lg:justify-start text-sm text-muted">
              <span class="flex items-center gap-1.5"><svg class="w-4 h-4 text-success" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/></svg>Rápido</span>
              <span class="flex items-center gap-1.5"><svg class="w-4 h-4 text-success" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/></svg>Preciso</span>
              <span class="flex items-center gap-1.5"><svg class="w-4 h-4 text-success" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/></svg>Seguro</span>
            </div>
          </div>
          <div class="hidden lg:flex justify-center">
            <div class="relative w-96 h-96">
              <div class="absolute inset-0 bg-linear-to-br from-primary/20 to-secondary/20 rounded-full animate-pulse"></div>
              <img :src="img('/Imagenes/img-hero.png')" alt="Diagnóstico médico" class="relative w-full h-full object-contain drop-shadow-2xl">
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="py-16 lg:py-24 bg-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-12">
          <span class="inline-block px-3 py-1 rounded-full bg-primary-light text-primary-dark text-xs font-semibold mb-3">Cómo funciona</span>
          <h2 class="text-3xl sm:text-4xl lg:text-5xl font-bold text-accent mb-4">Dos formas de analizarte</h2>
          <p class="text-muted text-lg max-w-2xl mx-auto">Elige el tipo de análisis que mejor se adapte a tus necesidades</p>
        </div>
        <div class="grid md:grid-cols-2 gap-8">
          <div class="bg-white rounded-2xl p-8 border border-gray-100 hover:border-primary/30 hover:shadow-xl hover:shadow-primary/5 transition-all duration-300 shadow-sm">
            <div class="w-14 h-14 rounded-xl bg-linear-to-br from-primary-light to-sky-50 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
              <img :src="img('/Imagenes/basico.png')" alt="Básico" class="w-7 h-7">
            </div>
            <h3 class="text-xl font-bold text-accent mb-2">Análisis Básico</h3>
            <p class="text-muted text-sm leading-relaxed mb-5">Ingresa tus síntomas de forma rápida y obtén resultados inmediatos con gráficos claros y fáciles de entender.</p>
            <router-link to="/basico" class="inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:text-primary-dark transition-colors no-underline">
              Ir al análisis
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/></svg>
            </router-link>
          </div>
          <div class="bg-white rounded-2xl p-8 border border-gray-100 hover:border-secondary/30 hover:shadow-xl hover:shadow-secondary/5 transition-all duration-300 shadow-sm">
            <div class="w-14 h-14 rounded-xl bg-linear-to-br from-cyan-50 to-sky-50 flex items-center justify-center mb-5 transition-transform duration-300">
              <img :src="img('/Imagenes/profundo.png')" alt="Profundo" class="w-7 h-7">
            </div>
            <h3 class="text-xl font-bold text-accent mb-2">Análisis Profundo</h3>
            <p class="text-muted text-sm leading-relaxed mb-5">Completa un formulario detallado con edad, sexo, presión arterial y más, para un diagnóstico más preciso y personalizado.</p>
            <router-link to="/profundo" class="inline-flex items-center gap-1.5 text-sm font-semibold text-secondary hover:text-cyan-700 transition-colors no-underline">
              Ir al análisis
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/></svg>
            </router-link>
          </div>
        </div>
      </div>
    </section>

    <section class="py-16 lg:py-24 bg-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-12">
          <span class="inline-block px-3 py-1 rounded-full bg-primary-light text-primary-dark text-xs font-semibold mb-3">Enfermedades</span>
          <h2 class="text-3xl sm:text-4xl lg:text-5xl font-bold text-accent mb-4">Enfermedades comunes</h2>
          <p class="text-muted text-lg">Conoce las enfermedades más frecuentes y sus síntomas</p>
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

    <section class="py-16 lg:py-24 bg-accent text-white mb-15">
      <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 class="text-3xl sm:text-4xl font-bold mb-4">¿Listo para empezar?</h2>
        <p class="text-gray-400 text-lg mb-8 max-w-2xl mx-auto">No esperes más. Conoce tu estado de salud de manera rápida y sencilla desde la comodidad de tu hogar.</p>
        <router-link to="/analisis" class="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl text-accent font-bold bg-white hover:bg-gray-100 transition-colors shadow-xl no-underline">
          Comenzar ahora
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/></svg>
        </router-link>
      </div>
    </section>
  </div>
</template>

<script setup>
import { img } from '../utils/paths'
import DiseaseCard from '../components/DiseaseCard.vue'

const diseases = [
  { id: 'resfriado', name: 'Resfriado', image: img('/Imagenes/resfriado.png'), description: 'Infección viral leve que afecta la nariz y garganta. Causa estornudos, congestión y malestar general.', severity: 'Leve' },
  { id: 'gripe', name: 'Gripe', image: img('/Imagenes/gripe.png'), description: 'Infección viral respiratoria con fiebre, escalofríos, dolor muscular y fatiga intensa.', severity: 'Moderada' },
  { id: 'migrana', name: 'Migraña', image: img('/Imagenes/migraña.png'), description: 'Dolor de cabeza intenso y pulsátil, acompañado de náuseas y sensibilidad a la luz.', severity: 'Moderada' },
  { id: 'gastritis', name: 'Gastritis', image: img('/Imagenes/gastritis.png'), description: 'Inflamación del revestimiento del estómago que causa ardor, dolor y náuseas.', severity: 'Moderada' },
  { id: 'asma', name: 'Asma', image: img('/Imagenes/asma.png'), description: 'Enfermedad crónica que inflama las vías respiratorias causando sibilancias y falta de aire.', severity: 'Crónica' },
  { id: 'diabetes', name: 'Diabetes', image: img('/Imagenes/diabetes.png'), description: 'Trastorno metabólico con niveles elevados de glucosa en sangre.', severity: 'Crónica' },
]
</script>
