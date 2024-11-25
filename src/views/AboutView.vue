<template>
  <v-container fluid class="bg-dark">
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
              <div class="text-h6">31/10/2024</div>
              <p>
                Desenvolvemos a Navbar e o Footer de uma maneira mais agradável e responsiva, para facilitar no avanço de futuras partes do projeto
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

.bg-dark {
  background-color: #1d1b1b;
  color: #ffffff; /* Ajuste a cor do texto para contraste */
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
