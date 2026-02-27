<template>
    <Teleport to="body">
        <Transition name="modal-fade">
            <div v-if="isOpen" id="cadastro-modal-overlay" class="modal-overlay" @click.self="closeModal">
                <div class="modal-container">
                    <!-- Close button -->
                    <button id="cadastro-close-btn" class="modal-close" @click="closeModal" aria-label="Fechar">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                            stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                            <line x1="18" y1="6" x2="6" y2="18" />
                            <line x1="6" y1="6" x2="18" y2="18" />
                        </svg>
                    </button>

                    <!-- Step indicator -->
                    <div class="step-indicator">
                        <div class="step-item" :class="{ active: currentStep >= 1, done: currentStep > 1 }">
                            <div class="step-circle">1</div>
                            <span>Dados Básicos</span>
                        </div>
                        <div class="step-line" :class="{ filled: currentStep > 1 }"></div>
                        <div class="step-item" :class="{ active: currentStep >= 2 }">
                            <div class="step-circle">2</div>
                            <span>Plano & Extras</span>
                        </div>
                    </div>

                    <!-- Form wrapper for accessibility and password managers -->
                    <form id="cadastro-form" @submit.prevent>
                        <!-- Step 1: Dados Básicos -->
                        <div v-if="currentStep === 1" class="step-content">
                            <p class="step-subtitle">Informe seus dados de contato</p>

                            <div class="form-group">
                                <label for="cadastro-nome">Nome completo *</label>
                                <input id="cadastro-nome" v-model="form.fullName" type="text"
                                    placeholder="Seu nome completo" required />
                            </div>

                            <div class="form-group">
                                <label for="cadastro-empresa">Nome da empresa *</label>
                                <input id="cadastro-empresa" v-model="form.companyName" type="text"
                                    placeholder="Nome da sua empresa" required />
                            </div>

                            <div class="form-group">
                                <label for="cadastro-doc">CNPJ ou CPF *</label>
                                <input id="cadastro-doc" :value="form.cnpjCpf" type="text"
                                    placeholder="000.000.000-00 ou 00.000.000/0000-00" @input="onCPFCNPJInput"
                                    required />
                            </div>

                            <div class="form-group">
                                <label for="cadastro-email">Email de acesso *</label>
                                <input id="cadastro-email" v-model="form.email" type="email"
                                    placeholder="exemplo@empresa.com" required />
                            </div>

                            <div class="form-group">
                                <label for="cadastro-whatsapp">WhatsApp *</label>
                                <div class="phone-input-wrapper">
                                    <div class="phone-prefix">
                                        <span class="flag-br">🇧🇷</span>
                                        <span>+55</span>
                                    </div>
                                    <input id="cadastro-whatsapp" :value="form.phone" type="tel"
                                        placeholder="(34) 88452-548" @input="onPhoneInput" required />
                                </div>
                            </div>

                            <div class="form-group">
                                <label for="cadastro-senha">Crie sua senha de acesso *</label>
                                <input id="cadastro-senha" v-model="form.password" type="password"
                                    placeholder="Mínimo 8 caracteres" required minlength="8" />
                                <span class="form-hint">Esta será sua senha para acessar o sistema</span>
                            </div>

                            <button id="step1-continue-btn" type="button" class="btn-step" :disabled="!validateStep1()"
                                @click="nextStep">
                                Continuar
                            </button>
                        </div>

                        <!-- Step 2: Plano & Extras -->
                        <div v-if="currentStep === 2" class="step-content">
                            <p class="step-subtitle">Configure seu plano</p>

                            <!-- Selected plan badge -->
                            <div class="plan-badge-row">
                                <span class="plan-badge">{{ form.plan }}</span>
                            </div>

                            <!-- Billing cycle -->
                            <div class="form-group">
                                <label>Período de assinatura</label>
                                <div class="toggle-group">
                                    <button id="billing-mensal-btn"
                                        :class="['toggle-btn', { active: form.billingCycle === 'mensal' }]"
                                        @click="form.billingCycle = 'mensal'">
                                        Mensal
                                    </button>
                                    <button id="billing-trimestral-btn"
                                        :class="['toggle-btn', { active: form.billingCycle === 'trimestral' }]"
                                        @click="form.billingCycle = 'trimestral'">
                                        Trimestral
                                    </button>
                                </div>
                            </div>

                            <!-- Attendant count -->
                            <div class="form-group">
                                <label for="cadastro-atendentes">Quantidade de atendentes (mín. 2)</label>
                                <div class="number-stepper">
                                    <button class="stepper-btn"
                                        @click="form.attendantCount = Math.max(2, form.attendantCount - 1)">−</button>
                                    <input id="cadastro-atendentes" v-model.number="form.attendantCount" type="number"
                                        min="2" />
                                    <button class="stepper-btn" @click="form.attendantCount++">+</button>
                                </div>
                            </div>

                            <!-- Extra connections -->
                            <div class="form-group">
                                <label>Conexões extras</label>
                                <div class="extras-list">
                                    <div class="extra-row">
                                        <span class="extra-name">Instagram</span>
                                        <span class="extra-price">R$ 50/un</span>
                                        <div class="number-stepper small">
                                            <button class="stepper-btn"
                                                @click="form.extraInstagram = Math.max(0, form.extraInstagram - 1)">−</button>
                                            <input v-model.number="form.extraInstagram" type="number" min="0" />
                                            <button class="stepper-btn" @click="form.extraInstagram++">+</button>
                                        </div>
                                    </div>

                                    <div class="extra-row">
                                        <span class="extra-name">Facebook</span>
                                        <span class="extra-price">R$ 50/un</span>
                                        <div class="number-stepper small">
                                            <button class="stepper-btn"
                                                @click="form.extraFacebook = Math.max(0, form.extraFacebook - 1)">−</button>
                                            <input v-model.number="form.extraFacebook" type="number" min="0" />
                                            <button class="stepper-btn" @click="form.extraFacebook++">+</button>
                                        </div>
                                    </div>

                                    <div class="extra-row">
                                        <span class="extra-name">WhatsApp API Oficial</span>
                                        <span class="extra-price">R$ 60/un</span>
                                        <div class="number-stepper small">
                                            <button class="stepper-btn"
                                                @click="form.extraWhatsappOficial = Math.max(0, form.extraWhatsappOficial - 1)">−</button>
                                            <input v-model.number="form.extraWhatsappOficial" type="number" min="0" />
                                            <button class="stepper-btn" @click="form.extraWhatsappOficial++">+</button>
                                        </div>
                                    </div>

                                    <div class="extra-row">
                                        <span class="extra-name">WhatsApp API Paralela</span>
                                        <span class="extra-price">R$ 50/un</span>
                                        <div class="number-stepper small">
                                            <button class="stepper-btn"
                                                @click="form.extraWhatsappParalela = Math.max(0, form.extraWhatsappParalela - 1)">−</button>
                                            <input v-model.number="form.extraWhatsappParalela" type="number" min="0" />
                                            <button class="stepper-btn" @click="form.extraWhatsappParalela++">+</button>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <!-- Gestor de Automação -->
                            <div class="form-group">
                                <label>Gestor de Automação (IA)</label>
                                <div class="toggle-group">
                                    <button id="gestor-sim-btn" :class="['toggle-btn', { active: form.wantsGestorIA }]"
                                        @click="form.wantsGestorIA = true">
                                        Sim
                                    </button>
                                    <button id="gestor-nao-btn" :class="['toggle-btn', { active: !form.wantsGestorIA }]"
                                        @click="form.wantsGestorIA = false">
                                        Não
                                    </button>
                                </div>
                            </div>

                            <!-- Bonuses (auto-fill for trimestral) -->
                            <div v-if="computedBonuses.length > 0" class="bonuses-section">
                                <label>🎁 Bônus do plano trimestral</label>
                                <ul class="bonuses-list">
                                    <li v-for="(bonus, i) in computedBonuses" :key="i">
                                        <span class="bonus-check">✓</span> {{ bonus }}
                                    </li>
                                </ul>
                            </div>

                            <!-- Price summary -->
                            <div class="price-summary">
                                <div class="price-summary-row">
                                    <span>Atendentes ({{ form.attendantCount }}x R$ {{
                                        computedTotalPrice.pricePerUser.toFixed(2) }})</span>
                                    <span>R$ {{ computedTotalPrice.attendants.toFixed(2) }}</span>
                                </div>
                                <div v-if="computedTotalPrice.connections > 0" class="price-summary-row">
                                    <span>Conexões extras</span>
                                    <span>R$ {{ computedTotalPrice.connections.toFixed(2) }}</span>
                                </div>
                                <div class="price-summary-total">
                                    <span>Total mensal</span>
                                    <span class="total-value">R$ {{ computedTotalPrice.total.toFixed(2) }}</span>
                                </div>
                                <div v-if="form.billingCycle === 'trimestral'" class="price-summary-grand">
                                    <span>Total trimestral (3 meses)</span>
                                    <span class="grand-value">R$ {{ (computedTotalPrice.total * 3).toFixed(2) }}</span>
                                </div>
                            </div>

                            <div class="step-actions">
                                <button id="step2-back-btn" type="button" class="btn-step-outline" @click="prevStep">
                                    Voltar
                                </button>
                                <button id="step2-send-btn" type="button" class="btn-step" :disabled="!validateStep2()"
                                    @click="requestConfirmation">
                                    Enviar
                                </button>
                            </div>
                        </div>

                        <!-- Confirmation popup -->
                        <Transition name="confirm-fade">
                            <div v-if="showConfirmation" class="confirm-overlay" @click.self="cancelConfirmation">
                                <div class="confirm-box">
                                    <h3>Confirme seus dados</h3>
                                    <div class="confirm-data">
                                        <div class="confirm-row"><strong>Nome:</strong> {{ form.fullName }}</div>
                                        <div class="confirm-row"><strong>Empresa:</strong> {{ form.companyName }}</div>
                                        <div class="confirm-row"><strong>Documento:</strong> {{ form.cnpjCpf }}</div>
                                        <div class="confirm-row"><strong>Email:</strong> {{ form.email }}</div>
                                        <div class="confirm-row"><strong>WhatsApp:</strong> +55 {{ form.phone }}</div>
                                        <div class="confirm-row"><strong>Plano:</strong> {{ form.plan }}</div>
                                        <div class="confirm-row"><strong>Período:</strong> {{ form.billingCycle }}
                                        </div>
                                        <div class="confirm-row"><strong>Atendentes:</strong> {{ form.attendantCount }}
                                        </div>
                                        <div v-if="form.extraInstagram" class="confirm-row"><strong>Instagram
                                                extra:</strong> {{ form.extraInstagram }}</div>
                                        <div v-if="form.extraFacebook" class="confirm-row"><strong>Facebook
                                                extra:</strong> {{ form.extraFacebook }}</div>
                                        <div v-if="form.extraWhatsappOficial" class="confirm-row"><strong>WhatsApp
                                                Oficial
                                                extra:</strong> {{ form.extraWhatsappOficial }}</div>
                                        <div v-if="form.extraWhatsappParalela" class="confirm-row"><strong>WhatsApp
                                                Paralela
                                                extra:</strong> {{ form.extraWhatsappParalela }}</div>
                                        <div class="confirm-row"><strong>Gestor IA:</strong> {{ form.wantsGestorIA ?
                                            'Sim'
                                            : 'Não' }}</div>
                                        <div v-if="form.bonuses.length" class="confirm-row">
                                            <strong>Bônus:</strong> {{ form.bonuses.join(', ') }}
                                        </div>
                                    </div>
                                    <div class="confirm-actions">
                                        <button id="confirm-no-btn" type="button" class="btn-step-outline"
                                            @click="cancelConfirmation">
                                            Não, editar
                                        </button>
                                        <button id="confirm-yes-btn" type="submit" class="btn-step"
                                            :disabled="isSubmitting" @click="confirmAndSubmit">
                                            {{ isSubmitting ? 'Enviando...' : 'Confirmo' }}
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </Transition>
                    </form>

                    <!-- Success popup -->
                    <Transition name="confirm-fade">
                        <div v-if="showSuccess" class="confirm-overlay">
                            <div class="confirm-box success-box">
                                <div class="success-icon">✅</div>
                                <h3>Cadastro enviado com sucesso!</h3>
                                <p>Em breve nossa equipe entrará em contato.</p>
                                <button id="success-close-btn" class="btn-step" @click="closeSuccess">
                                    Fechar
                                </button>
                            </div>
                        </div>
                    </Transition>
                </div>
            </div>
        </Transition>
    </Teleport>
