<template>
    <nav class="bg-gray-900">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex items-center justify-between h-16">
          <!-- Logo -->
          <div class="flex-shrink-0">
            <Link href="/" class="flex items-center">
                <img src="/images/Logo1.jpg" class="h-12 mr-3 rounded-lg" alt="Flowbite Logo">
                <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white text-white">Cocktails</span>
            </Link>
          </div>
  
          <!-- Menú en dispositivos móviles -->
          <div class="flex md:hidden">
            <button @click="toggleMenu" class="text-gray-400 hover:text-white focus:outline-none focus:text-white">
              <svg class="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
              </svg>
            </button>
          </div>
  
          <!-- Menú en dispositivos de escritorio -->
          <div class="hidden md:flex md:items-center flex flex-grow justify-center">
            <div class="ml-10 flex space-x-4">
                <Link href="/" 
                :class="{'lg:text-blue-500 md:text-blue-500': currentRoute === '/'}"
                class="mr-4 block py-2 pl-3 pr-4 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700 font-bold"><i class="fa-solid fa-house mr-1"></i>Home</Link>
                <Link href="/cocktail_list" 
                :class="{'lg:text-blue-500 md:text-blue-500': currentRoute === '/cocktail_list' || currentRoute.includes('/cocktail_ingredients')}"
                class="block py-2 pl-3 pr-4 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700 font-bold"><i class="fa-solid fa-martini-glass-citrus mr-1"></i>Cocktail List</Link>   
            </div>
          </div>
        </div>
      </div>
  
      <!-- Menú desplegable en dispositivos móviles -->
      <div :class="{'block': isMenuOpen, 'hidden': !isMenuOpen}" class="md:hidden">
        <div class="px-2 pt-2 pb-3 sm:px-3">
            <Link href="/" 
            :class="{'bg-cyan-500 font-bold': currentRoute === '/'}"
            class="font-bold block py-2 pl-3 pr-4 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"><i class="fa-solid fa-house mr-1"></i>Home</Link>
            <Link href="/cocktail_list" 
            :class="{'bg-cyan-500 font-bold': currentRoute === '/cocktail_list' || currentRoute.includes('/cocktail_ingredients')}"
            class="font-bold block py-2 pl-3 pr-4 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"><i class="fa-solid fa-martini-glass-citrus mr-1"></i>Cocktail List</Link>
        </div>
      </div>
    </nav>
  </template>
  
  <script>
import { Link } from "@inertiajs/vue3"

  export default {
    components: {
        Link,
    },
    data() {
      return {
        isMenuOpen: false,
        currentRoute: '' // Ruta actual
      };
    },
    methods: {
      toggleMenu() {
        this.isMenuOpen = !this.isMenuOpen;
      }
    },
    mounted() {
    // Obtener la ruta actual al cargar el componente
    this.currentRoute = window.location.pathname;
    }
  };
  </script>
  
  