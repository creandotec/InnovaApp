<template>
    <view style="flex:1; flex-direction:row; padding-bottom:5%;">
        
        <view style="flex:1; justify-content:flex-end; align-items:center; margin-right:0%">
            <Pressable :on-press="() => switchState()">
                <image style="flex:0.85;" resizeMode="contain" 
                    :source="sceneTimerSource"></image>
            </Pressable>
        </view>

        <view style="flex:0.5; justify-content:center; align-items:center; margin-right:4%">
            <Pressable :on-press="() => saveTimer()">
                <image style="flex:0.8; height:100%; width:100%" resizeMode="center" 
                    :source="require('../assets/Innova/Zones/clockofficon.png')"></image>
            </Pressable>
        </view>

        <view style="flex:1.5; flex-direction:column; justify-content:center; align-items:center; border-bottom-color:rgba(192, 192, 5, 0.76); border-bottom-width: 2;">
            <view style="flex:1; flex-direction:row">
                <text style="color: white;">ON</text>
                <text-input :value="sceneTimeOn" text-align="center" keyboardType="number-pad"
                    :on-change-text="(text)=>setOnTime(text)" returnKeyType="done"
                    :on-submit-editing="(nativeEvent) => checkTimeOn(nativeEvent)"
                    style="flex:1; color:white; margin-bottom:auto;">
                </text-input>
                <text style="color: white;">:</text>
                <text-input :value="sceneTimeOnMinutes" text-align="center" keyboardType="number-pad"
                    :on-change-text="(text)=>setOnTimeMinutes(text)" returnKeyType="done"
                    :on-submit-editing="(nativeEvent) => checkTimeOnMinutes(nativeEvent)"
                    style="flex:1; color:white;  margin-bottom:auto;">
                </text-input>
                <Pressable :on-press="()=> toggleTimeFormatOn()">
                    <text style="color: white;">{{onTimeFormat}}</text>
                </Pressable>
            </view>
            <view style="flex:1; flex-direction:row">
                <text style="color: white;">OFF</text>
                <text-input :value="sceneTimeOff" text-align="center" keyboardType="number-pad"
                    :on-change-text="(text)=>setOffTime(text)" returnKeyType="done" 
                    :on-submit-editing="(nativeEvent) => checkTimeOff(nativeEvent)"
                    style="flex:1; color:white;  margin-bottom:auto;">
                </text-input>
                <text style="color: white;">:</text>
                <text-input :value="sceneTimeOffMinutes" text-align="center" keyboardType="number-pad"
                    :on-change-text="(text)=>setOffTimeMinutes(text)" returnKeyType="done"
                    :on-submit-editing="(nativeEvent) => checkTimeOffMinutes(nativeEvent)"
                    style="flex:1.5; color:white;  margin-bottom:auto;">
                </text-input>
                <Pressable :on-press="()=>toggleTimeFormatOff()">
                    <text style="color: white;"> {{offTimeFormat}} </text>
                </Pressable>
            </view>
            
        </view>
        <view style="flex:1; flex-direction:column">
            <view style="flex:1; flex-direction:row; justify-content:center; align-items:center; margin-left:4%">
                <Pressable :on-press="()=>saveTimer()" style="flex:0.5; flex-direction:column; padding-left:5%; 
                        justify-content:center; align-items:center;">
                    <image style="flex:0.6;" resizeMode="contain" :source="saveTimerSource"></image>
                </Pressable>
            </view>
        </view>

        <view style="flex:1; justify-content:flex-end; align-items:center;">
            <text-input :value="sceneNumber" text-align="center" keyboardType="number-pad"
                :on-change-text="(text)=>setSceneName(text)" returnKeyType="done"
                style="flex:1; color:white; height:100%; width: 45;border-bottom-color:rgba(192, 192, 5, 0.76); border-bottom-width: 2;">
            </text-input>
        </view>
    </view>
</template>

