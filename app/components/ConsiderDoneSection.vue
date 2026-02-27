<template>
  <section id="consider-done-section" class="consider-done">
    <div class="glow-bg glow-1"></div>
    <div class="glow-bg glow-2"></div>

    <div class="container relative z-10">
      <div class="consider-done-content">
        <h2 v-motion-fade-visible>Considere Feito.</h2>
        <p v-motion-fade-visible>Transforme o caos em clareza com a IA que não apenas responde, mas resolve.</p>

        <!-- Wide chat simulation -->
        <div class="chat-demo-wrapper" v-motion-fade-visible>

          <!-- Header -->
          <div class="chat-demo-header">
            <div class="chat-demo-avatar">
              <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20" style="color:#fff">
                <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
              </svg>
            </div>
            <div class="chat-demo-info">
              <span class="chat-demo-name">Flux IA</span>
              <span class="chat-demo-status">
                <span class="status-pulse"></span> online agora
              </span>
            </div>
            <div class="chat-demo-badges">
              <span class="chat-badge">WhatsApp</span>
              <span class="chat-badge chat-badge--ai">IA Ativa</span>
            </div>
          </div>

          <!-- Messages area -->
          <div class="chat-demo-body" ref="chatBody">
            <transition-group name="msg-fade" tag="div" class="chat-demo-messages">
              <template v-for="(msg, i) in visibleMessages" :key="i">
                <!-- Date separator -->
                <div v-if="msg.type === 'date'" class="chat-date-sep">
                  <span>{{ msg.text }}</span>
                </div>

                <!-- Regular message -->
                <div v-else class="cmsg" :class="msg.from === 'client' ? 'cmsg--client' : 'cmsg--ai'">
                  <div v-if="msg.from === 'ai'" class="cmsg__mini-avatar">
                    <svg viewBox="0 0 24 24" fill="currentColor" width="12" height="12" style="color:#fff">
                      <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
                    </svg>
                  </div>
                  <div class="cmsg__content">
                    <div v-if="msg.from === 'ai'" class="cmsg__sender">Flux IA</div>
                    <div class="cmsg__bubble">{{ msg.text }}</div>
                    <span class="cmsg__time">{{ msg.time }}</span>
                  </div>
                </div>
              </template>
            </transition-group>

            <!-- Typing indicator -->
            <transition name="typing-fade">
              <div v-if="isTyping" class="typing-indicator" :class="typingFrom === 'client' ? 'typing-client' : ''">
                <div v-if="typingFrom === 'ai'" class="cmsg__mini-avatar">
                  <svg viewBox="0 0 24 24" fill="currentColor" width="12" height="12" style="color:#fff">
                    <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
                  </svg>
                </div>
                <div class="typing-dots">
                  <span></span><span></span><span></span>
                </div>
              </div>
            </transition>

            <!-- Labels (auto-shown after last message) -->
            <transition name="msg-fade">
              <div v-if="showLabels" class="chat-labels-row">
                <div class="chat-label-event">
                  <span class="label-event-text">🤖 Flux IA adicionou etiquetas automaticamente</span>
                </div>
                <div class="chat-labels">
                  <span class="chat-pill"
                    style="background:rgba(139,92,246,.18);color:#c4b5fd;border:1px solid rgba(139,92,246,.35);">
                    🏷 Lead Quente
                  </span>
                  <span class="chat-pill"
                    style="background:rgba(6,182,212,.14);color:#67e8f9;border:1px solid rgba(6,182,212,.3);">
                    🎯 Interesse: Growth
                  </span>
                  <span class="chat-pill"
                    style="background:rgba(34,197,94,.14);color:#86efac;border:1px solid rgba(34,197,94,.28);">
                    📌 Equipe Comercial
                  </span>
                  <span class="chat-pill"
                    style="background:rgba(251,146,60,.14);color:#fdba74;border:1px solid rgba(251,146,60,.3);">
                    ⏰ Follow-up 3 dias
                  </span>
                </div>
              </div>
            </transition>
          </div>

          <!-- Input area (decorative) -->
          <div class="chat-demo-footer">
            <div class="chat-input-fake">
              <span>Digite uma mensagem...</span>
            </div>
            <button class="chat-send-btn" aria-label="enviar">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="18" height="18">
                <path d="M22 2L11 13" />
                <path d="M22 2L15 22L11 13L2 9L22 2Z" stroke-linejoin="round" />
              </svg>
            </button>
          </div>

        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted, nextTick } from 'vue'

