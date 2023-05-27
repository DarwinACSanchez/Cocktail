import { createApp } from 'vue'
import App from './App.vue'
import './assets/style.css'
import '@fortawesome/fontawesome-free/css/all.min.css'

//*Importar el router
import { createWebHistory, createRouter } from 'vue-router'
import Home from './components/Pages/Home.vue'
import Cocktail_List from './components/Pages/Cocktail_List.vue'
import Ingredients from './components/Pages/Ingredients.vue'

//* Definir las Rutas
const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/cocktail_list',
        name: 'Cocktail_List',
        component: Cocktail_List
    },
    {
        path: '/ingredients/:id',
        name: 'Ingredients',
        component: Ingredients,
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;

createApp(App).use(router).mount('#app')
