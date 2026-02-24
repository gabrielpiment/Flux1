import { ref, onMounted, onUnmounted } from 'vue'

export function useRotatingWords() {
    const words = ['IA', 'Inteligência', 'Automação', 'Inovação', 'Tecnologia']
    const currentIndex = ref(0)
    let intervalId: ReturnType<typeof setInterval> | null = null

    function rotateToNext() {
        currentIndex.value = (currentIndex.value + 1) % words.length
    }

    onMounted(() => {
        intervalId = setInterval(rotateToNext, 2000)
    })

    onUnmounted(() => {
        if (intervalId) clearInterval(intervalId)
    })

    return { currentIndex, words }
}
