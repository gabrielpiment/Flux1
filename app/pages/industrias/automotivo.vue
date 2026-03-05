<template>
  <ProductTemplate
    eyebrow="Setor"
    :title-lines="['Setor Automotivo', 'Acelere suas Vendas']"
    description="Da qualificação do lead ao agendamento do test-drive. Mantenha o motor do seu atendimento ligado 24h por dia, 7 dias por semana."
    :features="[
      { icon: '🚗', title: 'Qualificação de Leads', description: 'Bots que entendem o perfil do comprador e direcionam para o vendedor certo.' },
      { icon: '🛠️', title: 'Lembrete de Revisão', description: 'Notificações automáticas baseadas em quilometragem ou data da última visita.' },
      { icon: '📅', title: 'Test-drive Online', description: 'Agendamento simplificado sem a necessidade de ligações telefônicas.' }
    ]"
    :details="[
      {
        title: 'Showroom Digital 24/7',
        description: 'Exiba seu estoque de veículos com fotos, vídeos e fichas técnicas de forma interativa diretamente no chat.',
        items: [
          'Catálogo sincronizado com o DMS',
          'Cálculo de parcelas em tempo real',
          'Agendamento de test-drive (Bot)'
        ],
        visualLabel: 'Virtual Showroom'
      },
      {
        title: 'Pós-Venda e Manutenção',
        description: 'Aumente o faturamento da sua oficina com lembretes automáticos baseados na jornada de cada veículo.',
        items: [
          'Alertas de revisão por quilometragem',
          'Confirmação de agendamento de serviço',
          'Pesquisa de satisfação pós-oficina'
        ],
        visualLabel: 'Aftersales Engine'
      },
      {
        title: 'Qualificação e Distribuição',
        description: 'Garanta que cada lead seja atendido pelo vendedor certo de acordo com a unidade e interesse.',
        items: [
          'Roteamento inteligente por unidade',
          'Atribuição por tipo de veículo',
          'Dashboards de performance de vendas'
        ],
        visualLabel: 'Dealer Analytics'
      }
    ]"
  />
</template>

<script setup lang="ts">
import ProductTemplate from '~/components/ProductTemplate.vue'

useHead({
  title: 'Setor Automotivo | Flux - Performance em Vendas',
  meta: [
    { name: 'description', content: 'Potencialize suas vendas automotivas com a Flux. Qualificação de leads, agendamentos e pós-venda automatizado.' }
  ]
})
</script>
