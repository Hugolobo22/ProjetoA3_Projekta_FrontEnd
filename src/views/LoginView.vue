<template>
  <v-container class="auth-container" fluid>
    <v-row justify="center">
      <v-col cols="12" md="6" lg="4">
        <v-card class="auth-card">
          <v-card-title class="auth-title">
            <span class="headline">{{ isLogin ? 'Login' : 'Cadastro' }}</span>
          </v-card-title>
          <v-card-text>
            <!-- Botões para alternar entre Login e Cadastro -->
            <v-row justify="center" class="button-group">
              <v-btn
                :color="isLogin ? 'primary' : 'grey'"
                @click="isLogin = true"
              >
                Login
              </v-btn>
              <v-btn
                :color="!isLogin ? 'success' : 'grey'"
                @click="isLogin = false"
              >
                Cadastro
              </v-btn>
            </v-row>

            <!-- Formulário de Login -->
            <v-form v-if="isLogin" ref="loginForm" v-model="valid" lazy-validation>
              <v-text-field
                v-model="loginData.email"
                :rules="[rules.required, rules.email]"
                label="E-mail"
                outlined
                dense
                required
                prepend-inner-icon="mdi-email"
              ></v-text-field>
              <v-text-field
                v-model="loginData.password"
                :rules="[rules.required, rules.min]"
                label="Password"
                type="password"
                outlined
                dense
                required
                prepend-inner-icon="mdi-lock"
              ></v-text-field>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="primary" @click="login">
                  Entrar
                </v-btn>
              </v-card-actions>
            </v-form>

            <!-- Formulário de Cadastro -->
            <v-form v-else ref="signupForm" v-model="valid" lazy-validation>
              <v-text-field
                v-model="signupData.email"
                :rules="[rules.required, rules.email]"
                label="E-mail"
                outlined
                dense
                required
                prepend-inner-icon="mdi-email"
              ></v-text-field>
              <v-text-field
                v-model="signupData.password"
                :rules="[rules.required, rules.min]"
                label="Password"
                type="password"
                outlined
                dense
                required
                prepend-inner-icon="mdi-lock"
              ></v-text-field>
              <v-text-field
                v-model="signupData.confirmPassword"
                :rules="[rules.required, confirmPassword]"
                label="Confirm Password"
                type="password"
                outlined
                dense
                required
                prepend-inner-icon="mdi-lock-check"
              ></v-text-field>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="success" @click="signup">
                  Cadastrar
                </v-btn>
              </v-card-actions>
            </v-form>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'Auth',
  data() {
    return {
      isLogin: true, // Controla qual formulário é exibido
      valid: false,
      users: [], // Array para armazenar os usuários cadastrados
      loginData: {
        email: '',
        password: ''
      },
      signupData: {
        email: '',
        password: '',
        confirmPassword: ''
      },
      rules: {
        required: value => !!value || 'Required.',
        email: value => {
          const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
          return pattern.test(value) || 'Invalid e-mail.';
        },
        min: value => (value && value.length >= 6) || 'Min 6 characters'
      }
    };
  },
  computed: {
    confirmPassword() {
      return value => value === this.signupData.password || 'Passwords must match';
    }
  },
  methods: {
    login() {
      if (this.$refs.loginForm.validate()) {
        const user = this.users.find(
          user =>
            user.email === this.loginData.email &&
            user.password === this.loginData.password
        );
        if (user) {
          console.log('Login bem-sucedido!');
          this.$router.push('/'); // Redireciona para a tela padrão
        } else {
          alert('Usuário ou senha incorretos');
        }
      }
    },
    signup() {
      if (this.$refs.signupForm.validate()) {
        this.users.push({
          email: this.signupData.email,
          password: this.signupData.password
        });
        alert('Usuário cadastrado com sucesso!');
        this.isLogin = true; // Retorna para o formulário de login após o cadastro
      }
    }
  }
};
</script>

<style scoped>
.auth-container {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background: linear-gradient(135deg, #6d5dfc 0%, #ff8f70 100%);
}

.auth-card {
  border-radius: 12px;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.1);
}

.auth-title {
  display: flex;
  justify-content: center;
  padding-top: 20px;
  padding-bottom: 10px;
}

.headline {
  font-size: 26px;
  font-weight: bold;
  color: #fff;
}

.button-group {
  margin-bottom: 20px;
}

.v-btn.primary {
  color: white;
}

.v-btn.success {
  color: white;
}

.v-btn.grey {
  background-color: #e0e0e0;
  color: #000;
}

.v-card-text {
  padding: 20px 30px;
}

.v-text-field {
  margin-bottom: 20px;
}
</style>
