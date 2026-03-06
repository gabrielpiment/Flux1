<template>
  <ProductTemplate eyebrow="Dados & Análise" :title-lines="['Inteligência Operacional', 'Baseada em Fatos']"
    description="Dashboards detalhados que revelam a saúde da sua operação, a performance do seu time e o comportamento real dos seus clientes."
    :features="[
      { icon: '📊', title: 'BI em Tempo Real', description: 'Acompanhe o volume de atendimentos e gargalos operacionais no exato momento em que ocorrem.' },
      { icon: '📈', title: 'Performance da Equipe', description: 'Métricas individuais e coletivas de TMA, TMR e eficácia na resolução de problemas.' },
      { icon: '💰', title: 'ROI por Canal', description: 'Identifique quais canais de comunicação trazem o maior retorno financeiro para o seu negócio.' }
    ]" :details="[
      {
        title: 'Visão Analítica Completa',
        description: 'Não apenas dados, mas insights prontos para ação. Entenda onde sua operação está perdendo eficiência.',
        items: [
          'Distribuição de chamados por horário e canal',
          'Motivos de atendimento mais frequentes',
          'Heatmap de demanda para otimização de turnos'
        ],
        visualLabel: 'Operational Insights'
      },
      {
        title: 'Rastreamento de Conversão',
        description: 'Saiba exatamente como cada interação contribui para o seu faturamento final.',
        items: [
          'Atribuição de vendas por canal de origem',
          'Rastreamento de cliques em CTAs dentro do chat',
          'Taxa de conversão de atendimentos em vendas'
        ],
        visualLabel: 'Conversion tracking'
      },
      {
        title: 'Governança e Exportação',
        description: 'Seus dados onde você precisa deles. Mantenha o controle total sobre a informação gerada na plataforma.',
        items: [
          'Agendamento de relatórios por e-mail para diretoria',
          'Exportação completa em múltiplos formatos (CSV, PDF, JSON)',
          'Conector nativo para ferramentas de BI (PowerBI, Looker)'
        ],
        visualLabel: 'Data Governance'
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
