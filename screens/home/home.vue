<template>
    <view class="container">
        
        <StatusBar barStyle="dark-content" backgroundColor="#dcba28"/>
        <SafeAreaView style="flex:1">
        <ImageBackground :source="require('./../../assets/Innova/BG/fondomain.png')"
        class="backgroundImage" resizeMode="stretch">
            <view class="innova-layout">
                <view style="flex:1.5; flex-direction:column">
                    <Innova-Header/>
                    <Screen-Title screenTitle="HOME PAGE"/>
                </view>

                <view style="flex:8; flex-direction:column">

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
                                <image class="icon" resizeMode="contain" :source="require('./../../assets/Innova/Home/multimediaoff.png')"/>
                            </view>
                        </view>
                        
                    </view>
                </view>
            </view>
        </ImageBackground>
        </SafeAreaView>
    </view>
    
</template>

<script>
import InnovaHeader from './../../components/InnovaHeader';
import ScreenTitle from './../../components/ScreenTitle';
import GestureRecognizer, {swipeDirections} from 'react-native-swipe-gestures';

export default {
    components:{
    
    InnovaHeader, GestureRecognizer, swipeDirections,
    ScreenTitle
    },
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
            if(menu == 1){
                this.navigation.navigate("Zones");
            }
            if(menu == 2){
                this.navigation.navigate("Louvers");
            }
            if(menu == 3){
                this.navigation.navigate("Lighthing");
            }
            if(menu == 4){
                this.navigation.navigate("Climate");
            }
            if(menu == 5){
                this.navigation.navigate("Screens");
            }
            if(menu == 6){
                this.navigation.navigate("Weather");
            }
            if(menu == 7){
                this.navigation.navigate("Scenes");
            }
        }
    }
}
</script>

<style>
    .menu-button-container{
        flex:1;
        flex-direction: column;
        border-color:#dcba28;
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