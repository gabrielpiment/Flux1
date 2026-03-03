<template>
    <div class="pricing-page">
        <div class="container hero-wrap">
            <div class="pricing-header">
                <h1 class="text-gradient">Pague por mês ou trimestre e cancele a hora que quiser, sem precisar dar
                    explicações
                </h1>
            </div>

            <div id="pricing-plans" class="pricing-grid">
                <!-- Digital Flux Plan -->
                <div class="pricing-card" v-motion-fade-visible>
                    <div class="card-accent accent-green"></div>
                    <div class="card-header">
                        <span class="plan-label">DIGITAL FLUX</span>
                        <div class="price-main">
                            <span class="value">R$ 75 por usuario/mês</span>
                        </div>
                        <p class="price-detail"><strong>R$ 60/mês</strong> assinando por trimestre.</p>
                        <div class="min-badge">Contratação mínima de 2 atendentes</div>
                    </div>
                    <div class="card-body">
                        <ul class="plan-features">
                            <li class="check">1 conexão whatsapp api paralela</li>
                            <li class="check">Envios de campanhas de marketing</li>
                            <li class="check">
                                <span>Construtor de ChatBot visual básico <strong>(Maximo 3 fluxos)</strong></span>
                            </li>
                            <li class="check">Relatórios de conversas e atendentes</li>
                            <li class="check">Agendamento de mensagens</li>
                            <li class="check">Kanban CRM</li>
                            <li class="check">Painel de controle de atendentes</li>
                            <li class="check">Logs de atividade</li>
                            <li class="bonus-item">
                                <span class="gift-emoji">🎁</span>
                                <span>BONUS ESPECIAL PLANO TRIMESTRAL <span
                                        class="unlock-shimmer">DESBLOQUEAR</span></span>
                            </li>
                        </ul>
                    </div>
                    <div class="card-action">
                        <button class="btn-pill" @click="openModal('Digital Flux')">Vamos começar <span>ACESSO
                                IMEDIATO</span></button>
                    </div>
                </div>

                <!-- Pro Digital Flux Plan -->
                <div class="pricing-card enterprise" v-motion-fade-visible>
                    <div class="card-accent accent-blue"></div>
                    <div class="card-header">
                        <span class="plan-label">PRO DIGITAL FLUX</span>
                        <div class="price-main">
                            <span class="value">R$ 105 por usuario/mês</span>
                        </div>
                        <p class="price-detail"><strong>R$ 90/mês</strong> assinando por trimestre.</p>
                        <div class="min-badge">Contratação mínima de 2 atendentes</div>
                    </div>
                    <div class="card-body">
                        <ul class="plan-features">
                            <li class="check">2 conexão whatsapp api paralela</li>
                            <li class="check">Envios de campanhas de marketing</li>
                            <li class="check">Construtor de ChatBot visual <strong>ilimitado</strong></li>
                            <li class="check">Relatórios de conversas e atendentes</li>
                            <li class="check">Agendamento de mensagens</li>
                            <li class="check">Kanban CRM</li>
                            <li class="check">Painel de controle de atendentes</li>
                            <li class="check">Api e integrações</li>
                            <li class="check">Logs de atividade</li>
                            <li class="check">Agente de IA</li>
                            <li class="cross warning">
                                <span>Gestor de IA <a href="#gestor-ia" class="consultar-link">( consultar )</a></span>
                            </li>
                            <li class="bonus-item">
                                <span class="gift-emoji">🎁</span>
                                <span>BONUS ESPECIAL PLANO TRIMESTRAL <span
                                        class="unlock-shimmer">DESBLOQUEAR</span></span>
                            </li>
                        </ul>
                    </div>
                    <div class="card-action">
                        <button class="btn-pill" @click="openModal('Pro Digital Flux')">Vamos começar <span>ACESSO
                                IMEDIATO</span></button>
                    </div>
                </div>
            </div>

            <div class="pricing-extra-cta" v-motion-fade-visible>
                <a href="#conexoes" class="btn-secondary-outline">Precisa de mais conexões?</a>
            </div>

            <!-- Detailed Comparison Table -->
            <PricingTable />

            <!-- Add-on Section: Turbine o seu Atendimento -->
            <div id="conexoes" class="addons-section" v-motion-fade-visible>
                <div class="addons-header">
                    <h2>TURBINE O SEU ATENDIMENTO</h2>
                    <h3>CONEXÕES</h3>
                </div>

                <div class="addons-grid">
                    <div class="addons-label-row">
                        <span class="label text-left">CONEXÃO</span>
                        <span class="label">MENSALIDADE</span>
                    </div>

                    <!-- Instagram -->
                    <div class="addon-item">
                        <div class="addon-info">
                            <img src="https://upload.wikimedia.org/wikipedia/commons/e/e7/Instagram_logo_2016.svg"
                                alt="Instagram" class="addon-icon">
                            <div class="addon-details">
                                <span class="addon-name">Instagram</span>
                                <span class="addon-desc">Conexão direta com Direct e comentários.</span>
                            </div>
                        </div>
                        <div class="addon-value">R$ 50,00</div>
                    </div>

                    <!-- Facebook -->
                    <div class="addon-item">
                        <div class="addon-info">
                            <img src="https://upload.wikimedia.org/wikipedia/commons/6/6c/Facebook_Logo_2023.png"
                                alt="Facebook" class="addon-icon">
                            <div class="addon-details">
                                <span class="addon-name">Facebook</span>
                                <span class="addon-desc">Gestão de Messenger.</span>
                            </div>
                        </div>
                        <div class="addon-value">R$ 50,00</div>
                    </div>

                    <!-- WhatsApp Official -->
                    <div class="addon-item">
                        <div class="addon-info">
                            <div class="wa-icon-wrapper">
                                <img src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
                                    alt="WhatsApp Official" class="addon-icon">
                                <span class="verified-badge">✓</span>
                            </div>
                            <div class="addon-details">
                                <span class="addon-name">WhatsApp API Oficial</span>
                                <span class="addon-desc">Estabilidade total e selo de verificação.</span>
                            </div>
                        </div>
                        <div class="addon-value">R$ 60,00</div>
                    </div>
                    <!-- WhatsApp Parallel -->
                    <div class="addon-item">
                        <div class="addon-info">
                            <div class="wa-icon-wrapper">
                                <img src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
                                    alt="WhatsApp Parallel" class="addon-icon">
                                <span class="qr-badge">🔳</span>
                            </div>
                            <div class="addon-details">
                                <span class="addon-name">WhatsApp API Paralela</span>
                                <span class="addon-desc">Conexão via QR Code para múltiplos canais.</span>
                            </div>
                        </div>
                        <div class="addon-value">R$ 50,00</div>
                    </div>
                </div>

                <p class="pricing-disclaimer">
                    * Os valores adicionais são calculados para liberar as funcionalidades específicas caso haja
                    interesse.
                </p>

                <div class="pricing-bottom-action">
                    <a href="#pricing-plans" class="btn-white-outline">Quero personalizar meu plano</a>
                </div>

                <!-- AI Manager Section -->
                <div id="gestor-ia" class="ai-manager-card" v-motion-fade-visible>
                    <div class="ai-manager-header">
                        <div class="ai-manager-title">
                            <span class="ai-icon">🤖</span>
                            <h2>GESTOR DE IA</h2>
                        </div>
                        <span class="demand-badge">VALOR SOB DEMANDA</span>
                    </div>

                    <div class="ai-manager-content">
                        <div class="ai-manager-info">
                            <p class="ai-description">
                                TENHA UM TÉCNICO DE INTELIGÊNCIA ARTIFICIAL EM GERAL PARA CRIAR O SEU AGENTE
                            </p>
                            <h4 class="ai-sub-title">O QUE ELE VAI FAZER POR VOCÊ?</h4>
                            <ul class="ai-benefits">
                                <li>CRIAR PROMPTS AVANÇADOS ATRAVÉS DE ENGENHARIA DE PROMPTS</li>
                                <li>TREINAMENTO E APERFEIÇOAMENTO CONTÍNUO DA IA</li>
                                <li>SUPORTE DIÁRIO</li>
                            </ul>
                        </div>
                        <div class="ai-manager-action">
                            <button class="btn-primary-pill">CONSULTAR VALOR</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <!-- Registration Modal -->
    <CadastroModal />

