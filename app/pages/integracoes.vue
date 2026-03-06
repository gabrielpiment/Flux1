<template>
  <ProductTemplate eyebrow="Ecossistema" :title-lines="['Conectividade Total', 'Sem Silos de Dados']"
    description="Integre a Flux nativamente aos CRMs, ERPs e meios de pagamento que seu negócio já utiliza. A informação flui livremente para uma visão 360° real."
    :features="[
      { icon: '🔌', title: 'Webhooks & API REST', description: 'Conectividade ilimitada via Webhooks ou nossa API Enterprise documentada para desenvolvedores.' },
      { icon: '🏢', title: 'CRMs e ERPs', description: 'Sincronize contatos e vendas com Salesforce, HubSpot, RD Station, SAP e centenas de outros.' },
      { icon: '🔄', title: 'Fluxos Transacionais', description: 'Gatilhos baseados em eventos reais do seu negócio, como abandono de carrinho ou confirmação de pagamento.' }
    ]" :details="[
      {
        title: 'Hub Central de Comunicação',
        description: 'A Flux atua como a camada inteligente que une todas as suas ferramentas de negócio em uma interface de conversação única.',
        items: [
          'Sincronização bidirecional de dados de clientes',
          'Atualização de status de pedidos em tempo real',
          'Enriquecimento de perfil com dados de ferramentas externas'
        ],
        visualLabel: 'Connected Ecosystem'
      },
      {
        title: 'API Enterprise Escalável',
        description: 'Construída para alta disponibilidade, nossa API permite que grandes organizações criem experiências personalizadas sobre a infraestrutura da Flux.',
        items: [
          'Documentação Swagger completa e atualizada',
          'Autenticação segura via OAuth 2.0 e Bearer tokens',
          'Endpoints otimizados para alto volume de requisições'
        ],
        visualLabel: 'Dev Experience'
      },
      {
        title: 'Automação de Ponta a Ponta',
        description: 'Vá além do chat básico. Integre a lógica do seu negócio diretamente nos fluxos de atendimento humano e automático.',
        items: [
          'Validação de dados sensíveis via API segura',
          'Integração nativa com gateways de pagamento (Stripe, Pagar.me)',
          'Disparos automáticos baseados em comportamento no seu site/app'
        ],
        visualLabel: 'Business Logic'
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
