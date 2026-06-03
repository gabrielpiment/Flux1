<template>
  <section class="py-16 md:py-24 bg-[#0A0C14] relative overflow-hidden border-t border-white/5" id="follow-up">
    <div class="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-[0.02]"></div>
    
    <div class="w-full max-w-7xl mx-auto px-4 relative z-10">
      
      <!-- Section Header -->
      <div class="section-header" v-motion-fade-visible>
        <span class="eyebrow">Esteira de Retenção</span>
        <h2 class="section-title">
          Recuperação de leads no <br class="hidden md:block">
          <span class="gradient-blue">piloto automático</span>
        </h2>
        <p class="section-subtitle">
          Crie uma esteira inteligente. O sistema cobra, acompanha e nutre seus clientes nos momentos exatos, até eles responderem sozinhos.
        </p>
      </div>
      
      <!-- Timeline Section -->
      <div class="timeline-container">
        <div class="timeline-bar" :style="{ '--progress': progress + '%' }">
          
          <!-- Progress Line & Pulse Orb -->
          <div class="track-fill"></div>
          <div class="pulse-orb">
            <div class="pulse-dot"></div>
          </div>
          
          <!-- Node 0: Imediato -->
          <div class="node-pos node-0">
            <div class="node-circle" :class="{ 'node-circle--active': progress >= 0 }"></div>
            <span class="node-label" :class="{ 'node-label--active': progress >= 0 }">Imediato</span>
            
            <div class="bubble-card" :style="{ opacity: progress >= 0 ? 1 : 0.15 }">
              <div class="bubble-header">
                <div class="bubble-icon-wrap bg-blue">
                  <svg class="bubble-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
                  </svg>
                </div>
                <span class="bubble-sender">Sistema</span>
              </div>
              <p class="bubble-text">Olá João! Recebemos seu cadastro. Como posso te ajudar hoje?</p>
              <div class="bubble-status">
                <svg class="status-check text-blue" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3">
                  <path d="M20 6L9 17l-5-5"></path>
                </svg>
                <span>Enviado (Sem resposta)</span>
              </div>
            </div>
          </div>

          <!-- Node 1: 2 Horas -->
          <div class="node-pos node-1">
            <div class="node-circle" :class="{ 'node-circle--active': progress >= 33.33 }"></div>
            <span class="node-label" :class="{ 'node-label--active': progress >= 33.33 }">2 Horas</span>
            
            <div class="bubble-card" :style="{ opacity: progress >= 33.33 ? 1 : 0.15 }">
              <div class="bubble-header">
                <div class="bubble-icon-wrap bg-blue">
                  <svg class="bubble-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
                  </svg>
                </div>
                <span class="bubble-sender">Sistema</span>
              </div>
              <p class="bubble-text">Nossa equipe de onboarding está disponível pra te ajudar, ok?</p>
              <div class="bubble-status">
                <svg class="status-check text-blue" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3">
                  <path d="M20 6L9 17l-5-5"></path>
                </svg>
                <span>Visualizado (Sem resposta)</span>
              </div>
            </div>
          </div>

          <!-- Node 2: Dia 3 -->
          <div class="node-pos node-2">
            <div class="node-circle" :class="{ 'node-circle--active': progress >= 66.66 }"></div>
            <span class="node-label" :class="{ 'node-label--active': progress >= 66.66 }">Dia 3</span>
            
            <div class="bubble-card" :style="{ opacity: progress >= 66.66 ? 1 : 0.15 }">
              <div class="bubble-header">
                <div class="bubble-icon-wrap bg-blue">
                  <svg class="bubble-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
                  </svg>
                </div>
                <span class="bubble-sender">Sistema</span>
              </div>
              <p class="bubble-text">Liberei 10% de desconto na sua primeira mensalidade. O link expira amanhã!</p>
            </div>
          </div>

          <!-- Node 3: Dia 5 -->
          <div class="node-pos node-3">
            <div class="node-circle node-circle--green" :class="{ 'node-circle--active': progress >= 99 }">
              <div v-if="progress >= 99" class="green-core"></div>
            </div>
            <span class="node-label" :class="{ 'node-label--green-active': progress >= 99 }">Dia 5</span>
            
            <div class="bubble-card client-bubble" :style="{ opacity: progress >= 99 ? 1 : 0.15 }">
              <div class="bubble-header">
                <div class="bubble-icon-wrap bg-green">
                  <svg class="bubble-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3">
                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                    <circle cx="12" cy="7" r="4"></circle>
                  </svg>
                </div>
                <span class="bubble-sender text-green">Cliente</span>
              </div>
              <p class="bubble-text text-light-green">Opa, desculpa a demora! Quero sim, me manda o link?</p>
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
      progress.value += 1.5
    }
  }, 120)
})

