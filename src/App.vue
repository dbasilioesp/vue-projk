<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link>|
      <router-link to="/profile">Perfil</router-link>|
      <router-link to="/personagens">Personagens</router-link>
    </div>
    <router-view />
  </div>
</template>

<style>
:root {
}

* {
  box-sizing: border-box;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
  width: 100%;
  max-width: 400px;
  margin: auto;
  display: flex;
  justify-content: space-around;
  border-bottom: 1px solid #363c3b;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

input[type="text"],
input[type="password"] {
  height: 40px;
  border: 1px solid #cbccc6;
  border-radius: 4px;
  padding: 0 15px;
}
</style>
