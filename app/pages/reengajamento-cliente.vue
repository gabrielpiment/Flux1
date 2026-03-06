<template>
  <ProductTemplate eyebrow="Retenção" :title-lines="['Reengaje seus', 'Clientes em Escala']"
    description="Não deixe seus leads esfriarem. Use automações inteligentes para reativar conversas e transformar clientes inativos em compradores recorrentes."
    :features="[
      { icon: '🔄', title: 'Follow-ups Automáticos', description: 'Sequências de mensagens personalizadas que mantêm sua marca no topo da mente.' },
      { icon: '🎯', title: 'Segmentação RFM', description: 'Identifique automaticamente clientes que não compram há tempos e envie ofertas sob medida.' },
      { icon: '⚡', title: 'Alertas de Abandono', description: 'Notifique sua equipe de vendas instantaneamente quando um cliente valioso interagir novamente.' }
    ]" :details="[
      {
        title: 'Segmentação RFM Preditiva',
        description: 'Utilize a ferramenta para analisar Recência, Frequência e Valor Monetário, disparando campanhas antes mesmo do cliente entrar em churn.',
        items: [
          'Identificação de clientes em risco por etiquetas',
          'Ofertas personalizadas baseadas na segmentação definida',
          'Previsão de próxima compra por usuário com lembretes de reengajamento'
        ],
        visualLabel: 'Predictive Analytics'
      },
      {
        title: 'Fidelização Automatizada',
        description: 'Transforme compradores ocasionais em fãs da marca através de jornadas de retenção inteligentes e humanizadas.',
        items: [
          'Parabéns e descontos de aniversário',
          'Lembretes de recompra'
        ],
        visualLabel: 'Loyalty Engine'
      },
      {
        title: 'Omnichannel Retenção',
        description: 'Mantenha-se presente na jornada do cliente em múltiplos pontos de contato.',
        items: [
          'Campanhas de reativação via listas de contatos',
          'Lembretes de recorrência ou suporte preventivo',
          'Disparos de novidades para clientes segmentados'
        ],
        visualLabel: 'Retention Flow'
      }
    ]" />
</template>

<script setup lang="ts">
import ProductTemplate from '~/components/ProductTemplate.vue'

useHead({
  title: 'Reengajamento do Cliente | Flux - Marketing de Retenção',
  meta: [
    { name: 'description', content: 'Aumente o LTV dos seus clientes com as ferramentas de reengajamento da Flux. Automação de follow-ups e campanhas de reativação.' }
  ]
})
</script>
