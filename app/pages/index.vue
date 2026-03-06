<template>
  <div id="index-page">
    <HeroSection />
    <VerticalVideoModal :is-open="verticalVideo.isOpen.value" :video-src="verticalVideo.videoSrc.value"
      @close="verticalVideo.close" />
    <ConsiderDoneSection :has-watched="verticalVideo.hasBeenOpened.value"
      @play-video="verticalVideo.open('/videos/apresentacao.mp4')" />
    <VideoFloatingPrompt :has-been-opened="verticalVideo.hasBeenOpened.value"
      @open="verticalVideo.open('/videos/apresentacao.mp4')" />
    <FlowSection />
    <InteractiveKanbanSection />
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
import { useVerticalVideoModal } from '../composables/useVerticalVideoModal'
import HeroSection from '../components/HeroSection.vue'
import VerticalVideoModal from '../components/VerticalVideoModal.vue'
import ConsiderDoneSection from '../components/ConsiderDoneSection.vue'
import FlowSection from '../components/FlowSection.vue'
import InteractiveKanbanSection from '../components/InteractiveKanbanSection.vue'
import FeaturesSection from '../components/FeaturesSection.vue'
import ChannelsSection from '../components/ChannelsSection.vue'
import StatisticsSection from '../components/StatisticsSection.vue'
import TestimonialsSection from '../components/TestimonialsSection.vue'
import IndustriesSection from '../components/IndustriesSection.vue'
import FaqSection from '../components/FaqSection.vue'
import CtaSection from '../components/CtaSection.vue'
import VideoFloatingPrompt from '../components/VideoFloatingPrompt.vue'

export default defineComponent({
  name: 'IndexPage',
  components: {
    HeroSection,
    VerticalVideoModal,
    ConsiderDoneSection,
    FlowSection,
    InteractiveKanbanSection,
    FeaturesSection,
    ChannelsSection,
    StatisticsSection,
    TestimonialsSection,
    IndustriesSection,
    FaqSection,
    CtaSection,
    VideoFloatingPrompt
  },
  setup() {
    const verticalVideo = useVerticalVideoModal()
    return { verticalVideo }
  }
})
</script>
