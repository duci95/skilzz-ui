<template src="./template.html" />

<script>
import {apiClient} from "@/services/ApiService";

export default {
    name: "CategoriesComponent",
    data(){
        return{
            categories:[]
        }
    },
    methods:{
        async getCategories(){
            await apiClient.get('categories')
                .then(response =>  {
                    this.categories = response.data
                })
                .catch(err => {
                    console.log(err)
                });
        }
    },
    created() {
        this.getCategories();
    }
}
</script>
