<template>
  <v-container>
    <v-card class="mx-auto my-12" max-width="600">
      <v-card-title>Contato</v-card-title>
      <v-card-text>
        <v-form>
          <v-text-field label="Nome" outlined required></v-text-field>
          <v-text-field label="Email" outlined required type="email"></v-text-field>
          <v-textarea label="Mensagem" outlined required></v-textarea>
          <v-textarea label="Mensagem 2" outlined required></v-textarea>
        </v-form>
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="primary">Enviar</v-btn>
      </v-card-actions>
    </v-card>
  </v-container>
</template>

<script>
export default {
  name: 'ContactView',
};
</script>