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
        <h2 class="text-h3 font-weight-bold mb-3">Projetos em destaque</h2>
        <div class="text-subtitle-1">Os 3 maiores projetos que nasceram do Projekta.</div>
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
        { name: "Hugo Medeiros", position: "CEO", bio: "RA: 12823126719", image: "data:image/jpeg;base64,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" },
        { name: "Enzo Coutinho", position: "CEO", bio: "RA: 12823126726", image: "https://i.pinimg.com/736x/fe/cc/d2/feccd2aa76994d4a992b19d21c4447ad.jpg" },
        { name: "Kalyel Costa", position: "CEO", bio: "RA: 12823125478", image: "https://i.pinimg.com/736x/bd/5b/55/bd5b550995b5ebf4dee5ffa2d5da48b3.jpg" },
        { name: "João Victor Okubo", position: "CEO", bio: "RA: 12823134738", image: "https://i.pinimg.com/474x/6b/be/93/6bbe9312009626069f86862fc7339e16.jpg" },
        { name: "Fernando de Medeiros", position: "CEO", bio: "RA: 12823143835", image: "https://i.pinimg.com/1200x/bb/a5/89/bba5893f3da1ce3c0143b31820ccef2c.jpg" },
      ],
      testimonials: [
        { name: "Bowser do Mário", text: "Gostei da Homenagem.", image: "https://mariopartylegacy.com/wp-content/uploads/2018/07/bowserprofile.png" },
        { name: "Reid Hoffman", text: "Abriu meus olhos para outros projetos.", image: "https://m.media-amazon.com/images/S/amzn-author-media-prod/ebkg32s4cgipns1ubh9rfj9f53._SY450_CR0%2C0%2C450%2C450_.jpg" },
        { name: "Bill Gates", text: "Dá pra investir tranquilo, vai vingar.", image: "https://upload.wikimedia.org/wikipedia/commons/6/67/Bill_Gates_-_2023_-_P062021-670188_%28cropped%29.jpg" },
      ],
      faqs: [
        { question: "Como começou o projeto?", answer: "O projeto teve início em 2024 com a visão de criar um site inovador que busca unir outras 2 plataformas famosas." },
        { question: "Qual é o propósito do site?", answer: "O site foi criado para facilitar a entrada em projetos para programadores iniciantes e avançados." },
        { question: "Como posso me juntar ao time?", answer: "Envie seu currículo para nosso e-mail." },
      ],

      stats: [
        { value: '100+', label: 'Projetos Entregues' },
        { value: '50+', label: 'Clientes Satisfeitos' },
        { value: '5+', label: 'Meses de Experiência' },
        { value: '24/7', label: 'Suporte Disponível' }
      ],

      services: [
        {
          title: 'AutoFront',
          description: 'Criação de interfaces automáticas com Vue.js e Vuetify.',
          image: 'https://picsum.photos/300/200?1',
          link: '/service-frontend'
        },
        {
          title: 'Api Template',
          description: 'modelo de API robusta e escalável com Node.js e Express.',
          image: 'https://picsum.photos/300/200?2',
          link: '/service-backend'
        },
        {
          title: 'Projekta 2.0',
          description: 'Plataforma de projetos de T.I.',
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
  background-image: url("https://media.istockphoto.com/id/1277178373/vector/seamless-dark-hexagon-texture-abstract-background.jpg?s=612x612&w=0&k=20&c=VvX28q5vSKXnsxAsciqxqW1aVmwPr60spgRgiOzRhIg=");
  background-repeat: repeat;
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