</template>

<script setup lang="ts">
import { useCadastroForm } from '~/composables/useCadastroForm'

const {
    form,
    isOpen,
    currentStep,
    showConfirmation,
    isSubmitting,
    showSuccess,
    computedBonuses,
    computedTotalPrice,
    closeModal,
    nextStep,
    prevStep,
    validateStep1,
    validateStep2,
    requestConfirmation,
    cancelConfirmation,
    onCPFCNPJInput,
    onPhoneInput,
    confirmAndSubmit,
    closeSuccess
} = useCadastroForm()

defineExpose({ isOpen })
</script>

<style scoped>
/* ── Modal Overlay ───────────────────────────── */
.modal-overlay {
    position: fixed;
    inset: 0;
    z-index: 10000;
    background: rgba(0, 0, 0, 0.75);
    backdrop-filter: blur(8px);
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 1.5rem;
}

.modal-container {
    position: relative;
    width: 100%;
    max-width: 580px;
    max-height: 90vh;
    overflow-y: auto;
    background: rgba(16, 16, 16, 0.95);
    border: 1px solid rgba(255, 255, 255, 0.1);
    border-radius: 24px;
    padding: 2.5rem 2rem;
    box-shadow: 0 40px 80px rgba(0, 0, 0, 0.6);
    scrollbar-width: none;
}

