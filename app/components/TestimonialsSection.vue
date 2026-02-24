<template>
  <section id="testimonials-section" class="testimonials">
    <div class="container">
      <h2 class="text-gradient" v-motion :initial="{ opacity: 0, y: 30 }"
        :visible="{ opacity: 1, y: 0, transition: { duration: 600 } }">O que nossos clientes dizem</h2>
      <div class="testimonials-grid">
        <div v-for="(testimonial, index) in testimonials" :key="index" class="testimonial-card" v-motion
          :initial="{ opacity: 0, y: 40 }"
          :visible="{ opacity: 1, y: 0, transition: { delay: index * 150, duration: 600 } }">
          <div class="testimonial-content">
            "{{ testimonial.text }}"
          </div>
          <div class="testimonial-author">
            <div class="author-info">
              <h4>{{ testimonial.name }}</h4>
              <p>{{ testimonial.role }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const testimonials = [
  { text: 'A Flux transformou nossa comunicação. A IA resolve 80% dos chamados sem intervenção humana.', name: 'Ana Silva', role: 'CEO na TechLog' },
  { text: 'O suporte omnichannel é impecável. Nossos clientes nunca ficaram tão satisfeitos.', name: 'Marcos Oliveira', role: 'Diretor de CX' },
  { text: 'Resultado imediato. A latência de resposta caiu para menos de 1 segundo.', name: 'Julia Costa', role: 'Gerente Comercial' },
  { text: 'A integração com o WhatsApp oficial mudou o jogo para nosso time de vendas.', name: 'Ricardo Santos', role: 'Head de Vendas' },
  { text: 'Nunca foi tão fácil gerenciar múltiplos canais. A Flux centraliza tudo com perfeição.', name: 'Carla Dias', role: 'Coordenadora de Atendimento' },
  { text: 'Escalamos nossa operação para 12 estados sem contratar um único atendente extra.', name: 'Fernanda Lima', role: 'Gerente de Operações' }
]
</script>
