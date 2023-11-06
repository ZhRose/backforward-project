<script setup>
import { onMounted, ref } from "vue";

import { NForm, NFormItem, NInput, NButton } from "naive-ui";
const isChange = ref(true);
onMounted(() => {
  const image = document.getElementsByClassName("zhizhen")[0];
  setTimeout(() => {
    image.classList.add("rotate-animation");
    console.log(122);
  }, 2000);
  setTimeout(() => {
    image.classList.remove("rotate-animation");
    image.classList.add("stop-animation");
  }, 5000);
});
setTimeout(() => {
  isChange.value = false;
}, 8000);
/*8由于时间不够用，切题目中没有要求
，所以按钮的功能都未绑定，而且转盘的位置也就是默认位置并为随机，
切选择城市的框子中的右边图案没有提供，我简单代替了一下，还有css写的较为简单和凌乱，
主要是时间不太够而且并未要求代码整洁程度
*/
</script>

<template>
  <div class="main" v-if="isChange">
    <div class="center">
      <img class="zhuanpan" src="./assets/loto-p.png" />
      <img class="zhizhen" src="./assets/loto-z.png" />
    </div>
  </div>
  <div v-else class="form">
    <n-form :label-width="80" :size="size">
      <n-form-item label="收货人姓名">
        <n-input placeholder="收货人姓名" />
      </n-form-item>
      <n-form-item label="手机号码">
        <n-input placeholder="请输入手机号码" />
      </n-form-item>
      <n-form-item label="手机验证码">
        <n-input placeholder="手机验证码" style="width: 300px" />
        <n-button class="btn">获取验证码</n-button>
      </n-form-item>
      <n-form-item label="选择地区">
        <div style="display: flex; flex-direction: column">
          <n-input value="省份" style="width: 457px; margin-bottom: 3px">
            <template #suffix>
              <div class="jiantou">
                <div class="shang">></div>
                <div class="xia">&lt</div>
              </div>
            </template>
          </n-input>
          <n-input value="城市">
            <template #suffix>
              <div class="jiantou">
                <div class="shang">></div>
                <div class="xia">&lt</div>
              </div>
            </template>
          </n-input>
        </div>
      </n-form-item>
      <n-form-item label="详细地址"  >
      <n-input  placeholder="例如xx街道xx号"   />
    </n-form-item>
      <n-button class="submit">提交订单</n-button>
    </n-form>
  </div>
</template>
<style scoped>
.submit{
  width: 457px;
  background-color: #f03d3c;
  color: #fff;
}
.submit:active {
  background-color: #a46262;
}
.jiantou {
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 34px;
  padding-right: 3px;
}
.shang {
  height: 17px;
  transform: rotate(-90deg);
}
.xia {
  height: 17px;
  transform: rotate(-90deg);
}
.main {
  background-color: #e7e7e7;
  height: 100vh;
  width: 100vw;
}
.form {
  margin: 20px;
}
.btn {
  width: 197px;
  background-color: #f03d3c;
  color: #fff;
}
.shenfen {
  width: 100vw;
  height: 34px;
  background-color: rgb(255, 255, 255);
  border: 1px;
}
.btn:active {
  background-color: #a46262;
}
.center {
  display: flex;
  position: relative;
  padding-top: 50px;
  justify-content: center;
  width: 100%;
  height: auto;
  box-sizing: border-box;
}
.center .zhuanpan {
  max-width: 90%;
  max-height: 90%;
  width: auto;
  height: auto;
}
.center .zhizhen {
  position: absolute;
  max-width: 90%;
  max-height: 90%;
}
@keyframes rotate {
  0% {
    transform: rotate(0deg); /* 起始时的旋转角度 */
  }
  100% {
    transform: rotate(360deg); /* 结束时的旋转角度 */
  }
}
.rotate-animation {
  animation: rotate 3s linear infinite; /* 设置旋转动画效果，持续3秒 */
}
.stop-animation {
  animation-play-state: paused; /* 停止动画播放 */
}
</style>
