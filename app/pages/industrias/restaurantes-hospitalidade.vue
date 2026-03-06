<template>
  <ProductTemplate eyebrow="Setor" :title-lines="['Restaurantes', 'E Hospitalidade']"
    description="Otimize reservas, pedidos e feedback. Deixe a IA cuidar da logística do atendimento enquanto você foca na qualidade do serviço."
    :features="[
      { icon: '📅', title: 'Reservas de Mesa', description: 'Automatize o agendamento de mesas e evite filas de espera pelo WhatsApp.' },
      { icon: '📍', title: 'Informações Locais', description: 'Responda instantaneamente sobre horários, localização e opções do menu.' },
      { icon: '⭐', title: 'Feedback de Clientes', description: 'Colete avaliações após a visita para melhorar constantemente seu serviço.' }
    ]" :details="[
      {
        title: 'Agendamento Prático',
        description: 'Facilite a vida do seu cliente permitindo que ele reserve seu lugar em segundos, sem precisar ligar.',
        items: [
          'Confirmação de reserva automática',
          'Lembretes de horário via WhatsApp',
          'Gestão de cancelamentos simplificada'
        ],
        visualLabel: 'Booking Helper'
      },
      {
        title: 'Atendimento ao Visitante',
        description: 'Tire dúvidas frequentes sobre o estabelecimento de forma automatizada e eficiente.',
        items: [
          'Respostas sobre horários e feriados',
          'Localização e direções integradas',
          'Dúvidas sobre o menu e ingredientes'
        ],
        visualLabel: 'Info Desk'
      },
      {
        title: 'Relacionamento Pós-Visita',
        description: 'Mantenha seus clientes engajados e retorne mais vezes com uma comunicação próxima.',
        items: [
          'Pesquisas de satisfação rápidas',
          'Envio de novidades e eventos',
          'Canal direto para sugestões'
        ],
        visualLabel: 'Engagement Hub'
      }
    ]" />
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
