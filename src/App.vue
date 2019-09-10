<template>
  <div id="app">
    <!-- <van-nav-bar @click-left="onClickLeft" title="主页" left-text="返回" left-arrow>
      <van-icon @click="onClickRight" name="search" slot="right" />
    </van-nav-bar> -->

    <transition v-bind:name="transitionName">
      <router-view />
    </transition>
    <van-tabbar route>
      <van-tabbar-item replace to="/" icon="home-o">主页</van-tabbar-item>
      <van-tabbar-item replace to="/search" icon="user-o">我的信息</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<style lang="scss">
.slide-right-enter-active,
.slide-right-leave-active,
.slide-left-enter-active,
.slide-left-leave-active {
  will-change: transform;
  transition: all 500ms;
  position: absolute;
}
.slide-right-enter {
  opacity: 0;
  transform: translate3d(-100%, 0, 0);
}
.slide-right-leave-active {
  opacity: 0;
  transform: translate3d(100%, 0, 0);
}
.slide-left-enter {
  opacity: 0;
  transform: translate3d(100%, 0, 0);
}
.slide-left-leave-active {
  opacity: 0;
  transform: translate3d(-100%, 0, 0);
}
</style>
<script>
import Vue from "vue";
import { Tabbar, TabbarItem } from "vant";
Vue.use(Tabbar).use(TabbarItem);
import { NavBar } from "vant";
Vue.use(NavBar);
import { Icon } from "vant";
Vue.use(Icon);
import { Toast } from "vant";
Vue.use(Toast);
export default {
  data() {
    return {
      transitionName: ""
    };
  },
  methods: {
    onClickLeft() {
      Toast("返回");
    },
    onClickRight() {
      Toast("按钮");
    }
  },
  watch: {
    //使用watch 监听$router的变化
    $route(to, from) {
      //如果to索引大于from索引,判断为前进状态,反之则为后退状态
      if (to.meta.index > from.meta.index) {
        //设置动画名称
        this.transitionName = "slide-left";
      } else {
        this.transitionName = "slide-right";
      }
    }
  }
};
</script>