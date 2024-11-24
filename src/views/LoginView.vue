<template>
  <v-container class="auth-container" fluid>
    <v-row justify="center" align="center" class="fill-height">
      <v-col cols="12" md="8" lg="6" xl="4">
        <v-card class="auth-card" :class="{ 'show-signup': !isLogin }">
          <!-- Card Content Wrapper -->
          <div class="auth-wrapper">
            <!-- Left Side - Login Form -->
            <div class="auth-side login-side">
              <v-img
                src="https://picsum.photos/400/400"
                class="auth-image"
                gradient="to bottom, rgba(0,0,0,.7), rgba(0,0,0,.9)"
              >
                <div class="auth-overlay">
                  <h2 class="text-h4 font-weight-bold white--text mb-4">
                    Bem-vindo de volta!
                  </h2>
                  <p class="text-subtitle-1 white--text mb-6">
                    Entre com sua conta para acessar nossos serviços
                  </p>
                  <v-btn
                    outlined
                    color="white"
                    @click="isLogin = false"
                    class="switch-btn"
                    v-if="isLogin"
                  >
                    Criar conta
                  </v-btn>
                </div>
              </v-img>
            </div>

            <!-- Right Side - Login or Signup Form -->
            <div class="auth-side form-side">
              <div class="form-wrapper">
                <div v-if="isLogin">
                  <h3 class="text-h5 font-weight-bold mb-6 text-center">Entrar</h3>
                  
                  <!-- Social Login Buttons -->
                  <div class="social-login mb-6">
                    <v-btn
                      class="mb-3"
                      block
                      outlined
                      color="error"
                      @click="socialLogin('google')"
                    >
                      <v-icon left>mdi-google</v-icon>
                      Continuar com Google
                    </v-btn>
                    <v-btn
                      block
                      outlined
                      color="primary"
                      @click="socialLogin('facebook')"
                    >
                      <v-icon left>mdi-facebook</v-icon>
                      Continuar com Facebook
                    </v-btn>
                  </div>

                  <div class="divider mb-6">
                    <span>ou entre com email</span>
                  </div>

                  <v-form ref="loginForm" v-model="valid" lazy-validation>
                    <v-text-field
                      v-model="loginData.email"
                      :rules="[rules.required, rules.email]"
                      label="E-mail"
                      outlined
                      dense
                      color="primary"
                      class="auth-input"
                      prepend-inner-icon="mdi-email"
                      @keyup.enter="login"
                    ></v-text-field>

                    <v-text-field
                      v-model="loginData.password"
                      :rules="[rules.required, rules.min]"
                      label="Senha"
                      type="password"
                      outlined
                      dense
                      color="primary"
                      class="auth-input"
                      prepend-inner-icon="mdi-lock"
                      @keyup.enter="login"
                    ></v-text-field>

                    <div class="d-flex flex-column align-start mb-6">
                      <v-checkbox
                        v-model="rememberMe"
                        label="Permanecer conectado"
                        color="primary"
                        dense
                        hide-details
                        class="mb-2"
                      ></v-checkbox>
                      <v-btn text small color="primary" @click="forgotPassword">
                        Esqueceu a senha?
                      </v-btn>
                    </div>

                    <v-btn
                      block
                      color="primary"
                      height="44"
                      :loading="loading"
                      @click="login"
                      class="mb-4"
                    >
                      Entrar
                    </v-btn>
                  </v-form>
                </div>

                <div v-else>
                  <h3 class="text-h5 font-weight-bold mb-6 text-center">Criar Conta</h3>
                  
                  <v-form ref="signupForm" v-model="valid" lazy-validation>
                    <v-text-field
                      v-model="signupData.name"
                      :rules="[rules.required]"
                      label="Nome completo"
                      outlined
                      dense
                      color="primary"
                      class="auth-input"
                      prepend-inner-icon="mdi-account"
                    ></v-text-field>

                    <v-text-field
                      v-model="signupData.email"
                      :rules="[rules.required, rules.email]"
                      label="E-mail"
                      outlined
                      dense
                      color="primary"
                      class="auth-input"
                      prepend-inner-icon="mdi-email"
                    ></v-text-field>

                    <v-text-field
                      v-model="signupData.password"
                      :rules="[rules.required, rules.min]"
                      label="Senha"
                      type="password"
                      outlined
                      dense
                      color="primary"
                      class="auth-input"
                      prepend-inner-icon="mdi-lock"
                      hint="Mínimo 6 caracteres"
                      persistent-hint
                    ></v-text-field>

                    <v-text-field
                      v-model="signupData.confirmPassword"
                      :rules="[rules.required, confirmPassword]"
                      label="Confirmar senha"
                      type="password"
                      outlined
                      dense
                      color="primary"
                      class="auth-input"
                      prepend-inner-icon="mdi-lock-check"
                    ></v-text-field>

                    <v-btn
                      block
                      color="primary"
                      height="44"
                      :loading="loading"
                      @click="signup"
                      class="mb-4"
                    >
                      Criar conta
                    </v-btn>

                    <div class="text-center">
                      <v-btn text color="primary" @click="isLogin = true">
                        Já tem uma conta? Entre aqui
                      </v-btn>
                    </div>
                  </v-form>
                </div>
              </div>
            </div>
          </div>
        </v-card>

        <!-- Snackbar para mensagens -->
        <v-snackbar
          v-model="snackbar.show"
          :color="snackbar.color"
          :timeout="4000"
          top
        >
          {{ snackbar.text }}
          <template v-slot:action="{ attrs }">
            <v-btn text v-bind="attrs" @click="snackbar.show = false">
              Fechar
            </v-btn>
          </template>
        </v-snackbar>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'AuthPage',
  data() {
    return {
      isLogin: true,
      valid: false,
      loading: false,
      rememberMe: false,
      users: [],
      loginData: { email: '', password: '' },
      signupData: { name: '', email: '', password: '', confirmPassword: '' },
      snackbar: { show: false, text: '', color: 'success' },
      rules: {
        required: v => !!v || 'Campo obrigatório',
        email: v => {
          const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
          return pattern.test(v) || 'E-mail inválido'
        },
        min: v => (v && v.length >= 6) || 'Mínimo 6 caracteres'
      }
    }
  },
  computed: {
    confirmPassword() {
      return v => v === this.signupData.password || 'As senhas não conferem'
    }
  },
  methods: {
    showMessage(text, color = 'success') {
      this.snackbar = { show: true, text, color }
    },
    async login() {
      if (!this.$refs.loginForm.validate()) return

      this.loading = true
      try {
        await new Promise(resolve => setTimeout(resolve, 1000))
        const user = this.users.find(
          user =>
            user.email === this.loginData.email &&
            user.password === this.loginData.password
        )
        if (user) {
          this.showMessage('Login realizado com sucesso!')
          this.$router.push('/')
        } else {
          throw new Error('Credenciais inválidas')
        }
      } catch (error) {
        this.showMessage(error.message, 'error')
      } finally {
        this.loading = false
      }
    },
    async signup() {
      if (!this.$refs.signupForm.validate()) return

      this.loading = true
      try {
        await new Promise(resolve => setTimeout(resolve, 1000))
        this.users.push({
          name: this.signupData.name,
          email: this.signupData.email,
          password: this.signupData.password
        })
        this.showMessage('Conta criada com sucesso!')
        this.isLogin = true
      } catch (error) {
        this.showMessage(error.message, 'error')
      } finally {
        this.loading = false
      }
    },
    socialLogin(provider) {
      this.showMessage(`Login com ${provider} em desenvolvimento`, 'info')
    },
    forgotPassword() {
      this.showMessage('Recurso em desenvolvimento', 'info')
    }
  }
}
</script>

