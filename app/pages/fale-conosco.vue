<template>
  <div class="company-page">
    <section class="hero-sub">
      <div class="container">
        <div class="hero-sub-content" v-motion-fade-visible>
          <span class="eyebrow">Fale Conosco</span>
          <h1 class="text-gradient">Estamos a um <br><span>clique de distância</span></h1>
          <p class="subtitle">
            Dúvidas, sugestões ou interesse em nossos planos enterprise? 
            Escolha o melhor canal e fale com nossa equipe.
          </p>
        </div>
      </div>
    </section>

    <section class="content-section">
      <div class="container">
        <div class="contact-grid">
          <div class="contact-form-wrap" v-motion-fade-visible>
            <h3>Envie uma mensagem</h3>
            <form @submit.prevent class="contact-form">
              <div class="form-group">
                <input type="text" placeholder="Seu nome completo" required>
              </div>
              <div class="form-group">
                <input type="email" placeholder="E-mail corporativo" required>
              </div>
              <div class="form-group">
                <input type="text" placeholder="WhatsApp (com DDD)" required>
              </div>
              <div class="form-group">
                <select required>
                  <option value="" disabled selected>Assunto</option>
                  <option>Vendas Enterprise</option>
                  <option>Suporte Técnico</option>
                  <option>Parcerias</option>
                  <option>Outros</option>
                </select>
              </div>
              <div class="form-group">
                <textarea placeholder="Como podemos ajudar?" rows="5" required></textarea>
              </div>
              <button type="submit" class="btn-primary" style="width: 100%;">Enviar Mensagem</button>
            </form>
          </div>

          <div class="contact-info-wrap">
            <div class="info-card" v-motion-fade-visible>
              <div class="info-icon">📱</div>
              <div>
                <h4>WhatsApp</h4>
                <p>Atendimento rápido e automatizado</p>
                <a href="https://wa.me/5500000000000" class="info-link">Iniciar conversa →</a>
              </div>
            </div>
            
            <div class="info-card" v-motion-fade-visible>
              <div class="info-icon">📧</div>
              <div>
                <h4>E-mail</h4>
                <p>Para propostas e parcerias</p>
                <a href="mailto:contato@fluxconversa.com.br" class="info-link">contato@fluxconversa.com.br</a>
              </div>
            </div>

            <div class="info-card" v-motion-fade-visible>
              <div class="info-icon">🏢</div>
              <div>
                <h4>Escritório</h4>
                <p>Av. Paulista, 1000 - São Paulo, SP</p>
                <span class="info-link">Segunda a Sexta, 9h às 18h</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
useHead({
  title: 'Fale Conosco | Flux - Suporte e Vendas',
  meta: [
    { name: 'description', content: 'Entre em contato com a equipe Flux através de WhatsApp, email ou formulário. Estamos prontos para ajudar sua empresa.' }
  ]
})
</script>

<style scoped>
.hero-sub {
  padding: 160px 0 80px;
  background: radial-gradient(circle at 0% 100%, rgba(31, 105, 255, 0.08) 0%, transparent 50%);
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

.contact-grid {
  display: grid;
  grid-template-columns: 1.2fr 0.8fr;
  gap: 60px;
}

.contact-form-wrap {
  padding: 50px;
  background: rgba(255, 255, 255, 0.02);
  border: 1px solid rgba(255, 255, 255, 0.05);
  border-radius: 32px;
}

.contact-form-wrap h3 {
  font-size: 2rem;
  margin-bottom: 2.5rem;
  color: #fff;
}

.contact-form {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.form-group input, 
.form-group select, 
.form-group textarea {
  width: 100%;
  padding: 18px 25px;
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 16px;
  color: #fff;
  font-size: 1rem;
  outline: none;
  transition: all 0.3s ease;
}

.form-group input:focus, 
.form-group select:focus, 
.form-group textarea:focus {
  border-color: var(--accent-primary);
  background: rgba(255, 255, 255, 0.05);
}

.contact-info-wrap {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.info-card {
  padding: 35px;
  background: rgba(31, 105, 255, 0.03);
  border: 1px solid rgba(31, 105, 255, 0.08);
  border-radius: 24px;
  display: flex;
  gap: 25px;
  align-items: center;
}

.info-icon {
  font-size: 2.5rem;
  flex-shrink: 0;
}

.info-card h4 {
  font-size: 1.2rem;
  color: #fff;
  margin-bottom: 8px;
}

.info-card p {
  color: var(--text-muted);
  font-size: 0.95rem;
  margin-bottom: 12px;
}

.info-link {
  color: var(--accent-primary);
  text-decoration: none;
  font-weight: 700;
  font-size: 0.95rem;
}

.btn-primary {
  padding: 20px;
  background: var(--accent-primary);
  color: #fff;
  border-radius: 16px;
  font-weight: 800;
  border: none;
  cursor: pointer;
  transition: all 0.3s ease;
}

.btn-primary:hover {
  transform: translateY(-3px);
  box-shadow: 0 10px 30px rgba(31, 105, 255, 0.3);
}

@media (max-width: 1024px) {
  .contact-grid { grid-template-columns: 1fr; }
}
</style>
