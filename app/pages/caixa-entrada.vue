<template>
  <ProductTemplate eyebrow="Omnichannel" :title-lines="['Uma única caixa', 'Para todo o seu time']"
    description="Centralize WhatsApp, Instagram, Email e Chat em uma interface desenhada para alta performance humana e colaboração entre departamentos."
    :features="[
      { icon: '📥', title: 'Inbox Unificado', description: 'Gerencie todas as interações da sua marca em uma única tela, sem trocar de abas.' },
      { icon: '👥', title: 'Gestão de Equipes', description: 'Organize atendentes por departamentos, turnos ou níveis de especialidade.' },
      { icon: '🕵️', title: 'Contexto 360°', description: 'Veja o histórico completo do cliente e interações passadas antes mesmo de responder.' }
    ]" :details="[
      {
        title: 'Produtividade Humana de Elite',
        description: 'Ferramentas criadas para remover a fricção do dia a dia e permitir que seu time foque no que realmente importa: o cliente.',
        items: [
          'Biblioteca de respostas rápidas padronizadas',
          'Tags de organização por assunto ou urgência',
          'Atalhos de teclado para navegação ultra-veloz'
        ],
        visualLabel: 'Productivity UI'
      },
      {
        title: 'Monitoramento em Tempo Real',
        description: 'Supervisores podem acompanhar a carga de trabalho do time e intervir em conversas críticas para garantir a qualidade.',
        items: [
          'Visão geral da fila de espera por canal',
          'Sussurro (notas que só o atendente vê)',
          'Painel de produtividade individual e coletiva'
        ],
        visualLabel: 'Supervisor Dashboard'
      },
      {
        title: 'Colaboração sem Barreiras',
        description: 'Elimine a troca de mensagens externa para resolver um ticket. Comunique-se com seus colegas dentro do próprio chat.',
        items: [
          'Menções internas (@name) em notas privadas',
          'Transferência de chamados com histórico preservado',
          'Indicador de presença para evitar duplicidade de resposta'
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