.modal-container::-webkit-scrollbar {
    display: none;
}

/* ── Close button ─────────────────────────── */
.modal-close {
    position: absolute;
    top: 1rem;
    right: 1rem;
    width: 36px;
    height: 36px;
    border-radius: 50%;
    border: 1px solid rgba(255, 255, 255, 0.15);
    background: rgba(255, 255, 255, 0.05);
    color: #fff;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.2s ease;
    z-index: 10;
}

.modal-close:hover {
    background: rgba(255, 255, 255, 0.15);
    border-color: rgba(255, 255, 255, 0.3);
}

/* ── Step Indicator ──────────────────────── */
.step-indicator {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0;
    margin-bottom: 2rem;
}

.step-item {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.4rem;
}

.step-item span {
    font-size: 0.72rem;
    font-weight: 600;
    color: rgba(255, 255, 255, 0.3);
    text-transform: uppercase;
    letter-spacing: 0.05em;
}

.step-item.active span {
    color: rgba(255, 255, 255, 0.8);
}

.step-circle {
    width: 36px;
    height: 36px;
    border-radius: 50%;
    border: 2px solid rgba(255, 255, 255, 0.15);
    background: transparent;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 800;
    font-size: 0.85rem;
    color: rgba(255, 255, 255, 0.3);
    transition: all 0.3s ease;
}

