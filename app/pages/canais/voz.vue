<template>
  <ProductTemplate eyebrow="Canal" :title-lines="['Atendimento por Voz', 'Inteligência na Linha']"
    description="Dê voz ao seu negócio com automações telefônicas de última geração. URA inteligente e síntese de voz natural para seu call center."
    :features="[
      { icon: '📞', title: 'URA Inteligente', description: 'Menus de voz que realmente entendem o que o cliente diz (Processamento de Linguagem Natural).' },
      { icon: '🎙️', title: 'Transcrição em Tempo Real', description: 'Transforme áudios em texto instantaneamente para análise e registro.' },
      { icon: '🏢', title: 'PABX na Nuvem', description: 'Gestão completa de ramais, filas de espera e gravação de chamadas.' }
    ]" :details="[
      {
        title: 'Transcrição via IA',
        description: 'Dê agilidade ao seu atendimento. Nossa IA transcreve mensagens de áudio instantaneamente para que você possa ler em vez de ouvir.',
        items: [
          'Transcrição de alta precisão',
          'Suporte a múltiplos idiomas e sotaques',
          'Resumo de áudios longos facilitado'
        ],
        visualLabel: 'Audio to Text'
      }
    ]" />
</template>

<script setup lang="ts">
import ProductTemplate from '~/components/ProductTemplate.vue'

useHead({
  title: 'Atendimento por Voz | Flux - PABX e IA de Voz',
  meta: [
    { name: 'description', content: 'Modernize seu atendimento telefônico com a Flux. Automações de voz, URA inteligente e integração total.' }
  ]
})
</script>