</template>

<script setup lang="ts">
import CadastroModal from '~/components/CadastroModal.vue'
import PricingTable from '~/components/PricingTable.vue'
import { useCadastroForm } from '~/composables/useCadastroForm'

const { openModal } = useCadastroForm()
</script>

<style scoped>
.pricing-extra-cta {
    text-align: center;
    margin-bottom: 5rem;
}

.btn-secondary-outline {
    background: rgba(0, 114, 245, 0.05);
    border: 1.5px solid #0072f5;
    color: #fff;
    padding: 0.9rem 3rem;
    border-radius: 99px;
    font-size: 1.1rem;
    font-weight: 800;
    text-decoration: none;
    display: inline-block;
    transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
    box-shadow: 0 0 15px rgba(0, 114, 245, 0.1);
    text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
}

.btn-secondary-outline:hover {
    background: #0072f5;
    color: #fff;
    transform: translateY(-3px) scale(1.03);
    box-shadow: 0 10px 25px rgba(0, 114, 245, 0.4);
    border-color: #0072f5;
}

html {
    scroll-behavior: smooth;
}

.consultar-link {
    color: #ef4444;
    text-decoration: none;
    font-weight: 700;
    margin-left: 4px;
    transition: all 0.3s ease;
    border-bottom: 1px dashed rgba(239, 68, 68, 0.4);
}

