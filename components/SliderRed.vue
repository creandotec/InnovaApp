<template>
    <view class="slider-container" :on-layout="(event)=>getSlideWidth(event)">
        <ImageBackground :source="require('./../assets/Innova/Lighting/barraroja.png')" 
            class="slider-background" resizeMode="stretch">
            <PanGestureHandler
                :on-handler-state-change="(evt) => adjustThumb(evt)"
                :on-gesture-event="(evt) => moveCursor(evt)">
                <thumb-cursor :position="barraValue" resizeMode="stretch"
                    :source="require('./../assets/Innova/Multi/cursor2.png')"/>
            </PanGestureHandler>
        </ImageBackground>
    </view>
</template>

<script>
import { Animated, PanResponder } from 'react-native';
import  {PanGestureHandler} from 'react-native-gesture-handler';
import {ThumbCursor} from './thumb2.js';

import axios from 'axios';
import {getWSStatus, wsClient} from './Websocket';

export default {
    components:{
        Animated, PanGestureHandler, 
        "thumb-cursor":ThumbCursor,
        PanResponder,
        wsClient, getWSStatus
    },
    props:{
        //step: {type: Number, default: 0}
        curPosition: {
            Type: Number,
            default: 0
        },
        name: {
            Type: String
        },
        menu: {
            Type: String
        }
    },
    data: function(){
        return{
            barraValue: 0,
            deltaX: 0,
            slideWidth: 0,
            slideInit: 0,
            step: 0,
            stepInflexion: 0,
            regAddress: 0,

        }
    },
    methods:{
        adjustThumb: function(evt){
            let $vm = this;
            let evento = evt.nativeEvent;

            if (evento.state == 5){
                var restante = $vm.barraValue % $vm.step;
                var tempPos = $vm.barraValue - restante;
                tempPos = tempPos / $vm.step;
                $vm.barraValue = tempPos * $vm.step;

                $vm.updateSlider();
            }
        },
        getSlideWidth: function(event){
            let $vm = this;
            //console.log(event.nativeEvent.layout);
            $vm.slideWidth = event.nativeEvent.layout.width;
            $vm.slideInit = event.nativeEvent.layout.x;
            $vm.step = 108 / 6;
            $vm.stepInflexion = $vm.step / 2;
            //console.log("Ancho de la barra ", $vm.slideWidth);
            //console.log("Posicion de la barra ", $vm.slideInit);
        },
        mapCursor: function(position){
            let $vm = this;
            let cursorX = (position*100/$vm.slideWidth);
            let roundedCursorX = 0;

            roundedCursorX = Math.round(cursorX);

            if(cursorX > 1.5){
                return 1.5;
            }
            else{
                return cursorX;
            }
        },
        moveCursor: function(evt){
            let $vm = this;
            let evento = evt.nativeEvent;
            
            if($vm.barraValue <= 95 && $vm.barraValue >=0){

                $vm.barraValue += this.mapCursor(evento.x);
                if($vm.barraValue > 95){
                    $vm.barraValue = 95;
                }
                else if($vm.barraValue < 0){
                    $vm.barraValue = 0;
                }
                //console.log("La posición del indicador es: ", $vm.barraValue);
            }
            else{
                if($vm.barraValue >= 95){
                    $vm.barraValue = 95;
                }
                else if($vm.barraValue <= 0){
                    $vm.barraValue = 0;
                }
            }
            
        },
        getSlidersValue: function(){
            let $vm = this;
            axios.get('http://192.168.0.4:3000/sliders', {
                params:{
                    menu:$vm.menu,
                    slider: $vm.name
                }
            })
            .then( res=>{
                $vm.barraValue = res.data[0].value;
                $vm.regAddress = res.data[0].register_address;
                return;
            })
            .catch( err=> {
                console.log(err);
                return;
            })
        },
        updateSlider: function(){
            let $vm = this;
            axios.post('http://192.168.0.4:3000/sliders/update', {
                name: $vm.name,
                position: $vm.barraValue,
                screen: $vm.menu,
                registerAddress: $vm.regAddress
            })
            .then(res =>{
                if(getWSStatus()){
                    let json_message = JSON.stringify({'action':'update', 'screen':$vm.menu, 'name':$vm.name});
                    wsClient.send(json_message);
                }
            })
            .catch( err=> {
                console.log(err);
            })
        }
    },
    computed: {
        getPosition: function(){
            var data = {};
            let $vm = this;
            data.position = $vm.barraValue;
            data.name = $vm.name;
            this.$emit('update-slider', data);
            return $vm.curPosition;
        }
    },
    mounted(){
        let $vm = this;
        $vm.getSlidersValue();

        if(getWSStatus()){
            wsClient.onmessage = function(event){
                console.log(event.data);
                let message = JSON.parse(event.data);
                if(message.action == 'update' && message.screen == $vm.menu  && message.name== $vm.name){
                    $vm.getSlidersValue();
                }
            }
        }
    }
}
</script>

<style>
    .slider-container{
        flex: 4;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
    .slider-thumb{
        flex:1;
        width: 7%;
        left: 10%;
    }
    .slider-background{
        flex: 0.25;
        width: 90%;
        flex-direction: column;
        justify-content: flex-end;
        margin-right: 5%;
    }
    .container {
        flex: 1;
        flex-direction: column;
        justify-content: center;
    }
</style>