.step-item.active .step-circle {
    border-color: #0072f5;
    background: #0072f5;
    color: #fff;
    box-shadow: 0 0 20px rgba(0, 114, 245, 0.4);
}

.step-item.done .step-circle {
    border-color: #22c55e;
    background: #22c55e;
    color: #fff;
}

.step-line {
    width: 120px;
    height: 2px;
    background: rgba(255, 255, 255, 0.1);
    margin: 0 1rem;
    margin-bottom: 1.4rem;
    transition: background 0.3s;
}

.step-line.filled {
    background: #22c55e;
}

.step-subtitle {
    text-align: center;
    font-size: 0.9rem;
    color: #0072f5;
    font-weight: 600;
    margin-bottom: 1.5rem;
}

/* ── Form Groups ────────────────────────── */
.form-group {
    margin-bottom: 1.25rem;
}

.form-group label {
    display: block;
    font-size: 0.82rem;
    font-weight: 700;
    color: rgba(255, 255, 255, 0.7);
    margin-bottom: 0.4rem;
}

.form-group input[type="text"],
.form-group input[type="email"],
.form-group input[type="password"],
.form-group input[type="tel"] {
    width: 100%;
    padding: 0.85rem 1rem;
    background: rgba(255, 255, 255, 0.04);
    border: 1px solid rgba(255, 255, 255, 0.1);
    border-radius: 12px;
    color: #fff;
    font-size: 0.95rem;
    transition: border-color 0.2s;
    outline: none;
}