.consultar-link:hover {
    color: #ff5f5f;
    border-bottom-color: #ff5f5f;
    transform: translateY(-1px);
    display: inline-block;
}

.pricing-disclaimer {
    text-align: center;
    font-size: 0.9rem;
    color: #64748b;
    margin-top: 2rem;
    margin-bottom: 2rem;
}

.pricing-bottom-action {
    text-align: center;
    margin-bottom: 4rem;
}

.btn-white-outline {
    background: #fff;
    border: none;
    color: #0d1117;
    padding: 1rem 3rem;
    border-radius: 99px;
    font-size: 1.1rem;
    font-weight: 800;
    cursor: pointer;
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    box-shadow: 0 10px 20px rgba(255, 255, 255, 0.1);
    text-decoration: none;
    display: inline-block;
}

.btn-white-outline:hover {
    transform: translateY(-3px) scale(1.02);
    box-shadow: 0 15px 30px rgba(255, 255, 255, 0.2);
    filter: brightness(1.1);
}

.ai-manager-card {
    margin-top: 3rem;
    background: rgba(255, 255, 255, 0.03);
    border: 1px solid rgba(255, 255, 255, 0.1);
    border-radius: 24px;
    padding: 2.5rem;
    color: #fff;
    backdrop-filter: blur(10px);
}

.ai-manager-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 2rem;
    flex-wrap: wrap;
    gap: 1rem;
}

.ai-manager-title {
    display: flex;
    align-items: center;
    gap: 1rem;
}

.ai-icon {
    font-size: 2rem;
}

.ai-manager-title h2 {
    font-size: 1.5rem;
    font-weight: 900;
    letter-spacing: 0.05em;
}

.demand-badge {
    font-size: 1.2rem;
    font-weight: 800;
    color: #fff;
    opacity: 0.9;
}

.ai-manager-content {
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    gap: 2rem;
    flex-wrap: wrap;
}

.ai-description {
    font-size: 1.1rem;
    font-weight: 700;
    color: #94a3b8;
    max-width: 500px;
    line-height: 1.4;
    margin-bottom: 1.5rem;
}

.ai-sub-title {
    font-size: 1rem;
    font-weight: 800;
    color: #fff;
    margin-bottom: 1rem;
}

.ai-benefits {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
}

.ai-benefits li {
    font-size: 0.9rem;
    font-weight: 700;
    color: #cbd5e1;
    position: relative;
    padding-left: 1.5rem;
    text-transform: uppercase;
}

.ai-benefits li::before {
    content: "•";
    position: absolute;
    left: 0;
    color: var(--accent-primary);
    font-size: 1.2rem;
}

.btn-primary-pill {
    background: #0072f5;
    color: #fff;
    border: none;
    padding: 1rem 2.5rem;
    border-radius: 50px;
    font-size: 1.1rem;
    font-weight: 800;
    cursor: pointer;
    transition: all 0.3s ease;
    box-shadow: 0 10px 20px rgba(31, 105, 255, 0.2);
}

.btn-primary-pill:hover {
    transform: translateY(-2px);
    box-shadow: 0 15px 30px rgba(0, 114, 245, 0.4);
    filter: brightness(1.1);
}

