<template>
  <v-app>
    <Navbar />
    <v-main>
      <v-container class="mt-4">
        <router-view />
      </v-container>
    </v-main>
    <Footer />
  </v-app>
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