interface ChatMsg {
  type?: string
  from?: 'client' | 'ai'
  text: string
  time?: string
}

const SCRIPT: ChatMsg[] = [
  { type: 'date', text: 'Hoje, 14:02' },
  { from: 'client', text: 'Oi! Quero saber mais sobre os planos 😊', time: '14:02' },
  { from: 'ai', text: 'Olá! Que bom ter você aqui. Temos planos a partir de R$97/mês. Qual é o tamanho da sua equipe?', time: '14:02' },
  { from: 'client', text: 'Somos 8 pessoas no time de vendas.', time: '14:03' },
  { from: 'ai', text: 'Perfeito! Para 8 pessoas o plano Growth é ideal — inclui omnichannel, IA nativa e relatórios em tempo real. Quer receber o link para teste grátis? 🚀', time: '14:03' },
  { from: 'client', text: 'Sim! Me manda 👍', time: '14:04' },
  { from: 'ai', text: 'Pronto! Link enviado. Qualquer dúvida é só chamar — estou disponível 24h 😉', time: '14:04' },
]

const visibleMessages = ref<ChatMsg[]>([])
const isTyping = ref(false)
const typingFrom = ref<'ai' | 'client'>('ai')
const showLabels = ref(false)
const chatBody = ref<HTMLElement | null>(null)
let timeouts: ReturnType<typeof setTimeout>[] = []

function scrollBottom() {
  nextTick(() => {
    if (chatBody.value) chatBody.value.scrollTop = chatBody.value.scrollHeight
  })
}

function schedule(fn: () => void, ms: number) {
  const id = setTimeout(fn, ms)
  timeouts.push(id)
}

function runSequence() {
  let t = 400

  SCRIPT.forEach((msg, i) => {
    const isLast = i === SCRIPT.length - 1

    if (msg.type === 'date') {
      schedule(() => {
        visibleMessages.value.push(msg)
        scrollBottom()
      }, t)
      t += 300
    } else {
      // Show typing indicator
      const typingDelay = msg.from === 'ai' ? 1200 : 700
      schedule(() => {
        typingFrom.value = msg.from as 'ai' | 'client'
        isTyping.value = true
        scrollBottom()
      }, t)
      t += typingDelay

      // Show message
      schedule(() => {
        isTyping.value = false
        visibleMessages.value.push(msg)
        scrollBottom()
        if (isLast) {
          // Show labels after last AI message
          schedule(() => { showLabels.value = true; scrollBottom() }, 800)
        }
      }, t)
      t += 600
    }
  })
}

onMounted(() => {
  // Use IntersectionObserver so animation only starts when visible
  const section = document.getElementById('consider-done-section')
  if (!section) { runSequence(); return }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        runSequence()
        observer.disconnect()
      }
    })
  }, { threshold: 0.3 })
  observer.observe(section)
})

onUnmounted(() => { timeouts.forEach(clearTimeout) })

const vReveal = {
  mounted: (el: HTMLElement, binding: any) => {
    el.classList.add('v-reveal')
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setTimeout(() => el.classList.add('revealed'), binding.value?.delay || 0)
          observer.unobserve(el)
        }
      })
    }, { threshold: 0.1 })
    observer.observe(el)
  }
}
</script>

<style scoped>
.glow-bg {
  position: absolute;
  width: 700px;
  height: 700px;
  background: radial-gradient(circle, rgba(0, 114, 245, .07) 0%, transparent 70%);
  filter: blur(80px);
  pointer-events: none;
  z-index: 1;
}

.glow-1 {
  top: -10%;
  left: -10%;
}

.glow-2 {
  bottom: -10%;
  right: -10%;
  background: radial-gradient(circle, rgba(14, 165, 233, .05) 0%, transparent 70%);
}

