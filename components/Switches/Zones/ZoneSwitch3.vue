<template>
    <view v-bind:class="{'icon-container':!master, 'master-icon-container':master}">
        <Pressable :on-press='() => switchToggle()'  :on-long-press='() => turnoffZone()'>
            <image v-bind:class="{'icon':size=='md' && !master, 'icon-sm':size=='sm' && !master, 
                'icon-xl':size=='lg' && !master, 'icon-xl-2':size=='xl'&&master, 'master-icon':master}" 
                resizeMode="center"
                :source="imageSource"/>
        </Pressable>
    </view>
</template>

<script>
export default {
    data: function(){
        return{
            initialState: 0,
        }
    },
    props: {
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
            this.initialState = 0;
        },
        switchToggle: function(){
            if(this.initialState == 0 || this.initialState == 3){
                this.initialState = 1;
            }
            else{
                this.initialState = 3;
            }
        }
    },
    computed:{
        imageSource: function(){
            let $vm = this;
            
            if($vm.initialState == 1){
                return require("../../../assets/Innova/Zones/dotres.png");
            }
            else if($vm.initialState == 3){
                return require("../../../assets/Innova/Zones/dptres.png");
            }
            else if($vm.initialState == 0){
                return require("../../../assets/Innova/Zones/dtres.png");
            }

        }
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
        flex:1;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        
    }
    .icon-container {
        flex:1;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        border-color: rgba(255, 255, 0, 0.76);
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