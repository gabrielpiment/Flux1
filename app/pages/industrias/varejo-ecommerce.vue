<template>
  <ProductTemplate eyebrow="E-commerce" :title-lines="['Venda 24/7', 'No Varejo Digital']"
    description="Aumente seu ROI com automações de recuperação de carrinho, sugestões personalizadas de produtos e rastreio de pedidos via WhatsApp."
    :features="[
      { icon: '🛒', title: 'Recuperação de Carrinho', description: 'Disparos automáticos quando o cliente abandona a compra, com oferta de cupons dinâmicos.' },
      { icon: '📦', title: 'Rastreio Logístico', description: 'Mantenha o cliente informado sobre cada etapa da entrega sem sobrecarregar o suporte.' },
      { icon: '🔮', title: 'Upsell Inteligente', description: 'IA que sugere produtos complementares baseada no histórico de navegação e compra.' }
    ]" :details="[
      {
        title: 'Social Commerce de Elite',
        description: 'Integre seu catálogo Shopify, Nuvemshop ou VTEX diretamente na Flux e venda por onde o cliente preferir.',
        items: [
          'Sincronização de estoque real-time',
          'Checkout transparente via chat',
          'Gestão de trocas e devoluções'
        ],
        visualLabel: 'Retail Workflow'
      },
      {
        title: 'Logística Proativa via IA',
        description: 'Mantenha o cliente informado sobre cada etapa da entrega sem sobrecarregar sua equipe de suporte.',
        items: [
          'Rastreio de pedidos automático',
          'Notificação de atrasos via WhatsApp',
          'Proof of Delivery digital'
        ],
        visualLabel: 'Logistics Tracker'
      },
      {
        title: 'Recuperação de Carrinho 2.0',
        description: 'Nossa IA entra em contato no momento certo com cupons dinâmicos para garantir que a venda aconteça.',
        items: [
          'Disparos baseados em valor do carrinho',
          'Assistência consultiva p/ dúvidas',
          'Análise de causa de abandono'
        ],
        visualLabel: 'Cart Recovery'
      }
    ]" />
</template>

<script setup lang="ts">
import ProductTemplate from '~/components/ProductTemplate.vue'

useHead({
  title: 'Varejo & E-commerce | Flux - Soluções para Vender Mais',
  meta: [
    { name: 'description', content: 'Escale seu e-commerce com a Flux. Recuperação de carrinho, rastreio e vendas assistidas por IA.' }
  ]
})
</script>
