<template>
  <ProductTemplate eyebrow="Vendas" :title-lines="['Mais Vendas', 'Com Respostas Ágeis']"
    description="Transforme curiosidade em faturamento. Reduza o tempo de resposta comercial e garanta que nenhum lead quente esfrie esperando atendimento."
    :features="[
      { icon: '🎯', title: 'Qualificação de Leads', description: 'Colete informações críticas automaticamente antes de passar para um vendedor.' },
      { icon: '🚀', title: 'Distribuição Ágil', description: 'Direcione leads qualificados para o vendedor disponível no canal preferido do cliente.' },
      { icon: '📊', title: 'Origem de Venda', description: 'Identifique quais canais e campanhas estão gerando os leads de maior qualidade.' }
    ]" :details="[
      {
        title: 'Triagem Comercial Inteligente',
        description: 'Elimine o trabalho manual de qualificação e deixe seu time focar apenas em fechar negócios.',
        items: [
          'Coleta automatizada de dados de perfil',
          'Perguntas de qualificação pré-atendimento',
          'Segmentação por interesse demonstrado'
        ],
        visualLabel: 'Lead Qualification'
      },
      {
        title: 'Atendimento Consultivo',
        description: 'Dê ao seu vendedor todo o contexto que ele precisa para realizar uma venda consultiva de alto impacto.',
        items: [
          'Histórico de navegação e interesse do lead',
          'Transferência ativa com resumo contextual',
          'Acesso rápido a materiais de apoio no chat'
        ],
        visualLabel: 'Sales Support'
      },
      {
        title: 'Foco em Conversão',
        description: 'Otimize cada etapa da jornada de compra através de uma comunicação fluida e sem atritos.',
        items: [
          'Respostas instantâneas para dúvidas comuns',
          'Encaminhamento direto para checkout (link externo)',
          'Acompanhamento de status de negociações'
        ],
        visualLabel: 'Conversion Focus'
      }
    ]" />
</template>

<script setup lang="ts">
import ProductTemplate from '~/components/ProductTemplate.vue'

useHead({
  title: 'Aumentar Receita | Flux - Vendas Impulsionadas por IA',
  meta: [
    { name: 'description', content: 'Potencialize seus lucros com a Flux. IA focada em vendas, recuperação de carrinhos e estratégias de upsell.' }
  ]
})
</script>
