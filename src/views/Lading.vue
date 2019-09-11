<template>
  <div class="Lading">
    <van-field
      clearable
      label="客户"
      right-icon="question-o"
      value="湖南思洋信息科技有限公司"
      @click-right-icon="$toast('question')"
      disabled
    />
    <van-field
      clearable
      label="产品"
      right-icon="question-o"
      value="诚信通"
      @click-right-icon="$toast('question')"
      disabled
    />
    <van-field type="text" label="合同编号" placeholder="请输入合同编号" required />
    <van-field clearable label="合同属性" value="新签" disabled />
    <van-field clearable label="产品单价" value="6688.00" disabled />
    <van-field
      :value="value"
      type="text"
      label="折扣"
      placeholder="100%"
      required
      @touchstart.native.stop="kshow = true;zshow = false;sshow=false;"
      readonly
      clickable
    />
    <van-field
      :value="zvalue"
      type="text"
      label="到账"
      placeholder="0.00"
      required
      @touchstart.native.stop="zshow = true;kshow = false;sshow=false;"
      readonly
      clickable
    />
    <van-cell-group>
      <van-switch-cell v-model="checked" title="是否是全款？" @input="onInput" size="18px" />
    </van-cell-group>
    <van-cell-group v-bind:class="className">
      <van-field
        :value="svalue"
        type="text"
        label="尾款"
        placeholder="0.00"
        required
        @touchstart.native.stop="sshow=true;zshow = false;kshow = false"
        readonly
        clickable
      />
    </van-cell-group>
    <van-cell-group>
      <van-switch-cell v-model="checkeds" title="是否是合作单？" @input="onInputto" size="18px" />
    </van-cell-group>
    <van-cell-group v-bind:class="nameto">
      <van-field :value="xxsvalue" type="text" label="合作销售" placeholder="点击选择销售人员" @click="openPlaceholder" required />
    </van-cell-group>
    <van-field
      :value="xsvalue"
      type="text"
      label="签单日期"
      placeholder="点击选择日期"
      @click="dataclick"
      required
      readonly
      clickable
    />
    <van-field :value="zhouqi" type="text" label="服务周期(月)" placeholder required />
    <van-field
      :value="acttype"
      type="text"
      readonly
      clickable
      label="付款方式"
      placeholder="点击选择付款方式"
      required
      @click="typeclick"
    />
      
    <van-field v-model="message" label="备注" type="textarea" placeholder="请输入备注" rows="1" autosize />
  <van-button type="primary" style="height:40px; width:100%">提交订单</van-button>
<div style="height:60px;"></div>
    <van-popup v-model="show" position="bottom" :style="{ height: '40%' }">
      <van-datetime-picker
        v-model="currentDate"
        type="datetime"
        :min-date="minDate"
        :max-date="maxDate"
        :formatter="formatter"
        @confirm="confirm"
        @cancel="cancel"
      />
    </van-popup>
    <van-number-keyboard
      :show="kshow"
      v-model="value"
      theme="custom"
      extra-key="."
      close-button-text="完成"
      @blur="sshow = false;zshow = false;kshow = false"
    />
    <van-number-keyboard
      :show="zshow"
      v-model="zvalue"
      theme="custom"
      extra-key="."
      close-button-text="完成"
      @blur="zshow = false;sshow = false;kshow = false"
    />
    <van-number-keyboard
      :show="sshow"
      v-model="svalue"
      theme="custom"
      extra-key="."
      close-button-text="完成"
      @blur="sshow = false;zshow = false;kshow = false"
    />
    <van-popup v-model="actshow" position="bottom" :style="{ height: '40%' }">
      <van-picker
        :columns="actions"
        show-toolbar
        @cancel="actshow = false"
        @confirm="onactConfirm"
      />
    </van-popup>
     <van-tabbar route>
      <van-tabbar-item replace to="/" icon="home-o">主页</van-tabbar-item>
      <van-tabbar-item replace to="/search" icon="user-o">我的信息</van-tabbar-item>
    </van-tabbar>
  </div>
</template>
<style>
.ishideto {
  display: none;
}
</style>   

<script>
import Vue from "vue";
import { Field } from "vant";
Vue.use(Field);
import { NumberKeyboard } from "vant";
Vue.use(NumberKeyboard);
import { Cell, CellGroup } from "vant";
Vue.use(Cell).use(CellGroup);
import { Switch } from "vant";
Vue.use(Switch);
import { SwitchCell } from "vant";
Vue.use(SwitchCell);
import { Dialog } from "vant";
import { DatetimePicker } from "vant";
Vue.use(DatetimePicker);
import { Popup } from "vant";
Vue.use(Popup);
import { ActionSheet } from "vant";
import { truncate } from "fs";
Vue.use(ActionSheet);
import { Picker } from "vant";
Vue.use(Picker);
import { Button } from "vant";
Vue.use(Button);
import dingtalk from "_dingtalk-jsapi@2.7.6@dingtalk-jsapi";
export default {
  data() {
    return {
      show: false,
      kshow: false,
      zshow: false,
      wshow: false,
      sshow: false,
      actshow: false,
      value: "",
      zvalue: "",
      svalue: "",
      xsvalue: "",
      xxsvalue: "",
      acttype: "",
      zhouqi: "",
      message: "",
      checked: true,
      checkeds: false,
      className: "ishideto",
      nameto: "ishideto",
      minHour: 10,
      maxHour: 20,
      minDate: new Date(),
      maxDate: new Date(2019, 10, 1),
      currentDate: new Date(),
      actions: [
        "现金",
        "刷卡",
        "支付宝",
        "在线订购",
        "长沙思洋招行",
        "思洋浦发",
        "思洋兴业",
        "电洋招行"
      ]
    };
  },
  methods: {
    onInput(checked) {
      if (!checked) this.className = "";
      else this.className = "ishideto";
    },
    onInputto(checkeds) {
      if (checkeds) this.nameto = "";
      else this.nameto = "ishideto";
    },
    dataclick() {
      this.show = true;
    },
    formatter(type, value) {
      if (type === "year") {
        return `${value}年`;
      } else if (type === "month") {
        return `${value}月`;
      } else if (type === "day") {
        return `${value}日`;
      }
      return value;
    },
    confirm(value) {
      this.xsvalue = value;
      this.show = false;
    },
    cancel() {
      this.show = false;
    },
    typeclick() {
      this.actshow = true;
    },
    onactConfirm(value, index) {
      this.acttype = value;
      this.actshow = false;
    },
    openPlaceholder()
    {

    }
  }
};
</script>