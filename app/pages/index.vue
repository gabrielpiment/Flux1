<template>
  <div id="index-page">
    <HeroSection />
    <VideoSection @open-modal="videoModal.open" />
    <VideoModal :is-open="videoModal.isOpen.value" @close="videoModal.close" />
    <ConsiderDoneSection />
    <FeaturesSection />
    <ChannelsSection />
    <StatisticsSection />
    <TestimonialsSection />
    <IndustriesSection />
    <FaqSection />
    <CtaSection />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { useVideoModal } from '../composables/useVideoModal'
import HeroSection from '../components/HeroSection.vue'
import VideoSection from '../components/VideoSection.vue'
import VideoModal from '../components/VideoModal.vue'
import ConsiderDoneSection from '../components/ConsiderDoneSection.vue'
import FeaturesSection from '../components/FeaturesSection.vue'
import ChannelsSection from '../components/ChannelsSection.vue'
import StatisticsSection from '../components/StatisticsSection.vue'
import TestimonialsSection from '../components/TestimonialsSection.vue'
import IndustriesSection from '../components/IndustriesSection.vue'
import FaqSection from '../components/FaqSection.vue'
import CtaSection from '../components/CtaSection.vue'

export default defineComponent({
  name: 'IndexPage',
  components: {
    HeroSection,
    VideoSection,
    VideoModal,
    ConsiderDoneSection,
    FeaturesSection,
    ChannelsSection,
    StatisticsSection,
    TestimonialsSection,
    IndustriesSection,
    FaqSection,
    CtaSection
  },
  setup() {
    const videoModal = useVideoModal()
    return { videoModal }
  }
})
</script>
