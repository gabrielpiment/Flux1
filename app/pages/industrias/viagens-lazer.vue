<template>
  <ProductTemplate
    eyebrow="Setor"
    :title-lines="['Viagens e Lazer', 'Experiências Fluídas']"
    description="Do check-in à recomendação local. Automatize o suporte em viagens e garanta que o único foco do seu cliente seja aproveitar o destino."
    :features="[
      { icon: '✈️', title: 'Envio de Itinerários', description: 'Confirmações de reserva e arquivos de passagem disparados automaticamente via WhatsApp.' },
      { icon: '🌍', title: 'Concierge IA', description: 'Assistente 24h para tirar dúvidas sobre clima, locais turísticos e regras de bagagem.' },
      { icon: '📅', title: 'Gestão de Cancelamento', description: 'Processos automatizados para remarcações e reembolsos com agilidade.' }
    ]"
    :details="[
      {
        title: 'Concierge IA 24/7',
        description: 'Ofereça um assistente pessoal para cada viajante, disponível para tirar dúvidas e fazer recomendações a qualquer hora.',
        items: [
          'Dicas de locais e gastronomia',
          'Informações de voo em tempo real',
          'Suporte multilíngue para estrangeiros'
        ],
        visualLabel: 'AI Concierge'
      },
      {
        title: 'Gestão de Crises e Remarcações',
        description: 'Em caso de atrasos ou cancelamentos, a Flux orquestra a comunicação em massa e oferece opções rápidas de solução.',
        items: [
          'Avisos proativos de alteração',
          'Remarcação simplificada no chat',
          'Processamento de reembolsos (Bot)'
        ],
        visualLabel: 'Crisis Control'
      },
      {
        title: 'Fidelização de Hóspedes',
        description: 'Mantenha o contato pós-viagem para garantir o retorno do cliente com ofertas personalizadas.',
        items: [
          'Pesquisas de satisfação automáticas',
          'Ofertas de upsell para próximas estadias',
          'Gestão de programas de milhagem'
        ],
        visualLabel: 'Guest Loyalty'
      }
    ]"
  />
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
