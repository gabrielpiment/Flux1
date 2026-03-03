<template>
  <div class="company-page">
    <section class="hero-sub">
      <div class="container">
        <div class="hero-sub-content" v-motion-fade-visible>
          <span class="eyebrow">Trabalhe Conosco</span>
          <h1 class="text-gradient">Construa o futuro da <br><span>comunicação inteligente</span></h1>
          <p class="subtitle">
            Buscamos talentos inquietos, criativos e apaixonados por tecnologia para 
            revolucionar a forma como empresas e pessoas interagem.
          </p>
        </div>
      </div>
    </section>

    <section class="content-section">
      <div class="container">
        <div class="values-grid">
          <div class="value-card" v-motion-fade-visible>
            <div class="value-icon">🚀</div>
            <h3>Inovação Constante</h3>
            <p>Não aceitamos o status quo. Estamos sempre testando o limite do que é possível com IA.</p>
          </div>
          <div class="value-card" v-motion-fade-visible>
            <div class="value-icon">🤝</div>
            <h3>Colaboração Radical</h3>
            <p>Acreditamos que as melhores ideias surgem de ambientes diversos e colaborativos.</p>
          </div>
          <div class="value-card" v-motion-fade-visible>
            <div class="value-icon">💎</div>
            <h3>Qualidade Enterprise</h3>
            <p>Construímos tecnologia robusta e confiável, pronta para escalar com os maiores players.</p>
          </div>
        </div>

        <div class="open-positions" style="margin-top: 100px;">
          <h2 class="text-center" style="margin-bottom: 50px;">Vagas em Aberto</h2>
          <div class="positions-list">
            <div class="position-item" v-motion-fade-visible>
              <div class="pos-info">
                <h4>Senior Fullstack Engineer (Nuxt/Node)</h4>
                <span>Remoto • Full-time</span>
              </div>
              <NuxtLink to="/precos" class="btn-outline">Candidatar-se</NuxtLink>
            </div>
            <div class="position-item" v-motion-fade-visible>
              <div class="pos-info">
                <h4>AI/ML Specialist</h4>
                <span>Remoto • Full-time</span>
              </div>
              <NuxtLink to="/precos" class="btn-outline">Candidatar-se</NuxtLink>
            </div>
            <div class="position-item" v-motion-fade-visible>
              <div class="pos-info">
                <h4>Product Designer (UX/UI)</h4>
                <span>Híbrido (SP) • Full-time</span>
              </div>
              <NuxtLink to="/precos" class="btn-outline">Candidatar-se</NuxtLink>
            </div>
          </div>
        </div>
      </div>
    </section>

    <CtaSection />
  </div>
</template>

<script setup lang="ts">
useHead({
  title: 'Carreiras | Flux - Junte-se ao nosso time',
  meta: [
    { name: 'description', content: 'Explore oportunidades de carreira na Flux. Venha construir o futuro do engajamento omnichannel acelerado por IA.' }
  ]
})
</script>

<style scoped>
.hero-sub {
  padding: 160px 0 80px;
  background: radial-gradient(circle at 100% 0%, rgba(31, 105, 255, 0.08) 0%, transparent 50%);
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

.values-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;
}

.value-card {
  padding: 40px;
  background: rgba(255, 255, 255, 0.02);
  border: 1px solid rgba(255, 255, 255, 0.05);
  border-radius: 24px;
  text-align: center;
  transition: transform 0.3s ease;
}

.value-card:hover {
  transform: translateY(-10px);
  background: rgba(255, 255, 255, 0.04);
}

.value-icon {
  font-size: 3rem;
  margin-bottom: 1.5rem;
}

.value-card h3 {
  font-size: 1.5rem;
  margin-bottom: 1rem;
  color: #fff;
}

.value-card p {
  color: var(--text-secondary);
  line-height: 1.6;
}

.positions-list {
  display: flex;
  flex-direction: column;
  gap: 15px;
}

.position-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 30px 40px;
  background: rgba(31, 105, 255, 0.03);
  border: 1px solid rgba(31, 105, 255, 0.1);
  border-radius: 20px;
}

.pos-info h4 {
  font-size: 1.2rem;
  color: #fff;
  margin-bottom: 5px;
}

.pos-info span {
  color: var(--text-muted);
  font-size: 0.9rem;
}

.btn-outline {
  padding: 12px 25px;
  border: 1px solid var(--accent-primary);
  border-radius: 50px;
  color: #fff;
  font-weight: 600;
  text-decoration: none;
  transition: all 0.3s ease;
}

.btn-outline:hover {
  background: var(--accent-primary);
  box-shadow: 0 0 20px rgba(31, 105, 255, 0.3);
}

@media (max-width: 900px) {
  .values-grid { grid-template-columns: 1fr; }
  .position-item { flex-direction: column; gap: 20px; text-align: center; }
}
</style>
