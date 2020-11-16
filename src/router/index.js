import Vue from 'vue'
import VueRouter from 'vue-router'
import LoginViewComponent from "../views/LoginViewComponent";
import RegisterViewComponent from "../views/RegisterViewComponent";
import HomeViewComponent from "@/views/HomeViewComponent";

Vue.use(VueRouter)

const routes = [
  {
    component: LoginViewComponent,
    name: 'LoginViewComponent',
    path: '/login'
  },
  {
    component: RegisterViewComponent,
    name: 'RegisterViewComponent',
    path: '/register'
  },
  {
    component: HomeViewComponent,
    name: 'HomeViewComponent',
    path: '/'
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
