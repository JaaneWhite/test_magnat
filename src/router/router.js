import { createMemoryHistory, createRouter } from 'vue-router'

import LoginView from '../views/LoginView.vue'
import MainView from '../views/MainView.vue'

const routes = [
    { path: '/', component: LoginView },
    { path: '/home', component: MainView },
]

let router;
export default router = createRouter({
    history: createMemoryHistory(),
    routes,
    strict: true
});