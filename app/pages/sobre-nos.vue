<template>
  <ProductTemplate
    eyebrow="Nossa História"
    :title-lines="['Liderando a Revolução', 'Da IA Conversacional']"
    description="Nascemos com o propósito de humanizar a tecnologia. A Flux é o hub de IA que conecta grandes empresas aos seus clientes de forma inteligente."
    :features="[
      { icon: '🚀', title: 'Nossa Missão', description: 'Transformar cada interação digital em uma experiência memorável e eficiente.' },
      { icon: '🌍', title: 'Alcance Global', description: 'Operamos em mais de 10 países, ajudando marcas a escalarem sua comunicação.' },
      { icon: '🛡️', title: 'Compromisso Ético', description: 'Ética e segurança de dados são os pilares fundamentais da nossa tecnologia.' }
    ]"
    :details="[
      {
        title: 'Tecnologia Proprietária',
        description: 'Não apenas utilizamos IA, nós a construímos. Nossos modelos de LLM são otimizados para o mercado corporativo latino-americano.',
        items: [
          'Centro de Pesquisa em NLP dedicado',
          'Infraestrutura de nuvem resiliente',
          'Inovação constante em multimodalidade'
        ],
        visualLabel: 'Tech Stack'
      },
      {
        title: 'Cultura de Excelência',
        description: 'Nosso time é formado por especialistas apaixonados por resolver problemas complexos através de código e design.',
        items: [
          'Foco absoluto no sucesso do cliente',
          'Diversidade e inclusão como pilares',
          'Aprendizado contínuo (Continuous Learning)'
        ],
        visualLabel: 'Our Culture'
      },
      {
        title: 'Presença e Impacto',
        description: 'Mais do que uma ferramenta, somos parceiros estratégicos na transformação digital de grandes indústrias.',
        items: [
          'Suporte Enterprise 24/7',
          'Consultoria de automação dedicada',
          'Metodologias ágeis de implementação'
        ],
        visualLabel: 'Impact Map'
      }
    ]"
  />
</template>

<script setup lang="ts">
import ProductTemplate from '~/components/ProductTemplate.vue'

useHead({
  title: 'Sobre Nós | Flux - Inteligência Artificial para Empresas',
  meta: [
    { name: 'description', content: 'Conheça a história e a missão da Flux. Liderando o futuro do atendimento ao cliente com IA.' }
  ]
})
</script>
