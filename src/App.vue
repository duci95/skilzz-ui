<template>
    <v-app>
        <NavigationComponent/>
        <router-view>
            <LoginViewComponent />
            <RegisterViewComponent />
            <HomeViewComponent />
        </router-view>
        <FooterComponent/>
    </v-app>
</template>

<script>
    import LoginViewComponent from "./views/LoginViewComponent";
    import RegisterViewComponent from "./views/RegisterViewComponent";
    import HomeViewComponent from "@/views/HomeViewComponent";
    import NavigationComponent from "@/components/NavigationComponent/NavigationComponent";
    import FooterComponent from "@/components/FooterComponent/FooterComponent";
    export default {
        name: 'App',
        components: {
            NavigationComponent,
            HomeViewComponent,
            LoginViewComponent,
            RegisterViewComponent,
            FooterComponent
        }
    };
</script>
<style>
	*{
		padding: 0;
		margin: 0;
	}
    a{
        text-decoration: none;
    }
    a:visited{
        color:white;
    }
</style>
