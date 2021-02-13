<template>
    <view class="container">
        <ImageBackground :source="require('./../../assets/Innova/BG/fondomain.png')"
            class="backgroundImage" resizeMode="stretch">
            <view class="innova-layout">
                <view class="header">
                    <image class="home-button" :source="require('./../../assets/Innova/BG/botonhome.png')"
                        resizeMode="cover" />
                    <image class="header-bar" :source="require('./../../assets/Innova/BG/banerhomesolo.png')"
                        resizeMode="cover" />
                </view>
            
                <!-- <view class="screen-title">
                    <ImageBackgound  class="backgroundImage" resizeMode="stretch"
                        :source="require('./../../assets/Innova/BG/barraizquierda.png')">
                        <text class="screen-title">HOME PAGE</text>
                        <Pressable :on-press='() => changeMenu(0)'>
                        <image resizeMode="contain" style='margin-bottom:4%' 
                            :source="require('./../../assets/Innova/Home/configblanco.png')"/>
                        </Pressable>
                    </ImageBackgound>
                </view>
                
                <view class="main-switch-container">
                    <view class="iconcontainer">
                        <image class="icon" resizeMode="contain"
                            :source="require('./../../assets/Innova/Home/lightoff.png')"/>
                        <text class="container">LIGHTHING</text>
                    </view>
                </view>

                <view class="default-row-container"></view>
                
                <view class="default-row-container"></view>
                
                <view class="default-row-container"></view>
                
                <view class="default-row-container"></view>
                
                <view class="default-row-container"></view> -->
            </view>
        </ImageBackground>
    </view>
</template>

<script>
export default {
    data: function(){
        return{

        }
    },
    methods:{
        changeMenu: function(menu){
            alert("Se tocó la imagen" + menu);
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
    }
    .header-bar{
        flex:2;
    }
    .screen-title{
        flex:1;
        flex-direction: row;
    }
    .main-switch-container{
        flex:3;
        flex-direction: row;
    }
    .default-row-container{
        flex:2;
        flex-direction: row;
    }
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
        background-color: powderblue;
    }
    .center {
        margin-left: auto;
        margin-right: auto;
    }

</style>