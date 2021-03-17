<template>
    <view class="container">
        <StatusBar/>
        <GestureRecognizer style="flex:1;flex-direction:column" :on-swipe="(direction, state) => swipeHandler(direction, state)">
        <ImageBackground :source="require('./../../assets/Innova/BG/fondomain.png')"
            class="backgroundImage" resizeMode="stretch">
            <view class="innova-layout">
                <view style="flex:1.5; flex-direction:column">
                    <Innova-Header/>
                    <Screen-Title screenTitle="RGB-3"/>
                </view>
                
                <view style="flex:8; flex-direction:column">
                    <view class="main-switch-container">
                        <view class="master-container">
                            <color-wheel-switch master="'true"/>

                            <view class="master-text-container">
                                <text class="innova-master-text">RGB</text>
                                <palette-switch size="sm"/>
                            </view>
                            
                        </view>
                    </view>

                    <view class="default-row-container">
                        <red-switch/>

                        <Innova-Slider-Red/>
                    </view>
                    
                    <view class="default-row-container">
                        <green-switch/>
                        <Innova-Slider-Green/>
                        
                    </view>
                    
                    <view class="default-row-container">
                        <blue-switch/>

                        <Innova-Slider-Blue/>

                    </view>
                </view>
                
            </view>
        </ImageBackground>
        </GestureRecognizer>
    </view>
</template>

<script>
import Slider from "../../components/Slider";
import SliderRed from "../../components/SliderRed";
import SliderGreen from "../../components/SliderGreen";
import SliderBlue from "../../components/SliderBlue";

import ColorWheelSwitch from '../../components/Switches/ColorWheelSwitch.vue';


import RedSwitch from '../../components/Switches/RedSwitch.vue';
import GreenSwitch from '../../components/Switches/GreenSwitch.vue';
import BlueSwitch from '../../components/Switches/BlueSwitch.vue';
import PaletteSwitch from '../../components/Switches/PaletteSwitch.vue';

import InnovaHeader from "./../../components/InnovaHeader";
import ScreenTitle from "./../../components/ScreenTitle";

import GestureRecognizer, {swipeDirections} from 'react-native-swipe-gestures';

export default {
    components:{
        "Innova-Slider":Slider,
        "Innova-Slider-Red":SliderRed,
        "Innova-Slider-Green": SliderGreen,
        "Innova-Slider-Blue": SliderBlue,
        InnovaHeader,  GestureRecognizer, swipeDirections,
        ScreenTitle,
        ColorWheelSwitch,
        RedSwitch,
        GreenSwitch,
        BlueSwitch,
        PaletteSwitch
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
                this.navigation.navigate("Lighthing");
            }
            else if(direction == "SWIPE_RIGHT"){
                this.navigation.navigate("Lighthing");
            }
            else if(direction == "SWIPE_UP"){
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

<style scoped>
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
        margin-top: 100;
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
        flex:5;
        flex-direction: row;
    }
    .default-row-container{
        flex:2;
        flex-direction: row;
        justify-content: flex-start;
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
        flex:1;
        margin-top: 0%;
        margin-bottom: 0%;
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
        flex-direction: row;
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