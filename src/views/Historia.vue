<template>
  <div class="background">
    <v-container class="py-12">

      <!-- TITULO -->
      <v-row justify="center">
        <v-col cols="12" md="8" class="text-center">
          <h1 class="title doto-title">Historia</h1>
          <p class="intro">
            De la coordinación de operaciones humanitarias internacionales
            al desarrollo de software. Más de 20 años trabajando con sistemas
            complejos, personas y tecnología.
          </p>
        </v-col>
      </v-row>

      <!-- BLOQUES DE EXPERIENCIA -->
      <v-row class="mt-10" justify="center">
        <v-col cols="12" md="4">
          <v-card class="info-card" elevation="0">
            <div class="icon">
              <!-- Cruz Roja SVG -->
              <svg width="50" height="50" viewBox="0 0 100 100">
                <rect width="100" height="100" fill="white"/>
                <rect x="40" y="20" width="20" height="60" fill="#ff0000"/>
                <rect x="20" y="40" width="60" height="20" fill="#ff0000"/>
              </svg>
            </div>
            <h3 class="doto-title">Cruz Roja Chilena e Internacional</h3>
            <p>
              Operaciones humanitarias, coordinación internacional
              y proyectos de reconstrucción posteriores al terremoto
              y tsunami de 2010 en Chile.
            </p>
          </v-card>
        </v-col>

        <v-col cols="12" md="4">
          <v-card class="info-card" elevation="0">
            <div class="icon">🌍</div>
            <h3 class="doto-title">Trabajo internacional</h3>
            <p>
              Coordinación con equipos multiculturales y organizaciones
              internacionales, trabajando en español, inglés y portugués.
            </p>
          </v-card>
        </v-col>

        <v-col cols="12" md="4">
          <v-card class="info-card" elevation="0">
            <div class="icon">🐟</div>
            <h3 class="doto-title">Logística productiva</h3>
            <p>
              Gestión logística, almacenamiento, control de calidad
              y operación en procesos productivos agroindustriales.
            </p>
          </v-card>
        </v-col>
      </v-row>

      <!-- TIMELINE -->
      <v-row class="mt-16" justify="center">
        <v-col cols="12" md="8">
          <h2 class="section-title doto-title">Trayectoria</h2>
          <div class="timeline">
            <div class="timeline-item">
              <span class="year">1996</span>
              <div class="desc">Inicio trabajo humanitario con Cruz Roja.</div>
            </div>
            <div class="timeline-item">
              <span class="year">2007</span>
              <div class="desc">Instituto Nacional de Estadísticas — desarrollo del nuevo IPC nacional.</div>
            </div>
            <div class="timeline-item">
              <span class="year">2010</span>
              <div class="desc">Operación humanitaria terremoto Chile — coordinación internacional y hospital japonés.</div>
            </div>
            <div class="timeline-item">
              <span class="year">2019</span>
              <div class="desc">Soporte tecnológico para sistemas de pago electrónico y DTE.</div>
            </div>
            <div class="timeline-item">
              <span class="year">2020</span>
              <div class="desc">Proyectos tecnológicos en seguridad pública con herramientas de IA.</div>
            </div>
            <div class="timeline-item">
              <span class="year">2025</span>
              <div class="desc">Transición profesional hacia desarrollo front-end.</div>
            </div>
          </div>
        </v-col>
      </v-row>

      <!-- TRANSICIÓN -->
      <v-row class="mt-16" justify="center">
        <v-col cols="12" md="8">
          <h2 class="section-title doto-title">Transición a tecnología</h2>
          <p class="paragraph">
            Tras muchos años de trabajo en terreno y debido a una discapacidad
            desarrollada durante ese proceso, decidí redirigir mi trayectoria
            hacia un ámbito donde siempre había tenido un fuerte interés técnico:
            la tecnología.
          </p>
          <p class="paragraph">
            Mi formación en informática y mantenimiento electrónico,
            junto con años trabajando con sistemas tecnológicos,
            me permitió dar este paso de manera natural hacia
            el desarrollo de software.
          </p>
        </v-col>
      </v-row>

      <!-- FILOSOFIA -->
      <v-row class="mt-16" justify="center">
        <v-col cols="12" md="6">
          <h2 class="section-title doto-title">Cómo trabajo</h2>
          <ul class="philosophy">
            <li>Resolver problemas reales antes que soluciones abstractas</li>
            <li>Diseñar sistemas simples para procesos complejos</li>
            <li>Pensar siempre en el usuario final</li>
            <li>Integrar tecnología con necesidades humanas</li>
          </ul>
        </v-col>
      </v-row>

      <!-- IDIOMAS -->
      <v-row class="mt-16" justify="center">
        <v-col cols="12" md="6">
          <h2 class="section-title doto-title">Idiomas</h2>
          <div class="languages">
            <div>🇨🇱 Español — Nativo</div>
            <div>🇬🇧 Inglés — Avanzado</div>
            <div>🇧🇷 Portugués — Intermedio</div>
          </div>
        </v-col>
      </v-row>

    </v-container>

    <!-- FLECHA VOLVER AL HOME -->
    <div class="back-home-arrow" @click="$router.push('/')"></div>

  </div>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Doto:wght@900&display=swap');

