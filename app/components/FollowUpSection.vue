<template>
  <section class="py-16 md:py-24 bg-[#0A0C14] relative overflow-hidden border-t border-white/5" id="follow-up">
    <div class="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-[0.02]"></div>
    <div class="w-full max-w-7xl mx-auto px-4 relative z-10">
      <div class="text-center max-w-3xl mx-auto mb-12 md:mb-20" v-motion-fade-visible>
        <span class="text-primary font-black text-[10px] md:text-xs uppercase tracking-widest mb-3 block" style="color: #0072f5;">Esteira de Retenção</span>
        <h2 class="text-3xl md:text-5xl font-black text-white mb-4 md:mb-6 tracking-tight leading-tight">
          Recuperação de leads no <br class="hidden md:block">
          <span class="text-gradient">piloto automático</span>
        </h2>
        <p class="text-gray-400 text-base md:text-lg max-w-2xl mx-auto hidden md:block">
          Crie uma esteira inteligente. O sistema cobra, acompanha e nutre seus clientes nos momentos exatos, até eles responderem sozinhos.
        </p>
      </div>
      
      <div class="max-w-6xl mx-auto relative h-[200px] md:h-[150px]">
        <div class="w-full h-full relative px-2 md:px-10">
          <!-- Timeline Bar -->
          <div class="absolute left-6 md:left-10 md:right-10 top-1/2 -translate-y-1/2 w-full md:w-auto h-[2px] bg-white/10 rounded-full">
            <!-- Progress Fill -->
            <div class="track-fill absolute left-0 top-0 h-full bg-primary" :style="{ width: progress + '%', background: '#0072f5', boxShadow: '0 0 15px rgba(0,114,245,0.8)' }"></div>
            
            <!-- Pulsing Orb -->
            <div class="pulse-orb absolute top-1/2 -translate-y-1/2 bg-[#0A0C14] border-[3px] border-primary-400 rounded-full shadow-[0_0_20px_rgba(0,114,245,0.8)] z-20 flex items-center justify-center w-5 h-5 md:w-6 md:h-6" :style="{ left: progress + '%', border: '3px solid #00b3ff' }">
              <div class="w-1.5 h-1.5 md:w-2 md:h-2 bg-white rounded-full"></div>
            </div>
            
            <!-- Node 0: Imediato -->
            <div class="node-pos absolute left-0 top-1/2 -translate-y-1/2">
              <div class="border-white/20 absolute w-4 h-4 md:w-4 md:h-4 -ml-[8px] -mt-[8px] rounded-full border-2 bg-[#0A0C14] z-10" :class="{ 'border-primary': progress >= 0 }"></div>
              <div class="absolute top-6 left-0 -translate-x-1/2 text-[10px] font-black uppercase tracking-widest whitespace-nowrap" :style="{ color: progress >= 0 ? '#0072f5' : '#64748b' }">Imediato</div>
            </div>
            
            <!-- Node 1: 2 Horas -->
            <div class="node-pos absolute left-[33.33%] top-1/2 -translate-y-1/2">
              <div class="border-white/20 absolute w-4 h-4 md:w-4 md:h-4 -ml-[8px] -mt-[8px] rounded-full border-2 bg-[#0A0C14] z-10" :class="{ 'border-primary': progress >= 33.33 }"></div>
              <div class="absolute -top-8 left-0 -translate-x-1/2 text-[10px] font-black uppercase tracking-widest whitespace-nowrap" :style="{ color: progress >= 33.33 ? '#0072f5' : '#64748b' }">2 Horas</div>
            </div>
            
            <!-- Node 2: Dia 3 -->
            <div class="node-pos absolute left-[66.66%] top-1/2 -translate-y-1/2">
              <div class="border-white/20 absolute w-4 h-4 md:w-4 md:h-4 -ml-[8px] -mt-[8px] rounded-full border-2 bg-[#0A0C14] z-10" :class="{ 'border-primary': progress >= 66.66 }"></div>
              <div class="absolute top-6 left-0 -translate-x-1/2 text-[10px] font-black uppercase tracking-widest whitespace-nowrap" :style="{ color: progress >= 66.66 ? '#0072f5' : '#64748b' }">Dia 3</div>
            </div>
            
            <!-- Node 3: Dia 5 -->
            <div class="node-pos absolute left-full top-1/2 -translate-y-1/2">
              <div class="border-white/20 absolute w-5 h-5 -ml-[10px] -mt-[10px] rounded-full border-[3px] bg-[#0A0C14] z-10 flex items-center justify-center" :class="{ 'border-primary': progress >= 99 }"></div>
              <div class="absolute -top-8 left-0 -translate-x-1/2 text-[10px] font-black uppercase tracking-widest whitespace-nowrap" :style="{ color: progress >= 99 ? '#0072f5' : '#64748b' }">Dia 5</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

const progress = ref(0)
let intervalId: any = null

onMounted(() => {
  intervalId = setInterval(() => {
    if (progress.value >= 100) {
      progress.value = 0
    } else {
      progress.value += 1
    }
  }, 100)
})

onUnmounted(() => {
  if (intervalId) clearInterval(intervalId)
})
</script>

<style scoped>
.node-pos {
  transition: all 0.3s ease;
}
.track-fill {
  transition: width 0.1s linear;
}
.pulse-orb {
  transition: left 0.1s linear;
}
.border-primary {
  border-color: #0072f5 !important;
  box-shadow: 0 0 10px #0072f5;
}
</style>
