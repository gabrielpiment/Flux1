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

          <!-- Labels (Fixed at the top, outside scrollable body) -->
          <transition name="msg-fade">
            <div v-if="showLabels" class="chat-labels-fixed">
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

                    <!-- Video Message Item -->
                    <div v-if="msg.text === 'VIDEO_MESSAGE'" class="video-msg-wrapper">
                      <div class="video-msg-container">
                        <div class="video-msg-card" @click="emit('play-video')">
                          <div class="video-card-thumb">
                            <div class="video-card-overlay">
                              <div class="play-icon-pulse">
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                                  <polygon points="5 3 19 12 5 21 5 3"></polygon>
                                </svg>
                              </div>
                            </div>
                            <img src="/images/capa-video.png" alt="Demo" class="v-thumb-img">
                          </div>
                          <div class="video-card-info">
                            <span class="v-duration">Assista e pare de aceitar esse amadorismo no whatsapp hoje</span>
                          </div>
                        </div>

                        <!-- Inline Hint (Beside video) -->
                        <div class="video-inline-hint">
                          <div class="hint-pulse"></div>
                          <span>Clique para assistir agora</span>
                        </div>
                      </div>

                      <!-- Fazer Teste Grátis strictly BELOW video -->
                      <div class="video-action-area">
                        <NuxtLink to="/precos" class="chat-shimmer-btn">
                          Fazer Teste Grátis Agora
                        </NuxtLink>
                      </div>
                    </div>

                    <!-- Regular Bubble -->
                    <div v-else class="cmsg__bubble">{{ msg.text }}</div>
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
          </div>

          <!-- Floating Click Instruction -->
          <transition name="msg-fade">
            <div v-if="showLabels" class="click-instruction" v-motion-pop-visible>
              <div class="instruction-arrow">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M7 13l5 5 5-5M12 18V6" />
                </svg>
              </div>
              <span>Clique no vídeo acima para assistir a demonstração real</span>
            </div>
          </transition>

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

const emit = defineEmits(['play-video'])

const props = defineProps<{
  hasWatched?: boolean
}>()

interface ChatMsg {
  type?: string
  from?: 'client' | 'ai'
  text: string
  time?: string
}

const SCRIPT: ChatMsg[] = [
  { type: 'date', text: 'Hoje, 14:02' },
  { from: 'client', text: 'Oi! Quero saber mais sobre o Flux 😊', time: '14:02' },
  { from: 'ai', text: 'Olá! Temos planos a partir de R$150/mês. Assista abaixo como acabamos com o amadorismo no WhatsApp:', time: '14:02' },
  { from: 'ai', text: 'VIDEO_MESSAGE', time: '14:03' },
  { from: 'ai', text: 'Qualquer dúvida é só chamar 😉', time: '14:04' },
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
      t += 200
    } else {
      // Show typing indicator
      const typingDelay = msg.from === 'ai' ? 800 : 500
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

        // Trigger labels earlier (when video message or first AI message appears)
        if (i === 2) {
          schedule(() => { showLabels.value = true }, 500)
        }

        if (isLast) {
          // Additional labels trigger redundancy
          schedule(() => { showLabels.value = true; scrollBottom() }, 400)

          // NUDGE: If user hasn't watched after 10 seconds, send a reminder
          schedule(() => {
            if (!props.hasWatched) {
              visibleMessages.value.push({
                from: 'ai',
                text: 'Percebi que ainda não viu o vídeo... ele é curto e vai te mostrar como escalar seu atendimento agora! 🚀',
                time: '14:06'
              })
              scrollBottom()
            }
          }, 10000)
        }
      }, t)
      t += 400
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
  height: 520px;
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

.drawer-content .mobile-nav-item>a,
.drawer-content .mobile-dropdown-title,
.drawer-content .login-link {
  display: block;
  padding: 0.75rem 1rem;
  color: var(--text-secondary);
  font-size: 1.1rem;
  font-weight: 700;
  border-radius: 10px;
  transition: all 0.2s ease;
}

