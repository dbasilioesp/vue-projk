<template>
  <div id="app">
    <router-view />
  </div>
</template>

<style>
:root {
  --sun-color: #f5b971;
  /* --moon-color: #85a392; */
  --moon-color: #2c3e50;
  --paper-color: #ffecc7;
  --sky-color: #fdd998;
  --header-size: 70px;
  --title-color: var(--moon-color);
  --button-bg-color: var(--moon-color);
  --button-color: var(--paper-color);
  --font-primary: "Baloo Paaji 2";
}

* {
  box-sizing: border-box;
}

html,
body {
  padding: 0;
  margin: 0;
  font-family: var(--font-primary);
}

button,
label,
input {
  font-family: var(--font-primary);
}

#app {
  font-family: var(--font-primary);
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
</style>