<style scoped>
.auth-container {
  min-height: 100vh;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
}

.auth-card {
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 15px 35px rgba(0, 0, 0, 0.2) !important;
  background: white;
}

.auth-wrapper {
  display: flex;
  min-height: 600px;
}

.auth-side {
  flex: 1;
  position: relative;
}

.login-side {
  background-color: #1a237e;
}

.auth-image {
  height: 100%;
}

.auth-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 2rem;
  text-align: center;
}

.form-side {
  background: white;
  padding: 2rem;
}

.form-wrapper {
  max-width: 400px;
  margin: 0 auto;
}

.auth-input {
  margin-bottom: 1.5rem;
}

.divider {
  display: flex;
  align-items: center;
  text-align: center;
  color: #9e9e9e;
}

.divider::before,
.divider::after {
  content: '';
  flex: 1;
  border-bottom: 1px solid #e0e0e0;
}

.divider span {
  padding: 0 1rem;
  color: #9e9e9e;
  font-size: 0.875rem;
}

.social-login .v-btn {
  text-transform: none;
  letter-spacing: normal;
}

/* Animações */
.auth-card {
  transition: all 0.3s ease-in-out;
}

.switch-btn {
  transition: all 0.2s ease-in-out;
}

.switch-btn:hover {
  transform: translateY(-2px);
}

@media (max-width: 959px) {
  .login-side {
    display: none;
  }
  
  .auth-wrapper {
    min-height: auto;
  }
}
</style>


