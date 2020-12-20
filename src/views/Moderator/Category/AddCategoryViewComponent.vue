<template src="./template.html" />
<script>
import {apiClient} from "../../../services/ApiService";

export default {
    name: "AddCategoryViewComponent",
    data(){
        return{
            category:{
                name:"",
                description:""
            },
            success: false,
            error:false,
        }
    },
    methods:{
        save(){
            this.success = false
            this.error = false
            apiClient.post('categories',{
                name: this.category.name,
                description: this.category.description
            })
            .then(_ => {
                this.success = true
            })
            .catch(_ => {
                this.error = true
            });
        }
    },

}
</script>
