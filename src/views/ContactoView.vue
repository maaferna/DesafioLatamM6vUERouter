<template>
    <div class="container mt-5">
      <h1 class="text-center mb-4">Contacto</h1>
      <p class="text-center">Por favor, completa el formulario para contactarnos.</p>
      
      <form @submit.prevent="submitForm">
        <div class="mb-3">
          <label for="name" class="form-label">Nombre</label>
          <input type="text" class="form-control" id="name" v-model="formData.name" placeholder="Tu nombre" required>
        </div>
  
        <div class="mb-3">
          <label for="email" class="form-label">Correo Electrónico</label>
          <input type="email" class="form-control" id="email" v-model="formData.email" placeholder="Tu correo electrónico" required>
        </div>
  
        <div class="mb-3">
          <label for="subject" class="form-label">Asunto</label>
          <input type="text" class="form-control" id="subject" v-model="formData.subject" placeholder="Asunto de tu mensaje" required>
        </div>
  
        <div class="mb-3">
          <label for="message" class="form-label">Mensaje</label>
          <textarea class="form-control" id="message" v-model="formData.message" rows="5" placeholder="Escribe tu mensaje aquí" required></textarea>
        </div>
  
        <button type="submit" class="btn btn-primary w-100">Enviar Mensaje</button>
      </form>
      
      <!-- Enlace para regresar al inicio -->
      <div class="text-center mt-4">
        <router-link to="/" class="btn btn-link">Volver al inicio</router-link>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        formData: {
          name: '',
          email: '',
          subject: '',
          message: ''
        }
      };
    },
    methods: {
      submitForm() {
        console.log("Formulario enviado", this.formData);
        alert("Mensaje enviado correctamente");
        this.formData = { name: '', email: '', subject: '', message: '' };
      }
    }
  };
  </script>
  
  <style scoped>
  .container {
    max-width: 600px;
  }
  </style>
  
  
  