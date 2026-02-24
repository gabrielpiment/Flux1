<template>
    <div class="pricing-page">
        <div class="container hero-wrap">
            <div class="pricing-header">
                <h1 class="text-gradient">Planos</h1>
            </div>

            <div class="pricing-grid">
                <!-- Starter Plan -->
                <div class="pricing-card" v-motion-fade-visible>
                    <div class="card-header">
                        <span class="plan-type">Iniciante</span>
                        <h3 class="plan-name">Starter Digital Flux</h3>
                        <div class="plan-price">
                            <span class="currency">R$ 98</span>
                            <span class="period">/mês</span>
                        </div>
                    </div>
                    <div class="card-body">
                        <ul class="plan-features">
                            <li class="check">1 Conexão WhatsApp Api Meow</li>
                            <li class="check">1 Usuário</li>
                            <li class="check">Disparos em massa</li>
                            <li class="check">Automação de fluxo</li>
                            <li class="check">Kanban simples (1 Funil)</li>
                            <li class="cross">Integrações com APIs</li>
                            <li class="cross">Integrações sociais (Facebook e Instagram)</li>
                            <li class="cross">Agente de IA</li>
                            <li class="cross">WhatsApp Api oficial</li>
                            <li class="cross">Conexões OLX e Mercado Livre</li>
                            <li class="cross">Chat Interno</li>
                        </ul>
                    </div>
                    <div class="card-footer">
                        <button class="btn-outline">Vamos começar</button>
                    </div>
                </div>

                <!-- Basic Plan -->
                <div class="pricing-card" v-motion-fade-visible>
                    <div class="card-header">
                        <span class="plan-type">Padrão</span>
                        <h3 class="plan-name">Digital Flux</h3>
                        <div class="plan-price">
                            <span class="currency">R$ 299</span>
                            <span class="period">/mês</span>
                        </div>
                    </div>
                    <div class="card-body">
                        <ul class="plan-features">
                            <li class="check">1 Conexão WhatsApp Api Meow</li>
                            <li class="check">1 Conexão WhatsApp Api Oficial</li>
                            <li class="check">5 Usuários</li>
                            <li class="check">Disparos em massa</li>
                            <li class="check">Automação de fluxo</li>
                            <li class="check">Kanban Pro Multifunil</li>
                            <li class="check">Integrações com APIs</li>
                            <li class="check">Chat Interno</li>
                            <li class="cross">Integrações sociais (Facebook e Instagram)</li>
                            <li class="cross">Agente de IA</li>
                            <li class="cross">Conexões OLX e Mercado Livre</li>
                        </ul>
                    </div>
                    <div class="card-footer">
                        <button class="btn-outline">Vamos começar</button>
                    </div>
                </div>

                <!-- Growth Plan (Popular) -->
                <div class="pricing-card pricing-card--popular" v-motion-fade-visible>
                    <div class="popular-badge">Mais Popular</div>
                    <div class="card-header">
                        <span class="plan-type">Escalável</span>
                        <h3 class="plan-name">Growth Digital Flux</h3>
                        <div class="plan-price">
                            <span class="currency">R$ 599</span>
                            <span class="period">/mês</span>
                        </div>
                    </div>
                    <div class="card-body">
                        <ul class="plan-features">
                            <li class="check">2 Conexões WhatsApp Api Meow</li>
                            <li class="check">2 Conexões WhatsApp Api Oficial</li>
                            <li class="check">10 Usuários</li>
                            <li class="check">Disparos em massa</li>
                            <li class="check">Automação de fluxo</li>
                            <li class="check">Integrações com APIs</li>
                            <li class="check">Integrações sociais (Facebook e Instagram)</li>
                            <li class="check">Chat Interno</li>
                            <li class="check">Agente de IA</li>
                            <li class="check">Kanban Pro Multifunil</li>
                            <li class="cross">Conexões OLX e Mercado Livre</li>
                        </ul>
                    </div>
                    <div class="card-footer">
                        <button class="btn-white">Dê um Upgrade</button>
                    </div>
                </div>

                <!-- Pro Plan (Enterprise) -->
                <div class="pricing-card" v-motion-fade-visible>
                    <div class="enterprise-badge">Enterprise</div>
                    <div class="card-header">
                        <span class="plan-type">Premium</span>
                        <h3 class="plan-name">Pro Digital Flux</h3>
                        <div class="plan-price">
                            <span class="currency">R$ 899</span>
                            <span class="period">/mês</span>
                        </div>
                    </div>
                    <div class="card-body">
                        <ul class="plan-features">
                            <li class="check">3 Conexões WhatsApp Api Meow</li>
                            <li class="check">3 Conexões WhatsApp Api Oficial</li>
                            <li class="check">15 Usuários</li>
                            <li class="check">Disparos em massa</li>
                            <li class="check">Automação de fluxo</li>
                            <li class="check">Integrações com APIs</li>
                            <li class="check">Integrações sociais (Facebook e Instagram)</li>
                            <li class="check">Chat Interno</li>
                            <li class="check">Agente de IA</li>
                            <li class="check">Kanban Pro Multifunil</li>
                            <li class="check">Conexões OLX e Mercado Livre</li>
                        </ul>
                    </div>
                    <div class="card-footer">
                        <button class="btn-outline">Adquirir Plano</button>
                    </div>
                </div>

                <!-- Custom Plan -->
                <div class="pricing-card pricing-card--custom" v-motion-fade-visible>
                    <div class="card-header">
                        <span class="plan-type">Exclusivo</span>
                        <h3 class="plan-name">Plano Personalizado</h3>
                        <div class="plan-price">
                            <span class="currency">Sob consulta</span>
                        </div>
                    </div>
                    <div class="card-body">
                        <ul class="plan-features">
                            <li class="check">Conexões ilimitadas WhatsApp Api Meow</li>
                            <li class="check">Usuários ilimitados</li>
                            <li class="check">Disparos em massa</li>
                            <li class="check">Automação de fluxo</li>
                            <li class="check">Integrações com APIs</li>
                            <li class="check">Integrações sociais (Facebook e Instagram)</li>
                            <li class="check">Chat Interno</li>
                            <li class="check">Agente de IA</li>
                            <li class="check">Kanban Pro Multifunil</li>
                        </ul>
                    </div>
                    <div class="card-footer">
                        <button class="btn-white">Fale Conosco</button>
                    </div>
                </div>
            </div>

            <!-- Detailed Comparison Table -->
            <PricingTable />

            <p class="pricing-disclaimer">
                * Os valores adicionais são calculados para liberar as funcionalidades específicas caso haja interesse.
            </p>

            <div class="pricing-bottom-action">
                <button class="btn-white-outline">Quero personalizar meu plano</button>
            </div>
        </div>
    </div>
