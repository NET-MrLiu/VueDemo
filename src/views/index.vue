<template>
  <div class="index">
    <h1>This is an index page</h1>
    <van-button type="default">默认按钮</van-button>
<van-button type="primary">主要按钮</van-button>
<van-button type="info">信息按钮</van-button>
<van-button type="warning">警告按钮</van-button>
<van-button type="danger">危险按钮</van-button>
<van-grid :column-num="4">
  <van-grid-item
    v-for="value in 6"
    :key="value"
    icon="https://b.yzcdn.cn/vant/icon-demo-1126.png"
    text="测试"
  />
</van-grid>
  </div>
</template>

<script>
import Vue from 'vue';
import { Button } from 'vant';
Vue.use(Button);
import { Grid, GridItem } from 'vant';
Vue.use(Grid).use(GridItem);
import { Icon } from 'vant';
Vue.use(Icon);
export default {


}
</script>