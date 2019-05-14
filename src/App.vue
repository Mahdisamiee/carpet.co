<template>
  <div id="app">
    <div class="header">
      <div class="logo">
        <div class="innerlogo">
          <img src="./assets/logo2.png" alt="">
        </div>
      </div>
      <div class="between"></div>
      <div class="nav">
        <div class="innernav">
          <router-link to="/">Home</router-link> |
          <!-- here we add router that we need for our project section

          <router-link v-if="!isLoggedIn" to="/register">Filtering</router-link> |

          -->
          <router-link to="/register">Register</router-link> |
        </div>
      </div>
    </div>
    <transition name="router-anim">
      <router-view/>
    </transition>
  </div>
</template>

<script>


export default {
  name: 'app',
  
}
</script>

<style>
  @import url('https://fonts.googleapis.com/css?family=Montserrat:400,800');
  #app{
    font-family: 'Montserrat',sans-serif;
    box-sizing: border-box;
    padding: 0;
    margin: 0;
  }
  body{
    margin: 0;
    padding: 0;
  }
  

.page{
  position: fixed;
  width: inherit;
}
.router-anim-enter-active{
  animation: coming 1s;
  animation-delay: 0.6s; 
  opacity: 0;
}
.router-anim-leave-active{
  animation: going 1s;
}

@keyframes coming {
  from{
    transform: translateX(-300px);
  }
  to{
    transform: translateX(0);
    opacity: 1;
  }
}
@keyframes going {
  from{
    transform: translateX(0);
  }
  to{
    transform: translateX(100px);
    opacity: 0;
  }
}

</style>
<style scoped>
  .header{
    display: grid;
    grid-template-columns: 1fr 2fr 2fr;
    align-content: center;
    justify-content: space-between;
    background-image: linear-gradient(110deg,#2193b0,#6dd5ed);
    height: 120px;
    padding: 0;
    margin: 0;
    letter-spacing: 2px;
  }
  .header .logo{
    display: grid;
    justify-content: center;
    align-items: center;
  }
  .header .logo img{
    width: 100px;
    height: 100px;
    border-radius: 50%;
  }
  .header .nav{
    display: grid;
    justify-items: center;  
    align-items: center;
    color: #666;
  }
  .header .nav a{
    text-decoration: none;
    border-radius: 3px;
    color: #fff;
    padding: 5px 10px;
  }
  .header .nav .router-link-exact-active{
    background: #fff;
    color: #6dd5ed;
  }
</style>

