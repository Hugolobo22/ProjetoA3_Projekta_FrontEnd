<template>
  <v-app>
    <v-container fluid>
      <v-row class="mt-5" justify="center">
        <v-col cols="12" md="6">
          <v-card
            class="upload-card"
            elevation="10"
            :class="{ 'shadow-5': hover }"
            @mouseover="hover = true"
            @mouseleave="hover = false"
          >
            <v-card-title class="headline text-center">
              Envie seu Projeto
            </v-card-title>
            <v-card-subtitle
              class="text-center mb-4 grey--text"
            >
              Compartilhe seu projeto com a comunidade e inspire outras pessoas.
            </v-card-subtitle>
            <v-card-text>
              <v-file-input
                label="Escolha um arquivo para upload"
                v-model="projectFile"
                accept=".zip,.pdf,.rar,.docx,.jpg,.png"
                outlined
                class="mb-4"
                prepend-icon="mdi-upload"
              ></v-file-input>
              <v-text-field
                label="Nome do Projeto"
                v-model="projectName"
                outlined
                class="mb-4"
                color="primary"
                prepend-icon="mdi-clipboard-text"
              ></v-text-field>
              <v-textarea
                label="Descrição do Projeto"
                v-model="projectDescription"
                outlined
                class="mb-4"
                color="primary"
                rows="4"
                prepend-icon="mdi-comment-text-outline"
              ></v-textarea>
            </v-card-text>
            <v-card-actions class="justify-center">
              <v-btn color="primary" @click="uploadProject" elevation="2" large>
                Subir Projeto
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-app>
</template>

<script>
export default {
  name: 'UploadProject',
  data() {
    return {
      projectFile: null,
      projectName: '',
      projectDescription: '',
      hover: false,
    };
  },
  methods: {
    uploadProject() {
      if (this.projectFile && this.projectName && this.projectDescription) {
        const newProject = {
          name: this.projectName,
          description: this.projectDescription,
          category: 'Novo Projeto',
          technologies: ['Vue.js'],
          image: this.projectFile ? URL.createObjectURL(this.projectFile) : '',
          fileUrl: URL.createObjectURL(this.projectFile),
        };

        this.$emit('project-uploaded', newProject);

        // Limpar campos após envio
        alert('Projeto enviado com sucesso!');
        this.projectFile = null;
        this.projectName = '';
        this.projectDescription = '';
      } else {
        alert('Por favor, preencha todos os campos do projeto.');
      }
    },
  },
};
</script>
