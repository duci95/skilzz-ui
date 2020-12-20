<template src="./template.html"></template>

<script>
import {apiClient} from "../../../../services/ApiService";
import Question from "../../../../models/Question";

export default {
    props:['id'],
    name: "QuestionsViewComponent",
    methods:{
        getQuestions(){
            apiClient.get('questions/' + this.id)
            .then(response => {
                Question.create({data: response.data})
            })
            .catch(err =>{
            })
        }
    },
    computed:{
        questions(){
            return Question.all()
        }
    },
    created(){
        this.getQuestions()
    },
	destroyed() {
        Question.deleteAll()
    }
}
</script>
