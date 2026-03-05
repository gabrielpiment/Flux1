<template>
  <ProductTemplate
    eyebrow="Canais"
    :title-lines="['Todos os Canais', 'Uma Só Experiência']"
    description="Centralize WhatsApp, Instagram, Messenger, Email, Chat e muito mais em uma interface única. Seja onipresente sem a complexidade."
    :features="[
      { icon: '🔗', title: 'Omnichannel Real', description: 'O cliente começa no Instagram e termina no WhatsApp sem perder o contexto.' },
      { icon: '📱', title: 'Novos Canais Rápidos', description: 'Integre Telegram, SMS e Google Business Messages com poucos cliques.' },
      { icon: '🖥️', title: 'Inbox Centralizado', description: 'Sua equipe trabalha em apenas uma tela, independentemente do canal de origem.' }
    ]"
    :details="[
      {
        title: 'Sincronização Total de Contexto',
        description: 'Nunca pergunte a mesma coisa duas vezes. A Flux mantém o histórico unificado independente de onde o cliente chama.',
        items: [
          'Identidade única do cliente (Unified ID)',
          'Timeline cronológica multi-canal',
          'Notas compartilhadas entre equipes'
        ],
        visualLabel: 'Unified Context'
      },
      {
        title: 'Omnichannel Analytics',
        description: 'Compare a performance de cada canal em um único dashboard estratégico e realoque seu time onde há mais demanda.',
        items: [
          'Mapa de calor por canal de entrada',
          'Velocidade de resolução comparativa',
          'Análise de sentimento por plataforma'
        ],
        visualLabel: 'Strategic BI'
      },
      {
        title: 'Novos Canais em 1-Clique',
        description: 'Esteja pronto para o futuro. Ative novos canais como Telegram, SMS, Google e Apple Business sem precisar de código.',
        items: [
          'Integrações no-code nativas',
          'Padronização de experiência de marca',
          'Gestão de custos centralizada'
        ],
        visualLabel: 'Scale Engine'
      }
    ]"
  />
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
