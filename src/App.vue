<template>
  <v-app>
    <!-- Contenido principal -->
    <v-main class="app-background pa-6">
      <router-view />
    </v-main>

    <!-- Footer minimalista -->
    <Footer />

    <!-- Mini player flotante -->
    <MiniSoundCloudPlayer />

    <!-- Flecha volver al home -->
    <div class="back-home-arrow" @click="$router.push('/')"></div>
  </v-app>
</template>

<script setup lang="ts">
import Footer from "./components/Footer.vue";
import MiniSoundCloudPlayer from "./components/MiniSoundCloudPlayer.vue";
</script>

<style>
/* Flecha volver al home - esquina inferior izquierda */
.back-home-arrow {
  position: fixed;
  bottom: 20px;
  left: 20px;
  width: 35px;
  height: 35px;
  border-top: 3px solid white;
  border-left: 3px solid white;
  transform: rotate(-45deg);
  cursor: pointer;
  animation: bounce 1.5s infinite;
  z-index: 1000;
}

@keyframes bounce {
  0%, 20%, 50%, 80%, 100% { transform: translateY(0) rotate(-45deg); }
  40% { transform: translateY(-8px) rotate(-45deg); }
  60% { transform: translateY(-4px) rotate(-45deg); }
}

/* Fondo general de la app */
.app-background {
  min-height: 100vh;
  width: 100%;
  background:
    linear-gradient(
      to bottom,
      #138ea4 0%,
      #138ea4 35%,
      rgba(252,176,69,0.35) 45%,
      #000000 65%,
      #000000 100%
    );
  padding-top: 60px;
  overflow: auto;
  display: block;
}

.app-background::before {
  content: '';
  position: absolute;
  inset: 0;
  background-image:
    repeating-linear-gradient(
      to bottom,
      rgba(0,0,0,0) 0px,
      rgba(0,0,0,0.08) 1px
    );
  opacity: .25;
  pointer-events: none;
}

.app-background::after {
  content: '';
  position: absolute;
  inset: 0;
  background:
    radial-gradient(
      circle at center,
      rgba(255,255,255,0.03) 0%,
      transparent 80%
    );
  pointer-events: none;
}
</style>
