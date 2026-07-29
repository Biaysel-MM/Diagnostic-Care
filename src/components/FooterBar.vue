<template>
  <footer class="bg-accent text-gray-300 pt-24 pb-8">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
        <div class="sm:col-span-2 lg:col-span-1">
          <router-link to="/" class="flex items-center gap-2.5 mb-4 no-underline">
            <span class="flex items-center justify-center w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-secondary text-white shadow-md">
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2.5"><path stroke-linecap="round" stroke-linejoin="round" d="M12 8v8m4-4H8"/></svg>
            </span>
            <span class="text-lg font-bold text-white leading-tight tracking-tight">Diagnostic<span class="text-primary">Care</span></span>
          </router-link>
          <p class="text-sm text-gray-400 leading-relaxed">Combinamos tecnología avanzada y conocimientos médicos para ofrecer diagnósticos preliminares precisos, mejorando el acceso a la atención médica desde casa.</p>
        </div>

        <div>
          <h3 class="text-white font-semibold mb-4">Servicios</h3>
          <ul class="space-y-2.5 text-sm">
            <li v-for="s in servicios" :key="s" class="hover:text-primary transition-colors cursor-pointer">{{ s }}</li>
          </ul>
        </div>

        <div>
          <h3 class="text-white font-semibold mb-4">Importante</h3>
          <ul class="space-y-2.5 text-sm">
            <li v-for="s in importante" :key="s" class="hover:text-primary transition-colors cursor-pointer">{{ s }}</li>
          </ul>
        </div>

        <div>
          <h3 class="text-white font-semibold mb-4">Suscríbete</h3>
          <p class="text-sm text-gray-400 mb-3">Recibe consejos de salud y novedades.</p>
          <div class="flex gap-2">
            <input type="email" placeholder="tu@email.com" class="flex-1 px-3 py-2 rounded-lg bg-gray-800 border border-gray-700 text-white text-sm placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-primary/50">
            <button class="px-4 py-2 rounded-lg bg-gradient-to-r from-primary to-secondary text-white text-sm font-medium hover:opacity-90 transition-opacity cursor-pointer shrink-0">Enviar</button>
          </div>
        </div>
      </div>

      <div class="mt-10 pt-6 border-t border-gray-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-gray-500">
        <p>&copy; 2024 NEUROTRONIX &mdash; Samsung Innovation Campus</p>
        <div class="flex items-center gap-4">
          <a href="#" class="hover:text-primary transition-colors">Privacidad</a>
          <a href="#" class="hover:text-primary transition-colors">Términos</a>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
const servicios = ['Diagnósticos rápidos', 'Análisis avanzado', 'Consulta de enfermedades', 'Registro de síntomas', 'Tratamientos recomendados', 'Integración de recetas']
const importante = ['Seguridad de datos', 'Privacidad', 'Accesibilidad', 'Fiabilidad', 'Innovación médica', 'Soporte técnico']
</script>
