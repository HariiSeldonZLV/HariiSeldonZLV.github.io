<template>
  <v-container class="py-12">

    <div
      class="back-home-arrow"
      v-if="!isHomePage"
      @click="goHome"
    ></div>

    <h3 class="doto red-title text-center mb-8 text-h4">Proyectos Web</h3>

    <v-row justify="center" class="mb-12">
      <v-col cols="12" md="6">
        <v-card class="dark-card h-100" outlined>
          <div class="mockup-laptop-real">
            <div class="mockup-screen-wrapper">
              <img
                :src="maulenoticiasImg"
                alt="Captura Maulenoticias"
                class="mockup-screen"
              />
              <div class="mockup-reflection"></div>
            </div>
          </div>

          <v-card-title class="doto red-title justify-center text-center">
            Proyecto Maulenoticias2
          </v-card-title>

          <v-card-subtitle class="montserrat red-subtitle text-center">
            Sitio web de noticias desarrollado como proyecto personal
          </v-card-subtitle>

          <v-card-text class="montserrat white-text text-center">
            Revisa el proyecto completo y explora noticias actualizadas con una interfaz dinámica.
          </v-card-text>

          <v-card-actions class="justify-center pb-6">
            <v-btn
              color="primary"
              variant="elevated"
              href="https://hariiseldonzlv.github.io/maulenoticias2/#/"
              target="_blank"
            >
              Ver Proyecto
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>

      <v-col cols="12" md="6">
        <v-card class="dark-card h-100" outlined>
          <div class="mockup-laptop-real">
            <div class="mockup-screen-wrapper">
              <img
                :src="priscillaImg"
                alt="Captura Proyecto Diputada"
                class="mockup-screen"
              />
              <div class="mockup-reflection"></div>
            </div>
          </div>

          <v-card-title class="doto red-title justify-center text-center">
            Proyecto Diputada Priscilla Castillo
          </v-card-title>

          <v-card-subtitle class="montserrat red-subtitle text-center">
            Plataforma institucional desarrollada con Vue 3 y Vuetify
          </v-card-subtitle>

          <v-card-text class="montserrat white-text text-center">
            Sitio optimizado con despliegue continuo en Netlify y diseño moderno orientado al servicio público.
          </v-card-text>

          <v-card-actions class="justify-center pb-6">
            <v-btn
              color="primary"
              variant="elevated"
              href="https://super-creponne-d29a1a.netlify.app"
              target="_blank"
            >
              Ver Proyecto
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>

    <h3 class="doto red-title text-center mb-8 text-h4">Proyectos Humanitarios</h3>
    <v-row justify="center" dense>
      <v-col cols="12" md="4" v-for="(video, index) in videos" :key="index">
        <v-card class="dark-card h-100" outlined>
          <iframe
            :src="`https://www.youtube.com/embed/${video.id}`"
            height="200"
            frameborder="0"
            allowfullscreen
            class="video-frame"
          ></iframe>
          <v-card-title class="doto red-title">{{ video.title }}</v-card-title>
          <v-card-text class="montserrat white-text">{{ video.desc }}</v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup lang="ts">
import maulenoticiasImg from "@/assets/maulenoticias.png";
import priscillaImg from "@/assets/priscilla.png"; // Asegúrate de que esta imagen exista en assets
import { useRouter, useRoute } from "vue-router";

const router = useRouter();
const route = useRoute();
const isHomePage = route.path === "/" || route.path === "/the-singles-portfolio/";

function goHome() {
  router.push("/");
}

const videos = [
  {
    title: "Medios de vida pesqueros",
    id: "58VOpib2BaI",
    desc: "Proyecto humanitario enfocado en medios de vida pesqueros en comunidades locales."
  },
  {
    title: "Medios de vida apicultura",
    id: "MM1rrrzJgXk",
    desc: "Desarrollo de iniciativas de apicultura para mejorar ingresos de familias rurales."
  },
  {
    title: "Red para reconstrucción",
    id: "4wj9yxXswqQ",
    desc: "Coordinación de proyectos de reconstrucción y ayuda post-desastres naturales."
  }
];
</script>

<style scoped>
/* FLECHA FIJA VOLVER AL HOME */
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
  background: rgba(0,0,0,0.3);
  border-radius: 5px;
  padding: 5px;
}

@keyframes bounce {
  0%, 20%, 50%, 80%, 100% { transform: translateY(0) rotate(-45deg); }
  40% { transform: translateY(-6px) rotate(-45deg); }
  60% { transform: translateY(-3px) rotate(-45deg); }
}

.back-home-arrow:hover {
  border-color: #ff0000;
  background: rgba(255,0,0,0.2);
  transform: translateY(-2px) rotate(-45deg);
}

.dark-card {
  background-color: #1a1a1a !important;
  transition: transform 0.3s;
  display: flex;
  flex-direction: column;
}
.dark-card:hover {
  transform: scale(1.02);
}

.doto {
  font-family: "Doto", sans-serif !important;
}
.montserrat {
  font-family: "Montserrat", sans-serif !important;
}
.red-title {
  color: #ff4d4d !important;
}
.red-subtitle {
  color: #ff4d4d !important;
  font-weight: bold;
}
.white-text {
  color: #ffffff !important;
}

/* Mockup laptop realista */
.mockup-laptop-real {
  position: relative;
  width: 90%;
  margin: 16px auto;
  padding-top: 50.62%; /* Ajuste para proporción de pantalla */
}

.mockup-screen-wrapper {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border: 10px solid #222;
  border-bottom: 14px solid #222; /* Borde inferior más grueso simula base */
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 12px 25px rgba(0,0,0,0.6);
  background: #111;
}

.mockup-screen {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.mockup-reflection {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0) 50%);
  pointer-events: none;
}

.video-frame {
  width: 100%;
}
</style>
