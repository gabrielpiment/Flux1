<template>
  <section id="features-section" class="py-24 relative overflow-hidden bg-[#0d0f18]">
    <div class="container relative z-10">
      <div class="text-center mb-16" v-motion-fade-visible>
        <h2 class="text-4xl md:text-5xl font-black mb-6 leading-tight">
          Tudo o que sua equipe precisa,<br>
          <span class="text-primary-500 bg-clip-text text-transparent bg-gradient-to-r from-primary-400 to-blue-600" style="color: #0072f5;">em um só lugar</span>
        </h2>
        <p class="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto font-medium">
          O Legendary entrega o kit completo para transformar sua operação de atendimento em uma máquina de vendas.
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-6 auto-rows-[220px]">
        <!-- 1. Campanhas em Massa (col-span-2) -->
        <div class="group relative glass-panel-premium overflow-hidden p-8 flex flex-col justify-between transition-all duration-500 hover:border-primary-500/30 hover:shadow-[0_0_40px_-10px_rgba(0,114,245,0.2)] md:col-span-2">
          <div class="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>
          <div class="absolute -inset-px bg-gradient-to-br from-primary-500/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          <div class="relative z-10">
            <div class="feat-icon-container w-12 h-12 rounded-xl bg-primary-500/10 flex items-center justify-center text-primary-400 mb-6 group-hover:scale-110 group-hover:bg-primary-500/20 transition-all duration-500 border border-primary-500/20" style="color: #0072f5;">
              <div class="w-6 h-6 flex items-center justify-center">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" width="24" height="24">
                  <path d="M22 2L11 13"/>
                  <path d="M22 2L15 22L11 13L2 9L22 2Z" stroke-linejoin="round"/>
                </svg>
              </div>
            </div>
            <h3 class="text-xl font-bold text-white mb-3 group-hover:text-primary-400 transition-colors">Campanhas em Massa</h3>
            <p class="text-gray-400 text-sm leading-relaxed font-medium line-clamp-3 group-hover:text-gray-300 transition-colors">
              Envie mensagens segmentadas para listas específicas e automatize disparos com personalização dinâmica para cada lead.
            </p>
          </div>
        </div>

        <!-- 2. Dashboard ao Vivo (row-span-2) -->
        <div class="group relative glass-panel-premium overflow-hidden p-8 flex flex-col justify-between transition-all duration-500 hover:border-primary-500/30 hover:shadow-[0_0_40px_-10px_rgba(0,114,245,0.2)] md:row-span-2">
          <div class="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>
          <div class="absolute -inset-px bg-gradient-to-br from-primary-500/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          <div class="relative z-10">
            <div class="feat-icon-container w-12 h-12 rounded-xl bg-primary-500/10 flex items-center justify-center text-primary-400 mb-6 group-hover:scale-110 group-hover:bg-primary-500/20 transition-all duration-500 border border-primary-500/20" style="color: #0072f5;">
              <div class="w-6 h-6 flex items-center justify-center">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" width="24" height="24">
                  <line x1="18" y1="20" x2="18" y2="10"/>
                  <line x1="12" y1="20" x2="12" y2="4"/>
                  <line x1="6"  y1="20" x2="6"  y2="14"/>
                </svg>
              </div>
            </div>
            <h3 class="text-xl font-bold text-white mb-3 group-hover:text-primary-400 transition-colors">Dashboard ao Vivo</h3>
            <p class="text-gray-400 text-sm leading-relaxed font-medium line-clamp-3 group-hover:text-gray-300 transition-colors">
              Métricas de desempenho, SLA e volume de atendimento com atualizações em tempo real para sua gestão.
            </p>
          </div>
        </div>

        <!-- 3. Transcrição de Áudios (col-span-1) -->
        <div class="group relative glass-panel-premium overflow-hidden p-8 flex flex-col justify-between transition-all duration-500 hover:border-primary-500/30 hover:shadow-[0_0_40px_-10px_rgba(0,114,245,0.2)] md:col-span-1">
          <div class="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>
          <div class="absolute -inset-px bg-gradient-to-br from-primary-500/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          <div class="relative z-10">
            <div class="feat-icon-container w-12 h-12 rounded-xl bg-primary-500/10 flex items-center justify-center text-primary-400 mb-6 group-hover:scale-110 group-hover:bg-primary-500/20 transition-all duration-500 border border-primary-500/20" style="color: #0072f5;">
              <div class="w-6 h-6 flex items-center justify-center">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" width="24" height="24">
                  <path d="M12 2a3 3 0 0 1 3 3v7a3 3 0 0 1-6 0V5a3 3 0 0 1 3-3Z"/>
                  <path d="M19 10v2a7 7 0 0 1-14 0v-2"/>
                  <line x1="12" y1="19" x2="12" y2="22"/>
                  <line x1="8" y1="22" x2="16" y2="22"/>
                </svg>
              </div>
            </div>
            <h3 class="text-xl font-bold text-white mb-3 group-hover:text-primary-400 transition-colors">Transcrição de Áudios</h3>
            <p class="text-gray-400 text-sm leading-relaxed font-medium line-clamp-3 group-hover:text-gray-300 transition-colors">
              Transforme mensagens de voz em texto instantaneamente com IA. Gere resumos automáticos para economizar tempo.
            </p>
          </div>
        </div>

        <!-- 4. Alertas de Vendas (col-span-1) -->
        <div class="group relative glass-panel-premium overflow-hidden p-8 flex flex-col justify-between transition-all duration-500 hover:border-primary-500/30 hover:shadow-[0_0_40px_-10px_rgba(0,114,245,0.2)] md:col-span-1">
          <div class="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>
          <div class="absolute -inset-px bg-gradient-to-br from-primary-500/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          <div class="relative z-10">
            <div class="feat-icon-container w-12 h-12 rounded-xl bg-primary-500/10 flex items-center justify-center text-primary-400 mb-6 group-hover:scale-110 group-hover:bg-primary-500/20 transition-all duration-500 border border-primary-500/20" style="color: #0072f5;">
              <div class="w-6 h-6 flex items-center justify-center">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" width="24" height="24">
                  <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/><path d="M13.73 21a2 2 0 0 1-3.46 0"/>
                </svg>
              </div>
            </div>
            <h3 class="text-xl font-bold text-white mb-3 group-hover:text-primary-400 transition-colors">Alertas de Vendas</h3>
            <p class="text-gray-400 text-sm leading-relaxed font-medium line-clamp-3 group-hover:text-gray-300 transition-colors">
              Receba avisos imediatos de vendas do Hotmart, Kiwify e outras plataformas diretamente no seu painel.
            </p>
          </div>
        </div>

        <!-- 5. Gestão por Setores (col-span-2) -->
        <div class="group relative glass-panel-premium overflow-hidden p-8 flex flex-col justify-between transition-all duration-500 hover:border-primary-500/30 hover:shadow-[0_0_40px_-10px_rgba(0,114,245,0.2)] md:col-span-2">
          <div class="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>
          <div class="absolute -inset-px bg-gradient-to-br from-primary-500/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          <div class="relative z-10">
            <div class="feat-icon-container w-12 h-12 rounded-xl bg-primary-500/10 flex items-center justify-center text-primary-400 mb-6 group-hover:scale-110 group-hover:bg-primary-500/20 transition-all duration-500 border border-primary-500/20" style="color: #0072f5;">
              <div class="w-6 h-6 flex items-center justify-center">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" width="24" height="24">
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>
                </svg>
              </div>
            </div>
            <h3 class="text-xl font-bold text-white mb-3 group-hover:text-primary-400 transition-colors">Gestão por Setores</h3>
            <p class="text-gray-400 text-sm leading-relaxed font-medium line-clamp-3 group-hover:text-gray-300 transition-colors">
              Organize sua equipe por departamentos e distribua conversas automaticamente para os atendentes certos.
            </p>
          </div>
        </div>

        <!-- 6. Chat Interno (col-span-1) -->
        <div class="group relative glass-panel-premium overflow-hidden p-8 flex flex-col justify-between transition-all duration-500 hover:border-primary-500/30 hover:shadow-[0_0_40px_-10px_rgba(0,114,245,0.2)] md:col-span-1">
          <div class="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>
          <div class="absolute -inset-px bg-gradient-to-br from-primary-500/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          <div class="relative z-10">
            <div class="feat-icon-container w-12 h-12 rounded-xl bg-primary-500/10 flex items-center justify-center text-primary-400 mb-6 group-hover:scale-110 group-hover:bg-primary-500/20 transition-all duration-500 border border-primary-500/20" style="color: #0072f5;">
              <div class="w-6 h-6 flex items-center justify-center">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" width="24" height="24">
                  <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
                </svg>
              </div>
            </div>
            <h3 class="text-xl font-bold text-white mb-3 group-hover:text-primary-400 transition-colors">Chat Interno</h3>
            <p class="text-gray-400 text-sm leading-relaxed font-medium line-clamp-3 group-hover:text-gray-300 transition-colors">
              Comunique-se com sua equipe em tempo real sem sair da plataforma, agilizando a resolução de problemas.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

