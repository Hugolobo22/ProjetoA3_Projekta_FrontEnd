<template>
  <v-container fluid class="not-found-container d-flex flex-column align-center justify-center">
    <h1 class="error-code">404</h1>
    <p class="error-message">Oops! Página não encontrada.</p>

    <div class="astronaut-container">
      <div class="astronaut"></div>
    </div>

    <v-btn
      color="black"
      class="go-home-button"
      href="/"
      dark
      @click="$router.push('/')"
    >
      Voltar para Home
    </v-btn>
  </v-container>
</template>

<script>
export default {
  name: "NotFound",
};
</script>

<style scoped>
/* Reset base */
.not-found-container {
    margin-top: -220px;
}

h1, p {
    color: black;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html, body, #app {
  height: 100%;
  font-family: 'Arial', sans-serif;
  margin: 0; /* Adicione isso */
  padding: 0; /* Adicione isso */
}

.not-found-container {
  min-height: 100vh;
  color: #fff;
  text-align: center;
}

.error-code {
  font-size: 8rem;
  font-weight: bold;
  animation: fadeInDown 1s ease-out;
}

.error-message {
  font-size: 1.5rem;
  margin-bottom: 30px;
  animation: fadeInUp 1s ease-out;
}

.go-home-button {
  font-size: 1rem;
  transition: background-color 0.3s ease, transform 0.3s ease;
  text-decoration: none;
  padding: 10px;
}

.go-home-button:hover {
  transform: scale(1.05);
}

.astronaut-container {
  position: relative;
  width: 200px;
  height: 200px;
  margin: 0px 0;
}

.astronaut {
  background-image: url('https://static.vecteezy.com/system/resources/thumbnails/025/002/355/small/3d-astronaut-character-in-space-on-transparent-background-generative-ai-png.png');
  background-size: contain;
  background-repeat: no-repeat;
  width: 100%;
  height: 100%;
  animation: float 3s infinite ease-in-out;
}

@keyframes float {
  0% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-20px);
  }
  100% {
    transform: translateY(0);
  }
}

@keyframes fadeInDown {
  from {
    opacity: 0;
    transform: translateY(-20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
