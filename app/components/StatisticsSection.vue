<template>
  <section id="statistics-section" ref="sectionRef" class="statistics">
    <div class="container">
      <div class="stats-grid">
        <div
          v-for="(stat, index) in stats"
          :key="stat.target"
          class="stat-item"
          v-motion
          :initial="{ opacity: 0, y: 40 }"
          :visible="{ opacity: 1, y: 0, transition: { delay: index * 100, duration: 600 } }"
        >
          <div class="stat-number" :data-target="stat.target" :data-suffix="stat.suffix">0{{ stat.suffix }}</div>
          <div class="stat-description">{{ stat.description }}</div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useCounterAnimation } from '../composables/useCounterAnimation'
import { stats } from '../../shared/constants/stats'

const { sectionRef } = useCounterAnimation()
</script>
