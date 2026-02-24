import { ref, onMounted, onUnmounted } from 'vue'

export function useCounterAnimation() {
    const sectionRef = ref<HTMLElement | null>(null)
    const animated = ref(false)

    function animateCounter(el: HTMLElement, target: number, suffix: string) {
        const duration = 2000
        const increment = target / (duration / 16)
        let current = 0

        const timer = setInterval(() => {
            current += increment
            if (current >= target) {
                current = target
                clearInterval(timer)
            }
            el.textContent = Math.floor(current) + suffix
        }, 16)
    }

    function startAnimation() {
        if (!sectionRef.value || animated.value) return
        animated.value = true

        const statNumbers = sectionRef.value.querySelectorAll<HTMLElement>('[data-target]')
        statNumbers.forEach((el, index) => {
            const target = parseInt(el.getAttribute('data-target') || '0')
            const suffix = el.getAttribute('data-suffix') || ''
            setTimeout(() => animateCounter(el, target, suffix), index * 200)
        })
    }

    let observer: IntersectionObserver | null = null

    onMounted(() => {
        observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        startAnimation()
                        observer?.disconnect()
                    }
                })
            },
            { threshold: 0.5, rootMargin: '0px 0px -50px 0px' }
        )

        if (sectionRef.value) observer.observe(sectionRef.value)
    })

    onUnmounted(() => {
        observer?.disconnect()
    })

    return { sectionRef }
}
