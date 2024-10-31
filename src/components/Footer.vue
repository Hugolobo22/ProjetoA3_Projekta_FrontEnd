<template>
  <v-footer app color="#222" class="white--text">
    <v-container>
      <v-row justify="center">
        <v-col class="text-center">
          © 2023 - Meu Site
        </v-col>
        <v-col class="text-center">
          <v-btn icon href="https://facebook.com" target="_blank">
            <v-icon color="black">mdi-facebook</v-icon>
          </v-btn>
          <v-btn icon href="https://twitter.com" target="_blank">
            <v-icon color="black">mdi-twitter</v-icon>
          </v-btn>
          <v-btn icon href="https://instagram.com" target="_blank">
            <v-icon color="black">mdi-instagram</v-icon>
          </v-btn>
        </v-col>
      </v-row>
    </v-container>
  </v-footer>
</template>

<script>
export default {
  name: 'Footer',
};
</script>

