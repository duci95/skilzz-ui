<template src="./template.html" />

<script>
import {apiClient} from "@/services/ApiService";
import Category from "../../models/Category";

export default {
    name: "CategoriesComponent",
    methods:{
        getCategories(){
            apiClient.get('categories')
            .then(response => {
                Category.insert({data:response.data})
            })
            .catch(err => {
            });
        }
    },
    computed:{
      categories(){
          return Category.all()
      }
    },
    created() {
       this.getCategories();
    }
}
</script>
