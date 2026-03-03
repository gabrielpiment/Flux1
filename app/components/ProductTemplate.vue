<template>
  <div class="product-page">
    <section class="hero-sub product-hero">
      <div class="container">
        <div class="hero-sub-content" v-motion-fade-visible>
          <span class="eyebrow">{{ eyebrow }}</span>
          <h1 class="text-gradient">{{ titleLines[0] }}<br><span>{{ titleLines[1] }}</span></h1>
          <p class="subtitle">{{ description }}</p>
        </div>
      </div>
    </section>

    <section class="feature-showcase">
      <div class="container">
        <div class="showcase-grid">
          <div v-for="(feature, index) in features" :key="index" class="showcase-item" v-motion-fade-visible>
            <div class="showcase-icon">{{ feature.icon }}</div>
            <div class="showcase-info">
              <h3>{{ feature.title }}</h3>
              <p>{{ feature.description }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section v-if="details && details.length" class="details-section">
      <div class="container">
        <div v-for="(detail, index) in details" :key="index" class="detail-row" :class="{ 'reverse': index % 2 !== 0 }" v-motion-fade-visible>
          <div class="detail-text">
            <h2>{{ detail.title }}</h2>
            <p>{{ detail.description }}</p>
            <ul v-if="detail.items">
              <li v-for="item in detail.items" :key="item">{{ item }}</li>
            </ul>
          </div>
          <div class="detail-visual">
            <div class="visual-placeholder">
              <div class="glow-effect"></div>
              <span>{{ detail.visualLabel }}</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <CtaSection />
  </div>
</template>

<script setup lang="ts">
interface Feature {
  icon: string
  title: string
  description: string
}

interface Detail {
  title: string
  description: string
  items?: string[]
  visualLabel: string
}

defineProps<{
  eyebrow: string
  titleLines: [string, string]
  description: string
  features: Feature[]
  details?: Detail[]
}>()
</script>

<style scoped>
.hero-sub {
  padding: 160px 0 80px;
  background: radial-gradient(circle at 100% 0%, rgba(31, 105, 255, 0.08) 0%, transparent 50%);
  text-align: center;
}

.hero-sub-content {
  max-width: 900px;
  margin: 0 auto;
}

.hero-sub h1 {
  font-size: clamp(2.5rem, 6vw, 4.5rem);
  line-height: 1.1;
  margin-bottom: 2rem;
}

.hero-sub h1 span {
  color: var(--accent-primary);
}

.subtitle {
  font-size: 1.4rem;
  color: var(--text-secondary);
  line-height: 1.6;
}

.feature-showcase {
  padding: 100px 0;
  background: rgba(10, 10, 10, 0.3);
}

.showcase-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 30px;
}

.showcase-item {
  padding: 40px;
  background: rgba(255, 255, 255, 0.02);
  border: 1px solid rgba(255, 255, 255, 0.05);
  border-radius: 24px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  height: 100%;
}

.showcase-icon {
  font-size: 2.5rem;
}

.showcase-info h3 {
  font-size: 1.5rem;
  color: #fff;
  margin-bottom: 15px;
}

.showcase-info p {
  color: var(--text-secondary);
  line-height: 1.6;
}

.details-section {
  padding: 120px 0;
}

.detail-row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 80px;
  align-items: center;
  margin-bottom: 120px;
}

.detail-row:last-child {
  margin-bottom: 0;
}

.detail-row.reverse {
  direction: rtl;
}

.detail-row.reverse .detail-text {
  direction: ltr;
}

.detail-text h2 {
  font-size: 2.5rem;
  margin-bottom: 2rem;
  color: #fff;
}

.detail-text p {
  font-size: 1.2rem;
  color: var(--text-secondary);
  line-height: 1.7;
  margin-bottom: 2rem;
}

.detail-text ul {
  list-style: none;
}

.detail-text li {
  margin-bottom: 12px;
  color: #fff;
  display: flex;
  align-items: center;
  gap: 12px;
}

.detail-text li::before {
  content: '✓';
  color: var(--accent-primary);
  font-weight: 900;
}

.detail-visual {
  width: 100%;
  aspect-ratio: 16/10;
}

.visual-placeholder {
  width: 100%;
  height: 100%;
  background: rgba(255, 255, 255, 0.02);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
}

.glow-effect {
  position: absolute;
  width: 150px;
  height: 150px;
  background: var(--accent-primary);
  filter: blur(80px);
  opacity: 0.15;
}

.visual-placeholder span {
  color: var(--text-muted);
  font-weight: 700;
  letter-spacing: 0.1em;
  text-transform: uppercase;
}

@media (max-width: 900px) {
  .detail-row {
    grid-template-columns: 1fr;
    gap: 40px;
    text-align: center;
  }
  
  .detail-row.reverse {
    direction: ltr;
  }

  .detail-text li {
    justify-content: center;
  }

  .hero-sub { padding: 120px 0 60px; }
}
</style>
