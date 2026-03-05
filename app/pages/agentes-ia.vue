<template>
  <ProductTemplate
    eyebrow="Agentes de IA"
    :title-lines="['Atendimento Enterprise', 'Humano e Escalável']"
    description="Implemente agentes de inteligência artificial que entendem o contexto, aprendem com sua base de dados e resolvem problemas complexos em segundos."
    :features="[
      { icon: '🧠', title: 'Compreensão de Contexto', description: 'Nossa IA entende intenções, não apenas palavras-chave, proporcionando diálogos fluidos.' },
      { icon: '📚', title: 'Base de Conhecimento', description: 'Importe PDFs, URLs e manuais para que sua IA responda exatamente como seu time.' },
      { icon: '⚡', title: 'Resolução Instantânea', description: 'Zere o tempo de espera. Atenda milhares de clientes simultaneamente sem perder a qualidade.' }
    ]"
    :details="[
      {
        title: 'IA Treinada no Seu Negócio',
        description: 'Diferente de chatbots genéricos, os Agentes Flux são alimentados diretamente pela sua base de conhecimento (PDF, URLs, manuais), garantindo respostas precisas e alinhadas à sua marca.',
        items: [
          'Treinamento em múltiplos idiomas e dialetos',
          'Tom de voz e personalidade ajustáveis',
          'Processamento de Linguagem Natural (LLM) proprietário'
        ],
        visualLabel: 'Training Engine'
      },
      {
        title: 'Transição Inteligente (Handoff)',
        description: 'A IA reconhece quando um problema exige intervenção humana e transfere o atendimento para o especialista certo, enviando um resumo completo da conversa.',
        items: [
          'Resumos automatizados via IA',
          'Análise de sentimento para priorização',
          'Distribuição por competências do operador'
        ],
        visualLabel: 'Handoff Flow'
      },
      {
        title: 'Multimodalidade e Canais',
        description: 'Seus agentes de IA operam em todos os canais, processando texto, áudio e até imagens para uma resolução completa.',
        items: [
          'Transcrição de áudios do WhatsApp',
          'Interpretação de comprovantes e documentos',
          'Respostas contextualizadas por imagem'
        ],
        visualLabel: 'Multimodal AI'
      }
    ]"
  />
</template>

<script setup lang="ts">
import ProductTemplate from '~/components/ProductTemplate.vue'

useHead({
  title: 'Agentes de IA | Flux - A Revolução do Atendimento',
  meta: [
    { name: 'description', content: 'Automatize seu atendimento com Agentes de IA que realmente entendem seus clientes.' }
  ]
})
</script>
