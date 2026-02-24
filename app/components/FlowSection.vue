<template>
  <section id="automation-flow" class="flow-section">
    <div class="container flow-container">
      <div class="flow-info" v-motion-fade-visible>
        <span class="eyebrow">Automação Visual</span>
        <h2>Construa processos complexos com <span>Arrasta e Solta</span></h2>
        <p>
          Nossa interface intuitiva permite que você desenhe toda a jornada do cliente em segundos. 
          Sem código, sem complicações. Apenas o poder da IA e automação lógica ao seu alcance.
        </p>
        <ul class="flow-features">
          <li>
            <div class="feat-dot"></div>
            <span>Roteamento Inteligente por Setor</span>
          </li>
          <li>
            <div class="feat-dot"></div>
            <span>Distribuição Equitativa (Randomizador)</span>
          </li>
          <li>
            <div class="feat-dot"></div>
            <span>Integração Nativa com Kanban</span>
          </li>
        </ul>
        <div class="flow-cta">
          <NuxtLink class="btn-primary" to="#demo">
            Criar minha automação
          </NuxtLink>
        </div>
      </div>

      <div class="flow-viewer-wrapper" v-motion-fade-visible>
        <div class="flow-viewer">
          <VueFlow 
            v-model="elements" 
            :fit-view-on-init="true"
            :default-edge-options="{ type: 'smoothstep', animated: true }"
            class="interactive-flow"
          >
            <Background pattern-color="#1f69ff" :gap="20" :size="1" />
            <Controls />

            <!-- Custom Nodes -->
            <template #node-start="props">
              <div class="custom-node node-start">
                <div class="node-icon-side left">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><polyline points="9 18 15 12 9 6"></polyline></svg>
                </div>
                <span>{{ props.data.label }}</span>
                <div class="node-icon-side right">
                   <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><polyline points="9 18 15 12 9 6"></polyline></svg>
                </div>
                <Handle type="source" :position="Position.Right" />
              </div>
            </template>

            <template #node-wa="props">
              <div class="custom-node node-wa">
                <div class="node-header">
                  <div class="node-wa-icon">
                    <svg width="14" height="14" fill="currentColor" viewBox="0 0 24 24"><path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.404 2.513 1.157 3.518l-1.002 2.652 2.766-.948a5.733 5.733 0 0 0 2.847.747h.001c3.182 0 5.768-2.586 5.769-5.766 0-1.536-.598-2.981-1.684-4.067s-2.531-1.684-4.086-1.702zm3.38 8.125c-.147.414-.725.753-1.002.8l-.134.025c-.341.064-.783.147-2.315-.461-1.956-.777-3.219-2.772-3.317-2.902-.097-.13-.725-.964-.725-1.85 0-.886.463-1.319.627-1.487.164-.168.358-.211.477-.211h.341c.108 0 .253-.04.397.3.147.348.5.1.58.261.082.162.082.348.026.467-.056.119-.056.119-.119.206-.063.087-.134.14-.191.206-.056.066-.118.136-.051.251.067.115.297.491.637.794.439.389.809.51 0 .618-.112.112-.297.238-.414.38-.117.142-.238.297-.101.533.137.236.608 1.004 1.309 1.626.541.48 1 .637 1.23.753.23.116.366.1.503-.056.136-.156.58-.675.736-.906.156-.23.313-.194.526-.115.213.078 1.348.636 1.581.751.233.115.388.173.445.271.056.098.056.55-.091.964z"/></svg>
                  </div>
                  <span>{{ props.data.label }}</span>
                </div>
                <div class="node-body">
                  <div class="node-placeholder">{{ props.data.sublabel || props.data.label }}</div>
                </div>
                <Handle type="target" :position="Position.Left" />
                <Handle type="source" :position="Position.Right" />
              </div>
            </template>

            <template #node-random="props">
              <div class="custom-node node-random">
                <div class="node-header">
                  <div class="node-wa-icon random-icon">
                    <svg width="14" height="14" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M18 5L12 11l6 6M6 5l6 11-6 6"/></svg>
                  </div>
                  <span>Randomizador</span>
                  <div class="node-badge">0<br><small>Total</small></div>
                </div>
                <div class="node-body">
                  <div class="random-option">
                    <span>A</span> <div class="percent">33%</div>
                    <Handle type="source" :position="Position.Right" id="a" />
                  </div>
                  <div class="random-option">
                    <span>B</span> <div class="percent">33%</div>
                    <Handle type="source" :position="Position.Right" id="b" />
                  </div>
                  <div class="random-option">
                    <span>C</span> <div class="percent">33%</div>
                    <Handle type="source" :position="Position.Right" id="c" />
                  </div>
                </div>
                <Handle type="target" :position="Position.Left" />
              </div>
            </template>

            <template #node-kanban="props">
              <div class="custom-node node-kanban">
                <div class="node-header">
                  <div class="node-wa-icon kanban-icon">
                    <svg width="14" height="14" fill="currentColor" viewBox="0 0 24 24"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M7 7h2v10H7zm4 0h2v7h-2zm4 0h2v4h-2z"/></svg>
                  </div>
                  <span>Quadro Kanban</span>
                </div>
                <div class="node-body">
                  <div class="kanban-field"><span>Quadro</span> <div class="field-value">--</div></div>
                  <div class="kanban-field"><span>Coluna</span> <div class="field-value">--</div></div>
                </div>
                <Handle type="target" :position="Position.Left" />
              </div>
            </template>
          </VueFlow>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { VueFlow, useVueFlow, Position, Handle } from '@vue-flow/core'
