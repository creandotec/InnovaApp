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
                    <Screen-Title screenTitle="LIGHTHING"/>
                </view>

                <view style="flex:8; flex-direction:column">
                    <view class="main-switch-container">
                        <view class="master-container">
                            <light-switch master="'true" :status="masterStatus"
                                v-on:update-status="(event) => eventoRecibido(event)"/>

                            <view class="master-text-container">
                                <text class="innova-master-text">LIGHTHING</text>
                            </view>
                            
                        </view>
                    </view>

                    <view class="default-row-container">
                        <gutter-switch name="gutter" :status="newStatus1" 
                            v-on:update-status="(event) => eventoRecibido(event) "/>

                        <Innova-Slider name="gutter" menu="lighting" />

                        <view class="icon-container">
                            <Pressable :on-press='() => changeMenu(0)'>
                                <image class="icon-sm" resizeMode="contain"
                                :source="require('./../../assets/Innova/Lighting/paletteoff.png')"/>
                            </Pressable>
                        </view>
                    </view>
                    
                    <view class="default-row-container">
                        <louver-light-switch name="louver" :status="newStatus2" 
                            v-on:update-status="(event) => eventoRecibido(event) "/>
                        <Innova-Slider name="louver" menu="lighting"/>
                        <view class="icon-container">
                            <Pressable :on-press='() => changeMenu(1)'>
                                <image class="icon-sm" resizeMode="contain"
                                :source="require('./../../assets/Innova/Lighting/paletteoff.png')"/>
                            </Pressable>
                        </view>
                    </view>
                    
                    <view class="default-row-container">
                        <ceilling-switch name="ciling" :status="newStatus3" 
                            v-on:update-status="(event) => eventoRecibido(event) "/>

                        <Innova-Slider name="ciling" menu="lighting"/>
                        <view class="icon-container">
                            <Pressable :on-press='() => changeMenu(2)'>
                                <image class="icon-sm" resizeMode="contain"
                                :source="require('./../../assets/Innova/Lighting/paletteoff.png')"/>
                            </Pressable>
                        </view>
                    </view>
                    
                    <view class="default-row-container">
                        <sconce-switch size="md" name="sconce" :status="newStatus4" 
                            v-on:update-status="(event) => eventoRecibido(event) "/>

                        <Innova-Slider name="sconce" menu="lighting"/>

                        <view style="width:16%"></view>
                    </view>
                    
                    <view class="default-row-container">
                        <spare-switch name="spare" :status="newStatus5" 
                            v-on:update-status="(event) => eventoRecibido(event) "/>

                        <Innova-Slider name="spare" menu="lighting"/>
                        
                        <view style="width:16%"></view>
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
import CeillingSwitch from '../../components/Switches/CeillingSwitch.vue';
import GutterSwitch from '../../components/Switches/GutterSwitch.vue';
import LightSwitch from '../../components/Switches/LightSwitch.vue';
import LouverLightSwitch from '../../components/Switches/LouverLightSwitch.vue';
import SconceSwitch from '../../components/Switches/SconceSwitch.vue';
import SpareSwitch from '../../components/Switches/SpareSwitch.vue';
import InnovaHeader from "./../../components/InnovaHeader";
import ScreenTitle from "./../../components/ScreenTitle";

import GestureRecognizer, {swipeDirections} from 'react-native-swipe-gestures';

import axios from 'axios';
import {getWSStatus, wsClient} from '../../components/Websocket';

export default {
    components:{
        "Innova-Slider":Slider,
        InnovaHeader,  GestureRecognizer, swipeDirections,
        ScreenTitle,
        LightSwitch,
        SconceSwitch,
        GutterSwitch,
        LouverLightSwitch,
        CeillingSwitch,
        SpareSwitch,
        wsClient, getWSStatus
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
            masterStatus: 0
        }
    },
    methods:{
        swipeHandler: function(direction, state){
            console.log(direction);
            //console.log(state);
            if(direction == "SWIPE_LEFT"){
                this.navigation.navigate("Climate");
            }
            else if(direction == "SWIPE_RIGHT"){
                this.navigation.navigate("Louvers");
            }
            else if(direction == "SWIPE_UP"){
                this.navigation.navigate("Home");
            }
        },
        changeMenu: function(menu){
            if(menu == 0){
                this.navigation.navigate("RGB1");
            }
            else if(menu == 1){
                this.navigation.navigate("RGB2");
            }
            else if(menu == 2){
                this.navigation.navigate("RGB3");
            }
        },
        eventoRecibido: function(event){
            let $vm = this;
            console.log(event.name);
            if(event.name == "lighting"){
                $vm.masterStatus = event.value;
                this.updateMasterStatus(event.name, event.value);
            }
            else{
                if(event.name == "gutter"){
                    $vm.statusSwitch1 = event.value;
                }
                else if(event.name == "louver"){
                    $vm.statusSwitch2 = event.value;
                }
                else if(event.name == "ciling"){
                    $vm.statusSwitch3 = event.value;
                }
                else if(event.name == "sconce"){
                    $vm.statusSwitch4 = event.value;
                }
                else if(event.name == "spare"){
                    $vm.statusSwitch5 = event.value;
                }
                else if(event.name == "6"){
                    $vm.statusSwitch6 = event.value;
                }
                
                this.updateSwitchStatus(event.name, event.value);
            }
        },
        querySwitchStatus: function(){
            let $vm = this;
            console.log("Preguntando por lighting");
            axios.get('http://192.168.0.4:3000/lighting')
                .then(res => {
                    $vm.statusSwitch1 = res.data[0].status;
                    $vm.statusSwitch2 = res.data[1].status;
                    $vm.statusSwitch3 = res.data[2].status;
                    $vm.statusSwitch4 = res.data[3].status;
                    $vm.statusSwitch5 = res.data[4].status;
                    // $vm.statusLouver7 = res.data[6].status;
                    // $vm.statusLouver8 = res.data[7].status;
                    // $vm.statusLouver9 = res.data[8].status;
                    // $vm.statusLouver10 = res.data[9].status;
                    // $vm.statusLouver11 = res.data[10].status;
                    $vm.masterStatus = res.data[14].status;
                    return;
                })
                .catch(err => {
                    // console.log(err);
                    return;
                })
        },
        updateSwitchStatus: function(switchName, newStatus){
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
        updateMasterStatus: function(masterName, newStatus){
            axios.post('http://192.168.0.4:3000/masters/update', {
                masterSwitch: masterName,
                status: newStatus
            })
            .then(res => {
                console.log("Se actualizó el switch maestro");
                if(getWSStatus()){
                    let json_message = JSON.stringify({'action':'update', 'screen':'lighting', 'name':'switch'});
                    wsClient.send(json_message);
                }
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
        }
    },
    mounted: function(state){
        let $vm = this;
        $vm.querySwitchStatus();

        if(getWSStatus()){
            wsClient.onmessage = function(event){
                console.log(event.data);
                let message = JSON.parse(event.data);
                if(message.action == 'update' && message.screen == 'lighting' && message.name == 'switch'){
                    // console.log('Actualizar iluminación');
                    $vm.querySwitchStatus();
                }
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
        flex:3.5;
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