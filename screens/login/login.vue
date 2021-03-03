<template>
    <view class="container">
        <ImageBackground :source="require('./../../assets/Innova/BG/fondomain.png')"
        class="backgroundImage" resizeMode="stretch">
            <view class="innova-layout">
                <InnovaHeader/>
                <view class="login-container">
                    <view style="flex:0.5; flex-direction:column; justify-content:center; align-items:center;">
                        <Pressable :on-press='() => goToHomeScreen()'>
                            <image class="home-button"
                                :source="require('./../../assets/Innova/Login/innovamain.png')"
                                resizeMode="center"/>
                        </Pressable>
                    </view>
                </view>
                
            </view>
        </ImageBackground>
    </view>
</template>

<script>
import InnovaHeader from '../../components/InnovaHeader.vue';
export default {
    components:{
        InnovaHeader,
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
        goToHomeScreen(){
            this.navigation.navigate("Home");
        }
    }
}
</script>

<style>
    .home-button{
        flex:1;
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
    .login-container {
        flex:10.5;
        flex-direction:column;
        justify-content:center;
        align-items: center;
    }
</style>