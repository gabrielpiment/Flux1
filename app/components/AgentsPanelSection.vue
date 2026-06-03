<template>
  <section class="py-24 relative bg-[#0d0f18] overflow-hidden" id="agents-panel">
    <div class="container relative z-10">
      <div class="text-center mb-20" v-motion-fade-visible>
        <h2 class="text-4xl md:text-6xl font-black mb-6 leading-tight">
          Visão Geral da <span class="text-primary-500 bg-clip-text text-transparent bg-gradient-to-r from-primary-400 to-blue-600" style="color: #0072f5;">Equipe</span>
        </h2>
        <p class="text-gray-400 text-lg max-w-2xl mx-auto font-medium">Equilibre a carga de trabalho. Identifique quem está sobrecarregado e transfira atendimentos para estabilizar a fila.</p>
      </div>
      
      <div class="max-w-6xl mx-auto mb-24 flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-16 px-4">
        <!-- Dashboard Simulation -->
        <div class="w-full lg:w-[65%] relative h-[320px] md:h-[400px] flex items-end justify-center pb-10" v-motion-fade-visible>
          <svg class="absolute inset-0 w-full h-full pointer-events-none opacity-20" preserveAspectRatio="none">
            <path d="M 25% 60% Q 50% 30% 75% 60%" fill="none" stroke="currentColor" class="text-white" stroke-width="2" stroke-dasharray="8 8"></path>
          </svg>
          
          <div class="flex items-end justify-center gap-2 md:gap-24 w-full px-2 relative z-10">
            <!-- Ana (Livre) -->
            <div class="relative flex flex-col items-center z-10 w-24 md:w-40 transition-transform duration-500">
              <div class="flex flex-col-reverse gap-1.5 mb-4 md:mb-6 items-center h-[120px] md:h-[140px] justify-start w-full relative">
                <div class="w-10 md:w-12 h-4 md:h-6 bg-green-500/20 border border-green-500/30 rounded-full shadow-[0_0_10px_rgba(34,197,94,0.1)] flex items-center justify-center transition-all duration-300">
                  <div class="w-1.5 h-1.5 bg-green-500/50 rounded-full"></div>
                </div>
                <div class="w-10 md:w-12 h-4 md:h-6 bg-green-500/20 border border-green-500/30 rounded-full shadow-[0_0_10px_rgba(34,197,94,0.1)] flex items-center justify-center transition-all duration-300">
                  <div class="w-1.5 h-1.5 bg-green-500/50 rounded-full"></div>
                </div>
              </div>
              <div class="bg-[#111422]/90 border border-white/10 rounded-2xl md:rounded-3xl p-3 md:p-5 flex flex-col items-center w-full shadow-xl relative backdrop-blur-xl transition-colors duration-500">
                <div class="absolute -top-3 px-2 py-0.5 md:py-1 rounded-full bg-green-500/10 text-green-500 border border-green-500/20 text-[8px] md:text-[10px] font-black uppercase tracking-widest shadow-sm">Livre</div>
                <div class="w-10 h-10 md:w-14 md:h-14 rounded-full bg-green-500/10 border border-green-500/30 text-green-500 flex items-center justify-center font-bold text-sm md:text-xl mb-2 md:mb-3 shadow-[0_0_20px_rgba(34,197,94,0.15)] relative">AC</div>
                <div class="text-xs md:text-sm font-bold text-white text-center">Ana</div>
              </div>
            </div>
            
            <!-- Carlos (Sobrecarga) -->
            <div class="scale-110 relative flex flex-col items-center z-10 w-24 md:w-40 transition-transform duration-1000">
              <div class="flex flex-col-reverse gap-1.5 mb-4 md:mb-6 items-center h-[120px] md:h-[140px] justify-start relative w-full">
                <div v-for="i in 8" :key="i" class="bg-red-500/10 border-red-500/20 w-10 md:w-12 h-4 md:h-6 rounded-full border shadow-sm flex items-center justify-center transition-all duration-300">
                  <div class="bg-red-500 w-1.5 h-1.5 rounded-full" :class="{ 'animate-pulse': i === 8 }"></div>
                </div>
              </div>
              <div class="border-red-500/40 bg-[#111422]/90 border rounded-2xl md:rounded-3xl p-3 md:p-5 flex flex-col items-center w-full shadow-[0_0_40px_rgba(239,68,68,0.2)] relative backdrop-blur-xl transition-all duration-1000 z-20">
                <div class="bg-red-500/20 text-red-500 border border-red-500/40 animate-pulse absolute -top-3 px-2 py-0.5 md:py-1 rounded-full text-[8px] md:text-[10px] font-black uppercase tracking-widest shadow-sm transition-colors duration-500">Sobrecarga</div>
                <div class="bg-red-500/10 border-red-500/40 text-red-500 w-10 h-10 md:w-14 md:h-14 rounded-full border flex items-center justify-center font-bold text-sm md:text-xl mb-2 md:mb-3 relative transition-colors duration-500">CS</div>
                <div class="text-xs md:text-sm font-bold text-white text-center">Carlos</div>
              </div>
            </div>
            
            <!-- Pedro (Estável) -->
            <div class="relative flex flex-col items-center z-10 w-24 md:w-40 transition-transform duration-500">
              <div class="flex flex-col-reverse gap-1.5 mb-4 md:mb-6 items-center h-[120px] md:h-[140px] justify-start w-full relative">
                <div class="w-10 md:w-12 h-4 md:h-6 bg-blue-500/10 border border-blue-500/20 rounded-full flex items-center justify-center transition-all duration-300">
                  <div class="bg-blue-500/50 w-1.5 h-1.5 rounded-full"></div>
                </div>
                <div class="w-10 md:w-12 h-4 md:h-6 bg-blue-500/10 border border-blue-500/20 rounded-full flex items-center justify-center transition-all duration-300">
                  <div class="bg-blue-500/50 w-1.5 h-1.5 rounded-full"></div>
                </div>
                <div class="w-10 md:w-12 h-4 md:h-6 bg-blue-500/10 border border-blue-500/20 rounded-full flex items-center justify-center transition-all duration-300">
                  <div class="bg-blue-500/50 w-1.5 h-1.5 rounded-full"></div>
                </div>
              </div>
              <div class="border-white/10 bg-[#111422]/90 border rounded-2xl md:rounded-3xl p-3 md:p-5 flex flex-col items-center w-full shadow-xl relative backdrop-blur-xl transition-colors duration-500">
                <div class="bg-blue-500/10 text-blue-500 border border-blue-500/20 absolute -top-3 px-2 py-0.5 md:py-1 rounded-full text-[8px] md:text-[10px] font-black uppercase tracking-widest shadow-sm transition-colors duration-500">Estável</div>
                <div class="bg-blue-500/10 border-blue-500/20 text-blue-500 w-10 h-10 md:w-14 md:h-14 rounded-full border flex items-center justify-center font-bold text-sm md:text-xl mb-2 md:mb-3 relative transition-colors duration-500">PS</div>
                <div class="text-xs md:text-sm font-bold text-white text-center">Pedro</div>
              </div>
            </div>
          </div>
        </div>
        
        <!-- Logs Panel -->
        <div class="border-white/10 w-full lg:w-[35%] max-w-[320px] lg:max-w-none mx-auto lg:mx-0 relative z-30 bg-[#0A0C14]/80 border rounded-[2rem] p-5 lg:p-8 transition-all duration-500 shadow-2xl">
          <div class="flex items-center justify-between mb-4 lg:mb-6">
            <div class="flex items-center gap-2">
              <div class="bg-red-500 animate-pulse shadow-[0_0_8px_rgba(239,68,68,0.8)] w-2 h-2 rounded-full"></div>
              <span class="text-[10px] lg:text-xs font-black text-gray-400 uppercase tracking-widest">Logs do Sistema</span>
            </div>
            <span class="text-[10px] lg:text-xs text-gray-500 font-mono">AO VIVO</span>
          </div>
          <div class="space-y-3 lg:space-y-4">
            <div class="text-xs lg:text-sm font-medium bg-red-500/10 text-red-400 px-3 py-2.5 rounded-lg border border-red-500/20">
              ⚠️ Gargalo: Carlos com 8 atendimentos
            </div>
            <div class="text-xs lg:text-sm text-gray-400 px-1">
              <span>Analisando melhor rota...</span>
            </div>
          </div>
        </div>
      </div>
      
      <!-- Cards list -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto" v-motion-fade-visible>
        <div class="bg-white/[0.02] border border-white/5 hover:border-white/10 transition-colors rounded-3xl p-8 text-center">
          <div class="w-14 h-14 mx-auto bg-white/5 text-white rounded-2xl flex items-center justify-center mb-6 border border-white/10">
            <svg class="w-6 h-6 text-gray-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
              <circle cx="12" cy="12" r="3"></circle>
            </svg>
          </div>
          <h3 class="text-xl font-bold text-white mb-3">Visibilidade Total</h3>
          <p class="text-sm text-gray-400 leading-relaxed">Saiba exatamente quem está livre e quem está sobrecarregado apenas batendo o olho no painel.</p>
        </div>
        
        <div class="bg-white/[0.02] border border-white/5 hover:border-primary-500/30 transition-colors rounded-3xl p-8 text-center relative overflow-hidden">
          <div class="absolute inset-0 bg-primary-500/5 opacity-0 hover:opacity-100 transition-opacity duration-500"></div>
          <div class="w-14 h-14 mx-auto bg-primary-500/10 text-primary-500 rounded-2xl flex items-center justify-center mb-6 border border-primary-500/20 relative z-10" style="color: #0072f5; border-color: rgba(0, 114, 245, 0.2); background: rgba(0, 114, 245, 0.1);">
            <svg class="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <polyline points="17 1 21 5 17 9"></polyline>
              <path d="M3 11V9a4 4 0 0 1 4-4h14"></path>
              <polyline points="7 23 3 19 7 15"></polyline>
              <path d="M21 13v2a4 4 0 0 1-4 4H3"></path>
            </svg>
          </div>
          <h3 class="text-xl font-bold text-white mb-3 relative z-10">Distribuição Inteligente</h3>
          <p class="text-sm text-gray-400 leading-relaxed relative z-10">Transfira clientes de um atendente para o outro com apenas um clique e zere o tempo de espera.</p>
        </div>
        
        <div class="bg-white/[0.02] border border-white/5 hover:border-white/10 transition-colors rounded-3xl p-8 text-center">
          <div class="w-14 h-14 mx-auto bg-white/5 text-white rounded-2xl flex items-center justify-center mb-6 border border-white/10">
            <svg class="w-6 h-6 text-gray-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline>
            </svg>
          </div>
          <h3 class="text-xl font-bold text-white mb-3">Monitoramento Ativo</h3>
          <p class="text-sm text-gray-400 leading-relaxed">Avalie o tempo de resposta e garanta que sua equipe não perca vendas por demora no atendimento.</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
// Simple visual team simulator component
</script>
