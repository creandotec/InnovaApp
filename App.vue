<template>
  <view class="container">
    
      <b-img :source="'./assets/Innova/BG/background.png'"></b-img>
      <text>{{message}}</text>
    
    
  </view>
</template>

<script>
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue';
// Import Bootstrap an BootstrapVue CSS files (order is important)
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

export default {  
  data: function() {
    return {
      message: "Hello World"
    };
  }
};
</script>

<style>

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
