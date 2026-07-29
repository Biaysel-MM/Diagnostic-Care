<template>
  <div>
    <section class="bg-linear-to-br from-surface to-blue-50/50">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <div class="text-center mb-12">
          <span class="inline-block px-3 py-1 rounded-full bg-primary-light text-primary-dark text-xs font-semibold mb-3">Diagnóstico</span>
          <h1 class="text-3xl sm:text-4xl lg:text-5xl font-bold text-accent mb-4">Elige tu tipo de análisis</h1>
          <p class="text-muted text-lg max-w-2xl mx-auto">Selecciona la opción que mejor se adapte a lo que necesitas</p>
        </div>
        <div class="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <router-link to="/basico" class="group no-underline">
            <div class="relative bg-white rounded-2xl border border-gray-100 p-8 lg:p-10 hover:border-primary/30 hover:shadow-2xl hover:shadow-primary/10 transition-all duration-300 overflow-hidden">
              <div class="absolute top-0 right-0 w-32 h-32 bg-primary-light rounded-bl-full -mr-10 -mt-10 opacity-50"></div>
              <div class="relative">
                <div class="w-16 h-16 rounded-2xl bg-linear-to-br from-primary-light to-blue-50 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <img src="/Imagenes/basico.png" alt="Básico" class="w-8 h-8">
                </div>
                <h2 class="text-2xl font-bold text-accent mb-3">Análisis Básico</h2>
                <p class="text-muted text-sm leading-relaxed mb-6">Ingresa tus síntomas de forma sencilla y obtén resultados inmediatos. Ideal para consultas rápidas.</p>
                <ul class="space-y-2 text-sm text-muted mb-6">
                  <li class="flex items-center gap-2"><svg class="w-4 h-4 text-success shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/></svg>Selección rápida de síntomas</li>
                  <li class="flex items-center gap-2"><svg class="w-4 h-4 text-success shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/></svg>Resultados al instante</li>
                  <li class="flex items-center gap-2"><svg class="w-4 h-4 text-success shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/></svg>Sin registro necesario</li>
                </ul>
                <span class="inline-flex items-center gap-2 text-primary font-semibold text-sm group-hover:gap-3 transition-all">
                  Ir al análisis básico
                  <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/></svg>
                </span>
              </div>
            </div>
          </router-link>

          <router-link to="/profundo" class="group no-underline">
            <div class="relative bg-white rounded-2xl border border-gray-100 p-8 lg:p-10 hover:border-secondary/30 hover:shadow-2xl hover:shadow-secondary/10 transition-all duration-300 overflow-hidden">
              <div class="absolute top-0 right-0 w-32 h-32 bg-cyan-50 rounded-bl-full -mr-10 -mt-10 opacity-50"></div>
              <div class="relative">
                <div class="w-16 h-16 rounded-2xl bg-linear-to-br from-cyan-50 to-blue-50 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <img src="/Imagenes/profundo.png" alt="Profundo" class="w-8 h-8">
                </div>
                <h2 class="text-2xl font-bold text-accent mb-3">Análisis Profundo</h2>
                <p class="text-muted text-sm leading-relaxed mb-6">Formulario detallado con información completa para un diagnóstico más preciso y personalizado.</p>
                <ul class="space-y-2 text-sm text-muted mb-6">
                  <li class="flex items-center gap-2"><svg class="w-4 h-4 text-success shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/></svg>Datos personales y médicos</li>
                  <li class="flex items-center gap-2"><svg class="w-4 h-4 text-success shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/></svg>Análisis por edad y género</li>
                  <li class="flex items-center gap-2"><svg class="w-4 h-4 text-success shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/></svg>Resultados personalizados</li>
                </ul>
                <span class="inline-flex items-center gap-2 text-secondary font-semibold text-sm group-hover:gap-3 transition-all">
                  Ir al análisis profundo
                  <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/></svg>
                </span>
              </div>
            </div>
          </router-link>
        </div>
      </div>
    </section>
  </div>
</template>
