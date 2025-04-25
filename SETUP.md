# Configuração e Setup do Projeto

## 📋 Pré-requisitos

- Node.js (versão 18 ou superior)
- npm ou yarn
- Git

## 🚀 Instalação

1. Clone o repositório:
```bash
git clone https://github.com/seu-usuario/ascend-startup-hub.git
cd ascend-startup-hub
```

2. Instale as dependências:
```bash
npm install
# ou
yarn install
```

## ⚙️ Configuração do Ambiente

### Variáveis de Ambiente

Crie um arquivo `.env` na raiz do projeto com as seguintes variáveis:

```env
VITE_API_URL=https://api.ascendhub.com
VITE_APP_NAME=Ascend Startup Hub
```

### Configuração do TypeScript

O projeto utiliza TypeScript com as seguintes configurações:

- `tsconfig.json`: Configuração principal
- `tsconfig.node.json`: Configuração específica para Node
- `tsconfig.app.json`: Configuração específica para a aplicação

### Configuração do Tailwind

O projeto utiliza Tailwind CSS com as seguintes configurações:

- `tailwind.config.ts`: Configuração principal
- `postcss.config.js`: Configuração do PostCSS

## 🎨 Design System

### Cores

```typescript
const colors = {
  primary: '#E31D3C',
  secondary: '#4A1118',
  background: '#1A1A1A',
  text: {
    light: '#FFFFFF',
    dark: '#1A1A1A'
  }
};
```

### Tipografia

```typescript
const typography = {
  fontFamily: {
    sans: ['Inter', 'sans-serif'],
    mono: ['JetBrains Mono', 'monospace']
  },
  fontSize: {
    xs: '0.75rem',
    sm: '0.875rem',
    base: '1rem',
    lg: '1.125rem',
    xl: '1.25rem',
    '2xl': '1.5rem',
    '3xl': '1.875rem',
    '4xl': '2.25rem',
    '5xl': '3rem',
    '6xl': '3.75rem'
  }
};
```

## 🔧 Scripts Disponíveis

```json
{
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "build:dev": "vite build --mode development",
    "lint": "eslint .",
    "preview": "vite preview"
  }
}
```

## 📦 Dependências Principais

### Frontend
```json
{
  "dependencies": {
    "react": "^18.3.1",
    "react-dom": "^18.3.1",
    "react-router-dom": "^6.26.2",
    "@tanstack/react-query": "^5.56.2",
    "tailwindcss": "^3.4.11",
    "shadcn-ui": "latest"
  }
}
```

### Desenvolvimento
```json
{
  "devDependencies": {
    "typescript": "^5.5.3",
    "vite": "^5.4.1",
    "eslint": "^9.9.0",
    "@types/react": "^18.3.3",
    "@types/react-dom": "^18.3.0"
  }
}
```

## 🧪 Testes

### Configuração do Jest

```javascript
// jest.config.js
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['<rootDir>/src/setupTests.ts'],
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1'
  }
};
```

### Executando Testes

```bash
npm test
# ou
yarn test
```

## 📝 Linting e Formatação

### ESLint

```javascript
// .eslintrc.js
module.exports = {
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended'
  ],
  rules: {
    'react/react-in-jsx-scope': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off'
  }
};
```

### Prettier

```json
// .prettierrc
{
  "semi": true,
  "trailingComma": "all",
  "singleQuote": true,
  "printWidth": 80,
  "tabWidth": 2
}
```

## 🔄 CI/CD

### GitHub Actions

```yaml
# .github/workflows/ci.yml
name: CI

on:
  push:
    branches: [ main ]
  pull_request:
    branches: [ main ]

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - uses: actions/setup-node@v2
        with:
          node-version: '18'
      - run: npm install
      - run: npm run build
      - run: npm test
```

## 📚 Recursos Adicionais

- [Documentação do Vite](https://vitejs.dev/guide/)
- [Documentação do React](https://reactjs.org/docs/getting-started.html)
- [Documentação do TypeScript](https://www.typescriptlang.org/docs/)
- [Documentação do Tailwind](https://tailwindcss.com/docs)
- [Documentação do Shadcn/ui](https://ui.shadcn.com/docs) 