</template>

<style scoped>
.pricing-page {
    padding-top: 120px;
    padding-bottom: 80px;
    min-height: 100vh;
    background: var(--bg-deep);
}

.pricing-header {
    text-align: center;
    margin-bottom: 5rem;
}

.pricing-header h1 {
    font-size: clamp(3rem, 8vw, 4rem);
    font-weight: 800;
}

.pricing-grid {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    gap: 1rem;
    margin-bottom: 4rem;
    max-width: 1440px;
    margin-left: auto;
    margin-right: auto;
    align-items: stretch;
}

.pricing-card {
    background: #fff;
    border-radius: 28px;
    padding: 3.5rem 1.5rem 2.5rem;
    display: flex;
    flex-direction: column;
    position: relative;
    transition: all 0.4s cubic-bezier(0.165, 0.84, 0.44, 1);
    color: #000;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.05);
}

.pricing-card:hover {
    transform: translateY(-8px);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
}

.pricing-card--popular {
    background: #1f69ff;
    color: #fff;
    transform: scale(1.05);
    z-index: 2;
    box-shadow: 0 20px 40px rgba(31, 105, 255, 0.25);
}

.pricing-card--popular:hover {
    transform: scale(1.07) translateY(-8px);
}

.pricing-card--custom {
    background: #0b111a;
    color: #fff;
}

.card-header {
    margin-bottom: 3rem;
    display: flex;
    flex-direction: column;
}

