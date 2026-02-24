<template>
  <section id="faq-section" class="faq-section">
    <div class="container">

      <div class="faq-header" v-motion :initial="{ opacity: 0, y: 30 }"
        :visible="{ opacity: 1, y: 0, transition: { duration: 600 } }">
        <span class="faq-eyebrow">DÚVIDAS FREQUENTES</span>
        <h2>Tudo o que você precisa <span class="brand-gradient">saber sobre a Flux</span></h2>
        <p>Respostas rápidas para as perguntas mais comuns da nossa comunidade.</p>
      </div>

      <div class="faq-list">
        <div v-for="(item, i) in faqs" :key="i" class="faq-item" :class="{ 'faq-item--open': openIndex === i }" v-motion
          :initial="{ opacity: 0, y: 20 }" :visible="{ opacity: 1, y: 0, transition: { delay: i * 80, duration: 500 } }"
          @click="toggle(i)">
          <div class="faq-question">
            <span>{{ item.q }}</span>
            <div class="faq-chevron" :class="{ 'faq-chevron--open': openIndex === i }">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"
                stroke-linecap="round" stroke-linejoin="round">
                <polyline points="6 9 12 15 18 9" />
              </svg>
            </div>
          </div>

          <Transition name="faq-collapse" @enter="setHeight" @leave="clearHeight">
            <div v-if="openIndex === i" class="faq-answer-wrap">
              <div class="faq-answer">{{ item.a }}</div>
            </div>
          </Transition>
        </div>
      </div>

    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const openIndex = ref<number | null>(null)

const toggle = (i: number) => {
  openIndex.value = openIndex.value === i ? null : i
}

// Dynamic height for smooth animation
const setHeight = (el: Element) => {
  const htmlEl = el as HTMLElement
  htmlEl.style.maxHeight = '0'
  requestAnimationFrame(() => {
    htmlEl.style.maxHeight = htmlEl.scrollHeight + 'px'
  })
}
const clearHeight = (el: Element) => {
  const htmlEl = el as HTMLElement
  htmlEl.style.maxHeight = htmlEl.scrollHeight + 'px'
  requestAnimationFrame(() => {
    htmlEl.style.maxHeight = '0'
  })
}

const faqs = [
  {
    q: 'O que é a Flux e para quem ela foi criada?',
    a: 'A Flux é uma plataforma omnichannel de atendimento acelerada por IA, criada para empresas que precisam escalar o suporte ao cliente sem aumentar a equipe. Atendemos desde PMEs até grandes operações com centenas de atendentes.'
  },
  {
    q: 'Como a IA da Flux funciona na prática?',
    a: 'Nossa IA é treinada no contexto do seu negócio — produtos, políticas e tom de voz. Ela resolve automaticamente até 80% dos chamados, classifica leads, responde dúvidas frequentes e escala para humanos apenas quando necessário.'
  },
  {
    q: 'Quais canais a Flux suporta?',
    a: 'WhatsApp (API Oficial Meta), Instagram Direct, Facebook Messenger, Telegram, OLX, chat web, e-mail e SMS. Tudo centralizado em uma única caixa de entrada inteligente.'
  },
  {
    q: 'Preciso de conhecimento técnico para configurar a plataforma?',
    a: 'Não. A Flux foi projetada para times de atendimento e comerciais. A configuração é feita via painel visual sem código, e nossa equipe de onboarding acompanha você desde a ativação até o primeiro mês de uso.'
  },
  {
    q: 'Existe um período de teste gratuito?',
    a: 'Sim! Oferecemos uma demonstração guiada gratuita onde você pode ver a plataforma funcionando com dados reais do seu negócio. Agende diretamente pelo botão "Agendar Demo de Elite" na página inicial.'
  },
  {
    q: 'Os dados dos meus clientes estão seguros?',
    a: 'Sim. Todos os dados são armazenados com criptografia em repouso e em trânsito, em servidores certificados ISO 27001. Somos totalmente conformes com a LGPD e as políticas da Meta para WhatsApp Business.'
  }
]
</script>

<style scoped>
/* ── FAQ Section ─────────────────────────────── */
.faq-section {
  padding: 140px 0;
  position: relative;
}

.faq-section::before {
  content: '';
  position: absolute;
  inset: 0;
  background: radial-gradient(ellipse at 50% 60%, rgba(31, 105, 255, 0.05) 0%, transparent 65%);
  pointer-events: none;
}

/* Header */
.faq-header {
  text-align: center;
  margin-bottom: 4rem;
}

.faq-eyebrow {
  display: inline-block;
  font-size: 0.72rem;
  font-weight: 800;
  letter-spacing: 0.18em;
  color: var(--accent-primary);
  background: rgba(31, 105, 255, 0.1);
  border: 1px solid rgba(31, 105, 255, 0.25);
  border-radius: 99px;
  padding: 0.35rem 1rem;
  margin-bottom: 1.25rem;
}

.faq-header h2 {
  font-size: clamp(2rem, 5vw, 3.2rem);
  font-weight: 900;
  margin-bottom: 1rem;
  line-height: 1.15;
}

.faq-header p {
  font-size: 1.1rem;
  color: var(--text-secondary);
}

/* List */
.faq-list {
  max-width: 780px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

/* Item */
.faq-item {
  background: rgba(255, 255, 255, 0.025);
  border: 1px solid rgba(255, 255, 255, 0.07);
  border-radius: 16px;
  overflow: hidden;
  cursor: pointer;
  transition: border-color 0.3s, background 0.3s;
}

.faq-item:hover {
  border-color: rgba(31, 105, 255, 0.25);
  background: rgba(31, 105, 255, 0.03);
}

.faq-item--open {
  border-color: rgba(31, 105, 255, 0.3);
  background: rgba(31, 105, 255, 0.04);
}

/* Question row */
.faq-question {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  padding: 1.4rem 1.75rem;
  font-size: 1rem;
  font-weight: 600;
  color: #fff;
  user-select: none;
}

/* Chevron */
.faq-chevron {
  flex-shrink: 0;
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-secondary);
  transition: transform 0.35s cubic-bezier(0.16, 1, 0.3, 1),
    background 0.3s, color 0.3s;
}

.faq-chevron--open {
  transform: rotate(180deg);
  background: rgba(31, 105, 255, 0.15);
  border-color: rgba(31, 105, 255, 0.35);
  color: var(--accent-primary);
}

/* Answer */
.faq-answer-wrap {
  overflow: hidden;
  transition: max-height 0.4s cubic-bezier(0.16, 1, 0.3, 1);
}

.faq-answer {
  padding: 0 1.75rem 1.4rem;
  font-size: 0.97rem;
  color: var(--text-secondary);
  line-height: 1.7;
}

/* Collapse transition */
.faq-collapse-enter-active,
.faq-collapse-leave-active {
  overflow: hidden;
  transition: max-height 0.4s cubic-bezier(0.16, 1, 0.3, 1);
}

.faq-collapse-enter-from,
.faq-collapse-leave-to {
  max-height: 0 !important;
}

/* Mobile */
@media (max-width: 768px) {
  .faq-section {
    padding: 80px 0;
  }

  .faq-question {
    padding: 1.2rem 1.25rem;
    font-size: 0.95rem;
  }

  .faq-answer {
    padding: 0 1.25rem 1.2rem;
  }
}
</style>
