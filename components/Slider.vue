<template>
    <view class="slider-container" :on-layout="(event)=>getSlideWidth(event)">
        <ImageBackground :source="require('./../assets/Innova/Lighting/barracontexto.png')" 
            class="slider-background" resizeMode="stretch">
            <!-- <image class="slider-thumb" resizeMode="stretch"
                :on-start-should-set-pan-responder="()=>{return true}"
                :on-start-should-set-pan-responder-capture="()=>{return true}"
                :on-move-should-set-responder-capture="()=>{return true}"
                :on-move-should-set-pan-responder-capture="()=>{return true}"

                :source="require('./../../assets/Innova/Multi/cursor2.png')"/> -->
            <PanGestureHandler :minDeltaX="deltaX" 
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
import {ThumbCursor} from './thumb.js';
export default {
    components:{
        Animated, PanGestureHandler, 
        "thumb-cursor":ThumbCursor,
        PanResponder,
    },
    props:{
        //step: {type: Number, default: 0}
    },
    data: function(){
        return{
            barraValue: 0,
            deltaX: 0,
            slideWidth: 0,
            slideInit: 0,
            step: 0,
            stepInflexion: 0
        }
    },
    methods:{
        adjustThumb: function(evt){
            let $vm = this;
            let evento = evt.nativeEvent;

            if (evento.state == 5){
                console.log("Se liberó el cursor");
                var restante = $vm.barraValue % $vm.step;
                var tempPos = $vm.barraValue - restante;
                console.log($vm.step);
                console.log(restante);
                console.log($vm.barraValue);
                tempPos = tempPos / $vm.step;
                console.log(tempPos);
                $vm.barraValue = tempPos * $vm.step;
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

            if(Math.abs(position) > 10){
                return Math.round(cursorX);    
            }
            else{
                return 0;
            }
            //return Math.round(cursorX);
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
        flex:0.7;
        width: 7%;
        left: 10%;
    }
    .slider-background{
        flex: 0.3;
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
