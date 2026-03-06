import { ref, onMounted, onUnmounted } from 'vue'

export function useVerticalVideoModal() {
    const isOpen = ref(false)
    const videoSrc = ref('')

    function open(src: string = '') {
        if (src) videoSrc.value = src
        isOpen.value = true
        document.body.style.overflow = 'hidden'
    }

    function close() {
        isOpen.value = false
        document.body.style.overflow = ''
    }

    function onKeydown(e: KeyboardEvent) {
        if (e.key === 'Escape') close()
    }

    onMounted(() => {
        window.addEventListener('keydown', onKeydown)
    })

    onUnmounted(() => {
        window.removeEventListener('keydown', onKeydown)
        document.body.style.overflow = ''
    })

    return { isOpen, videoSrc, open, close }
}
