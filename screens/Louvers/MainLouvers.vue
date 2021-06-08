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
                    <Screen-Title screenTitle="ROOF LOUVERS"/>
                </view>

                <view style="flex:8; flex-direction:column">
                    <view class="main-switch-container">
                        <view class="master-container">
                            <!-- <view class="master-icon-container">
                                <image class="master-icon" resizeMode="contain"
                                    :source="require('./../../assets/Innova/Louvers/louversoff.png')"/>
                            </view> -->
                            <louver-switch master="'true'"  :status="masterStatus"
                                v-on:update-status="(event) => eventoRecibido(event) "/>
                            <view class="master-text-container">
                                <text class="innova-master-text">LOUVERS</text>
                            </view>
                            
                        </view>
                    </view>

                    <view class="default-row-container">
                        <louver-switch louverNumber="1" :status="newStatus1"
                            v-on:update-status="(event) => eventoRecibido(event) "/>

                        <louver-switch louverNumber="2" :status="newStatus2"
                            v-on:update-status="(event) => eventoRecibido(event) "/>

                        <louver-switch louverNumber="3" :status="newStatus3"
                            v-on:update-status="(event) => eventoRecibido(event) "/>

                        <louver-switch louverNumber="4" :status="newStatus4"
                            v-on:update-status="(event) => eventoRecibido(event) "/>
                    </view>
                    
                    <view class="default-row-container">
                        <louver-switch louverNumber="5" :status="newStatus5"
                            v-on:update-status="(event) => eventoRecibido(event) "/>

                        <louver-switch louverNumber="6" :status="newStatus6"
                            v-on:update-status="(event) => eventoRecibido(event) "/>

                        <louver-switch louverNumber="7" :status="newStatus7"
                            v-on:update-status="(event) => eventoRecibido(event) "/>

                        <louver-switch louverNumber="8" :status="newStatus8"
                            v-on:update-status="(event) => eventoRecibido(event) "/>
                    </view>
                    
                    <view class="default-row-container">
                        <louver-switch size="lg" louverNumber="9" :status="newStatus9"
                            v-on:update-status="(event) => eventoRecibido(event) "/>

                        <Innova-Slider name="main" menu="louvers" :curPosition="newSliderPosition1" v-on:update-slider="(event) => sliderEvent(event)" 
                            v-on:guardar-slider="(event) => guardarSlider(event)" />
                    </view>
                    
                    <view class="double-row-container">
                        <view class="menu-button-container">
                            <view style="flex:0.20;">
                                <text class="menu-title-center">SUN TRACER</text>
                            </view>
                            <sun-switch :master="'true'" name="10" :status="newStatus10"
                                v-on:update-status="(event) => eventoRecibido(event) "/>
                        </view>
                        <view class="menu-button-container">
                            <view style="flex:0.20;">
                                <text class="menu-title-center">WEATHER</text>
                            </view>
                            <weather-switch size="md" name="11" :status="newStatus11"
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
import LouverSwitch from './../../components/Switches/LouverSwitch.vue';
import WeatherSwitch from './../../components/Switches/WeatherSwitch.vue';
import SunSwitch from './../../components/Switches/SunSwitch.vue';

import GestureRecognizer, {swipeDirections} from 'react-native-swipe-gestures';

