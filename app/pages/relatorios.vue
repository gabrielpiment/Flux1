<template>
  <ProductTemplate
    eyebrow="Dados & Insights"
    :title-lines="['Transforme Dados', 'Em decisões reais']"
    description="Dashboards em tempo real que mostram a saúde da sua operação, performance do time e sentimento dos seus clientes."
    :features="[
      { icon: '📊', title: 'Dashboards Real-time', description: 'Monitore KPIs críticos no exato momento em que as coisas acontecem.' },
      { icon: '⏳', title: 'Métricas de Performance', description: 'Tempo Médio de Atendimento (TMA) e Tempo Médio de Resposta (TMR).' },
      { icon: '📉', title: 'Análise de Conversão', description: 'Entenda quais canais e automações estão gerando mais receita direta.' }
    ]"
    :details="[
      {
        title: 'Data-Driven Insights',
        description: 'Tome decisões baseadas em fatos. Nossa IA analisa milhares de conversas para gerar relatórios de tendências.',
        items: [
          'Detecção de gargalos de atendimento',
          'Relatórios de sentimento dos clientes',
          'Heatmap de horários de pico'
        ],
        visualLabel: 'Insights Engine'
      },
      {
        title: 'ROI e Atribuição',
        description: 'Saiba exatamente quanto cada centavo investido em automação está retornando para o seu negócio.',
        items: [
          'Rastreamento de links de conversão',
          'Cálculo de economia de custos (Bot vs Humano)',
          'Dashboard de performance de vendas'
        ],
        visualLabel: 'ROI Analytics'
      },
      {
        title: 'Exportação e Automação',
        description: 'Receba os dados onde você precisar. Automatize o envio de relatórios para stakeholders e parceiros.',
        items: [
          'Envios agendados via E-mail/WhatsApp',
          'Exportações em CSV, PDF e JSON',
          'Integração com PowerBI e Looker'
        ],
        visualLabel: 'Data Export'
      }
    ]"
  />
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
