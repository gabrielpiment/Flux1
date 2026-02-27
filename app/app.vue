<template>
  <div id="app" ref="appRef">
    <div class="global-mouse-glow" aria-hidden="true"></div>
    <NuxtRouteAnnouncer />
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

const appRef = ref<HTMLElement | null>(null)

const handleMouseMove = (e: MouseEvent) => {
  if (!appRef.value) return
  appRef.value.style.setProperty('--mouse-x', `${e.clientX}px`)
  appRef.value.style.setProperty('--mouse-y', `${e.clientY}px`)
}

onMounted(() => {
  window.addEventListener('mousemove', handleMouseMove)
})

onUnmounted(() => {
  window.removeEventListener('mousemove', handleMouseMove)
})
</script>

<style>
.global-mouse-glow {
  position: fixed;
  inset: 0;
  pointer-events: none;
  z-index: 9999;
  background: radial-gradient(800px circle at var(--mouse-x, 50%) var(--mouse-y, 50%),
      rgba(0, 114, 245, 0.08),
      transparent 80%);
  opacity: 0;
  transition: opacity 1s ease;
}

#app:hover .global-mouse-glow {
  opacity: 1;
}

@media (max-width: 1024px) {
  .global-mouse-glow {
    display: none;
  }
}
</style>
