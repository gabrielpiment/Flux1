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
        title: 'Ecossistema Conectado',
        description: 'Mantenha sua stack de ferramentas atualizada. A Flux atua como o hub central da sua comunicação com o cliente.',
        items: [
          'Sincronização com Shopify e VTEX',
          'Atualização automática de CRM (Salesforce/HubSpot)',
          'Gatilhos para disparos em ERPs'
        ],
        visualLabel: 'Partners Ecosystem'
      },
      {
        title: 'API Enterprise Documentada',
        description: 'Para empresas com necessidades personalizadas, oferecemos uma API REST robusta e webhooks escaláveis.',
        items: [
          'Documentação Swagger completa',
          'Segurança via Token/OAuth 2.0',
          'Endpoints de alta disponibilidade'
        ],
        visualLabel: 'Dev Portal'
      },
      {
        title: 'Automação Full-Stack',
        description: 'Vá além do chat. Conecte dados de transações reais aos seus fluxos de atendimento automático.',
        items: [
          'Enriquecimento de dados via webhook',
          'Validação de CPF/CNPJ em tempo real',
          'Integração com gateways de pagamento'
        ],
        visualLabel: 'Fullstack Integrations'
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