.pricing-page {
    padding-top: 180px;
    padding-bottom: 80px;
    min-height: 100vh;
    background: var(--bg-main);
}

.pricing-header {
    text-align: center;
    margin-bottom: 4rem;
    padding: 0 1rem;
}

.pricing-header h1 {
    font-size: clamp(2rem, 5vw, 3.5rem);
    font-weight: 800;
    max-width: 900px;
    margin: 0 auto;
    line-height: 1.2;
}

.pricing-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 1.5rem;
    margin-bottom: 4rem;
    max-width: 1000px;
    margin-left: auto;
    margin-right: auto;
    align-items: stretch;
}

.pricing-card {
    background: rgba(255, 255, 255, 0.03);
    border-radius: 12px;
    padding: 2.5rem 2rem;
    display: flex;
    flex-direction: column;
    position: relative;
    border: 1px solid rgba(255, 255, 255, 0.03);
    overflow: hidden;
    transition: all 0.4s ease;
}

.card-accent {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 4px;
    opacity: 0.6;
}

.accent-green {
    background: linear-gradient(90deg, #4ade8055, #c084fc55);
}

.accent-blue {
    background: linear-gradient(90deg, #3b82f655, #4ade8055);
}

.pricing-card:hover {
    transform: translateY(-5px);
    border-color: rgba(255, 255, 255, 0.1);
    background: rgba(255, 255, 255, 0.05);
}

.card-header {
    margin-bottom: 2rem;
}

.plan-label {
    display: block;
    font-size: 0.85rem;
    font-weight: 800;
    color: #fff;
    margin-bottom: 1.5rem;
    letter-spacing: 0.05em;
    opacity: 0.9;
}

.price-main .value {
    font-size: 1.8rem;
    font-weight: 800;
    color: #fff;
}

.price-detail {
    font-size: 0.9rem;
    color: #94a3b8;
    margin-bottom: 1.5rem;
}

.price-detail strong {
    color: #fff;
}

.min-badge {
    background: rgba(45, 65, 55, 0.5);
    border: 1px solid rgba(255, 255, 255, 0.05);
    padding: 0.5rem 1rem;
    border-radius: 99px;
    font-size: 0.85rem;
    color: #4ade80;
    display: inline-block;
    font-weight: 600;
}

.card-body {
    flex-grow: 1;
    margin-bottom: 2.5rem;
}

.plan-features {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    flex-direction: column;
    gap: 0.85rem;
}

.plan-features li {
    font-size: 0.95rem;
    color: #e2e8f0;
    display: flex;
    align-items: flex-start;
    gap: 0.75rem;
    line-height: 1.4;
}

.plan-features li.check::before {
    content: '✓';
    color: #4ade80;
    font-weight: 900;
}

.plan-features li.cross::before {
    content: '✕';
    color: #ef4444;
    font-weight: 900;
    opacity: 0.6;
}

.plan-features li.highlight {
    color: #4ade80;
    font-weight: 700;
}

.plan-features li.warning {
    color: #ef4444;
}

.card-action {
    margin-top: auto;
}

.btn-pill {
    width: 100%;
    padding: 1.25rem;
    background: transparent;
    border: 1.5px solid #fff;
    border-radius: 999px;
    color: #fff;
    font-weight: 700;
    font-size: 1.3rem;
    cursor: pointer;
    display: flex;
    flex-direction: column;
    align-items: center;
    transition: all 0.3s ease;
}

.btn-pill span {
    font-size: 0.65rem;
    font-weight: 600;
    opacity: 0.7;
    letter-spacing: 0.1em;
    margin-top: 4px;
}

.btn-pill:hover {
    background: #fff;
    color: #171f1b;
}

.addons-section {
    margin-top: 6rem;
    margin-bottom: 6rem;
    max-width: 800px;
    margin-left: auto;
    margin-right: auto;
}

.addons-header {
    text-align: center;
    margin-bottom: 3rem;
}

.addons-header h2 {
    font-size: 2.2rem;
    font-weight: 900;
    color: #fff;
    margin-bottom: 0.5rem;
}

.addons-header h3 {
    font-size: 1.2rem;
    font-weight: 800;
    color: #fff;
    opacity: 0.9;
    letter-spacing: 0.05em;
}

.addons-grid {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
}

.addons-label-row {
    display: grid;
    grid-template-columns: 1.5fr 1fr;
    align-items: center;
    padding: 0 1.5rem;
    margin-bottom: 0.75rem;
}

.addons-label-row .label {
    font-size: 0.9rem;
    font-weight: 800;
    color: #94a3b8;
    letter-spacing: 0.1em;
}

.addons-label-row .label:last-child {
    text-align: right;
    padding-right: 2rem;
}

.addons-label-row .label.text-left {
    text-align: left;
}

.addon-item {
    display: grid;
    grid-template-columns: 1.5fr 1fr;
    align-items: center;
    background: rgba(255, 255, 255, 0.02);
    padding: 1.25rem 1.5rem;
    border-radius: 20px;
    border: 1px solid rgba(255, 255, 255, 0.05);
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.addon-item:hover {
    background: rgba(255, 255, 255, 0.04);
    border-color: rgba(255, 255, 255, 0.1);
}

.addon-info {
    display: flex;
    align-items: center;
    gap: 1.25rem;
    text-align: left;
}

.addon-details {
    display: flex;
    flex-direction: column;
    gap: 0.2rem;
}

.addon-name {
    font-size: 1.1rem;
    font-weight: 700;
    color: #fff;
}

.addon-name:last-child {
    font-size: 1rem;
}

.addon-desc {
    font-size: 0.85rem;
    color: #64748b;
}

.addon-icon {
    width: 40px;
    height: 40px;
}

.wa-icon-wrapper {
    position: relative;
    display: inline-block;
}

.verified-badge {
    position: absolute;
    bottom: -2px;
    right: -2px;
    background: #1d9bf0;
    color: #fff;
    font-size: 10px;
    width: 14px;
    height: 14px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid #0d1117;
}

.qr-badge {
    position: absolute;
    bottom: -2px;
    right: -2px;
    font-size: 14px;
    line-height: 1;
}

.addon-value {
    font-size: 1.4rem;
    font-weight: 800;
    color: #fff;
    text-align: right;
    padding-right: 2rem;
}

@media (max-width: 968px) {
    .pricing-grid {
        grid-template-columns: 1fr;
        max-width: 480px;
        padding: 0 1.5rem;
    }

    .addons-label-row {
        display: none;
        /* Hide labels on mobile as they don't fit */
    }

    .addon-item {
        grid-template-columns: 1fr;
        gap: 1rem;
        text-align: left;
        padding: 1.5rem;
    }

    .addon-info {
        justify-content: flex-start;
    }

    .addon-value {
        text-align: left;
        display: flex;
        justify-content: space-between;
        font-size: 1.2rem;
        padding-right: 0;
    }

    .addon-value::before {
        content: "Mensalidade:";
        font-size: 0.85rem;
        color: #94a3b8;
        font-weight: 700;
    }
}

.bonus-item {
    margin-top: 1.5rem;
    padding-top: 1rem;
    border-top: 1px solid rgba(255, 255, 255, 0.1);
    display: flex;
    align-items: center;
    gap: 0.75rem;
    font-size: 0.8rem !important;
    font-weight: 800;
}

.gift-emoji {
    font-size: 1.5rem;
    display: inline-block;
    animation: shake 1.5s infinite;
}

.unlock-shimmer {
    background: linear-gradient(90deg, #ef4444, #ff8a8a, #ef4444);
    background-size: 200% auto;
    color: #fff;
    padding: 4px 10px;
    border-radius: 6px;
    font-size: 0.75rem;
    margin-left: 6px;
    cursor: pointer;
    box-shadow: 0 0 12px rgba(239, 68, 68, 0.3);
    animation: shimmer 2s linear infinite;
    display: inline-block;
    transition: all 0.3s ease;
}

.unlock-shimmer:hover {
    transform: translateY(-1px) scale(1.05);
    box-shadow: 0 0 20px rgba(239, 68, 68, 0.6);
}

@keyframes shake {
    0% {
        transform: rotate(0deg);
    }

    10% {
        transform: rotate(-10deg);
    }

    20% {
        transform: rotate(12deg);
    }

    30% {
        transform: rotate(-10deg);
    }

    40% {
        transform: rotate(9deg);
    }

    50% {
        transform: rotate(0deg);
    }

    100% {
        transform: rotate(0deg);
    }
}

@keyframes shimmer {
    0% {
        background-position: 0% center;
    }

    100% {
        background-position: 200% center;
    }
}
</style>
