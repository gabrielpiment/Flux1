<template>
  <ProductTemplate
    eyebrow="Suporte"
    :title-lines="['Atendimento de Elite', 'Sem filas de espera']"
    description="Ofereça um suporte que encanta. Resolva problemas complexos com IA e mantenha o toque humano onde ele é indispensável."
    :features="[
      { icon: '⭐', title: 'CSAT & NPS Nativo', description: 'Meça a satisfação do cliente automaticamente após cada interação.' },
      { icon: '🦾', title: 'Sugestões de Resposta', description: 'A IA sugere a melhor solução baseada em tickets anteriores resolvidos.' },
      { icon: '📈', title: 'SLA Dashboard', description: 'Garanta que nenhum cliente espere além do tempo estabelecido.' }
    ]"
    :details="[
      {
        title: 'FCR: Resolução no Primeiro Contato',
        description: 'Aumente sua taxa de resolução sem intervenção humana. Nossa IA resolve dúvidas complexas buscando dados na sua base de conhecimento.',
        items: [
          'Respostas contextualizadas e precisas',
          'Busca em documentos e manuais internos',
          'Redução de tickets repetitivos em até 70%'
        ],
        visualLabel: 'Resolution Engine'
      },
      {
        title: 'Satisfação sob Controle',
        description: 'Meça o sucesso de cada interação automaticamente. Colete feedback e identifique promotores da sua marca em tempo real.',
        items: [
          'Pesquisas de CSAT e NPS nativas',
          'Análise de sentimento pós-atendimento',
          'Relatórios de evolução do suporte'
        ],
        visualLabel: 'Experience Metrics'
      },
      {
        title: 'Omnichannel Verdadeiro',
        description: 'Dê ao seu cliente a liberdade de escolher o canal, sem que seu time perca o contexto da conversa.',
        items: [
          'Histórico unificado entre todos os canais',
          'Transição fluida entre IA e suporte humano',
          'Gestão de filas por nível de urgência'
        ],
        visualLabel: 'Omnichannel View'
      }
    ]"
  />
</template>

<script setup lang="ts">
import ProductTemplate from '~/components/ProductTemplate.vue'

useHead({
  title: 'Atendimento ao Cliente | Flux - Suporte Inteligente',
  meta: [
    { name: 'description', content: 'Revolucione seu SAC. Use a Flux para oferecer suporte omnichannel rápido, preciso e humanizado.' }
  ]
})
</script>
