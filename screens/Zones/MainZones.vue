<template>
<view class="container">
    <StatusBar/>
    <GestureRecognizer style="flex:1;flex-direction:column" :on-swipe="(direction, state) => swipeHandler(direction, state)">
        <ImageBackground :source="require('./../../assets/Innova/BG/fondomain.png')"
            class="backgroundImage" resizeMode="stretch">
            <view class="innova-layout">

                <view style="flex:1.5; flex-direction:column">
                    <Innova-Header/>                
                    <Screen-Title screenTitle="ZONES SELECTION"/>
                </view>

                <view style="flex:8; flex-direction:column">
                    <view class="main-switch-container">
                        <view class="master-container">
                            <window-switch master="true" :status="newMasterStatus"
                                v-on:update-status="(event) => eventoRecibido(event)"/>

                            <view class="master-text-container">
                                <text class="innova-master-text">ZONES</text>
                            </view>
                            
                        </view>
                    </view>

                    <view class="double-row-container">
                        <view style="flex:3; flex-direction:column; justify-content:center; align-items:flex-end; margin-right:2%">
                            <text class="innova-master-text">TIMER</text>
                        </view>

                        <view style="flex:1; flex-direction:column; justify-content:center; align-items:center; padding-right:5%;">
                            <Pressable :on-press="() => enterTimerConfig()">
                                <image style="flex:1;" resizeMode="contain"
                                    :source="require('./../../assets/Innova/Zones/clockofficon.png')"/>
                            </Pressable>
                        </view>
                        
                    </view>

                    <view class="zone-control-container">
                        <view style="flex:1; flex-direction:row;">
                            <zone-switch-1 :status="newStatus1" 
                                v-on:update-status="(event) => eventoRecibido(event)" />
                            <zone-switch-2 :status="newStatus2" 
                                v-on:update-status="(event) => eventoRecibido(event)" />
                            <zone-switch-3 :status="newStatus3" 
                                v-on:update-status="(event) => eventoRecibido(event)" />
                        </view>

                        <view style="flex:1; flex-direction:row;">
                            <zone-switch-4 :status="newStatus4" 
                                v-on:update-status="(event) => eventoRecibido(event)" />
                            <zone-switch-5 :status="newStatus5" 
                                v-on:update-status="(event) => eventoRecibido(event)" />
                            <zone-switch-6 :status="newStatus6" 
                                v-on:update-status="(event) => eventoRecibido(event)"/>
                        </view>

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

import axios from 'axios';

import GestureRecognizer, {swipeDirections} from 'react-native-swipe-gestures';

import Slider from './../../components/Slider';
import InnovaHeader from '../../components/InnovaHeader.vue';
import ScreenTitle from '../../components/ScreenTitle';

import ClimateSwitch from '../../components/Switches/ClimateSwitch.vue';
import CilingfanSwitch from '../../components/Switches/CilingfanSwitch.vue';
import MistSwitch from '../../components/Switches/MistSwitch.vue';
import SpareAltSwitch from '../../components/Switches/SpareAltSwitch.vue';
import AcSwitch from '../../components/Switches/AcSwitch.vue';

import WindowSwitch from '../../components/Switches/WindowSwitch.vue';
import ZoneSwitch1 from '../../components/Switches/Zones/ZoneSwitch1.vue';
import ZoneSwitch2 from '../../components/Switches/Zones/ZoneSwitch2.vue';
import ZoneSwitch3 from '../../components/Switches/Zones/ZoneSwitch3.vue';
import ZoneSwitch4 from '../../components/Switches/Zones/ZoneSwitch4.vue';
import ZoneSwitch5 from '../../components/Switches/Zones/ZoneSwitch5.vue';
import ZoneSwitch6 from '../../components/Switches/Zones/ZoneSwitch6.vue';


