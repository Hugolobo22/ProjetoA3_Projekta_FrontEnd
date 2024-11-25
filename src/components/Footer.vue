<template>
  <v-footer class="bg-grey-lighten-1 py-4">
    <v-container>
      <v-row align="center">
        <!-- Seção Sobre (Esquerda) -->
        <v-col cols="12" md="4" class="text-center text-md-left mb-4 mb-md-0">
          <div class="footer-about">
            <strong>Sobre Nós:</strong>
            <p class="mb-0">
              Somos uma empresa dedicada a oferecer as melhores soluções digitais.
            </p>
          </div>
        </v-col>

        <!-- Links de Navegação (Centro) -->
        <v-col cols="12" md="4" class="text-center mb-4 mb-md-0">
          <v-row justify="center" class="flex-column flex-md-row">
            <v-btn
              v-for="link in links"
              :key="link.name"
              :to="link.route"
              color="white"
              rounded="xl"
              variant="text"
              class="footer-link mx-1 my-1"
            >
              {{ link.name }}
            </v-btn>
          </v-row>
        </v-col>

        <!-- Redes Sociais (Direita) -->
        <v-col cols="12" md="4" class="text-center text-md-right">
          <v-btn icon href="https://facebook.com" target="_blank" class="mx-1">
            <v-icon color="blue darken-3">mdi-facebook</v-icon>
          </v-btn>
          <v-btn icon href="https://twitter.com" target="_blank" class="mx-1">
            <v-icon color="blue lighten-2">mdi-twitter</v-icon>
          </v-btn>
          <v-btn icon href="https://instagram.com" target="_blank" class="mx-1">
            <v-icon color="purple darken-1">mdi-instagram</v-icon>
          </v-btn>
          <v-btn icon href="https://linkedin.com" target="_blank" class="mx-1">
            <v-icon color="blue darken-1">mdi-linkedin</v-icon>
          </v-btn>
        </v-col>
      </v-row>

      <!-- Copyright (Base do Footer) -->
      <v-row justify="center" class="mt-4">
        <v-col class="text-center">
          <small>© {{ new Date().getFullYear() }} — Projekta. Todos os direitos reservados.</small>
        </v-col>
      </v-row>
    </v-container>
  </v-footer>
</template>

<script>
export default {
  name: "Footer",
  data() {
    return {
      links: [
        { name: "Home", route: "/" },
        { name: "Sobre", route: "/about" },
        { name: "Contato", route: "/contact" },
        { name: "Trabalhe Conosco", route: "/jobs" },
      ],
    };
  },
};
</script>

<style scoped>
.bg-grey-lighten-1 {
  background-color: #f5f5f5;
}

.footer-about {
  font-size: 0.9rem;
}

.footer-link {
  font-size: 0.9rem;
}

.v-btn--icon {
  margin-left: 4px;
  margin-right: 4px;
}
</style>
