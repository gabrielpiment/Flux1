<template>
  <section class="quick-responses-section" id="quick-responses">
    <div class="container">
      <div class="section-content">
        <!-- Visual Side (Chat Simulator) -->
        <div class="visual-side" v-motion-fade-visible>
          <div class="demo-wrapper">
            <div class="demo-container">
              <div class="chat-window">
                <div class="chat-header">
                  <div class="header-avatar">C</div>
                  <div class="header-info">
                    <div class="header-name">Chat de Atendimento</div>
                    <div class="header-status">Online</div>
                  </div>
                  <div class="header-tags">
                    <span class="tag tag-negotiating">Negociando</span>
                  </div>
                </div>
                
                <div class="chat-messages">
                  <!-- Incoming message from customer -->
                  <div class="message incoming">
                    <div class="message-bubble">
                      Olá! Qual o valor do plano de vocês?
                    </div>
                    <div class="message-time">10:23</div>
                  </div>
                  
                  <!-- Outgoing message (Simulated typing & response) -->
                  <div class="message outgoing" v-if="step >= 1">
                    <div class="message-bubble" :class="{ 'spotlight': step === 2 }">
                      <div class="typing-indicator" v-if="step === 1">
                        <span></span>
                        <span></span>
                        <span></span>
                      </div>
                      <div class="response-bubble" v-else>
                        Olá! Nossos planos começam a partir de R$ 67/mês. Você pode conferir todos os detalhes em nossa página de Planos! 🚀
                      </div>
                    </div>
                    <div class="message-time" v-if="step === 2">10:23</div>
                  </div>
                </div>
                
                <div class="chat-input-area">
                  <div class="input-wrapper">
                    <div class="input-field">
                      <span class="placeholder" v-if="step === 0">Digite <span style="color: #0072f5; font-weight: bold;">/planos</span> para responder...</span>
                      <span class="trigger-text" v-else>/planos</span>
                    </div>
                    <button class="send-btn" aria-label="Enviar mensagem">
                      <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
                        <path d="M16.6915026,12.4744748 L3.50612381,13.2599618 C3.19218622,13.2599618 3.03521743,13.4170592 3.03521743,13.5741566 L1.15159189,20.0151496 C0.8376543,20.8006365 0.99,21.89 1.77946707,22.52 C2.41,22.99 3.50612381,23.1 4.13399899,22.8429026 L21.714504,14.0454487 C22.6563168,13.5741566 23.1272231,12.6315722 22.9702544,11.6889879 L4.13399899,1.16151496 C3.34915502,0.9 2.40734225,0.9 1.77946707,1.4429026 C0.994623095,2.0766017 0.837654326,3.1659 1.15159189,3.9513869 L3.03521743,10.3923799 C3.03521743,10.5494773 3.19218622,10.7065747 3.50612381,10.7065747 L16.6915026,11.4920616 C16.6915026,11.4920616 17.1624089,11.4920616 17.1624089,12.0349652 C17.1624089,12.4744748 16.6915026,12.4744748 16.6915026,12.4744748 Z"></path>
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <!-- Text Side -->
        <div class="text-side" v-motion-fade-visible>
          <span class="eyebrow">Respostas Rápidas</span>
          <h2 class="section-heading">Responda perguntas repetitivas em <span class="brand-gradient">1 segundo</span></h2>
          <p class="section-text">
            Perguntas repetitivas consomem tempo da sua equipe. Respostas rápidas eliminam atrasos e garantem consistência em cada atendimento.
          </p>
          
          <div class="features-list">
            <div class="feature-item-card">
              <div class="feature-card-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M12 5v14M5 12h14"></path>
                </svg>
              </div>
              <div class="feature-text">
                <h4>Atalhos Customizáveis</h4>
                <p>Crie quantos atalhos precisar</p>
              </div>
            </div>
            
            <div class="feature-item-card">
              <div class="feature-card-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
                </svg>
              </div>
              <div class="feature-text">
                <h4>Múltiplas Mensagens</h4>
                <p>Respostas com vários textos</p>
              </div>
            </div>
            
            <div class="feature-item-card">
              <div class="feature-card-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                  <polyline points="17 8 12 3 7 8"></polyline>
                  <line x1="12" y1="3" x2="12" y2="15"></line>
                </svg>
              </div>
              <div class="feature-text">
                <h4>Com Anexos</h4>
                <p>Envie arquivos automaticamente</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

const step = ref(0)
let timeoutIds: ReturnType<typeof setTimeout>[] = []

const runSimulation = () => {
  step.value = 0
  
  // Step 1: User types shortcode /planos and typing indicator shows
  const id1 = setTimeout(() => {
    step.value = 1
  }, 2000)
  
  // Step 2: typing indicator completes and outgoing message appears
  const id2 = setTimeout(() => {
    step.value = 2
  }, 4500)
  
  // Reset and repeat
  const id3 = setTimeout(() => {
    runSimulation()
  }, 10000)
  
  timeoutIds.push(id1, id2, id3)
}

onMounted(() => {
  runSimulation()
})

onUnmounted(() => {
  timeoutIds.forEach(clearTimeout)
})
</script>

<style scoped>
.quick-responses-section {
  background: #0d0f18;
  overflow: hidden;
  padding: 80px 0;
  position: relative;
}

.container {
  margin: 0 auto;
  max-width: 1400px;
  padding: 0 40px;
}

.section-content {
  align-items: center;
  display: grid;
  gap: 5rem;
  grid-template-columns: 1fr 1fr;
}

@media(max-width: 1100px) {
  .section-content {
    grid-template-columns: 1fr;
    gap: 3rem;
  }
}
</style>
