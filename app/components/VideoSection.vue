<template>
  <section id="video-section" class="video-section video-section--parallax"
    :style="{ transform: `translateY(${videoShift}px)` }">
    <div class="container">
      <div class="video-wrapper" @click="$emit('open-modal')">
        <img src="/images/capa-video.png" alt="Thumbnail do Vídeo Flux" class="video-thumbnail" loading="lazy">
        <div class="play-overlay">
          <div class="play-btn-premium">
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
              stroke-linecap="round" stroke-linejoin="round">
              <polygon points="5 3 19 12 5 21 5 3"></polygon>
            </svg>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

defineEmits(['open-modal'])

// ── Parallax scroll ──────────────────────────────────────────────────
// LIFT = how many px above its natural position the video starts.
// At scrollY=0  → shift = -LIFT  (video is up in the hero, over the button)
// At scrollY=TRIGGER → shift = 0 (video is at its natural position)

const LIFT = 320        // px the video is raised above natural position on load
const TRIGGER = 510     // scrollY at which it reaches its natural position

const videoShift = ref(-LIFT)

const isMobile = () => window.innerWidth <= 768

const handleScroll = () => {
  if (isMobile()) {
    videoShift.value = 0
    return
  }
  const progress = Math.min(window.scrollY / TRIGGER, 1)
  videoShift.value = -LIFT + progress * LIFT
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll, { passive: true })
  handleScroll()
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<style scoped>
/* Pull the section up so it visually overlaps the hero's CTA area */
.video-section--parallax {
  margin-top: -320px;
  position: relative;
  z-index: 3;
  will-change: transform;
}

/* ── Close button ── */
.video-dismiss-btn {
  position: absolute;
  top: 12px;
  right: 16px;
  z-index: 10;
  width: 36px;
  height: 36px;
  border-radius: 50%;
  border: 1px solid rgba(255, 255, 255, 0.15);
  background: rgba(10, 10, 10, 0.85);
  backdrop-filter: blur(12px);
  color: #fff;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background 0.2s, transform 0.2s;
}

.video-dismiss-btn:hover {
  background: rgba(0, 114, 245, 0.3);
  transform: scale(1.1);
}

/* ── Fade transition ── */
.video-fade-leave-active {
  transition: opacity 0.4s ease, transform 0.4s ease;
}

.video-fade-leave-to {
  opacity: 0;
  transform: translateY(40px);
}
</style>
