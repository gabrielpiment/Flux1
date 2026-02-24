<template>
  <Teleport to="body">
    <Transition name="modal-fade">
      <div
        v-if="isOpen"
        id="video-modal-overlay"
        class="vmodal-backdrop"
        @click.self="close"
        @keyup.esc="close"
        tabindex="-1"
      >
        <div class="vmodal-box">
          <!-- Close button -->
          <button
            id="modal-close-btn"
            class="vmodal-close"
            aria-label="Fechar modal"
            @click="close"
          >
            <svg width="20" height="20" fill="none" stroke="currentColor"
              stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"
              viewBox="0 0 24 24">
              <path d="M18 6L6 18M6 6l12 12"/>
            </svg>
          </button>

          <!-- Video player -->
          <div class="vmodal-player">
            <video
              ref="videoEl"
              id="modal-video"
              controls
              autoplay
              class="vmodal-video"
              @click.stop
            >
              <source
                src=""
                type="video/mp4"
              >
              Seu navegador não suporta vídeo HTML5.
            </video>
          </div>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<script setup lang="ts">
import { ref, watch, nextTick } from 'vue'

const props = defineProps<{ isOpen: boolean }>()
const emit = defineEmits(['close'])

const videoEl = ref<HTMLVideoElement | null>(null)

// Autoplay when modal opens, pause & reset when closes
watch(() => props.isOpen, async (opened) => {
  if (opened) {
    await nextTick()
    videoEl.value?.play().catch(() => {})
  } else {
    if (videoEl.value) {
      videoEl.value.pause()
      videoEl.value.currentTime = 0
    }
  }
})

function close() {
  emit('close')
}
</script>

<style>
/* ── Backdrop ───────────────────────────────────────────── */
.vmodal-backdrop {
  position: fixed;
  inset: 0;
  z-index: 9000;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1.5rem;
  /* Frosted glass over entire site */
  background: rgba(7, 14, 28, 0.35);
  backdrop-filter: blur(6px) saturate(0.85);
  -webkit-backdrop-filter: blur(6px) saturate(0.85);
}

/* ── Modal box ──────────────────────────────────────────── */
.vmodal-box {
  position: relative;
  width: 100%;
  max-width: 900px;
  border-radius: 20px;
  overflow: hidden;
  box-shadow:
    0 0 0 1px rgba(255, 255, 255, 0.08),
    0 40px 80px -20px rgba(0, 0, 0, 0.9),
    0 0 60px rgba(31, 105, 255, 0.12);
  background: #080e1e;
}

/* ── Video player ───────────────────────────────────────── */
.vmodal-player {
  width: 100%;
  aspect-ratio: 16 / 9;
  background: #000;
}

.vmodal-video {
  width: 100%;
  height: 100%;
  display: block;
  object-fit: cover;
}

/* ── Close button ───────────────────────────────────────── */
.vmodal-close {
  position: absolute;
  top: 14px;
  right: 14px;
  z-index: 10;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border: 1px solid rgba(255, 255, 255, 0.18);
  background: rgba(8, 14, 30, 0.85);
  backdrop-filter: blur(12px);
  color: #fff;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background 0.2s, transform 0.25s, border-color 0.2s;
}

.vmodal-close:hover {
  background: rgba(239, 68, 68, 0.35);
  border-color: rgba(239, 68, 68, 0.55);
  transform: scale(1.12) rotate(90deg);
}

/* ── Transition ─────────────────────────────────────────── */
.modal-fade-enter-active,
.modal-fade-leave-active {
  transition: opacity 0.3s ease;
}
.modal-fade-enter-active .vmodal-box,
.modal-fade-leave-active .vmodal-box {
  transition: transform 0.35s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.3s ease;
}
.modal-fade-enter-from,
.modal-fade-leave-to {
  opacity: 0;
}
.modal-fade-enter-from .vmodal-box {
  transform: scale(0.92) translateY(24px);
  opacity: 0;
}
.modal-fade-leave-to .vmodal-box {
  transform: scale(0.94) translateY(16px);
  opacity: 0;
}
</style>
