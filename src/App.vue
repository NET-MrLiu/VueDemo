<template>
  <div id="app">
    <router-view />
    <van-tabbar route>
  <van-tabbar-item
    replace
    to="/home"
    icon="home-o"
  >
    主页
  </van-tabbar-item>
  <van-tabbar-item
    replace
    to="/search"
    icon="user-o"
  >
    我的信息
  </van-tabbar-item>
</van-tabbar>
  </div>
</template>

<style lang="scss">

</style>
<script>
import Vue from 'vue';
import { Tabbar, TabbarItem } from 'vant';
Vue.use(Tabbar).use(TabbarItem);
export default {
  
}
</script>