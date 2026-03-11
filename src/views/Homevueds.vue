<template>
  <div class="background">

    <!-- Luces estáticas detrás -->
    <div class="lights-container">
      <div class="light-green"></div>
      <div class="light-white" v-for="i in 10" :key="i" :style="{ left: `${5 + (i-1)*9}%`, top: '55%' }"></div>
    </div>

    <!-- Cards -->
    <v-row justify="center" align="center" class="cards-row">
      <v-col
        v-for="(item,index) in letters"
        :key="index"
        cols="auto"
        style="position: relative; z-index: 2;"
      >
        <v-card
          class="letter-card hover-card"
          elevation="0"
          @click="goTo(item.route)"
        >
          <div class="letter-container">
            <div class="gate-wrapper">
              <div class="gate gate-left">
                {{ item.char }}
              </div>
              <div class="gate gate-right">
                {{ item.char }}
              </div>
              <div class="hover-word">
                {{ item.word }}
              </div>
            </div>
          </div>
        </v-card>
      </v-col>
    </v-row>

    <!-- Leyenda en la parte inferior -->
    <div class="immersive-note-container">
      <p class="immersive-note fade-up">
        Para una experiencia inmersiva en mi portafolio recomiendo hacer click en la nota musical,
        disfruta el recorrido por mi vida y experiencia.
      </p>
    </div>

  </div>
</template>

<script setup>
import { useRouter } from "vue-router"

const router = useRouter()

const letters = [
  { char: "d", word: "HISTORIA", route: "/historia" },
  { char: "s", word: "SKILLS", route: "/skills" },
  { char: "1", word: "PROYECTOS", route: "/proyectos" },
  { char: "9", word: "EXPERIENCIA", route: "/experiencia" },
  { char: "8", word: "CERTIFICACIONES", route: "/certificaciones" },
  { char: "0", word: "CONTACTO", route: "/contacto" }
]

function goTo(route){
  router.push(route)
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Doto:wght@900&display=swap');

/* BACKGROUND */
.background{
  position:relative;
  min-height:100vh;
  width:100%;
  background:
    linear-gradient(
      to bottom,
      #138ea4 0%,
      #138ea4 35%,
      rgba(252,176,69,0.35) 45%,
      #000000 65%,
      #000000 100%
    );
  display:flex;
  flex-direction:column;
  justify-content:flex-start;
  align-items:center;
  overflow:hidden;
  padding-top:40px;
}

/* scanlines */
.background::before{
  content:'';
  position:absolute;
  inset:0;
  background-image:
    repeating-linear-gradient(
      to bottom,
      rgba(0,0,0,0) 0px,
      rgba(0,0,0,0.08) 1px
    );
  opacity:.25;
  pointer-events:none;
}

/* glow */
.background::after{
  content:'';
  position:absolute;
  inset:0;
  background:
    radial-gradient(
      circle at center,
      rgba(255,255,255,0.03) 0%,
      transparent 80%
    );
  pointer-events:none;
}

/* LUCES ESTÁTICAS */
.lights-container{
  position:absolute;
  inset:0;
  z-index:1;
}

.light-white{
  position:absolute;
  width:20px;
  height:20px;
  background:white;
  border-radius:50%;
  filter: blur(2px);
  opacity:0.8;
}

.light-green{
  position:absolute;
  width:50px;
  height:50px;
  background:#68e00c;
  border-radius:50%;
  filter: blur(20px);
  opacity:0.7;
  left:5%;
  top:50%;
}

/* CARD */
.letter-card{
  position:relative;
  z-index:2;
  background:black !important;
  border:2px solid #ff0000;
  width:120px;
  height:150px;
  border-radius:12px;
  margin:0 10px;
  display:flex;
  align-items:flex-end;
  justify-content:center;
  cursor:pointer;
  box-shadow:
    0 0 20px rgba(255,0,0,.9),
    0 0 40px rgba(255,0,0,.6),
    0 0 60px rgba(255,0,0,.4);
}

/* container */
.letter-container{
  width:100%;
  height:100%;
  display:flex;
  justify-content:center;
  align-items:flex-end;
  padding-bottom:6px;
}

/* wrapper */
.gate-wrapper{
  position:relative;
  width:100%;
  height:100%;
  display:flex;
  justify-content:center;
  align-items:flex-end;
}

/* gates */
.gate{
  position:absolute;
  bottom:6px;
  font-family:'Doto', monospace;
  font-weight:900;
  font-size:85px;
  color:#ff0000;
  transition:transform .5s ease, opacity .3s ease;
  text-shadow:
    0 0 10px #ff0000,
    0 0 20px #ff0000,
    0 0 40px rgba(255,0,0,.8),
    0 0 80px rgba(255,0,0,.6);

  animation:
    ledPulse 2.2s ease-in-out infinite,
    ledFlicker 6s linear infinite;
}

.gate-left{
  clip-path: inset(0 50% 0 0);
}

.gate-right{
  clip-path: inset(0 0 0 50%);
}

/* hover word */
.hover-word{
  position:absolute;
  bottom:45px;
  width:100%;
  text-align:center;
  font-family:'Doto', monospace;
  font-weight:900;
  font-size:clamp(10px,1vw,14px);
  letter-spacing:2px;
  white-space:nowrap;
  color:#ff0000;
  opacity:0;
  transform:scale(.8);
  transition:all .4s ease;
  text-shadow:
    0 0 10px #ff0000,
    0 0 20px rgba(255,0,0,.8);
}

/* hover animation */
.hover-card:hover .gate-left{
  transform:translateX(-60px);
}

.hover-card:hover .gate-right{
  transform:translateX(60px);
}

.hover-card:hover .gate{
  opacity:.25;
}

.hover-card:hover .hover-word{
  opacity:1;
  transform:scale(1);
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

/* flicker */
@keyframes ledFlicker{
  0%,19%,21%,23%,52%,54%,100%{
    opacity:1;
  }
  20%,22%,53%{
    opacity:.75;
  }
}

/* Leyenda inmersiva */
.immersive-note-container{
  margin-top:auto;
  margin-bottom:40px;
  text-align:center;
  width:100%;
}

.immersive-note{
  font-size:16px;
  color:white;
  opacity:0;
  line-height:1.6;
  font-style:italic;
  transform: translateY(20px);
  animation: fadeUp 1.5s ease-out forwards;
}

@keyframes fadeUp {
  0% { opacity:0; transform: translateY(20px); }
  100% { opacity:0.85; transform: translateY(0); }
}
</style>
