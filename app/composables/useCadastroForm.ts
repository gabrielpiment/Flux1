import { ref } from 'vue'
import type { CadastroFormData } from '../../shared/types/CadastroForm'
import { formatCNPJ, formatPhone } from '../utils/masks'

export function useCadastroForm() {
    const WEBHOOK_URL = 'https://webhook.elevenapp.com.br/webhook/584276f7-4469-40f9-a674-22251138fe9a'

    const form = ref<CadastroFormData>({
        fullName: '',
        companyName: '',
        cnpj: '',
        email: '',
        phone: '',
        plan: ''
    })

    const isSubmitting = ref(false)
    const showSuccess = ref(false)

    function onCNPJInput(event: Event) {
        const input = event.target as HTMLInputElement
        input.value = formatCNPJ(input.value)
        form.value.cnpj = input.value
    }

    function onPhoneInput(event: Event) {
        const input = event.target as HTMLInputElement
        input.value = formatPhone(input.value)
        form.value.phone = input.value
    }

    async function submit() {
        isSubmitting.value = true
        try {
            const params = new URLSearchParams({
                ...form.value,
                timestamp: new Date().toISOString()
            })
            await fetch(`${WEBHOOK_URL}?${params.toString()}`, { method: 'GET' })
        } catch {
            // silently ignore webhook errors — show success popup anyway
        } finally {
            isSubmitting.value = false
            showSuccess.value = true
        }
    }

    function closeSuccess() {
        showSuccess.value = false
    }

    return { form, isSubmitting, showSuccess, onCNPJInput, onPhoneInput, submit, closeSuccess }
}
