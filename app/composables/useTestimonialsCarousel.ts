import { ref, onMounted, onUnmounted } from 'vue'
import type { Testimonial } from '../../shared/types/Testimonial'

export function useTestimonialsCarousel(testimonialsList: Testimonial[]) {
    const currentIndex = ref(0)
    const total = testimonialsList.length
    let autoPlayTimer: ReturnType<typeof setInterval> | null = null

    function next() {
        currentIndex.value = (currentIndex.value + 1) % total
    }

    function previous() {
        currentIndex.value = (currentIndex.value - 1 + total) % total
    }

    function goTo(index: number) {
        currentIndex.value = index
    }

    function startAutoPlay() {
        autoPlayTimer = setInterval(next, 5000)
    }

    function stopAutoPlay() {
        if (autoPlayTimer) {
            clearInterval(autoPlayTimer)
            autoPlayTimer = null
        }
    }

    onMounted(() => {
        startAutoPlay()
    })

    onUnmounted(() => {
        stopAutoPlay()
    })

    return { currentIndex, next, previous, goTo, startAutoPlay, stopAutoPlay }
}
