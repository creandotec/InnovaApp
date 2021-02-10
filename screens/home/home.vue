<template>
    <view class="container">
        <ImageBackground :source="require('./../../assets/Innova/BG/background.png')"
        class="backgroundImage" resizeMode="stretch">
            <view class="innova-layout">
                <view class="row-header">
                    <!-- <view class="header-container">
                        <text class="text-color">HOME PAGE</text>
                        <image resizeMode="contain" :source="require('./../../assets/Innova/Home/configblanco.png')"/>
                    </view> -->

                    <text class="screen-title">HOME PAGE</text>
                    <image resizeMode="contain" :source="require('./../../assets/Innova/Home/configblanco.png')"/>
                </view>

                <view class="row-home">
                    <view class="icon-container" :borderColor="'yellow'">
                        <image class="icon" resizeMode="contain" :source="require('./../../assets/Innova/Home/zonesoff.png')"/>
                    </view>
                    <view class="icon-container" borderColor="yellow" borderWidth=1>
                        
                        <image class="icon" resizeMode="contain" :source="require('./../../assets/Innova/Home/louversoffch.png')"/>
                    </view>
                </view>

                <view class="row-home">
                    <view class="icon-container">
                        
                        <image class="icon" resizeMode="contain" :source="require('./../../assets/Innova/Home/lightoff.png')"/>
                    </view>
                    <view class="icon-container">
                        
                        <image class="icon" resizeMode="contain" :source="require('./../../assets/Innova/Home/climateselectoff.png')"/>
                    </view>
                </view>

                <view class="row-home">
                    <view class="icon-container">
                        
                        <image class="icon"  resizeMode="contain" :source="require('./../../assets/Innova/Home/screensoff.png')"/>
                    </view>
                    <view class="icon-container">
                        
                        <image class="icon" resizeMode="contain" :source="require('./../../assets/Innova/Home/weatheroff.png')"/>
                    </view>
                </view>

                <view class="row-home">
                    <view class="icon-container">
                        
                        <image class="icon"  resizeMode="contain" :source="require('./../../assets/Innova/Home/manoff.png')"/>
                    </view>
                    <view class="icon-container">
                        
                        <image class="icon" resizeMode="contain" :source="require('./../../assets/Innova/Home/multimedia.png')"/>
                    </view>
                </view>

            </view>
        </ImageBackground>
    </view>
    
</template>

<script>
export default {
    data: function(){
        return{

        }
    }
}
</script>

<style>
    .icon{
        flex:1;
        margin-top: 10%;
        margin-bottom: 10%;
    }
    .screen-title{
        flex:1;
        font-weight: bold;
        color: whitesmoke;
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
        padding: 10%;
        border-color:yellow;
        border-width:2;        
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
        background-color: powderblue;
    }
    .center {
        margin-left: auto;
        margin-right: auto;
    }
</style>