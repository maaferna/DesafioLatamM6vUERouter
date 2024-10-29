<template>
    <div class="container mt-5">
      <h1 class="text-center mb-4">Nuestros Productos</h1>
      <div class="row">
        <div class="col-md-4 mb-4" v-for="(product, index) in products" :key="index">
          <Card :product="product" />
        </div>
      </div>
      <div class="text-center mt-4">
        <router-link to="/" class="btn btn-link">Volver al inicio</router-link>
      </div>
    </div>
  </template>
  
  <script>
  import Card from '@/components/Card.vue';
  
  export default {
    components: {
      Card
    },
    props: {
      products: {
        type: Array,
        required: true
      }
    }
  };
  </script>
  
  <style scoped>
  </style>
  