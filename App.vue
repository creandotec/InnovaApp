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
import lighthing from './screens/Lighting/MainLighting.vue'
import louvers from './screens/Louvers/MainLouvers.vue'
import screens from './screens/Screens/MainScreens';
import climate from './screens/Climate/MainClimate';
import weather from './screens/Weather/MainWeather';
import zones from './screens/Zones/MainZones';
import scenes from './screens/Scenes/MainScenes';

const StackNavigator = createStackNavigator(
  {
    Home: home,
    Login: login,
    Lighthing: lighthing,
    Louvers: louvers,
    Screens: screens,
    Weather: weather,
    Climate: climate,
    Zones: zones,
    Scenes:scenes
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
    
    flex-direction: column;
  }
</style>