.mobile-dropdown-title {
  color: #fff !important;
  opacity: 0.5;
  font-size: 0.8rem !important;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  margin-top: 1rem;
}

.mobile-submenu {
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
  padding-left: 1rem;
  margin-bottom: 1rem;
}

.mobile-sub-link {
  padding: 0.6rem 1rem;
  color: var(--text-secondary);
  font-size: 1rem;
  font-weight: 500;
  border-radius: 8px;
}

.mobile-sub-link:hover {
  color: #fff;
  background: rgba(255, 255, 255, 0.05);
}

.drawer-content .login-link:hover {
  color: #fff;
  background: rgba(255, 255, 255, 0.05);
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

/* ── Video Message Inside ConsiderDone ─────── */
.video-msg-wrapper {
  display: flex;
  flex-direction: column;
  gap: 12px;
  width: 100%;
}

.video-msg-container {
  display: flex;
  align-items: center;
  gap: 1.5rem;
  width: 100%;
}

.video-msg-card {
  margin-top: 4px;
  width: 200px;
  border-radius: 12px;
  overflow: hidden;
  cursor: pointer;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  transition: transform 0.3s ease;
  flex-shrink: 0;
}

.video-msg-card:hover {
  transform: translateY(-2px) scale(1.02);
}

.video-inline-hint {
  display: flex;
  align-items: center;
  gap: 10px;
  background: rgba(31, 105, 255, 0.08);
  border: 1px solid rgba(31, 105, 255, 0.2);
  padding: 8px 16px;
  border-radius: 99px;
  color: #fff;
  font-size: 0.8rem;
  font-weight: 600;
  animation: slide-in-hint 0.5s ease-out forwards;
}

.hint-pulse {
  width: 8px;
  height: 8px;
  background: #1f69ff;
  border-radius: 50%;
  box-shadow: 0 0 8px #1f69ff;
  animation: pulse-hint 1.5s infinite;
}

@keyframes pulse-hint {
  0% {
    transform: scale(1);
    opacity: 1;
    box-shadow: 0 0 0 0 rgba(31, 105, 255, 0.7);
  }

  70% {
    transform: scale(1.1);
    opacity: 0.8;
    box-shadow: 0 0 0 10px rgba(31, 105, 255, 0);
  }

  100% {
    transform: scale(1);
    opacity: 1;
    box-shadow: 0 0 0 0 rgba(31, 105, 255, 0);
  }
}

@keyframes slide-in-hint {
  from {
    opacity: 0;
    transform: translateX(-10px);
  }

  to {
    opacity: 1;
    transform: translateX(0);
  }
}

@media (max-width: 640px) {
  .video-msg-container {
    flex-direction: column;
    align-items: flex-start;
    gap: 0.8rem;
  }
}

.video-card-thumb {
  position: relative;
  aspect-ratio: 16/9;
  background: #000;
}

.v-thumb-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  opacity: 0.8;
}

.video-card-overlay {
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(0, 0, 0, 0.1);
  /* Reduced darkness to show video clearly */
}

.play-icon-pulse {
  width: 64px;
  /* Increased size */
  height: 64px;
  background: #ffffff;
  /* Contrast white background */
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--accent-primary, #0072f5);
  /* Brand color on icon */
  box-shadow: 0 0 30px rgba(255, 255, 255, 0.8), 0 0 60px rgba(0, 114, 245, 0.6);
  position: relative;
  overflow: hidden;
  animation: pulse-ring 2s infinite;
  border: 3px solid #ffffff;
  z-index: 5;
}

.play-icon-pulse::after {
  content: "";
  position: absolute;
  top: -50%;
  left: -50%;
  width: 200%;
  height: 200%;
  background: linear-gradient(to bottom right,
      rgba(255, 255, 255, 0) 0%,
      rgba(255, 255, 255, 0) 40%,
      rgba(255, 255, 255, 0.4) 50%,
      rgba(255, 255, 255, 0) 60%,
      rgba(255, 255, 255, 0) 100%);
  transform: rotate(45deg);
  animation: shimmer-swipe 3s infinite;
}

