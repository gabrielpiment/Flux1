# FluxWeb - Landing Page

Landing page para a extensão FluxWeb WhatsApp com formulário de cadastro integrado.

## 🚀 Deploy na Vercel

### Opção 1: Deploy via CLI

1. Instale a Vercel CLI:
```bash
npm i -g vercel
```

2. Faça login na Vercel:
```bash
vercel login
```

3. No diretório do projeto, execute:
```bash
vercel
```

4. Siga as instruções:
   - Set up and deploy? **Y**
   - Which scope? Selecione sua conta
   - Link to existing project? **N**
   - Project name: **fluxweb** (ou o nome desejado)
   - In which directory is your code located? **./**

### Opção 2: Deploy via GitHub

1. Crie um repositório no GitHub
2. Faça push dos arquivos:
```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/SEU_USUARIO/fluxweb.git
git push -u origin main
```

3. Acesse [vercel.com](https://vercel.com)
4. Clique em "New Project"
5. Importe o repositório do GitHub
6. Configure:
   - Framework Preset: **Other**
   - Root Directory: **./"
   - Build Command: deixe vazio
   - Output Directory: **./"

## 📁 Estrutura do Projeto

```
fluxweb/
├── index.html          # Página principal
├── cadastro.html       # Página de cadastro
├── styles.css          # Estilos CSS
├── vercel.json         # Configuração Vercel
├── package.json        # Configuração do projeto
└── README.md           # Este arquivo
```

## ✨ Funcionalidades

- **Landing Page Responsiva**: Design moderno e adaptável
- **Carousel de Depoimentos**: 14 testimoniais com navegação manual
- **Formulário de Cadastro**: Integrado com webhook n8n
- **Máscaras de Input**: CNPJ e telefone formatados automaticamente
- **Navegação Suave**: Links internos e experiência fluida

## 🔗 Webhook Integration

O formulário está configurado para enviar dados via GET para:
```
https://webhook.elevenapp.com.br/webhook/584276f7-4469-40f9-a674-22251138fe9a
```

## 🛠️ Desenvolvimento Local

```bash
# Servidor Python
python -m http.server 8000

# Ou servidor Node.js
npx serve .
```

Acesse: http://localhost:8000

## 📱 Responsividade

O site é totalmente responsivo e otimizado para:
- Desktop (1200px+)
- Tablet (768px - 1199px)
- Mobile (até 767px)

---

**FluxWeb Team** - Transformando a comunicação no WhatsApp