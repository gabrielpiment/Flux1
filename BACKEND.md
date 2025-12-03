# Documentação do Backend

## 📚 Visão Geral

Este documento descreve a estrutura, serviços e funcionalidades do backend do Ascend Startup Hub.

## 🏗️ Arquitetura

### Microserviços

```
backend/
├── auth-service/        # Autenticação e autorização
├── startup-service/     # Gerenciamento de startups
├── investment-service/  # Sistema de investimentos
├── notification-service/# Sistema de notificações
├── search-service/      # Busca e indexação
└── analytics-service/   # Análise de dados
```

### Tecnologias

- Node.js 18
- TypeScript
- NestJS
- PostgreSQL
- Redis
- RabbitMQ
- Docker
- Kubernetes

## 🔐 Autenticação e Autorização

### JWT

```typescript
interface JwtPayload {
  sub: string;
  email: string;
  role: string;
  iat: number;
  exp: number;
}
```

### RBAC (Role-Based Access Control)

```typescript
enum UserRole {
  ADMIN = 'admin',
  INVESTOR = 'investor',
  STARTUP = 'startup',
  USER = 'user'
}
```

## 📦 Serviços

### 1. Auth Service

```typescript
@Injectable()
export class AuthService {
  async login(credentials: LoginDto): Promise<AuthResponse> {
    // Implementação
  }

  async register(userData: RegisterDto): Promise<User> {
    // Implementação
  }

  async refreshToken(refreshToken: string): Promise<AuthResponse> {
    // Implementação
  }
}
```

### 2. Startup Service

```typescript
@Injectable()
export class StartupService {
  async createStartup(data: CreateStartupDto): Promise<Startup> {
    // Implementação
  }

  async updateStartup(id: string, data: UpdateStartupDto): Promise<Startup> {
    // Implementação
  }

  async getStartupById(id: string): Promise<Startup> {
    // Implementação
  }
}
```

### 3. Investment Service

```typescript
@Injectable()
export class InvestmentService {
  async createInvestment(data: CreateInvestmentDto): Promise<Investment> {
    // Implementação
  }

  async getInvestmentsByStartup(startupId: string): Promise<Investment[]> {
    // Implementação
  }

  async processInvestment(investmentId: string): Promise<void> {
    // Implementação
  }
}
```

## 🗄️ Banco de Dados

### Schema Principal

```sql
CREATE TABLE users (
  id UUID PRIMARY KEY,
  email VARCHAR(255) UNIQUE NOT NULL,
  password_hash VARCHAR(255) NOT NULL,
  role VARCHAR(50) NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE startups (
  id UUID PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  description TEXT,
  founder_id UUID REFERENCES users(id),
  status VARCHAR(50) NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE investments (
  id UUID PRIMARY KEY,
  startup_id UUID REFERENCES startups(id),
  investor_id UUID REFERENCES users(id),
  amount DECIMAL(15,2) NOT NULL,
  status VARCHAR(50) NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

## 🔄 Mensageria

### Eventos

```typescript
interface InvestmentCreatedEvent {
  investmentId: string;
  startupId: string;
  investorId: string;
  amount: number;
  timestamp: Date;
}

interface StartupUpdatedEvent {
  startupId: string;
  changes: Partial<Startup>;
  timestamp: Date;
}
```

### Consumidores

```typescript
@Injectable()
export class NotificationConsumer {
  @RabbitSubscribe({
    exchange: 'investment',
    routingKey: 'created',
    queue: 'notification-queue'
  })
  async handleInvestmentCreated(event: InvestmentCreatedEvent) {
    // Implementação
  }
}
```

## 📊 Cache

### Redis

```typescript
@Injectable()
export class CacheService {
  constructor(private readonly redis: Redis) {}

  async get<T>(key: string): Promise<T | null> {
    const data = await this.redis.get(key);
    return data ? JSON.parse(data) : null;
  }

  async set(key: string, value: any, ttl?: number): Promise<void> {
    await this.redis.set(key, JSON.stringify(value));
    if (ttl) {
      await this.redis.expire(key, ttl);
    }
  }
}
```

## 🔍 Busca

### Elasticsearch

```typescript
@Injectable()
export class SearchService {
  constructor(private readonly elasticsearch: Client) {}

  async indexStartup(startup: Startup): Promise<void> {
    await this.elasticsearch.index({
      index: 'startups',
      id: startup.id,
      body: startup
    });
  }

  async searchStartups(query: string): Promise<Startup[]> {
    const { body } = await this.elasticsearch.search({
      index: 'startups',
      body: {
        query: {
          multi_match: {
            query,
            fields: ['name', 'description', 'tags']
          }
        }
      }
    });
    return body.hits.hits.map(hit => hit._source);
  }
}
```

## 📈 Métricas e Monitoramento

### Prometheus

```typescript
@Injectable()
export class MetricsService {
  private readonly httpRequestsTotal = new Counter({
    name: 'http_requests_total',
    help: 'Total number of HTTP requests',
    labelNames: ['method', 'path', 'status']
  });

  incrementRequest(method: string, path: string, status: number) {
    this.httpRequestsTotal.inc({ method, path, status });
  }
}
```

## 🔒 Segurança

### Middlewares

```typescript
@Injectable()
export class SecurityMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    // Implementação de segurança
    helmet()(req, res, next);
    rateLimit()(req, res, next);
    cors()(req, res, next);
  }
}
```

## 🚀 Deploy

### Docker

```dockerfile
FROM node:18-alpine

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .
RUN npm run build

CMD ["npm", "run", "start:prod"]
```

### Kubernetes

```yaml
apiVersion: apps/v1
kind: Deployment
metadata:
  name: auth-service
spec:
  replicas: 3
  template:
    spec:
      containers:
      - name: auth-service
        image: ascendhub/auth-service:latest
        ports:
        - containerPort: 3000
```

## 📚 Recursos Adicionais

- [Documentação da API](API.md)
- [Guia de Contribuição](CONTRIBUTING.md)
- [Política de Segurança](SECURITY.md)
- [Suporte](mailto:backend-support@ascendhub.com) 