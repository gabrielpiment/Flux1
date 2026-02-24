export interface NavItem {
    label: string
    href: string
    hasDropdown?: boolean
}

export const navLinks: NavItem[] = [
    { label: 'Produto', href: '#', hasDropdown: true },
    { label: 'Soluções', href: '#', hasDropdown: true },
    { label: 'Preços', href: '/precos', hasDropdown: false },
    { label: 'Mais', href: '#', hasDropdown: true }
]
