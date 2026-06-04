<template>
  <section class="agents-section" id="agents-panel" ref="sectionRef">
    <div class="container">
      <!-- Section Header -->
      <div class="section-header" v-motion-fade-visible>
        <h2 class="section-title">
          Visão Geral da <span class="highlight-text">Equipe</span>
        </h2>
        <p class="section-subtitle">Equilibre a carga de trabalho. Identifique quem está sobrecarregado e transfira atendimentos para estabilizar a fila.</p>
      </div>

      <!-- Main Content: Dashboard + Logs -->
      <div class="agents-main" v-motion-fade-visible>
        <!-- Dashboard Simulation -->
        <div class="dashboard-sim">
          <div class="agents-bar">
            <div v-for="agent in agents" :key="agent.id" 
                 class="agent-col" :class="{ 'agent-col--featured': agent.color === 'red' }">
              <div class="tickets-stack" :class="'stack-' + agent.color">
                <transition-group name="ticket-list">
                  <div v-for="i in agent.tickets" :key="agent.id + '-' + i" 
                       class="ticket-pill" :class="['ticket-' + agent.color, { 'ticket-pulse': agent.pulse && i === agent.tickets }]"></div>
                </transition-group>
              </div>
              <div class="agent-card" :class="'card-' + agent.color">
                <div class="agent-badge" :class="['badge-' + agent.color, { 'badge-pulse': agent.pulse }]">{{ agent.status }}</div>
                <div class="agent-avatar" :class="'avatar-' + agent.color">{{ agent.initials }}</div>
                <div class="agent-name">{{ agent.name }}</div>
              </div>
            </div>
          </div>
          
          <transition name="fade">
            <div v-if="isStabilized" class="sim-actions" style="display: flex; justify-content: center; margin-top: 1.5rem;">
              <button @click="resetSimulation" class="sim-btn sim-btn-outline" style="padding: 6px 12px; font-size: 0.75rem;">🔄 Repetir Animação</button>
            </div>
          </transition>
        </div>

        <!-- Logs Panel -->
        <div class="logs-panel">
          <div class="logs-header">
            <div class="logs-title">
              <div class="live-dot" :class="{ 'live-dot-green': isStabilized }"></div>
              <span class="logs-label">Logs do Sistema</span>
            </div>
            <span class="live-badge">AO VIVO</span>
          </div>
          <div class="logs-body">
            <div class="log-alert" :style="isStabilized ? 'background: rgba(34, 197, 94, 0.1); color: #22c55e; border-color: rgba(34, 197, 94, 0.2);' : ''">
              {{ logStatus.icon }} {{ logStatus.title }}
            </div>
            <div class="log-info">
              <span>{{ logStatus.desc }}</span>
            </div>
          </div>
        </div>
      </div>

      <!-- Feature Cards -->
      <div class="feature-cards" v-motion-fade-visible>
        <div class="feature-card">
          <div class="feat-icon-wrap feat-icon-gray">
            <svg class="feat-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
              <circle cx="12" cy="12" r="3"></circle>
            </svg>
          </div>
          <h3 class="feat-title">Visibilidade Total</h3>
          <p class="feat-desc">Saiba exatamente quem está livre e quem está sobrecarregado apenas batendo o olho no painel.</p>
        </div>

        <div class="feature-card feature-card--primary">
          <div class="feat-overlay"></div>
          <div class="feat-icon-wrap feat-icon-primary">
            <svg class="feat-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <polyline points="17 1 21 5 17 9"></polyline>
              <path d="M3 11V9a4 4 0 0 1 4-4h14"></path>
              <polyline points="7 23 3 19 7 15"></polyline>
              <path d="M21 13v2a4 4 0 0 1-4 4H3"></path>
            </svg>
          </div>
          <h3 class="feat-title">Distribuição Inteligente</h3>
          <p class="feat-desc">Transfira clientes de um atendente para o outro com apenas um clique e zere o tempo de espera.</p>
        </div>

        <div class="feature-card">
          <div class="feat-icon-wrap feat-icon-gray">
            <svg class="feat-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline>
            </svg>
          </div>
          <h3 class="feat-title">Monitoramento Ativo</h3>
          <p class="feat-desc">Avalie o tempo de resposta e garanta que sua equipe não perca vendas por demora no atendimento.</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted } from 'vue'

