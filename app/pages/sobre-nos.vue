<template>
  <div class="company-page">
    <section class="hero-sub">
      <div class="container">
        <div class="hero-sub-content" v-motion-fade-visible>
          <span class="eyebrow">Nossa História</span>
          <h1 class="text-gradient">Transformando a comunicação <br><span>através da IA</span></h1>
          <p class="subtitle">
            Nascemos com o propósito de humanizar a tecnologia e automatizar a excelência, 
            permitindo que empresas foquem no que realmente importa: conexões reais.
          </p>
        </div>
      </div>
    </section>

    <section class="content-section">
      <div class="container">
        <div class="grid-2">
          <div class="content-block" v-motion-fade-visible>
            <h2>Nossa Missão</h2>
            <p>
              Prover soluções de engajamento omnichannel que simplificam a complexidade 
              da comunicação moderna, utilizando IA de ponta para criar experiências 
              memoráveis para cada cliente.
            </p>
          </div>
          <div class="content-block" v-motion-fade-visible>
            <h2>Nossa Visão</h2>
            <p>
              Ser a plataforma líder global em orquestração de jornadas de clientes, 
              sendo referência em inovação, ética em IA e resultados mensuráveis para nossos parceiros.
            </p>
          </div>
        </div>

        <div class="stats-grid v-motion-fade-visible" style="margin-top: 80px;">
          <div class="stat-item">
            <span class="stat-value">9.000+</span>
            <span class="stat-label">Clientes Ativos</span>
          </div>
          <div class="stat-item">
            <span class="stat-value">50M+</span>
            <span class="stat-label">Mensagens/Mês</span>
          </div>
          <div class="stat-item">
            <span class="stat-value">99.9%</span>
            <span class="stat-label">Uptime Garantido</span>
          </div>
          <div class="stat-item">
            <span class="stat-value">24/7</span>
            <span class="stat-label">Suporte Especializado</span>
          </div>
        </div>
      </div>
    </section>

    <CtaSection />
  </div>
</template>

<script setup lang="ts">
useHead({
  title: 'Sobre Nós | Flux - IA e Engajamento Omnichannel',
  meta: [
    { name: 'description', content: 'Saiba mais sobre a Flux, nossa missão de transformar a comunicação empresarial através de IA e nossa jornada até aqui.' }
  ]
})
</script>

<style scoped>
.hero-sub {
  padding: 160px 0 80px;
  background: radial-gradient(circle at 0% 0%, rgba(31, 105, 255, 0.08) 0%, transparent 50%);
  text-align: center;
}

.hero-sub-content {
  max-width: 900px;
  margin: 0 auto;
}

.hero-sub h1 {
  font-size: clamp(2.5rem, 6vw, 4.5rem);
  line-height: 1.1;
  margin-bottom: 2rem;
}

.hero-sub h1 span {
  color: var(--accent-primary);
}

.subtitle {
  font-size: 1.4rem;
  color: var(--text-secondary);
  line-height: 1.6;
}

.content-section {
  padding: 100px 0;
}

.grid-2 {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 40px;
}

.content-block {
  padding: 40px;
  background: rgba(255, 255, 255, 0.02);
  border: 1px solid rgba(255, 255, 255, 0.05);
  border-radius: 24px;
}

.content-block h2 {
  font-size: 2rem;
  margin-bottom: 1.5rem;
  color: #fff;
}

.content-block p {
  color: var(--text-secondary);
  line-height: 1.7;
  font-size: 1.1rem;
}

.stats-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 30px;
  padding: 60px;
  background: rgba(31, 105, 255, 0.03);
  border-radius: 32px;
  border: 1px solid rgba(31, 105, 255, 0.1);
}

.stat-item {
  text-align: center;
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.stat-value {
  font-size: 2.5rem;
  font-weight: 800;
  color: var(--accent-primary);
}

.stat-label {
  font-size: 0.9rem;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: var(--text-muted);
  font-weight: 600;
}

@media (max-width: 768px) {
  .hero-sub { padding: 120px 0 60px; }
  .grid-2 { grid-template-columns: 1fr; }
  .stats-grid { 
    grid-template-columns: repeat(2, 1fr); 
    padding: 30px;
    gap: 20px;
  }
}
</style>
