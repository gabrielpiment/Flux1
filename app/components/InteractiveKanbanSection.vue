<template>
  <section class="kanban-section">
    <div class="container">
      <div class="kanban-header" v-motion-fade-visible>
        <span class="eyebrow">Kanban Visual</span>
        <h2>Gerencie seu <span class="gradient-text">funil de vendas</span></h2>
        <p>Visualize cada etapa da jornada do cliente em um kanban intuitivo. Acompanhe o progresso em tempo real.</p>
      </div>
      <div class="kanban-body">
        <!-- Features List -->
        <div class="kanban-features">
          <div class="feature-badge">
            <div class="badge-icon">🎯</div>
            <div class="badge-text">
              <strong>Arrastar e soltar</strong>
              <span>Mova leads entre etapas facilmente</span>
            </div>
          </div>
          <div class="feature-badge">
            <div class="badge-icon">🔔</div>
            <div class="badge-text">
              <strong>Alertas automáticos</strong>
              <span>Notificações de leads parados</span>
            </div>
          </div>
          <div class="feature-badge">
            <div class="badge-icon">📊</div>
            <div class="badge-text">
              <strong>Visão completa</strong>
              <span>Funil de vendas em tempo real</span>
            </div>
          </div>
          <div class="feature-badge">
            <div class="badge-icon">🤖</div>
            <div class="badge-text">
              <strong>IA integrada</strong>
              <span>Sugestões automáticas de ação</span>
            </div>
          </div>
        </div>

        <!-- Center Kanban Mockup -->
        <div class="kanban-image-wrapper">
          <div class="image-glow"></div>
          <img :src="kanbanImg" alt="Kanban Visual" class="kanban-img">
          <div class="float-badge float-badge--top">
            <span class="float-dot"></span>
            Atualizado em tempo real
          </div>
          <div class="float-badge float-badge--bottom">
            <span class="float-dot float-dot--green"></span>
            12 leads em andamento
          </div>
        </div>

        <!-- Right Stats -->
        <div class="kanban-stats">
          <div class="stat-card">
            <div class="stat-value">+47%</div>
            <div class="stat-label">Taxa de conversão</div>
          </div>
          <div class="stat-card">
            <div class="stat-value">3x</div>
            <div class="stat-label">Mais velocidade no fechamento</div>
          </div>
          <div class="stat-card">
            <div class="stat-value">100%</div>
            <div class="stat-label">Visibilidade do pipeline</div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
// Visual Kanban Showcase Section matching production
const kanbanImg = '/images/kanban.webp'
</script>

<style scoped>
/* Section */
.kanban-section {
  background: #0d0f18;
  padding: 96px 0;
  overflow: hidden;
}

/* Header */
.kanban-header {
  text-align: center;
  max-width: 700px;
  margin: 0 auto 4rem;
}

.kanban-header .eyebrow {
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

.kanban-header h2 {
  font-size: clamp(2rem, 4.5vw, 3rem);
  font-weight: 900;
  color: #fff;
  line-height: 1.15;
  letter-spacing: -0.02em;
  margin-bottom: 1rem;
}

.kanban-header p {
  color: #94a3b8;
  font-size: 1.05rem;
  line-height: 1.6;
}

.gradient-text {
  background: linear-gradient(90deg, #3b8ef8, #0072f5);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

/* Body: 3-column layout */
.kanban-body {
  display: grid;
  grid-template-columns: 1fr 2.5fr 1fr;
  align-items: center;
  gap: 3rem;
  max-width: 1440px;
  margin: 0 auto;
  padding: 0 1.5rem;
}

@media (max-width: 900px) {
  .kanban-body {
    grid-template-columns: 1fr;
  }
  .kanban-features {
    order: 2;
  }
  .kanban-image-wrapper {
    order: 1;
  }
  .kanban-stats {
    order: 3;
  }
}

/* Feature badges (left column) */
.kanban-features {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.feature-badge {
  display: flex;
  align-items: center;
  gap: 12px;
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.06);
  border-radius: 14px;
  padding: 14px 16px;
  transition: border-color 0.3s ease;
}

.feature-badge:hover {
  border-color: rgba(0, 114, 245, 0.25);
}

.badge-icon {
  font-size: 1.4rem;
  flex-shrink: 0;
}

.badge-text {
  display: flex;
  flex-direction: column;
  gap: 2px;
}

.badge-text strong {
  font-size: 0.875rem;
  font-weight: 700;
  color: #e2e8f0;
}

.badge-text span {
  font-size: 0.775rem;
  color: #64748b;
}

/* Center kanban image */
.kanban-image-wrapper {
  position: relative;
  text-align: center;
}

.image-glow {
  position: absolute;
  inset: -20px;
  background: radial-gradient(ellipse at center, rgba(0, 114, 245, 0.15) 0%, transparent 70%);
  pointer-events: none;
}

.kanban-img {
  width: 100%;
  max-width: 820px;
  border-radius: 16px;
  border: 1px solid rgba(255, 255, 255, 0.08);
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.5);
  position: relative;
  z-index: 1;
}

.float-badge {
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  background: rgba(17, 20, 34, 0.95);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 99px;
  padding: 6px 14px;
  font-size: 0.72rem;
  font-weight: 600;
  color: #cbd5e1;
  display: flex;
  align-items: center;
  gap: 6px;
  white-space: nowrap;
  z-index: 2;
  backdrop-filter: blur(10px);
}

.float-badge--top {
  top: -14px;
}

.float-badge--bottom {
  bottom: -14px;
}

.float-dot {
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: #0072f5;
  flex-shrink: 0;
}

.float-dot--green {
  background: #22c55e;
}

/* Stats (right column) */
.kanban-stats {
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
}

.stat-card {
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.06);
  border-radius: 16px;
  padding: 20px 24px;
  transition: border-color 0.3s ease;
}

.stat-card:hover {
  border-color: rgba(0, 114, 245, 0.2);
}

.stat-value {
  font-size: 2rem;
  font-weight: 900;
  color: #0072f5;
  line-height: 1;
  margin-bottom: 6px;
}

.stat-label {
  font-size: 0.825rem;
  color: #94a3b8;
  font-weight: 500;
}
</style>
