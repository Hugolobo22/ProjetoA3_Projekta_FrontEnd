<template>
  <v-container fluid>
    <!-- Timeline Section -->
    <v-row class="my-8 justify-center">
      <v-col cols="12" md="8">
        <h1 class="text-center mb-4">Nossa História</h1>
        <v-timeline direction="vertical" align-center>
          <v-timeline-item>
            <template v-slot:opposite>
              Início do projeto
            </template>
            <div>
              <div class="text-h6">25/10/2024</div>
              <p>
                Início do projeto, criamos a API e desenvolvemos a ideia para após isso, seguirmos com a elaboração do site.
              </p>
            </div>
          </v-timeline-item>

          <v-timeline-item>
            <template v-slot:opposite>
              Confecção do Front-End
            </template>
            <div>
              <div class="text-h6">30/10/2024</div>
              <p>
                Iniciamos a construção do Front-End, seguindo com ideias de design e funcionalidades.
              </p>
            </div>
          </v-timeline-item>

          <v-timeline-item>
            <template v-slot:opposite>
              Confecção do Front-End
            </template>
            <div>
              <div class="text-h6">30/10/2024</div>
              <p>
                Iniciamos a construção do Front-End, seguindo com ideias de design e funcionalidades.
              </p>
            </div>
          </v-timeline-item>
        </v-timeline>
      </v-col>
    </v-row>

    <v-divider :thickness="5" class="border-opacity-100"></v-divider>
    <!-- Values Section -->
    <v-row class="my-8">
      <v-col cols="12">
        <h1 class="text-center mb-4">Nossos Valores</h1>
        <v-row justify="center">
          <v-col cols="12" md="3" class="text-center">
            <v-icon large color="primary">mdi-account-group</v-icon>
            <h3>Trabalho em Equipe</h3>
            <p>Valorizamos a colaboração e o trabalho em equipe para alcançar nossos objetivos.</p>
          </v-col>
          <v-col cols="12" md="3" class="text-center">
            <v-icon large color="success">mdi-lightbulb-outline</v-icon>
            <h3>Inovação</h3>
            <p>Buscamos sempre inovar para entregar o melhor aos nossos usuários.</p>
          </v-col>
          <v-col cols="12" md="3" class="text-center">
            <v-icon large color="info">mdi-hand-heart</v-icon>
            <h3>Compromisso</h3>
            <p>Nos dedicamos a fornecer um serviço de qualidade e com propósito.</p>
          </v-col>
        </v-row>
      </v-col>
    </v-row>

    <v-divider :thickness="5" class="border-opacity-100"></v-divider>

    <!-- Team Section -->
    <v-row class="my-8">
      <v-col cols="12">
        <h1 class="text-center mb-4">Nosso Time</h1>
        <v-carousel
          show-arrows
          hide-delimiter-background
          class="my-4"
          cycle
          height="300px"
        >
          <v-carousel-item v-for="(member, index) in teamMembers" :key="index">
            <v-card max-width="300" class="mx-auto">
              <v-img :src="member.image" height="200px" contain></v-img>
              <v-card-title>{{ member.name }}</v-card-title>
              <v-card-subtitle>{{ member.position }}</v-card-subtitle>
              <v-card-text>{{ member.bio }}</v-card-text>
            </v-card>
          </v-carousel-item>
        </v-carousel>
      </v-col>
    </v-row>

    <v-divider :thickness="5" class="border-opacity-100"></v-divider>

    <!-- Testimonials Section -->
    <v-row class="my-8 justify-center">
      <v-col cols="12" md="8">
        <h1 class="text-center mb-4">Depoimentos</h1>
        <v-card
          v-for="(testimonial, index) in testimonials"
          :key="index"
          class="my-4"
          outlined
        >
          <v-card-title>
            <v-avatar left>
              <v-img :src="testimonial.image" alt="User Image"></v-img>
            </v-avatar>
            <span class="ml-3">{{ testimonial.name }}</span>
          </v-card-title>
          <v-card-text>
            "{{ testimonial.text }}"
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>

    <v-divider :thickness="5" class="border-opacity-100"></v-divider>

    <!-- FAQ Section -->
    <v-row class="my-8 justify-center">
      <v-col cols="12" md="8">
        <h1 class="text-center mb-4">Perguntas Frequentes</h1>
        <v-card class="faq-card" v-for="(faq, index) in faqs" :key="index">
          <v-list-item>
            <v-list-item-content>
              <v-list-item-title class="faq-question">{{ faq.question }}</v-list-item-title>
              <v-list-item-subtitle class="faq-answer">{{ faq.answer }}</v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "AboutView",
  data() {
    return {
      timelineEvents: [
        { year: "2020", title: "Fundação", description: "Início do nosso projeto", color: "primary", icon: "mdi-calendar" },
        { year: "2021", title: "Expansão", description: "Crescimento da equipe", color: "success", icon: "mdi-account-group" },
        { year: "2022", title: "Lançamento do site", description: "Primeira versão lançada", color: "info", icon: "mdi-web" },
      ],
      teamMembers: [
        { name: "Alice Souza", position: "CEO", bio: "Liderança visionária.", image: "https://via.placeholder.com/200" },
        { name: "João Pereira", position: "CTO", bio: "Inovador em tecnologia.", image: "https://via.placeholder.com/200" },
        { name: "Carla Dias", position: "CMO", bio: "Especialista em marketing.", image: "https://via.placeholder.com/200" },
      ],
      testimonials: [
        { name: "Carlos Oliveira", text: "A plataforma é incrível e realmente facilita nosso trabalho.", image: "https://via.placeholder.com/50" },
        { name: "Fernanda Costa", text: "Muito satisfeita com o serviço oferecido.", image: "https://via.placeholder.com/50" },
        { name: "Lucas Ferreira", text: "Recomendo para todos que buscam eficiência e qualidade.", image: "https://via.placeholder.com/50" },
      ],
      faqs: [
        { question: "Como começou o projeto?", answer: "O projeto teve início em 2020 com a visão de criar um site inovador." },
        { question: "Qual é o propósito do site?", answer: "O site foi criado para facilitar o acesso à informação." },
        { question: "Como posso me juntar ao time?", answer: "Envie seu currículo para nosso e-mail." },
      ],
    };
  },
};
</script>

<style scoped>
.text-center {
  text-align: center;
}
.my-8 {
  margin-top: 2rem;
  margin-bottom: 2rem;
}

/* Estilos para o FAQ */
.faq-card {
  margin-bottom: 16px;
  padding: 16px;
  border-radius: 8px;
  background-color: #f9f9f9;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.faq-card:hover {
  transform: translateY(-5px);
  box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.2);
}

.faq-question {
  font-weight: bold;
  font-size: 1.1rem;
  color: #424242;
}

.faq-answer {
  font-size: 1rem;
  color: #616161;
  margin-top: 8px;
}
</style>
