<template>
  <v-footer
    padless
    class="footer-background"
  >
    <v-container class="d-flex flex-column align-center py-4">
      <!-- Iconos sociales -->
      <div class="social-icons mb-3">
        <a
          href="https://www.facebook.com/denis.salinas"
          target="_blank"
          rel="noopener noreferrer"
          class="social-icon"
        >
          <v-icon size="36">mdi-facebook</v-icon>
        </a>

        <a
          href="https://www.instagram.com/denis.salinas/"
          target="_blank"
          rel="noopener noreferrer"
          class="social-icon"
        >
          <v-icon size="36">mdi-instagram</v-icon>
        </a>

        <a
          href="https://www.linkedin.com/in/denis-salinas-49b6b352/"
          target="_blank"
          rel="noopener noreferrer"
          class="social-icon"
        >
          <v-icon size="36">mdi-linkedin</v-icon>
        </a>
      </div>

      <!-- Info del creador -->
      <div class="creator-info mb-2">
        &copy; 2026 Denis Salinas — Molina, Región del Maule, Chile
      </div>

      <!-- Leyenda del portafolio -->
      <div class="portfolio-legend">
        Portafolio inspirado en el disco <strong>The Singles 81-98</strong> de Depeche Mode
      </div>
    </v-container>
  </v-footer>
</template>

<script setup lang="ts">
// No se requiere script adicional
</script>

<style scoped>
.footer-background {
  background-color: rgba(17,17,17,0.95);
  color: white;
  border-top: 1px solid #ff0000;
  text-align: center;
}

/* Iconos sociales */
.social-icons {
  display: flex;
  justify-content: center;
  gap: 16px;
}

.social-icon {
  color: white;
  transition: all 0.3s ease;
}

.social-icon:hover {
  color: #ff0000;
  transform: scale(1.2);
}

/* Info del creador y leyenda */
.creator-info {
  font-size: 14px;
  opacity: 0.8;
  margin-bottom: 4px;
}

.portfolio-legend {
  font-size: 13px;
  opacity: 0.7;
}
</style>
