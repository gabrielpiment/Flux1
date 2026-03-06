<template>
  <ProductTemplate eyebrow="Canais" :title-lines="['Todos os Canais', 'Uma Só Experiência']"
    description="Centralize WhatsApp, Instagram, Messenger, Email, Chat e muito mais em uma interface única. Seja onipresente sem a complexidade."
    :features="[
      { icon: '🔗', title: 'Omnichannel Integrado', description: 'WhatsApp, Instagram, Facebook, E-mail e Chat Web unificados em uma única tela.' },
      { icon: '🛒', title: 'Marketplaces em Breve', description: 'Integrações com OLX e Mercado Livre estão em estágio avançado de desenvolvimento.' },
      { icon: '🖥️', title: 'Inbox Centralizado', description: 'Sua equipe trabalha em apenas uma interface, independentemente da origem do contato.' }
    ]" :details="[
      {
        title: 'Histórico Unificado',
        description: 'Mantenha o contexto da conversa mesmo que o cliente alterne entre seus canais oficiais.',
        items: [
          'Linha do tempo consolidada por cliente',
          'Identidade única independente da plataforma',
          'Transferência entre atendentes com contexto'
        ],
        visualLabel: 'Unified History'
      },
      {
        title: 'Performance por Canal',
        description: 'Entenda quais pontos de contato são mais eficientes para sua estratégia comercial.',
        items: [
          'Volume de mensagens por plataforma',
          'Tempo médio de resposta por canal',
          'Taxa de resolução por origem'
        ],
        visualLabel: 'Channel Insights'
      },
      {
        title: 'Expansão Contínua',
        description: 'Estamos constantemente homologando novos canais para garantir que sua marca esteja onde o cliente está.',
        items: [
          'Homologação de APIs oficiais',
          'Segurança e conformidade em cada canal',
          'Atualizações de recursos sem custo extra'
        ],
        visualLabel: 'Roadmap'
      }
    ]" />
</template>

<script setup lang="ts">
import ProductTemplate from '~/components/ProductTemplate.vue'

useHead({
  title: 'Todos os Canais | Flux - Onipresença Inteligente',
  meta: [
    { name: 'description', content: 'Gerencie todos os canais de comunicação em um só lugar. WhatsApp, Redes Sociais, Email e Chat com a Flux.' }
  ]
})
</script>
