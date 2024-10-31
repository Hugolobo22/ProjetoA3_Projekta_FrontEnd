<template>
  <!-- Navbar -->
  <Navbar />
    <!-- Conteúdo Principal -->
    <v-main>
      <v-container class="mt-4">
        <router-view />
      </v-container>
    </v-main>
    <!-- Footer -->
  <Footer />
</template>

<script>
import Navbar from './Navbar.vue';
import Footer from './Footer.vue';

export default {
  name: 'Layout',
  components: {
    Navbar,
    Footer,
  },
};
</script>