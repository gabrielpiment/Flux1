<template>
  <ProductTemplate
    eyebrow="Omnichannel"
    :title-lines="['Uma única caixa', 'Para todos os canais']"
    description="Centralize WhatsApp, Instagram, Email e Chat em uma interface poderosa desenhada para alta performance e colaboração."
    :features="[
      { icon: '📥', title: 'Inbox Unificado', description: 'Esqueça abas abertas. Gerencie todas as interações da sua marca em um só lugar.' },
      { icon: '👥', title: 'Equipe Colaborativa', description: 'Mencione colegas, transfira chats e trabalhe em conjunto para resolver tickets.' },
      { icon: '🕵️', title: 'Histórico Completo', description: 'Veja a jornada completa do cliente em todos os canais cronologicamente.' }
    ]"
    :details="[
      {
        title: 'Produtividade Aumentada',
        description: 'Ferramentas de resposta rápida e automação de inbox que reduzem em até 60% o tempo médio de resposta.',
        items: [
          'Respostas rápidas inteligentes',
          'Etiquetas de organização avançada',
          'Atalhos de teclado para power users'
        ],
        visualLabel: 'Inbox Interface'
      }
    ]"
  />
</template>

<script setup lang="ts">
import ProductTemplate from '~/components/ProductTemplate.vue'

useHead({
  title: 'Caixa de Entrada | Flux - Gestão Omnichannel',
  meta: [
    { name: 'description', content: 'Centralize sua comunicação e otimize a produtividade do seu time com a Caixa de Entrada Omnichannel da Flux.' }
  ]
})
</script>
