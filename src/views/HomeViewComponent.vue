<template>
    <v-container fluid>
        <v-row align-content="center">
            <v-col align-self="center">
                <p v-for="category in categories" :key="category.id">
                    {{category.category_name}}
                    {{category.description}}
                    {{category.id}}
                </p>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>

import {apiClient} from "@/services/ApiService";

export default {
name: "HomeViewComponent",
    data(){
        return{
            categories:[]
        }
    },
    methods:{
       async getCategories(){
           await apiClient.get('/categories')
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