import { Background } from '@vue-flow/background'
import { Controls } from '@vue-flow/controls'

// Required styles for Vue Flow
import '@vue-flow/core/dist/style.css'
import '@vue-flow/core/dist/theme-default.css'

const elements = ref([
  // Nodes
  { 
    id: 'start', 
    type: 'start', 
    position: { x: 0, y: 150 }, 
    data: { label: 'Seu fluxo começa aqui' } 
  },
  { 
    id: 'msg1', 
    type: 'wa', 
    position: { x: 300, y: 220 }, 
    data: { label: 'Mensagem', sublabel: 'Mensagem...' } 
  },
  { 
    id: 'random', 
    type: 'random', 
    position: { x: 300, y: 30 }, 
    data: { label: 'Randomizador' } 
  },
  { 
    id: 'attendant', 
    type: 'wa', 
    position: { x: 620, y: 50 }, 
    data: { label: 'Atendente', sublabel: 'Redirecionar para Atendente' } 
  },
  { 
    id: 'sector', 
    type: 'wa', 
    position: { x: 620, y: 160 }, 
    data: { label: 'Setor', sublabel: 'Setor' } 
  },
  { 
    id: 'menu', 
    type: 'wa', 
    position: { x: 620, y: 270 }, 
    data: { label: 'Menu Lista', sublabel: 'Menu Lista' } 
  },
  { 
    id: 'kanban', 
    type: 'kanban', 
    position: { x: 450, y: 410 }, 
    data: { label: 'Quadro Kanban' } 
  },

  // Edges
  { id: 'e-start-msg', source: 'start', target: 'msg1', animated: true },
  { id: 'e-msg-random', source: 'msg1', target: 'random', animated: true },
  { id: 'e-random-a', source: 'random', sourceHandle: 'a', target: 'attendant', animated: true },
  { id: 'e-random-b', source: 'random', sourceHandle: 'b', target: 'attendant', animated: true },
  { id: 'e-random-c', source: 'random', sourceHandle: 'c', target: 'attendant', animated: true },
  { id: 'e-msg-sector', source: 'msg1', target: 'sector', animated: true },
  { id: 'e-sector-menu', source: 'sector', target: 'menu', animated: true },
  { id: 'e-menu-kanban', source: 'menu', target: 'kanban', animated: true },
])

const { onPaneReady, onNodeDragStop, onConnect, addEdges } = useVueFlow()

onPanelReady: (flowInstance) => {
  flowInstance.fitView()
}
</script>

<style scoped>
.flow-section {
  padding: 120px 0;
  position: relative;
  overflow: hidden;
  background: radial-gradient(circle at 100% 50%, rgba(31, 105, 255, 0.05) 0%, transparent 60%);
}

.flow-container {
  display: flex;
  align-items: center;
  gap: 5rem;
}

.flow-info {
  flex: 0 0 450px;
}

.flow-info h2 {
  font-size: clamp(2.5rem, 5vw, 3.5rem);
  margin: 1.5rem 0;
  line-height: 1.1;
}

.flow-info h2 span {
  color: var(--accent-primary);
}

