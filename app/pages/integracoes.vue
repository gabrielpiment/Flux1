<template>
  <ProductTemplate
    eyebrow="Ecossistema"
    :title-lines="['Conecte a Flux', 'Com suas ferramentas']"
    description="Integre nativamente com os CRMs, ERPs e ferramentas que você já usa. Dados fluindo sem atrito para uma visão 360 do seu negócio."
    :features="[
      { icon: '🔌', title: 'Webhooks & API', description: 'Integre qualquer sistema via Webhooks ou utilize nossa API Enterprise documentada.' },
      { icon: '🧱', title: 'Integrações Nativas', description: 'Conecte com Salesforce, HubSpot, RD Station, Shopify e centenas de outros.' },
      { icon: '🔄', title: 'Sincronização 2-Way', description: 'Mantenha dados atualizados em tempo real em todas as suas plataformas.' }
    ]"
    :details="[
      {
        title: 'Automatize Fora da Caixa',
        description: 'Nossa camada de integração permite que ações na Flux disparem fluxos complexos em outros softwares.',
        items: [
          'Automação de faturamento',
          'Atualização de status de entrega',
          'Enriquecimento de leads automático'
        ],
        visualLabel: 'Integration Flow'
      }
    ]"
  />
</template>

<script setup lang="ts">
import ProductTemplate from '~/components/ProductTemplate.vue'

useHead({
  title: 'Integrações | Flux - Conectividade Sem Limites',
  meta: [
    { name: 'description', content: 'Explore o ecossistema de integrações da Flux. Conecte sua comunicação com as ferramentas que você já utiliza.' }
  ]
})
</script>
