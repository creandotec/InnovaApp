<template>
    <view class="screen-title-container">
        <ImageBackground  class="backgroundTitle" resizeMode="stretch"
            :source="require('./../assets/Innova/BG/barraizquierda.png')">
                <text class="screen-title">{{screenTitle}}</text>
            <Pressable :on-press='() => changeMenu(0)'>
                <image resizeMode="contain" style='margin-top:20%; flex:0.8'
                    :source="require('./../assets/Innova/Home/configblanco.png')"/>
            </Pressable>
            
        </ImageBackground>
    </view>
</template>

<script>
export default {
    props:{
        navigation:{
            type: Object
        },
        screenTitle: {
            type: String,
            default: "Title",
        }
    },
    methods:{
        changeMenu: function(menu){
            if(menu == 0){
                this.$parent.navigation.navigate("Home");
            }
        }
    }
}
</script>

<style scoped>
    .screen-title-container{
        flex:1;
        flex-direction: row;
    }
    .screen-title{
        flex:1;
        font-weight: bold;
        font-size: 15;
        color: whitesmoke;
        margin-top:2%;
        margin-bottom: 2%;
    }
    .backgroundTitle {
        flex:1;
        flex-direction: row;
        justify-content: space-between;
    }
</style>