onUnmounted(() => {
  if (intervalId) clearInterval(intervalId)
})
</script>

<style scoped>
/* Typography */
.section-header {
  text-align: center;
  max-width: 768px;
  margin: 0 auto 4rem;
}
@media (min-width: 768px) {
  .section-header {
    margin-bottom: 6rem;
  }
}

.eyebrow {
  color: #0072f5;
  font-weight: 900;
  font-size: 0.72rem;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  background: rgba(0, 114, 245, 0.1);
  border: 1px solid rgba(0, 114, 245, 0.25);
  border-radius: 99px;
  padding: 0.35rem 1rem;
  display: inline-block;
  margin-bottom: 1rem;
}

.section-title {
  font-size: clamp(2rem, 5vw, 3.2rem);
  font-weight: 900;
  color: #fff;
  line-height: 1.15;
  letter-spacing: -0.02em;
  margin-bottom: 1.25rem;
}

.gradient-blue {
  background: linear-gradient(90deg, #60a5fa, #2563eb);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.section-subtitle {
  color: #94a3b8;
  font-size: 1.1rem;
  line-height: 1.6;
}

/* Timeline Layout */
.timeline-container {
  position: relative;
  height: 800px;
  max-width: 1000px;
  margin: 0 auto;
  padding: 20px 0;
}

.timeline-bar {
  position: absolute;
  left: 24px;
  top: 10px;
  bottom: 10px;
  width: 2px;
  background: rgba(255, 255, 255, 0.08);
  border-radius: 99px;
}

/* Progress Fill */
.track-fill {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: var(--progress);
  background: #0072f5;
  box-shadow: 0 0 15px rgba(0, 114, 245, 0.8);
  border-radius: 99px;
}

/* Pulsing Orb */
.pulse-orb {
  position: absolute;
  left: 50%;
  top: var(--progress);
  transform: translate(-50%, -50%);
  width: 22px;
  height: 22px;
  background: #0A0C14;
  border: 3px solid #00b3ff;
  border-radius: 50%;
  box-shadow: 0 0 20px rgba(0, 114, 245, 0.8);
  z-index: 25;
  display: flex;
  align-items: center;
  justify-content: center;
}

.pulse-dot {
  width: 6px;
  height: 6px;
  background: #fff;
  border-radius: 50%;
}

/* Nodes Base styling */
.node-pos {
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  width: 1px;
}

.node-circle {
  width: 14px;
  height: 14px;
  border-radius: 50%;
  border: 2px solid rgba(255, 255, 255, 0.2);
  background: #0A0C14;
  position: absolute;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 15;
  transition: all 0.3s ease;
}

.node-circle--active {
  border-color: #0072f5 !important;
  box-shadow: 0 0 12px rgba(0, 114, 245, 0.6);
}

.node-circle--green {
  width: 18px;
  height: 18px;
  border-width: 3px;
}

.node-circle--green.node-circle--active {
  border-color: #22c55e !important;
  box-shadow: 0 0 15px rgba(34, 197, 94, 0.6);
}

.green-core {
  width: 6px;
  height: 6px;
  background: #22c55e;
  border-radius: 50%;
}

.node-label {
  position: absolute;
  left: 20px;
  transform: translateY(-50%);
  font-size: 0.65rem;
  font-weight: 900;
  text-transform: uppercase;
  letter-spacing: 0.15em;
  color: #64748b;
  white-space: nowrap;
  transition: color 0.3s ease;
}

.node-label--active {
  color: #0072f5;
}

.node-label--green-active {
  color: #22c55e;
}

/* Node Positions (Vertical) */
.node-0 { top: 0; }
.node-1 { top: 33.33%; }
.node-2 { top: 66.66%; }
.node-3 { top: 100%; }

/* Bubble Cards */
.bubble-card {
  position: absolute;
  left: 45px;
  top: -24px;
  width: 250px;
  background: rgba(17, 20, 34, 0.9);
  backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.06);
  border-radius: 16px;
  padding: 14px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.4);
  z-index: 30;
  text-align: left;
  transition: opacity 0.5s ease, transform 0.5s ease;
}

