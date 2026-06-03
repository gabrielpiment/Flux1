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
          <img src="/images/kanban.webp" alt="Kanban Visual" class="kanban-img">
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
</script>
