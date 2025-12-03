# Documentação do Frontend

## 📚 Visão Geral

Este documento descreve a estrutura, componentes e funcionalidades do frontend do Ascend Startup Hub.

## 🏗️ Estrutura do Projeto

```
src/
├── components/         # Componentes reutilizáveis
├── pages/             # Páginas da aplicação
├── hooks/             # Custom hooks
├── services/          # Serviços e integrações
├── styles/            # Estilos globais
├── utils/             # Funções utilitárias
└── types/             # Definições de tipos
```

## 🎨 Design System

### Cores

```css
:root {
  --primary: #2563eb;
  --secondary: #4f46e5;
  --success: #22c55e;
  --warning: #f59e0b;
  --danger: #ef4444;
  --dark: #1f2937;
  --light: #f3f4f6;
}
```

### Tipografia

```css
:root {
  --font-primary: 'Inter', sans-serif;
  --font-secondary: 'Poppins', sans-serif;
  
  --text-xs: 0.75rem;
  --text-sm: 0.875rem;
  --text-base: 1rem;
  --text-lg: 1.125rem;
  --text-xl: 1.25rem;
  --text-2xl: 1.5rem;
}
```

### Componentes Base

#### 1. Botão

```tsx
interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
  onClick?: () => void;
  disabled?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  children,
  ...props
}) => {
  // Implementação
};
```

#### 2. Card

```tsx
interface CardProps {
  title: string;
  description?: string;
  image?: string;
  children?: React.ReactNode;
}

const Card: React.FC<CardProps> = ({
  title,
  description,
  image,
  children
}) => {
  // Implementação
};
```

## 📱 Páginas Principais

### 1. Dashboard

```tsx
const Dashboard: React.FC = () => {
  return (
    <Layout>
      <StatsOverview />
      <RecentActivity />
      <InvestmentSummary />
    </Layout>
  );
};
```

### 2. Lista de Startups

```tsx
const StartupsList: React.FC = () => {
  return (
    <Layout>
      <SearchBar />
      <Filters />
      <StartupGrid />
      <Pagination />
    </Layout>
  );
};
```

### 3. Detalhes da Startup

```tsx
const StartupDetails: React.FC = () => {
  return (
    <Layout>
      <StartupHeader />
      <StartupInfo />
      <InvestmentHistory />
      <TeamMembers />
    </Layout>
  );
};
```

## 🔄 Estado Global

### 1. Contexto de Autenticação

```tsx
interface AuthContextType {
  user: User | null;
  login: (credentials: LoginCredentials) => Promise<void>;
  logout: () => void;
  isAuthenticated: boolean;
}

const AuthContext = createContext<AuthContextType>(null);
```

### 2. Gerenciamento de Tema

```tsx
interface ThemeContextType {
  theme: 'light' | 'dark';
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType>(null);
```

## 📊 Gráficos e Visualizações

### 1. Gráfico de Investimentos

```tsx
const InvestmentChart: React.FC<{ data: InvestmentData[] }> = ({ data }) => {
  return (
    <ResponsiveContainer>
      <LineChart data={data}>
        <XAxis dataKey="date" />
        <YAxis />
        <Tooltip />
        <Line type="monotone" dataKey="amount" />
      </LineChart>
    </ResponsiveContainer>
  );
};
```

### 2. Mapa de Startups

```tsx
const StartupMap: React.FC<{ startups: Startup[] }> = ({ startups }) => {
  return (
    <MapContainer>
      <TileLayer />
      {startups.map(startup => (
        <Marker key={startup.id} position={startup.location}>
          <Popup>{startup.name}</Popup>
        </Marker>
      ))}
    </MapContainer>
  );
};
```

## 📱 Responsividade

### Breakpoints

```css
@media (min-width: 640px) { /* sm */ }
@media (min-width: 768px) { /* md */ }
@media (min-width: 1024px) { /* lg */ }
@media (min-width: 1280px) { /* xl */ }
```

### Componentes Responsivos

```tsx
const ResponsiveGrid: React.FC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {/* Conteúdo */}
    </div>
  );
};
```

## 🔒 Segurança

### 1. Proteção de Rotas

```tsx
const ProtectedRoute: React.FC = ({ children }) => {
  const { isAuthenticated } = useAuth();
  
  if (!isAuthenticated) {
    return <Navigate to="/login" />;
  }
  
  return children;
};
```

### 2. Sanitização de Dados

```tsx
const sanitizeInput = (input: string): string => {
  return DOMPurify.sanitize(input);
};
```

## 📦 Dependências Principais

- React 18
- Next.js 13
- TypeScript
- Tailwind CSS
- React Query
- React Hook Form
- React Router
- Chart.js
- Leaflet

## 🚀 Deploy

### 1. Build

```bash
npm run build
```

### 2. Deploy

```bash
npm run deploy
```

## 📚 Recursos Adicionais

- [Guia de Estilo](https://design.ascendhub.com)
- [Componentes](https://components.ascendhub.com)
- [Documentação](https://docs.ascendhub.com)
- [Suporte](mailto:frontend-support@ascendhub.com) 