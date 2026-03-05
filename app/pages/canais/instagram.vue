<template>
  <ProductTemplate
    eyebrow="Visual Social"
    :title-lines="['Venda mais através', 'Do Direct e Stories']"
    description="Responda instantaneamente cada comentário e mensagem direta, transformando seguidores em compradores."
    :features="[
      { icon: '📸', title: 'Automação de Direct', description: 'Nunca deixe uma DM sem resposta. Responda em segundos, 24/7.' },
      { icon: '💬', title: 'Resposta a Comentários', description: 'Transforme comentários em posts em conversas privadas de venda automaticamente.' },
      { icon: '🛍️', title: 'Social Commerce', description: 'Integre seu catálogo e finalize vendas sem que o cliente saia do app.' }
    ]"
    :details="[
      {
        title: 'Engajamento via Stories',
        description: 'Responda a menções e reações nos Stories automaticamente, convertendo engajamento social em leads qualificados.',
        items: [
          'Auto-reply para menções nos Stories',
          'Início de automação via palavras-chave',
          'Captura de leads via Quick Replies'
        ],
        visualLabel: 'Story Automation'
      },
      {
        title: 'DM Automation para E-commerce',
        description: 'Automatize o atendimento direto (DM) e integre seu catálogo de produtos para vendas assistidas no app.',
        items: [
          'Envio de cartões de produto',
          'Rastreamento de pedidos via Direct',
          'Integração com Instagram Shopping'
        ],
        visualLabel: 'Social Sales'
      },
      {
        title: 'Gestão Unificada de Comentários',
        description: 'Responda a comentários em posts e anúncios automaticamente, levando a conversa para o Direct.',
        items: [
          'Filtro de palavras proibidas',
          'Resposta automática em posts orgânicos',
          'Acompanhamento de anúncios (Boosted)'
        ],
        visualLabel: 'Comment Management'
      }
    ]"
  />
</template>

<script setup lang="ts">
import ProductTemplate from '~/components/ProductTemplate.vue'

useHead({
  title: 'Instagram para Negócios | Flux - Automação de Direct',
  meta: [
    { name: 'description', content: 'Otimize seu Instagram. Converta comentários e DMs em vendas com a inteligência da Flux.' }
  ]
})
</script>
