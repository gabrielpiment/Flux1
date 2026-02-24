<template>
  <div id="default-layout">
    <TheHeader />
    <main>
      <slot />
    </main>
    <TheFooter />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import TheHeader from '../components/TheHeader.vue'
import TheFooter from '../components/TheFooter.vue'

export default defineComponent({
  name: 'DefaultLayout',
  components: { TheHeader, TheFooter }
})
</script>
