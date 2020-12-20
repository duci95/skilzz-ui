import Vue from 'vue'
import VueRouter from 'vue-router'
import LoginViewComponent from "../views/LoginViewComponent";
import RegisterViewComponent from "../views/RegisterViewComponent";
import HomeViewComponent from "../views/HomeViewComponent";
import AddCategoryViewComponent from "../views/Moderator/Category/AddCategoryViewComponent";
import QuestionsViewComponent from "../views/Moderator/Questions/QuestionsViewComponent/QuestionsViewComponent";
import ResetPasswordComponent from "../components/ResetPasswordComponent/ResetPasswordComponent";
import AddQuestionViewComponent from "../views/Moderator/Questions/AddQuestionViewComponent/AddQuestionViewComponent";

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
        component: ResetPasswordComponent,
        name:'ResetPasswordComponent',
        path:'/reset-password'
    },
    {
        component: HomeViewComponent,
        name: 'HomeViewComponent',
        path: '/'
    },
    {
        component: AddCategoryViewComponent,
        name: 'AddCategoryViewComponent',
        path: '/moderator/categories/insert'
    },
    {
        component: QuestionsViewComponent,
        name:'QuestionsViewComponent',
        path:'/moderator/categories/:id',
        props:true
    },
    {
        component: AddQuestionViewComponent,
        name: 'AddQuestionViewComponent',
        path: '/moderator/questions/:id',
        props: true
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router