export default {
    components:{
        Animated, PanGestureHandler, 
        PanResponder, GestureRecognizer, swipeDirections,
        "Innova-Slider":Slider,
        InnovaHeader,
        ScreenTitle,
        ClimateSwitch,
        CilingfanSwitch,
        MistSwitch,
        SpareAltSwitch,
        AcSwitch,
        WindowSwitch,
        ZoneSwitch1,
        ZoneSwitch2,
        ZoneSwitch3,
        ZoneSwitch4,
        ZoneSwitch5,
        ZoneSwitch6,
    },
    
    props:{
        navigation:{
            type: Object
        }
    },

    data: function(){
        return{
            temperature: 0.0,
            _data: [
                {'zone_name':"0", 'status':0}
            ],
            statusZona1: 0,
            statusZona2: 0,
            statusZona3: 0,
            statusZona4: 0,
            statusZona5: 0,
            statusZona6: 0,
            masterStatus: 0
        }
    },

    methods:{
        eventoRecibido: function(event){
            let $vm = this;
            if(event.zone == "zones"){
                $vm.masterStatus = event.value;
                this.updateMasterStatus(event.zone, event.value);
            }
            else{
                if(event.zone == "1"){
                    $vm.statusZona1 = event.value;
                }
                else if(event.zone == "2"){
                    $vm.statusZona2 = event.value;
                }
                else if(event.zone == "3"){
                    $vm.statusZona3 = event.value;
                }
                else if(event.zone == "4"){
                    $vm.statusZona4 = event.value;
                }
                else if(event.zone == "5"){
                    $vm.statusZona5 = event.value;
                }
                else if(event.zone == "6"){
                    $vm.statusZona6 = event.value;
                }
                this.updateZoneStatus(event.zone, event.value);
            }
            

        },
        enterTimerConfig: function(){
            this.navigation.navigate("Timer");
        },
        swipeHandler: function(direction, state){
            console.log(direction);
            //console.log(state);
            if(direction == "SWIPE_LEFT"){
                this.navigation.navigate("Louvers");
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
        getZonesStatus: function(zone){
            let $vm = this;
            console.log("Obteniendo status de la zona 1: " + $vm.statusZona1);
            return $vm.statusZona1;
        },
        queryZonesStatus: function(){
            let $vm = this;
            axios.get('http://192.168.0.4:3000/zonas')
                .then(res => {
                    
                    $vm.statusZona1 = res.data[0].status;
                    $vm.statusZona2 = res.data[1].status;
                    $vm.statusZona3 = res.data[2].status;
                    $vm.statusZona4 = res.data[3].status;
                    $vm.statusZona5 = res.data[4].status;
                    $vm.statusZona6 = res.data[5].status;
                    $vm.masterStatus = res.data[6].status;
                    return;
                })
                .catch(err => {
                    console.log(err);
                    return;
                })
        },
        updateZoneStatus: function(zona, newStatus){
            axios.post('http://192.168.0.4:3000/zonas/update', {
                zone: zona,
                status: newStatus
            })
            .then(res => {
                console.log("Se actualizó la zona");
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
        newStatus1: function(){
            let $vm = this;
            return $vm.statusZona1;
        },
        newStatus2: function(){
            let $vm = this;
            return $vm.statusZona2;
        },
        newStatus3: function(){
            let $vm = this;
            return $vm.statusZona3;
        },
        newStatus4: function(){
            let $vm = this;
            return $vm.statusZona4;
        },
        newStatus5: function(){
            let $vm = this;
            return $vm.statusZona5;
        },
        newStatus6: function(){
            let $vm = this;
            return $vm.statusZona6;
        },
        newMasterStatus: function(){
            let $vm = this;
            return $vm.masterStatus;
        }
    },

    mounted: function(state){
        let $vm = this;
        $vm.queryZonesStatus();
    }
}
</script>

<style>
    .zone-control-container{
        flex: 10;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding-right: 2%;
        padding-left: 2%;
        padding-top: 5%;
        padding-bottom: 10%;
    }
    .menu-button-container-border{
        flex:1;
        flex-direction: column;
        border-color:#dcba28;
        border-width: 2;
    }
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
        flex:1;
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
        flex:4;
        flex-direction: row;
    }
    .default-row-container{
        flex:3;
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