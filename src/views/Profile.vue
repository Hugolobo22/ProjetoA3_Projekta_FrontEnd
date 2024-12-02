<template>
  <v-app>
    <v-container fluid>
      <v-row class="mt-5" justify="center">
        <v-col cols="12" md="10">
          <!-- Botão de Adicionar Novo Projeto -->
          <v-btn color="primary" @click="addNewProject" class="mb-4">
            Adicionar Novo Projeto
          </v-btn>

          <!-- Formulário para Inserir Novo Projeto -->
          <v-form v-if="isAddingNewProject">
            <v-text-field
              v-model="newProject.name"
              label="Nome do Projeto"
              outlined
              class="mb-4"
            ></v-text-field>

            <v-text-field
              v-model="newProject.category"
              label="Categoria"
              outlined
              class="mb-4"
            ></v-text-field>

            <v-textarea
              v-model="newProject.description"
              label="Descrição"
              outlined
              class="mb-4"
              rows="4"
            ></v-textarea>

            <v-text-field
              v-model="newProject.technologies"
              label="Tecnologias (separadas por vírgula)"
              outlined
              class="mb-4"
            ></v-text-field>

            <v-text-field
              v-model="newProject.image"
              label="URL da Imagem"
              outlined
              class="mb-4"
            ></v-text-field>

            <v-text-field
              v-model="newProject.fileUrl"
              label="URL do Projeto"
              outlined
              class="mb-4"
            ></v-text-field>

            <v-btn color="primary" @click="saveProject" class="mb-4">
              Salvar Projeto
            </v-btn>
          </v-form>

          <!-- DataTable de Projetos -->
          <v-card elevation="10" class="mt-4">
            <v-card-title class="headline text-center">
              Projetos
            </v-card-title>
            <v-data-table
              :headers="headers"
              :items="projects"
              item-key="name"
              class="elevation-1"
            >
              <template v-slot:items="{ item }">
                <v-row>
                  <v-col cols="3">{{ item.name }}</v-col>
                  <v-col cols="3">{{ item.description }}</v-col>
                  <v-col cols="2">{{ item.category }}</v-col>
                  <v-col cols="3">{{ item.technologies.join(', ') }}</v-col>
                  <v-col cols="3">{{ item.image }}</v-col>
                  <v-col cols="3">
                    <v-btn color="primary" :href="item.fileUrl" target="_blank">
                      Ver Projeto
                    </v-btn>
                  </v-col>
                </v-row>
              </template>
            </v-data-table>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-app>
</template>

<script>
export default {
  name: "Profile",
  data() {
    return {
      // Controle do formulário de inserção de novo projeto
      isAddingNewProject: false,
      newProject: {
        name: "",
        category: "",
        description: "",
        technologies: ["Vue.js", "Vuex", "Node.js"], // Exemplo de tecnologias padrão
        image: "https://picsum.photos/420/200?1", // Exemplo de imagem
        fileUrl: "https://github.com/exemplo/ecommerce", // URL do projeto (exemplo)
      },
      projects: [
        // Projetos já existentes (exemplo)
        {
          name: "Projeto Exemplo 1",
          category: "Categoria 1",
          description: "Descrição do projeto exemplo 1",
          technologies: ["Vue.js", "Vuex"],
          image: "https://picsum.photos/420/200?2",
          fileUrl: "https://github.com/exemplo/projeto1",
        },
        {
          name: "Projeto Exemplo 2",
          category: "Categoria 2",
          description: "Descrição do projeto exemplo 2",
          technologies: ["React", "Node.js"],
          image: "https://picsum.photos/420/200?3",
          fileUrl: "https://github.com/exemplo/projeto2",
        },
      ],
      headers: [
        { text: "Nome", value: "name" },
        { text: "Descrição", value: "description" },
        { text: "Categoria", value: "category" },
        { text: "Tecnologias", value: "technologies" },
        { text: "Imagem", value: "image" },
        { text: "Link do Projeto", value: "fileUrl" },
      ],
    };
  },
  methods: {
    // Inicia o processo de adição de um novo projeto
    addNewProject() {
      this.isAddingNewProject = true;
    },
    // Salva o projeto na lista de projetos
    saveProject() {
      if (this.newProject.name && this.newProject.category && this.newProject.description) {
        this.projects.push({ ...this.newProject });
        this.isAddingNewProject = false; // Fechar o formulário
        this.clearNewProject(); // Limpar o formulário
        alert("Projeto adicionado com sucesso!");
      } else {
        alert("Por favor, preencha todos os campos.");
      }
    },
    // Limpa os campos do novo projeto
    clearNewProject() {
      this.newProject = {
        name: "",
        category: "",
        description: "",
        technologies: ["Vue.js", "Vuex", "Node.js"],
        image: "https://picsum.photos/420/200?1",
        fileUrl: "https://github.com/exemplo/ecommerce",
      };
    },
  },
};
</script>

<style scoped>
.bg-dark {
  background-image: url("https://media.istockphoto.com/id/1277178373/vector/seamless-dark-hexagon-texture-abstract-background.jpg?s=612x612&w=0&k=20&c=VvX28q5vSKXnsxAsciqxqW1aVmwPr60spgRgiOzRhIg=");
  background-repeat: repeat;
  color: #ffffff;
}

.v-btn {
  margin-top: 20px;
}
</style>