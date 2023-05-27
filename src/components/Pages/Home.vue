<template>
    <!-- <Navbar /> -->
    
    <div class="justify-center items-center relative">
        <img class="w-full" src="/image/Img1.png" alt="">
        <div class="absolute inset-0 z-10 text-white text-center top-1/2 p-4 font-bold ">
            <h1 class="text-lg lg:text-8xl md:text-4xl font-serif">Cocktails Drink</h1>
            <p class="text-sm lg:text-4xl md:text-2xl ">The great cocktails recipes</p>
        </div>
    </div>

    <!-- Gallery -->
    <div class="grid grid-cols-3 gap-4 my-8 mx-8">
        <div class="grid gap-4">
            <div>
                <img class="block h-full w-full rounded-lg object-cover object-center" src="/image/f1.jpg" alt="">
            </div>
            <div>
                <img class="block h-full w-full rounded-lg object-cover object-center" src="/image/f2.jpg" alt="">
            </div>
        </div>
        <div class="grid gap-4">
            <div>
                <img class="block h-full w-full rounded-lg object-cover object-center" src="/image/f3.jpg" alt="">
            </div>
            <div>
                <img class="block h-full w-full rounded-lg object-cover object-center" src="/image/f4.jpg" alt="">
            </div>
        </div>
        <div class="grid gap-4">
            <div>
                <img class="block h-full w-full rounded-lg object-cover object-center" src="/image/f5.jpg" alt="">
            </div>
            <div>
                <img class="block h-full w-full rounded-lg object-cover object-center" src="/image/f7.jpg" alt="">
            </div>
        </div>
    </div>
    <!-- End Gallery  -->

    <div class="relative">
    <img src="/image/Img3.jpg" alt="Img" class="w-full h-auto lg:h-[600px] md:h-[450px]">
        <div class="absolute inset-0 flex items-center text-center flex-col top-8 lg:top-1/4 p-4 mb-8">
            <div class="bg-white bg-opacity-20 p-6 rounded-lg flex items-center text-center justify-center w-auto h-auto">
                <h2 class="text-white text-lg lg:text-4xl md:text-4xl font-serif font-bold">Choose your favorite drink</h2>
            </div>
        </div>
        <div class="absolute inset-0 flex items-center text-center justify-center flex-col mt-20 lg:mt-44">
            <div class="bg-white bg-opacity-20 p-6 rounded-lg h-auto w-auto mt-8 lg:mx-16">
                <p class="text-white text-sm lg:text-lg md:text-xl font-bold mb-4">Here you will find a wide variety of drinks to prepare at home, we have something for all tastes. Our recipes are easy to follow and use common ingredients that can be found in any supermarket. Whether you're looking for a fancy drink or something adventurous, you'll find everything you need to become a cocktail connoisseur here!</p>
            </div>
            <router-link to="/cocktail_list">
                <button class="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 mt-4 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800">
                    <span class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                        See more...
                    </span>
                </button>
            </router-link>>
        </div>
    </div>
    
    <!-- Carousel -->
        <!-- <Carousel /> -->
    <!-- End Carousel -->

    <!-- <Footer /> -->
</template>


<script>
// import Navbar from '../Shared/Navbar.vue';
// import { Link } from "@inertiajs/vue3";
// import Carousel from '../Shared/Carousel.vue';
// import Footer from '../Shared/Footer.vue';

export default {
    components: {
        // Navbar,
        // Carousel,
        // Footer,
        // Link,
    }
}
</script>
