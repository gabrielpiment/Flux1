import { ref, computed, watch } from 'vue'
import type { CadastroFormData } from '~/shared/types/CadastroForm'
import { formatCPFOrCNPJ, formatPhone } from '../utils/masks'

// Shared singleton state — ensures modal + page share the same instance
const isOpen = ref(false)
const currentStep = ref(1)
const showConfirmation = ref(false)
const isSubmitting = ref(false)
const showSuccess = ref(false)

const form = ref<CadastroFormData>({
    fullName: '',
    companyName: '',
    cnpjCpf: '',
    email: '',
    phone: '',
    password: '',
    plan: '',
    billingCycle: 'mensal',
    attendantCount: 2,
    extraInstagram: 0,
    extraFacebook: 0,
    extraWhatsappOficial: 0,
    extraWhatsappParalela: 0,
    wantsGestorIA: false,
    bonuses: []
})

const BONUSES_DIGITAL_FLUX = [
    'Reunião de Alinhamento',
    'Setup Configurações iniciais para uso do sistema',
    'Treinamento Exclusivo',
    'Suporte e Acompanhamento Premium'
]

const BONUSES_PRO_DIGITAL_FLUX = [
    'Reunião de Alinhamento',
    'Setup Configurações iniciais para uso do sistema',
    'Treinamento Exclusivo',
    'Suporte e Acompanhamento Premium',
    '1 conexão a sua escolha (Instagram, Facebook, WhatsApp API Oficial ou Paralela)',
    '1 usuário extra no sistema'
]

const computedBonuses = computed(() => {
    if (form.value.billingCycle !== 'trimestral') return []
    if (form.value.plan === 'Digital Flux') return BONUSES_DIGITAL_FLUX
    if (form.value.plan === 'Pro Digital Flux') return BONUSES_PRO_DIGITAL_FLUX
    return []
})

// ── Pricing constants ────────────────────────────────────
const PRICES = {
    'Digital Flux': { mensal: 75, trimestral: 60 },
    'Pro Digital Flux': { mensal: 105, trimestral: 90 }
} as const

const CONNECTION_PRICES = {
    instagram: 50,
    facebook: 50,
    whatsappOficial: 60,
    whatsappParalela: 50
} as const

const computedTotalPrice = computed(() => {
    const f = form.value
    const planPrices = PRICES[f.plan as keyof typeof PRICES]
    if (!planPrices) return { pricePerUser: 0, attendants: 0, connections: 0, total: 0 }

    const pricePerUser = planPrices[f.billingCycle]
    const attendantsCost = pricePerUser * f.attendantCount

    const connectionsCost =
        (f.extraInstagram * CONNECTION_PRICES.instagram) +
        (f.extraFacebook * CONNECTION_PRICES.facebook) +
        (f.extraWhatsappOficial * CONNECTION_PRICES.whatsappOficial) +
        (f.extraWhatsappParalela * CONNECTION_PRICES.whatsappParalela)

    return {
        pricePerUser,
        attendants: attendantsCost,
        connections: connectionsCost,
        total: attendantsCost + connectionsCost
    }
})

watch(computedBonuses, (val) => {
    form.value.bonuses = [...val]
})

export function useCadastroForm() {
    const WEBHOOK_URL = 'https://back.fluxconversa.com.br/api/webhooks/f8086251-c7a8-4d53-80dd-da0f507c567c'

    function openModal(plan: string) {
        form.value.plan = plan
        currentStep.value = 1
        showConfirmation.value = false
        showSuccess.value = false
        isOpen.value = true
    }

    function closeModal() {
        isOpen.value = false
        currentStep.value = 1
        showConfirmation.value = false
        resetForm()
    }

    function resetForm() {
        form.value = {
            fullName: '',
            companyName: '',
            cnpjCpf: '',
            email: '',
            phone: '',
            password: '',
            plan: '',
            billingCycle: 'mensal',
            attendantCount: 2,
            extraInstagram: 0,
            extraFacebook: 0,
            extraWhatsappOficial: 0,
            extraWhatsappParalela: 0,
            wantsGestorIA: false,
            bonuses: []
        }
    }

    function nextStep() {
        if (currentStep.value < 2) {
            currentStep.value++
        }
    }

    function prevStep() {
        if (currentStep.value > 1) {
            currentStep.value--
        }
    }

    function validateStep1(): boolean {
        const f = form.value
        return !!(
            f.fullName.trim() &&
            f.companyName.trim() &&
            f.cnpjCpf.replace(/\D/g, '').length >= 11 &&
            f.email.includes('@') &&
            f.phone.replace(/\D/g, '').length >= 10 &&
            f.password.length >= 8
        )
    }

    function validateStep2(): boolean {
        return form.value.attendantCount >= 2
    }

    function requestConfirmation() {
        showConfirmation.value = true
    }

    function cancelConfirmation() {
        showConfirmation.value = false
    }

    function onCPFCNPJInput(event: Event) {
        const input = event.target as HTMLInputElement
        input.value = formatCPFOrCNPJ(input.value)
        form.value.cnpjCpf = input.value
    }

    function onPhoneInput(event: Event) {
        const input = event.target as HTMLInputElement
        input.value = formatPhone(input.value)
        form.value.phone = input.value
    }

    async function confirmAndSubmit() {
        isSubmitting.value = true
        try {
            const data: Record<string, string> = {
                nome: form.value.fullName,
                empresa: form.value.companyName,
                documento: form.value.cnpjCpf,
                email: form.value.email,
                whatsapp: '+55' + form.value.phone.replace(/\D/g, ''),
                senha: form.value.password,
                plano: form.value.plan,
                periodo: form.value.billingCycle,
                atendentes: String(form.value.attendantCount),
                extra_instagram: String(form.value.extraInstagram),
                extra_facebook: String(form.value.extraFacebook),
                extra_whatsapp_oficial: String(form.value.extraWhatsappOficial),
                extra_whatsapp_paralela: String(form.value.extraWhatsappParalela),
                gestor_ia: form.value.wantsGestorIA ? 'sim' : 'nao',
                bonuses: form.value.bonuses.join('; '),
                timestamp: new Date().toISOString()
            }

            const params = new URLSearchParams(data)
            await fetch(`${WEBHOOK_URL}?${params.toString()}`, { method: 'GET' })
        } catch {
            // silently ignore webhook errors
        } finally {
            isSubmitting.value = false
            showConfirmation.value = false
            showSuccess.value = true
        }
    }

    function closeSuccess() {
        showSuccess.value = false
        closeModal()
    }

    return {
        form,
        isOpen,
        currentStep,
        showConfirmation,
        isSubmitting,
        showSuccess,
        computedBonuses,
        computedTotalPrice,
        openModal,
        closeModal,
        nextStep,
        prevStep,
        validateStep1,
        validateStep2,
        requestConfirmation,
        cancelConfirmation,
        onCPFCNPJInput,
        onPhoneInput,
        confirmAndSubmit,
        closeSuccess
    }
}
