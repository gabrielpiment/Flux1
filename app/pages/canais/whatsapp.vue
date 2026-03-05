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
        title: 'API Cloud Oficial (WABA)',
        description: 'Utilize a infraestrutura oficial da Meta para garantir máxima estabilidade, sem riscos de banimento e com suporte a grandes volumes.',
        items: [
          'Selo de verificação oficial',
          'Webhooks de entrega e leitura',
          'Escalabilidade Tier 3 (Ilimitado)'
        ],
        visualLabel: 'Official API'
      },
      {
        title: 'Campanhas de Alta Performance',
        description: 'Envie mensagens em massa de forma segmentada e acompanhe os cliques em tempo real no seu dashboard.',
        items: [
          'Botões interativos e listas',
          'Modelos de mensagem aprovados pela Meta',
          'Rastreamento de cliques em CTAs'
        ],
        visualLabel: 'Marketing Blasts'
      },
      {
        title: 'Atendimento Multi-Agente',
        description: 'Um único número para centenas de atendentes trabalharem de forma organizada e colaborativa.',
        items: [
          'Distribuição automática de chats',
          'Notas internas para supervisores',
          'Relatórios de produtividade por atendente'
        ],
        visualLabel: 'Agent Workspace'
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
