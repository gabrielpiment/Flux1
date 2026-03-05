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
        title: 'Diferencial Tecnológico',
        description: 'Nossa IA foi treinada especificamente para o mercado brasileiro, entendendo gírias, abreviações e intenções complexas.',
        items: [
          'LLM ajustado para atendimento (SFT)',
          'Baixíssima latência de resposta',
          'Proteção contra alucinações de IA'
        ],
        visualLabel: 'AI Knowledge'
      },
      {
        title: 'Segurança & LGPD Nativa',
        description: 'Seus dados são seus. Operamos em um ambiente isolado (Sandboxed) onde suas informações nunca são vazadas ou usadas por terceiros.',
        items: [
          'Criptografia AES-256 e SSL/TLS',
          'Anonimização de dados sensíveis',
          'Logs de auditoria em tempo real'
        ],
        visualLabel: 'Security Core'
      },
      {
        title: 'Aprendizado Contínuo',
        description: 'A Flux AI aprende com os feedbacks (RLHF) e melhora a precisão das respostas a cada nova interação.',
        items: [
          'Treinamento reativo via feedback',
          'Identificação de novos tópicos (Clustering)',
          'Otimização automática de prompts'
        ],
        visualLabel: 'Self-Learning'
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
