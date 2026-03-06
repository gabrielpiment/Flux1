<template>
  <ProductTemplate eyebrow="Ecossistema" :title-lines="['Cresça Junto com', 'A Nossa Plataforma']"
    description="Seja um parceiro Flux e ofereça a melhor tecnologia de IA para seus clientes enquanto aumenta sua receita recorrente."
    :features="[
      { icon: '🤝', title: 'Programa de Indicação', description: 'Seja recompensado por cada novo cliente que você trouxer para a Flux.' },
      { icon: '🛠️', title: 'Suporte Comercial', description: 'Acesso direto ao nosso time para ajudar no fechamento das suas propostas.' },
      { icon: '🎓', title: 'Treinamento Master', description: 'Capacite sua equipe para dominar todas as funcionalidades da nossa plataforma.' }
    ]" :details="[
      {
        title: 'Vantagens do Parceiro',
        description: 'Cresça junto com a Flux através de um modelo de parceria focado em resultados reais.',
        items: [
          'Painel de gestão de indicações',
          'Material de vendas white-label',
          'Suporte prioritário na engenharia'
        ],
        visualLabel: 'Partner Benefits'
      },
      {
        title: 'Integração e Suporte',
        description: 'Não deixamos você sozinho. Oferecemos todo o apoio necessário para o sucesso dos seus clientes.',
        items: [
          'Documentação de API completa',
          'Webinars técnicos exclusivos',
          'Gerente de conta dedicado'
        ],
        visualLabel: 'Ops Support'
      },
      {
        title: 'Vantagens Exclusivas',
        description: 'Parceiros Flux têm acesso antecipado a novas funcionalidades e suporte direto da nossa engenharia.',
        items: [
          'Eventos exclusivos para parceiros'
        ],
        visualLabel: 'Exclusive Perks'
      }
    ]" />
</template>

<script setup lang="ts">
import ProductTemplate from '~/components/ProductTemplate.vue'

useHead({
  title: 'Parcerias | Flux - Ecossistema de IA',
  meta: [
    { name: 'description', content: 'Torne-se um parceiro Flux. Leve a inteligência artificial para seus clientes e escale seu negócio.' }
  ]
})
</script>
