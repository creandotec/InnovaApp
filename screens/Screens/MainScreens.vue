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
                    <Screen-Title screenTitle="SCREENS"/>
                </view>
                
                <view style="flex:8; flex-direction:column">
                    <view class="main-switch-container">
                        <view class="master-container">
                            <screen-switch-alt master="'true" :status="masterStatus"
                                v-on:update-status="(event) => eventoRecibido(event)" />
                            <view class="master-text-container">
                                <text class="innova-master-text">SCREENS</text>
                            </view>
                            
                        </view>
                    </view>

                    <view class="default-row-container">
                        <screen-switch  name="1" :status="newStatus1" 
                            v-on:update-status="(event) => eventoRecibido(event) "/>
                        <screen-switch  name="2" :status="newStatus2" 
                            v-on:update-status="(event) => eventoRecibido(event) "/>
                        <screen-switch  name="3" :status="newStatus3" 
                            v-on:update-status="(event) => eventoRecibido(event) "/>
                        <screen-switch  name="4" :status="newStatus4" 
                            v-on:update-status="(event) => eventoRecibido(event) "/>
                    </view>
                    
                    <view class="default-row-container">
                        <screen-switch  name="5" :status="newStatus5" 
                            v-on:update-status="(event) => eventoRecibido(event) "/>
                        <screen-switch  name="6" :status="newStatus6" 
                            v-on:update-status="(event) => eventoRecibido(event) "/>
                        <screen-switch  name="7" :status="newStatus7" 
                            v-on:update-status="(event) => eventoRecibido(event) "/>
                        <screen-switch  name="8" :status="newStatus8" 
                            v-on:update-status="(event) => eventoRecibido(event) "/>
                    </view>
                    
                    <view class="default-row-container">
                        <screen-switch size="md"  name="9" :status="newStatus9" 
                            v-on:update-status="(event) => eventoRecibido(event) "/>
                        <Innova-Slider menu="screens" name="main"/>
                    </view>
                    
                    <view class="double-row-container">
                        <view class="menu-button-container">
                            <view style="flex:0.20;">
                                <text class="menu-title-center">SUN TRACER</text>
                            </view>
                            <SunSwitch :master="'true'"  name="10" :status="newStatus10" 
                                v-on:update-status="(event) => eventoRecibido(event) "/>
                        </view>
                        <view class="menu-button-container" >
                            <view style="flex:0.20;">
                                <text class="menu-title-center">WEATHER</text>
                            </view>
                            <WeatherSwitch size="md"  name="11" :status="newStatus11" 
                            v-on:update-status="(event) => eventoRecibido(event) "/>
                        </view>
                        
                    </view>
                </view>
            </view>
        </ImageBackground>
    </GestureRecognizer>
    </SafeAreaView>
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
import axios from 'axios';

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
            statusSwitch1: 0,
            statusSwitch2: 0,
            statusSwitch3: 0,
            statusSwitch4: 0,
            statusSwitch5: 0,
            statusSwitch6: 0,
            statusSwitch7: 0,
            statusSwitch8: 0,
            statusSwitch9: 0,
            statusSwitch10: 0,
            statusSwitch11: 0,
            masterStatus: 0
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
        },
        eventoRecibido: function(event){
            let $vm = this;
            console.log(event.name);
            if(event.name == "screens"){
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
                else if(event.name == "5"){
                    $vm.statusSwitch5 = event.value;
                }
                else if(event.name == "6"){
                    $vm.statusSwitch6 = event.value;
                }
                else if(event.name == "7"){
                    $vm.statusSwitch7 = event.value;
                }
                else if(event.name == "8"){
                    $vm.statusSwitch8 = event.value;
                }
                else if(event.name == "9"){
                    $vm.statusSwitch9 = event.value;
                }
                else if(event.name == "10"){
                    $vm.statusSwitch10 = event.value;
                }
                else if(event.name == "11"){
                    $vm.statusSwitch11 = event.value;
                }
                
                this.updateSwitchStatus(event.name, event.value);
            }
        },
        querySwitchStatus: function(){
            let $vm = this;
            console.log("Preguntando por screens");
            axios.get('http://192.168.0.4:3000/screens')
                .then(res => {
                    $vm.statusSwitch1 = res.data[0].status;
                    $vm.statusSwitch2 = res.data[1].status;
                    $vm.statusSwitch3 = res.data[2].status;
                    $vm.statusSwitch4 = res.data[3].status;
                    $vm.statusSwitch5 = res.data[4].status;
                    $vm.statusSwitch6 = res.data[5].status;
                    $vm.statusSwitch7 = res.data[6].status;
                    $vm.statusSwitch8 = res.data[7].status;
                    $vm.statusSwitch9 = res.data[8].status;
                    $vm.statusSwitch10 = res.data[9].status;
                    $vm.statusSwitch11 = res.data[10].status;
                    $vm.masterStatus = res.data[11].status;
                    return;
                })
                .catch(err => {
                    console.log(err);
                    return;
                })
        },
        updateSwitchStatus: function(switchName, newStatus){
            axios.post('http://192.168.0.4:3000/screens/update', {
                name: switchName,
                status: newStatus
            })
            .then(res => {
                console.log("Se actualizó screens");
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
            console.log("Presioné el switch");
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
        },
        newStatus5: function(){
            let $vm = this;
            return $vm.statusSwitch5;
        },
        newStatus6: function(){
            let $vm = this;
            return $vm.statusSwitch6;
        },
        newStatus7: function(){
            let $vm = this;
            return $vm.statusSwitch7;
        },
        newStatus8: function(){
            let $vm = this;
            return $vm.statusSwitch8;
        },
        newStatus9: function(){
            let $vm = this;
            return $vm.statusSwitch9;
        },
        newStatus10: function(){
            let $vm = this;
            return $vm.statusSwitch10;
        },
        newStatus11: function(){
            let $vm = this;
            return $vm.statusSwitch11;
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