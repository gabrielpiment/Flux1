# Design System

## 🎨 Cores

### Paleta Principal

```typescript
const colors = {
  primary: {
    DEFAULT: '#E31D3C',
    50: '#FEE5E9',
    100: '#FCCBD3',
    200: '#F997A7',
    300: '#F6637B',
    400: '#F32F4F',
    500: '#E31D3C', // Cor principal
    600: '#B51730',
    700: '#871124',
    800: '#590C18',
    900: '#2B060C',
  },
  secondary: {
    DEFAULT: '#4A1118',
    50: '#F2E4E6',
    100: '#E5C9CD',
    200: '#CB939B',
    300: '#B15D69',
    400: '#972737',
    500: '#4A1118', // Cor secundária
    600: '#3B0E13',
    700: '#2C0A0E',
    800: '#1D0709',
    900: '#0F0305',
  },
  background: {
    DEFAULT: '#1A1A1A',
    light: '#FFFFFF',
    dark: '#1A1A1A',
  },
  text: {
    light: '#FFFFFF',
    dark: '#1A1A1A',
    muted: '#6B7280',
  },
};
```

### Uso no Tailwind

```typescript
// tailwind.config.ts
export default {
  theme: {
    extend: {
      colors: {
        primary: colors.primary,
        secondary: colors.secondary,
        background: colors.background,
        text: colors.text,
      },
    },
  },
};
```

## 🔤 Tipografia

### Fontes

```typescript
const typography = {
  fontFamily: {
    sans: ['Inter', 'system-ui', 'sans-serif'],
    mono: ['JetBrains Mono', 'monospace'],
  },
  fontSize: {
    xs: '0.75rem',    // 12px
    sm: '0.875rem',   // 14px
    base: '1rem',     // 16px
    lg: '1.125rem',   // 18px
    xl: '1.25rem',    // 20px
    '2xl': '1.5rem',  // 24px
    '3xl': '1.875rem', // 30px
    '4xl': '2.25rem',  // 36px
    '5xl': '3rem',     // 48px
    '6xl': '3.75rem',  // 60px
  },
  fontWeight: {
    light: 300,
    normal: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
  },
  lineHeight: {
    none: 1,
    tight: 1.25,
    snug: 1.375,
    normal: 1.5,
    relaxed: 1.625,
    loose: 2,
  },
};
```

### Uso no Tailwind

```typescript
// tailwind.config.ts
export default {
  theme: {
    extend: {
      fontFamily: typography.fontFamily,
      fontSize: typography.fontSize,
      fontWeight: typography.fontWeight,
      lineHeight: typography.lineHeight,
    },
  },
};
```

## 📏 Espaçamento

```typescript
const spacing = {
  0: '0',
  1: '0.25rem',    // 4px
  2: '0.5rem',     // 8px
  3: '0.75rem',    // 12px
  4: '1rem',       // 16px
  5: '1.25rem',    // 20px
  6: '1.5rem',     // 24px
  8: '2rem',       // 32px
  10: '2.5rem',    // 40px
  12: '3rem',      // 48px
  16: '4rem',      // 64px
  20: '5rem',      // 80px
  24: '6rem',      // 96px
  32: '8rem',      // 128px
  40: '10rem',     // 160px
  48: '12rem',     // 192px
  56: '14rem',     // 224px
  64: '16rem',     // 256px
};
```

## 🎭 Componentes

### Botões

```typescript
const button = {
  base: 'inline-flex items-center justify-center rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none',
  variants: {
    default: 'bg-primary text-white hover:bg-primary-600',
    outline: 'border border-primary text-primary hover:bg-primary hover:text-white',
    ghost: 'text-primary hover:bg-primary hover:text-white',
    link: 'text-primary underline-offset-4 hover:underline',
    secondary: 'bg-secondary text-white hover:bg-secondary-600',
  },
  sizes: {
    sm: 'h-9 px-3 text-sm',
    default: 'h-10 px-4 py-2',
    lg: 'h-11 px-8 text-lg',
  },
};
```

### Cards

```typescript
const card = {
  base: 'rounded-lg border bg-card text-card-foreground shadow-sm',
  header: 'flex flex-col space-y-1.5 p-6',
  title: 'text-2xl font-semibold leading-none tracking-tight',
  description: 'text-sm text-muted-foreground',
  content: 'p-6 pt-0',
  footer: 'flex items-center p-6 pt-0',
};
```

### Inputs

```typescript
const input = {
  base: 'flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50',
};
```

## 🎯 Breakpoints

```typescript
const breakpoints = {
  sm: '640px',
  md: '768px',
  lg: '1024px',
  xl: '1280px',
  '2xl': '1536px',
};
```

## 🎨 Gradientes

```typescript
const gradients = {
  primary: 'bg-gradient-to-r from-primary-500 to-primary-700',
  secondary: 'bg-gradient-to-r from-secondary-500 to-secondary-700',
  radial: 'bg-gradient-radial from-[#1A1A1A] via-[#4A1118] to-[#E31D3C]',
};
```

## 📱 Responsividade

### Container

```typescript
const container = {
  base: 'mx-auto px-4',
  sm: 'max-w-screen-sm',
  md: 'max-w-screen-md',
  lg: 'max-w-screen-lg',
  xl: 'max-w-screen-xl',
  '2xl': 'max-w-screen-2xl',
};
```

## 🎭 Animações

```typescript
const animations = {
  fadeIn: 'animate-fade-in',
  slideIn: 'animate-slide-in',
  scale: 'animate-scale',
  spin: 'animate-spin',
  pulse: 'animate-pulse',
};
```

## 📚 Recursos Adicionais

- [Documentação do Tailwind](https://tailwindcss.com/docs)
- [Documentação do Shadcn/ui](https://ui.shadcn.com/docs)
- [Guia de Acessibilidade](https://www.w3.org/WAI/standards-guidelines/wcag/)
- [Boas Práticas de Design](https://www.nngroup.com/articles/ten-usability-heuristics/) 