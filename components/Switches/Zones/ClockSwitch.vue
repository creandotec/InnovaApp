<template>
    <view v-bind:class="{'icon-container':!master, 'master-icon-container':master}">
        <Pressable :on-press='() => switchToggle()'>
            <image v-bind:class="{'icon':size=='md' && !master, 'icon-sm':size=='sm' && !master, 
                'icon-xl':size=='lg' && !master, 'icon-xl-2':size=='xl'&&master, 'master-icon':master}" 
                resizeMode="contain" 
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
            this.initialState = !this.initialState;
        }
    },
    computed:{
        imageSource: function(){
            let $vm = this;
            
            if($vm.initialState == false){
                return require("../../../assets/Innova/Zones/clockofficon.png");
            }
            else if($vm.initialState == true){
                return require("../../../assets/Innova/Zones/clockonicon.png");
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
        width: 100;
        height:100;
        
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