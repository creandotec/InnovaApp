<template>
    <view v-bind:class="{'icon-container':!master, 'master-icon-container':master}">
        <Pressable class="press-class" :on-press='() => switchToggle()'  :on-long-press='() => turnoffZone()'>
            <image v-bind:class="{'icon':size=='md' && !master, 'icon-sm':size=='sm' && !master, 
                'icon-xl':size=='lg' && !master, 'icon-xl-2':size=='xl'&&master, 'master-icon':master}" 
                resizeMode="stretch"
                :source="imageSource"/>
        </Pressable>
    </view>
</template>

<script>

import {ZoneSwitch} from './zoneSwitch.js';

export default {
    components:{
        ZoneSwitch
    },
    data: function(){
        return{
            initialState: 0,
        }
    },
    props: {
        status: {
            Type: Number,
        },
        master: {
            Type: Boolean,
            default: false
        },
        size: {
            Type: String,
            default: 'md'
        }
    },
    methods:{
        turnoffZone: function(){
            var data = {};
            this.initialState = 0;
            data.zone = "4";
            data.value = this.initialState;
            this.$emit('update-status', data);
        },
        switchToggle: function(){
            var data = {};
            if(this.initialState == 0 || this.initialState == 3){
                this.initialState = 1;
                data.zone = "4";
                data.value = this.initialState;
                this.$emit('update-status', data);
            }
            else{
                this.initialState = 3;
                data.zone = "4";
                data.value = this.initialState;
                this.$emit('update-status', data);
            }
        }
    },
    computed:{
        imageSource: function(){
            let $vm = this;
            
            if($vm.initialState == 1 || $vm.status == 1){
                return require("../../../assets/Innova/Zones/docuatro.png");
            }
            else if($vm.initialState == 3 || $vm.status == 3){
                return require("../../../assets/Innova/Zones/dpcuatro.png");
            }
            else if($vm.initialState == 0 || $vm.status == 0){
                return require("../../../assets/Innova/Zones/dcuatro.png");
            }

        }
    },
    created(){
        let $vm = this;
        $vm.initialState = $vm.status;
    }
}
</script>

<style scoped>
    .master-icon-container{
        flex:0.7;
        /* background-color: ghostwhite; */
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
    .master-icon{
        flex:0.9;
        margin-top:0%;
        margin-bottom: 0%;
        margin-left: 2%;
        margin-right: 2%;
    }
    .icon{
        flex:0.9;
        width: 90%;
        flex-direction: column;
        justify-content: center;
        align-items: center;        
    }
    .press-class {
        flex:1;
        flex-direction:column;
        justify-content: center;
        align-items: center;
    }
    .icon-container {
        flex:1;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        border-color:#dcba28;
        border-width: 2;
        padding-top: 0%;
        padding-bottom: 0%;
        padding-left: 0%;
        padding-right: 0%;
    }
    .icon-sm{
        flex:0.5;
    }
    .icon-xl{
        flex:0.9;
    }
    .icon-xl-2{
        flex:2;
    }
</style>