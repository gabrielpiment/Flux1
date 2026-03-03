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
        title: 'Engajamento que Converte',
        description: 'Aproveite o pico de interesse dos seus seguidores com interações imediatas impulsionadas por IA.',
        items: [
          'Gatilhos por palavras-chave',
          'Fluxos de FAQ automáticos',
          'Análise de performance de posts'
        ],
        visualLabel: 'Instagram Engagement'
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
