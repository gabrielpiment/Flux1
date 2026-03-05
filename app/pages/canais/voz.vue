<template>
  <ProductTemplate
    eyebrow="Canal"
    :title-lines="['Atendimento por Voz', 'Inteligência na Linha']"
    description="Dê voz ao seu negócio com automações telefônicas de última geração. URA inteligente e síntese de voz natural para seu call center."
    :features="[
      { icon: '📞', title: 'URA Inteligente', description: 'Menus de voz que realmente entendem o que o cliente diz (Processamento de Linguagem Natural).' },
      { icon: '🎙️', title: 'Transcrição em Tempo Real', description: 'Transforme áudios em texto instantaneamente para análise e registro.' },
      { icon: '🏢', title: 'PABX na Nuvem', description: 'Gestão completa de ramais, filas de espera e gravação de chamadas.' }
    ]"
    :details="[
      {
        title: 'Transcrição e Análise via IA',
        description: 'Transforme chamadas em dados acionáveis. Nossa IA resume ligações e identifica sentimentos automaticamente.',
        items: [
          'Speech-to-Text de alta precisão',
          'Detecção automática de keywords',
          'Resumos de chamadas por e-mail'
        ],
        visualLabel: 'Call IQ'
      },
      {
        title: 'PABX na Nuvem Escalável',
        description: 'Elimine custos com hardware. Tenha um sistema telefônico robusto operando inteiramente na nuvem.',
        items: [
          'Números locais e 0800',
          'Gravação ilimitada na nuvem',
          'Esconamento dinâmico de ramais'
        ],
        visualLabel: 'Cloud Voice'
      },
      {
        title: 'Voz Emocional Natural',
        description: 'Nossa síntese de voz utiliza modelos neurais que soam como humanos, eliminando a percepção de robôs nas URAs.',
        items: [
          'Vozes personalizáveis e sotaques',
          'Sincronização com bancos de dados',
          'Interatividade via teclado (DTMF)'
        ],
        visualLabel: 'Smart IVR'
      }
    ]"
  />
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
