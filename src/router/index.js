// src/router/index.ts
import { createRouter, createWebHashHistory } from "vue-router";
import Homevueds from "@/views/Homevueds.vue";
import Historia from "@/views/Historia.vue";
import Skills from "@/views/Skills.vue";
import Proyectos from "@/views/Proyectos.vue";
import Experiencia from "@/views/Experiencia.vue";
import Certificaciones from "@/views/Certificaciones.vue";
import Contacto from "@/views/Contacto.vue";

const router = createRouter({
  history: createWebHashHistory("/"),

  routes: [
    {
      path: "/",
      name: "home",
      component: Homevueds,
    },
    {
      path: "/historia",
      name: "historia",
      component: Historia,
    },
    {
      path: "/skills",
      name: "skills",
      component: Skills,
    },
    {
      path: "/proyectos",
      name: "proyectos",
      component: Proyectos,
    },
    {
      path: "/experiencia",
      name: "experiencia",
      component: Experiencia,
    },
    {
      path: "/certificaciones",
      name: "certificaciones",
      component: Certificaciones,
    },
    {
      path: "/contacto",
      name: "contacto",
      component: Contacto,
    },
    // Redirección por si el usuario escribe una ruta que no existe
    {
      path: "/:pathMatch(.*)*",
      redirect: "/",
    },
  ],
  // Esto hace que cuando cambies de página, el scroll vuelva arriba
  scrollBehavior() {
    return { top: 0 };
  },
});

export default router;
