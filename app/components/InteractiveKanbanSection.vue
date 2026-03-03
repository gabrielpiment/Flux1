<template>
  <section id="kanban-simulation" class="kanban-section">
    <div class="container">
      <div class="kanban-header" v-motion-fade-visible>
        <span class="eyebrow">Gestão Inteligente</span>
        <h2>Estruture seu <span>funil de vendas</span></h2>
        <p>Organize e impulsione a jornada dos seus leads com uma interface intuitiva e visualmente poderosa.</p>
      </div>

      <div class="kanban-board-wrapper" v-motion-fade-visible>
        <div class="kanban-board">
          <!-- Column: NOVO -->
          <div class="kanban-column novo">
            <div class="column-header">
              <span class="column-title">NOVO</span>
            </div>
            <draggable v-model="columns[0].cards" group="leads" item-key="id" class="drag-area" ghost-class="ghost-card">
              <template #item="{ element }">
                <div class="kanban-card">
                  <div class="card-glass"></div>
                  <div class="card-inner">
                    <div class="card-top">
                      <div class="user-avatar">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
                          <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                          <circle cx="12" cy="7" r="4" />
                        </svg>
                      </div>
                      <span class="user-name">{{ element.name }}</span>
                    </div>
                    <div class="card-body">
                      <div class="detail-line"></div>
                      <div class="detail-line"></div>
                      <div class="detail-line"></div>
                      <div class="detail-line short"></div>
                    </div>
                  </div>
                </div>
              </template>
            </draggable>
          </div>

          <!-- Column: CONTATO -->
          <div class="kanban-column contato">
            <div class="column-header">
              <span class="column-title">CONTATO</span>
            </div>
            <draggable v-model="columns[1].cards" group="leads" item-key="id" class="drag-area" ghost-class="ghost-card">
              <template #item="{ element }">
                <div class="kanban-card">
                  <div class="card-glass"></div>
                  <div class="card-inner">
                    <div class="card-top">
                      <div class="user-avatar">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
                          <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                          <circle cx="12" cy="7" r="4" />
                        </svg>
                      </div>
                      <span class="user-name">{{ element.name }}</span>
                    </div>
                    <div class="card-body">
                      <div class="detail-line"></div>
                      <div class="detail-line"></div>
                      <div class="detail-line"></div>
                      <div class="detail-line short"></div>
                    </div>
                  </div>
                </div>
              </template>
            </draggable>
          </div>

          <!-- Column: PROPOSTA -->
          <div class="kanban-column proposta">
            <div class="column-header">
              <span class="column-title">PROPOSTA</span>
            </div>
            <draggable v-model="columns[2].cards" group="leads" item-key="id" class="drag-area" ghost-class="ghost-card">
              <template #item="{ element }">
                <div class="kanban-card">
                  <div class="card-glass"></div>
                  <div class="card-inner">
                    <div class="card-top">
                      <div class="user-avatar">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
                          <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                          <circle cx="12" cy="7" r="4" />
                        </svg>
                      </div>
                      <span class="user-name">{{ element.name }}</span>
                    </div>
                    <div class="card-body">
                      <div class="detail-line"></div>
                      <div class="detail-line"></div>
                      <div class="detail-line"></div>
                      <div class="detail-line short"></div>
                    </div>
                  </div>
                </div>
              </template>
            </draggable>
          </div>

          <!-- Column: FECHADO -->
          <div class="kanban-column fechado">
            <div class="column-header">
              <span class="column-title">FECHADO</span>
            </div>
            <draggable v-model="columns[3].cards" group="leads" item-key="id" class="drag-area" ghost-class="ghost-card">
              <template #item="{ element }">
                <div class="kanban-card card-won">
                  <div class="card-glass"></div>
                  <div class="card-inner">
                    <div class="card-top">
                      <div class="user-avatar">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
                          <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                          <circle cx="12" cy="7" r="4" />
                        </svg>
                      </div>
                      <span class="user-name">{{ element.name }}</span>
                    </div>
                    <div class="card-body">
                      <div class="detail-line"></div>
                      <div class="detail-line"></div>
                      <div class="detail-line"></div>
                      <div class="detail-line short"></div>
                    </div>
                  </div>
                </div>
              </template>
            </draggable>
          </div>
        </div>
      </div>

      <div class="kanban-cta" v-motion-fade-visible>
        <NuxtLink to="/precos" class="btn-primary">
          Simular agora mesmo
        </NuxtLink>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import draggable from 'vuedraggable'

interface Card {
  id: string
  name: string
}

interface Column {
  id: string
  title: string
  cards: Card[]
}

const columns = ref<Column[]>([
  {
    id: 'novo',
    title: 'NOVO',
    cards: [{ id: 'lead-1', name: 'Marcos Silva' }]
  },
  {
    id: 'contato',
    title: 'CONTATO',
    cards: [
      { id: 'lead-2', name: 'Beatriz Costa' },
      { id: 'lead-3', name: 'João Pereira' }
    ]
  },
  {
    id: 'proposta',
    title: 'PROPOSTA',
    cards: [{ id: 'lead-4', name: 'Ana Souza' }]
  },
  {
    id: 'fechado',
    title: 'FECHADO',
    cards: [{ id: 'lead-amanda', name: 'Amanda Martins' }]
  }
])
</script>

<style scoped>
.kanban-section {
  padding: 120px 0;
  background: #0b0e14;
  position: relative;
  overflow: hidden;
}

