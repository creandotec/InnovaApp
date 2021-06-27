<template>
    <view class="container">
        <StatusBar/>
        <SafeAreaView style="flex:1">
        <GestureRecognizer style="flex:1;flex-direction:column" :on-swipe="(direction, state) => swipeHandler(direction, state)"
            :config="{velocityThreshold:1.0, directionalOffsetThreshold:50}">
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
                        <red-switch name="ciling_red" v-on:update-status="(event) => eventoRecibido(event) "/>

                        <Innova-Slider-Red name="ciling_red" menu="lighting"/>
                    </view>
                    
                    <view class="default-row-container">
                        <green-switch name="ciling_green" v-on:update-status="(event) => eventoRecibido(event) "/>
                        <Innova-Slider-Green name="ciling_green" menu="lighting"/>
                        
                    </view>
                    
                    <view class="default-row-container">
                        <blue-switch name="ciling_blue" v-on:update-status="(event) => eventoRecibido(event) "/>
                        <Innova-Slider-Blue name="ciling_blue" menu="lighting"/>
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
import axios from 'axios';
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
        },
        eventoRecibido: function(event){
            let $vm = this;
            console.log(event.name);
            console.log(event);
            if(event.name == "lighting"){
                $vm.masterStatus = event.value;
                this.updateMasterStatus(event.name, event.value);
            }
            else{
                if(event.name == "gutter_red"){
                    $vm.statusSwitch1 = event.value;
                }
                else if(event.name == "gutter_green"){
                    $vm.statusSwitch2 = event.value;
                }
                else if(event.name == "gutter_blue"){
                    $vm.statusSwitch3 = event.value;
                }
                this.updateSwitchStatus(event.name, event.value);
            }
        },
        updateSwitchStatus: function(switchName, newStatus){
            console.log("Enviando a servidor dato se switch");
            axios.post('http://192.168.0.4:3000/lighting/update', {
                name: switchName,
                status: newStatus
            })
            .then(res => {
                if(getWSStatus()){
                    let json_message = JSON.stringify({'action':'update', 'screen':'lighting', 'name': 'switch'});
                    wsClient.send(json_message);
                }
            })
            .catch(err => {
                console.log(err);
            })
        },
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