.form-group input:focus {
    border-color: #0072f5;
}

.form-group input::placeholder {
    color: rgba(255, 255, 255, 0.25);
}

.form-hint {
    display: block;
    font-size: 0.72rem;
    color: rgba(255, 255, 255, 0.3);
    margin-top: 0.35rem;
}

/* ── Phone input with prefix ─────────── */
.phone-input-wrapper {
    display: flex;
    align-items: stretch;
    gap: 0;
    border: 1px solid rgba(255, 255, 255, 0.1);
    border-radius: 12px;
    overflow: hidden;
    background: rgba(255, 255, 255, 0.04);
    transition: border-color 0.2s;
}

.phone-input-wrapper:focus-within {
    border-color: #0072f5;
}

.phone-prefix {
    display: flex;
    align-items: center;
    gap: 0.4rem;
    padding: 0 0.9rem;
    background: rgba(255, 255, 255, 0.06);
    border-right: 1px solid rgba(255, 255, 255, 0.1);
    font-size: 0.9rem;
    font-weight: 600;
    color: rgba(255, 255, 255, 0.7);
    white-space: nowrap;
    flex-shrink: 0;
}

.flag-br {
    font-size: 1.2rem;
}

.phone-input-wrapper input {
    flex: 1;
    border: none !important;
    background: transparent !important;
    border-radius: 0 !important;
}

/* ── Buttons ────────────────────────────── */
.btn-step {
    width: 100%;
    padding: 1rem;
    background: #0072f5;
    color: #fff;
    border: none;
    border-radius: 12px;
    font-size: 1rem;
    font-weight: 800;
    cursor: pointer;
    transition: all 0.3s ease;
    margin-top: 0.5rem;
}

.btn-step:hover:not(:disabled) {
    filter: brightness(1.15);
    transform: translateY(-2px);
    box-shadow: 0 8px 20px rgba(0, 114, 245, 0.4);
}

.btn-step:disabled {
    opacity: 0.4;
    cursor: not-allowed;
}

.btn-step-outline {
    padding: 1rem;
    background: transparent;
    border: 1px solid rgba(255, 255, 255, 0.2);
    color: #fff;
    border-radius: 12px;
    font-size: 0.95rem;
    font-weight: 700;
    cursor: pointer;
    transition: all 0.2s;
}

.btn-step-outline:hover {
    background: rgba(255, 255, 255, 0.08);
    border-color: rgba(255, 255, 255, 0.35);
}

.step-actions {
    display: flex;
    gap: 0.75rem;
    margin-top: 0.5rem;
}

.step-actions .btn-step-outline {
    flex: 1;
}

.step-actions .btn-step {
    flex: 2;
}

