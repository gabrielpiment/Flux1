<template>
  <section class="channels-section" id="channels-section">
    <div class="container relative z-10">
      <div class="grid-container">
        
        <!-- Text Info -->
        <div class="text-left" v-motion-fade-visible>
          <h2>
            Conecte os canais favoritos<br>
            <span class="gradient-text">dos seus clientes</span>
          </h2>
          <p class="text-gray-400 text-lg mb-8">
            Seu público interage com múltiplos canais. O Legendary unifica toda a jornada em uma única interface inteligente, permitindo que você atenda a todos de forma centralizada.
          </p>
          <div class="space-y-4">
            <div class="flex items-center gap-3 text-gray-300">
              <div class="w-5 h-5 rounded-full bg-blue-glow flex items-center justify-center">
                <svg class="check-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3">
                  <path d="M20 6L9 17l-5-5"></path>
                </svg>
              </div>
              <span class="font-medium">Unificação em tempo real</span>
            </div>
            <div class="flex items-center gap-3 text-gray-300">
              <div class="w-5 h-5 rounded-full bg-blue-glow flex items-center justify-center">
                <svg class="check-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3">
                  <path d="M20 6L9 17l-5-5"></path>
                </svg>
              </div>
              <span class="font-medium">Fila única de atendimento</span>
            </div>
            <div class="flex items-center gap-3 text-gray-300">
              <div class="w-5 h-5 rounded-full bg-blue-glow flex items-center justify-center">
                <svg class="check-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3">
                  <path d="M20 6L9 17l-5-5"></path>
                </svg>
              </div>
              <span class="font-medium">Histórico multicanal</span>
            </div>
          </div>
        </div>

        <!-- Channels Grid / Visuals -->
        <div class="visuals-side" v-motion-fade-visible>
          <div class="center-logo-wrap">
            <img src="/images/logo.png" alt="Legendary" class="w-24 h-24 object-contain">
          </div>
          
          <div class="svg-lines-container">
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
          
          <div class="apps-grid">
            <div class="channel-app channel-app--active">
              <div class="app-icon-box">
                <img src="https://upload.wikimedia.org/wikipedia/commons/e/e7/Instagram_logo_2016.svg" alt="Instagram" class="w-full h-full object-contain">
              </div>
              <span class="text-white text-[10px] font-semibold text-center leading-tight">Instagram</span>
            </div>

            <div class="channel-app">
              <div class="app-icon-box">
                <img src="https://upload.wikimedia.org/wikipedia/commons/6/6c/Facebook_Logo_2023.png" alt="Facebook" class="w-full h-full object-contain">
              </div>
              <span class="text-gray-500 text-[10px] font-semibold text-center leading-tight">Facebook</span>
            </div>

            <div class="channel-app">
              <div class="app-icon-box">
                <img src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" alt="WhatsApp Oficial" class="w-full h-full object-contain">
              </div>
              <span class="text-gray-500 text-[10px] font-semibold text-center leading-tight">WhatsApp Oficial</span>
            </div>

            <div class="channel-app">
              <div class="app-icon-box">
                <img src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" alt="WhatsApp Multi" class="w-full h-full object-contain">
              </div>
              <span class="text-gray-500 text-[10px] font-semibold text-center leading-tight">WhatsApp Multi</span>
            </div>

            <div class="channel-app">
              <div class="app-icon-box">
                <img src="https://cdn-icons-png.flaticon.com/512/1041/1041916.png" alt="Webchat" class="w-full h-full object-contain">
              </div>
              <span class="text-gray-500 text-[10px] font-semibold text-center leading-tight">Webchat</span>
            </div>

            <div class="channel-app">
              <div class="app-icon-box">
                <img src="https://cdn-icons-png.flaticon.com/512/1041/1041916.png" alt="Webchat + Ligação" class="w-full h-full object-contain">
              </div>
              <span class="text-gray-500 text-[10px] font-semibold text-center leading-tight">Webchat + Ligação</span>
            </div>

            <div class="channel-app">
              <div class="app-icon-box">
                <img src="https://upload.wikimedia.org/wikipedia/commons/8/82/Telegram_logo.svg" alt="Telegram" class="w-full h-full object-contain">
              </div>
              <span class="text-gray-500 text-[10px] font-semibold text-center leading-tight">Telegram</span>
            </div>

            <div class="channel-app">
              <div class="app-icon-box">
                <img src="https://cdn-icons-png.flaticon.com/512/732/732200.png" alt="Email" class="w-full h-full object-contain">
              </div>
              <span class="text-gray-500 text-[10px] font-semibold text-center leading-tight">Email</span>
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
  padding: 96px 0;
  position: relative;
  background: #0d0f18;
}

