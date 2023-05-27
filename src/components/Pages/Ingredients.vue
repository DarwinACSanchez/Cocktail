<template>
    <!-- <Navbar /> -->
    <div class="text-center mt-10" v-if="bebida">
      <h1 class="font-serif text-2xl font-bold mt-8">Cocktail Details</h1>
      <div class="flex flex-wrap">
        <div class="w-full sm:w-1/2 p-4">
          <h2 class="font-serif text-xl font-bold">{{ bebida.strDrink }}</h2>
          <img :src="bebida.strDrinkThumb" :alt="bebida.strDrink" class="w-96 h-96 mx-auto block rounded-lg">
        </div>
        <div class="w-full sm:w-1/2 p-4">
          <h2 class="font-serif text-xl font-bold">List of ingredients</h2>
          <div class="flex flex-wrap">
            <div v-for="(medida, ingrediente) in ingredientes" :key="ingrediente" class="w-full sm:w-1/3 p-2">
              <img :src="`https://www.thecocktaildb.com/images/ingredients/${ingrediente}.png`" alt="Descripción de la imagen" class="mx-auto block w-32 h-32">
              <h3 class="text-center mt-2 font-bold">{{ medida + ' ' + ingrediente }}</h3>
            </div>
          </div>
        </div>
      </div>
  
      <div class="my-8">
        <h3 class="font-serif text-xl font-bold">Instructions</h3>
        <p class="mx-4">{{ bebida.strInstructions }}</p>
      </div>
  
      <a href="/cocktail_list">
        <button class="relative inline-flex items-center justify-center p-0.5 mb-8 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-green-400 to-blue-600 group-hover:from-green-400 group-hover:to-blue-600 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800">
          <span class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
            Back
          </span>
        </button>
      </a>
    </div>
  
    <Footer />
  </template>
  
  <script>
  import axios from "axios";
  // import Navbar from '../Shared/Navbar.vue';
  import Footer from '../Shared/Footer.vue';
  
  export default {
    components: {
    //     Navbar,
        Footer,
    },
    name: "Ingredients",
    data() {
    return {
        bebida: null,
        ingredientes: [],
      };
    },
    mounted() {
    const idBebida = this.$route.params.id;
    axios.get(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${idBebida}`)
      .then(response => {
        this.bebida = response.data.drinks[0];
        this.obtenerIngredientes();
      })
      .catch(error => {
        console.log(error);
      });
  },
  methods: {
    obtenerIngredientes() {
      // Extraer los ingredientes de la respuesta de la API
      const ingredientes = {};
      for (let i = 1; i <= 15; i++) {
        const ingrediente = this.bebida[`strIngredient${i}`];
        const medida = this.bebida[`strMeasure${i}`];
        if (ingrediente && medida) {
          ingredientes[ingrediente] = medida;
        }
      }
      this.ingredientes = ingredientes;
    },
  },
  }
  </script>
  
  <style>
    
  </style>
  