import { createApp } from 'vue'
import App from './App.vue'
import './assets/style.css'

//*Importar el router
import { createWebHistory, createRouter } from 'vue-router'
import Home from './components/Pages/Home.vue'
import Cocktail_List from './components/Pages/Cocktail_List.vue'
import Ingredients from './components/Pages/Ingredients.vue'


// import "../css/app.css"
// import '@fortawesome/fontawesome-free/css/all.min.css'

// import { createApp, h } from 'vue'
// import { createInertiaApp } from '@inertiajs/vue3'

// createInertiaApp({
//     resolve: name => {
//         const pages = import.meta.glob('./Pages/**/*.vue', { eager: true})
//         return pages[`./Pages/${name}.vue`]
//     },
//     setup ({ el, App, props, plugin }) {
//         createApp({ render: () => h(App, props) })
//         .use(plugin)
//         .mount(el)
//     },
// })


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
