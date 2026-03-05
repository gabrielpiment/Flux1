<template>
  <ProductTemplate
    eyebrow="Ecossistema"
    :title-lines="['Cresça Junto com', 'A Nossa Plataforma']"
    description="Seja um parceiro Flux e ofereça a melhor tecnologia de IA para seus clientes enquanto aumenta sua receita recorrente."
    :features="[
      { icon: '🤝', title: 'Parceria de Revenda', description: 'Implemente a Flux em seus clientes e ganhe comissão recorrente vitalícia.' },
      { icon: '🔌', title: 'Parceria Tech', description: 'Integre sua solução via API e crie experiências únicas para o mercado.' },
      { icon: '🎓', title: 'Certificação Flux', description: 'Torne-se um especialista certificado em nossa IA e ganhe visibilidade.' }
    ]"
    :details="[
      {
        title: 'Programa de Canais',
        description: 'Desenhado para agências, consultorias e empresas de tecnologia que querem estar na vanguarda da IA.',
        items: [
          'Gestor de conta dedicado',
          'Material de marketing white-label',
          'Treinamento técnico e comercial'
        ],
        visualLabel: 'Partnership Program'
      },
      {
        title: 'API Enterprise p/ Parceiros',
        description: 'Nossa documentação completa permite que você construa extensões e novos aplicativos sobre a engine Flux.',
        items: [
          'Webhooks e APIs de baixa latência',
          'Ambiente de Sandbox dedicado',
          'Suporte técnico prioritário p/ devs'
        ],
        visualLabel: 'Dev Ecosystem'
      },
      {
        title: 'Vantagens Exclusivas',
        description: 'Parceiros Flux têm acesso antecipado a novas funcionalidades e suporte direto da nossa engenharia.',
        items: [
          'Early access (Beta testing)',
          'Co-marketing e eventos conjuntos',
          'Eventos exclusivos para parceiros'
        ],
        visualLabel: 'Exclusive Perks'
      }
    ]"
  />
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
