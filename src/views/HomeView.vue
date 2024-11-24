<template>
  <v-app>
    <v-container fluid>
      <!-- Hero Section -->
      <v-row id="home" class="mt-5" justify="center">
        <v-col cols="12" md="10">
          <v-card class="intro-card" elevation="3">
            <v-parallax
              height="600"
              src="https://picsum.photos/1920/1080"
            >
              <div class="intro-content">
                <h1 class="text-h2 font-weight-bold white--text mb-4">
                  Projetos Vue.js & Vuetify
                </h1>
                <div class="text-h5 white--text mb-8">
                  Desenvolvimento web moderno e responsivo com as melhores práticas
                </div>
              </div>
            </v-parallax>
          </v-card>
        </v-col>
      </v-row>

      <!-- Stats Section -->
      <v-row class="mt-10" justify="center">
        <v-col v-for="stat in stats" :key="stat.value" cols="12" md="3">
          <v-card class="text-center pa-5" elevation="2">
            <div class="text-h3 font-weight-bold primary--text mb-2">
              {{ stat.value }}
            </div>
            <div class="text-subtitle-1">{{ stat.label }}</div>
          </v-card>
        </v-col>
      </v-row>

      <!-- Services Section -->
      <v-row id="services" class="mt-15" justify="center">
        <v-col cols="12" class="text-center mb-10">
          <h2 class="text-h3 font-weight-bold mb-3">Nossos Serviços</h2>
          <div class="text-subtitle-1">Soluções completas em desenvolvimento web</div>
        </v-col>
        
        <v-col v-for="service in services" :key="service.title" cols="12" sm="6" md="4">
          <v-hover v-slot="{ hover }">
            <v-card
              class="service-card"
              :elevation="hover ? 12 : 2"
              :class="{ 'on-hover': hover }"
            >
              <v-img
                :src="service.image"
                height="250"
                class="service-image"
                gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
              >
                <v-card-title class="text-h5 white--text">
                  {{ service.title }}
                </v-card-title>
              </v-img>
              <v-card-text class="text-body-1 pt-4">
                {{ service.description }}
              </v-card-text>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn
                  color="primary"
                  text
                  :to="service.link"
                >
                  Saiba mais
                  <v-icon right>mdi-arrow-right</v-icon>
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-hover>
        </v-col>
      </v-row>

      <!-- Projects Section -->
      <v-row id="projects" class="mt-15 mb-15" justify="center">
        <v-col cols="12" class="text-center mb-10">
          <h2 class="text-h3 font-weight-bold mb-3">Projetos em Destaque</h2>
          <div class="text-subtitle-1">Conheça alguns dos nossos trabalhos</div>
        </v-col>

        <v-col v-for="project in projects" :key="project.name" cols="12" sm="6" md="4" lg="3">
          <v-hover v-slot="{ hover }">
            <v-card
              class="project-card mx-auto"
              max-width="374"
              :elevation="hover ? 12 : 2"
            >
              <v-img
                height="250"
                :src="project.image || 'https://picsum.photos/350/250'"
              ></v-img>

              <v-card-title class="text-h6">
                {{ project.name }}
              </v-card-title>

              <v-card-text>
                <div class="text-subtitle-1">{{ project.category }}</div>
                <div class="text-body-2">{{ project.description }}</div>
              </v-card-text>

              <v-divider class="mx-4"></v-divider>

              <v-card-actions>
                <v-chip
                  v-for="tech in project.technologies"
                  :key="tech"
                  class="mr-2"
                  small
                >
                  {{ tech }}
                </v-chip>
                <v-spacer></v-spacer>
                <v-btn
                  color="primary"
                  text
                  :href="project.fileUrl"
                  target="_blank"
                >
                  Ver Projeto
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-hover>
        </v-col>
      </v-row>

    </v-container>
  </v-app>
</template>

