<template>
    <view class="header">
        <ws/>
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
                <Text style="margin-left:auto; margin-right:5%; margin-top:5%;">30.0°F</Text>
            </ImageBackground>
            
        </view>
    </view>    
</template>

<script>

import WS from 'react-native-websocket';

export default {
    components:{
        "ws":WS
    },
    props:{
        navigation:{
            type: Object
        },
    },
    methods:{
        goHome: function(){
            this.$parent.navigation.navigate("Login");
        }
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