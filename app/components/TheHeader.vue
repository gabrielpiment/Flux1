<template>
  <header id="site-header" :class="['header', { 'header-compact': isCompact }]">
    <nav class="nav">
      <div class="nav-brand">
        <NuxtLink to="/">
          <img src="/images/logo.png" alt="Flux" class="logo">
        </NuxtLink>
      </div>

      <div class="nav-links">
        <div v-for="link in navLinks" :key="link.label" class="nav-dropdown">
          <a v-if="link.hasDropdown" href="#" class="dropdown-trigger">
            {{ link.label }} <span class="dropdown-arrow">▼</span>
          </a>
          <NuxtLink v-else :to="link.href">{{ link.label }}</NuxtLink>
        </div>
        <a href="https://crm.fluxconversa.com.br/login" target="_blank" rel="noopener" class="login-link">Entrar</a>
        <NuxtLink to="/precos" class="btn-cta neon">Teste grátis</NuxtLink>
      </div>

      <button id="hamburger-btn" class="hamburger" :class="{ active: isMobileMenuOpen }"
        :aria-expanded="isMobileMenuOpen" aria-controls="drawer" aria-label="Menu" @click="toggleMobileMenu">
        <span></span>
        <span></span>
        <span></span>
      </button>
    </nav>

    <!-- Mobile Drawer -->
    <nav id="drawer" class="drawer" :class="{ 'is-open': isMobileMenuOpen }" :aria-hidden="!isMobileMenuOpen">
      <div class="drawer-content">
        <div v-for="link in navLinks" :key="link.label" class="nav-dropdown">
          <a v-if="link.hasDropdown" href="#" class="dropdown-trigger">
            {{ link.label }} <span class="dropdown-arrow">▼</span>
          </a>
          <NuxtLink v-else :to="link.href" @click="closeMobileMenu">{{ link.label }}</NuxtLink>
        </div>
        <a href="https://crm.fluxconversa.com.br/login" target="_blank" rel="noopener" class="login-link"
          @click="closeMobileMenu">Entrar</a>
        <NuxtLink to="/precos" class="btn-cta neon" @click="closeMobileMenu">Teste grátis</NuxtLink>
      </div>
    </nav>

    <!-- Backdrop -->
    <div v-if="isMobileMenuOpen" id="drawer-backdrop" class="backdrop is-open" @click="closeMobileMenu"></div>
  </header>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { navLinks } from '~/shared/constants/navigation'

export default defineComponent({
  name: 'TheHeader',
  setup() {
    const { isCompact, isMobileMenuOpen, toggleMobileMenu, closeMobileMenu } = useHeaderScroll()
    return { isCompact, isMobileMenuOpen, toggleMobileMenu, closeMobileMenu, navLinks }
  }
})
</script>
