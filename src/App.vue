<template>
    <v-app>
        <router-view>
            <LoginViewComponent />
            <RegisterViewComponent />
            <HomeViewComponent />
        </router-view>
    </v-app>
</template>

<script>
    import LoginViewComponent from "./views/LoginViewComponent";
    import RegisterViewComponent from "./views/RegisterViewComponent";
    import HomeViewComponent from "@/views/HomeViewComponent";
    export default {
        name: 'App',
        components: {
            HomeViewComponent,
            LoginViewComponent,
            RegisterViewComponent
        }
    };
</script>
<style>
    a{
        text-decoration: none;
    }
    a:visited{
        color:white;
    }
</style>
