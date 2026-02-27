/**
 * Formata CPF: 000.000.000-00
 */
export function formatCPF(value: string): string {
    const digits = value.replace(/\D/g, '').slice(0, 11)
    return digits
        .replace(/(\d{3})(\d)/, '$1.$2')
        .replace(/(\d{3})(\d)/, '$1.$2')
        .replace(/(\d{3})(\d{1,2})$/, '$1-$2')
}

/**
 * Formata CNPJ: 00.000.000/0000-00
 */
export function formatCNPJ(value: string): string {
    const digits = value.replace(/\D/g, '').slice(0, 14)
    return digits
        .replace(/(\d{2})(\d)/, '$1.$2')
        .replace(/(\d{3})(\d)/, '$1.$2')
        .replace(/(\d{3})(\d)/, '$1/$2')
        .replace(/(\d{4})(\d)/, '$1-$2')
}

/**
 * Auto-detect CPF (11 digits) or CNPJ (14 digits) and apply correct mask
 */
export function formatCPFOrCNPJ(value: string): string {
    const digits = value.replace(/\D/g, '')
    if (digits.length <= 11) {
        return formatCPF(value)
    }
    return formatCNPJ(value)
}

/**
 * Formata telefone: (00) 00000-0000
 */
export function formatPhone(value: string): string {
    const digits = value.replace(/\D/g, '').slice(0, 11)
    return digits
        .replace(/(\d{2})(\d)/, '($1) $2')
        .replace(/(\d{5})(\d)/, '$1-$2')
}
