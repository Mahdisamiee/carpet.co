<template>
    <main class="page">
        <div class="container" id="container">
            <div class="form-container sign-up-container">
                <form @submit.prevent="register" action="#">
                    <h1>Create Account</h1>
                    <div class="social-container">
                        <a href="#" class="social"><i class="fab fa-facebook-f"></i></a>
                        <a href="#" class="social"><i class="fab fa-google-plus-g"></i></a>
                        <a href="#" class="social"><i class="fab fa-linkedin-in"></i></a>
                    </div>
                    <span>or use your email for registration</span>
                    <input type="text" v-model="name" placeholder="Name" />
                    <input type="email" v-model="email" placeholder="Email" />
                    <input type="password" v-model="password" placeholder="Password" /><!--maybe need to make confrim pass :)-->
                    <button>Sign Up</button>
                </form>
            </div>
            <div class="form-container sign-in-container">
                <form @submit.prevent="login" action="#">
                    <h1>Sign in</h1>
                    <div class="social-container">
                        <a href="#" class="social"><i class="fab fa-facebook-f"></i></a>
                        <a href="#" class="social"><i class="fab fa-google-plus-g"></i></a>
                        <a href="#" class="social"><i class="fab fa-linkedin-in"></i></a>
                    </div>
                    <span>or use your account</span>
                    <input type="email" v-model="email2" placeholder="Email" />
                    <input type="password" v-model="password2" placeholder="Password" />
                    <a href="#">Forgot your password?</a>
                    <button type="submit">Sign In</button>
                </form>
            </div>
            <div class="overlay-container">
                <div class="overlay">
                    <div class="overlay-panel overlay-left">
                        <h1>Welcome Back!</h1>
                        <p>
                            To keep connected with us please login with your personal info
                        </p>
                        <button class="ghost" @click="removeclass" id="signIn">Sign In</button>
                    </div>
                    <div class="overlay-panel overlay-right">
                        <h1>Hello, Friend!</h1>
                        <p>Enter your personal details and start journey with us</p>
                        <button class="ghost" @click="addClass" id="signUp">Sign Up</button>
                    </div>
                </div>
            </div>
        </div>
    </main>
    
</template>

<script>
export default {
    data(){
        return{
            name:"",
            email:"",
            password:"",
            is_admin: null, //for found that some body is admin or not.we can do this by checking the name and password and then change is_admin:)
            //these are for login
            email2:"",
            password2 : ""
        }
    },
    /*NOTICEMENT**
        1-login function => _notice to that we have console log here and have a page with /secure url.so we should change it.
                            _maybe we have to add alert box to show that alert instead console.log()
        2-register function => 
                            _
    */
    methods:{
        //sliding Signin and SignUp
        addClass:function(){
            const container = document.getElementById("container");
            container.classList.add("right-panel-active")
        },
        removeclass:function(){
            const container = document.getElementById("container");
            container.classList.remove("right-panel-active")
        },
        //request methods
        login:function(){
            let email = this.email2;
            let password = this.password2;
            this.$store.dispatch('login' , {email,password})
            .then((result) => {
                console.log(result);
                this.$router.push('/securepage')
            }).catch((err) => {
                console.log(err)
            });
        },
        register:function(){
            let data = {
                name : this.name,
                email : this.email,
                password : this.password,
                is_admin : this.is_admin
            }
            this.$store.dispatch('register' , data)
            .then((result) => {
                console.log(result)
                this.$router.push('/securepage')
            }).catch((err) => {
                console.log(err)
            });
        }
    },
    created(){

    }
}

</script>

<!--  !!this is for Login page and try to dont touch it!! :) -->
<style scoped>
main{
    width: 100%;
    min-height: 600px;
    height: auto;
    display: grid;
    justify-content: center;
    align-items: center;
}
h1{
    font-weight: bold;
    margin: 0;
}
p {
    font-size: 14px;
    font-weight: 100;
    line-height: 20px;
    letter-spacing: 0.5px;
    margin: 20px 0 30px;
}
span{
    font-size: 12px;
}
a{
    color: #333;
    font-size: 14px;
    text-decoration: none;
    margin: 15px 0;
}


.container{
    background-color: #ffffff;
    border-radius: 10px;
    box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
    position: relative;
    overflow: hidden;
    width: 1000px;
    max-width: 100%;
    min-height: 480px;
}

.form-container form{
    background: #ffffff;
    display: flex;
    flex-direction: column;
    padding: 0 50px;
    height: 100%;
    justify-content: center;
    align-items: center;
    text-align: center;
}
.social-container{
    margin: 20px 0;
}

.social-container a{
    border: 1px solid #ddd;
    border-radius: 50%;
    display: inline-flex;
    margin: 0 5px;
    justify-content: center;
    align-items: center;
    height: 40px;
    width: 40px;
}

.form-container input{
    border: none;
    background: #eee;
    padding: 12px 15px;
    margin: 8px;
    width: 100%;
}
button{
    border-radius: 20px;
    border: 1px solid #4286f4;
    background: #4286f4;
    color: #fff;
    font-size: 12px;
    font-weight: bold;
    padding: 12px 45px;
    letter-spacing: 1px;
    text-transform: uppercase;
    transition: transform 80ms ease-out;
    outline: none;
}
button:active{
    transform: scale(0.95);
}

button.ghost{
    background: transparent;
    border-color: #fff;
}

.form-container{
    position: absolute;
    top: 0;
    height: 100%;
    transition: all 0.6s ease-in-out;
}

.sign-in-container{
    left: 0;
    width: 50%;
    z-index: 2;
}
.sign-up-container{
    left: 0;
    width: 50%;
    opacity: 0;
    z-index: 1;
}

.overlay-container{
    position: absolute;
    top: 0;
    width: 50%;
    left: 50%;
    height: 100%;
    overflow: hidden;
    transition: transform 0.6s ease-in-out;
    z-index: 100;
}
.overlay{
    background: #ff416c;
    background: -webkit-linear-gradient(to right, #373B44, #4286f4);
    background: linear-gradient(to right, #2980B9, #6DD5FA);
    color: #ffffff;
    position: relative;
    left: -100%;
    height: 100%;
    width: 200%;
    transform: translateX(0);
    transition: transform 0.6s ease-in-out;
}
.overlay-panel{
    position: absolute;
    top: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 0 40px;
    text-align: center;
    height: 100%;
    width: 50%;
    transform: translateX(0);
    transition: transform 0.6s ease-in-out;
}
.overlay-right{
    right: 0;
    transform: translateX(10%);
}
.overlay-left{
    transform: translateX(-20%);
}

.container.right-panel-active .sign-in-container{
    transform: translateX(100%);
}
.container.right-panel-active .overlay-container{
    transform: translateX(-100%);
}
.container.right-panel-active .sign-up-container{
    transform: translateX(100%);
    opacity: 1;
    z-index: 5;
}
.container.right-panel-active .overlay{
    transform: translateX(50%);
}
.container.right-panel-active .overlay-left{
    transform: translateX(-8%);
}
.container.right-panel-active .overlay-right{
    transform: translateX(20%);
}
</style>
