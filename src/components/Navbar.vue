<template>
  <v-app-bar
    color="rgba(17,17,17,0.95)"
    dark
    flat
    app
  >
    <v-container>
      <!-- Logo o nombre -->
      <v-toolbar-title class="doto-title">
        Denis Salinas
      </v-toolbar-title>

      <v-spacer></v-spacer>

      <!-- Links de navegación -->
      <v-btn
        v-for="item in navItems"
        :key="item.text"
        text
        class="nav-btn"
        :to="item.route"
      >
        {{ item.text }}
      </v-btn>
    </v-container>
  </v-app-bar>
</template>

<script setup lang="ts">
const navItems = [
  { text: "Historia", route: "/historia" },
  { text: "Contacto", route: "/contacto" }
];
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Doto:wght@900&display=swap');

.doto-title {
  font-family: 'Doto', monospace;
  letter-spacing: 2px;
  color: #ff0000;
  text-shadow: 0 0 6px #ff0000, 0 0 12px rgba(255,0,0,0.8);
}

.nav-btn {
  color: white;
  font-size: 16px;
  text-transform: uppercase;
  margin-left: 10px;
  transition: all 0.3s ease;
}

.nav-btn:hover {
  color: #ff0000;
  text-shadow: 0 0 6px #ff0000, 0 0 12px rgba(255,0,0,0.8);
}
</style>
