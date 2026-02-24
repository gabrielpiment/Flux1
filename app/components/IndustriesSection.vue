<template>
  <section id="industries-section" class="industries-section">
    <div class="container">
      <div class="industries-header">
        <h2 class="text-gradient" v-motion-fade-visible>Uma plataforma para sua empresa</h2>
      </div>
    </div>

    <!-- Auto-scrolling carousel -->
    <div class="industries-carousel-wrapper" v-motion-fade-visible>
      <div class="industries-track">
        <div
          v-for="(industry, index) in [...companies, ...companies]"
          :key="index"
          class="industry-card"
        >
          <img :src="industry.image" :alt="industry.title" class="industry-image" loading="lazy">
          <div class="industry-content">
            <h3 class="brand-gradient">{{ industry.title }}</h3>
            <p>{{ industry.description }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const companies = [
  {
    title: 'Varejo e E-commerce',
    description: 'Automatize vendas e suporte pós-compra em escala.',
    image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80&w=800'
  },
  {
    title: 'Serviços de Saúde',
    description: 'Agendamentos e triagem inteligente com total privacidade.',
    image: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=800'
  },
  {
    title: 'Educação e Cursos',
    description: 'Atendimento a alunos e captação de leads 24/7.',
    image: 'https://images.unsplash.com/photo-1580582932707-520aed937b7b?auto=format&fit=crop&q=80&w=800'
  },
  {
    title: 'Imobiliárias',
    description: 'Qualifique leads e agende visitas automaticamente.',
    image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&q=80&w=800'
  },
  {
    title: 'Clínicas e Estéticas',
    description: 'Confirmação de consultas e pós-atendimento sem esforço.',
    image: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&q=80&w=800'
  },
  {
    title: 'Advocacia e Jurídico',
    description: 'Triagem de clientes e gestão de prazos com IA.',
    image: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&q=80&w=800'
  },
  {
    title: 'Restaurantes e Delivery',
    description: 'Pedidos, reservas e fidelização via WhatsApp.',
    image: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&q=80&w=800'
  },
  {
    title: 'Financeiras e Seguros',
    description: 'Atendimento regulado e compliant em todos os canais.',
    image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&q=80&w=800'
  },
  {
    title: 'Tecnologia e SaaS',
    description: 'Suporte técnico ágil e onboarding automatizado.',
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=800'
  },
]

</script>
