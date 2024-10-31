<template>
  <!-- App Bar -->
  <v-app-bar color="#222" dark>
    <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
    <span class="app-name">Projekta</span> <!-- Nome ao lado do ícone -->
    <v-spacer></v-spacer>

    <!-- Centralizando os Botões -->
    <div class="nav-buttons">
      <v-btn text to="/login" @click="drawer = false">Login</v-btn>
      <v-btn text to="/" @click="drawer = false">Home</v-btn>
      <v-btn text to="/about" @click="drawer = false">Sobre</v-btn>
      <v-btn text to="/contact" @click="drawer = false">Contato</v-btn>
    </div>

    <v-spacer></v-spacer>
  </v-app-bar>

  <!-- Menu Lateral (Drawer) -->
  <v-navigation-drawer
    v-model="drawer"
    absolute
    temporary
    class="menu-drawer"
  >
    <v-list>
      <v-list-item to="/" @click="drawer = false">
        <v-list-item-icon>
          <v-icon>mdi-home</v-icon>
        </v-list-item-icon>
        <v-list-item-title>Home</v-list-item-title>
      </v-list-item>
      <v-list-item to="/about" @click="drawer = false">
        <v-list-item-icon>
          <v-icon>mdi-information</v-icon>
        </v-list-item-icon>
        <v-list-item-title>Sobre</v-list-item-title>
      </v-list-item>
      <v-list-item to="/contact" @click="drawer = false">
        <v-list-item-icon>
          <v-icon>mdi-email</v-icon>
        </v-list-item-icon>
        <v-list-item-title>Contato</v-list-item-title>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
export default {
  name: 'Navbar',
  data() {
    return {
      drawer: false, // Controla a abertura do menu lateral
    };
  },
};
</script>

<style scoped>
.v-app-bar {
  display: flex;
  justify-content: center; /* Centraliza o conteúdo na App Bar */
}

.nav-buttons {
  display: flex;
  gap: 16px;
  align-items: center;
  justify-content: center;
  margin-right: 100px;
}

/* Oculta os botões em telas menores */
@media (max-width: 600px) {
  .nav-buttons {
    display: none; /* Oculta os botões em telas pequenas */
  }
}

.menu-drawer {
  z-index: 1000; /* Garante que o menu esteja acima do conteúdo */
  width: 250px; /* Ajusta a largura do menu */
  height: 100%; /* Ocupar toda a altura da tela */
  max-height: 300px; /* Remove o limite de altura */
  border-bottom-right-radius: 10px; /* Remove os cantos arredondados */
}

.app-name {
  color: white; /* Cor do texto, ajuste conforme necessário */
  font-size: 20px; /* Tamanho da fonte, ajuste conforme necessário */
  margin-left: 8px; /* Espaço entre o ícone e o nome */
  align-self: center; /* Alinha verticalmente com o ícone */
}
</style>
