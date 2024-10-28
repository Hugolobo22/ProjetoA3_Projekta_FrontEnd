<template>
  <v-app>
    <v-container>
      <v-carousel class="custom-carousel">
        <v-carousel-item
          src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
          cover
        >
          <v-container fill-height>
            <v-row align="center" justify="center">
              <v-col class="text-center">
                <h1 class="white--text">Docks</h1>
                <v-btn class="white--text" @click="goToLink('https://example.com/docks')">Saiba mais</v-btn>
              </v-col>
            </v-row>
          </v-container>
        </v-carousel-item>

        <v-carousel-item
          src="https://cdn.vuetifyjs.com/images/cards/hotel.jpg"
          cover
        >
          <v-container fill-height>
            <v-row align="center" justify="center">
              <v-col class="text-center">
                <h1 class="white--text">Hotel</h1>
                <v-btn class="white--text" @click="goToLink('https://example.com/hotel')">Saiba mais</v-btn>
              </v-col>
            </v-row>
          </v-container>
        </v-carousel-item>

        <v-carousel-item
          src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
          cover
        >
          <v-container fill-height>
            <v-row align="center" justify="center">
              <v-col class="text-center">
                <h1 class="white--text">Sunshine</h1>
                <v-btn class="white--text" @click="goToLink('https://example.com/sunshine')">Saiba mais</v-btn>
              </v-col>
            </v-row>
          </v-container>
        </v-carousel-item>
      </v-carousel>

      <v-divider></v-divider>

      <v-row>
        <v-col v-for="link in importantLinks" :key="link.text" cols="12" md="4">
          <v-card class="ma-3">
            <v-card-title>{{ link.text }}</v-card-title>
            <v-card-actions>
              <v-btn @click="goToLink(link.href)" text>Visitar</v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-app>
</template>

<script>
export default {
  name: 'HelloWorld',

  data: () => ({
    importantLinks: [
      {
        text: 'Chat',
        href: 'https://community.vuetifyjs.com',
      },
      {
        text: 'Made with Vuetify',
        href: 'https://madewithvuejs.com/vuetify',
      },
      {
        text: 'Twitter',
        href: 'https://twitter.com/vuetifyjs',
      },
      {
        text: 'Articles',
        href: 'https://medium.com/vuetify',
      },
    ],
  }),

  methods: {
    goToLink(url) {
      window.open(url, '_blank');
    },
  },
}
</script>

<style>
.custom-carousel {
  max-height: 500px; /* Defina a altura máxima do carrossel */
  border-radius: 15px; /* Bordas arredondadas */
  overflow: hidden; /* Para esconder partes do carrossel que saem dos limites */
}
.custom-carousel h1 {
  font-size: 2.5rem; /* Tamanho da fonte do título */
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.7); /* Sombra do texto */
}

body {
  background-color: #f5f5f5; /* Cor de fundo suave */
}

.v-application {
  padding: 20px; /* Espaçamento ao redor do conteúdo */
}

.v-card {
  transition: transform 0.3s; /* Efeito de transição ao passar o mouse */
}

.v-card:hover {
  transform: scale(1.05); /* Aumenta um pouco o cartão ao passar o mouse */
}
</style>
