<template src="./template.html" />
<script>
// import {apiClient} from "@/services/ApiService";

import Category from "../../../models/Category";

export default {
    name: "AddCategoryViewComponent",
    data(){
        return{
            category:{
                name:"",
                description:""
            },
            success: false,
            error:false
        }
    },
    methods:{
        // save(){
        //     apiClient.post(Category.all())
        // }
        save(){
            Category.insert({data: this.category});
        }
    },
    computed:{
        categories(){
            return Category.all();
        }
    }
}
</script>
