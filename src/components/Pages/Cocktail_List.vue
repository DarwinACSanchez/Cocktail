<template>
  <!-- <Navbar /> -->

  <h1 class="text-center font-serif text-3xl font-bold mt-10 mx-1">Find your favorite cocktail</h1>
  <!-- Search -->
  <div class="flex items-center m-8 w-1/2 mx-auto">   
      <label for="simple-search" class="sr-only">Search</label>
      <div class="relative w-full">
          <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <svg aria-hidden="true" class="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd"></path></svg>
          </div>
          <input type="text" v-model="busqueda"
          id="simple-search" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search" required>
      </div>
      <button @click="buscarBebida" class="p-2.5 ml-2 text-sm font-medium text-white bg-blue-700 rounded-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
          <span class="sr-only">Search</span>
      </button>
  </div>
<!--End Search -->

<!-- Categories -->
<div class="m-8">
  <h3 class="font-serif text-xl font-bold ml-8">Categories:</h3>
  <div class="text-center">
    <button class="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-green-400 to-blue-600 group-hover:from-green-400 group-hover:to-blue-600 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800"
    @click="obtenerTodasBebidas(categoria)">
    <span class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
      All Categories
    </span>
  </button>
    <button v-for="categoria in categorias" :key="categoria"
    class="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-green-400 to-blue-600 group-hover:from-green-400 group-hover:to-blue-600 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800"
    @click="obtenerBebidas(categoria)">
    <span class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
      {{ categoria }}
    </span>
  </button>
  </div>
</div>
<!-- End Categories -->

  <div v-if="bebidasPaginadas.length > 0" class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 m-8">
    <div v-for="bebida in bebidasPaginadas" :key="bebida.idDrink" class="bg-white rounded-lg shadow-md overflow-hidden">
      <img :src="bebida.strDrinkThumb" :alt="bebida.strDrink" class="w-full sm:w-auto md:w-200 object-cover">
      <div class="bg-gray-400 text-center">
        <h2 class="text-xl font-bold ">{{ bebida.strDrink }}</h2>
        <router-link :to="`/ingredients/${bebida.idDrink}`">
          <button class="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-green-400 to-blue-600 group-hover:from-green-400 group-hover:to-blue-600 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800">
            <span class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
              See Ingredients
            </span>
          </button>
        </router-link>
      </div>
    </div>
  </div>

  <!-- Pagination -->
  <div class="flex justify-center mb-8">
    <button href="#" class="inline-flex items-center px-4 py-2 mr-3 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
      :disabled="paginaActual === 0"
      @click="paginaActual--">
    <svg aria-hidden="true" class="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M7.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l2.293 2.293a1 1 0 010 1.414z" clip-rule="evenodd"></path></svg>
    Previous
  </button>
  <button href="#" class="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
    :disabled="paginaActual === numeroPaginas - 1"
    @click="paginaActual++">
    Next
    <svg aria-hidden="true" class="w-5 h-5 ml-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
  </button>
  </div>
  <!-- End Pagination -->

  <Footer />
</template>

<script>
import axios from 'axios';
// import Navbar from '../Shared/Navbar.vue';
import Footer from '../Shared/Footer.vue';

export default {
  components: {
  //   Navbar,
    Footer,
  },
  data() {
    return {
      categorias: ['Ordinary Drink', 'Cocktail', 'Shake', 'Cocoa','Shot','Beer','Soft Drink','Homemade Liqueur'],
      bebidas: [],
      bebidasPaginadas: [],
      elementosPorPagina: 12,
      paginaActual: 0,
      busqueda: '',
    }
  },
  computed: {
    numeroPaginas() {
      return Math.ceil(this.bebidas.length / this.elementosPorPagina);
    },
    categoriaSeleccionada() {
      return this.categorias.find(categoria => categoria === this.busqueda);
    }
  },
  mounted() {
  axios.get('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=')
    .then(response => {
      this.bebidas = response.data.drinks;
      this.bebidasPaginadas = this.bebidas.slice(0, this.elementosPorPagina);
      this.paginaActual = 0;
    })
    .catch(error => {
      console.log(error);
    });
  },
  methods: {
    obtenerTodasBebidas() {
      axios.get(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=`)
        .then(response => {
          this.bebidas = response.data.drinks;
          this.bebidasPaginadas = this.bebidas.slice(0, this.elementosPorPagina);
          this.paginaActual = 0;
          this.limpiarBusqueda();
        })
        .catch(error => {
          console.log(error);
        });
    },
    obtenerBebidas(categoria) {
      axios.get(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=${categoria}`)
        .then(response => {
          this.bebidas = response.data.drinks;
          this.bebidasPaginadas = this.bebidas.slice(0, this.elementosPorPagina);
          this.paginaActual = 0;
          this.limpiarBusqueda();
        })
        .catch(error => {
          console.log(error);
        });
    },
    buscarBebida() {
      if (this.busqueda !== '') {
        axios.get(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${this.busqueda}`)
          .then(response => {
            this.bebidas = response.data.drinks;
            this.bebidasPaginadas = this.bebidas.slice(0, this.elementosPorPagina);
            this.paginaActual = 0;
          })
          .catch(error => {
            console.log(error);
          });
      }
    },
    redirectToIngredients() {
      this.$router.push('/ingredients');
    },
    limpiarBusqueda() {
    this.busqueda = '';
    },
  },
  watch: {
    paginaActual() {
      const inicio = this.paginaActual * this.elementosPorPagina;
      const fin = inicio + this.elementosPorPagina;
      this.bebidasPaginadas = this.bebidas.slice(inicio, fin);
    }
  }
}
</script>
<style>
    
</style>