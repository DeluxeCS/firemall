<!-- home -->
<template>
  <div>
    <nav-header></nav-header>
    <router-view></router-view>
    <nav-footer></nav-footer>
  </div>
</template>

<script>
import NavHeader from "../components/NavHeader";
import NavFooter from "../components/NavFooter";
export default {
  name: "home",
  //import引入的组件需要注入到对象中才能使用
  components: {
    NavHeader,
    NavFooter,
  },
  data() {
    //这里存放数据
    return {};
  },
};
</script>