<template>
  <footer id="site-footer" class="footer">
    <div class="footer-content">
      <div class="footer-top">
        <div class="footer-brand">
          <img src="/images/logo.png" alt="Flux" class="footer-logo">
          <div class="language-selector">
            <span>Idioma</span>
            <select>
              <option>English</option>
              <option selected>Português</option>
              <option>Español</option>
            </select>
          </div>
          <div class="social-links">
            <a href="#" aria-label="Twitter">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#ffffff" width="20" height="20">
                <path
                  d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
              </svg>
            </a>
            <a href="#" aria-label="Facebook">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#ffffff" width="20" height="20">
                <path
                  d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
              </svg>
            </a>
            <a href="#" aria-label="LinkedIn">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#ffffff" width="20" height="20">
                <path
                  d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
            </a>
          </div>
        </div>

        <div class="newsletter-section">
          <h3>Junte-se ao nosso <span class="whatsapp-text">WhatsApp</span> ou newsletter por email</h3>
          <p>A FluxConversa é uma comunidade de 7.000 membros que está moldando o engajamento do cliente oferecendo
            acesso a conselhos especializados e recursos.</p>
          <div class="newsletter-signup">
            <div class="newsletter-options">
              <span>INSCREVER-SE COM</span>
              <NuxtLink to="/precos" class="whatsapp-link">WHATSAPP</NuxtLink>
              <span>OU</span>
              <NuxtLink to="/precos" class="email-link">EMAIL</NuxtLink>
            </div>
            <div class="newsletter-input">
              <input type="email" placeholder="Inscreva-me no newsletter do WhatsApp">
              <button type="submit">→</button>
            </div>
          </div>
        </div>
      </div>

      <div class="footer-links">
        <div class="footer-column">
          <h4>PRODUTO</h4>
          <NuxtLink to="/agentes-ia">Agentes de IA</NuxtLink>
          <NuxtLink to="/caixa-entrada">Caixa de entrada omnichannel</NuxtLink>
          <NuxtLink to="/integracoes">Integrações</NuxtLink>
          <NuxtLink to="/relatorios">Relatórios e análises</NuxtLink>
          <NuxtLink to="/flux-ai">Flux AI</NuxtLink>
          <NuxtLink to="/precos">Preços</NuxtLink>
        </div>
        <div class="footer-column">
          <h4>SOLUÇÕES</h4>
          <NuxtLink to="/captura-conversao">Captura e conversão de leads</NuxtLink>
          <NuxtLink to="/atendimento-cliente">Atendimento ao cliente</NuxtLink>
          <NuxtLink to="/reengajamento-cliente">Reengajamento do cliente</NuxtLink>
          <NuxtLink to="/aumentar-receita">Aumentar receita</NuxtLink>
          <NuxtLink to="/canais/whatsapp">Marketing no WhatsApp</NuxtLink>
        </div>
        <div class="footer-column">
          <h4>CANAIS</h4>
          <NuxtLink to="/canais/whatsapp">WhatsApp</NuxtLink>
          <NuxtLink to="/canais/email">Email</NuxtLink>
          <NuxtLink to="/canais/chat-ao-vivo">Chat ao vivo</NuxtLink>
          <NuxtLink to="/canais/voz">Voz</NuxtLink>
          <NuxtLink to="/canais/instagram">Instagram</NuxtLink>
          <NuxtLink to="/canais/facebook">Facebook</NuxtLink>
          <NuxtLink to="/canais/todos-canais">Todos os canais</NuxtLink>
        </div>
        <div class="footer-column">
          <h4>INDÚSTRIAS</h4>
          <NuxtLink to="/industrias/varejo-ecommerce">Varejo e e-commerce</NuxtLink>
          <NuxtLink to="/industrias/servicos-financeiros">Serviços financeiros</NuxtLink>
          <NuxtLink to="/industrias/viagens-lazer">Viagens e lazer</NuxtLink>
          <NuxtLink to="/industrias/restaurantes-hospitalidade">Restaurantes e hospitalidade</NuxtLink>
          <NuxtLink to="/industrias/automotivo">Automotivo</NuxtLink>
          <NuxtLink to="/industrias/energia-servicos">Energia e serviços públicos</NuxtLink>
        </div>
        <div class="footer-column">
          <h4>FLUX</h4>
          <NuxtLink to="/sobre-nos">Sobre nós</NuxtLink>
          <NuxtLink to="/carreiras">Carreiras</NuxtLink>
          <NuxtLink to="/parcerias">Parcerias</NuxtLink>
          <NuxtLink to="/fale-conosco">Fale conosco</NuxtLink>
          <a href="https://crm.fluxconversa.com.br/login" target="_blank" rel="noopener">Entrar</a>
          <NuxtLink to="/termos">Termos de Uso</NuxtLink>
          <NuxtLink to="/privacidade">Política de Privacidade</NuxtLink>
        </div>
      </div>
      <div class="footer-bottom">
        <p>&copy; 2024 Flux. Todos os direitos reservados.</p>
      </div>
    </div>
  </footer>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'TheFooter'
})
</script>
