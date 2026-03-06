<template>
  <ProductTemplate eyebrow="Canais" :title-lines="['E-mail Centralizado', 'Simples e Direto']"
    description="Receba e envie seus e-mails diretamente pela plataforma. Gerencie suas mensagens eletrônicas junto com seus outros canais de atendimento."
    :features="[
      { icon: '📩', title: 'Recebimento Básico', description: 'Receba seus e-mails em tempo real na sua caixa de entrada unificada.' },
      { icon: '📤', title: 'Envio de Respostas', description: 'Responda aos seus clientes de forma rápida sem sair da interface da Flux.' },
      { icon: '📎', title: 'Gestão de Anexos', description: 'Visualize e envie arquivos anexados às suas conversas de e-mail.' }
    ]" :details="[
      {
        title: 'Tudo em um só lugar',
        description: 'Elimine a necessidade de trocar entre abas. Seus e-mails aparecem organizados ao lado das suas outras conversas.',
        items: [
          'Interface limpa e intuitiva',
          'Histórico de mensagens por contato',
          'Visualização de destinatários e remetentes'
        ],
        visualLabel: 'Unified Inbox'
      },
      {
        title: 'Foco na Conversa',
        description: 'Trate o e-mail como mais um canal de atendimento direto, focando na resolução do problema do cliente.',
        items: [
          'Respostas rápidas para produtividade',
          'Marcação de e-mails lidos/não lidos',
          'Filtro simples de busca por e-mail'
        ],
        visualLabel: 'Email Management'
      },
      {
        title: 'Configuração Rápida',
        description: 'Conecte sua conta de e-mail em poucos minutos e comece a atender seus clientes imediatamente.',
        items: [
          'Configuração via IMAP/SMTP',
          'Integração direta com o provedor',
          'Suporte a domínios personalizados'
        ],
        visualLabel: 'Quick Setup'
      }
    ]" />
</template>

<script setup lang="ts">
import ProductTemplate from '~/components/ProductTemplate.vue'

useHead({
  title: 'E-mail Marketing | Flux - Comunicação Omnichannel',
  meta: [
    { name: 'description', content: 'Potencialize sua comunicação com e-mail marketing integrado. Campanhas automatizadas e alta entregabilidade com a Flux.' }
  ]
})
</script>
