<template>
  <ProductTemplate eyebrow="Omnichannel" :title-lines="['Uma única caixa', 'Para todos os canais']"
    description="Centralize WhatsApp, Instagram, Email e Chat em uma interface poderosa desenhada para alta performance e colaboração."
    :features="[
      { icon: '📥', title: 'Inbox Unificado', description: 'Esqueça abas abertas. Gerencie todas as interações da sua marca em um só lugar.' },
      { icon: '👥', title: 'Equipe Colaborativa', description: 'Mencione colegas, transfira chats e trabalhe em conjunto para resolver tickets.' },
      { icon: '🕵️', title: 'Histórico Completo', description: 'Veja a jornada completa do cliente em todos os canais cronologicamente.' }
    ]" :details="[
      {
        title: 'Produtividade de Elite',
        description: 'Ferramentas desenhadas para reduzir a carga cognitiva do time e acelerar o tempo de resolução (TMR).',
        items: [
          'Respostas rápidas',
          'Tags e filtros inteligentes',
          'Atalhos de teclado'
        ],
        visualLabel: 'Productivity UI'
      },
      {
        title: 'Gestão de SLA e Prazos',
        description: 'Garanta que nenhum cliente fique sem resposta. Configure alertas e priorizações automáticas baseadas em tempo de espera.',
        items: [
          'Contagem regressiva de SLA visível',
          'Escalonamento automático de tickets',
          'Relatórios de gaps de atendimento'
        ],
        visualLabel: 'SLA Dashboard'
      },
      {
        title: 'Colaboração em Tempo Real',
        description: 'Elimine silos de informação. Sua equipe pode colaborar internamente sem que o cliente veja as notas de bastidores.',
        items: [
          'Notas internas privadas (Mentions)',
          'Transferência com contexto total',
          'Visualização de quem está digitando'
        ],
        visualLabel: 'Team Collaboration'
      }
    ]" />
</template>

<script setup lang="ts">
import ProductTemplate from '~/components/ProductTemplate.vue'

useHead({
  title: 'Caixa de Entrada | Flux - Gestão Omnichannel',
  meta: [
    { name: 'description', content: 'Centralize sua comunicação e otimize a produtividade do seu time com a Caixa de Entrada Omnichannel da Flux.' }
  ]
})
</script>
