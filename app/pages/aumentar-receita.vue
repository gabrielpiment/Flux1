<template>
  <ProductTemplate
    eyebrow="Crescimento"
    :title-lines="['Aumente sua Receita', 'Com Assistência de IA']"
    description="Transforme cada conversa em uma oportunidade de venda. Nossa IA identifica intenções de compra e sugere o produto perfeito no momento certo."
    :features="[
      { icon: '💰', title: 'Upsell & Cross-sell', description: 'Sugestões automatizadas de produtos complementares durante e após o atendimento.' },
      { icon: '🚨', title: 'Recuperação de Vendas', description: 'Recupere carrinhos abandonados e boletos vencidos com fluxos de conversão via WhatsApp.' },
      { icon: '📊', title: 'Atribuição de Vendas', description: 'Saiba exatamente quais canais e automações estão gerando mais lucro para seu negócio.' }
    ]"
    :details="[
      {
        title: 'Cross-Sell & Upsell Automático',
        description: 'A Flux identifica o interesse do cliente durante a conversa e sugere produtos complementares que aumentam o ticket médio.',
        items: [
          'Recomendações baseadas em histórico de compra',
          'Ofertas por tempo limitado (Scarcity)',
          'Vendas guiadas por IA consultiva'
        ],
        visualLabel: 'Revenue Upsell'
      },
      {
        title: 'Checkout Seguro no Chat',
        description: 'Reduza a jornada de compra permitindo que o cliente finalize o pedido sem sair da conversa oficial.',
        items: [
          'Integração com Stripe, Pagar.me e outros',
          'Geração de Pix e boletos automáticos',
          'Confirmação de pagamento em tempo real'
        ],
        visualLabel: 'Seamless Checkout'
      },
      {
        title: 'Recuperação de Vendas',
        description: 'Nossa IA entra em cena nos momentos críticos, recuperando vendas que seriam perdidas por falta de atenção humana.',
        items: [
          'Abandono de carrinho automático',
          'Recuperação de boleto não pago',
          'Acompanhamento de abandono de checkout'
        ],
        visualLabel: 'Sales Recovery'
      }
    ]"
  />
</template>

<script setup lang="ts">
import ProductTemplate from '~/components/ProductTemplate.vue'

useHead({
  title: 'Aumentar Receita | Flux - Vendas Impulsionadas por IA',
  meta: [
    { name: 'description', content: 'Potencialize seus lucros com a Flux. IA focada em vendas, recuperação de carrinhos e estratégias de upsell.' }
  ]
})
</script>
