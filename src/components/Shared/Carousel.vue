<template>
  <div class="flex justify-between mt-8">
    <h3 class="font-serif text-2xl font-bold ml-8">Categories</h3>
    <router-link to="/cocktail_list" class="justify-end mr-8 font-serif text-base font-bold ml-8 block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">See All Categories</router-link>
  </div>
  <swiper
    :slidesPerView="1"
    :spaceBetween="10"
    :autoplay="{
      delay: 3500,
      disableOnInteraction: false,
    }"
    :pagination="{
      clickable: true,
    }"
    :breakpoints="{
      '640': {
        slidesPerView: 2,
        spaceBetween: 0,
      },
      '768': {
        slidesPerView: 4,
        spaceBetween: 40,
      },
      '1024': {
        slidesPerView: 4,
        spaceBetween: 15,
      },
    }"
    :modules="modules"
    :navigation="true"
    class="mySwiper"
  >
      <swiper-slide v-for="(data, index) in imageData" :key="index">
          <div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 mb-8">
            <img class="rounded-t-lg" :src="data.image" alt="" />
            <div class="p-5">
              <h5 class="mb-2 text-center text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{{ data.title }}</h5>
            </div>
          </div>
      </swiper-slide>
  </swiper>
</template>
<script>
  import { Swiper, SwiperSlide } from 'swiper/vue';
  import 'swiper/css';
  import 'swiper/css/pagination';
  import "swiper/css/navigation";

  // import required modules
  import { Autoplay, Pagination, Navigation } from 'swiper';

  export default {
    components: {
      Swiper,
      SwiperSlide,
    },
    setup() {
      const imageData = [
        {
          image: "/image/ordinary drink.jpg",
          title: "Ordinary Drink",
        },
        {
          image: "/image/cocktail.jpg",
          title: "Cocktail",
        },
        {
          image: "/image/shake.jpg",
          title: "Shake",
        },
        {
          image: "/image/cocoa.jpg",
          title: "Cocoa",
        },
        {
          image: "/image/shot.jpg",
          title: "Shot",
        },
        {
          image: "/image/beer.jpg",
          title: "Beer",
        },
      ];

      return {
        imageData,
        modules: [Autoplay, Pagination, Navigation],
      };
    },
  };
</script>
