<template>
    <view class="container">
        <StatusBar/>
        <SafeAreaView style="flex:1">
        <GestureRecognizer style="flex:1;flex-direction:column" :on-swipe="(direction, state) => swipeHandler(direction, state)">
        <ImageBackground :source="require('./../../assets/Innova/BG/fondomain.png')"
            class="backgroundImage" resizeMode="stretch">
            <view class="innova-layout">

                <view style="flex:1.5; flex-direction:column"> 
                    <Innova-Header/>
                    <Screen-Title screenTitle="TIMER SELECTION"/>
                </view>
                
                <view style="flex:8; flex-direction:column">
                    <view class="main-switch-container">
                        <view class="master-container">
                            <clock-switch master="'true"/>

                            <view class="master-text-container">
                                <text class="innova-master-text">TIMER</text>
                            </view>
                            
                        </view>
                    </view>

                    <view class="default-row-container">
                        <timer-config TimerNumber="1"/>
                    </view>
                    
                    <view class="default-row-container">
                        <timer-config TimerNumber="2"/>
                    </view>
                    
                    <view class="default-row-container">
                        <timer-config TimerNumber="3"/>
                    </view>
                    
                    <view class="default-row-container">
                        <timer-config TimerNumber="4"/>
                    </view>
                    
                    <view class="default-row-container">
                        <timer-config TimerNumber="5"/>
                    </view>

                    <view class="default-row-container">
                        <timer-config TimerNumber="6"/>
                    </view>
                </view>
            </view>
        </ImageBackground>
        </GestureRecognizer>
        </SafeAreaView>
    </view>
</template>

<script>
import Slider from "../../components/Slider";
import InnovaHeader from "./../../components/InnovaHeader";
import ScreenTitle from "./../../components/ScreenTitle";
import SceneSwitch from '../../components/Switches/SceneSwitch.vue';
import TimerConfig from '../../components/TimerConfig.vue'
import ClockSwitch from '../../components/Switches/Zones/ClockSwitch.vue'

import GestureRecognizer, {swipeDirections} from 'react-native-swipe-gestures';

export default {
    components:{
        "Innova-Slider":Slider, TimerConfig, ClockSwitch,
        InnovaHeader,  GestureRecognizer, swipeDirections,
        ScreenTitle, SceneSwitch
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
                this.navigation.navigate("Zones");
            }
            else if(direction == "SWIPE_UP"){
                this.navigation.navigate("Home");
            }
            else if(direction == "SWIPE_RIGHT"){
                this.navigation.navigate("Zones");
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
        flex:3;
        flex-direction: row;
    }
    .default-row-container{
        flex:1.7;
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