<template>
  <ProductTemplate eyebrow="Fintech e Bancos" :title-lines="['Segurança e Agilidade', 'No setor financeiro']"
    description="Conformidade total com LGPD e segurança bancária para automatizar cobranças, onboarding e suporte financeiro."
    :features="[
      { icon: '🔒', title: 'Segurança Prioritária', description: 'Criptografia de ponta a ponta e ambiente seguro para lidar com dados sensíveis.' },
      { icon: '📊', title: 'Triagem de Perfil', description: 'Colete informações iniciais para qualificar o atendimento antes do consultor assumir.' },
      { icon: '⚡', title: 'Agilidade Operacional', description: 'Reduza filas de espera com automações inteligentes de triagem financeira.' }
    ]" :details="[
      {
        title: 'Segurança e Conformidade',
        description: 'Operamos seguindo as melhores práticas de proteção de dados para garantir a privacidade absoluta.',
        items: [
          'Protocolos de segurança robustos',
          'Auditoria de registros de acesso',
          'Mascaramento de informações sensíveis'
        ],
        visualLabel: 'Secure Core'
      },
      {
        title: 'Triagem Inteligente',
        description: 'Identifique o perfil do cliente e o motivo do contato antes de direcionar para o especialista.',
        items: [
          'Coleta automatizada de dados básicos',
          'Validação de CPF/CNPJ via integração',
          'Direcionamento por nível de urgência'
        ],
        visualLabel: 'Smarter Routing'
      },
      {
        title: 'Eficiência no Atendimento',
        description: 'Dê ao seu time as ferramentas necessárias para resolver pendências financeiras com rapidez.',
        items: [
          'Histórico completo de interações',
          'Transferência ativa com resumo',
          'Modelos de resposta padronizados'
        ],
        visualLabel: 'Ops Excellence'
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
