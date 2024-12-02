import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue';
import ContactView from '../views/ContactView.vue';
import NotFound from '../views/NotfoundView.vue'
import Login from '../views/LoginView.vue'
import UploadProject from '../views/UploadProject'
import Profile from '../views/Profile'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },

  {
    path: '/about',
    name: 'about',
    component: AboutView,
  },

  {
    path: '/contact',
    name: 'contact',
    component: ContactView,
  },

  {
    path: '/:catchAll(.*)',
    name: 'notfound',
    component: NotFound,
  },

  {
    path: '/login',
    name: 'login',
    component: Login
  },

  {
    path: '/upload',
    name: 'UploadProject',
    component: UploadProject
  },
  
  {
    path: '/profile',
    name: 'Profile',
    component: Profile
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