.client-bubble {
  border-color: rgba(34, 197, 94, 0.2);
  background: rgba(34, 197, 94, 0.04);
}

.bubble-header {
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 8px;
}

.bubble-icon-wrap {
  width: 22px;
  height: 22px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.bg-blue {
  background: rgba(0, 114, 245, 0.1);
  border: 1px solid rgba(0, 114, 245, 0.2);
  color: #0072f5;
}

.bg-green {
  background: rgba(34, 197, 94, 0.2);
  border: 1px solid rgba(34, 197, 94, 0.3);
  color: #4ade80;
}

.bubble-icon {
  width: 10px;
  height: 10px;
}

.bubble-sender {
  font-size: 0.65rem;
  font-weight: 900;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: #94a3b8;
}

.bubble-sender.text-green {
  color: #4ade80;
}

.bubble-text {
  font-size: 0.78rem;
  color: #cbd5e1;
  line-height: 1.4;
  margin: 0;
}

.bubble-text.text-light-green {
  color: #d1fae5;
  font-weight: 500;
}

.bubble-status {
  margin-top: 8px;
  display: flex;
  align-items: center;
  gap: 4px;
  font-size: 0.55rem;
  font-weight: 800;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  color: #64748b;
}

.status-check {
  width: 10px;
  height: 10px;
}

.text-blue {
  color: #0072f5;
}

/* Desktop Responsiveness */
@media (min-width: 768px) {
  .timeline-container {
    height: 400px;
    padding: 0;
    display: flex;
    align-items: center;
  }

  .timeline-bar {
    left: 40px;
    right: 40px;
    top: 50%;
    transform: translateY(-50%);
    width: auto;
    height: 2px;
    bottom: auto;
  }

  .track-fill {
    width: var(--progress);
    height: 100%;
  }

  .pulse-orb {
    top: 50%;
    left: var(--progress);
    width: 24px;
    height: 24px;
  }

  /* Node Positions (Horizontal) */
  .node-pos {
    top: 50%;
    transform: translateY(-50%);
    width: auto;
    height: 1px;
  }
  .node-0 { left: 0; }
  .node-1 { left: 33.33%; }
  .node-2 { left: 66.66%; }
  .node-3 { left: 100%; }

  .node-label {
    left: 0;
    transform: translateX(-50%);
    font-size: 0.65rem;
  }
  
  .node-0 .node-label { top: 22px; }
  .node-1 .node-label { top: -26px; }
  .node-2 .node-label { top: 22px; }
  .node-3 .node-label { top: -26px; }

  /* Desktop Bubble positioning */
  .bubble-card {
    left: auto;
    width: 256px;
  }

  .node-0 .bubble-card {
    top: 42px;
    left: -40px;
    border-top-left-radius: 4px;
  }

  .node-1 .bubble-card {
    bottom: 42px;
    left: 50%;
    transform: translateX(-50%);
    top: auto;
    border-bottom-left-radius: 4px;
  }

  .node-2 .bubble-card {
    top: 42px;
    left: 50%;
    transform: translateX(-50%);
    border-top-left-radius: 4px;
  }

  .node-3 .bubble-card {
    bottom: 42px;
    right: -40px;
    top: auto;
    border-bottom-right-radius: 4px;
  }
}
</style>
