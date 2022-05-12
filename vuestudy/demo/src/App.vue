<template>
  <div id="app">
    <div id="nav">
      <router-link to="/home">首页</router-link>
      <router-link to="/GameBox">游戏</router-link>
      <router-link to="/MyZone">空间</router-link>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>


export default {
  name: 'App',

}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

#nav a {
  padding: 30px;
  color: #2c3e50;
}

#nav a.router-link-active {
  color: blueviolet;
}
</style>
