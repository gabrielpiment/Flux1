<template>
  <section class="py-24 relative bg-[#0d0f18]" id="channels-section">
    <div class="container relative z-10">
      <div class="grid lg:grid-cols-2 gap-12 items-center">
        <!-- Text Info -->
        <div class="text-left" v-motion-fade-visible>
          <h2 class="text-4xl md:text-6xl font-black mb-6 leading-tight">
            Conecte os canais favoritos<br>
            <span class="text-primary-500 bg-clip-text text-transparent bg-gradient-to-r from-primary-400 to-blue-600" style="color: #0072f5;">dos seus clientes</span>
          </h2>
          <p class="text-gray-400 text-lg md:text-xl max-w-xl font-medium mb-8">
            Seu público interage com múltiplos canais. O Legendary unifica toda a jornada em uma única interface inteligente, permitindo que você atenda a todos de forma centralizada.
          </p>
          <div class="space-y-4">
            <div class="flex items-center gap-3 text-gray-300">
              <div class="w-5 h-5 rounded-full bg-primary-500/20 flex items-center justify-center" style="background: rgba(0, 114, 245, 0.2);">
                <svg class="w-3 h-3 text-primary-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" style="color: #0072f5;">
                  <path d="M20 6L9 17l-5-5"></path>
                </svg>
              </div>
              <span class="font-medium">Unificação em tempo real</span>
            </div>
            <div class="flex items-center gap-3 text-gray-300">
              <div class="w-5 h-5 rounded-full bg-primary-500/20 flex items-center justify-center" style="background: rgba(0, 114, 245, 0.2);">
                <svg class="w-3 h-3 text-primary-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" style="color: #0072f5;">
                  <path d="M20 6L9 17l-5-5"></path>
                </svg>
              </div>
              <span class="font-medium">Fila única de atendimento</span>
            </div>
            <div class="flex items-center gap-3 text-gray-300">
              <div class="w-5 h-5 rounded-full bg-primary-500/20 flex items-center justify-center" style="background: rgba(0, 114, 245, 0.2);">
                <svg class="w-3 h-3 text-primary-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" style="color: #0072f5;">
                  <path d="M20 6L9 17l-5-5"></path>
                </svg>
              </div>
              <span class="font-medium">Histórico multicanal</span>
            </div>
          </div>
        </div>

        <!-- Channels Grid / Visuals -->
        <div class="relative" v-motion-fade-visible>
          <div class="flex justify-center mb-2">
            <img src="/images/logo.png" alt="Legendary" class="w-24 h-24 object-contain">
          </div>
          <div class="relative h-[80px] max-w-xl mx-auto overflow-visible">
            <svg class="w-full h-full overflow-visible" viewBox="0 0 400 80" preserveAspectRatio="none">
              <defs>
                <linearGradient id="lineGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stop-color="rgba(255,255,255,0.05)"></stop>
                  <stop offset="100%" stop-color="rgba(255,255,255,0.2)"></stop>
                </linearGradient>
                <linearGradient id="activeGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stop-color="rgba(0,114,245,0.1)"></stop>
                  <stop offset="100%" stop-color="rgba(0,114,245,1)"></stop>
                </linearGradient>
              </defs>
              <line x1="200" y1="0" x2="200" y2="20" stroke="rgba(255,255,255,0.1)" stroke-width="1.5"></line>
              <path d="M 200 20 Q 200 45 50 45 L 50 80" fill="none" stroke="url(#activeGradient)" stroke-width="2" class="animate-pulse"></path>
              <path d="M 200 20 Q 200 45 150 45 L 150 80" fill="none" stroke="url(#lineGradient)" stroke-width="1"></path>
              <path d="M 200 20 Q 200 45 250 45 L 250 80" fill="none" stroke="url(#lineGradient)" stroke-width="1"></path>
              <path d="M 200 20 Q 200 45 350 45 L 350 80" fill="none" stroke="url(#lineGradient)" stroke-width="1"></path>
            </svg>
          </div>
          
          <div class="grid grid-cols-4 gap-y-8 gap-x-4 max-w-xl mx-auto relative z-20">
            <div class="channel-app channel-app--active group cursor-pointer flex flex-col items-center gap-2.5">
              <div class="border-primary-500/40 shadow-lg shadow-primary-500/10 scale-110 w-14 h-14 rounded-2xl bg-[#111422] border flex items-center justify-center p-3 transition-all duration-300" style="border-color: rgba(0, 114, 245, 0.4);">
                <img src="https://upload.wikimedia.org/wikipedia/commons/e/e7/Instagram_logo_2016.svg" alt="Instagram" class="w-full h-full object-contain">
              </div>
              <span class="text-white text-[10px] font-semibold text-center leading-tight">Instagram</span>
            </div>

            <div class="channel-app group cursor-pointer flex flex-col items-center gap-2.5">
              <div class="border-white/10 w-14 h-14 rounded-2xl bg-[#111422] border flex items-center justify-center p-3 transition-all duration-300">
                <img src="https://upload.wikimedia.org/wikipedia/commons/6/6c/Facebook_Logo_2023.png" alt="Facebook" class="w-full h-full object-contain">
              </div>
              <span class="text-gray-500 group-hover:text-gray-300 text-[10px] font-semibold text-center leading-tight">Facebook</span>
            </div>

            <div class="channel-app group cursor-pointer flex flex-col items-center gap-2.5">
              <div class="border-white/10 w-14 h-14 rounded-2xl bg-[#111422] border flex items-center justify-center p-3 transition-all duration-300">
                <img src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" alt="WhatsApp Oficial" class="w-full h-full object-contain">
              </div>
              <span class="text-gray-500 group-hover:text-gray-300 text-[10px] font-semibold text-center leading-tight">WhatsApp Oficial</span>
            </div>

            <div class="channel-app group cursor-pointer flex flex-col items-center gap-2.5">
              <div class="border-white/10 w-14 h-14 rounded-2xl bg-[#111422] border flex items-center justify-center p-3 transition-all duration-300">
                <img src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" alt="WhatsApp Multi" class="w-full h-full object-contain">
              </div>
              <span class="text-gray-500 group-hover:text-gray-300 text-[10px] font-semibold text-center leading-tight">WhatsApp Multi</span>
            </div>

            <div class="channel-app group cursor-pointer flex flex-col items-center gap-2.5">
              <div class="border-white/10 w-14 h-14 rounded-2xl bg-[#111422] border flex items-center justify-center p-3 transition-all duration-300">
                <img src="https://cdn-icons-png.flaticon.com/512/1041/1041916.png" alt="Webchat" class="w-full h-full object-contain">
              </div>
              <span class="text-gray-500 group-hover:text-gray-300 text-[10px] font-semibold text-center leading-tight">Webchat</span>
            </div>

            <div class="channel-app group cursor-pointer flex flex-col items-center gap-2.5">
              <div class="border-white/10 w-14 h-14 rounded-2xl bg-[#111422] border flex items-center justify-center p-3 transition-all duration-300">
                <img src="https://cdn-icons-png.flaticon.com/512/1041/1041916.png" alt="Webchat + Ligação" class="w-full h-full object-contain">
              </div>
              <span class="text-gray-500 group-hover:text-gray-300 text-[10px] font-semibold text-center leading-tight">Webchat + Ligação</span>
            </div>

            <div class="channel-app group cursor-pointer flex flex-col items-center gap-2.5">
              <div class="border-white/10 w-14 h-14 rounded-2xl bg-[#111422] border flex items-center justify-center p-3 transition-all duration-300">
                <img src="https://upload.wikimedia.org/wikipedia/commons/8/82/Telegram_logo.svg" alt="Telegram" class="w-full h-full object-contain">
              </div>
              <span class="text-gray-500 group-hover:text-gray-300 text-[10px] font-semibold text-center leading-tight">Telegram</span>
            </div>

            <div class="channel-app group cursor-pointer flex flex-col items-center gap-2.5">
              <div class="border-white/10 w-14 h-14 rounded-2xl bg-[#111422] border flex items-center justify-center p-3 transition-all duration-300">
                <img src="https://cdn-icons-png.flaticon.com/512/732/732200.png" alt="Email" class="w-full h-full object-contain">
              </div>
              <span class="text-gray-500 group-hover:text-gray-300 text-[10px] font-semibold text-center leading-tight">Email</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
// Centralized channels panel matching production
</script>

<style scoped>
.channels-section {
  padding: 120px 0;
  position: relative;
  background: #0d0f18;
}

.container {
  margin: 0 auto;
  max-width: 1400px;
  padding: 0 40px;
}
</style>
