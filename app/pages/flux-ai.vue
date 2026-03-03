<template>
  <ProductTemplate
    eyebrow="Inteligência Pura"
    :title-lines="['IA Enterprise', 'Nascida para Performance']"
    description="A Flux AI não é apenas um add-on. É o coração reativo da nossa plataforma, otimizando cada interação e processo automaticamente."
    :features="[
      { icon: '✨', title: 'Generative Support', description: 'Respostas geradas por IA que soam naturais e resolvem 80% das chamadas.' },
      { icon: '🔍', title: 'Análise de Sentimento', description: 'Detecte clientes frustrados antes que eles reclamem e priorize o atendimento.' },
      { icon: '💡', title: 'Sugestões de Flow', description: 'A IA sugere melhorias nos seus fluxos de automação baseada em conversão.' }
    ]"
    :details="[
      {
        title: 'Segurança & Compliance',
        description: 'Sua IA opera em um ambiente seguro, respeitando a LGPD e garantindo que seus dados nunca treinem modelos públicos.',
        items: [
          'Criptografia de ponta a ponta',
          'Controle de acesso granular',
          'Auditoria completa de decisões da IA'
        ],
        visualLabel: 'Secure AI Layers'
      }
    ]"
  />
</template>

<script setup lang="ts">
import ProductTemplate from '~/components/ProductTemplate.vue'

useHead({
  title: 'Flux AI | O Motor de Inteligência Enterprise',
  meta: [
    { name: 'description', content: 'Conheça o motor de IA que impulsiona a plataforma Flux. Performance, precisão e inteligência para seu negócio.' }
  ]
})
</script>