<script>
import axios from 'axios';

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
            sceneTimeOn:"12",
            sceneTimeOff:"12",
            sceneTimeOffMinutes: "00",
            sceneTimeOnMinutes:"00",
            sceneNumber: "0",
            timerState: false,
            offTimeFormat: "AM",
            onTimeFormat: "AM",
            saveState: false
        }
    },
    methods:{
        setSceneName: function(text){
            if(parseInt(text) > 6){
                this.sceneNumber = String(6);
            }
            else{
                this.sceneNumber = text;
            }
        },
        checkTimeOn: function(event){
            let _textOutput = '';
            if(this.sceneTimeOn != ''){
                let _input = parseInt(this.sceneTimeOn);
                if(_input > 12 || _input == 0){
                    _input = 12;
                    _textOutput = String(_input);
                    this.sceneTimeOn = _textOutput;
                }
                else{
                    if(_input < 10){
                        _textOutput = String(_input);
                        _textOutput = '0' + _textOutput;
                        this.sceneTimeOn = _textOutput;
                    }
                    else{
                        _textOutput = String(_input);
                        this.sceneTimeOn = _textOutput;
                    }
                }
            }
            
            else{
                this.sceneTimeOn = this.sceneTimeOn;
            }
        },
        checkTimeOnMinutes: function(event){
            let _textOutput = '';
            if(this.sceneTimeOnMinutes != ''){
                let _input = parseInt(this.sceneTimeOnMinutes);
                if(_input > 59){
                    _input = 0;
                    _textOutput = String(_input);
                    // this.sceneTimeOnMinutes = _textOutput;
                    this.sceneTimeOnMinutes = '00';
                }
                else{
                    if(_input < 10){
                        _textOutput = String(_input);
                        _textOutput = '0' + _textOutput;
                        this.sceneTimeOnMinutes = _textOutput;
                    }
                    else{
                        _textOutput = String(_input);
                        this.sceneTimeOnMinutes = _textOutput;
                    }
                }
            }
            
            else{
                this.sceneTimeOnMinutes = this.sceneTimeOnMinutes;
            }
        },
        checkTimeOff: function(event){
            
            let _textOutput = '';
            if(this.sceneTimeOff != ''){
                let _input = parseInt(this.sceneTimeOff);
                if(_input > 12 || _input == 0){
                    _input = 12;
                    _textOutput = String(_input);
                    this.sceneTimeOff = _textOutput;
                }
                else{
                    if(_input < 10){
                        _textOutput = String(_input);
                        _textOutput = '0' + _textOutput;
                        this.sceneTimeOff = _textOutput;
                    }
                    else{
                        _textOutput = String(_input);
                        this.sceneTimeOff = _textOutput;
                    }
                }
            }
            
            else{
                this.sceneTimeOff = this.sceneTimeOff;
            }
        },
        checkTimeOffMinutes: function(event){
            let _textOutput = '';
            if(this.sceneTimeOffMinutes != ''){
                let _input = parseInt(this.sceneTimeOffMinutes);
                if(_input > 12){
                    _input = 12;
                    _textOutput = String(_input);
                    // this.sceneTimeOffMinutes = _textOutput;
                    this.sceneTimeOffMinutes = '00';
                }
                else{
                    if(_input < 10){
                        _textOutput = String(_input);
                        _textOutput = '0' + _textOutput;
                        this.sceneTimeOffMinutes = _textOutput;
                    }
                    else{
                        _textOutput = String(_input);
                        this.sceneTimeOffMinutes = _textOutput;
                    }
                }
            }
            
            else{
                this.sceneTimeOffMinutes = this.sceneTimeOffMinutes;
            }
        },
        setOffTime: function(text){
            this.sceneTimeOff = text;
        },
        setOffTimeMinutes: function(text){
            this.sceneTimeOffMinutes = text;
        },
        setOnTime: function(text){
            this.sceneTimeOn = text;
        },
        setOnTimeMinutes: function(text){
            this.sceneTimeOnMinutes = text;
        },
        switchState: function(){
            let $vm = this;
            this.timerState = !this.timerState;
            $vm.setTimerStatus();
        },
        toggleTimeFormatOn: function(text) {
            
            if(this.onTimeFormat == "AM"){
                this.onTimeFormat = "PM";
            }
            else{
                this.onTimeFormat = "AM";
            }
        },
        toggleTimeFormatOff: function(text){
            if(this.offTimeFormat == "AM"){
                this.offTimeFormat = "PM"
            }
            else{
                this.offTimeFormat = "AM";
            }
        },
        saveTimer: function(){
            let $vm = this;
            $vm.saveState = true;
            let modifiedOnHours = $vm.sceneTimeOn;
            let modifiedOffHours = $vm.sceneTimeOff;

            // El timer solo funciona ccon horas en formato 24H, por lo que
            // tenemos que convertir el valor si el formato es de PM
            if($vm.onTimeFormat == "PM"){
                if(parseInt(modifiedOnHours) == 12){
                    modifiedOnHours = "00";
                }
                else{
                    let _tempHours = parseInt(modifiedOnHours) + 12;
                    modifiedOnHours = String(_tempHours);
                }
            }

            if($vm.offTimeFormat == "PM"){
                if(parseInt(modifiedOffHours) == 12){
                    modifiedOffHours = "00";
                }
                else{
                    let _tempHours = parseInt(modifiedOffHours) + 12;
                    modifiedOffHours = String(_tempHours);
                }
            }
            console.log(modifiedOnHours);
            console.log(modifiedOffHours);

            axios.post('http://192.168.0.4:3000/timers/save', {
                timerID: $vm.TimerNumber,
                scene: $vm.sceneNumber,
                onHours: modifiedOnHours,
                offHours: modifiedOffHours,
                onMinutes: $vm.sceneTimeOnMinutes,
                offMinutes: $vm.sceneTimeOffMinutes
            })
            .then(res => {
                // console.log(res);
                console.log("Se guardó el timer");
            })
            .catch(err =>{
                console.log(err);
            })
            setTimeout(()=>{
                this.saveState = false;
            }, 300)
        },
        getTimerInfo: function(){
            let $vm = this;
            let _off_hours = "12";
            let _on_hours = "12";

            axios.get('http://192.168.0.4:3000/timers',{
                params:{
                    timerID: $vm.TimerNumber
                }
            })
            .then(result => {
                console.log(result.data[0]);
                _off_hours = result.data[0].off_hours;
                _on_hours = result.data[0].on_hours;

                if(parseInt(_on_hours) > 12){
                    let temp = parseInt(_on_hours) - 12;
                    _on_hours = String(temp);
                    $vm.sceneTimeOn ='0' + _on_hours;
                    $vm.onTimeFormat = "PM"
                }
                else if(_on_hours == "00"){
                    $vm.sceneTimeOn = "12";
                    $vm.onTimeFormat = "AM"
                }
                else{
                    $vm.sceneTimeOn = _on_hours;
                }
                if(parseInt(_off_hours) > 12){
                    let temp = parseInt(_off_hours) - 12;
                    _off_hours = String(temp);
                    $vm.sceneTimeOff = _off_hours;
                    $vm.offTimeFormat = "PM"
                }
                else if(_off_hours == "00"){
                    $vm.sceneTimeOff = "12";
                    $vm.offTimeFormat = "AM"
                }
                else{
                    $vm.sceneTimeOff = _off_hours;
                }

                if(result.data[0].status == 0){
                    $vm.timerState = false;    
                }
                else{
                    $vm.timerState = true;
                }
                
                $vm.sceneNumber = String(result.data[0].scene_to_load);
                

            })
            .catch(err => {
                console.log(err);
            })
        },
        setTimerStatus: function(){
            let $vm = this;
            axios.post('http://192.168.0.4:3000/timers/setStatus', {
                timerID: $vm.TimerNumber,
                status: $vm.timerState
            })
            .then( result=>{
                console.log("Se escribió el status del timer");
            })
            .catch(err => {
                console.log(err);
            })
        }
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
        saveTimerSource: function(){
            let $vm = this;
            if($vm.saveState){
                return(require('../assets/Innova/Scenes/scenesmasteron.png'));
            }
            else{
                return(require('../assets/Innova/Scenes/scenesmasteroff.png'));
            }
        }
    },
    mounted(){
        this.getTimerInfo();
    }
}
</script>

<style scoped>

</style>