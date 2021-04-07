<template>
    <view style="flex:1; flex-direction:row; padding-bottom:5%;">
        
        <view style="flex:1; justify-content:flex-end; align-items:center; margin-right:0%">
            <Pressable :on-press="() => switchState()">
                <image style="flex:0.85;" resizeMode="contain" 
                    :source="sceneTimerSource"></image>
            </Pressable>
        </view>

        <view style="flex:0.5; justify-content:center; align-items:center; margin-right:4%">
            <image style="flex:0.8; height:100%; width:100%" resizeMode="center" 
            :source="require('../assets/Innova/Zones/clockofficon.png')"></image>
        </view>

        <view style="flex:1.5; flex-direction:column; justify-content:center; align-items:center; border-bottom-color:rgba(192, 192, 5, 0.76); border-bottom-width: 2;">
            <view style="flex:1; flex-direction:row">
                <text style="color: white;">ON</text>
                <text-input :value="sceneTimeOn" text-align="center" :on-change-text="(text)=>setOnTime(text)"
                    style="flex:1; color:white;">
                </text-input>
                <text style="color: white;">AM</text>
            </view>
            <view style="flex:1; flex-direction:row">
                <text style="color: white;">OFF</text>
                <text-input :value="sceneTimeOff" text-align="center" :on-change-text="(text)=>setOffTime(text)"
                    style="flex:1; color:white;">
                </text-input>
                <text style="color: white;">AM</text>
            </view>
            
        </view>

        <view style="flex:0.5; flex-direction:column; justify-content:center; align-items:center; margin-left:4%">
            <image style="flex:0.8; height:100%; width:100%" resizeMode="center" 
            :source="require('../assets/Innova/Scenes/scenesmasteroff.png')"></image>
        </view>

        <view style="flex:1; justify-content:flex-end; align-items:center;">
            <text-input :value="sceneNumber" text-align="center" :on-change-text="(text)=>setSceneName(text)"
                style="flex:1; color:white; height:100%; width: 45;border-bottom-color:rgba(192, 192, 5, 0.76); border-bottom-width: 2;">
            </text-input>
        </view>
    </view>
</template>

<script>
export default {
    props:{
        TimerNumber: {
            type:String,
            default:"1",
            required: true
        }
    },
    data: function(){
        return{
            sceneTimeOn:"00:00",
            sceneTimeOff:"00:00",
            sceneNumber: "0",
            timerState: false,
        }
    },
    methods:{
        setSceneName: function(text){
            this.sceneNumber = text;
        },
        setOffTime: function(text){
            this.sceneTimeOff = text;
        },
        setOnTime: function(text){
            this.sceneTimeOn = text;
        },
        switchState: function(){
            this.timerState = !this.timerState;
        },
    },
    computed:{
        sceneTimerSource: function () {
            let $vm = this;
            if(this.timerState == false){
                if($vm.TimerNumber == "1"){
                    return require('../assets/Innova/Scenes/callunooff.png');
                }
                else if($vm.TimerNumber == "2"){
                    return require('../assets/Innova/Scenes/calldosoff.png');
                }
                else if($vm.TimerNumber == "3"){
                    return require('../assets/Innova/Scenes/calltresoff.png');
                }
                else if($vm.TimerNumber == "4"){
                    return require('../assets/Innova/Scenes/callcuatrooff.png');
                }
                else if($vm.TimerNumber == "5"){
                    return require('../assets/Innova/Scenes/callcincooff.png');
                }
                else if($vm.TimerNumber == "6"){
                    return require('../assets/Innova/Scenes/callseisoff.png');
                }
                else{
                    return require('../assets/Innova/Scenes/scenesunoizq.png')
                }
            }
            else{
                if($vm.TimerNumber == "1"){
                    return require('../assets/Innova/Scenes/callunoon.png');
                }
                else if($vm.TimerNumber == "2"){
                    return require('../assets/Innova/Scenes/calldoson.png');
                }
                else if($vm.TimerNumber == "3"){
                    return require('../assets/Innova/Scenes/calltreson.png');
                }
                else if($vm.TimerNumber == "4"){
                    return require('../assets/Innova/Scenes/callcuatroon.png');
                }
                else if($vm.TimerNumber == "5"){
                    return require('../assets/Innova/Scenes/callcincoon.png');
                }
                else if($vm.TimerNumber == "6"){
                    return require('../assets/Innova/Scenes/callseison.png');
                }
                else{
                    return require('../assets/Innova/Scenes/scenesunoizq.png')
                }
            }
            
        },
        saveSceneSource: function(){
            let $vm = this;
            if($vm.TimerNumber == "1"){
                return require('../assets/Innova/Scenes/saveunooff.png')
            }
            else if($vm.TimerNumber == "2"){
                return require('../assets/Innova/Scenes/savedosoff.png');
            }
            else if($vm.TimerNumber == "3"){
                return require('../assets/Innova/Scenes/savetresoff.png');
            }
            else if($vm.TimerNumber == "4"){
                return require('../assets/Innova/Scenes/savecuatrooff.png');
            }
            else if($vm.TimerNumber == "5"){
                return require('../assets/Innova/Scenes/savecincooff.png');
            }
            else if($vm.TimerNumber == "6"){
                return require('../assets/Innova/Scenes/saveseisoff.png');
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