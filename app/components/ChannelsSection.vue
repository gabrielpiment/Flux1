<template>
  <section id="channels-section" class="channels-section">
    <div class="container">
      <div class="channels-content">
        <h2 class="text-gradient" v-motion-fade-visible>Conecte os canais favoritos dos clientes</h2>
        <p class="channels-subtitle" v-motion-fade-visible>
          Seu público interage com múltiplos canais ao longo de sua jornada. Empresas com
          jornadas omnichannel perfeitas retêm 89% de seus clientes.
        </p>

        <!-- Orbital diagram (desktop only) -->
        <div id="orbital-diagram" class="orbital-wrapper orbital-wrapper--desktop" v-motion-fade-visible
          @mouseenter="paused = true" @mouseleave="paused = false">
          <svg class="orbital-svg" viewBox="0 0 520 520" xmlns="http://www.w3.org/2000/svg">
            <circle cx="260" cy="260" r="190" fill="none" stroke="rgba(255,255,255,0.07)" stroke-width="1.5"
              stroke-dasharray="5 14" />
            <line v-for="(ch, i) in channels" :key="'line-' + i" x1="260" y1="260" :x2="lineX2(ch.angle)"
              :y2="lineY2(ch.angle)" :stroke="currentActive === i ? 'rgba(0,114,245,0.6)' : 'rgba(255,255,255,0.07)'"
              stroke-width="1.5" />
          </svg>

          <div class="orbital-center">
            <img src="/images/logo.png" alt="Flux" class="orbital-logo">
            <p class="orbital-center-desc">
              {{ activeChannel.desc }}
            </p>
          </div>

          <div v-for="(ch, i) in channels" :key="'node-' + i" class="orbital-node"
            :class="{ 'is-active': currentActive === i }" :style="{
              left: nodeLeft(ch.angle) + 'px',
              top: nodeTop(ch.angle) + 'px'
            }">
            <span class="orbital-node-icon" v-html="ch.icon" />
            <span class="orbital-node-name">{{ ch.name }}</span>
          </div>
        </div>

        <!-- Mobile fallback: simple pill grid -->
        <div class="channels-mobile-grid" v-motion-fade-visible>
          <div v-for="(ch, i) in channels" :key="'pill-' + i" class="channel-pill">
            <span class="channel-pill__icon" v-html="ch.icon" />
            <span class="channel-pill__name">{{ ch.name }}</span>
          </div>
        </div>

        <div class="discover-button-container" v-motion-fade-visible>
          <button class="btn-discover">
            <span>Descobrir Caixa Omnichannel</span>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
              stroke-linecap="round" stroke-linejoin="round">
              <circle cx="12" cy="12" r="10" />
              <polyline points="12 16 16 12 12 8" />
              <line x1="8" y1="12" x2="16" y2="12" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted } from 'vue'

// ─── Data ────────────────────────────────────────────────────────────────────

interface Channel {
  name: string
  angle: number   // initial angle in degrees (0° = right, -90° = top)
  desc: string
  icon: string
}

