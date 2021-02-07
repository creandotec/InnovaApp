<template>
  <view class="container">
      <ImageBackground :source="require('./assets/Innova/BG/background.png')"
        class="backgroundImage" resizeMode="stretch">
        <!-- <app-navigator>
        </app-navigator> -->
      </ImageBackground>
  </view>
</template>

<script>

import {
    createAppContainer,
    createStackNavigator,
  }  from "vue-native-router";

import home from './screens/home/home.vue';
import login from './screens/login/login.vue';

const StackNavigator = createStackNavigator(
  {
  Home: home,
  Login: login
  },
  {
    initialRouteName: 'Login',
  }
);

const AppNavigator = createAppContainer(StackNavigator);

export default {
  components: {AppNavigator},

  data: function() {
    return {
      image: {uri: './assets/Innova/BG/background.png'},
      message: "Hello World"
    };
  }
};
</script>
  
<style source="./assets/css/innova.css" >
</style>
