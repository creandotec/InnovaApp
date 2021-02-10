<template>
    <view class="container">
        <ImageBackground :source="require('./../../assets/Innova/BG/background.png')"
        class="backgroundImage" resizeMode="stretch">
            <view class="innova-layout">
                <view class="row-header">
                    <view class="header-container">
                        <text class="text-color">Header</text>
                        <!-- <image resizeMode="contain" :source="require('./../../assets/Innova/Home/configblanco.png')"/> -->
                    </view>
                </view>

                <view class="row">
                    <view class="icon-container">
                        
                        <!-- <image class="icon" :source="require('./../../assets/Innova/Home/zonesoff.png')"/> -->
                        <text class="text-color">Hola</text>
                    </view>
                    <view class="icon-container">
                        <text class="text-color">Hola</text>
                        <!-- <image class="icon" :source="require('./../../assets/Innova/Home/louversoffch.png')"/> -->
                    </view>
                </view>

                <view class="row">
                    <view class="icon-container">
                        <text class="text-color">Hola</text>
                        <!-- <image class="icon"  :source="require('./../../assets/Innova/Home/lightoff.png')"/> -->
                    </view>
                    <view class="icon-container">
                        <text class="text-color">Hola</text>
                        <!-- <image class="icon" :source="require('./../../assets/Innova/Home/climateselectoff.png')"/> -->
                    </view>
                </view>

                <view class="row">
                    <view class="icon-container">
                        <text class="text-color">Hola</text>
                        <!-- <image class="icon"  :source="require('./../../assets/Innova/Home/lightoff.png')"/> -->
                    </view>
                    <view class="icon-container">
                        <text class="text-color">Hola</text>
                        <!-- <image class="icon" :source="require('./../../assets/Innova/Home/climateselectoff.png')"/> -->
                    </view>
                </view>

                <view class="row">
                    <view class="icon-container">
                        <text class="text-color">Hola</text>
                        <!-- <image class="icon"  :source="require('./../../assets/Innova/Home/lightoff.png')"/> -->
                    </view>
                    <view class="icon-container">
                        <text class="text-color">Hola</text>
                        <!-- <image class="icon" :source="require('./../../assets/Innova/Home/climateselectoff.png')"/> -->
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
    .text-color{
        color: deepskyblue;
        background-color: whitesmoke;
    }
    .header-container{
        flex:1;
        justify-content: center;
    }
    .row-header{
        flex-direction: row;
        align-items: center;
        background-color: deepskyblue;
    }
    .icon-container {
        
        align-items: center;
    }
    .row {
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