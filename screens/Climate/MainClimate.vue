<template>
<view class="container">
    <GestureRecognizer style="flex:1;flex-direction:column" :on-swipe="(direction, state) => swipeHandler(direction, state)">
        <ImageBackground :source="require('./../../assets/Innova/BG/fondomain.png')"
            class="backgroundImage" resizeMode="stretch">
            <view class="innova-layout">
                <Innova-Header/>
                
                <Screen-Title screenTitle="CLIMATE CONTROL"/>

                <view class="main-switch-container">
                    <view class="master-container">
                        <climate-switch master="true"/>

                        <view class="master-text-container">
                            <text class="innova-master-text">CLIMATE</text>
                        </view>
                        
                    </view>
                </view>

                <view class="double-row-container">
                    <view class="menu-button-container">
                        <view style="flex:0.20;">
                            <text class="menu-title-center">0.0°F</text>
                        </view>
                        <view>
                            <text class="menu-title-center">0%</text>
                        </view>
                    </view>

                    <view style="flex:1; flex-direction:row;">
                        <view style="flex:1; flex-direction: column; margin-right:3%">
                            <view style="flex:1; flex-direction: column; align-items:center; justify-content:flex-end">
                                <Pressable :on-press='() => IncreaseTemp()'>
                                    <image style="flex:0.9; margin-top:8%" resizeMode="contain"
                                    :source="require('./../../assets/Innova/Climate/climatedosred.png')"/>
                                </Pressable>
                            </view>
                            <view style="flex:1; flex-direction: column; align-items:center; justify-content:flex-start">
                                <Pressable :on-press='() => DecreaseTemp()'>
                                    <image style="flex:0.9; margin-bottom:0%" resizeMode="contain"
                                    :source="require('./../../assets/Innova/Climate/climatedosblue.png')"/>
                                </Pressable>
                            </view>
                        </view>
                        
                        <view style="flex:1; flex-direction:column">
                            <view class="menu-button-container">
                                <view style="flex:0.20;">
                                    <text class="menu-title-center">{{temperature}}°F</text>
                                </view>
                                <view style="flex:1; flex-direction:column">
                                    <ac-switch master="true"/>
                                </view>
                            </view>
                        </view>
                        
                    </view>
                    
                </view>

                <view class="default-row-container">
                    <cilingfan-switch/>
                    <Innova-Slider/>
                </view>
                
                <view class="default-row-container">
                    <mist-switch/>
                    <Innova-Slider/>
                    
                </view>
                
                <view class="default-row-container">
                    <spare-alt-switch/>
                    <Innova-Slider/>
                </view>
                
            </view>
        </ImageBackground>
    </GestureRecognizer>
    </view>
</template>

<script>
//import  Slider  from '@react-native-community/slider';
import { Animated, PanResponder } from 'react-native';
import  {PanGestureHandler} from 'react-native-gesture-handler';
import Slider from './../../components/Slider';
import InnovaHeader from '../../components/InnovaHeader.vue';
import ScreenTitle from '../../components/ScreenTitle';
import ClimateSwitch from '../../components/Switches/ClimateSwitch.vue';
import CilingfanSwitch from '../../components/Switches/CilingfanSwitch.vue';
import MistSwitch from '../../components/Switches/MistSwitch.vue';
import SpareAltSwitch from '../../components/Switches/SpareAltSwitch.vue';
import AcSwitch from '../../components/Switches/AcSwitch.vue';

import GestureRecognizer, {swipeDirections} from 'react-native-swipe-gestures';


export default {
    components:{
        Animated, PanGestureHandler, 
        PanResponder,  GestureRecognizer, swipeDirections,
        "Innova-Slider":Slider,
        InnovaHeader,
        ScreenTitle,
        ClimateSwitch,
        CilingfanSwitch,
        MistSwitch,
        SpareAltSwitch,
        AcSwitch
    },
    props:{
        navigation:{
            type: Object
        }
    },
    data: function(){
        return{
            temperature: 0.0,
        }
    },
    methods:{
        swipeHandler: function(direction, state){
            console.log(direction);
            //console.log(state);
            if(direction == "SWIPE_LEFT"){
                this.navigation.navigate("Screens");
            }
            else if(direction == "SWIPE_RIGHT"){
                this.navigation.navigate("Lighthing");
            }
            else if(direction == "SWIPE_UP"){
                this.navigation.navigate("Home");
            }
            else if(direction == null){
                this.navigation.navigate("Home");
            }
        },
        IncreaseTemp: function(){
            this.temperature += 0.5;
        },
        DecreaseTemp: function(){
            this.temperature -= 0.5;
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
        flex:2.5;
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
    .container {
        flex: 1;
        flex-direction: column;
        justify-content: center;
    }

</style>