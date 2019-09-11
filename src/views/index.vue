<template>
  <div class="index">
    <!-- <div id="top" >
      <span>工号:2849</span>
      <span>姓名:刘盈</span>
      <span>部门:财务数据中心</span>
    </div>-->
    <van-swipe :autoplay="3000" style="height:190px">
  <van-swipe-item v-for="(image, index) in images" :key="index">
    <img v-lazy="image" />
  </van-swipe-item>
</van-swipe>

    <van-grid :column-num="3" square>
      <van-grid-item
        v-for="value in listdata"
        :key="value.id"
        v-bind:icon="value.icon"
        v-bind:text="value.name"
        v-bind:to="value.url"
      />
    </van-grid>
     <van-tabbar route>
      <van-tabbar-item replace to="/" icon="home-o">主页</van-tabbar-item>
      <van-tabbar-item replace to="/search" icon="user-o">我的信息</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<style>
#top {
  font-size: 10px;
  color: rgb(185, 185, 185);
}
</style>
<script>
import Vue from "vue";
import { Swipe, SwipeItem } from "vant";
Vue.use(Swipe).use(SwipeItem);
import { Grid, GridItem } from "vant";
Vue.use(Grid).use(GridItem);
import { Icon } from "vant";
Vue.use(Icon);
import { NavBar } from "vant";
Vue.use(NavBar);
import { Toast } from "vant";
Vue.use(Toast);
import { Lazyload } from "vant";
Vue.use(Lazyload);
import { Notify } from "vant";
Vue.use(Notify);

export default {
  data: function() {
    return {
      listdata: [
        { id: "1", name: "在线提单", url: "/Customer", icon: "home-o" },
        { id: "2", name: "撞单查询", url: "/", icon: "search" },
        { id: "3", name: "消息", url: "/", icon: "envelop-o" },
        { id: "4", name: "新签", url: "/", icon: "balance-list-o" },
        { id: "5", name: "续签", url: "/", icon: "todo-list-o" },
        { id: "6", name: "首保", url: "/", icon: "bill-o" },
        { id: "7", name: "服务包", url: "/", icon: "balance-o" },
        { id: "8", name: "网销宝", url: "/", icon: "refund-o" },
        { id: "9", name: "自有产品", url: "/", icon: "after-sale" }
      ],
      images: [
        "https://myphotos1102.oss-cn-shenzhen.aliyuncs.com/banner3.png",
        "https://myphotos1102.oss-cn-shenzhen.aliyuncs.com/banner4.png",
        "https://myphotos1102.oss-cn-shenzhen.aliyuncs.com/banner1.png",
        "https://myphotos1102.oss-cn-shenzhen.aliyuncs.com/banner2.png",
      ]
    };
  },

  methods: {

  },
  created: function() {
    Notify({
      type: "success",
      message: "工号：2849  姓名：刘盈  部门：财务数据中心"
    });
  }
};
</script>