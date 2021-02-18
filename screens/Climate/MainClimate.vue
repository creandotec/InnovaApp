<template>
<view class="container">
        <ImageBackground :source="require('./../../assets/Innova/BG/fondomain.png')"
            class="backgroundImage" resizeMode="stretch">
            <view class="innova-layout">
                <view class="header">
                    <view :style="'flex:1'">
                        <image class="home-button" :source="require('./../../assets/Innova/BG/botonhome.png')"
                        resizeMode="cover" />
                    </view>
                    <view :style="'flex:1'">
                        <image class="header-bar" :source="require('./../../assets/Innova/BG/banerhomesolo.png')"
                            resizeMode="cover"/>
                    </view>
                </view>
            
                <view class="screen-title-container">
                    <ImageBackground  class="backgroundTitle" resizeMode="stretch"
                        :source="require('./../../assets/Innova/BG/barraizquierda.png')">
                            <text class="screen-title">CLIMATE CONTROL</text>
                        <Pressable :on-press='() => changeMenu(0)'>
                            <image resizeMode="contain" style='margin-top:20%; flex:0.8'
                                :source="require('./../../assets/Innova/Home/configblanco.png')"/>
                        </Pressable>
                        
                    </ImageBackground>
                </view>
                
                <view class="main-switch-container">
                    <view class="master-container">
                        <view class="master-icon-container">
                            <image class="master-icon" resizeMode="contain"
                                :source="require('./../../assets/Innova/Climate/climateoff.png')"/>
                        </view>
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
                        <view style="flex:1; flex-direction: column">
                            <view style="flex:1; flex-direction: column; align-items:center; justify-content:flex-end">
                                <Pressable :on-press='() => changeMenu(0)'>
                                    <image style="flex:0.9; margin-top:8%" resizeMode="contain"
                                    :source="require('./../../assets/Innova/Climate/climatedosred.png')"/>
                                </Pressable>
                            </view>
                            <view style="flex:1; flex-direction: column; align-items:center; justify-content:flex-start">
                                <Pressable :on-press='() => changeMenu(0)'>
                                    <image style="flex:0.9; margin-bottom:8%" resizeMode="contain"
                                    :source="require('./../../assets/Innova/Climate/climatedosblue.png')"/>
                                </Pressable>
                            </view>
                        </view>
                        <view style="flex:2; flex-direction:column">
                            <view class="menu-button-container">
                                <view style="flex:0.20;">
                                    <text class="menu-title-center">0.0°F</text>
                                </view>
                                <view class="master-icon-container">
                                    <image class="icon-sm" resizeMode="contain"
                                        :source="require('./../../assets/Innova/Climate/acoff.png')"/>
                                </view>
                            </view>
                        </view>
                        
                    </view>
                    
                </view>

                <view class="default-row-container">
                    <view class="icon-container">
                        <Pressable :on-press='() => changeMenu(0)'>
                            <image class="icon" resizeMode="contain" 
                                :source="require('./../../assets/Innova/Climate/cilingfanoff.png')"/>
                        </Pressable>
                    </view>
                    <view class="slider-container">
                        <view style="flex:0.3; flex-direction:row; justify-content:center; align-items:center;">
                            <ImageBackground :source="require('./../../assets/Innova/Lighting/barracontexto.png')"
                                style="flex:1; margin-right:5%;" resizeMode="stretch">
                            <image style="flex:1; margin-right:5%;" resizeMode="stretch"
                                :source="require('./../../assets/Innova/Lighting/barracontexto.png')"/>
                            </ImageBackground>
                        </view>
                    </view>
                </view>
                
                <view class="default-row-container">
                    <view class="icon-container">
                        <Pressable :on-press='() => changeMenu(0)'>
                            <image class="icon" resizeMode="contain" 
                                :source="require('./../../assets/Innova/Climate/mstoff.png')"/>
                        </Pressable>
                    </view>
                    <view class="slider-container">
                        <image style="flex:0.3;" resizeMode="stretch"
                        :source="require('./../../assets/Innova/Lighting/barracontexto.png')"/>
                    </view>
                </view>
                
                <view class="default-row-container">
                    <view class="icon-container">
                        <Pressable :on-press='() => changeMenu(0)'>
                            <image class="icon-xl" resizeMode="contain" 
                                :source="require('./../../assets/Innova/Climate/spareoff.png')"/>
                        </Pressable>
                    </view>
                    <view class="slider-container">
                        <image style="flex:0.3;" resizeMode="stretch"
                        :source="require('./../../assets/Innova/Lighting/barracontexto.png')"/>
                    </view>
                </view>
                
            </view>
        </ImageBackground>
    </view>
</template>

<script>
export default {
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
        changeMenu: function(menu){
            if(menu == 0){
                this.navigation.navigate("Home");
            }
        }
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
        flex-direction: column;
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