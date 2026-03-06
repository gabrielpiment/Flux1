<template>
  <ProductTemplate eyebrow="Suporte" :title-lines="['Atendimento de Elite', 'Eficácia em cada Ticket']"
    description="Ofereça um suporte que encanta. Alie a agilidade da automação ao toque humano indispensável para resolver problemas complexos."
    :features="[
      { icon: '⭐', title: 'CSAT & NPS Nativo', description: 'Meça a satisfação do cliente automaticamente após cada interação.' },
      { icon: '📈', title: 'SLA Dashboard', description: 'Garanta que nenhum cliente espere além do tempo estabelecido com alertas de atraso.' }
    ]" :details="[
      {
        title: 'Orquestração de Filas e Fluxos',
        description: 'Gerencie o volume de atendimentos com inteligência, garantiendo que cada cliente seja direcionado ao especialista correto.',
        items: [
          'Distribuição automática por carga de trabalho',
          'Níveis de prioridade baseados no perfil do cliente',
          'Transmissão suave entre canais sem perda de contexto'
        ],
        visualLabel: 'Queue Management'
      },
      {
        title: 'Satisfação e Feedback Contínuo',
        description: 'Transforme cada atendimento em um insight valioso. Colete feedbacks detalhados e identifique promotores da sua marca.',
        items: [
          'Pesquisas de CSAT e NPS integradas',
          'Monitoramento de tempo de resposta por atendente',
          'Relatórios de evolução da qualidade do suporte'
        ],
        visualLabel: 'Experience Metrics'
      },
      {
        title: 'Colaboração Humana em Escala',
        description: 'Dê ao seu time as ferramentas para trabalharem juntos. Resolva problemas complexos com o apoio de toda a organização.',
        items: [
          'Notas internas privadas para especialistas',
          'Histórico completo de interações passadas',
          'Transferência de chats com resumo contextualizado'
        ],
        visualLabel: 'Collaborative Support'
      }
    ]" />
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
