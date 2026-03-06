<template>
  <Teleport to="body">
    <Transition name="v-modal-fade">
      <div
        v-if="isOpen"
        class="vertical-modal-backdrop"
        @click.self="close"
      >
        <div class="vertical-modal-content" v-motion-pop>
          <!-- Close button -->
          <button
            class="v-modal-close"
            aria-label="Fechar"
            @click="close"
          >
            <svg width="24" height="24" fill="none" stroke="currentColor"
              stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"
              viewBox="0 0 24 24">
              <path d="M18 6L6 18M6 6l12 12"/>
            </svg>
          </button>

          <!-- Video player container (9:16) -->
          <div class="v-modal-video-container">
            <video
              ref="videoEl"
              :src="videoSrc"
              controls
              autoplay
              playsinline
              class="v-modal-video"
              @click.stop
            >
              Seu navegador não suporta vídeos.
            </video>
          </div>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<script setup lang="ts">
import { ref, watch, nextTick } from 'vue'

const props = defineProps<{
  isOpen: boolean
  videoSrc: string
}>()

const emit = defineEmits(['close'])

const videoEl = ref<HTMLVideoElement | null>(null)

function close() {
  emit('close')
}

// Control video playback based on modal state
watch(() => props.isOpen, async (opened) => {
  if (opened) {
    await nextTick()
    if (videoEl.value) {
      videoEl.value.currentTime = 0
      videoEl.value.play().catch(() => {})
    }
  } else {
    if (videoEl.value) {
      videoEl.value.pause()
    }
  }
})
</script>

<style scoped>
.vertical-modal-backdrop {
  position: fixed;
  inset: 0;
  z-index: 9999;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(0, 0, 0, 0.85);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  padding: 1rem;
}

.vertical-modal-content {
  position: relative;
  width: 100%;
  max-width: 450px; /* Limits width for desktop */
  height: auto;
  max-height: 90vh;
  aspect-ratio: 9/16;
  background: #000;
  border-radius: 24px;
  overflow: hidden;
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.5),
              0 0 40px rgba(31, 105, 255, 0.2);
  border: 1px solid rgba(255, 255, 255, 0.1);
}

.v-modal-video-container {
  width: 100%;
  height: 100%;
  background: #000;
}

.v-modal-video {
  width: 100%;
  height: 100%;
  object-fit: contain;
}

.v-modal-close {
  position: absolute;
  top: 1.5rem;
  right: 1.5rem;
  z-index: 10;
  width: 44px;
  height: 44px;
  border-radius: 50%;
  border: 1px solid rgba(255, 255, 255, 0.2);
  background: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(8px);
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s ease;
}

.v-modal-close:hover {
  background: rgba(239, 68, 68, 0.8);
  border-color: #ef4444;
  transform: rotate(90deg) scale(1.1);
}

/* Transitions */
.v-modal-fade-enter-active,
.v-modal-fade-leave-active {
  transition: opacity 0.4s ease;
}

.v-modal-fade-enter-from,
.v-modal-fade-leave-to {
  opacity: 0;
}

@media (max-height: 700px) {
  .vertical-modal-content {
    max-height: 95vh;
  }
}
</style>
