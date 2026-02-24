<template>
  <section id="features-section" class="features-section">
    <div class="container">

      <div class="features-header" v-motion-fade-visible>
        <span class="features-eyebrow">FUNCIONALIDADES</span>
        <h2>Tudo o que sua equipe precisa, <span class="brand-gradient">em um só lugar</span></h2>
        <p>Da automação à análise, a Fluxconversa entrega o kit completo para transformar sua operação de atendimento.</p>
      </div>

      <!-- Bento Grid -->
      <div class="features-bento">

        <!-- Featured card: IA Nativa (large) -->
        <div class="feat-card feat-card--featured" v-motion-fade-visible>
          <div class="feat-card__glow"></div>
          <div class="feat-icon feat-icon--lg">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" width="32" height="32">
              <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" stroke-linejoin="round"/>
              <circle cx="12" cy="12" r="3" fill="currentColor"/>
            </svg>
          </div>
          <div class="feat-card__number">01</div>
          <h3>IA Nativa em Tempo Real</h3>
          <p>Não é um chatbot genérico. É uma inteligência treinada no contexto do seu negócio que entende intenções, classifica leads e resolve problemas de forma autônoma — 24/7.</p>
          <div class="feat-card__tags">
            <span>Processamento de linguagem</span>
            <span>Classificação de intenção</span>
            <span>Resolução autônoma</span>
          </div>
        </div>

        <!-- Card: Omnichannel -->
        <div class="feat-card feat-card--tall" v-motion-fade-visible>
          <div class="feat-icon">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" width="24" height="24">
              <rect x="2" y="3" width="7" height="18" rx="1"/>
              <rect x="15" y="3" width="7" height="18" rx="1"/>
              <rect x="9.5" y="7" width="5" height="14" rx="1"/>
            </svg>
          </div>
          <div class="feat-card__number">02</div>
          <h3>Caixa Omnichannel</h3>
          <p>WhatsApp, Instagram, Facebook, Telegram, OLX e mais — tudo centralizado em uma única interface inteligente.</p>
        </div>

        <!-- Card: Campanhas -->
        <div class="feat-card" v-motion-fade-visible>
          <div class="feat-icon">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" width="24" height="24">
              <path d="M22 2L11 13"/>
              <path d="M22 2L15 22L11 13L2 9L22 2Z" stroke-linejoin="round"/>
            </svg>
          </div>
          <div class="feat-card__number">03</div>
          <h3>Campanhas em Massa</h3>
          <p>Envie mensagens segmentadas para listas específicas e automatize disparos com personalização.</p>
        </div>

        <!-- Card: Follow-Up -->
        <div class="feat-card" v-motion-fade-visible>
          <div class="feat-icon">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" width="24" height="24">
              <path d="M21.5 2v6h-6"/>
              <path d="M21.34 15.57a10 10 0 1 1-.57-8.38"/>
            </svg>
          </div>
          <div class="feat-card__number">04</div>
          <h3>Follow-Up Automático</h3>
          <p>Acompanhe cada cliente automaticamente e mantenha o contato ativo sem intervenção manual.</p>
        </div>

        <!-- Card: Transcrição (wide) -->
        <div class="feat-card feat-card--wide" v-motion-fade-visible>
          <div class="feat-icon">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" width="24" height="24">
              <path d="M12 2a3 3 0 0 1 3 3v7a3 3 0 0 1-6 0V5a3 3 0 0 1 3-3Z"/>
              <path d="M19 10v2a7 7 0 0 1-14 0v-2"/>
              <line x1="12" y1="19" x2="12" y2="22"/>
              <line x1="8" y1="22" x2="16" y2="22"/>
            </svg>
          </div>
          <div class="feat-card__number">05</div>
          <h3>Transcrição de Áudios</h3>
          <p>Transforme mensagens de voz em texto em segundos. IA que entende sotaques e gera resumo automático das conversas.</p>
          <div class="feat-card__wave" aria-hidden="true">
            <span v-for="i in 20" :key="i" :style="{ height: waveHeight(i) }"></span>
          </div>
        </div>

        <!-- Card: Relatórios -->
        <div class="feat-card" v-motion-fade-visible>
          <div class="feat-icon">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" width="24" height="24">
              <line x1="18" y1="20" x2="18" y2="10"/>
              <line x1="12" y1="20" x2="12" y2="4"/>
              <line x1="6"  y1="20" x2="6"  y2="14"/>
            </svg>
          </div>
          <div class="feat-card__number">06</div>
          <h3>Relatórios em Tempo Real</h3>
          <p>Métricas de desempenho, SLA e volume de atendimento com dashboards ao vivo.</p>
        </div>

        <!-- Card: Respostas Rápidas -->
        <div class="feat-card" v-motion-fade-visible>
          <div class="feat-icon">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" width="24" height="24">
              <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" stroke-linejoin="round"/>
            </svg>
          </div>
          <div class="feat-card__number">07</div>
          <h3>Respostas Rápidas</h3>
          <p>Atalhos inteligentes para mensagens frequentes, mantendo a personalização em cada resposta.</p>
        </div>

        <!-- Card: Chat Interno -->
        <div class="feat-card" v-motion-fade-visible>
          <div class="feat-icon">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" width="24" height="24">
              <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
            </svg>
          </div>
          <div class="feat-card__number">08</div>
          <h3>Chat Interno</h3>
          <p>Comunicação entre a equipe em tempo real, diretamente dentro da plataforma.</p>
        </div>

        <!-- Card: Controle Total dos Atendimentos -->
        <div class="feat-card feat-card--control" v-motion-fade-visible>
          <div class="feat-icon">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" width="24" height="24">
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
            </svg>
          </div>
          <div class="feat-card__number">09</div>
          <h3>Controle Total dos Atendimentos</h3>
          <p>Distribua conversas, defina SLAs, monitore agentes e garanta que nenhum cliente fique sem resposta.</p>
          <!-- Control stats mini -->
          <div class="feat-control-stats" aria-hidden="true">
            <div class="ctrl-stat">
              <span class="ctrl-stat__value">98%</span>
              <span class="ctrl-stat__label">SLA cumprido</span>
            </div>
            <div class="ctrl-divider"></div>
            <div class="ctrl-stat">
              <span class="ctrl-stat__value">&lt;2min</span>
              <span class="ctrl-stat__label">Tempo resposta</span>
            </div>
          </div>
        </div>

        <!-- Card: Kanban Multifunil (wide) -->
        <div class="feat-card feat-card--wide feat-card--kanban" v-motion-fade-visible>
          <div class="feat-icon">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" width="24" height="24">
              <rect x="2"  y="3" width="5" height="18" rx="1"/>
              <rect x="9"  y="3" width="5" height="12" rx="1"/>
              <rect x="16" y="3" width="5" height="15" rx="1"/>
            </svg>
          </div>
          <div class="feat-card__number">10</div>
          <h3>Kanban Multifunil</h3>
          <p>Visualize e mova seus leads por etapas personalizadas de venda — múltiplos funis, uma visão clara do pipeline.</p>
          <!-- Mini kanban visual -->
          <div class="feat-kanban-preview" aria-hidden="true">
            <div class="kanban-col">
              <span class="kanban-col__label">Novo</span>
              <div class="kanban-card kc-1"></div>
              <div class="kanban-card kc-2"></div>
              <div class="kanban-card kc-3"></div>
            </div>
            <div class="kanban-col">
              <span class="kanban-col__label">Contato</span>
              <div class="kanban-card kc-2"></div>
              <div class="kanban-card kc-1"></div>
            </div>
            <div class="kanban-col">
              <span class="kanban-col__label">Proposta</span>
              <div class="kanban-card kc-3"></div>
              <div class="kanban-card kc-2"></div>
              <div class="kanban-card kc-1"></div>
            </div>
            <div class="kanban-col">
              <span class="kanban-col__label">Fechado</span>
              <div class="kanban-card kc-active"></div>
              <div class="kanban-card kc-active"></div>
            </div>
          </div>
        </div>

        <!-- Card: Follow-Ups Automáticos -->
        <div class="feat-card feat-card--followup" v-motion-fade-visible>
          <div class="feat-icon">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" width="24" height="24">
              <circle cx="12" cy="12" r="10"/>
              <polyline points="12 6 12 12 16 14"/>
            </svg>
          </div>
          <div class="feat-card__number">11</div>
          <h3>Follow-Ups Automáticos</h3>
          <p>Sequências de mensagens programadas por tempo ou gatilho, para nenhum lead esfriar.</p>
          <!-- Mini timeline -->
          <div class="feat-timeline" aria-hidden="true">
            <div class="timeline-item timeline-item--done">
              <span class="tl-dot"></span>
              <span class="tl-text">1º contato enviado</span>
            </div>
            <div class="timeline-item timeline-item--done">
              <span class="tl-dot"></span>
              <span class="tl-text">Lembrete em 24h</span>
            </div>
            <div class="timeline-item timeline-item--active">
              <span class="tl-dot"></span>
              <span class="tl-text">Follow-up dia 3</span>
            </div>
            <div class="timeline-item">
              <span class="tl-dot"></span>
              <span class="tl-text">Reengajamento dia 7</span>
            </div>
          </div>
        </div>

      </div>
    </div>
  </section>

</template>

<script setup lang="ts">
function waveHeight(i: number): string {
  const heights = [30, 55, 80, 45, 95, 60, 35, 70, 50, 85, 40, 75, 55, 90, 45, 65, 35, 80, 50, 60]
  return heights[(i - 1) % heights.length] + '%'
}
</script>
