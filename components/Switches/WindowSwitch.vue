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
            initialState: false,
        }
    },
    props: {
        status:{
            type: Number,
            default: 0
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
        switchToggle: function(){
            var data = {};
            this.initialState = !this.initialState;
            data.zone = "zones";
            data.value = this.initialState;
            this.$emit('update-status', data);
            console.log(data.zone);
        }
    },
    computed:{
        imageSource: function(){
            let $vm = this;

            if($vm.initialState == true || $vm.status == true){
                return require("../../assets/Innova/Zones/zoneson.png");
            }
            else{
                return require("../../assets/Innova/Zones/zonesoff.png");
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
        flex:1;
        /* background-color: ghostwhite; */
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
    .master-icon{
        flex:1;
        margin-top:0%;
        margin-bottom: 0%;
        margin-left: 2%;
        margin-right: 2%;
    }
    .icon{
        flex:0.89;
        margin-top: 5%;
        margin-bottom: 5%;
    }
    .icon-container {
        flex:1;
        flex-direction: column;
        justify-content: center;
        align-items: center;
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