const sectionRef = ref<HTMLElement | null>(null)
let observer: IntersectionObserver | null = null

const agents = ref([
  { id: 'ana', name: 'Ana', initials: 'AC', tickets: 2, status: 'Livre', color: 'green', pulse: false },
  { id: 'carlos', name: 'Carlos', initials: 'CS', tickets: 8, status: 'Sobrecarga', color: 'red', pulse: true },
  { id: 'pedro', name: 'Pedro', initials: 'PS', tickets: 3, status: 'Estável', color: 'blue', pulse: false }
])

const isStabilized = ref(false)
const isAnimating = ref(false)

const logStatus = computed(() => {
  if (isStabilized.value) {
    return {
      icon: '✅',
      title: 'Tudo sob controle: Fila estabilizada',
      desc: 'Atendimentos distribuídos com sucesso...'
    }
  }
  if (isAnimating.value) {
    return {
      icon: '⚡',
      title: 'Redistribuindo carga de trabalho...',
      desc: 'Transferindo atendimentos de Carlos...'
    }
  }
  return {
    icon: '⚠️',
    title: 'Gargalo: Carlos com 8 atendimentos',
    desc: 'Analisando melhor rota...'
  }
})

const balanceWorkload = () => {
  if (isAnimating.value || isStabilized.value) return;
  isAnimating.value = true;
  
  setTimeout(() => {
    agents.value[1].tickets = 7
    agents.value[0].tickets = 3
  }, 600)
  
  setTimeout(() => {
    agents.value[1].tickets = 6
    agents.value[2].tickets = 4
  }, 1200)

  setTimeout(() => {
    agents.value[1].tickets = 5
    agents.value[2].tickets = 5
  }, 1800)

  setTimeout(() => {
    agents.value[1].tickets = 4
    agents.value[0].tickets = 4
    
    // Change states
    agents.value[0].status = 'Estável'
    agents.value[0].color = 'blue'
    
    agents.value[1].status = 'Estável'
    agents.value[1].color = 'blue'
    agents.value[1].pulse = false

    isStabilized.value = true
    isAnimating.value = false
  }, 2400)
}

const resetSimulation = () => {
  agents.value = [
    { id: 'ana', name: 'Ana', initials: 'AC', tickets: 2, status: 'Livre', color: 'green', pulse: false },
    { id: 'carlos', name: 'Carlos', initials: 'CS', tickets: 8, status: 'Sobrecarga', color: 'red', pulse: true },
    { id: 'pedro', name: 'Pedro', initials: 'PS', tickets: 3, status: 'Estável', color: 'blue', pulse: false }
  ]
  isStabilized.value = false
  isAnimating.value = false
  
  // Auto restart after reset
  setTimeout(() => {
    balanceWorkload()
  }, 1000)
}

onMounted(() => {
  observer = new IntersectionObserver((entries) => {
    if (entries[0].isIntersecting && !isStabilized.value && !isAnimating.value) {
      // Trigger animation automatically when user scrolls to it
      setTimeout(() => {
        balanceWorkload()
      }, 1000)
    }
  }, { threshold: 0.5 })

  if (sectionRef.value) {
    observer.observe(sectionRef.value)
  }
})

onUnmounted(() => {
  if (observer) {
    observer.disconnect()
  }
})
</script>

<style scoped>
.agents-section {
  background: #0d0f18;
  overflow: hidden;
  padding: 96px 0;
  position: relative;
}

/* Section Header */
.section-header {
  text-align: center;
  margin-bottom: 80px;
}

.section-title {
  font-size: clamp(2rem, 5vw, 3.5rem);
  font-weight: 900;
  color: #fff;
  margin-bottom: 1rem;
  line-height: 1.1;
}