.flow-info p {
  font-size: 1.2rem;
  color: var(--text-secondary);
  line-height: 1.6;
  margin-bottom: 2.5rem;
}

.flow-features {
  list-style: none;
  margin-bottom: 3rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.flow-features li {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  font-weight: 600;
  color: var(--text-primary);
}

.feat-dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: var(--accent-primary);
  box-shadow: 0 0 10px var(--accent-primary);
}

.flow-viewer-wrapper {
  flex: 1;
  height: 600px;
  background: rgba(15, 27, 32, 0.5);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 32px;
  overflow: hidden;
  position: relative;
  box-shadow: 0 40px 80px rgba(0, 0, 0, 0.3);
}

.flow-viewer {
  width: 100%;
  height: 100%;
}

.interactive-flow {
  background: transparent !important;
}

:deep(.vue-flow__handle) {
  width: 8px;
  height: 8px;
  background: var(--accent-primary);
  border: 1px solid rgba(255, 255, 255, 0.4);
}

:deep(.vue-flow__edge-path) {
  stroke: rgba(255, 255, 255, 0.2);
  stroke-width: 2;
}

:deep(.vue-flow__edge.animated .vue-flow__edge-path) {
  stroke: var(--accent-primary);
  stroke-dasharray: 5;
}

/* ── Custom Nodes ───────────────────────────────── */
.custom-node {
  padding: 1px;
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 12px;
  min-width: 180px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
  transition: all 0.3s ease;
  overflow: hidden;
}

.custom-node:hover {
  border-color: var(--accent-primary);
  box-shadow: 0 0 20px rgba(31, 105, 255, 0.2);
}

.node-header {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 10px 14px;
  background: rgba(255, 255, 255, 0.05);
  border-bottom: 1px solid rgba(255, 255, 255, 0.05);
  font-size: 0.85rem;
  font-weight: 700;
  color: #fff;
}

.node-body {
  padding: 12px 14px;
}

.node-placeholder {
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 8px;
  padding: 10px;
  font-size: 0.75rem;
  color: var(--text-secondary);
  text-align: center;
}

.node-wa-icon {
  width: 24px;
  height: 24px;
  border: 1px solid rgba(34, 197, 94, 0.3);
  background: rgba(34, 197, 94, 0.1);
  color: #4ade80;
  border-radius: 6px;
  display: flex;
  align-items: center;
  justify-content: center;
}

/* Specific Node Styles */
.node-start {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px 16px;
  background: #fff;
  color: #000;
  font-weight: 700;
  font-size: 0.85rem;
  border-radius: 10px;
  min-width: 200px;
}

.node-icon-side {
  width: 24px;
  height: 24px;
  border: 2px solid #22c55e;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #22c55e;
}

.node-random .random-icon {
  color: #a855f7;
  background: rgba(168, 85, 247, 0.1);
  border-color: rgba(168, 85, 247, 0.3);
}

.node-badge {
  margin-left: auto;
  font-size: 0.6rem;
  text-align: center;
  line-height: 1;
  padding: 4px 8px;
  background: rgba(0, 0, 0, 0.2);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 6px;
  color: var(--text-secondary);
}

.random-option {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px 10px;
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.06);
  border-radius: 6px;
  margin-bottom: 6px;
  font-size: 0.75rem;
  color: var(--text-secondary);
}

.random-option .percent {
  font-size: 0.65rem;
  font-weight: 700;
  color: #fff;
  background: var(--accent-primary);
  padding: 2px 6px;
  border-radius: 4px;
}

.node-kanban .kanban-icon {
  color: #3b82f6;
  background: rgba(59, 130, 246, 0.1);
  border-color: rgba(59, 130, 246, 0.3);
}

.kanban-field {
  display: flex;
  justify-content: space-between;
  padding: 8px 0;
  border-bottom: 1px solid rgba(255, 255, 255, 0.05);
  font-size: 0.75rem;
  color: var(--text-secondary);
}

.kanban-field .field-value {
  color: #fff;
  opacity: 0.5;
}

@media (max-width: 1100px) {
  .flow-container {
    flex-direction: column;
    text-align: center;
    gap: 3rem;
  }
  .flow-info { flex: 0 0 auto; max-width: 600px; }
  .flow-features li { justify-content: center; }
  .flow-viewer-wrapper { width: 100%; height: 500px; }
}
</style>