.kanban-section::before {
  content: '';
  position: absolute;
  top: -10%;
  left: 50%;
  transform: translateX(-50%);
  width: 100%;
  height: 100%;
  background: radial-gradient(circle at 50% 0%, rgba(31, 105, 255, 0.05) 0%, transparent 100%);
  pointer-events: none;
}

.kanban-header {
  text-align: center;
  max-width: 800px;
  margin: 0 auto 100px;
}

.eyebrow {
  color: var(--accent-primary);
  font-weight: 800;
  font-size: 0.9rem;
  text-transform: uppercase;
  letter-spacing: 0.2em;
  display: block;
  margin-bottom: 1rem;
}

.kanban-header h2 {
  font-size: clamp(2.5rem, 5vw, 4rem);
  font-weight: 800;
  margin-bottom: 25px;
  letter-spacing: -0.03em;
  line-height: 1.1;
  color: #fff;
}

.kanban-header h2 span {
  color: var(--accent-primary);
  background: linear-gradient(to right, #fff, var(--accent-primary));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.kanban-header p {
  font-size: 1.3rem;
  color: rgba(255, 255, 255, 0.5);
  line-height: 1.6;
}

.kanban-board-wrapper {
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 10px;
}

.kanban-board {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 16px;
  min-height: 600px;
}

.kanban-column {
  border-radius: 20px;
  padding: 20px 10px;
  display: flex;
  flex-direction: column;
  position: relative;
  transition: all 0.4s ease;
}

/* Updated Colors based on Reference Image */
.novo { background: rgba(31, 51, 85, 0.3); border: 1px solid rgba(255, 255, 255, 0.03); }
.contato { background: rgba(10, 41, 46, 0.3); border: 1px solid rgba(255, 255, 255, 0.03); }
.proposta { background: rgba(30, 33, 38, 0.4); border: 1px solid rgba(255, 255, 255, 0.03); }
.fechado { background: rgba(15, 35, 75, 0.5); border: 1px solid rgba(255, 255, 255, 0.03); }

.column-header {
  margin-bottom: 30px;
  text-align: left;
  padding-left: 15px;
}

.column-title {
  font-weight: 700;
  font-size: 0.85rem;
  color: rgba(255, 255, 255, 0.4);
  letter-spacing: 0.05em;
}

.drag-area {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 12px;
  padding: 5px;
}

/* Professional Glass Card */
.kanban-card {
  position: relative;
  border-radius: 12px;
  cursor: grab;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  min-height: 140px;
  display: flex;
  overflow: hidden;
}

.card-glass {
  position: absolute;
  inset: 0;
  background: rgba(255, 255, 255, 0.03);
  backdrop-filter: blur(8px);
  border: 1px solid rgba(255, 255, 255, 0.05);
  border-radius: 12px;
}

/* Won highlights from image */
.card-won .card-glass {
  border: 1px solid rgba(31, 105, 255, 0.4);
  box-shadow: 0 0 15px rgba(31, 105, 255, 0.1);
}

.card-inner {
  position: relative;
  z-index: 2;
  padding: 18px;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 15px;
}

.card-top {
  display: flex;
  align-items: center;
  gap: 12px;
}

.user-avatar {
  width: 36px;
  height: 36px;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  flex-shrink: 0;
}

.user-avatar svg {
  width: 18px;
  height: 18px;
  opacity: 0.7;
}

.user-name {
  font-size: 1rem;
  font-weight: 700;
  color: #fff;
  letter-spacing: -0.01em;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.card-body {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.detail-line {
  height: 3px;
  background: rgba(255, 255, 255, 0.04);
  border-radius: 10px;
  width: 100%;
}

.detail-line.short {
  width: 50%;
}

.ghost-card {
  opacity: 0.1;
  background: rgba(255, 255, 255, 0.02) !important;
}

.kanban-cta {
  margin-top: 100px;
  display: flex;
  justify-content: center;
}

.btn-primary {
  padding: 22px 60px;
  border-radius: 100px;
  background: var(--accent-primary);
  color: #fff !important;
  font-weight: 800;
  font-size: 1.2rem;
  text-decoration: none;
  transition: all 0.4s ease;
  box-shadow: 0 10px 40px rgba(31, 105, 255, 0.2);
  border: none;
}

.btn-primary:hover {
  transform: translateY(-5px);
  box-shadow: 0 20px 60px rgba(31, 105, 255, 0.4);
}

@media (max-width: 1200px) {
  .kanban-board {
    grid-template-columns: repeat(4, 300px); /* Maintain columns side-by-side */
    overflow-x: auto;
    padding-bottom: 20px;
    scrollbar-width: thin;
    scrollbar-color: var(--accent-primary) transparent;
  }
}

@media (max-width: 768px) {
  .kanban-board-wrapper {
    margin: 0 -20px; /* Pull to edges */
    padding: 0 20px;
    overflow-x: auto;
    scroll-snap-type: x mandatory;
    -ms-overflow-style: none;
    scrollbar-width: none;
  }
  
  .kanban-board-wrapper::-webkit-scrollbar {
    display: none;
  }

  .kanban-board {
    display: flex;
    grid-template-columns: none;
    gap: 16px;
    width: max-content;
    min-height: auto;
    padding: 10px 0 30px;
  }
  
  .kanban-column {
    width: 280px;
    scroll-snap-align: center;
    flex-shrink: 0;
  }

  .kanban-header {
    margin-bottom: 50px;
  }

  .kanban-header h2 {
    font-size: 2rem;
  }
}
</style>
