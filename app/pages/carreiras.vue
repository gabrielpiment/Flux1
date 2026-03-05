<template>
  <ProductTemplate
    eyebrow="Trabalhe Conosco"
    :title-lines="['Construa o Futuro', 'Da IA com a Gente']"
    description="Buscamos mentes inquietas e apaixonadas por tecnologia para escalar a revolução da inteligência artificial no Brasil e no mundo."
    :features="[
      { icon: '💻', title: 'Trabalho Híbrido', description: 'Liberdade para trabalhar de onde você for mais produtivo, com escritório em SP.' },
      { icon: '📈', title: 'Crescimento Acelerado', description: 'Plano de carreira claro e oportunidades reais de liderança em projetos globais.' },
      { icon: '🧠', title: 'Desfio Técnico', description: 'Resolva problemas de escala massiva usando as tecnologias mais modernas de IA.' }
    ]"
    :details="[
      {
        title: 'Por que a Flux?',
        description: 'Aqui, você não é apenas mais um colaborador. Você é parte vital de uma equipe que está definindo os novos padrões da web.',
        items: [
          'Cultura de feedback constante',
          'Horários flexíveis e foco em metas',
          'Equipamentos de ponta (Macbook Pro)'
        ],
        visualLabel: 'Benefits'
      },
      {
        title: 'Nossas Áreas',
        description: 'Temos oportunidades recorrentes para engenharia, produto, design, vendas e sucesso do cliente.',
        items: [
          'Engenharia de IA e NLP',
          'Desenvolvimento Fullstack (JS/TS)',
          'Product Management & Design'
        ],
        visualLabel: 'Squads'
      },
      {
        title: 'Processo Seletivo',
        description: 'Transparência desde o primeiro contato. Nosso processo é focado em competência técnica e fit cultural.',
        items: [
          'Entrevistas técnicas objetivas',
          'Desafios práticos reais',
          'Onboarding estruturado de 30 dias'
        ],
        visualLabel: 'Recruitment'
      }
    ]"
  />
</template>

<script setup lang="ts">
import ProductTemplate from '~/components/ProductTemplate.vue'

useHead({
  title: 'Carreiras | Flux - Una-se ao Time',
  meta: [
    { name: 'description', content: 'Venha construir o futuro da IA na Flux. Confira nossas vagas e cultura de trabalho.' }
  ]
})
</script>
