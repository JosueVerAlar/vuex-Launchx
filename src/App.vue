<template>
  <nav>
    <router-link to="/">Cliente</router-link> |
    <router-link to="/Pastelero">Pastelero</router-link>
  </nav>
  <router-view/>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 20px;
  background-color: rgba(255, 255, 255, 70%);
  height: 10px;
  position: fixed;
  top: 20px;
  width: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #be7719;
}
</style>
