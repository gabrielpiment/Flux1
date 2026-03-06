<template>
  <ProductTemplate eyebrow="E-commerce" :title-lines="['Venda 24/7', 'No Varejo Digital']"
    description="Aumente seu ROI com automações de recuperação de carrinho, sugestões personalizadas de produtos e rastreio de pedidos via WhatsApp."
    :features="[
      { icon: '💬', title: 'Venda Consultiva', description: 'Dê suporte personalizado para transformar dúvidas em carrinhos fechados no WhatsApp.' },
      { icon: '📦', title: 'Status de Pedido', description: 'Integre via API para informar automaticamente o status da entrega ao seu cliente.' },
      { icon: '🎯', title: 'Qualificação de Leads', description: 'Identifique o interesse do cliente antes de direcionar para o time de vendas.' }
    ]" :details="[
      {
        title: 'Agilidade no Atendimento',
        description: 'Reduza o tempo de espera e evite que seu cliente procure a concorrência por falta de resposta rápida.',
        items: [
          'Respostas rápidas para dúvidas frequentes',
          'Distribuição inteligente de leads comerciais',
          'Histórico de navegação integrado via Webhook'
        ],
        visualLabel: 'Sales Speed'
      },
      {
        title: 'Pós-Venda Eficiente',
        description: 'Transforme a experiência de entrega em um diferencial competitivo para sua loja.',
        items: [
          'Consulta de pedidos simplificada',
          'Centralização de solicitações de suporte',
          'Pesquisas de satisfação pós-atendimento'
        ],
        visualLabel: 'Customer Success'
      },
      {
        title: 'Triagem de Interesse',
        description: 'Entenda o que seu cliente procura antes mesmo de iniciar o atendimento humano.',
        items: [
          'Perguntas de qualificação automáticas',
          'Segmentação de leads por categoria',
          'Fluxos de nutrição via WhatsApp'
        ],
        visualLabel: 'Lead Engine'
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
