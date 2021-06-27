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
import timer from './screens/Timers/MainTimer';
import rgb1 from './screens/Lighting/RGBLighting1';
import rgb2 from './screens/Lighting/RGBLighting2';
import rgb3 from './screens/Lighting/RGBLighting3';

import WS from 'react-native-websocket';
import websocket from './components/Websocket';


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
    Scenes:scenes,
    Timer: timer,
    RGB1: rgb1,
    RGB2: rgb2,
    RGB3: rgb3,
  },
  {
    initialRouteName: 'Login',
    headerMode: 'none',
  },
);

const AppNavigator = createAppContainer(StackNavigator);

export default {
  components: {AppNavigator, WS},

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
