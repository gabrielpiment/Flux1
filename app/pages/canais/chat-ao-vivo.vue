<template>
  <ProductTemplate eyebrow="Canal" :title-lines="['Chat ao Vivo', 'Conversão em Segundos']"
    description="Capture visitantes no momento de maior interesse. Nosso widget de chat é leve, personalizável e integrado a todos os seus fluxos de IA."
    :features="[
      { icon: '💬', title: 'Widget Customizável', description: 'Ajuste cores, fontes e posição para combinar perfeitamente com sua marca.' },
      { icon: '🔔', title: 'Gatilhos Proativos', description: 'Inicie conversas baseadas no tempo de navegação ou páginas visitadas.' },
      { icon: '🤝', title: 'Hand-off para Humanos', description: 'Transição suave da IA para atendentes humanos quando necessário.' }
    ]" :details="[
      {
        title: 'Proatividade Conversacional',
        description: 'Não espere o cliente chamar. Use a IA para identificar o momento certo de oferecer ajuda baseado no comportamento.',
        items: [
          'Convites de chat baseados em URL',
          'Saudações personalizadas por origem',
          'Identificação de clientes recorrentes'
        ],
        visualLabel: 'Proactive Widget'
      },
      {
        title: 'Integração com sua Stack',
        description: 'Seu chat não é uma ilha. Conecte dados de CRM e ERP diretamente no widget de atendimento.',
        items: [
          'Visualização de perfil do cliente',
          'Acesso a pedidos em tempo real',
          'Sincronização 2-way com banco de dados'
        ],
        visualLabel: 'Connected Data'
      },
      {
        title: 'Acesso Mobile via Navegador',
        description: 'Atenda seus clientes de qualquer lugar acessando a plataforma diretamente pelo navegador do seu smartphone.',
        items: [
          'Interface otimizada para telas pequenas',
          'Gestão de conversas em tempo real',
          'Acesso a todo o histórico de mensagens'
        ],
        visualLabel: 'Mobile Access'
      }
    ]" />
</template>

<script setup lang="ts">
import ProductTemplate from '~/components/ProductTemplate.vue'

useHead({
  title: 'Chat ao Vivo | Flux - Atendimento em Tempo Real',
  meta: [
    { name: 'description', content: 'Converta visitantes em clientes com o chat ao vivo da Flux. Widget inteligente e integrado para seu site.' }
  ]
})
</script>
