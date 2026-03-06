<template>
    <Transition name="v-fab-fade">
        <div v-if="show" class="video-fab-container" @click="openVideo">
            <div class="video-fab-ping"></div>
            <div class="video-fab-content">
                <div class="video-fab-icon">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                        <polygon points="5 3 19 12 5 21 5 3"></polygon>
                    </svg>
                </div>
                <div class="video-fab-text">
                    <span class="fab-title">Demonstração Flux</span>
                    <span class="fab-subtitle">Assista e pare o amadorismo</span>
                </div>
            </div>

            <button class="fab-close" @click.stop="isDismissed = true">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3">
                    <path d="M18 6L6 18M6 6l12 12"></path>
                </svg>
            </button>
        </div>
    </Transition>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted, computed } from 'vue'

const props = defineProps<{
    hasBeenOpened: boolean
}>()

const emit = defineEmits(['open'])

const isDismissed = ref(false)
const isScrolledPast = ref(false)

const show = computed(() => {
    return !props.hasBeenOpened && !isDismissed.value && isScrolledPast.value
})

const openVideo = () => {
    emit('open')
}

const handleScroll = () => {
    // Show after scrolling 800px or so
    isScrolledPast.value = window.scrollY > 1200
}

onMounted(() => {
    window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
    window.removeEventListener('scroll', handleScroll)
})
</script>

<style scoped>
.video-fab-container {
    position: fixed;
    bottom: 2.5rem;
    right: 2.5rem;
    z-index: 1000;
    display: flex;
    align-items: center;
    background: rgba(10, 10, 10, 0.9);
    backdrop-filter: blur(16px);
    border: 1px solid rgba(31, 105, 255, 0.5);
    padding: 14px 28px 14px 14px;
    border-radius: 99px;
    cursor: pointer;
    box-shadow: 0 20px 50px rgba(0, 0, 0, 0.6),
        0 0 30px rgba(31, 105, 255, 0.3);
    transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
}

.video-fab-content {
    display: flex;
    align-items: center;
    gap: 16px;
}

.video-fab-container:hover {
    transform: translateY(-5px) scale(1.05);
    border-color: rgba(31, 105, 255, 0.8);
    box-shadow: 0 25px 50px rgba(0, 0, 0, 0.5),
        0 0 30px rgba(31, 105, 255, 0.4);
}

.video-fab-ping {
    position: absolute;
    inset: 0;
    border-radius: 99px;
    border: 2px solid rgba(31, 105, 255, 0.5);
    animation: fab-ping 2s cubic-bezier(0, 0, 0.2, 1) infinite;
}

@keyframes fab-ping {
    0% {
        transform: scale(1);
        opacity: 0.8;
    }

    70%,
    100% {
        transform: scale(1.2, 1.5);
        opacity: 0;
    }
}

.video-fab-icon {
    width: 36px;
    height: 36px;
    background: #fff;
    color: #1f69ff;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 0 0 10px rgba(31, 105, 255, 0.4);
}

.video-fab-text {
    display: flex;
    flex-direction: column;
}

.fab-title {
    font-size: 0.85rem;
    font-weight: 800;
    color: #fff;
    line-height: 1.2;
}

.fab-subtitle {
    font-size: 0.7rem;
    color: rgba(255, 255, 255, 0.6);
    font-weight: 500;
}

.fab-close {
    background: transparent;
    border: none;
    color: rgba(255, 255, 255, 0.4);
    margin-left: 8px;
    cursor: pointer;
    transition: color 0.2s;
    padding: 4px;
}

.fab-close:hover {
    color: #fff;
}

.v-fab-fade-enter-active,
.v-fab-fade-leave-active {
    transition: all 0.5s cubic-bezier(0.16, 1, 0.3, 1);
}

.v-fab-fade-enter-from {
    opacity: 0;
    transform: translateY(50px) scale(0.8);
}

.v-fab-fade-leave-to {
    opacity: 0;
    transform: scale(0.9);
}

@media (max-width: 640px) {
    .video-fab-container {
        bottom: 1.5rem;
        right: 1.5rem;
        padding: 8px 12px;
    }

    .fab-subtitle {
        display: none;
    }
}
</style>
