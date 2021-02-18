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
                        
                            <text class="screen-title">LIGHTHING</text>
                        
                        <Pressable :on-press='() => changeMenu(0)'>
                            <image resizeMode="contain" style='margin-bottom:4%' 
                                :source="require('./../../assets/Innova/Home/configblanco.png')"/>
                        </Pressable>
                        
                    </ImageBackground>
                </view>
                
                <view class="main-switch-container">
                    <view class="master-container">
                        <view class="master-icon-container">
                            <image class="master-icon" resizeMode="contain"
                                :source="require('./../../assets/Innova/Home/lightoff.png')"/>
                        </view>
                        <view class="master-text-container">
                            <text class="innova-master-text">LIGHTHING</text>
                        </view>
                        
                    </view>
                </view>

                <view class="default-row-container">
                    <view class="icon-container">
                        <Pressable :on-press='() => changeMenu(0)'>
                            <image class="icon" resizeMode="contain" 
                                :source="require('./../../assets/Innova/Lighting/gutteroff.png')"/>
                        </Pressable>
                    </view>
                    <view class="slider-container">
                        <image class="slider-icon" resizeMode="stretch"
                        :source="require('./../../assets/Innova/Lighting/barracontexto.png')"/>
                    </view>
                    <view class="icon-container">
                        <Pressable :on-press='() => changeMenu(0)'>
                            <image class="icon-sm" resizeMode="contain"
                            :source="require('./../../assets/Innova/Lighting/paletteoff.png')"/>
                        </Pressable>
                    </view>
                </view>
                
                <view class="default-row-container">
                    <view class="icon-container">
                        <Pressable :on-press='() => changeMenu(0)'>
                            <image class="icon" resizeMode="contain" 
                                :source="require('./../../assets/Innova/Lighting/louverslightoff.png')"/>
                        </Pressable>
                    </view>
                    <view class="slider-container">
                        <image class="slider-icon" resizeMode="stretch"
                        :source="require('./../../assets/Innova/Lighting/barracontexto.png')"/>
                    </view>
                    <view class="icon-container">
                        <Pressable :on-press='() => changeMenu(0)'>
                            <image class="icon-sm" resizeMode="contain"
                            :source="require('./../../assets/Innova/Lighting/paletteoff.png')"/>
                        </Pressable>
                    </view>
                </view>
                
                <view class="default-row-container">
                    <view class="icon-container">
                        <Pressable :on-press='() => changeMenu(0)'>
                            <image class="icon-xl" resizeMode="contain" 
                                :source="require('./../../assets/Innova/Lighting/luzofflighingoff.png')"/>
                        </Pressable>
                    </view>
                    <view class="slider-container">
                        <image class="slider-icon" resizeMode="stretch"
                        :source="require('./../../assets/Innova/Lighting/barracontexto.png')"/>
                    </view>
                    <view class="icon-container">
                        <Pressable :on-press='() => changeMenu(0)'>
                            <image class="icon-sm" resizeMode="contain"
                            :source="require('./../../assets/Innova/Lighting/paletteoff.png')"/>
                        </Pressable>
                    </view>
                </view>
                
                <view class="default-row-container">
                    <view class="icon-container">
                        <Pressable :on-press='() => changeMenu(0)'>
                            <image class="icon" resizeMode="contain" 
                                :source="require('./../../assets/Innova/Lighting/sconceoff.png')"/>
                        </Pressable>
                    </view>
                    <view class="slider-container">
                        <image class="slider-icon" resizeMode="stretch"
                        :source="require('./../../assets/Innova/Lighting/barracontexto.png')"/>
                    </view>
                    <view class="icon-container">
                        <Pressable :on-press='() => changeMenu(0)'>
                            <image class="icon-sm" resizeMode="contain"
                            :source="require('./../../assets/Innova/Lighting/paletteoff.png')"/>
                        </Pressable>
                    </view>
                </view>
                
                <view class="default-row-container">
                    <view class="icon-container">
                        <Pressable :on-press='() => changeMenu(0)'>
                            <image class="icon" resizeMode="contain" 
                                :source="require('./../../assets/Innova/Lighting/spareunooff.png')"/>
                        </Pressable>
                    </view>
                    <view class="slider-container">
                        <image class="slider-icon" resizeMode="stretch"
                        :source="require('./../../assets/Innova/Lighting/barracontexto.png')"/>
                    </view>
                    <view class="icon-container">
                        <Pressable :on-press='() => changeMenu(0)'>
                            <image class="icon-sm" resizeMode="contain"
                            :source="require('./../../assets/Innova/Lighting/paletteoff.png')"/>
                        </Pressable>
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