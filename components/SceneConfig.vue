<template>
    <view style="flex:1; flex-direction:row">
        
        <view style="flex:1; justify-content:flex-end; align-items:center; margin-right:2%">
            <image style="flex:0.65;" resizeMode="contain" 
            :source="sceneSwitchSource"></image>
        </view>

        <view style="flex:4; flex-direction:row; justify-content:center; align-items:flex-end;">
            <text-input style="flex:1; color:white; height:50%; border-bottom-color:rgba(192, 192, 5, 0.76); border-bottom-width: 2;">

            </text-input>
        </view>

        <view style="flex:1; justify-content:flex-end; align-items:center; margin-left:2%">
            <image style="flex:0.65;" resizeMode="contain" 
            :source="saveSceneSource"></image>
        </view>
    </view>
</template>

<script>
export default {
    props:{
        SceneNumber: {
            type:String,
            default:"1",
            required: true
        }
    },
    data: function(){
        return{

        }
    },
    methods:{

    },
    computed:{
        sceneSwitchSource: function () {
            let $vm = this;
            if($vm.SceneNumber == "1"){
                return require('../assets/Innova/Scenes/scenesunoizq.png');
            }
            else{
                return require('../assets/Innova/Scenes/scenesunoizq.png')
            }
        },
        saveSceneSource: function(){
            let $vm = this;
            if($vm.SceneNumber == "1"){
                return require('../assets/Innova/Scenes/saveunooff.png')
            }
            else{
                return require('../assets/Innova/Scenes/saveunooff.png')
            }
        }
    }
}
</script>

<style scoped>

</style>