.container {
  margin: 0 auto;
  max-width: 1200px;
  padding: 0 20px;
}

.grid-container {
  display: grid;
  grid-template-columns: 1fr;
  gap: 48px;
  align-items: center;
}
@media (min-width: 1024px) {
  .grid-container {
    grid-template-columns: 1fr 1fr;
  }
}

/* Typography and text side */
.text-left h2 {
  font-size: clamp(2rem, 5vw, 3.2rem);
  font-weight: 900;
  line-height: 1.15;
  margin-bottom: 24px;
  color: #fff;
}

.gradient-text {
  background: linear-gradient(135deg, #0072f5, #00b3ff);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.text-gray-400 {
  color: #94a3b8;
}
.text-lg {
  font-size: 1.1rem;
  line-height: 1.6;
}
.mb-8 {
  margin-bottom: 32px;
}

.space-y-4 > * + * {
  margin-top: 16px;
}

.flex {
  display: flex;
}
.items-center {
  align-items: center;
}
.gap-3 {
  gap: 12px;
}
.text-gray-300 {
  color: #cbd5e1;
}
.font-medium {
  font-weight: 600;
}
.w-5 { width: 20px; }
.h-5 { height: 20px; }
.rounded-full { border-radius: 50%; }

.bg-blue-glow {
  background: rgba(0, 114, 245, 0.15);
  border: 1px solid rgba(0, 114, 245, 0.25);
}

.check-icon {
  width: 10px;
  height: 10px;
  color: #0072f5;
}

/* SVG and Visual Side */
.visuals-side {
  position: relative;
  text-align: center;
}

.center-logo-wrap {
  display: flex;
  justify-content: center;
  margin-bottom: 8px;
}

.w-24 { width: 96px; }
.h-24 { height: 96px; }
.object-contain { object-fit: contain; }

/* Connecting line SVG container */
.svg-lines-container {
  position: relative;
  height: 80px;
  max-width: 400px;
  margin: 0 auto;
  overflow: visible;
}
.w-full { width: 100%; }
.h-full { height: 100%; }
.overflow-visible { overflow: visible; }

/* Grid of channel apps */
.apps-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 24px 0px;
  max-width: 400px;
  margin: 0 auto;
  position: relative;
  z-index: 20;
}

.channel-app {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  cursor: pointer;
  text-decoration: none;
}

.app-icon-box {
  width: 56px;
  height: 56px;
  border-radius: 16px;
  background: #111422;
  border: 1px solid rgba(255, 255, 255, 0.08);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 12px;
  transition: all 0.3s ease;
}

.channel-app:hover .app-icon-box {
  border-color: rgba(255, 255, 255, 0.15);
  transform: translateY(-2px);
}

.channel-app--active .app-icon-box {
  border-color: rgba(0, 114, 245, 0.4);
  box-shadow: 0 10px 20px rgba(0, 114, 245, 0.1), 0 0 0 1px rgba(0, 114, 245, 0.2);
  transform: scale(1.1);
}

.text-white {
  color: #fff;
}
.text-gray-500 {
  color: #64748b;
}
.text-\[10px\] {
  font-size: 10px;
}
.font-semibold {
  font-weight: 600;
}
.text-center {
  text-align: center;
}
.leading-tight {
  line-height: 1.25;
}
</style>
