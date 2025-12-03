# Guia de Boas Práticas

## 📝 Convenções de Código

### Nomenclatura

- **Componentes**: PascalCase
  ```typescript
  // ✅ Correto
  const UserProfile = () => {};
  
  // ❌ Incorreto
  const userProfile = () => {};
  ```

- **Funções e Variáveis**: camelCase
  ```typescript
  // ✅ Correto
  const getUserData = () => {};
  const userData = {};
  
  // ❌ Incorreto
  const GetUserData = () => {};
  const UserData = {};
  ```

- **Constantes**: UPPER_SNAKE_CASE
  ```typescript
  // ✅ Correto
  const MAX_RETRY_COUNT = 3;
  
  // ❌ Incorreto
  const maxRetryCount = 3;
  ```

### Tipagem

- Sempre use TypeScript
- Evite `any`
- Use interfaces para objetos complexos
- Use type aliases para tipos simples

```typescript
// ✅ Correto
interface User {
  id: string;
  name: string;
  email: string;
}

type UserRole = 'admin' | 'user' | 'guest';

// ❌ Incorreto
const user: any = {};
```

### Componentes

- Use componentes funcionais
- Separe a lógica em hooks personalizados
- Mantenha os componentes pequenos e focados

```typescript
// ✅ Correto
const UserCard = ({ user }: { user: User }) => {
  return (
    <div className="card">
      <h2>{user.name}</h2>
      <p>{user.email}</p>
    </div>
  );
};

// ❌ Incorreto
const UserCard = ({ user }: { user: any }) => {
  // Lógica complexa misturada com UI
  return (
    <div>
      {/* Muitas responsabilidades */}
    </div>
  );
};
```

## 🎨 Estilização

### Tailwind CSS

- Use classes utilitárias do Tailwind
- Evite estilos inline
- Mantenha a consistência com o design system

```typescript
// ✅ Correto
<div className="flex items-center justify-between p-4 bg-white rounded-lg shadow-sm">

// ❌ Incorreto
<div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '1rem', backgroundColor: 'white', borderRadius: '0.5rem', boxShadow: '0 1px 2px 0 rgba(0, 0, 0, 0.05)' }}>
```

### Responsividade

- Use breakpoints do Tailwind
- Teste em diferentes dispositivos
- Considere a acessibilidade

```typescript
// ✅ Correto
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">

// ❌ Incorreto
<div className="grid grid-cols-3">
```

## 🧪 Testes

### Estrutura

- Um arquivo de teste para cada componente
- Testes unitários e de integração
- Use Jest e React Testing Library

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

### Boas Práticas

- Teste comportamentos, não implementações
- Use queries acessíveis
- Mantenha os testes isolados

## 🔄 Estado e Gerenciamento de Dados

### React Query

- Use React Query para requisições
- Implemente cache adequado
- Trate erros e loading states

```typescript
// ✅ Correto
const { data, isLoading, error } = useQuery(['user', userId], () => 
  fetchUser(userId)
);

// ❌ Incorreto
const [user, setUser] = useState(null);
useEffect(() => {
  fetchUser(userId).then(setUser);
}, [userId]);
```

### Estado Local

- Use useState para estado simples
- Use useReducer para estado complexo
- Evite prop drilling

```typescript
// ✅ Correto
const [count, setCount] = useState(0);
const [state, dispatch] = useReducer(reducer, initialState);

// ❌ Incorreto
const [user, setUser] = useState(null);
const [loading, setLoading] = useState(false);
const [error, setError] = useState(null);
```

## 📦 Estrutura de Arquivos

```
src/
├── components/
│   ├── ui/          # Componentes de UI reutilizáveis
│   └── features/    # Componentes específicos de features
├── hooks/           # Hooks personalizados
├── lib/             # Utilitários e helpers
├── pages/           # Páginas da aplicação
├── services/        # Serviços e APIs
├── types/           # Tipos TypeScript
└── utils/           # Funções utilitárias
```

## 🔒 Segurança

- Valide inputs do usuário
- Use HTTPS
- Implemente autenticação adequada
- Proteja rotas sensíveis
- Sanitize dados

## 🚀 Performance

- Use React.memo para componentes pesados
- Implemente lazy loading
- Otimize imagens
- Use code splitting
- Minimize re-renders

```typescript
// ✅ Correto
const HeavyComponent = React.memo(({ data }) => {
  return (
    <div>
      {/* Componente pesado */}
    </div>
  );
});

// ❌ Incorreto
const HeavyComponent = ({ data }) => {
  // Sem otimização
  return (
    <div>
      {/* Componente pesado */}
    </div>
  );
};
```

## 📚 Documentação

- Documente componentes complexos
- Mantenha o README atualizado
- Use JSDoc para funções
- Documente props e tipos

```typescript
/**
 * Componente de card de usuário
 * @param {Object} props
 * @param {User} props.user - Dados do usuário
 * @param {boolean} [props.isLoading] - Estado de loading
 * @returns {JSX.Element}
 */
const UserCard = ({ user, isLoading = false }) => {
  // ...
};
```

## 🔄 Versionamento

- Use Git Flow
- Commits semânticos
- Pull Requests descritivos
- Code Review

```bash
# Exemplo de commit semântico
git commit -m "feat: adiciona componente UserCard"
git commit -m "fix: corrige bug de renderização"
git commit -m "docs: atualiza documentação"
```

## 📱 Acessibilidade

- Use HTML semântico
- Implemente ARIA labels
- Mantenha contraste adequado
- Teste com leitores de tela
- Considere navegação por teclado

```typescript
// ✅ Correto
<button 
  className="btn"
  aria-label="Fechar modal"
  onClick={handleClose}
>
  <XIcon />
</button>

// ❌ Incorreto
<div 
  className="btn"
  onClick={handleClose}
>
  X
</div>
```

## 📚 Recursos Adicionais

- [Documentação do React](https://reactjs.org/docs/getting-started.html)
- [Documentação do TypeScript](https://www.typescriptlang.org/docs/)
- [Guia de Acessibilidade](https://www.w3.org/WAI/standards-guidelines/wcag/)
- [Boas Práticas de Performance](https://web.dev/vitals/)
- [Convenções de Git](https://www.conventionalcommits.org/) 