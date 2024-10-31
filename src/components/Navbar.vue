<template>
  <v-app-bar app color="#222" dark>
    <v-app-bar-nav-icon></v-app-bar-nav-icon>
    <v-toolbar-title>Meu Site</v-toolbar-title>
    <v-spacer></v-spacer>
    <v-btn text to="/" icon>
      <v-icon>mdi-home</v-icon>
    </v-btn>
    <v-btn text to="/about" icon>
      <v-icon>mdi-information</v-icon>
    </v-btn>
    <v-btn text to="/contact" icon>
      <v-icon>mdi-email</v-icon>
    </v-btn>
  </v-app-bar>
</template>

<script>
export default {
  name: 'Navbar',
};
</script>
