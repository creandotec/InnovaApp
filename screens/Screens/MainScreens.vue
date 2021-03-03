<template>
<view class="container">
    <GestureRecognizer style="flex:1;flex-direction:column" :on-swipe="(direction, state) => swipeHandler(direction, state)">
        <ImageBackground :source="require('./../../assets/Innova/BG/fondomain.png')"
            class="backgroundImage" resizeMode="stretch">
            <view class="innova-layout">
                
                <Innova-Header/>

                <Screen-Title screenTitle="SCREENS"/>
                
                <view class="main-switch-container">
                    <view class="master-container">
                        <screen-switch-alt master="'true"/>
                        <view class="master-text-container">
                            <text class="innova-master-text">SCREENS</text>
                        </view>
                        
                    </view>
                </view>

                <view class="default-row-container">
                    <screen-switch/>
                    <screen-switch/>
                    <screen-switch/>
                    <screen-switch/>
                </view>
                
                <view class="default-row-container">
                    <screen-switch/>
                    <screen-switch/>
                    <screen-switch/>
                    <screen-switch/>
                </view>
                
                <view class="default-row-container">
                    <screen-switch-alt size="lg"/>
                    <Innova-Slider/>
                </view>
                
                <view class="double-row-container">
                    <view class="menu-button-container">
                        <view style="flex:0.20;">
                            <text class="menu-title-center">SUN TRACER</text>
                        </view>
                        <SunSwitch size="xl"/>
                    </view>
                    <view class="menu-button-container" >
                        <view style="flex:0.20;">
                            <text class="menu-title-center">WEATHER</text>
                        </view>
                        <WeatherSwitch size="md"/>
                    </view>
                    
                </view>
            </view>
        </ImageBackground>
    </GestureRecognizer>
    </view>
</template>

<script>
import Slider from "./../../components/Slider";
import InnovaHeader from './../../components/InnovaHeader';
import ScreenTitle from './../../components/ScreenTitle';
import ScreenSwitch from './../../components/Switches/ScreenSwitch.vue'
import ScreenSwitchAlt from '../../components/Switches/ScreenSwitchAlt.vue';

import WeatherSwitch from './../../components/Switches/WeatherSwitch.vue';
import SunSwitch from './../../components/Switches/SunSwitch.vue';

import GestureRecognizer, {swipeDirections} from 'react-native-swipe-gestures';

export default {
    components:{
        "Innova-Slider":Slider,
        InnovaHeader, GestureRecognizer, swipeDirections,
        ScreenTitle,
        ScreenSwitch,
        ScreenSwitchAlt,
        SunSwitch,
        WeatherSwitch
    },
    props:{
        navigation:{
            type: Object
        }
    },
    data: function(){
        return{

        }
    },
    methods:{
        swipeHandler: function(direction, state){
            console.log(direction);
            //console.log(state);
            if(direction == "SWIPE_LEFT"){
                this.navigation.navigate("Weather");
            }
            else if(direction == "SWIPE_RIGHT"){
                this.navigation.navigate("Climate");
            }
            else if(direction == "SWIPE_UP"){
                this.navigation.navigate("Home");
            }
            else if(direction == null){
                this.navigation.navigate("Home");
            }
        },
        changeMenu: function(menu){
            if(menu == 0){
                this.navigation.navigate("Home");
            }
        }
    }
}
</script>

<style>
    .menu-title-center{
        color: white;
        margin-top: auto;
        margin-left: auto;
        margin-right: auto;
        font-size: 15;
    }
    .menu-button-container{
        flex:1;
        flex-direction: column;
        
    }
    .header{
        flex:1;
        flex-direction: row;
    }
    .master-container{
        flex:1;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        align-content: center;
    }
    .master-icon-container{
        flex:0.8;
        /* background-color: ghostwhite; */
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
    .master-text-container{
        flex:1;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
    .innova-master-text{
        color: ghostwhite;
        font-size: 25;
        font-weight: bold;
    }
    .home-button{
        flex: 1;
    }
    .header-bar{
        flex:2;
    }
    .screen-title-container{
        flex:1;
        flex-direction: row;
    }
    .main-switch-container{
        flex:3.5;
        flex-direction: row;
    }
    .default-row-container{
        flex:2;
        flex-direction: row;
        justify-content: flex-start;
    }
    .double-row-container{
        flex:4;
        flex-direction: row;
        justify-content: center;
    }
    .master-icon{
        flex:0.85;
        margin-top:8%;
        margin-bottom: 8%;
    }
    .icon{
        flex:0.9;
        margin-top: 5%;
        margin-bottom: 5%;
    }
    .icon-xl{
        flex:0.9;
    }
    .icon-xl-2{
        flex:2;
    }
    .screen-title{
        flex:1;
        font-weight: bold;
        font-size: 15;
        color: whitesmoke;
        margin-top:2%;
        margin-bottom: 2%;
    }
    .header-container{
        flex:1;
        justify-content: center;
    }
    .row-header{
        flex: 0.67;
        flex-direction: row;
        align-items: flex-end;
        align-content: space-between;
    }
    .icon-container {
        flex:1;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
    .icon-sm{
        flex:0.5;
    }
    .slider-container{
        flex: 4;
        flex-direction: row;
        justify-content: center;
        align-items: center;
    }
    .slider-icon{
        flex:1;
        margin-top:10%;
        margin-bottom: 10%;
        margin-left:5%;
        margin-right: 0%;
    }
    .innova-layout {
        flex:1;
        flex-direction: column;
        align-items: stretch;
        justify-content: flex-end;
    }
    .backgroundImage {
        flex:1;
        justify-content: center;
    }
    .backgroundTitle {
        flex:1;
        flex-direction: row;
        justify-content: space-between;
    }
    .container {
        flex: 1;
        flex-direction: column;
        justify-content: center;
    }

</style>