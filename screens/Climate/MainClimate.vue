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
                        <climate-switch master="true" :status="masterStatus" 
                            v-on:update-status="(event) => eventoRecibido(event)"/>

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
                                    <ac-switch master="true" name="1" :status="newStatus1" 
                                        v-on:update-status="(event) => eventoRecibido(event) "/>
                                </view>
                            </view>
                        </view>
                        
                    </view>
                    
                </view>

                <view class="default-row-container">
                    <cilingfan-switch name="2" :status="newStatus2" 
                        v-on:update-status="(event) => eventoRecibido(event) "/>
                    <Innova-Slider name="ciling_fan" menu="climate"/>
                </view>
                
                <view class="default-row-container">
                    <mist-switch name="3" :status="newStatus3" 
                            v-on:update-status="(event) => eventoRecibido(event) "/>
                    <Innova-Slider name="mist" menu="climate"/>
                    
                </view>
                
                <view class="default-row-container">
                    <spare-alt-switch name="4" :status="newStatus4" 
                            v-on:update-status="(event) => eventoRecibido(event) "/>
                    <Innova-Slider name="spare" menu="climate"/>
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

import axios from 'axios';

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
            statusSwitch1: 0,
            statusSwitch2: 0,
            statusSwitch3: 0,
            statusSwitch4: 0,
            masterStatus: 0
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
        },
        eventoRecibido: function(event){
            let $vm = this;
            console.log(event.name);
            if(event.name == "climate"){
                console.log("Switch maestro");
                $vm.masterStatus = event.value;
                this.updateMasterStatus(event.name, event.value);
            }
            else{
                if(event.name == "1"){
                    $vm.statusSwitch1 = event.value;
                }
                else if(event.name == "2"){
                    $vm.statusSwitch2 = event.value;
                }
                else if(event.name == "3"){
                    $vm.statusSwitch3 = event.value;
                }
                else if(event.name == "4"){
                    $vm.statusSwitch4 = event.value;
                }
                
                this.updateSwitchStatus(event.name, event.value);
            }
        },
        querySwitchStatus: function(){
            let $vm = this;
            // console.log("Preguntando por lighting");
            axios.get('http://192.168.0.4:3000/climate')
                .then(res => {
                    $vm.statusSwitch1 = res.data[0].status;
                    $vm.statusSwitch2 = res.data[1].status;
                    $vm.statusSwitch3 = res.data[2].status;
                    $vm.statusSwitch4 = res.data[3].status;
                    // $vm.statusSwitch5 = res.data[4].status;
                    // $vm.statusLouver7 = res.data[6].status;
                    // $vm.statusLouver8 = res.data[7].status;
                    // $vm.statusLouver9 = res.data[8].status;
                    // $vm.statusLouver10 = res.data[9].status;
                    // $vm.statusLouver11 = res.data[10].status;
                    $vm.masterStatus = res.data[5].status;
                    console.log(res.data[5].status);
                    return;
                })
                .catch(err => {
                    console.log(err);
                    return;
                })
        },
        updateSwitchStatus: function(switchName, newStatus){
            axios.post('http://192.168.0.4:3000/climate/update', {
                name: switchName,
                status: newStatus
            })
            .then(res => {
                console.log("Se actualizó climate");
            })
            .catch(err => {
                console.log(err);
            })
        },
        updateMasterStatus: function(masterName, newStatus){
            axios.post('http://192.168.0.4:3000/masters/update', {
                masterSwitch: masterName,
                status: newStatus
            })
            .then(res => {
                console.log("Se actualizó el switch maestro");
            })
            .catch(err => {
                console.log(err);
            })
        }
    },
    computed: {
        newMasterStatus: function(){
            let $vm = this;
            return $vm.masterStatus;
        },
        newStatus1: function(){
            let $vm = this;
            return $vm.statusSwitch1;
        },
        newStatus2: function(){
            let $vm = this;
            return $vm.statusSwitch2;
        },
        newStatus3: function(){
            let $vm = this;
            return $vm.statusSwitch3;
        },
        newStatus4: function(){
            let $vm = this;
            return $vm.statusSwitch4;
        }
    },
    mounted: function(state){
        let $vm = this;
        $vm.querySwitchStatus();
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