<template>
  <v-app>
    <v-container fluid class="bg-dark">
      <v-row id="projects" class="mt-15 mb-15" justify="center">
        <v-col cols="12" class="text-center mb-10">
          <h2 class="text-h3 font-weight-bold mb-3">Projetos em Destaque</h2>
          <div class="text-subtitle-1">Conheça alguns dos nossos trabalhos</div>
        </v-col>

        <v-col v-for="project in projects" :key="project.name" cols="12" class="mb-8">
          <v-hover v-slot="{ hover }">
            <v-card
              class="project-card mx-auto"
              :elevation="hover ? 12 : 4"
            >
              <v-row no-gutters>
                <v-col cols="12" md="6">
                  <div class="image-container">
                    <v-img
                      :src="project.image || 'https://picsum.photos/420/200'"
                      class="project-image"
                      cover
                    ></v-img>
                  </div>
                </v-col>

                <v-col cols="12" md="6">
                  <div class="content-container">
                    <v-card-title class="text-h4 font-weight-bold">
                      {{ project.name }}
                    </v-card-title>
                    <v-card-subtitle class="text-h6 mt-2">
                      {{ project.category }}
                    </v-card-subtitle>

                    <v-card-text class="text-body-1 description-container">
                      {{ project.description }}
                    </v-card-text>

                    <v-divider></v-divider>
                    <v-card-text class="tech-container py-2">
                      <div class="text-h5 font-weight-medium mb-2">Tecnologias</div>
                      <v-chip-group>
                        <v-chip
                          v-for="tech in project.technologies"
                          :key="tech"
                          color="primary"
                          dark
                          class="mr-1 mb-1"
                        >
                          {{ tech }}
                        </v-chip>
                      </v-chip-group>
                    </v-card-text>

                    <v-divider></v-divider>
                    <v-card-actions class="button-container">
                      <v-btn
                        color="primary"
                        :href="project.fileUrl"
                        target="_blank"
                        class="action-btn"
                      >
                        Ver Projeto
                      </v-btn>
                      <v-btn 
                        color="success"
                        class="action-btn"
                      >
                        Entrar em Contato
                      </v-btn>
                    </v-card-actions>
                  </div>
                </v-col>
              </v-row>
            </v-card>
          </v-hover>
        </v-col>
      </v-row>
    </v-container>
  </v-app>
</template>

<script>
export default {
  name: "HomeView",
  data() {
    return {
      projects: [
        {
          name: "E-commerce Vue",
          category: "Comércio Eletrônico",
          description: "Plataforma completa de e-commerce com Vue.js e Vuex.",
          technologies: ["Vue.js", "Vuex", "Node.js"],
          image: "https://picsum.photos/420/200?1",
          fileUrl: "https://github.com/exemplo/ecommerce",
        },
        {
          name: "Dashboard Admin",
          category: "Aplicação Web",
          description: "Painel administrativo com recursos avançados.",
          technologies: ["Vue.js", "Vuetify", "Charts"],
          image: "https://picsum.photos/420/200?2",
          fileUrl: "https://github.com/exemplo/dashboard",
        },
        {
          name: "Sistema CRM",
          category: "Gestão",
          description: "Sistema de gestão de relacionamento com clientes.",
          technologies: ["Vue.js", "Firebase", "Vuex"],
          image: "https://picsum.photos/420/200?3",
          fileUrl: "https://github.com/exemplo/crm",
        },
      ],
    };
  },
};
</script>

<style scoped>
.bg-dark {
  background-image: url("https://media.istockphoto.com/id/1277178373/vector/seamless-dark-hexagon-texture-abstract-background.jpg?s=612x612&w=0&k=20&c=VvX28q5vSKXnsxAsciqxqW1aVmwPr60spgRgiOzRhIg=");
  background-repeat: repeat;
  color: #ffffff;
}

.project-card {
  transition: all 0.3s ease-in-out;
  min-height: 400px;
}

.image-container {
  height: 100%;
  min-height: 400px;
}

.project-image {
  height: 100%;
  min-height: 400px;
  object-fit: cover;
}

.content-container {
  padding: 2rem;
  height: 100%;
  display: flex;
  flex-direction: column;
}

.description-container {
  font-size: 1.1rem;
  line-height: 1.6;
  margin: 0.5rem 0;
  flex-grow: 1;
}

.tech-container {
  padding: 1rem;
}

.button-container {
  padding: 0.5rem;
  display: flex;
  gap: 0.5rem;
  flex-wrap: wrap;
  justify-content: flex-start;
}

.action-btn {
  flex: 0 1 auto;
  min-width: auto !important;
  padding: 0 1rem !important;
}

.v-btn {
  transition: all 0.2s ease-in-out;
}

.v-btn:hover {
  transform: translateY(-2px);
}

.v-chip {
  margin: 0.25rem !important;
}

/* Responsividade */
@media (max-width: 960px) {
  .project-card {
    min-height: auto;
  }

  .image-container, .project-image {
    min-height: 300px;
  }

  .content-container {
    padding: 1.5rem;
  }

  .text-h4 {
    font-size: 1.8rem !important;
  }

  .text-h6 {
    font-size: 1.2rem !important;
  }
  
  .description-container {
    font-size: 1rem;
  }

  .button-container {
    padding: 0.5rem;
    justify-content: center;
  }

  .action-btn {
    font-size: 0.9rem;
  }
}

@media (max-width: 600px) {
  .image-container, .project-image {
    min-height: 250px;
  }

  .content-container {
    padding: 1rem;
  }

  .text-h4 {
    font-size: 1.5rem !important;
  }

  .tech-container {
    padding: 0.5rem;
  }

  .button-container {
    padding: 0.5rem;
    gap: 0.25rem;
  }

  .action-btn {
    flex: 1 1 auto;
    font-size: 0.875rem;
    height: 40px !important;
  }
}
</style>