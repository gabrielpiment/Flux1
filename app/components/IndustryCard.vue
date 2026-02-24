<template>
  <div class="industry-card">
    <div class="industry-content">
      <h3>{{ industry.title }}</h3>
      <p>{{ industry.description }}</p>
      <a href="#" class="industry-link">{{ industry.linkText }} →</a>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import type { PropType } from 'vue'
import type { IndustryCard as IndustryCardType } from '~/shared/types/IndustryCard'

export default defineComponent({
  name: 'IndustryCard',
  props: {
    industry: {
      type: Object as PropType<IndustryCardType>,
      required: true
    }
  }
})
</script>