<script>
export default {
  name: 'HomeView',
  data() {
    return {
      valid: true,
      formData: {
        name: '',
        email: '',
        message: ''
      },
      nameRules: [
        v => !!v || 'Nome é obrigatório',
        v => v.length <= 50 || 'Nome deve ter menos que 50 caracteres'
      ],
      emailRules: [
        v => !!v || 'E-mail é obrigatório',
        v => /.+@.+\..+/.test(v) || 'E-mail deve ser válido'
      ],
      messageRules: [
        v => !!v || 'Mensagem é obrigatória',
        v => v.length <= 500 || 'Mensagem deve ter menos que 500 caracteres'
      ],
      stats: [
        { value: '100+', label: 'Projetos Entregues' },
        { value: '50+', label: 'Clientes Satisfeitos' },
        { value: '5+', label: 'Anos de Experiência' },
        { value: '24/7', label: 'Suporte Disponível' }
      ],
      services: [
        {
          title: 'Desenvolvimento Frontend',
          description: 'Criação de interfaces modernas e responsivas com Vue.js e Vuetify.',
          image: 'https://picsum.photos/300/200?1',
          link: '/service-frontend'
        },
        {
          title: 'Desenvolvimento Backend',
          description: 'APIs robustas e escaláveis com Node.js e Express.',
          image: 'https://picsum.photos/300/200?2',
          link: '/service-backend'
        },
        {
          title: 'UI/UX Design',
          description: 'Design de interfaces intuitivas e experiências memoráveis.',
          image: 'https://picsum.photos/300/200?3',
          link: '/service-design'
        }
      ],
      projects: [
        {
          name: 'E-commerce Vue',
          category: 'Comércio Eletrônico',
          description: 'Plataforma completa de e-commerce com Vue.js e Vuex.',
          technologies: ['Vue.js', 'Vuex', 'Node.js'],
          image: 'https://picsum.photos/350/250?1',
          fileUrl: 'https://github.com/exemplo/ecommerce'
        },
        {
          name: 'Dashboard Admin',
          category: 'Aplicação Web',
          description: 'Painel administrativo com recursos avançados.',
          technologies: ['Vue.js', 'Vuetify', 'Charts'],
          image: 'https://picsum.photos/350/250?2',
          fileUrl: 'https://github.com/exemplo/dashboard'
        },
        {
          name: 'Sistema CRM',
          category: 'Gestão',
          description: 'Sistema de gestão de relacionamento com clientes.',
          technologies: ['Vue.js', 'Firebase', 'Vuex'],
          image: 'https://picsum.photos/350/250?3',
          fileUrl: 'https://github.com/exemplo/crm'
        },
        {
          name: 'App de Delivery',
          category: 'Aplicativo Mobile',
          description: 'Aplicativo de entrega com Vue Native.',
          technologies: ['Vue Native', 'Expo', 'API REST'],
          image: 'https://picsum.photos/350/250?4',
          fileUrl: 'https://github.com/exemplo/delivery'
        }
      ]
    };
  },
  methods: {
    submitForm() {
      if (this.$refs.form.validate()) {
        // Implementar lógica de envio do formulário
        console.log('Formulário enviado:', this.formData);
        // Reset form
        this.$refs.form.reset();
      }
    }
  }
};
</script>

<style scoped>
.intro-card {
  border-radius: 0;
  overflow: hidden;
}

.intro-content {
  text-align: center;
  z-index: 1;
  position: relative;
}

.service-card {
  height: 100%;
  transition: transform 0.3s ease-in-out;
}

.service-card.on-hover {
  transform: translateY(-12px);
}

.project-card {
  transition: all 0.3s ease-in-out;
}

.v-card-title {
  word-break: normal;
}

.bg-grey-lighten-4 {
  background-color: #f5f5f5;
}

/* Animações */
.v-card {
  transition: all 0.3s ease-in-out;
}

.v-btn {
  transition: all 0.2s ease-in-out;
}

.v-btn:hover {
  transform: translateY(-2px);
}

/* Responsividade */
@media (max-width: 600px) {
  .text-h2 {
    font-size: 2.5rem !important;
  }
  
  .text-h5 {
    font-size: 1.2rem !important;
  }
}
</style>