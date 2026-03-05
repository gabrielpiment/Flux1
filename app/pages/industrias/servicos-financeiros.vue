<template>
  <ProductTemplate eyebrow="Fintech e Bancos" :title-lines="['Segurança e Agilidade', 'No setor financeiro']"
    description="Conformidade total com LGPD e segurança bancária para automatizar cobranças, onboarding e suporte financeiro."
    :features="[
      { icon: '🔒', title: 'Segurança de Dados', description: 'Ambientes isolados e criptografia de ponta a ponta para dados sensíveis.' },
      { icon: '💳', title: 'Gestão de Cobrança', description: 'Envio automático de boletos, lembretes de vencimento e negociação de dívidas por IA.' },
      { icon: '📝', title: 'Onboarding Digital', description: 'Coleta e validação de documentos automatizada para abertura de contas.' }
    ]" :details="[
      {
        title: 'Security & Compliance',
        description: 'Operamos sob os mais rígidos padrões de segurança, garantindo a privacidade dos dados bancários e sensíveis.',
        items: [
          'Conformidade total com a LGPD',
          'Criptografia de ponta a ponta',
          'Mascaramento de dados sensíveis'
        ],
        visualLabel: 'Secure Banking'
      },
      {
        title: 'KYC e Onboarding Digital',
        description: 'Acelere a abertura de contas e validação de documentos através de fluxos automatizados de visão computacional.',
        items: [
          'Validação de documentos via chat',
          'Prova de vida (Liveness) por imagem',
          'Triagem automática de perfis'
        ],
        visualLabel: 'KYC Workflow'
      },
      {
        title: 'Autoatendimento Financeiro',
        description: 'Reduza a carga do call center permitindo que o cliente consulte saldos, faturas e negocie dívidas via IA.',
        items: [
          'Emissão de 2ª via de boleto',
          'Consulta de extratos e limites',
          'Acordos de negociação automáticos'
        ],
        visualLabel: 'Financial Bot'
      }
    ]" />
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
