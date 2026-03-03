<template>
  <ProductTemplate
    eyebrow="Crescimento"
    :title-lines="['Transforme Visitantes', 'Em clientes fiéis']"
    description="Automatize a captura de leads e acelere a conversão com jornadas personalizadas que respondem em tempo real."
    :features="[
      { icon: '🎯', title: 'Qualificação Automática', description: 'Nossa IA identifica leads quentes e coleta dados essenciais antes de passar para o humano.' },
      { icon: '🔄', title: 'Reengajamento Ativo', description: 'Recupere carrinhos abandonados e reative clientes inativos com disparos inteligentes.' },
      { icon: '🔗', title: 'Multi-origem', description: 'Capture leads de anúncios (Click-to-WA), sites e redes sociais em um único fluxo.' }
    ]"
    :details="[
      {
        title: 'Conversão 3x Superior',
        description: 'Empresas que utilizam automação de captura Flux registram um aumento médio de 300% na taxa de conversão.',
        items: [
          'Agendamento automático de reuniões',
          'Roteamento por intenção de compra',
          'Testes A/B de abordagens de IA'
        ],
        visualLabel: 'Conversion Funnel'
      }
    ]"
  />
</template>

<script setup lang="ts">
import ProductTemplate from '~/components/ProductTemplate.vue'

useHead({
  title: 'Captura & Conversão | Flux - Escalando suas Vendas',
  meta: [
    { name: 'description', content: 'Descubra como a Flux automatiza a captura de leads e impulsiona suas taxas de conversão com IA.' }
  ]
})
</script>
