<template>
  <ProductTemplate eyebrow="Crescimento" :title-lines="['Transforme Visitantes', 'Em clientes fiéis']"
    description="Automatize a captura de leads e acelere a conversão com jornadas personalizadas que respondem em tempo real."
    :features="[
      { icon: '🎯', title: 'Qualificação Automática', description: 'Nossa IA identifica leads quentes e coleta dados essenciais antes de passar para o humano.' },
      { icon: '🔄', title: 'Reengajamento Ativo', description: 'Recupere carrinhos abandonados e reative clientes inativos com disparos inteligentes.' },
      { icon: '🔗', title: 'Multi-origem', description: 'Capture leads de anúncios (Click-to-WA), sites e redes sociais em um único fluxo.' }
    ]" :details="[
      {
        title: 'Lead Scoring Inteligente',
        description: 'Não perca tempo com curiosos. Nossa IA pode ser treinado para qualificar cada lead baseado no perfil e comportamento, entregando apenas as melhores oportunidades para seu time.',
        items: [
          'Qualificação demográfica e comportamental',
          'Priorização automática em tempo real',
          'Enriquecimento de dados (Empresa, Cargo)'
        ],
        visualLabel: 'Lead Scoring'
      },
      {
        title: 'Agendamento em Segundos',
        description: 'Reduza a fricção no topo do funil. Deixe que o lead agende uma reunião ou demonstração diretamente no chat, sincronizado com sua agenda.',
        items: [
          'Integração com Google Calendar',
          'Lembretes automáticos pré-reunião',
          'Roteamento por zona geográfica'
        ],
        visualLabel: 'Booking Flow'
      },
      {
        title: 'Fluxos de Atribuição',
        description: 'Saiba exatamente de onde vêm seus leads. Integre seus anúncios do Facebook e Instagram diretamente à Flux.',
        items: [
          'Captura nativa de anúncios (CTWA)',
          'Rastreamento de UTMs e origem',
        ],
        visualLabel: 'Ads Attribution'
      }
    ]" />
</template>

<script setup lang="ts">
import ProductTemplate from '~/components/ProductTemplate.vue'

useHead({
  title: 'Captura & Conversão | Flux - Escalando suas Vendas',
  meta: [
    { name: 'description', content: 'Descubra como a Flux automatiza a captura de leads e impulsiona suas taxas de conversão com IA.' }
  ]
})
</script>
