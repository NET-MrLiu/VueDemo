<template>
  <div class="index">
    <van-nav-bar @click-left="onClickLeft" title="主页" left-text="返回" left-arrow>
      <van-icon @click="onClickRight" name="search" slot="right" />
    </van-nav-bar>
    <div id="top" >
      <span>工号:2849</span>
      <span>姓名:刘盈</span>
      <span>部门:财务数据中心</span>
    </div>
    <van-grid :column-num="4" square>
      <van-grid-item v-for="value in listdata" :key="value.id" v-bind:icon="value.icon" v-bind:text="value.name" v-bind:to="value.url" />
    </van-grid>
  </div>
</template>

<style>
#top{
font-size:10px;
color: rgb(185, 185, 185);

}
</style>
<script>
import Vue from "vue";
import { Button } from "vant";
Vue.use(Button);
import { Grid, GridItem } from "vant";
Vue.use(Grid).use(GridItem);
import { Icon } from "vant";
Vue.use(Icon);
import { NavBar } from "vant";
Vue.use(NavBar);
import { Toast } from "vant";
Vue.use(Toast);

export default {  
data: function() {
    return {
      items: [
      { message: 'Foo' },
      { message: 'Bar' }
    ],
      listdata:[{id:"1",name:"在线提单",url:"/",icon:"home-o"}]
    };
},

  methods: {
    onClickLeft() {
      Toast("返回");
    },
    onClickRight() {
      Toast("按钮");
    }
  }
};
</script>