.text-center {
  text-align: center;
}

.mx-auto {
  margin-left: auto;
  margin-right: auto;
}

.grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 20px;
}

@media (min-width: 768px) {
  .grid {
    grid-template-columns: repeat(3, 1fr);
    grid-auto-rows: 250px;
  }
  .md\:col-span-2 {
    grid-column: span 2;
  }
  .md\:row-span-2 {
    grid-row: span 2;
  }
}

.glass-panel-premium {
  background: rgba(255, 255, 255, 0.03);
  backdrop-filter: blur(24px);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 24px;
  padding: 28px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: relative;
  overflow: hidden;
  transition: all 0.5s ease;
}

.feat-icon-container {
  width: 48px;
  height: 48px;
  border-radius: 12px;
  background: rgba(0, 114, 245, 0.1);
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid rgba(0, 114, 245, 0.2);
  margin-bottom: 16px;
  transition: all 0.5s ease;
}

.glass-panel-premium:hover .feat-icon-container {
  transform: scale(1.1);
  background: rgba(0, 114, 245, 0.2);
}

h3 {
  font-size: 1.25rem;
  font-weight: 700;
  color: #fff;
  margin: 0 0 12px 0;
  transition: color 0.3s ease;
}

.glass-panel-premium:hover h3 {
  color: #0072f5;
}

p {
  color: #94a3b8;
  font-size: 0.875rem;
  line-height: 1.625;
  font-weight: 500;
  margin: 0;
  transition: color 0.3s ease;
}

.glass-panel-premium:hover p {
  color: #cbd5e1;
}

.line-clamp-3 {
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>
