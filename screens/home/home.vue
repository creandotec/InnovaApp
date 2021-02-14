<template>
    <view class="container">
        <ImageBackground :source="require('./../../assets/Innova/BG/homepage.png')"
        class="backgroundImage" resizeMode="stretch">
            <view class="innova-layout">
                <view class="row-header">
                    <!-- <view class="header-container">
                        <text class="text-color">HOME PAGE</text>
                        <image resizeMode="contain" :source="require('./../../assets/Innova/Home/configblanco.png')"/>
                    </view> -->

                    <text class="screen-title">HOME PAGE</text>
                    <Pressable :on-press='() => changeMenu(0)'>
                    <image resizeMode="contain" style='margin-bottom:4%' 
                        :source="require('./../../assets/Innova/Home/configblanco.png')"/>
                    </Pressable>
                </view>

                <view class="row-home">
                    <view class="menu-button-container">
                        <view :style="'flex:0.20;'">
                            <text class="menu-title-right">AREAS</text>
                        </view>
                        
                        <view class="icon-container">
                            <Pressable :on-press="() => changeMenu(1)">
                                <image class="icon" style="margin-top:0%; margin-bottom:0%;" resizeMode="contain" :source="require('./../../assets/Innova/Home/zonesoff.png')"/>
                            </Pressable>
                        </view>
                    </view>
                    
                    <view class="menu-button-container">
                        <view :style="'flex:0.20;'">
                            <text class="menu-title-left">LOUVERS</text>
                        </view>
                        <view class="icon-container">
                            <Pressable :on-press="()=> changeMenu(2)">
                            <image class="icon" style="margin-top:0%; margin-bottom:0%;" resizeMode="contain" 
                                :source="require('./../../assets/Innova/Home/louversoffch.png')"/>
                            </Pressable>
                        </view>
                    </view>
                    
                </view>
                <!-- Second row -->
                <view class="row-home">
                    <view class="menu-button-container">
                        <view style="flex:0.20;">
                            <text class="menu-title-right">LIGHTHING</text>
                        </view>
                        <view class="icon-container">
                            <Pressable :on-press="()=> changeMenu(3)">
                                <image class="icon" resizeMode="contain" 
                                :source="require('./../../assets/Innova/Home/lightoff.png')"/>
                            </Pressable>
                        </view>
                    </view>
                    
                    <view class="menu-button-container">
                        <view style="flex:0.20;">
                            <text class="menu-title-left">CLIMATE</text>
                        </view>
                        <view class="icon-container">
                            <Pressable :on-press="()=> changeMenu(4)">
                                <image class="icon" resizeMode="contain" 
                                :source="require('./../../assets/Innova/Home/climateselectoff.png')"/>
                            </Pressable>
                        </view>
                    </view>
                    
                </view>

                <!-- Third row -->
                <view class="row-home">
                    <view class="menu-button-container">
                        <view style="flex:0.20;">
                            <text class="menu-title-right">SCREENS</text>
                        </view>
                        <view class="icon-container">
                            <Pressable :on-press="()=> changeMenu(5)">    
                                <image class="icon" style="margin-top:9%; margin-bottom:9%;" 
                                    resizeMode="contain" :source="require('./../../assets/Innova/Home/screensoff.png')"/>
                            </Pressable>
                        </view>
                    </view>
                    <view class="menu-button-container">
                        <view style="flex:0.20;">
                            <text class="menu-title-left">WEATHER</text>
                        </view>
                        <view class="icon-container">
                            <Pressable :on-press="()=> changeMenu(6)">    
                                <image class="icon" resizeMode="contain" 
                                :source="require('./../../assets/Innova/Home/weatheroff.png')"/>
                            </Pressable>
                        </view>
                    </view>
                    
                </view>

                <view class="row-home">
                    <view class="menu-button-container">
                        <view style="flex:0.20;">
                            <text class="menu-title-right">SCENES</text>
                        </view>
                        <view class="icon-container">
                            <Pressable :on-press="()=> changeMenu(7)">    
                                <image class="icon"  resizeMode="contain" 
                                :source="require('./../../assets/Innova/Home/manoff.png')"/>
                            </Pressable>
                        </view>
                    </view>

                    <view class="menu-button-container">
                        <view style="flex:0.20;">
                            <text class="menu-title-left">MULTIMEDIA</text>
                        </view>
                        <view class="icon-container">    
                            <image class="icon" resizeMode="contain" :source="require('./../../assets/Innova/Home/multimedia.png')"/>
                        </view>
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
            alert("Se tocó la imagen" + menu);
            if(menu == 3){
                this.navigation.navigate("Lighthing");
            }
        }
    }
}
</script>

<style>
    .menu-button-container{
        flex:1;
        flex-direction: column;
        border-color: rgba(192, 192, 5, 0.76);
        border-width: 2;
    }
    .menu-title-left{
        color: white;
        margin-top: 3%;
        margin-left: auto;
        margin-right: 5%;
        font-size: 10;
    }
    .menu-title-right{
        color: white;
        margin-top: 3%;
        margin-left: 5%;
        margin-right: auto;
        font-size: 10;
    }
    .icon{
        flex:1;
        margin-top: 5%;
        margin-bottom: 5%;
    }
    .screen-title{
        flex:1;
        font-weight: bold;
        font-size: 30;
        color: whitesmoke;
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
        justify-content: center;
        align-items: center;
        
    }
    .row-home {
        flex:1;
        flex-direction: row;
        align-items: stretch;
        justify-content:center;
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
    .center {
        margin-left: auto;
        margin-right: auto;
    }
</style>