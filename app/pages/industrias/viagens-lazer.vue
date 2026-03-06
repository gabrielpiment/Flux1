<template>
  <ProductTemplate eyebrow="Setor" :title-lines="['Viagens e Lazer', 'Experiências Fluídas']"
    description="Do check-in à recomendação local. Automatize o suporte em viagens e garanta que o único foco do seu cliente seja aproveitar o destino."
    :features="[
      { icon: '✈️', title: 'Suporte ao Viajante', description: 'Atendimento instantâneo para dúvidas sobre voos, vouchers e roteiros 24/7.' },
      { icon: '🏨', title: 'Gestão de Reservas', description: 'Confirmação automática de agendamentos e envio de vouchers via WhatsApp.' },
      { icon: '🗺️', title: 'Check-in Ágil', description: 'Envio de lembretes e links de check-in para melhorar a experiência do cliente.' }
    ]" :details="[
      {
        title: 'Experiência do Passageiro',
        description: 'Garanta que seu cliente tenha todas as informações na palma da mão, onde quer que ele esteja.',
        items: [
          'Envio automático de bilhetes e reservas',
          'Suporte multicanal para emergências',
          'Atendimento proativo pré-embarque'
        ],
        visualLabel: 'Guest Journey'
      },
      {
        title: 'Automação de Reservas',
        description: 'Reduza processos manuais integrando sua central de atendimento aos sistemas de reserva.',
        items: [
          'Sincronização de status de viagem',
          'Geração de protocolos automática',
          'Histórico de preferências do viajante'
        ],
        visualLabel: 'Booking Flow'
      },
      {
        title: 'Fidelização e Suporte',
        description: 'Mantenha o viajante engajado com sua marca através de um atendimento de classe mundial.',
        items: [
          'Pesquisas de satisfação pós-viagem',
          'Canal direto para feedback e elogios',
          'Respostas rápidas para problemas comuns'
        ],
        visualLabel: 'Loyalty & Support'
      }
    ]" />
</template>

<script setup lang="ts">
import ProductTemplate from '~/components/ProductTemplate.vue'

useHead({
  title: 'Viagens & Lazer | Flux - Automação para Turismo',
  meta: [
    { name: 'description', content: 'Transforme o atendimento turístico com a Flux. Automação de reservas, itinerários e concierge inteligente.' }
  ]
})
</script>