/* ── Plan badge ─────────────────────────── */
.plan-badge-row {
    text-align: center;
    margin-bottom: 1.5rem;
}

.plan-badge {
    display: inline-block;
    padding: 0.5rem 1.5rem;
    background: rgba(0, 114, 245, 0.15);
    border: 1px solid rgba(0, 114, 245, 0.35);
    border-radius: 99px;
    color: #93c5fd;
    font-weight: 800;
    font-size: 0.85rem;
    letter-spacing: 0.05em;
}

/* ── Toggle group ────────────────────────── */
.toggle-group {
    display: flex;
    gap: 0.5rem;
}

.toggle-btn {
    flex: 1;
    padding: 0.75rem;
    border: 1px solid rgba(255, 255, 255, 0.1);
    border-radius: 12px;
    background: rgba(255, 255, 255, 0.03);
    color: rgba(255, 255, 255, 0.5);
    font-weight: 700;
    font-size: 0.9rem;
    cursor: pointer;
    transition: all 0.2s;
}

.toggle-btn.active {
    background: rgba(0, 114, 245, 0.15);
    border-color: #0072f5;
    color: #fff;
}

/* ── Number stepper ──────────────────────── */
.number-stepper {
    display: flex;
    align-items: center;
    gap: 0;
    border: 1px solid rgba(255, 255, 255, 0.1);
    border-radius: 12px;
    overflow: hidden;
    width: fit-content;
}

.number-stepper.small {
    border-radius: 8px;
}

.stepper-btn {
    width: 42px;
    height: 42px;
    border: none;
    background: rgba(255, 255, 255, 0.06);
    color: #fff;
    font-size: 1.2rem;
    font-weight: 700;
    cursor: pointer;
    transition: background 0.2s;
    display: flex;
    align-items: center;
    justify-content: center;
}

.number-stepper.small .stepper-btn {
    width: 32px;
    height: 32px;
    font-size: 1rem;
}

.stepper-btn:hover {
    background: rgba(0, 114, 245, 0.2);
}

.number-stepper input[type="number"] {
    width: 56px;
    text-align: center;
    border: none;
    background: rgba(255, 255, 255, 0.03);
    color: #fff;
    font-size: 1rem;
    font-weight: 700;
    -moz-appearance: textfield;
    appearance: textfield;
    padding: 0.5rem 0;
}

.number-stepper.small input[type="number"] {
    width: 40px;
    font-size: 0.85rem;
}

.number-stepper input[type="number"]::-webkit-inner-spin-button,
.number-stepper input[type="number"]::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
}

/* ── Extras list ──────────────────────────── */
.extras-list {
    display: flex;
    flex-direction: column;
    gap: 0.6rem;
}

.extra-row {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0.65rem 1rem;
    background: rgba(255, 255, 255, 0.03);
    border: 1px solid rgba(255, 255, 255, 0.07);
    border-radius: 12px;
}

.extra-name {
    font-size: 0.9rem;
    color: rgba(255, 255, 255, 0.8);
    font-weight: 600;
    flex: 1;
}

.extra-price {
    font-size: 0.75rem;
    color: rgba(255, 255, 255, 0.35);
    font-weight: 600;
    margin-right: 0.75rem;
}

/* ── Bonuses section ─────────────────────── */
.bonuses-section {
    margin-bottom: 1.25rem;
    padding: 1rem 1.25rem;
    background: rgba(34, 197, 94, 0.06);
    border: 1px solid rgba(34, 197, 94, 0.2);
    border-radius: 16px;
}

.bonuses-section label {
    display: block;
    font-size: 0.85rem;
    font-weight: 800;
    color: #86efac;
    margin-bottom: 0.6rem;
}

.bonuses-list {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    flex-direction: column;
    gap: 0.35rem;
}

.bonuses-list li {
    font-size: 0.82rem;
    color: rgba(255, 255, 255, 0.7);
    display: flex;
    align-items: center;
    gap: 0.5rem;
}

