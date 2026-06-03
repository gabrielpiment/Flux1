<template>
  <div id="index-page">
    <HeroSection @watch-demo="verticalVideo.open('/videos/apresentacao.mp4')" />
    <VerticalVideoModal :is-open="verticalVideo.isOpen.value" :video-src="verticalVideo.videoSrc.value"
      @close="verticalVideo.close" />
    <VideoSection @play-video="verticalVideo.open('/videos/apresentacao.mp4')" />
    <IndustriesSection />
    <FollowUpSection />
    <InteractiveKanbanSection />
    <FeaturesSection />
    <ChannelsSection />
    <AgentsPanelSection />
    <FlowSection />
    <QuickResponsesSection />
    <FaqSection />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { useVerticalVideoModal } from '../composables/useVerticalVideoModal'
import HeroSection from '../components/HeroSection.vue'
import VerticalVideoModal from '../components/VerticalVideoModal.vue'
import VideoSection from '../components/VideoSection.vue'
import IndustriesSection from '../components/IndustriesSection.vue'
import FollowUpSection from '../components/FollowUpSection.vue'
import InteractiveKanbanSection from '../components/InteractiveKanbanSection.vue'
import FeaturesSection from '../components/FeaturesSection.vue'
import ChannelsSection from '../components/ChannelsSection.vue'
import AgentsPanelSection from '../components/AgentsPanelSection.vue'
import FlowSection from '../components/FlowSection.vue'
import QuickResponsesSection from '../components/QuickResponsesSection.vue'
import FaqSection from '../components/FaqSection.vue'

export default defineComponent({
  name: 'IndexPage',
  components: {
    HeroSection,
    VerticalVideoModal,
    VideoSection,
    IndustriesSection,
    FollowUpSection,
    InteractiveKanbanSection,
    FeaturesSection,
    ChannelsSection,
    AgentsPanelSection,
    FlowSection,
    QuickResponsesSection,
    FaqSection
  },
  setup() {
    const verticalVideo = useVerticalVideoModal()
    return { verticalVideo }
  }
})
</script>
