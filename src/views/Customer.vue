<template>
  <div class="Customer">
    <van-tabs v-model="active" animated>
      <van-tab title="我的客户">
        <van-list v-model="loading" :finished="finished" finished-text="没有更多了" @load="onLoad">
          <van-cell is-link v-for="item in list" :key="item" :title="item" to="/SelectProduct" />
        </van-list>
      </van-tab>
      <van-tab title="公池客户">
        <van-list v-model="loading" :finished="finished" finished-text="没有更多了" @load="onLoad">
          <van-cell is-link v-for="item in list" :key="item" :title="item" to="/" />
        </van-list>
      </van-tab>
    </van-tabs>
     <van-tabbar route>
      <van-tabbar-item replace to="/" icon="home-o">主页</van-tabbar-item>
      <van-tabbar-item replace to="/search" icon="user-o">我的信息</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
import Vue from "vue";
import { Tab, Tabs } from "vant";
Vue.use(Tab).use(Tabs);
import { List } from "vant";
Vue.use(List);
import { Cell, CellGroup } from "vant";
Vue.use(Cell).use(CellGroup);
export default {
  data() {
    return {
      active: 0,
      list: [],
      loading: false,
      finished: false
    };
  },
  methods: {
    onLoad: function() {
      var _this = this;
      // 异步更新数据
      setTimeout(() => {
        for (let i = 0; i < 10; i++) {
          _this.list.push(_this.list.length + 1 + "湖南思洋信息科技有限公司");
        }
        // 加载状态结束
        _this.loading = false;

        // 数据全部加载完成
        if (_this.list.length >= 40) {
          _this.finished = _this;
        }
      }, 500);
    }
  }
};
</script>