.popular-badge {
    position: absolute;
    top: -16px;
    left: 50%;
    transform: translateX(-50%);
    background: linear-gradient(135deg, #10b981 0%, #059669 100%);
    color: #fff;
    padding: 0.6rem 1.5rem;
    border-radius: 100px;
    font-size: 0.85rem;
    font-weight: 700;
    white-space: nowrap;
    box-shadow: 0 4px 12px rgba(16, 185, 129, 0.4);
}

.enterprise-badge {
    position: absolute;
    top: -16px;
    left: 50%;
    transform: translateX(-50%);
    background: #000;
    color: #fff;
    padding: 0.6rem 1.5rem;
    border-radius: 100px;
    font-size: 0.85rem;
    font-weight: 700;
    white-space: nowrap;
}

.plan-type {
    font-size: 0.8rem;
    font-weight: 700;
    opacity: 0.6;
    display: block;
    margin-bottom: 0.75rem;
    letter-spacing: 0.1em;
    text-transform: uppercase;
}

.plan-name {
    font-size: 1.5rem;
    font-weight: 800;
    margin-bottom: 1.5rem;
    line-height: 1.2;
    height: 3.5rem;
    display: flex;
    align-items: center;
}

.plan-price {
    display: flex;
    align-items: baseline;
    gap: 0.35rem;
    min-height: 4rem;
    margin-bottom: 2.5rem;
}

.currency {
    font-size: clamp(2rem, 4vw, 2.75rem);
    font-weight: 800;
    letter-spacing: -0.02em;
}

.period {
    font-size: 1.1rem;
    opacity: 0.7;
    font-weight: 500;
}

.pricing-card--custom .currency {
    font-size: 2rem;
    line-height: 1.1;
}

.card-body {
    flex-grow: 1;
}

.plan-features {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    flex-direction: column;
    gap: 1.25rem;
}

.plan-features li {
    font-size: 0.95rem;
    display: flex;
    align-items: flex-start;
    gap: 0.85rem;
    font-weight: 500;
    line-height: 1.4;
}

.plan-features li.check::before {
    content: '✓';
    font-weight: 900;
    color: #10b981;
    font-size: 1.1rem;
}

.pricing-card--popular .plan-features li.check::before {
    color: #fff;
}

.plan-features li.cross {
    opacity: 0.35;
}

.plan-features li.cross::before {
    content: '✕';
    font-weight: 900;
    font-size: 0.9rem;
}

.plan-features small {
    font-weight: 700;
    color: #1f69ff;
    margin-left: auto;
    font-size: 0.75rem;
    white-space: nowrap;
}

.pricing-card--popular .plan-features small {
    color: #fff;
}

.card-footer {
    margin-top: 3.5rem;
    padding-top: 1rem;
}

.btn-outline {
    width: 100%;
    padding: 1.15rem;
    border: 2px solid #f1f5f9;
    background: transparent;
    border-radius: 16px;
    font-weight: 700;
    color: #000;
    cursor: pointer;
    transition: all 0.3s ease;
    font-size: 1rem;
}

.btn-outline:hover {
    background: #000;
    color: #fff;
    border-color: #000;
}

.btn-white {
    width: 100%;
    padding: 1.15rem;
    background: #fff;
    border: none;
    border-radius: 16px;
    font-weight: 700;
    color: #1f69ff;
    cursor: pointer;
    transition: all 0.3s ease;
    font-size: 1rem;
}

.btn-white:hover {
    transform: translateY(-4px);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
}

.pricing-card--custom .btn-white {
    color: #0b111a;
}

.pricing-disclaimer {
    text-align: center;
    font-size: 0.9rem;
    color: var(--text-secondary);
    margin-bottom: 3rem;
    max-width: 600px;
    margin-left: auto;
    margin-right: auto;
    opacity: 0.6;
}

.pricing-bottom-action {
    display: flex;
    justify-content: center;
}

.btn-white-outline {
    padding: 1rem 2.5rem;
    background: rgba(255, 255, 255, 0.03);
    border: 1px solid rgba(255, 255, 255, 0.1);
    border-radius: 16px;
    font-weight: 700;
    color: #fff;
    cursor: pointer;
    transition: all 0.3s ease;
    font-size: 1rem;
    backdrop-filter: blur(10px);
}

.btn-white-outline:hover {
    background: #fff;
    color: #000;
    transform: translateY(-2px);
}

@media (max-width: 1400px) {
    .pricing-grid {
        grid-template-columns: repeat(3, 1fr);
        padding: 0 2rem;
        gap: 2rem;
    }
}

@media (max-width: 1024px) {
    .pricing-grid {
        grid-template-columns: repeat(2, 1fr);
    }

    .pricing-card--popular {
        transform: none;
    }

    .pricing-card--popular:hover {
        transform: translateY(-8px);
    }
}

@media (max-width: 768px) {
    .pricing-grid {
        grid-template-columns: 1fr;
        padding: 0 1.25rem;
    }

    .pricing-header h1 {
        font-size: 2.75rem;
    }

    .pricing-card {
        padding: 3rem 1.5rem;
    }
}
</style>
