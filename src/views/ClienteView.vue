<template>
  <header>
    <div class="home">
      <img alt="logo" src="../assets/logo1.png" class="logo">
    </div>
    <div class="titulo">
      <h1>Menú</h1>
      <p>Explora nuestras opciones que deleitarán tu paladar</p>
    </div>
    <div class="carrito">
      <img src="../assets/carritoCompras.png" alt="icono de carrito" class="icono">
      <button class="button">Ver Carrito</button>
      {{$store.state.items}}
    </div>
  </header>
  <body>
    <div class="menu">
      <Menu/>
    </div>
    <PasteleriaInfo/>
  </body>   
</template>

<script>
  import Menu from "@/components/Menu.vue";
  import PasteleriaInfo from '@/components/PasteleriaInfo.vue';

  export default {
    name: 'HomeView',
    components: {
      Menu,
      PasteleriaInfo
    }
  }
</script>

<style>
  body{
    margin: 0;
    padding: 0;
    background-color: gray;
  }
  header{
    background-color: rgba(255, 255, 255, 70%);
    display: flex;
    align-items: flex-start;
    height: 90px;
    position: fixed;
    top: 60px;
    width: 100%;
  }

  .titulo{
    position: fixed;
    left: 200px;
  }

  .logo{
    width: 120px;
    margin-right: 30px;
    margin-left: 30px;
    position: fixed;
    top: 25px;
  }
  
  .icono{
    position: fixed;
    align-content: center;
    top: 80px;
    left: 1120px;
    width: 30px;
  }

  .carrito{
    position: fixed;
    align-content: center;
    top: 120px;
    left: 1100px;
  }

  .button{
    background-color: black;
    color: white;
    border-color: none;
  }

  .menu{
    margin-top: 130px;
    color: white;
  }
</style>