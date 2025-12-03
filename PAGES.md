# Documentação das Páginas

## 📚 Visão Geral

Este documento descreve as páginas principais do Ascend Startup Hub, suas funcionalidades e estrutura.

## 🏠 Página Inicial (Index)

**Localização**: `src/pages/Index.tsx`

### Estrutura

A página inicial é composta por várias seções:

1. **Hero Section**
   - Título principal
   - Subtítulo
   - Botões de ação
   - Design com gradiente radial

2. **Features Section**
   - Grid de 3 colunas
   - Ícones
   - Títulos
   - Descrições

3. **Testimonials Section**
   - Grid de 2 colunas
   - Depoimentos
   - Nomes dos autores
   - Cargos

4. **Pricing Section**
   - 3 planos diferentes
   - Preços
   - Lista de recursos
   - Botões de ação

5. **CTA Section**
   - Título
   - Subtítulo
   - Botão de ação

### Dados

A página utiliza os seguintes conjuntos de dados:

```typescript
const features = [
  {
    icon: Search,
    title: "Busca Poderosa",
    description: "Encontre o que precisa instantaneamente com nossas capacidades avançadas de busca.",
  },
  // ...
];

const testimonials = [
  {
    quote: "Esta plataforma transformou completamente nossa forma de trabalhar. Absolutamente incrível!",
    author: "Sarah Johnson",
    role: "CEO da TechCorp",
  },
  // ...
];

const pricing = [
  {
    name: "Digital Flux",
    type: "Basic",
    price: "299",
    period: "/mês",
    features: [
      "1 Conexão",
      "5 usuários",
      // ...
    ],
    buttonText: "Vamos começar",
    buttonVariant: "outline",
  },
  // ...
];
```

## 404 - Página Não Encontrada

**Localização**: `src/pages/NotFound.tsx`

### Funcionalidades

- Mensagem de erro amigável
- Botão para voltar à página inicial
- Design consistente com o resto do aplicativo

## 🎨 Estilização

Todas as páginas seguem o mesmo padrão de estilização:

- **Cores**:
  - Gradiente radial: `from-[#1A1A1A] via-[#4A1118] to-[#E31D3C]`
  - Texto: Branco para seções escuras, Preto para seções claras
  - Botões: Variações de vermelho e branco

- **Tipografia**:
  - Títulos: Fonte bold
  - Textos: Fonte regular
  - Hierarquia clara de tamanhos

- **Layout**:
  - Container centralizado
  - Grid system responsivo
  - Espaçamento consistente

## 📱 Responsividade

Todas as páginas são totalmente responsivas:

- **Desktop**: Layout completo com todas as seções
- **Tablet**: Ajustes no grid e espaçamentos
- **Mobile**: 
  - Menu hamburguer
  - Layout em coluna única
  - Ajustes de tamanho de fonte

## 🔗 Navegação

A navegação entre seções é feita através de:

- Menu principal
- Links de âncora
- Botões de ação
- Navegação por scroll

## 🎯 Boas Práticas

1. **Organização do Código**:
   - Componentes separados por seção
   - Dados em constantes
   - Tipagem TypeScript

2. **Performance**:
   - Lazy loading de imagens
   - Otimização de assets
   - Minimização de re-renders

3. **Acessibilidade**:
   - Alt text em imagens
   - Contraste adequado
   - Navegação por teclado

## 📝 Exemplo de Uso

```tsx
import { Index } from "@/pages/Index";
import { NotFound } from "@/pages/NotFound";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Index />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};
```

## 🔍 Testes

Cada página deve ter seus testes correspondentes:

```tsx
// Index.test.tsx
import { render, screen } from '@testing-library/react';
import { Index } from './Index';

describe('Index Page', () => {
  it('should render all sections', () => {
    render(<Index />);
    
    expect(screen.getByText('Transforme Seu Fluxo de Trabalho')).toBeInTheDocument();
    expect(screen.getByText('Recursos')).toBeInTheDocument();
    expect(screen.getByText('Depoimentos')).toBeInTheDocument();
    expect(screen.getByText('Planos')).toBeInTheDocument();
  });
});
```

## 📚 Recursos Adicionais

- [Documentação do React Router](https://reactrouter.com/en/main)
- [Guia de Acessibilidade](https://www.w3.org/WAI/standards-guidelines/wcag/)
- [Boas Práticas de Performance](https://web.dev/vitals/) 