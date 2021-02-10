<template>
    <view class="container">
        <ImageBackground :source="require('./../../assets/Innova/BG/background.png')"
        class="backgroundImage" resizeMode="stretch">
            <button title="Go to home screen" @press="goToHomeScreen"></button>
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
        goToHomeScreen(){
            this.navigation.navigate("Home");
        }
    }
}
</script>

<style>
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