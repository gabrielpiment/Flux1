<template>
  <ProductTemplate
    eyebrow="Canal"
    :title-lines="['Facebook Messenger', 'Engajamento Social']"
    description="Conecte-se com milhões de usuários no Facebook. Automatize seu suporte e vendas diretamente pelo Messenger com total controle."
    :features="[
      { icon: '🗨️', title: 'Resposta Automática', description: 'Configure FAQs e fluxos de boas-vindas para nunca deixar o cliente esperando.' },
      { icon: '📣', title: 'Integração com Anúncios', description: 'Leve leads de anúncios do Facebook direto para uma conversa qualificada.' },
      { icon: '🛠️', title: 'Ferramentas de Negócio', description: 'Agende horários e faça demonstrações diretamente pelo chat.' }
    ]"
    :details="[
      {
        title: 'Ad-to-Chat Performance',
        description: 'Reduza seu CPL (Custo por Lead). Envie pessoas de anúncios do Facebook direto para fluxos de qualificação IA.',
        items: [
          'Otimização p/ eventos de conversão',
          'Respostas instantâneas 24/7',
          'Retargeting baseado em chat'
        ],
        visualLabel: 'Ads Optimization'
      },
      {
        title: 'Messenger for Commerce',
        description: 'Venda diretamente pelo Messenger. Integre meios de pagamento e catálogo para uma compra social completa.',
        items: [
          'Envio de carrinhos de compra',
          'Status de pedido automático',
          'Link direto para pagamento'
        ],
        visualLabel: 'Social Commerce'
      },
      {
        title: 'Multi-Page Management',
        description: 'Gerencie dezenas de páginas do Facebook em uma única interface centralizada e colaborativa.',
        items: [
          'Permissões granulares por página',
          'Tags de organização globais',
          'Relatórios comparativos de performance'
        ],
        visualLabel: 'Multi-Page UI'
      }
    ]"
  />
</template>

<script setup lang="ts">
import ProductTemplate from '~/components/ProductTemplate.vue'

useHead({
  title: 'Facebook Messenger | Flux - Atendimento nas Redes Sociais',
  meta: [
    { name: 'description', content: 'Conecte sua marca ao Facebook Messenger. Automatize conversas e converta seguidores em clientes com a Flux.' }
  ]
})
</script>
