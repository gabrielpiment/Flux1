export interface CadastroFormData {
    fullName: string
    companyName: string
    cnpjCpf: string
    email: string
    phone: string
    password: string
    plan: string
    billingCycle: 'mensal' | 'trimestral'
    attendantCount: number
    extraInstagram: number
    extraFacebook: number
    extraWhatsappOficial: number
    extraWhatsappParalela: number
    wantsGestorIA: boolean
    bonuses: string[]
}
