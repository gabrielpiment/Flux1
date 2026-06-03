<template>
  <section id="hero-section" class="hero">
    <div class="hero-grid" aria-hidden="true"></div>

    <div class="container hero-wrap">
      <div class="hero-content">
        <h1 v-motion :initial="{ opacity: 0, y: 30 }"
          :enter="{ opacity: 1, y: 0, transition: { delay: 200, duration: 700 } }">
          <span class="text-gradient">Sua Gestão de</span><br>
          <span class="rotating-text-container">
            <span v-for="(word, index) in words" :key="word" class="rotating-word brand-gradient" :class="{
              active: currentIndex === index,
              exit: exitIndex === index
            }">{{ word }}</span>
          </span>
        </h1>

        <p class="subtitle" v-motion :initial="{ opacity: 0, y: 20 }"
          :enter="{ opacity: 1, y: 0, transition: { delay: 400, duration: 600 } }">
          <span class="highlight">Para profissionais solo, equipes e empresas.</span>
          Organize clientes, automatize respostas e processos.
          <span class="highlight">Tudo em um único WhatsApp.</span>
        </p>

        <div class="hero-actions" v-motion :initial="{ opacity: 0, y: 20 }"
          :enter="{ opacity: 1, y: 0, transition: { delay: 600, duration: 600 } }">
          <NuxtLink class="btn-primary" to="/precos">
            Ver Planos
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"
              stroke-linecap="round" stroke-linejoin="round">
              <path d="M5 12h14m-7-7 7 7-7 7" />
            </svg>
          </NuxtLink>
          <button class="btn-secondary" @click="$emit('watch-demo')">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
              <polygon points="5 3 19 12 5 21 5 3"></polygon>
            </svg>
            Assista à Demonstração
          </button>
        </div>

        <div class="hero-trusted" v-motion :initial="{ opacity: 0 }"
          :enter="{ opacity: 1, transition: { delay: 800, duration: 600 } }">
          CONFIADO PELAS EMPRESAS QUE MAIS CRESCEM DO BRASIL
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

const emit = defineEmits(['watch-demo'])
const words = ['Equipes.', 'Vendas.', 'Atendimento.', 'Processos.', 'Clientes.']
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
