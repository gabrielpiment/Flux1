# Documentação dos Componentes

## 📚 Visão Geral

Este documento descreve os componentes principais do Ascend Startup Hub, suas funcionalidades e como utilizá-los.

## 🧩 Componentes Principais

### Navigation

O componente de navegação principal da aplicação.

**Localização**: `src/components/Navigation.tsx`

**Props**: Nenhuma

**Funcionalidades**:
- Navegação responsiva (desktop e mobile)
- Menu hamburguer para dispositivos móveis
- Links para seções principais
- Botão de ação principal

**Exemplo de Uso**:
```tsx
import { Navigation } from "@/components/Navigation";

const App = () => {
  return (
    <div>
      <Navigation />
      {/* Resto do conteúdo */}
    </div>
  );
};
```

## 🎨 Componentes UI

### Button

Componente de botão personalizado baseado no Shadcn/ui.

**Localização**: `src/components/ui/button.tsx`

**Variantes**:
- `default`: Botão padrão
- `outline`: Botão com borda
- `ghost`: Botão transparente
- `link`: Botão estilo link
- `secondary`: Botão secundário

**Tamanhos**:
- `sm`: Pequeno
- `default`: Médio
- `lg`: Grande

**Exemplo de Uso**:
```tsx
import { Button } from "@/components/ui/button";

const MyComponent = () => {
  return (
    <Button variant="default" size="lg">
      Clique Aqui
    </Button>
  );
};
```

### Badge

Componente de badge para exibir status ou labels.

**Localização**: `src/components/ui/badge.tsx`

**Variantes**:
- `default`: Badge padrão
- `secondary`: Badge secundário
- `destructive`: Badge de erro
- `outline`: Badge com borda

**Exemplo de Uso**:
```tsx
import { Badge } from "@/components/ui/badge";

const MyComponent = () => {
  return (
    <Badge variant="default">
      Novo
    </Badge>
  );
};
```

## 🎯 Hooks Personalizados

### useMobile

Hook para detectar se o dispositivo é mobile.

**Localização**: `src/hooks/use-mobile.tsx`

**Retorno**:
- `isMobile`: boolean - Indica se o dispositivo é mobile

**Exemplo de Uso**:
```tsx
import { useMobile } from "@/hooks/use-mobile";

const MyComponent = () => {
  const isMobile = useMobile();

  return (
    <div>
      {isMobile ? "Mobile" : "Desktop"}
    </div>
  );
};
```

## 🔧 Utilitários

### cn

Função utilitária para combinar classes CSS.

**Localização**: `src/lib/utils.ts`

**Parâmetros**:
- `...inputs`: ClassValue[] - Classes CSS a serem combinadas

**Exemplo de Uso**:
```tsx
import { cn } from "@/lib/utils";

const MyComponent = () => {
  return (
    <div className={cn(
      "text-base",
      "font-medium",
      "text-gray-900"
    )}>
      Conteúdo
    </div>
  );
};
```

## 📝 Boas Práticas

1. **Nomenclatura de Componentes**:
   - Use PascalCase para nomes de componentes
   - Use nomes descritivos e significativos
   - Prefira componentes funcionais

2. **Organização de Props**:
   - Agrupe props relacionadas
   - Use interfaces para tipagem
   - Documente props obrigatórias

3. **Estilização**:
   - Use Tailwind CSS para estilização
   - Mantenha consistência com o design system
   - Evite estilos inline

4. **Performance**:
   - Use memo para componentes pesados
   - Evite re-renders desnecessários
   - Otimize imports

## 🔍 Testes

Cada componente deve ter seus testes correspondentes. Use a seguinte estrutura:

```tsx
// MyComponent.test.tsx
import { render, screen } from '@testing-library/react';
import { MyComponent } from './MyComponent';

describe('MyComponent', () => {
  it('should render correctly', () => {
    render(<MyComponent />);
    expect(screen.getByText('Expected Text')).toBeInTheDocument();
  });
});
```

## 📚 Recursos Adicionais

- [Documentação do Shadcn/ui](https://ui.shadcn.com/docs)
- [Guia de Estilo do Tailwind](https://tailwindcss.com/docs)
- [Boas Práticas do React](https://reactjs.org/docs/thinking-in-react.html) 