<template>
  <ProductTemplate
    eyebrow="Agentes de IA"
    :title-lines="['Atendimento Enterprise', 'Humano e Escalável']"
    description="Implemente agentes de inteligência artificial que entendem o contexto, aprendem com sua base de dados e resolvem problemas complexos em segundos."
    :features="[
      { icon: '🧠', title: 'Compreensão de Contexto', description: 'Nossa IA entende intenções, não apenas palavras-chave, proporcionando diálogos fluidos.' },
      { icon: '📚', title: 'Base de Conhecimento', description: 'Importe PDFs, URLs e manuais para que sua IA responda exatamente como seu time.' },
      { icon: '⚡', title: 'Resolução Instantânea', description: 'Zere o tempo de espera. Atenda milhares de clientes simultaneamente sem perder a qualidade.' }
    ]"
    :details="[
      {
        title: 'IA Treinada no Seu Negócio',
        description: 'Diferente de chatbots genéricos, os Agentes Flux são moldados pela cultura e dados da sua empresa.',
        items: [
          'Treinamento em múltiplos idiomas',
          'Tom de voz personalizável',
          'Proteção de dados e privacidade'
        ],
        visualLabel: 'Training Preview'
      },
      {
        title: 'Transição Fluida para Humano',
        description: 'Sempre que a complexidade exigir, a IA transfere o lead para um humano com todo o histórico e resumo da conversa.',
        items: [
          'Resumos automáticos de atendimento',
          'Análise de sentimento em tempo real',
          'Distribuição inteligente de tickets'
        ],
        visualLabel: 'Handoff Workflow'
      }
    ]"
  />
</template>

<script setup lang="ts">
import ProductTemplate from '~/components/ProductTemplate.vue'

useHead({
  title: 'Agentes de IA | Flux - A Revolução do Atendimento',
  meta: [
    { name: 'description', content: 'Automatize seu atendimento com Agentes de IA que realmente entendem seus clientes.' }
  ]
})
</script>
