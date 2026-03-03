<template>
  <div class="company-page">
    <section class="hero-sub">
      <div class="container">
        <div class="hero-sub-content" v-motion-fade-visible>
          <span class="eyebrow">Programa de Canais</span>
          <h1 class="text-gradient">Cresça junto com a <br><span>liderança em IA</span></h1>
          <p class="subtitle">
            Seja um parceiro Flux e ofereça aos seus clientes a plataforma mais 
            avançada de engajamento do mercado.
          </p>
        </div>
      </div>
    </section>

    <section class="content-section">
      <div class="container">
        <div class="partner-types">
          <div class="partner-card highlight" v-motion-fade-visible>
            <div class="badge">INDICAÇÃO</div>
            <h3>Afiliados e Referral</h3>
            <p>Para consultores e agências que desejam indicar a Flux e ganhar comissões recorrentes.</p>
            <ul>
              <li>Comissão agressiva e vitalícia</li>
              <li>Material de apoio e vendas</li>
              <li>Portal do parceiro exclusivo</li>
            </ul>
            <NuxtLink to="/precos" class="btn-primary" style="width: 100%; text-align: center;">Quero Indicar</NuxtLink>
          </div>

          <div class="partner-card" v-motion-fade-visible>
            <div class="badge">TECNOLOGIA</div>
            <h3>Parceiros de Integração</h3>
            <p>Para empresas de software que desejam integrar suas soluções nativamente com a Flux.</p>
            <ul>
              <li>API Enterprise robusta</li>
              <li>Suporte técnico prioritário</li>
              <li>Co-marketing e visibilidade</li>
            </ul>
            <NuxtLink to="/precos" class="btn-outline" style="width: 100%; text-align: center;">Integrar Agora</NuxtLink>
          </div>
        </div>

        <div class="benefits-row v-motion-fade-visible" style="margin-top: 100px;">
          <div class="benefit-item">
            <h4>Treinamento VIP</h4>
            <p>Certificações exclusivas para sua equipe técnica e comercial.</p>
          </div>
          <div class="benefit-item">
            <h4>Manager Dedicado</h4>
            <p>Um gerente de contas para apoiar seu crescimento conosco.</p>
          </div>
          <div class="benefit-item">
            <h4>Eventos Exclusivos</h4>
            <p>Acesso prioritário a betas e eventos Flux Experience.</p>
          </div>
        </div>
      </div>
    </section>

    <CtaSection />
  </div>
</template>

<script setup lang="ts">
useHead({
  title: 'Parcerias | Flux - Programa de Parceiros',
  meta: [
    { name: 'description', content: 'Torne-se um parceiro Flux. Oferecemos programas de indicação e integração tecnológica para acelerar seu negócio.' }
  ]
})
</script>

<style scoped>
.hero-sub {
  padding: 160px 0 80px;
  background: radial-gradient(circle at 50% 50%, rgba(31, 105, 255, 0.08) 0%, transparent 60%);
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

.partner-types {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 40px;
}

.partner-card {
  padding: 60px 40px;
  background: rgba(255, 255, 255, 0.02);
  border: 1px solid rgba(255, 255, 255, 0.05);
  border-radius: 32px;
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.partner-card.highlight {
  background: rgba(31, 105, 255, 0.05);
  border-color: rgba(31, 105, 255, 0.2);
  box-shadow: 0 20px 80px rgba(0, 0, 0, 0.4);
}

.badge {
  background: var(--accent-primary);
  color: #fff;
  padding: 5px 15px;
  border-radius: 50px;
  font-size: 0.75rem;
  font-weight: 800;
  align-self: flex-start;
}

.partner-card h3 {
  font-size: 2.2rem;
  color: #fff;
}

.partner-card p {
  color: var(--text-secondary);
  line-height: 1.6;
}

.partner-card ul {
  list-style: none;
  margin-bottom: 20px;
}

.partner-card ul li {
  color: #fff;
  margin-bottom: 10px;
  display: flex;
  align-items: center;
  gap: 10px;
}

.partner-card ul li::before {
  content: '✓';
  color: var(--accent-primary);
  font-weight: 900;
}

.benefits-row {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 40px;
  text-align: center;
}

.benefit-item h4 {
  font-size: 1.4rem;
  color: #fff;
  margin-bottom: 15px;
}

.benefit-item p {
  color: var(--text-muted);
}

.btn-primary {
  padding: 18px;
  background: var(--accent-primary);
  color: #fff;
  border-radius: 50px;
  font-weight: 800;
  text-decoration: none;
  transition: all 0.3s ease;
}

.btn-outline {
  padding: 18px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  color: #fff;
  border-radius: 50px;
  font-weight: 800;
  text-decoration: none;
  transition: all 0.3s ease;
}

.btn-outline:hover {
  background: rgba(255, 255, 255, 0.05);
  border-color: rgba(255, 255, 255, 0.2);
}

@media (max-width: 900px) {
  .partner-types, .benefits-row { grid-template-columns: 1fr; }
}
</style>
