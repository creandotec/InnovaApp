<template>
    <view v-bind:class="{'icon-container':!master, 'master-icon-container':master}">
        <Pressable :on-press='() => switchToggle()'>
            <image v-bind:class="{'icon':size=='md', 'icon-sm':size=='sm', 
                'icon-xl':size=='lg', 'icon-xl-2':size=='xl', 'master-icon':master}" 
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
        name:{
            Type: Number,
            default: 0
        },
        status:{
            Type:Boolean,
            default: false
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
            if(this.master){
                data.name = "screens";
            }
            else{
                data.name = this.name;
            }
            data.value = this.initialState;
            this.$emit('update-status', data);
        }
    },
    computed:{
        imageSource: function(){
            let $vm = this;
            if($vm.status == true){
                return require("../../assets/Innova/Screens/screensdoson.png");
            }
            else{
                return require("../../assets/Innova/Screens/screensdosoff.png");
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
        flex:0.8;
        /* background-color: ghostwhite; */
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
    .master-icon{
        flex:0.85;
        margin-top:8%;
        margin-bottom: 8%;
    }
    .icon{
        flex:0.9;
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