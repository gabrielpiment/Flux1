import { ref, onMounted, onUnmounted } from 'vue'

export function useHeaderScroll() {
    const isCompact = ref(false)
    let ticking = false

    function updateHeader() {
        isCompact.value = window.pageYOffset > 100
        ticking = false
    }

    function onScroll() {
        if (!ticking) {
            requestAnimationFrame(updateHeader)
            ticking = true
        }
    }

    const isMobileMenuOpen = ref(false)

    function toggleMobileMenu() {
        isMobileMenuOpen.value = !isMobileMenuOpen.value
    }

    function closeMobileMenu() {
        isMobileMenuOpen.value = false
    }

    onMounted(() => {
        window.addEventListener('scroll', onScroll, { passive: true })
    })

    onUnmounted(() => {
        window.removeEventListener('scroll', onScroll)
    })

    return { isCompact, isMobileMenuOpen, toggleMobileMenu, closeMobileMenu }
}
