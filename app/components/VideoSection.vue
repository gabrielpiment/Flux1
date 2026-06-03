<template>
  <section class="video-section" id="video-section">
    <div class="container">
      <div class="video-header" v-motion-fade-visible>
        <span class="eyebrow">Demonstração</span>
        <h2>Veja na Prática<br><span class="brand-gradient">Como funciona</span></h2>
        <p class="video-subtitle">Organize tudo em um único lugar e aumente sua produtividade.</p>
      </div>
      <div class="video-wrapper" v-motion-fade-visible>
        <div class="video-container" @click="$emit('play-video')">
          <iframe 
            src="https://player.vimeo.com/video/1182023466?autoplay=1&muted=1&loop=1&title=0&byline=0&portrait=0&controls=0" 
            class="video-iframe" 
            frameborder="0" 
            allow="autoplay; fullscreen; picture-in-picture" 
            allowfullscreen>
          </iframe>
          <div class="play-overlay">
            <div class="overlay-content">
              <button class="play-button" aria-label="Assistir vídeo">
                <svg viewBox="0 0 68 48" width="68" height="48" class="youtube-play">
                  <path d="M66.52,7.74c-0.78-2.93-2.49-5.41-5.42-6.19C55.79,.13,34,0,34,0S12.21,.13,6.9,1.55 C3.97,2.33,2.27,4.81,1.48,7.74C0.06,13.05,0,24,0,24s0.06,10.95,1.48,16.26c0.78,2.93,2.49,5.41,5.42,6.19 C12.21,47.87,34,48,34,48s21.79-0.13,27.1-1.55c2.93-0.78,4.64-3.26,5.42-6.19C67.94,34.95,68,24,68,24S67.94,13.05,66.52,7.74z" fill="#f00"></path>
                  <path d="M 45,24 27,14 27,34" fill="#fff"></path>
                </svg>
              </button>
              <p class="overlay-text">Assista ao vídeo</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
defineEmits(['play-video'])
</script>

<style scoped>
.video-section {
  padding: 80px 0;
  background: #0A0C14;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

.video-header {
  text-align: center;
  max-width: 700px;
  margin: 0 auto 3rem;
}

.eyebrow {
  color: #0072f5;
  font-weight: 900;
  font-size: 0.72rem;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  background: rgba(0, 114, 245, 0.1);
  border: 1px solid rgba(0, 114, 245, 0.25);
  border-radius: 99px;
  padding: 0.35rem 1rem;
  display: inline-block;
  margin-bottom: 1rem;
}

h2 {
  font-size: clamp(2.5rem, 5vw, 4rem);
  font-weight: 900;
  line-height: 1.1;
  color: #fff;
  margin-bottom: 1rem;
  letter-spacing: -0.02em;
}

.brand-gradient {
  background: linear-gradient(135deg, #0072f5, #00b3ff);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.video-subtitle {
  color: #94a3b8;
  font-size: 1.1rem;
  line-height: 1.6;
}
</style>
