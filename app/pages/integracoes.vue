<template>
  <ProductTemplate eyebrow="Ecossistema" :title-lines="['Conectividade Total', 'Sem Silos de Dados']"
    description="Integre a Flux nativamente aos CRMs, ERPs e meios de pagamento que seu negócio já utiliza. A informação flui livremente para uma visão 360° real."
    :features="[
      { icon: '🔌', title: 'Webhooks & API REST', description: 'Conectividade ilimitada para enviar e receber dados do seu sistema via API.' },
      { icon: '🏢', title: 'Conectividade Custom', description: 'Integre com seus sistemas internos, CRMs ou ERPs via requisições HTTP.' },
      { icon: '🔄', title: 'Sincronização de Dados', description: 'Mantenha os cadastros de clientes atualizados entre a Flux e suas outras ferramentas.' }
    ]" :details="[
      {
        title: 'Hub de Automação',
        description: 'A Flux atua como uma ponte entre seus canais de atendimento e o banco de dados da sua empresa.',
        items: [
          'Disparo de webhooks em eventos específicos',
          'Consulta de informações externas via API no fluxo',
          'Enriquecimento de perfil com metadados'
        ],
        visualLabel: 'Automation Hub'
      },
      {
        title: 'API de Alta Disponibilidade',
        description: 'Documentação robusta para que seus desenvolvedores criem integrações profundas com nossa infraestrutura.',
        items: [
          'Documentação Swagger completa',
          'Segurança via Token de Acesso',
          'Limites de requisições de classe Enterprise'
        ],
        visualLabel: 'Developer Portal'
      },
      {
        title: 'Lógica Corporativa',
        description: 'Personalize o fluxo de atendimento de acordo com as regras de negócio da sua organização.',
        items: [
          'Validação de dados (CPF, Pedido) via API externa',
          'Integração com CRMs do mercado via Webhook',
          'Atualização de status de atendimento em sistemas externos'
        ],
        visualLabel: 'Business Rules'
      }
    ]" />
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