@keyframes shimmer-swipe {
  0% {
    transform: translate(-100%, -100%) rotate(45deg);
  }

  100% {
    transform: translate(100%, 100%) rotate(45deg);
  }
}

@keyframes pulse-ring {
  0% {
    transform: scale(1);
    box-shadow: 0 0 0 0 rgba(0, 114, 245, 0.7);
  }

  70% {
    transform: scale(1.05);
    box-shadow: 0 0 0 15px rgba(0, 114, 245, 0);
  }

  100% {
    transform: scale(1);
    box-shadow: 0 0 0 0 rgba(0, 114, 245, 0);
  }
}

.video-card-info {
  padding: 12px 16px;
  background: rgba(0, 0, 0, 0.6);
}

.v-duration {
  font-size: 0.8rem;
  font-weight: 600;
  line-height: 1.4;
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

/* ── Labels (Fixed) ───────────────────────── */
.chat-labels-fixed {
  display: flex;
  flex-direction: column;
  gap: .6rem;
  padding: 1rem 1.5rem 1.25rem;
  background: rgba(13, 17, 23, 0.4);
  backdrop-filter: blur(8px);
  border-bottom: 1px solid rgba(255, 255, 255, .08);
  position: relative;
  z-index: 5;
}

.label-event-text {
  font-size: .75rem;
  color: rgba(255, 255, 255, .4);
  text-align: center;
  font-weight: 500;
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

/* ── Shimmer Button ──────────────────────── */
.video-action-area {
  margin-top: 12px;
  width: 100%;
}

.chat-shimmer-btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 10px 18px;
  background: linear-gradient(135deg, #1f69ff, #00b3ff);
  color: #fff;
  border-radius: 99px;
  font-size: 0.82rem;
  font-weight: 800;
  text-decoration: none;
  position: relative;
  overflow: hidden;
  box-shadow: 0 4px 15px rgba(31, 105, 255, 0.4);
  transition: all 0.3s ease;
  width: auto;
}

.chat-shimmer-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(31, 105, 255, 0.6);
}

.chat-shimmer-btn::after {
  content: '';
  position: absolute;
  top: -50%;
  left: -50%;
  width: 200%;
  height: 200%;
  background: linear-gradient(to bottom right,
      rgba(255, 255, 255, 0) 0%,
      rgba(255, 255, 255, 0.4) 50%,
      rgba(255, 255, 255, 0) 100%);
  transform: rotate(45deg);
  animation: shimmer-swipe 2.5s infinite;
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

/* ── Click Instruction ───────────────────── */
.click-instruction {
  position: absolute;
  right: -240px;
  top: 50%;
  transform: translateY(-50%);
  width: 200px;
  background: rgba(31, 105, 255, 0.1);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(31, 105, 255, 0.3);
  padding: 1rem;
  border-radius: 16px;
  color: #fff;
  font-size: 0.85rem;
  line-height: 1.4;
  text-align: center;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  z-index: 20;
}

.instruction-arrow {
  color: var(--accent-primary, #1f69ff);
  animation: bounce-horizontal 2s infinite;
}

@keyframes bounce-horizontal {

  0%,
  20%,
  50%,
  80%,
  100% {
    transform: translateY(0);
  }

  40% {
    transform: translateY(-5px);
  }

  60% {
    transform: translateY(-3px);
  }
}

@media (max-width: 1200px) {
  .click-instruction {
    position: relative;
    right: auto;
    top: auto;
    transform: none;
    width: 90%;
    margin: 1rem auto;
    background: rgba(31, 105, 255, 0.15);
  }

  .instruction-arrow {
    transform: rotate(0deg);
  }
}
</style>
