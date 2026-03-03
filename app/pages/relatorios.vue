<template>
  <ProductTemplate
    eyebrow="Dados & Insights"
    :title-lines="['Transforme Dados', 'Em decisões reais']"
    description="Dashboards em tempo real que mostram a saúde da sua operação, performance do time e sentimento dos seus clientes."
    :features="[
      { icon: '📊', title: 'Dahsboards Real-time', description: 'Monitore Kpis críticos no exato momento em que as coisas acontecem.' },
      { icon: '⏳', title: 'Métricas de Tempo', description: 'First Response Time, Average Handle Time e outras métricas de eficiência.' },
      { icon: '📈', title: 'Atribuição de Vendas', description: 'Entenda quais canais e automações estão gerando mais receita direta.' }
    ]"
    :details="[
      {
        title: 'Relatórios Customizáveis',
        description: 'Crie visões específicas para cada gestor ou departamento com filtros avançados e exportação agendada.',
        items: [
          'Exportação automática em PDF/CSV',
          'Dashboards compartilháveis via link',
          'Alertas de anomalia baseados em IA'
        ],
        visualLabel: 'Analytics Dashboard'
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
