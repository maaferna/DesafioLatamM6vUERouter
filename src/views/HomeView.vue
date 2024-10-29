<template>
  <div class="container mt-5">
    <section class="mb-5 text-center">
      <h1>Bienvenidos a Supermercado</h1>
      <p class="text-muted">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      </p>
    </section>

    <!-- Products Section -->
    <section>
      <h4 class="text-center mb-4">Nuestros Productos Destacados</h4>
      <div class="row">
        <div class="col-md-4 mb-4" v-for="(product, index) in products" :key="index">
          <Card :product="product" />
        </div>
      </div>
    </section>

    <div class="text-center mt-4">
      <router-link to="/productos" class="btn btn-primary">Ver todos los productos</router-link>
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
.text-muted {
  color: #6c757d;
}
</style>
