export interface NavItem {
    label: string
    href: string
    hasDropdown?: boolean
    submenu?: { label: string; href: string }[]
}

export const navLinks: NavItem[] = [
    {
        label: 'Produto',
        href: '#',
        hasDropdown: true,
        submenu: [
            { label: 'Agentes de IA', href: '/agentes-ia' },
            { label: 'Caixa de Entrada', href: '/caixa-entrada' },
            { label: 'Integrações', href: '/integracoes' },
            { label: 'Relatórios', href: '/relatorios' },
            { label: 'Flux AI', href: '/flux-ai' }
        ]
    },
    {
        label: 'Soluções',
        href: '#',
        hasDropdown: true,
        submenu: [
            { label: 'Captura de Leads', href: '/captura-conversao' },
            { label: 'Atendimento', href: '/atendimento-cliente' },
            { label: 'Reengajamento', href: '/reengajamento-cliente' },
            { label: 'Aumentar Receita', href: '/aumentar-receita' }
        ]
    },
    { label: 'Preços', href: '/precos', hasDropdown: false },
    {
        label: 'Canais',
        href: '#',
        hasDropdown: true,
        submenu: [
            { label: 'WhatsApp', href: '/canais/whatsapp' },
            { label: 'Instagram', href: '/canais/instagram' },
            { label: 'Email', href: '/canais/email' },
            { label: 'Voz', href: '/canais/voz' },
            { label: 'Facebook', href: '/canais/facebook' },
            { label: 'Todos os canais', href: '/canais/todos-canais' }
        ]
    },
    {
        label: 'Setores',
        href: '#',
        hasDropdown: true,
        submenu: [
            { label: 'Varejo e E-commerce', href: '/industrias/varejo-ecommerce' },
            { label: 'Financeiro', href: '/industrias/servicos-financeiros' },
            { label: 'Viagens e Lazer', href: '/industrias/viagens-lazer' },
            { label: 'Hospitalidade', href: '/industrias/restaurantes-hospitalidade' },
            { label: 'Automotivo', href: '/industrias/automotivo' },
            { label: 'Energia', href: '/industrias/energia-servicos' }
        ]
    }
]
