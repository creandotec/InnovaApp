<template>
    <view style="flex:1; flex-direction:row">
        
        <view style="flex:1; justify-content:flex-end; align-items:center; margin-right:2%">
            <Pressable :on-press="() => toggleSwitch()">
                <image style="flex:0.75;" resizeMode="contain" 
                    :source="sceneSwitchSource"></image>
            </Pressable>
        </view>

        <view style="flex:4; flex-direction:row; justify-content:center; align-items:flex-end;">
            <text-input :value="name" text-align="center" :on-change-text="(text)=>setSceneName(text)"
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
import axios from 'axios';

export default {
    props:{
        SceneNumber: {
            type:String,
            default:"1",
            required: true
        },
        Name: {
            type: String,
            required: true
        }
    },
    data: function(){
        return{
            name: '',
            initialState: false,
            saveState: false,
        }
    },
    methods:{
        getNames: function(){
            let $vm = this;
            axios.get('http://192.168.0.4:3000/scenes/names')
                .then(res => {
                    // console.log(res.data);
                    $vm.name = res.data[parseInt($vm.SceneNumber) - 1].name;
                    
                })
                .catch(err => {
                    console.log(err);
                })
        },
        setSceneName: function(text){
            this.name = text;
        },
        toggleSwitch: function(){
            this.initialState = !this.initialState;
            this.loadScene();
        },
        toggleSave: function(){
            this.saveState = true;
            this.saveScene();
            setTimeout(()=>{
                this.saveState = false;
            }, 300);
        },
        saveScene: function(){
            let $vm = this;
            // $vm.name = $vm.sceneName;
            axios.post('http://192.168.0.4:3000/scenes/save', {
                scene: $vm.SceneNumber,
                name: $vm.name
            })
            .then(res => {
                // console.log(res);
            })
            .catch(err=>{
                console.log(err);
            })
        },
        loadScene: function(){
            let $vm = this;
            axios.post('http://192.168.0.4:3000/scenes/load', {
                scene: $vm.SceneNumber
            })
            .then(res => {
                console.log(res);
            })
            .catch(err=>{
                console.log(err);
            })
        }
    },
    mounted: function(){
        this.getNames();
    },
    computed:{
        sceneSwitchSource: function () {
            let $vm = this;
            
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
                // setTimeout(()=> {this.saveState = false}, 200);
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
            
        },
        sceneName: function(){
            return this.Name;
        }
    }
}
</script>

<style scoped>

</style>