.highlight-text {
  color: #0072f5;
  background: linear-gradient(90deg, #3b8ef8, #0072f5);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.section-subtitle {
  color: #94a3b8;
  font-size: 1.1rem;
  max-width: 640px;
  margin: 0 auto;
  font-weight: 500;
}

/* Main layout: dashboard + logs */
.agents-main {
  display: flex;
  align-items: center;
  gap: 4rem;
  max-width: 1000px;
  margin: 0 auto 96px;
  justify-content: space-between;
}

.dashboard-sim {
  flex: 1;
}

/* Agents bar */
.agents-bar {
  display: flex;
  align-items: flex-end;
  justify-content: center;
  gap: 3rem;
  padding-bottom: 2.5rem;
}

/* Each agent column */
.agent-col {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 120px;
  transition: transform 0.5s ease;
}

.agent-col--featured {
  transform: scale(1.1);
}

/* Tickets stack */
.tickets-stack {
  display: flex;
  flex-direction: column-reverse;
  gap: 6px;
  margin-bottom: 16px;
  align-items: center;
  min-height: 100px;
}

.ticket-pill {
  width: 48px;
  height: 20px;
  border-radius: 50px;
  border: 1px solid;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
}

.ticket-pill::after {
  content: '';
  width: 6px;
  height: 6px;
  border-radius: 50%;
}

.ticket-green {
  background: rgba(34, 197, 94, 0.15);
  border-color: rgba(34, 197, 94, 0.25);
}
.ticket-green::after { background: rgba(34, 197, 94, 0.5); }

.ticket-red {
  background: rgba(239, 68, 68, 0.1);
  border-color: rgba(239, 68, 68, 0.2);
}
.ticket-red::after { background: #ef4444; }
.ticket-pulse { animation: ticketPulse 1.5s infinite; }

@keyframes ticketPulse {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.5; }
}

.ticket-blue {
  background: rgba(59, 130, 246, 0.1);
  border-color: rgba(59, 130, 246, 0.2);
}
.ticket-blue::after { background: rgba(59, 130, 246, 0.5); }

/* Agent card */
.agent-card {
  background: rgba(17, 20, 34, 0.9);
  border: 1px solid;
  border-radius: 20px;
  padding: 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  position: relative;
  backdrop-filter: blur(20px);
  transition: all 0.5s ease;
}

.card-green { border-color: rgba(34, 197, 94, 0.15); }
.card-red {
  border-color: rgba(239, 68, 68, 0.4);
  box-shadow: 0 0 40px rgba(239, 68, 68, 0.15);
}
.card-blue { border-color: rgba(255, 255, 255, 0.1); }

/* Agent badge */
.agent-badge {
  position: absolute;
  top: -12px;
  padding: 3px 8px;
  border-radius: 50px;
  font-size: 9px;
  font-weight: 900;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  border: 1px solid;
}

.badge-green {
  background: rgba(34, 197, 94, 0.1);
  color: #22c55e;
  border-color: rgba(34, 197, 94, 0.2);
}

.badge-red {
  background: rgba(239, 68, 68, 0.2);
  color: #ef4444;
  border-color: rgba(239, 68, 68, 0.4);
}

.badge-blue {
  background: rgba(59, 130, 246, 0.1);
  color: #3b82f6;
  border-color: rgba(59, 130, 246, 0.2);
}

.badge-pulse { animation: badgePulse 2s infinite; }
@keyframes badgePulse {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.6; }
}

/* Agent avatar */
.agent-avatar {
  width: 48px;
  height: 48px;
  border-radius: 50%;
  border: 1px solid;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  font-size: 1rem;
  margin-bottom: 8px;
}

.avatar-green {
  background: rgba(34, 197, 94, 0.1);
  border-color: rgba(34, 197, 94, 0.3);
  color: #22c55e;
}
.avatar-red {
  background: rgba(239, 68, 68, 0.1);
  border-color: rgba(239, 68, 68, 0.4);
  color: #ef4444;
}
.avatar-blue {
  background: rgba(59, 130, 246, 0.1);
  border-color: rgba(59, 130, 246, 0.2);
  color: #3b82f6;
}

.agent-name {
  font-size: 0.8rem;
  font-weight: 700;
  color: #fff;
  text-align: center;
}

/* Logs Panel */
.logs-panel {
  width: 300px;
  flex-shrink: 0;
  background: rgba(10, 12, 20, 0.8);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 24px;
  padding: 28px;
  backdrop-filter: blur(20px);
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.4);
}

.logs-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 20px;
}

.logs-title {
  display: flex;
  align-items: center;
  gap: 8px;
}

.live-dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: #ef4444;
  animation: livePulse 1.5s infinite;
  box-shadow: 0 0 8px rgba(239, 68, 68, 0.8);
}

@keyframes livePulse {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.4; }
}

.logs-label {
  font-size: 10px;
  font-weight: 900;
  color: #94a3b8;
  text-transform: uppercase;
  letter-spacing: 0.1em;
}

