<template>
  <v-container class="contact-background py-12">

    <h1 class="contact-title">Contacto</h1>

    <v-row justify="center" class="mt-8" align="stretch">

      <!-- WhatsApp -->
      <v-col cols="12" md="6" class="mb-4">
        <v-card class="contact-card hover-card" elevation="0">
          <v-btn
            icon
            :href="'https://wa.me/56982627475'"
            target="_blank"
            rel="noopener noreferrer"
          >
            <v-icon class="led-icon" size="36">mdi-whatsapp</v-icon>
          </v-btn>
          <span>+56982627475</span>
        </v-card>
      </v-col>

      <!-- Email -->
      <v-col cols="12" md="6" class="mb-4">
        <v-card class="contact-card hover-card" elevation="0">
          <v-btn
            icon
            :href="'mailto:dje.salinas.m@gmail.com'"
            target="_blank"
          >
            <v-icon class="led-icon" size="36">mdi-email</v-icon>
          </v-btn>
          <span>dje.salinas.m@gmail.com</span>
        </v-card>
      </v-col>

      <!-- LinkedIn -->
      <v-col cols="12" md="6" class="mb-4">
        <v-card class="contact-card hover-card" elevation="0">
          <v-btn
            icon
            :href="'https://www.linkedin.com/in/denis-salinas-49b6b352/'"
            target="_blank"
          >
            <v-icon class="led-icon" size="36">mdi-linkedin</v-icon>
          </v-btn>
          <span>LinkedIn</span>
        </v-card>
      </v-col>

      <!-- Ubicación -->
      <v-col cols="12" md="6" class="mb-4">
        <v-card class="contact-card hover-card" elevation="0">
          <v-btn
            icon
            :href="'https://www.google.com/maps/place/Molina,+Regi%C3%B3n+del+Maule,+Chile/'"
            target="_blank"
          >
            <v-icon class="led-icon" size="36">mdi-map-marker</v-icon>
          </v-btn>
          <span>Molina, Región del Maule, Chile</span>
        </v-card>
      </v-col>

    </v-row>

  </v-container>
</template>

<script setup>
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Doto:wght@900&display=swap');

/* Fondo general */
.contact-background {
  background:
    linear-gradient(
      to bottom,
      #138ea4 0%,
      #138ea4 35%,
      rgba(252,176,69,0.35) 45%,
      #000000 65%,
      #000000 100%
    );
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 60px;
}

/* Título */
.contact-title {
  font-family:'Doto', monospace;
  font-weight:900;
  font-size:2.5rem;
  color:#ff0000;
  text-shadow:
    0 0 10px #ff0000,
    0 0 20px rgba(255,0,0,.8);
  text-align:center;
}

/* Card individual de contacto */
.contact-card {
  background: rgba(17,17,17,0.9);
  border: 2px solid #ff000044;
  color: white;
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 20px;
  font-size: 18px;
  cursor: pointer;
  box-shadow:
    0 0 20px rgba(255,0,0,.9),
    0 0 40px rgba(255,0,0,.6),
    0 0 60px rgba(255,0,0,.4);
  transition: transform .3s ease, box-shadow .3s ease;
  position: relative;
  overflow: hidden;
  font-family:'Doto', monospace;
}

/* Hover glow animado */
.hover-card:hover {
  transform: translateY(-4px);
  box-shadow:
    0 0 25px #ff0000,
    0 0 50px #ff0000,
    0 0 75px rgba(255,0,0,.7);
}

/* LED pulsante de iconos */
.led-icon {
  color:#ff0000;
  animation:
    ledPulse 2.2s ease-in-out infinite,
    ledFlicker 6s linear infinite;
}

/* LED pulse */
@keyframes ledPulse{
  0%{
    text-shadow:
      0 0 10px #ff0000,
      0 0 20px #ff0000,
      0 0 40px rgba(255,0,0,.8),
      0 0 80px rgba(255,0,0,.6);
  }
  50%{
    text-shadow:
      0 0 20px #ff0000,
      0 0 40px #ff0000,
      0 0 80px rgba(255,0,0,.9),
      0 0 120px rgba(255,0,0,.7);
  }
  100%{
    text-shadow:
      0 0 10px #ff0000,
      0 0 20px #ff0000,
      0 0 40px rgba(255,0,0,.8),
      0 0 80px rgba(255,0,0,.6);
  }
}

/* Flicker */
@keyframes ledFlicker{
  0%,19%,21%,23%,52%,54%,100%{
    opacity:1;
  }
  20%,22%,53%{
    opacity:.75;
  }
}

/* Texto */
.contact-card span {
  color:white;
}
</style>
