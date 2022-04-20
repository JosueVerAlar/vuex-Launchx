<template>
  <header>
    <div>
        <img alt="logo" src="../assets/logo2_1.png" class="logo">
      </div>
      <div class="titulo">
        <h1>¡Bienvenido!</h1>
        <p>Aquí se mostrarán los pedidos de tus clientes</p>
    </div>
  </header>

  <body>
    <div class="pedidos">
      <PedidosRecientes/>
    </div>
  </body>
</template>

<script>
  import PedidosRecientes from "@/components/PedidosRecientes.vue";

  export default {
    name: 'HomeView',
    components: {
      PedidosRecientes
    }
  }
</script>

<style scoped>
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

  .logo{
    width: 120px;
    margin-right: 30px;
    margin-left: 30px;
    position: fixed;
    top: 25px;
  }

  .pedidos{
    margin-top: 170px;
    margin-left: 20px;
    margin-right: 20px;
  }

</style>