.bonus-check {
    color: #22c55e;
    font-size: 0.75rem;
}

/* ── Price summary ───────────────────────── */
.price-summary {
    margin-bottom: 1.25rem;
    padding: 1rem 1.25rem;
    background: rgba(0, 114, 245, 0.05);
    border: 1px solid rgba(0, 114, 245, 0.15);
    border-radius: 16px;
}

.price-summary-row {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0.4rem 0;
    font-size: 0.85rem;
    color: rgba(255, 255, 255, 0.6);
}

.price-summary-total {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-top: 0.75rem;
    margin-top: 0.5rem;
    border-top: 1px solid rgba(255, 255, 255, 0.1);
    font-size: 1rem;
    font-weight: 800;
    color: #fff;
}

.total-value {
    color: #0072f5;
    font-size: 1.2rem;
}

.price-summary-grand {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-top: 0.5rem;
    margin-top: 0.4rem;
    font-size: 0.85rem;
    color: rgba(255, 255, 255, 0.5);
}

.grand-value {
    color: #22c55e;
    font-weight: 800;
    font-size: 1rem;
}

/* ── Confirmation overlay ────────────────── */
.confirm-overlay {
    position: absolute;
    inset: 0;
    z-index: 20;
    background: rgba(0, 0, 0, 0.8);
    backdrop-filter: blur(6px);
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 1.5rem;
    border-radius: 24px;
}

.confirm-box {
    width: 100%;
    max-width: 480px;
    background: rgba(20, 20, 20, 0.98);
    border: 1px solid rgba(255, 255, 255, 0.12);
    border-radius: 20px;
    padding: 2rem;
    max-height: 80vh;
    overflow-y: auto;
    scrollbar-width: none;
}

.confirm-box::-webkit-scrollbar {
    display: none;
}

.confirm-box h3 {
    font-size: 1.15rem;
    font-weight: 800;
    color: #fff;
    margin-bottom: 1.25rem;
    text-align: center;
}

.confirm-data {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    margin-bottom: 1.5rem;
}

.confirm-row {
    font-size: 0.85rem;
    color: rgba(255, 255, 255, 0.7);
    padding: 0.5rem 0.75rem;
    background: rgba(255, 255, 255, 0.03);
    border-radius: 8px;
}

.confirm-row strong {
    color: #fff;
    margin-right: 0.4rem;
}

.confirm-actions {
    display: flex;
    gap: 0.75rem;
}

.confirm-actions .btn-step-outline {
    flex: 1;
}

.confirm-actions .btn-step {
    flex: 1;
    margin-top: 0;
}

/* ── Success box ────────────────────────── */
.success-box {
    text-align: center;
}

.success-icon {
    font-size: 3rem;
    margin-bottom: 1rem;
}

.success-box p {
    font-size: 0.95rem;
    color: rgba(255, 255, 255, 0.6);
    margin-bottom: 1.5rem;
}

/* ── Transitions ─────────────────────────── */
.modal-fade-enter-active {
    transition: all 0.35s cubic-bezier(0.16, 1, 0.3, 1);
}

.modal-fade-leave-active {
    transition: all 0.25s ease;
}

.modal-fade-enter-from,
.modal-fade-leave-to {
    opacity: 0;
}

.modal-fade-enter-from .modal-container {
    transform: scale(0.95) translateY(20px);
}

.confirm-fade-enter-active,
.confirm-fade-leave-active {
    transition: opacity 0.3s ease;
}

.confirm-fade-enter-from,
.confirm-fade-leave-to {
    opacity: 0;
}

/* ── Mobile ──────────────────────────────── */
@media (max-width: 600px) {
    .modal-container {
        padding: 2rem 1.25rem;
        border-radius: 20px;
    }

    .step-line {
        width: 60px;
    }

    .step-item span {
        font-size: 0.62rem;
    }

    .step-circle {
        width: 30px;
        height: 30px;
        font-size: 0.75rem;
    }
}
</style>
