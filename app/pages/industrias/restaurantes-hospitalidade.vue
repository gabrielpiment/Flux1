<template>
  <ProductTemplate
    eyebrow="Setor"
    :title-lines="['Restaurantes', 'E Hospitalidade']"
    description="Otimize reservas, pedidos e feedback. Deixe a IA cuidar da logística do atendimento enquanto você foca na qualidade do serviço."
    :features="[
      { icon: '🍽️', title: 'Reserva de Mesas', description: 'Confirmação e gestão de fila de espera automatizada via chat.' },
      { icon: '📜', title: 'Cardápio Digital', description: 'Acesso rápido a menus interativos e recebimento de pedidos diretamente pelo canal oficial.' },
      { icon: '⭐', title: 'Feedback em Tempo Real', description: 'Colete avaliações dos clientes logo após a experiência e gere insights.' }
    ]"
    :details="[
      {
        title: 'Delivery e Pedidos via Chat',
        description: 'Elimine taxas exageradas de marketplaces. Tenha seu próprio canal de vendas direto no WhatsApp com pagamento integrado.',
        items: [
          'Cardápio digital interativo',
          'Impressão automática na cozinha',
          'Atualização de status de preparo'
        ],
        visualLabel: 'Direct Ordering'
      },
      {
        title: 'Reservas e Fila de Espera',
        description: 'Otimize a ocupação das suas mesas com um sistema de reservas inteligente que reduz o no-show.',
        items: [
          'Lembretes de reserva proativos',
          'Fila de espera digital via QR Code',
          'Gestão de ocupação em tempo real'
        ],
        visualLabel: 'Table Management'
      },
      {
        title: 'Feedback e Reputação',
        description: 'Colete avaliações dos clientes no calor do momento e melhore sua nota no Google e TripAdvisor.',
        items: [
          'Pesquisa NPS após o pagamento',
          'Alertas de baixa pontuação (Crise)',
          'Automação de fidelidade (Cashback)'
        ],
        visualLabel: 'Reputation AI'
      }
    ]"
  />
</template>

<script setup lang="ts">
import ProductTemplate from '~/components/ProductTemplate.vue'

useHead({
  title: 'Restaurantes & Hospitalidade | Flux - Atendimento Gastronômico',
  meta: [
    { name: 'description', content: 'Melhore a experiência do seu restaurante com a Flux. Gestão de reservas, pedidos e fidelização via IA.' }
  ]
})
</script>
