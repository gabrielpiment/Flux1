<template>
  <ProductTemplate
    eyebrow="Canal Oficial"
    :title-lines="['Onde seus clientes', 'Já estão conversando']"
    description="Potencialize seu WhatsApp Business com IA Enterprise, múltiplos atendentes e automações complexas."
    :features="[
      { icon: '✅', title: 'API Oficial (BSP)', description: 'Segurança e estabilidade total através da API oficial da Meta.' },
      { icon: '📢', title: 'Mensagens em Massa', description: 'Envie campanhas segmentadas com alta entregabilidade e conformidade.' },
      { icon: '🤖', title: 'Chatbots com IA', description: 'Fluxos inteligentes que resolvem demandas reais sem intervenção humana.' }
    ]"
    :details="[
      {
        title: 'Escalabilidade sem Limites',
        description: 'Tenha centenas de atendentes em um único número oficial de WhatsApp.',
        items: [
          'Transferência interna de chats',
          'Resumo de conversas por IA',
          'Botões interativos e listas'
        ],
        visualLabel: 'WhatsApp Business'
      }
    ]"
  />
</template>

<script setup lang="ts">
import ProductTemplate from '~/components/ProductTemplate.vue'

useHead({
  title: 'WhatsApp Marketing & Suporte | Flux - Canal Oficial',
  meta: [
    { name: 'description', content: 'Escalone seu atendimento no WhatsApp com a API oficial e automações inteligentes da Flux.' }
  ]
})
</script>