.relative {
  position: relative;
}

.z-10 {
  z-index: 10;
}

/* ── Wrapper ────────────────────────────────── */
.chat-demo-wrapper {
  max-width: 720px;
  margin: 0 auto;
  background: rgba(10, 10, 10, 0.85);
  backdrop-filter: blur(12px);
  color: #fff;
  border: 1px solid rgba(255, 255, 255, .09);
  border-radius: 24px;
  overflow: hidden;
  box-shadow: 0 30px 80px rgba(0, 0, 0, .5), 0 0 0 1px rgba(255, 255, 255, .04);
}

/* ── Header ──────────────────────────────────── */
.chat-demo-header {
  display: flex;
  align-items: center;
  gap: .85rem;
  padding: 1rem 1.5rem;
  background: rgba(0, 114, 245, 0.3);
  border-bottom: 1px solid rgba(255, 255, 255, .07);
}

.chat-demo-avatar {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: linear-gradient(135deg, #0072f5, #00b3ff);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

.chat-demo-avatar {
  font-size: 0;
}

.chat-demo-info {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 2px;
}

.chat-demo-name {
  font-size: .9rem;
  font-weight: 700;
  color: #fff;
}

.chat-demo-status {
  font-size: .72rem;
  color: rgba(255, 255, 255, .45);
  display: flex;
  align-items: center;
  gap: 5px;
}

.status-pulse {
  display: inline-block;
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background: #4ade80;
  box-shadow: 0 0 6px #4ade80;
  animation: pulse-dot 1.8s ease-in-out infinite;
}

@keyframes pulse-dot {

  0%,
  100% {
    opacity: 1;
    transform: scale(1);
  }

  50% {
    opacity: .6;
    transform: scale(.85);
  }
}

.chat-demo-badges {
  display: flex;
  gap: .4rem;
  flex-shrink: 0;
}

.chat-badge {
  font-size: .62rem;
  font-weight: 700;
  padding: .25rem .6rem;
  border-radius: 99px;
  background: rgba(255, 255, 255, .06);
  border: 1px solid rgba(255, 255, 255, .1);
  color: rgba(255, 255, 255, .6);
}

.chat-badge--ai {
  background: rgba(0, 114, 245, .15);
  border-color: rgba(0, 114, 245, .35);
  color: #93c5fd;
}

/* ── Body / scroll ─────────────────────────── */
.chat-demo-body {
  height: 340px;
  overflow-y: auto;
  padding: 1.25rem 1.5rem;
  display: flex;
  flex-direction: column;
  gap: .2rem;
  scrollbar-width: none;
}

.chat-demo-body::-webkit-scrollbar {
  display: none;
}

.chat-demo-messages {
  display: flex;
  flex-direction: column;
  gap: .6rem;
}

/* Date separator */
.chat-date-sep {
  text-align: center;
  margin: .4rem 0;
}

.chat-date-sep span {
  font-size: .65rem;
  color: rgba(255, 255, 255, .25);
  background: rgba(255, 255, 255, .04);
  border: 1px solid rgba(255, 255, 255, .06);
  border-radius: 99px;
  padding: .2rem .75rem;
}

/* ── Messages ─────────────────────────────── */
.cmsg {
  display: flex;
  align-items: flex-end;
  gap: .6rem;
}

.cmsg--client {
  flex-direction: row-reverse;
}

.cmsg__mini-avatar {
  width: 28px;
  height: 28px;
  border-radius: 50%;
  flex-shrink: 0;
  background: linear-gradient(135deg, #0072f5, #00b3ff);
  display: flex;
  align-items: center;
  justify-content: center;
  align-self: flex-end;
}


.cmsg__content {
  display: flex;
  flex-direction: column;
  gap: 3px;
  max-width: 72%;
}

.cmsg--client .cmsg__content {
  align-items: flex-end;
}

.cmsg__sender {
  font-size: .65rem;
  font-weight: 700;
  color: rgba(255, 255, 255, .35);
  margin-left: 2px;
}

.cmsg__bubble {
  padding: .65rem 1rem;
  border-radius: 18px;
  font-size: .84rem;
  line-height: 1.5;
  color: rgba(255, 255, 255, .88);
}

.cmsg--ai .cmsg__bubble {
  background: rgba(255, 255, 255, .06);
  border: 1px solid rgba(255, 255, 255, .1);
  border-bottom-left-radius: 4px;
}

.cmsg--client .cmsg__bubble {
  background: linear-gradient(135deg, rgba(0, 114, 245, .75), rgba(0, 150, 255, .6));
  border: 1px solid rgba(0, 114, 245, .4);
  border-bottom-right-radius: 4px;
  color: #fff;
}

.cmsg__time {
  font-size: .6rem;
  color: rgba(255, 255, 255, .25);
}

/* ── Typing indicator ─────────────────────── */
.typing-indicator {
  display: flex;
  align-items: flex-end;
  gap: .6rem;
  margin-top: .4rem;
}

.typing-client {
  flex-direction: row-reverse;
}

.typing-dots {
  background: rgba(255, 255, 255, .06);
  border: 1px solid rgba(255, 255, 255, .1);
  border-radius: 18px;
  border-bottom-left-radius: 4px;
  padding: .6rem .9rem;
  display: flex;
  gap: 4px;
  align-items: center;
}

.typing-client .typing-dots {
  border-radius: 18px;
  border-bottom-right-radius: 4px;
  border-bottom-left-radius: 18px;
}

.typing-dots span {
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: rgba(255, 255, 255, .4);
  animation: typing-bounce 1.2s ease-in-out infinite;
}

.typing-dots span:nth-child(2) {
  animation-delay: .2s;
}

.typing-dots span:nth-child(3) {
  animation-delay: .4s;
}

@keyframes typing-bounce {

  0%,
  60%,
  100% {
    transform: translateY(0);
    opacity: .4;
  }

  30% {
    transform: translateY(-5px);
    opacity: 1;
  }
}

/* ── Labels ───────────────────────────────── */
.chat-labels-row {
  display: flex;
  flex-direction: column;
  gap: .6rem;
  margin-top: .8rem;
  border-top: 1px solid rgba(255, 255, 255, .06);
  padding-top: .8rem;
}

.label-event-text {
  font-size: .7rem;
  color: rgba(255, 255, 255, .3);
  text-align: center;
}

.chat-labels {
  display: flex;
  flex-wrap: wrap;
  gap: .45rem;
  justify-content: center;
}

.chat-pill {
  font-size: .72rem;
  font-weight: 700;
  padding: .32rem .75rem;
  border-radius: 99px;
}

/* ── Footer ───────────────────────────────── */
.chat-demo-footer {
  display: flex;
  align-items: center;
  gap: .75rem;
  padding: .9rem 1.5rem;
  background: rgba(255, 255, 255, .02);
  border-top: 1px solid rgba(255, 255, 255, .06);
}

.chat-input-fake {
  flex: 1;
  background: rgba(255, 255, 255, .04);
  border: 1px solid rgba(255, 255, 255, .09);
  border-radius: 99px;
  padding: .55rem 1rem;
  font-size: .82rem;
  color: rgba(255, 255, 255, .2);
}

.chat-send-btn {
  width: 38px;
  height: 38px;
  border-radius: 50%;
  flex-shrink: 0;
  background: linear-gradient(135deg, #0072f5, #00b3ff);
  border: none;
  cursor: pointer;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 4px 14px rgba(0, 114, 245, .4);
  transition: transform .2s ease;
}

.chat-send-btn:hover {
  transform: scale(1.08);
}

/* ── Transitions ─────────────────────────── */
.msg-fade-enter-active {
  transition: all .4s cubic-bezier(.16, 1, .3, 1);
}

.msg-fade-enter-from {
  opacity: 0;
  transform: translateY(10px);
}

.typing-fade-enter-active,
.typing-fade-leave-active {
  transition: opacity .3s ease;
}

.typing-fade-enter-from,
.typing-fade-leave-to {
  opacity: 0;
}
</style>