const channels: Channel[] = [
  {
    name: 'WhatsApp Oficial',
    angle: -90,
    desc: 'API oficial do WhatsApp Business para atendimento escalável e seguro.',
    icon: `<svg viewBox="0 0 24 24" fill="currentColor" width="22" height="22">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
      <path d="M12 0C5.373 0 0 5.373 0 12c0 2.123.555 4.116 1.524 5.843L.073 23.486a.75.75 0 0 0 .917.941l5.804-1.527A11.942 11.942 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.907 0-3.7-.535-5.224-1.463l-.373-.223-3.869 1.018 1.04-3.773-.244-.389A9.943 9.943 0 0 1 2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z"/>
    </svg>`
  },
  {
    name: 'WhatsApp Paralelo',
    angle: -40,
    desc: 'Conecte instâncias alternativas do WhatsApp para maior flexibilidade.',
    icon: `<svg viewBox="0 0 24 24" fill="currentColor" width="22" height="22">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
      <path d="M12 0C5.373 0 0 5.373 0 12c0 2.123.555 4.116 1.524 5.843L.073 23.486a.75.75 0 0 0 .917.941l5.804-1.527A11.942 11.942 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.907 0-3.7-.535-5.224-1.463l-.373-.223-3.869 1.018 1.04-3.773-.244-.389A9.943 9.943 0 0 1 2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z"/>
    </svg>`
  },
  {
    name: 'Instagram',
    angle: 10,
    desc: 'Gerencie DMs e comentários do Instagram de forma centralizada.',
    icon: `<svg viewBox="0 0 24 24" fill="currentColor" width="22" height="22">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
    </svg>`
  },
  {
    name: 'Mercado Livre',
    angle: 60,
    desc: 'Integre mensagens e vendas do Mercado Livre automaticamente.',
    icon: `<svg viewBox="0 0 24 24" fill="currentColor" width="22" height="22">
      <path d="M7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zM1 2v2h2l3.6 7.59-1.35 2.45c-.16.28-.25.61-.25.96C5 16.1 6.1 17 7 17h12v-2H7.42c-.14 0-.25-.11-.25-.25l.03-.12.9-1.63H19c.75 0 1.41-.41 1.75-1.03l3.58-6.49A1 1 0 0 0 23.45 4H5.21l-.94-2H1zm16 16c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2z"/>
    </svg>`
  },
  {
    name: 'OLX',
    angle: 110,
    desc: 'Responda anúncios e gerencie leads da OLX sem esforço manual.',
    icon: `<svg viewBox="0 0 24 24" fill="currentColor" width="22" height="22">
      <path d="M17.63 5.84C17.27 5.33 16.67 5 16 5L5 5.01C3.9 5.01 3 5.9 3 7v10c0 1.1.9 1.99 2 1.99L16 19c.67 0 1.27-.33 1.63-.84L22 12l-4.37-6.16z"/>
    </svg>`
  },
  {
    name: 'Facebook',
    angle: 160,
    desc: 'Centralize o atendimento via Facebook Messenger e comentários de posts.',
    icon: `<svg viewBox="0 0 24 24" fill="currentColor" width="22" height="22">
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
    </svg>`
  },
  {
    name: 'Telegram',
    angle: 210,
    desc: 'Atenda usuários do Telegram com automação e IA integrada em tempo real.',
    icon: `<svg viewBox="0 0 24 24" fill="currentColor" width="22" height="22">
      <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
    </svg>`
  },
]

// ─── Rotation State ───────────────────────────────────────────────────────────

const ORBIT_MS = 22000            // full rotation duration (ms)
const RADIUS = 190              // px from center
const CENTER = 260              // center of the 520×520 container
const NODE_HALF = 44              // half of 88px node

const rotation = ref(0)
const paused = ref(false)
let lastT = 0
let raf: number

function tick(t: number) {
  if (!paused.value) {
    if (lastT) {
      rotation.value = (rotation.value + ((t - lastT) / ORBIT_MS) * 360) % 360
    }
    lastT = t
  } else {
    lastT = t
  }
  raf = requestAnimationFrame(tick)
}

onMounted(() => { raf = requestAnimationFrame(tick) })
onUnmounted(() => cancelAnimationFrame(raf))

// ─── Position Helpers ─────────────────────────────────────────────────────────

function rad(angleDeg: number) {
  return ((angleDeg + rotation.value) * Math.PI) / 180
}

function nodeLeft(a: number) { return CENTER + RADIUS * Math.cos(rad(a)) - NODE_HALF }
function nodeTop(a: number) { return CENTER + RADIUS * Math.sin(rad(a)) - NODE_HALF }
function lineX2(a: number) { return CENTER + RADIUS * Math.cos(rad(a)) }
function lineY2(a: number) { return CENTER + RADIUS * Math.sin(rad(a)) }

// ─── Active Node = nearest to top (-90° ≡ 270°) ───────────────────────────

const currentActive = computed(() => {
  let best = 0
  let bestDist = Infinity
  channels.forEach((ch, i) => {
    const cur = ((ch.angle + rotation.value) % 360 + 360) % 360
    const dist = Math.min(Math.abs(cur - 270), 360 - Math.abs(cur - 270))
    if (dist < bestDist) { bestDist = dist; best = i }
  })
  return best
})

const activeChannel = computed(() => channels[currentActive.value] ?? channels[0]!)

</script>