.doto-title {
  font-family:'Doto', monospace;
  letter-spacing:2px;
}

/* TITULO */
.title {
  font-size:48px;
  color:#ff0000;
  text-shadow:0 0 15px #ff0000;
  letter-spacing:4px;
}

.intro {
  margin-top:15px;
  font-size:20px;
  opacity:.95;
  color: white;
}

/* CARDS */
.info-card {
  background:rgba(17,17,17,0.9);
  padding:30px;
  text-align:center;
  border:1px solid #ff000044;
  transition:.3s;
  color:white;
}

.info-card:hover {
  box-shadow:0 0 20px #ff000055;
}

.info-card h3 {
  color:#ff0000;
  margin-bottom:12px;
  text-shadow:0 0 6px #ff0000, 0 0 12px rgba(255,0,0,.8);
}

.info-card p {
  font-size:16px;
  line-height:1.6;
  opacity:.95;
  color: white;
}

.icon {
  margin-bottom:20px;
  display:flex;
  justify-content:center;
  align-items:center;
  font-size:40px; /* íconos más grandes */
  text-shadow: 0 0 8px #ffffff55, 0 0 15px #ff000055; /* brillo ligero */
}

/* TITULOS */
.section-title {
  color:#ff0000;
  margin-bottom:20px;
}

/* TIMELINE */
.timeline {
  border-left:2px solid #ff0000;
  padding-left:20px;
}

.timeline-item {
  margin-bottom:25px;
  position:relative;
}

.timeline-item::before {
  content:"";
  position:absolute;
  left:-9px;
  top:5px;
  width:12px;
  height:12px;
  background:#ff0000;
  border-radius:50%;
  box-shadow:0 0 10px #ff0000;
}

.year {
  color:#ff0000;
  font-weight:bold;
}

.desc {
  opacity:.95;
  color: white;
  font-size:16px;
}

/* TEXTO */
.paragraph {
  margin-top:15px;
  line-height:1.8;
  color: white;
  font-size:18px;
}

/* FILOSOFIA */
.philosophy {
  margin-top:20px;
}

.philosophy li {
  margin-bottom:12px;
  color: white;
  font-size:16px;
}

/* IDIOMAS */
.languages {
  margin-top: 20px;
  text-align: center;
  color: white;
}

.languages div {
  margin-bottom: 10px;
  font-size:16px;
  color: white;
}

/* BACKGROUND */
.background{
  position: relative;
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
  display: block;
  padding-top: 60px;
  overflow: auto;
}

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
  z-index: 1000; /* siempre encima */
  background: rgba(0,0,0,0.3); /* opcional: ligera sombra de fondo */
  border-radius: 5px; /* opcional: bordes redondeados */
  padding: 5px;
}

@keyframes bounce {
  0%, 20%, 50%, 80%, 100% { transform: translateY(0) rotate(-45deg); }
  40% { transform: translateY(-6px) rotate(-45deg); }
  60% { transform: translateY(-3px) rotate(-45deg); }
}

/* Opcional: efecto hover para que destaque */
.back-home-arrow:hover {
  border-color: #ff0000;
  background: rgba(255,0,0,0.2);
  transform: translateY(-2px) rotate(-45deg);
}

</style>
