<template>
      <app-navigator>
      </app-navigator>
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
  Login: login,
  },
  {
    initialRouteName: 'Login',
    headerMode: 'none'
  },
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
  
<style>
  .backgroundImage {
    flex:1;
  }
  .container {
    flex: 1;
    background-color: blue;
    flex-direction: column;
  }
</style>
