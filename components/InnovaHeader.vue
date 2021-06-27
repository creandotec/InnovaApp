<template>
    <view class="header">
        <view style="flex:0.35; flex-direction:row; justify-content:center; align-items:stretch;">
            <Pressable :on-press='() => goHome()'>
                <image class="home-button"
                    :source="require('./../assets/Innova/BG/botonhome.png')"
                    resizeMode="stretch"/>
            </Pressable>
        </view>
        
        <view style="flex:1; flex-direction:column;">
            <!-- <image class="header-bar" :source="require('./../assets/Innova/BG/banerhomesolo.png')"
                resizeMode="cover"/> -->
            <ImageBackground class="header-bar" 
                :source="require('./../assets/Innova/BG/banerhomesolo.png')">
                <Text style="margin-left:auto; margin-right:5%; margin-top:5%;">{{_temperature}}°F</Text>
            </ImageBackground>
            
        </view>
    </view>    
</template>

<script>

import WS from 'react-native-websocket';
import {getWSStatus, wsClient, myEmitter, getWeatherReading} from './Websocket';

export default {
    components:{
        "ws":WS,
        wsClient, getWSStatus, myEmitter, getWeatherReading
    },
    props:{
        navigation:{
            type: Object
        },
    },
    data: function(){
        return{
            ws:null,
            temperature: null,
            _wsClient: null
        }
    },
    methods:{
        goHome: function(){
            this.$parent.navigation.navigate("Login");
        },
        initWS: function(ref){
            console.log("Iniciando ws");
            this.ws = ref;
            console.log(this.ws);
            return this.ws;
        },
        sendHello: function(){
            console.log('Open');
            this.ws.send('Hello');
        }
    },
    computed: {
        _temperature: function(){
            let $vm = this;
            return $vm.temperature;
        }
    },
    mounted(){
        let $vm = this;
        $vm.temperature = getWeatherReading().temperature;

        myEmitter.on('newread', function(read){
            $vm.temperature = read.temperature;
        })
    },
    beforeDestroy(){
        console.log("Destruyendo");
        let $vm = this;
        // myEmitter.removeListener('newread');
    }
}
</script>

<style scoped>
    .header{
        flex:1;
        flex-direction: row;
    }
    .home-button{
        flex: 1;
        width: 160;
        height:100;
    }
    .header-bar{
        flex:2;
    }
</style>