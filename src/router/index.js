import { createRouter, createWebHistory } from "vue-router";

import Homevueds from "../views/Homevueds.vue";
import Historia from "../views/Historia.vue";
import Skills from "../views/Skills.vue";
import Proyectos from "../views/Proyectos.vue";
import Experiencia from "../views/Experiencia.vue";
import Certificaciones from "../views/Certificaciones.vue";
import Contacto from "../views/Contacto.vue";

const routes = [
  { path: "/", component: Homevueds },
  { path: "/historia", component: Historia },
  { path: "/skills", component: Skills },
  { path: "/proyectos", component: Proyectos },
  { path: "/experiencia", component: Experiencia },
  { path: "/certificaciones", component: Certificaciones },
  { path: "/contacto", component: Contacto },
];

const router = createRouter({
  history: createWebHistory("/the-singles-portfolio/"), // <-- base path para GH Pages
  routes,
});

export default router;
