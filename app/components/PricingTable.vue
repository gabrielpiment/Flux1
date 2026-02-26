<template>
    <div class="pricing-comparison">
        <div class="comparison-header">
            <h2 class="text-gradient">Comparação Detalhada</h2>
            <p>Tudo o que você precisa saber para escolher o plano ideal para sua empresa.</p>
        </div>

        <div class="table-container shadow-premium" v-motion-fade-visible>
            <table class="comparison-table">
                <thead>
                    <tr>
                        <th class="feature-col">Funcionalidades</th>
                        <th>Plano Digital Flux</th>
                        <th>Pro Digital Flux</th>
                    </tr>
                </thead>

                <!-- Canais e Conexões -->
                <tbody>
                    <tr class="category-row">
                        <td colspan="3">Canais e Conexões</td>
                    </tr>
                    <tr>
                        <td class="feature-name">WhatsApp Api Paralela</td>
                        <td>1</td>
                        <td>2</td>
                    </tr>

                    <tr>
                        <td class="feature-name">OLX & Mercado Livre</td>
                        <td><span class="cross-icon">✕</span></td>
                        <td><span class="cross-icon">✕</span></td>
                    </tr>
                </tbody>

                <!-- Fluxo de Trabalho -->
                <tbody>
                    <tr class="category-row">
                        <td colspan="3">Fluxo de Trabalho</td>
                    </tr>
                    <tr>
                        <td class="feature-name">Disparos em massa</td>
                        <td><span class="check-icon">✓</span></td>
                        <td><span class="check-icon">✓</span></td>
                    </tr>
                    <tr>
                        <td class="feature-name">Automação de fluxos</td>
                        <td>Maximo 3 fluxos</td>
                        <td>Ilimitado</td>
                    </tr>
                    <tr>
                        <td class="feature-name">Chat Interno</td>
                        <td><span class="cross-icon">✕</span></td>
                        <td><span class="check-icon">✓</span></td>
                    </tr>
                    <tr>
                        <td class="feature-name">Integrações com APIs</td>
                        <td><span class="cross-icon">✕</span></td>
                        <td><span class="check-icon">✓</span></td>
                    </tr>
                    <tr>
                        <td class="feature-name">Kanban Inteligente</td>
                        <td>Pro (Multifunil)</td>
                        <td>Pro (Multifunil)</td>
                    </tr>
                    <tr>
                        <td class="feature-name">Agente de IA</td>
                        <td><span class="cross-icon">✕</span></td>
                        <td><span class="check-icon">✓</span></td>
                    </tr>
                </tbody>

                <!-- Gestão -->
                <tbody>
                    <tr class="category-row">
                        <td colspan="3">Capacidade & Gestão</td>
                    </tr>
                    <tr>
                        <td class="feature-name">Total de Conexões WhatsApp</td>
                        <td>1</td>
                        <td>2</td>
                    </tr>
                    <tr>
                        <td class="feature-name">Número de usuários</td>
                        <td>Minimo 2</td>
                        <td>Minimo 2</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<style scoped>
.pricing-comparison {
    margin-top: 6rem;
    padding-bottom: 4rem;
}

.comparison-header {
    text-align: center;
    margin-bottom: 3rem;
}

.comparison-header h2 {
    font-size: 2.5rem;
    font-weight: 800;
    margin-bottom: 1rem;
}

.comparison-header p {
    color: var(--text-secondary);
    opacity: 0.8;
}

.table-container {
    background: rgba(255, 255, 255, 0.03);
    backdrop-filter: blur(10px);
    border: 1px solid rgba(255, 255, 255, 0.1);
    border-radius: 24px;
    overflow: hidden;
    overflow-x: auto;
}

.comparison-table {
    width: 100%;
    border-collapse: collapse;
    color: #fff;
    text-align: center;
}

.comparison-table th,
.comparison-table td {
    padding: 1.25rem 1rem;
    border-bottom: 1px solid rgba(255, 255, 255, 0.05);
}

.comparison-table thead th {
    background: rgba(255, 255, 255, 0.02);
    font-weight: 700;
    font-size: 1rem;
    color: var(--primary-color);
}

.feature-col {
    text-align: left;
    padding-left: 2rem !important;
    width: 300px;
}

.feature-name {
    text-align: left;
    padding-left: 2rem !important;
    font-weight: 500;
    opacity: 0.9;
}

.category-row td {
    background: rgba(255, 255, 255, 0.05);
    text-align: left;
    padding-left: 2rem !important;
    font-weight: 800;
    font-size: 0.9rem;
    text-transform: uppercase;
    letter-spacing: 0.1em;
    color: var(--primary-color);
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
}

.check-icon {
    color: #10b981;
    font-weight: 900;
    font-size: 1.2rem;
}

.cross-icon {
    color: rgba(255, 255, 255, 0.2);
    font-weight: 900;
    font-size: 1rem;
}

@media (max-width: 1024px) {
    .feature-col {
        width: 200px;
    }
}

@media (max-width: 768px) {
    .comparison-table {
        font-size: 0.85rem;
    }
}
</style>
