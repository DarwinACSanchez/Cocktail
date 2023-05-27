<template>
    <!-- <Navbar /> -->
    <div class="text-center mt-10">
      <h1 class="font-serif text-2xl font-bold mt-8">Cocktail Details</h1>
      <div class="flex flex-wrap">
        <div class="w-full sm:w-1/2 p-4">
          <h2 class="font-serif text-xl font-bold">{{ data.strDrink }}</h2>
          <img :src="data.strDrinkThumb" :alt="data.strDrink" class="w-96 h-96 mx-auto block rounded-lg">
        </div>
        <div class="w-full sm:w-1/2 p-4">
          <h2 class="font-serif text-xl font-bold">List of ingredients</h2>
          <div class="flex flex-wrap">
            <div v-for="(ingredient, index) in ingredients" :key="index" class="w-full sm:w-1/3 p-2">
              <img :src="`https://www.thecocktaildb.com/images/ingredients/${ingredient}.png`" alt="Descripción de la imagen" class="mx-auto block w-32 h-32">
              <h3 class="text-center mt-2 font-bold">{{ data[`strMeasure${index + 1}`] + ' ' + ingredient }}</h3>
            </div>
          </div>
        </div>
      </div>
  
      <div class="my-8">
        <h3 class="font-serif text-xl font-bold">Instructions</h3>
        <p class="mx-4">{{ data.strInstructions }}</p>
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
  // import { Link } from "@inertiajs/vue3";
  // import Navbar from '../Shared/Navbar.vue';
  // import Footer from '../Shared/Footer.vue';
  
  export default {
    // components: {
    //     Navbar,
    //     Footer,
    //     Link,
    // },
    props: {
      data: {
        type: Object,
        required: true,
      },
    },
    computed: {
      ingredients() {
        let ingredients = [];
        for (let i = 1; i <= 15; i++) {
          let ingredient = this.data[`strIngredient${i}`];
          if (ingredient) {
            ingredients.push(ingredient);
          }
        }
        return ingredients;
      },
    },
  }
  </script>
  
  <style>
    
  </style>
  