<template>
  <v-container>
    <v-card class="mx-auto my-12" max-width="600">
      <v-img src="https://picsum.photos/600/300" height="300px"></v-img>
      <v-card-title>Bem-vindo ao Meu Site</v-card-title>
      <v-card-subtitle class="mb-3">Conheça mais sobre nós e nossos serviços.</v-card-subtitle>
      <v-card-actions>
        <v-btn color="primary" to="/about">Saiba Mais</v-btn>
        <v-btn color="secondary" to="/contact">Contato</v-btn>
      </v-card-actions>
    </v-card>
  </v-container>
</template>

<script>
export default {
  name: 'HomeView',
};
</script>