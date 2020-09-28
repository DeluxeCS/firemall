<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      res: {},
    };
  },
  mounted() {
    // 请求本地文件
    // this.axios.get("/mock/user/login.json").then((res) => {
    //   this.res = res;
    // });
    // 请求eas-mock
    // this.axios.get("https://www.easy-mock.com/mock/5f649e65fdeff7084f396a67/example/user/login").then((res) => {
    //   this.res = res;
    // });
    // 本地集成mockjs
    this.axios.get("/user/login").then((res) => {
      this.res = res;
    });
  },
};
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
</style>
