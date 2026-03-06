<template>
  <ProductTemplate eyebrow="Dados & Análise" :title-lines="['Inteligência Operacional', 'Baseada em Fatos']"
    description="Dashboards detalhados que revelam a saúde da sua operação, a performance do seu time e o comportamento real dos seus clientes."
    :features="[
      { icon: '📊', title: 'BI em Tempo Real', description: 'Acompanhe o volume de atendimentos e gargalos operacionais no exato momento em que ocorrem.' },
      { icon: '📈', title: 'Performance da Equipe', description: 'Métricas individuais e coletivas de TMA, TMR e eficácia na resolução de problemas.' },
      { icon: '💰', title: 'ROI por Canal', description: 'Identifique quais canais de comunicação trazem o maior retorno financeiro para o seu negócio.' }
    ]" :details="[
      {
        title: 'Visibilidade Operacional',
        description: 'Acompanhe a volumetria da sua operação e identifique horários de pico para otimizar seu time.',
        items: [
          'Distribuição de chamados por horário e canal',
          'Visão de tickets ativos e pendentes',
          'Métricas de volume por atendente'
        ],
        visualLabel: 'Operational Insights'
      },
      {
        title: 'Métricas de Conversão',
        description: 'Entenda como os contatos estão fluindo pelos seus canais de atendimento.',
        items: [
          'Atribuição básica de origem por canal',
          'Taxa de finalização de atendimentos',
          'Volume de novos leads gerados'
        ],
        visualLabel: 'Conversion tracking'
      },
      {
        title: 'Exportação e Governança',
        description: 'Seus dados sob seu controle. Exporte as informações necessárias para suas análises externas.',
        items: [
          'Exportação manual de logs de atendimento',
          'Relatórios em formato CSV e Excel',
          'Histórico de interações disponível para consulta'
        ],
        visualLabel: 'Data Control'
      }
    ]" />
</template>

<script setup lang="ts">
import ProductTemplate from '~/components/ProductTemplate.vue'

useHead({
  title: 'Relatórios & Análises | Flux - Inteligência de Dados',
  meta: [
    { name: 'description', content: 'Tome decisões baseadas em dados com os relatórios avançados e dashboards em tempo real da plataforma Flux.' }
  ]
})
</script>
