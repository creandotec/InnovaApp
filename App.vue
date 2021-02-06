<template>
  <view class="container">
    <div class="innovaBg"></div>
    <text>{{message}}</text>
  </view>
</template>

<script>
export default {
  data: function() {
    return {
      message: "Hello World"
    };
  }
};
</script>

<style>
.innovaBg {
  background-image:url(https://vuejs.org/images/logo.png);
}
.container {
  background-color: white;
  align-items: center;
  justify-content: center;
  flex: 1;
  
}
.text-color-primary {
  color: blue;
}
</style>
