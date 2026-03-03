<template>
  <ProductTemplate
    eyebrow="Fintech & Bancos"
    :title-lines="['Segurança & Agilidade', 'No setor financeiro']"
    description="Conformidade total com LGPD e segurança bancária para automatizar cobranças, onboarding e suporte financeiro."
    :features="[
      { icon: '🔒', title: 'Segurança de Dados', description: 'Ambientes isolados e criptografia de ponta a ponta para dados sensíveis.' },
      { icon: '💳', title: 'Gestão de Cobrança', description: 'Envio automático de boletos, lembretes de vencimento e negociação de dívidas por IA.' },
      { icon: '📝', title: 'Onboarding Digital', description: 'Coleta e validação de documentos automatizada para abertura de contas.' }
    ]"
    :details="[
      {
        title: 'Compliance & Eficiência',
        description: 'Reduza o custo operacional de Compliance enquanto melhora a experiência de uso dos seus clientes.',
        items: [
          'Integração com bureaus de crédito',
          'Assinatura digital integrada',
          'Relatórios de auditoria completa'
        ],
        visualLabel: 'Financial Flow'
      }
    ]"
  />
</template>

<script setup lang="ts">
import ProductTemplate from '~/components/ProductTemplate.vue'

useHead({
  title: 'Serviços Financeiros | Flux - Tecnologia Bancária',
  meta: [
    { name: 'description', content: 'Soluções de IA para o setor financeiro. Onboarding, cobrança e suporte com máxima segurança.' }
  ]
})
</script>
