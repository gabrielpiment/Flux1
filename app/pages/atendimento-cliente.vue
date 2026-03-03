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
        title: 'Resolução no Primeiro Contato',
        description: 'Reduza o volume de tickets repetitivos e foque na estratégia do sucesso do cliente.',
        items: [
          'Base de conhecimento dinâmica',
          'Automação de processos recorrentes',
          'Relatórios de gaps de atendimento'
        ],
        visualLabel: 'Support Metrics'
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
