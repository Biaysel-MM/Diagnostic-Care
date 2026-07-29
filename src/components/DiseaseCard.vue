<template>
  <div class="group [perspective:600px] h-[260px] cursor-pointer">
    <div class="relative w-full h-full [transform-style:preserve-3d] transition-transform duration-500 group-hover:[transform:rotateY(180deg)]">
      <div class="absolute inset-0 rounded-2xl overflow-hidden [backface-visibility:hidden]">
        <img :src="disease.image" :alt="disease.name" class="w-full h-full object-cover">
        <div class="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent pt-12 pb-4 px-4">
          <h3 class="text-white text-lg font-bold">{{ disease.name }}</h3>
        </div>
      </div>
      <div class="absolute inset-0 rounded-2xl overflow-hidden [backface-visibility:hidden] [transform:rotateY(180deg)] bg-gradient-to-br from-accent to-slate-800 p-5 flex flex-col justify-between">
        <div>
          <h3 class="text-white text-lg font-bold mb-2">{{ disease.name }}</h3>
          <p class="text-gray-300 text-sm leading-relaxed">{{ disease.description }}</p>
        </div>
        <div class="flex items-center justify-between gap-2">
          <span class="text-xs font-medium px-2.5 py-1 rounded-full" :class="severityColor">{{ disease.severity }}</span>
          <router-link :to="linkTo" class="no-underline">
            <span class="inline-block px-4 py-1.5 bg-white/20 hover:bg-white/30 text-white text-xs font-semibold rounded-lg backdrop-blur-sm transition-colors">Consultar</span>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  disease: { type: Object, required: true },
  linkTo: { type: String, default: '/analisis' },
})

const severityColor = computed(() => ({
  Leve: 'bg-green-500/20 text-green-300',
  Moderada: 'bg-yellow-500/20 text-yellow-300',
  Grave: 'bg-red-500/20 text-red-300',
  Crónica: 'bg-purple-500/20 text-purple-300',
}[props.disease.severity] || 'bg-gray-500/20 text-gray-300'))
</script>
