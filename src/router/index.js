import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import ProductosView from '../views/ProductosView.vue';
import ContactoView from '../views/ContactoView.vue';

const productsData = [
  {
    name: "Colaciones",
    description: "Delicious snacks ready to enjoy.",
    price: 10.99,
    image: require('@/assets/img/colaciones.jpg')
  },
  {
    name: "Desayunos",
    description: "Start your day with energy.",
    price: 5.99,
    image: require('@/assets/img/desayunos.jpg')
  },
  {
    name: "Dulces",
    description: "Sweeten your day.",
    price: 1.99,
    image: require('@/assets/img/dulces.jpg')
  },
  {
    name: "Empanadas",
    description: "Traditional empanadas with homemade flavor.",
    price: 3.99,
    image: require('@/assets/img/empanadas.jpg')
  }
];

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
    props: { products: productsData }
  },
  {
    path: '/productos',
    name: 'productos',
    component: ProductosView,
    props: { products: productsData }
  },
  {
    path: '/contacto',
    name: 'contacto',
    component: ContactoView
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
