<template>
  <ProductTemplate eyebrow="Setor" :title-lines="['Energia e Serviços', 'Atendimento Eficiente']"
    description="Automatize avisos de manutenção, envio de faturas e solicitações de reparo. Ofereça um serviço essencial com agilidade digital."
    :features="[
      { icon: '⚡', title: 'Segunda Via de Conta', description: 'Emissão de faturas e códigos de barras (via integração com apps externos).' },
      { icon: '⚠️', title: 'Status de Manutenção', description: 'Informe clientes sobre interrupções (via integração com apps externos).' },
      { icon: '📝', title: 'Registro de Ocorrências', description: 'Abertura de chamados de reparo (via integração com apps externos).' }
    ]" :details="[
      {
        title: 'Autoatendimento de Faturas',
        description: 'Reduza drasticamente o volume de chamadas básicas permitindo o acesso rápido a faturas e códigos de barras.',
        items: [
          'Emissão de 2ª via via WhatsApp',
          'Consulta de histórico de consumo',
          'Negociação de débitos automática'
        ],
        visualLabel: 'Billing Portal'
      },
      {
        title: 'Gestão de Ocorrências e Reparos',
        description: 'Permita que o cliente registre faltas de serviço ou sinistros com foto e geolocalização em segundos.',
        items: [
          'Abertura de chamados via chat',
          'Acompanhamento de visitas técnicas',
          'Avisos de manutenção programada'
        ],
        visualLabel: 'Field Operations'
      },
      {
        title: 'Comunicação Crítica em Massa',
        description: 'Informe milhares de clientes sobre interrupções ou alertas climáticos de forma instantânea por região.',
        items: [
          'Alertas por CEP ou geolocalização',
          'Alta entregabilidade omnichannel',
          'Pesquisas de urgência e feedback'
        ],
        visualLabel: 'Mass Alerts'
      }
    ]" />
</template>

<script setup lang="ts">
import ProductTemplate from '~/components/ProductTemplate.vue'

useHead({
  title: 'Energia & Serviços | Flux - Utilities 4.0',
  meta: [
    { name: 'description', content: 'Modernize o atendimento de energia e serviços com a Flux. Autoatendimento, faturas e avisos inteligentes.' }
  ]
})
</script>
