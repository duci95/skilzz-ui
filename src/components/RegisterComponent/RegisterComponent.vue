<template src="./template.html" />
<script>
    import ApiService from "../../services/ApiService";
    export default {
        name: "RegisterComponent",
        data(){
            return {
                firstname:'',
                lastname:'',
                username: '',
                email:'',
                password:'',
                passwordRepeat:'',
                success: false,
                error: false,
                showPassword : false
            }
        },
        methods:{
            register: function () {
                this.success = false;
                this.error = false;
                if (this.$refs.form.validate()) {
                    ApiService.apiClient.post('/register', {
                        firstname: this.firstname,
                        lastname: this.lastname,
                        username: this.username,
                        email: this.email,
                        password: this.password,
                        passwordRepeat: this.passwordRepeat
                    })
                        .then(response => {
                            console.log(response.data)
                            this.success = true;
                        })
                        .catch(_ => { // eslint-disable-line no-unused-vars

                        })
                }
            },

        },
        computed:{
            firstnameRules(){
                return [
                    v => !!v || 'First name is required',
                    v => /^[A-ZŠĐČĆŽa-zšđčćž\s]+$/.test(v) || "First name cannot contain special characters nor numbers",
                    v => (v && v.length <= 30) || 'First name cannot be longer than 30 characters'
                ]
            },
            lastnameRules(){
                return [
                    v => !!v || 'Last name is required',
                    v => /^[A-ZŠĐČĆŽa-zšđčćž\s]+$/.test(v) || "Last name cannot contain special characters",
                    v => (v && v.length <= 50) || 'Last name cannot be longer than 50 characters'
                ]
            },
            usernameRules(){
                return [
                    v => !!v || 'Username is required',
                    v => /^[A-ZŠĐČĆŽa-zšđčćž0-9_\s]+$/.test(v) || "Username can contain  characters",
                    v => (v && v.length <= 30) || 'Username cannot be longer than 30 characters',
                    v => (v && v.length >= 6) || 'Username cannot be shorter than 6 characters'
                ]
            },
            emailRules(){
                return [
                    v => !!v || 'Email is required',
                    v => /.+@.+\..+/.test(v) || "Email is not in valid format"
                ]
            },
            passwordRules(){
                return [
                    v => !!v || 'Password is required',
                    v => (v && v.length <= 20) || 'Password cannot be longer than 20 characters',
                    v => (v && v.length > 8) || 'Password cannot be shorter than 8 characters'
                ]
            },
            passwordConfirmRules(){
                return [
                    v => !!v || 'You must confirm your password',
                    v => v === this.password || 'Passwords do not match'
                ]
            },
            pictureRules(){
                return [
                    v => v.size < 3000000 || 'Avatar size can not be more than 3 MB!',
                ]
            }

        },
        created() {

        }
    }
</script>
