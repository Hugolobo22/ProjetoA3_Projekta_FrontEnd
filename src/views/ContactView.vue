<template>
  <v-container>
    <v-card class="mx-auto my-12" max-width="600">
      <v-card-title class="text-h5 text-center">Fale Conosco</v-card-title>
      <v-card-text>
        <v-form ref="contactForm" v-model="valid" lazy-validation>
          <v-text-field 
            v-model="name"
            label="Nome Completo" 
            outlined 
            required
            :rules="[v => !!v || 'Nome é obrigatório']"
            prepend-inner-icon="mdi-account"
          ></v-text-field>
          
          <v-text-field 
            v-model="email"
            label="Email" 
            outlined 
            required
            type="email"
            :rules="emailRules"
            prepend-inner-icon="mdi-email"
          ></v-text-field>
          
          <v-text-field
            v-model="phone"
            label="Telefone"
            outlined
            required
            v-mask="'(##) #####-####'"
            :rules="[v => !!v || 'Telefone é obrigatório']"
            prepend-inner-icon="mdi-phone"
          ></v-text-field>
          
          <v-textarea 
            v-model="message"
            label="Sua Mensagem" 
            outlined 
            required
            :rules="[v => !!v || 'Mensagem é obrigatória']"
            prepend-inner-icon="mdi-message-text"
            rows="4"
          ></v-textarea>
        </v-form>
      </v-card-text>
      
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn 
          color="black" 
          class="elevation-2" 
          @click="submitForm"
          :enable="!valid || loading"
        >
          <template v-if="loading">
            <v-progress-circular indeterminate color="white" size="20"></v-progress-circular>
          </template>
          <template v-else>
            Enviar Mensagem
          </template>
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-container>
</template>

<script>
import axios from 'axios';

export default {
  name: 'ContactView',
  data() {
    return {
      valid: false,
      name: '',
      email: '',
      phone: '',
      message: '',
      loading: false,
      emailRules: [
        v => !!v || 'E-mail é obrigatório',
        v => /.+@.+\..+/.test(v) || 'O e-mail deve ser válido'
      ]
    }
  },
  methods: {
    submitForm() {
      if (this.$refs.contactForm.validate()) {
        this.loading = true;
        const formData = {
          name: this.name,
          email: this.email,
          phone: this.phone,
          message: this.message
        };
      }
    }
  },
  // Máscara para o telefone
  directives: {
    mask: {
      bind(el, binding) {
        el.addEventListener('input', (e) => {
          e.target.value = e.target.value.replace(/\D/g, '')
            .replace(/^(\d{2})(\d)/, '($1) $2')
            .replace(/(\d{4})(\d)/, '$1-$2')
            .replace(/(\d{4})-(\d)(\d{4})/, '$1$2-$3')
            .slice(0, 15);
        });
      }
    }
  }
}
</script>

<style scoped>
.bg-dark {
  background-image: url("https://media.istockphoto.com/id/1277178373/vector/seamless-dark-hexagon-texture-abstract-background.jpg?s=612x612&w=0&k=20&c=VvX28q5vSKXnsxAsciqxqW1aVmwPr60spgRgiOzRhIg=");
  background-repeat: repeat;
  color: #ffffff;
}

.v-card {
  box-shadow: 0 4px 6px rgba(0,0,0,0.1);
}
</style>
