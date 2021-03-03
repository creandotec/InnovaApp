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
            this.initialState = !this.initialState;
            console.log(this.initialState);
        }
    },
    computed:{
        imageSource: function(){
            let $vm = this;
            
            if($vm.initialState == true){
                return require("../../assets/Innova/Screens/screensmasteron.png");
            }
            else{
                return require("../../assets/Innova/Screens/screensmasteroff.png");
            }
        }
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
        flex:0.85;
    }
    .icon-xl-2{
        flex:2;
    }
</style>