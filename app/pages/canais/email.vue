<template>
  <ProductTemplate
    eyebrow="Canal"
    :title-lines="['E-mail Marketing', 'Omnichannel e Integrado']"
    description="Vá além da simples mensagem. Integre suas campanhas de e-mail ao fluxo de atendimento e garanta uma experiência contínua para seu cliente."
    :features="[
      { icon: '📧', title: 'Editores Visuais', description: 'Crie layouts profissionais com arrastar e soltar, totalmente responsivos.' },
      { icon: '🔗', title: 'Domínios Verificados', description: 'Segurança e alta taxa de entrega garantidas com autenticação SPF/DKIM.' },
      { icon: '⚡', title: 'Gatilhos Inteligentes', description: 'Dispare e-mails baseados em ações do cliente no seu site ou no WhatsApp.' }
    ]"
    :details="[
      {
        title: 'Automação Omnichannel',
        description: 'Crie jornadas que cruzam canais. Se o cliente não responde no e-mail, a Flux dispara um lembrete no WhatsApp.',
        items: [
          'Transição inteligente entre canais',
          'Workflows de nutrição complexos',
          'Relatórios de clique跨channel'
        ],
        visualLabel: 'Omnichannel Flow'
      },
      {
        title: 'Entregabilidade de Elite',
        description: 'Infraestrutura de ponta e consultoria técnica para garantir que sua mensagem chegue na caixa de entrada, não no spam.',
        items: [
          'Monitoramento de reputação de IP',
          'Limpeza automática de listas (Bounce)',
          'Autenticação BIMI e DMARC'
        ],
        visualLabel: 'Inbox Delivery'
      },
      {
        title: 'Conteúdo Dinâmico via IA',
        description: 'Gere centenas de variações de e-mail personalizadas com IA para aumentar suas taxas de engajamento.',
        items: [
          'Ajuste de tom de voz via IA',
          'Linhas de assunto preditivas',
          'Otimização de horário de envio'
        ],
        visualLabel: 'AI Copywriter'
      }
    ]"
  />
</template>

<script setup lang="ts">
import ProductTemplate from '~/components/ProductTemplate.vue'

useHead({
  title: 'E-mail Marketing | Flux - Comunicação Omnichannel',
  meta: [
    { name: 'description', content: 'Potencialize sua comunicação com e-mail marketing integrado. Campanhas automatizadas e alta entregabilidade com a Flux.' }
  ]
})
</script>
