# Guia de Testes

## 📚 Visão Geral

Este documento descreve a estratégia de testes do Ascend Startup Hub, incluindo tipos de testes, ferramentas e boas práticas.

## 🧪 Tipos de Testes

### 1. Testes Unitários

Testam componentes e funções isoladamente.

```typescript
// UserCard.test.tsx
import { render, screen } from '@testing-library/react';
import { UserCard } from './UserCard';

describe('UserCard', () => {
  it('should render user information', () => {
    const user = {
      name: 'John Doe',
      email: 'john@example.com'
    };
    
    render(<UserCard user={user} />);
    
    expect(screen.getByText(user.name)).toBeInTheDocument();
    expect(screen.getByText(user.email)).toBeInTheDocument();
  });
});
```

### 2. Testes de Integração

Testam a interação entre componentes.

```typescript
// UserList.test.tsx
import { render, screen } from '@testing-library/react';
import { UserList } from './UserList';
import { UserProvider } from './UserContext';

describe('UserList', () => {
  it('should render list of users', () => {
    const users = [
      { id: '1', name: 'John Doe' },
      { id: '2', name: 'Jane Doe' }
    ];
    
    render(
      <UserProvider>
        <UserList users={users} />
      </UserProvider>
    );
    
    expect(screen.getByText('John Doe')).toBeInTheDocument();
    expect(screen.getByText('Jane Doe')).toBeInTheDocument();
  });
});
```

### 3. Testes de E2E

Testam o fluxo completo da aplicação.

```typescript
// user-flow.test.ts
import { test, expect } from '@playwright/test';

test('user registration flow', async ({ page }) => {
  await page.goto('/register');
  
  await page.fill('[name="name"]', 'John Doe');
  await page.fill('[name="email"]', 'john@example.com');
  await page.fill('[name="password"]', 'password123');
  
  await page.click('button[type="submit"]');
  
  await expect(page).toHaveURL('/dashboard');
  await expect(page.locator('text=Welcome, John Doe')).toBeVisible();
});
```

## 🛠️ Ferramentas

### 1. Jest

Framework de testes JavaScript.

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

### 2. React Testing Library

Biblioteca para testar componentes React.

```typescript
// setupTests.ts
import '@testing-library/jest-dom';
```

### 3. MSW (Mock Service Worker)

Para mock de requisições HTTP.

```typescript
// mocks/handlers.ts
import { rest } from 'msw';

export const handlers = [
  rest.get('/api/users', (req, res, ctx) => {
    return res(
      ctx.json([
        { id: '1', name: 'John Doe' },
        { id: '2', name: 'Jane Doe' }
      ])
    );
  })
];
```

## 📝 Boas Práticas

### 1. Nomenclatura

```typescript
// ✅ Correto
describe('UserCard', () => {
  it('should render user name', () => {});
  it('should display loading state', () => {});
});

// ❌ Incorreto
describe('UserCard', () => {
  it('test 1', () => {});
  it('test 2', () => {});
});
```

### 2. Organização

```
src/
├── components/
│   ├── UserCard.tsx
│   └── UserCard.test.tsx
├── hooks/
│   ├── useUser.ts
│   └── useUser.test.ts
└── pages/
    ├── Dashboard.tsx
    └── Dashboard.test.tsx
```

### 3. Testes Acessíveis

```typescript
// ✅ Correto
const button = screen.getByRole('button', { name: /submit/i });

// ❌ Incorreto
const button = screen.getByTestId('submit-button');
```

## 🎯 Cobertura de Testes

### 1. Configuração

```javascript
// jest.config.js
module.exports = {
  coverageThreshold: {
    global: {
      branches: 80,
      functions: 80,
      lines: 80,
      statements: 80
    }
  }
};
```

### 2. Relatório

```bash
npm test -- --coverage
```

## 🔄 CI/CD

### 1. GitHub Actions

```yaml
# .github/workflows/test.yml
name: Test

on: [push, pull_request]

jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - uses: actions/setup-node@v2
        with:
          node-version: '18'
      - run: npm install
      - run: npm test
      - run: npm run test:coverage
```

## 📱 Testes Responsivos

### 1. Testes de Layout

```typescript
// layout.test.tsx
import { render, screen } from '@testing-library/react';
import { Layout } from './Layout';

describe('Layout', () => {
  it('should be responsive', () => {
    render(<Layout />);
    
    const container = screen.getByTestId('layout-container');
    expect(container).toHaveStyle({
      display: 'flex',
      flexDirection: 'column'
    });
  });
});
```

## 🔒 Testes de Segurança

### 1. Testes de Autenticação

```typescript
// auth.test.tsx
import { render, screen } from '@testing-library/react';
import { AuthProvider } from './AuthContext';

describe('Authentication', () => {
  it('should protect private routes', () => {
    render(
      <AuthProvider>
        <PrivateRoute />
      </AuthProvider>
    );
    
    expect(screen.getByText('Please login')).toBeInTheDocument();
  });
});
```

## 📚 Recursos Adicionais

- [Documentação do Jest](https://jestjs.io/docs/getting-started)
- [Documentação do React Testing Library](https://testing-library.com/docs/react-testing-library/intro/)
- [Documentação do MSW](https://mswjs.io/docs/)
- [Guia de Acessibilidade](https://www.w3.org/WAI/standards-guidelines/wcag/) 