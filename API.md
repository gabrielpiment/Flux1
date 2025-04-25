# Documentação da API

## 📚 Visão Geral

Este documento descreve os endpoints, parâmetros e respostas da API do Ascend Startup Hub.

## 🔐 Autenticação

### Login

```http
POST /api/v1/auth/login
Content-Type: application/json

{
  "email": "user@example.com",
  "password": "senha123"
}
```

**Resposta:**

```json
{
  "access_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "refresh_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "user": {
    "id": "uuid",
    "email": "user@example.com",
    "role": "investor"
  }
}
```

### Registro

```http
POST /api/v1/auth/register
Content-Type: application/json

{
  "email": "user@example.com",
  "password": "senha123",
  "name": "Nome do Usuário",
  "role": "investor"
}
```

**Resposta:**

```json
{
  "id": "uuid",
  "email": "user@example.com",
  "name": "Nome do Usuário",
  "role": "investor",
  "created_at": "2024-03-14T12:00:00Z"
}
```

## 🚀 Startups

### Listar Startups

```http
GET /api/v1/startups
Authorization: Bearer {token}
```

**Parâmetros de Query:**
- `page` (opcional): Número da página
- `limit` (opcional): Itens por página
- `status` (opcional): Filtro por status
- `sector` (opcional): Filtro por setor

**Resposta:**

```json
{
  "data": [
    {
      "id": "uuid",
      "name": "Startup Name",
      "description": "Description",
      "status": "active",
      "sector": "technology",
      "created_at": "2024-03-14T12:00:00Z"
    }
  ],
  "meta": {
    "total": 100,
    "page": 1,
    "limit": 10
  }
}
```

### Detalhes da Startup

```http
GET /api/v1/startups/{id}
Authorization: Bearer {token}
```

**Resposta:**

```json
{
  "id": "uuid",
  "name": "Startup Name",
  "description": "Description",
  "status": "active",
  "sector": "technology",
  "founder": {
    "id": "uuid",
    "name": "Founder Name",
    "email": "founder@example.com"
  },
  "investments": [
    {
      "id": "uuid",
      "amount": 100000,
      "investor": {
        "id": "uuid",
        "name": "Investor Name"
      },
      "created_at": "2024-03-14T12:00:00Z"
    }
  ],
  "created_at": "2024-03-14T12:00:00Z"
}
```

### Criar Startup

```http
POST /api/v1/startups
Authorization: Bearer {token}
Content-Type: application/json

{
  "name": "Startup Name",
  "description": "Description",
  "sector": "technology",
  "business_plan": "Business plan details"
}
```

**Resposta:**

```json
{
  "id": "uuid",
  "name": "Startup Name",
  "description": "Description",
  "status": "pending",
  "sector": "technology",
  "created_at": "2024-03-14T12:00:00Z"
}
```

## 💰 Investimentos

### Listar Investimentos

```http
GET /api/v1/investments
Authorization: Bearer {token}
```

**Parâmetros de Query:**
- `startup_id` (opcional): Filtro por startup
- `investor_id` (opcional): Filtro por investidor
- `status` (opcional): Filtro por status

**Resposta:**

```json
{
  "data": [
    {
      "id": "uuid",
      "amount": 100000,
      "status": "pending",
      "startup": {
        "id": "uuid",
        "name": "Startup Name"
      },
      "investor": {
        "id": "uuid",
        "name": "Investor Name"
      },
      "created_at": "2024-03-14T12:00:00Z"
    }
  ],
  "meta": {
    "total": 50,
    "page": 1,
    "limit": 10
  }
}
```

### Criar Investimento

```http
POST /api/v1/investments
Authorization: Bearer {token}
Content-Type: application/json

{
  "startup_id": "uuid",
  "amount": 100000,
  "terms": "Investment terms"
}
```

**Resposta:**

```json
{
  "id": "uuid",
  "amount": 100000,
  "status": "pending",
  "startup": {
    "id": "uuid",
    "name": "Startup Name"
  },
  "investor": {
    "id": "uuid",
    "name": "Investor Name"
  },
  "created_at": "2024-03-14T12:00:00Z"
}
```

## 🔔 Notificações

### Listar Notificações

```http
GET /api/v1/notifications
Authorization: Bearer {token}
```

**Parâmetros de Query:**
- `read` (opcional): Filtro por lida/não lida
- `type` (opcional): Filtro por tipo

**Resposta:**

```json
{
  "data": [
    {
      "id": "uuid",
      "type": "investment_created",
      "message": "New investment of $100,000",
      "read": false,
      "created_at": "2024-03-14T12:00:00Z"
    }
  ],
  "meta": {
    "total": 20,
    "page": 1,
    "limit": 10
  }
}
```

### Marcar como Lida

```http
PATCH /api/v1/notifications/{id}/read
Authorization: Bearer {token}
```

**Resposta:**

```json
{
  "id": "uuid",
  "read": true,
  "updated_at": "2024-03-14T12:00:00Z"
}
```

## 🔍 Busca

### Buscar Startups

```http
GET /api/v1/search/startups
Authorization: Bearer {token}
```

**Parâmetros de Query:**
- `q`: Termo de busca
- `sector` (opcional): Filtro por setor
- `status` (opcional): Filtro por status

**Resposta:**

```json
{
  "data": [
    {
      "id": "uuid",
      "name": "Startup Name",
      "description": "Description",
      "sector": "technology",
      "status": "active",
      "score": 0.95
    }
  ],
  "meta": {
    "total": 10,
    "took": 50
  }
}
```

## 📊 Analytics

### Métricas de Startups

```http
GET /api/v1/analytics/startups
Authorization: Bearer {token}
```

**Parâmetros de Query:**
- `period` (opcional): Período (day, week, month, year)
- `sector` (opcional): Filtro por setor

**Resposta:**

```json
{
  "total_startups": 100,
  "active_startups": 80,
  "total_investment": 10000000,
  "average_investment": 100000,
  "sector_distribution": {
    "technology": 40,
    "healthcare": 30,
    "finance": 20,
    "other": 10
  },
  "growth_rate": 0.15
}
```

## ⚠️ Códigos de Erro

| Código | Descrição |
|--------|-----------|
| 400 | Bad Request |
| 401 | Unauthorized |
| 403 | Forbidden |
| 404 | Not Found |
| 422 | Unprocessable Entity |
| 429 | Too Many Requests |
| 500 | Internal Server Error |

## 📚 Recursos Adicionais

- [Documentação do Backend](BACKEND.md)
- [Guia de Contribuição](CONTRIBUTING.md)
- [Política de Segurança](SECURITY.md)
- [Suporte](mailto:api-support@ascendhub.com) 