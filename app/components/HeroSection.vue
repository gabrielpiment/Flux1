<template>
  <section id="hero-section" class="hero">
    <div class="dotted-bg" aria-hidden="true"></div>

    <div class="container hero-wrap">
      <div class="hero-content">
        <div
          class="hero-badges"
          v-motion
          :initial="{ opacity: 0, y: -20 }"
          :enter="{ opacity: 1, y: 0, transition: { delay: 100, duration: 600 } }"
        >
          <span class="hero-badge">Parceiro Meta Business</span>
          <span class="hero-badge">IA Enterprise Nativa</span>
          <span class="hero-badge">9.000+ Clientes</span>
        </div>

        <h1
          v-motion
          :initial="{ opacity: 0, y: 30 }"
          :enter="{ opacity: 1, y: 0, transition: { delay: 200, duration: 700 } }"
        >
          <span class="text-gradient">Sua Gestão,</span><br>
          <span class="brand-gradient">Gerenciada com</span><br>
          <span class="rotating-text-container">
            <span v-for="(word, index) in words" :key="word" class="rotating-word" :class="{
              active: currentIndex === index,
              exit: exitIndex === index
            }">{{ word }}</span>
          </span>
        </h1>

        <p
          class="subtitle"
          v-motion
          :initial="{ opacity: 0, y: 20 }"
          :enter="{ opacity: 1, y: 0, transition: { delay: 400, duration: 600 } }"
        >
          Reduza a carga da equipe e escalone sua operação com a plataforma oficial de engajamento omnichannel acelerada
          por IA.
        </p>

        <div
          class="hero-actions"
          v-motion
          :initial="{ opacity: 0, y: 20 }"
          :enter="{ opacity: 1, y: 0, transition: { delay: 600, duration: 600 } }"
        >
          <NuxtLink class="btn-primary" to="#demo">
            Teste Grátis Agora
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"
              stroke-linecap="round" stroke-linejoin="round">
              <path d="M5 12h14m-7-7 7 7-7 7" />
            </svg>
          </NuxtLink>
        </div>

        <div
          class="hero-trusted"
          v-motion
          :initial="{ opacity: 0 }"
          :enter="{ opacity: 1, transition: { delay: 800, duration: 600 } }"
        >
          CONFIADO PELAS EMPRESAS QUE MAIS CRESCEM NO BRASIL
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

const words = ['IA Real.', 'Performance.', 'Precisão.', 'Estratégia.', 'Fluxo.']
const currentIndex = ref(0)
const exitIndex = ref<number | null>(null)
let intervalId: any = null

const rotateToNext = () => {
  exitIndex.value = currentIndex.value
  currentIndex.value = (currentIndex.value + 1) % words.length
  setTimeout(() => { exitIndex.value = null }, 600)
}

onMounted(() => {
  intervalId = setInterval(rotateToNext, 3000)
})

onUnmounted(() => {
  if (intervalId) clearInterval(intervalId)
})
</script>
