<template>
    <view class="header">
        
        <view style="flex:0.35; flex-direction:row; justify-content:center; align-items:stretch;">
            <Pressable :on-press='() => goHome()'>
                <image class="home-button"
                    :source="require('./../assets/Innova/BG/botonhome.png')"
                    resizeMode="stretch"/>
            </Pressable>
        </view>
        
        <view style="flex:1; flex-direction:column;">
            <image class="header-bar" :source="require('./../assets/Innova/BG/banerhomesolo.png')"
                resizeMode="cover"/>
        </view>
    </view>    
</template>

<script>
export default {
    props:{
        navigation:{
            type: Object
        },
    },
    methods:{
        goHome: function(){
            this.$parent.navigation.navigate("Home");
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
        width: 160;
        height:100;
    }
    .header-bar{
        flex:2;
    }
</style>