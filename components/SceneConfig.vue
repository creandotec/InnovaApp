<template>
    <view style="flex:1; flex-direction:row">
        
        <view style="flex:1; justify-content:flex-end; align-items:center; margin-right:2%">
            <Pressable :on-press="() => toggleSwitch()">
                <image style="flex:0.75;" resizeMode="contain" 
                    :source="sceneSwitchSource"></image>
            </Pressable>
        </view>

        <view style="flex:4; flex-direction:row; justify-content:center; align-items:flex-end;">
            <text-input :value="sceneName" text-align="center" :on-change-text="(text)=>setSceneName(text)"
                style="flex:1; color:white; height:100%; border-bottom-color:rgba(192, 192, 5, 0.76); border-bottom-width: 2;">

            </text-input>
        </view>

        <view style="flex:1; justify-content:flex-end; align-items:center; margin-left:2%">
            <Pressable :on-press="() => toggleSave()">
                <image style="flex:0.75;" resizeMode="contain" 
                    :source="saveSceneSource"></image>
            </Pressable>
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
            sceneName: "Name",
            initialState: false,
            saveState: false,
        }
    },
    methods:{
        setSceneName: function(text){
            this.sceneName = text;
        },
        toggleSwitch: function(){
            this.initialState = !this.initialState;
        },
        toggleSave: function(){
            this.saveState = !this.saveState;
        }
    },
    computed:{
        sceneSwitchSource: function () {
            let $vm = this;
            console.log("Cambiando el estado del switch")
            if(this.initialState == false)
            {
                if($vm.SceneNumber == "1"){
                return require('../assets/Innova/Scenes/callunooff.png');
                }
                else if($vm.SceneNumber == "2"){
                    return require('../assets/Innova/Scenes/calldosoff.png');
                }
                else if($vm.SceneNumber == "3"){
                    return require('../assets/Innova/Scenes/calltresoff.png');
                }
                else if($vm.SceneNumber == "4"){
                    return require('../assets/Innova/Scenes/callcuatrooff.png');
                }
                else if($vm.SceneNumber == "5"){
                    return require('../assets/Innova/Scenes/callcincooff.png');
                }
                else if($vm.SceneNumber == "6"){
                    return require('../assets/Innova/Scenes/callseisoff.png');
                }
                else{
                    return require('../assets/Innova/Scenes/scenesunoizq.png')
                }
            }
            else{
                if($vm.SceneNumber == "1"){
                return require('../assets/Innova/Scenes/callunoon.png');
                }
                else if($vm.SceneNumber == "2"){
                    return require('../assets/Innova/Scenes/calldoson.png');
                }
                else if($vm.SceneNumber == "3"){
                    return require('../assets/Innova/Scenes/calltreson.png');
                }
                else if($vm.SceneNumber == "4"){
                    return require('../assets/Innova/Scenes/callcuatroon.png');
                }
                else if($vm.SceneNumber == "5"){
                    return require('../assets/Innova/Scenes/callcincoon.png');
                }
                else if($vm.SceneNumber == "6"){
                    return require('../assets/Innova/Scenes/callseison.png');
                }
                else{
                    return require('../assets/Innova/Scenes/scenesunoizq.png')
                }
            }
            
        },
        saveSceneSource: function(){
            let $vm = this;
            if(this.saveState == false){
                if($vm.SceneNumber == "1"){
                return require('../assets/Innova/Scenes/saveunooff.png')
                }
                else if($vm.SceneNumber == "2"){
                    return require('../assets/Innova/Scenes/savedosoff.png');
                }
                else if($vm.SceneNumber == "3"){
                    return require('../assets/Innova/Scenes/savetresoff.png');
                }
                else if($vm.SceneNumber == "4"){
                    return require('../assets/Innova/Scenes/savecuatrooff.png');
                }
                else if($vm.SceneNumber == "5"){
                    return require('../assets/Innova/Scenes/savecincooff.png');
                }
                else if($vm.SceneNumber == "6"){
                    return require('../assets/Innova/Scenes/saveseisoff.png');
                }
                else{
                    return require('../assets/Innova/Scenes/saveunooff.png')
                }
            }
            else{
                if($vm.SceneNumber == "1"){
                    return require('../assets/Innova/Scenes/saveunoon.png')
                }
                else if($vm.SceneNumber == "2"){
                    return require('../assets/Innova/Scenes/savedoson.png');
                }
                else if($vm.SceneNumber == "3"){
                    return require('../assets/Innova/Scenes/savetreson.png');
                }
                else if($vm.SceneNumber == "4"){
                    return require('../assets/Innova/Scenes/savecuatroon.png');
                }
                else if($vm.SceneNumber == "5"){
                    return require('../assets/Innova/Scenes/savecincoon.png');
                }
                else if($vm.SceneNumber == "6"){
                    return require('../assets/Innova/Scenes/saveseison.png');
                }
                else{
                    return require('../assets/Innova/Scenes/saveunoon.png')
                }
            }
            
        }
    }
}
</script>

<style scoped>

</style>