.live-badge {
  font-size: 10px;
  color: #64748b;
  font-family: monospace;
}

.logs-body {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.log-alert {
  background: rgba(239, 68, 68, 0.1);
  color: #f87171;
  padding: 10px 12px;
  border-radius: 8px;
  border: 1px solid rgba(239, 68, 68, 0.2);
  font-size: 0.8rem;
  font-weight: 500;
}

.log-info {
  color: #94a3b8;
  font-size: 0.85rem;
  padding: 0 4px;
}

/* Feature Cards */
.feature-cards {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;
  max-width: 900px;
  margin: 0 auto;
}

.feature-card {
  background: rgba(255, 255, 255, 0.02);
  border: 1px solid rgba(255, 255, 255, 0.05);
  border-radius: 24px;
  padding: 2rem;
  text-align: center;
  transition: border-color 0.3s ease;
  position: relative;
  overflow: hidden;
}

.feature-card:hover {
  border-color: rgba(255, 255, 255, 0.1);
}

.feature-card--primary {
  border-color: rgba(255, 255, 255, 0.05);
}

.feature-card--primary:hover {
  border-color: rgba(0, 114, 245, 0.3);
}

.feat-overlay {
  position: absolute;
  inset: 0;
  background: rgba(0, 114, 245, 0.05);
  opacity: 0;
  transition: opacity 0.5s ease;
}

.feature-card--primary:hover .feat-overlay {
  opacity: 1;
}

.feat-icon-wrap {
  width: 56px;
  height: 56px;
  border-radius: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 1.5rem;
  border: 1px solid;
  position: relative;
  z-index: 1;
}

.feat-icon-gray {
  background: rgba(255, 255, 255, 0.05);
  border-color: rgba(255, 255, 255, 0.1);
  color: #94a3b8;
}

.feat-icon-primary {
  background: rgba(0, 114, 245, 0.1);
  border-color: rgba(0, 114, 245, 0.2);
  color: #0072f5;
}

.feat-icon {
  width: 24px;
  height: 24px;
}

.feat-title {
  font-size: 1.1rem;
  font-weight: 700;
  color: #fff;
  margin-bottom: 0.75rem;
  position: relative;
  z-index: 1;
}

.feat-desc {
  font-size: 0.875rem;
  color: #94a3b8;
  line-height: 1.6;
  position: relative;
  z-index: 1;
}

/* Responsive */
@media (max-width: 900px) {
  .agents-main {
    flex-direction: column;
    gap: 2.5rem;
  }

  .logs-panel {
    width: 100%;
    max-width: 400px;
  }

  .feature-cards {
    grid-template-columns: 1fr;
    max-width: 400px;
  }
}

@media (max-width: 600px) {
  .agents-bar {
    gap: 1.5rem;
  }

  .agent-col {
    width: 85px;
  }

  .agent-card {
    padding: 12px;
  }

  .agent-avatar {
    width: 38px;
    height: 38px;
    font-size: 0.8rem;
  }
}

/* Animation specific styles */
.ticket-list-enter-active,
.ticket-list-leave-active,
.ticket-list-move {
  transition: all 0.5s cubic-bezier(0.55, 0, 0.1, 1);
}
.ticket-list-enter-from {
  opacity: 0;
  transform: translateY(-20px) scale(0.8);
}
.ticket-list-leave-to {
  opacity: 0;
  transform: translateY(20px) scale(0.8);
}

.sim-btn {
  background: rgba(0, 114, 245, 0.1);
  border: 1px solid rgba(0, 114, 245, 0.4);
  color: #3b8ef8;
  padding: 8px 16px;
  border-radius: 50px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  font-size: 0.85rem;
  display: inline-flex;
  align-items: center;
  gap: 6px;
}
.sim-btn:hover:not(:disabled) {
  background: rgba(0, 114, 245, 0.2);
  transform: translateY(-2px);
}
.sim-btn:disabled {
  opacity: 0.6;
  cursor: not-allowed;
}
.sim-btn-outline {
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  color: #94a3b8;
}
.sim-btn-outline:hover {
  background: rgba(255, 255, 255, 0.1);
  color: #fff;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.live-dot-green {
  background: #22c55e;
  box-shadow: 0 0 8px rgba(34, 197, 94, 0.8);
}
</style>