import axios from 'axios';
export default {
    components:{
        "Innova-Slider":Slider,
        InnovaHeader, GestureRecognizer, swipeDirections,
        ScreenTitle,
        'louver-switch':LouverSwitch,
        WeatherSwitch,
        SunSwitch
    },
    props:{
        navigation:{
            type: Object
        }
    },
    data: function(){
        return{
            statusLouver1: 0,
            statusLouver2: 0,
            statusLouver3: 0,
            statusLouver4: 0,
            statusLouver5: 0,
            statusLouver6: 0,
            statusLouver7: 0,
            statusLouver8: 0,
            statusLouver9: 0,
            statusLouver10: 0,
            statusLouver11: 0,
            masterStatus: 0,
            sliderPosition1: 0
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
                this.navigation.navigate("Zones");
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
            if(event.name == "louvers"){
                $vm.masterStatus = event.value;
                this.updateMasterStatus(event.name, event.value);
            }
            else{
                if(event.name == "1"){
                    $vm.statusLouver1 = event.value;
                }
                else if(event.name == "2"){
                    $vm.statusLouver2 = event.value;
                }
                else if(event.name == "3"){
                    $vm.statusLouver3 = event.value;
                }
                else if(event.name == "4"){
                    $vm.statusLouver4 = event.value;
                }
                else if(event.name == "5"){
                    $vm.statusLouver5 = event.value;
                }
                else if(event.name == "6"){
                    $vm.statusLouver6 = event.value;
                }
                else if(event.name == "7"){
                    $vm.statusLouver7 = event.value;
                }
                else if(event.name == "8"){
                    $vm.statusLouver8 = event.value;
                }
                else if(event.name == "9"){
                    $vm.statusLouver9 = event.value;
                }
                else if(event.name == "10"){
                    $vm.statusLouver10 = event.value;
                }
                else if(event.name == "11"){
                    $vm.statusLouver11 = event.value;
                }
                this.updateLouverStatus(event.name, event.value);
            }
        },
        queryLouversStatus: function(){
            let $vm = this;
            console.log("Preguntando por los louvers");
            axios.get('http://192.168.0.4:3000/louvers')
                .then(res => {
                    $vm.statusLouver1 = res.data[0].status;
                    $vm.statusLouver2 = res.data[1].status;
                    $vm.statusLouver3 = res.data[2].status;
                    $vm.statusLouver4 = res.data[3].status;
                    $vm.statusLouver5 = res.data[4].status;
                    $vm.statusLouver6 = res.data[5].status;
                    $vm.statusLouver7 = res.data[6].status;
                    $vm.statusLouver8 = res.data[7].status;
                    $vm.statusLouver9 = res.data[8].status;
                    $vm.statusLouver10 = res.data[9].status;
                    $vm.statusLouver11 = res.data[10].status;
                    $vm.masterStatus = res.data[11].status;
                    return;
                })
                .catch(err => {
                    console.log(err);
                    return;
                })
        },
        updateLouverStatus: function(louver, newStatus){
            axios.post('http://192.168.0.4:3000/louvers/update', {
                louver: louver,
                status: newStatus
            })
            .then(res => {
                console.log("Se actualizó el louver");
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
        },
        sliderEvent: function(event){
            let $vm = this;
            if(event.name == "main"){
                $vm.sliderPosition1 = event.position;
                //$vm.updateSlider(event.name, event.position, "louvers");
            }
        },
        guardarSlider: function(event){
            if(event.name == "main")
            {
                this.updateSlider(event.name, this.sliderPosition1, "louvers");
            }
            
        },
        updateSlider: function(slider, newPosition, menu){
            axios.post('http://192.168.0.4:3000/sliders/update', {
                name: slider,
                position: newPosition,
                screen: menu
            })
            .then(res =>{
                console.log("Se actualizó el slider de manera correcta")
            })
            .catch( err=> {
                console.log(err);
            })
        },
        getSlidersValue: function(){
            let $vm = this;
            axios.get('http://192.168.0.4:3000/sliders', {
                params:{
                    menu:"louvers"
                }
            })
            .then( res=>{
                $vm.sliderPosition1 = res.data[0].value;
                console.log($vm.sliderPosition1)
                return;
            })
            .catch( err=> {
                console.log(err);
                return;
            })
        }
    },
    computed: {
        newSliderPosition1: function(){
            let $vm = this;
            console.log("Aquí")
            return $vm.sliderPosition1;
        },
        newMasterStatus: function(){
            let $vm = this;
            return $vm.masterStatus;
        },
        newStatus1: function(){
            let $vm = this;
            console.log(this.statusLouver1);
            return this.statusLouver1;
        },
        newStatus2: function(){
            let $vm = this;
            return $vm.statusLouver2;
        },
        newStatus3: function(){
            let $vm = this;
            return $vm.statusLouver3;
        },
        newStatus4: function(){
            let $vm = this;
            return $vm.statusLouver4;
        },
        newStatus5: function(){
            let $vm = this;
            return $vm.statusLouver5;
        },
        newStatus6: function(){
            let $vm = this;
            return $vm.statusLouver6;
        },
        newStatus7: function(){
            let $vm = this;
            return $vm.statusLouver7;
        },
        newStatus8: function(){
            let $vm = this;
            return $vm.statusLouver8;
        },
        newStatus9: function(){
            let $vm = this;
            return $vm.statusLouver9;
        },
        newStatus10: function(){
            let $vm = this;
            return $vm.statusLouver10;
        },
        newStatus11: function(){
            let $vm = this;
            return $vm.statusLouver11;
        }
    },
    mounted: function(state){
        let $vm = this;
        // console.log("Montando Louvers");
        this.queryLouversStatus();
        this.getSlidersValue();
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