<template>
    <view v-bind:class="{'icon-container':!master, 'master-icon-container':master}">
        <Pressable class="press-class" :on-press='() => switchToggle()'>
            <image v-bind:class="{'icon':size=='md' && !master, 'icon-sm':size=='sm' && !master, 
                'icon-xl':size=='lg' && !master, 'icon-xl-2':size=='xl' && !master, 'master-icon':master}"  
                resizeMode="stretch"
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
        status: {
            Type: Boolean, 
            default: false
        },
        name: {
            Type: Number,
            default: 10
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
            data.name = this.name;
            data.value = this.initialState;
            this.$emit('update-status', data);
        }
    },
    computed:{
        imageSource: function(){
            let $vm = this;
            
            if($vm.initialState == true || $vm.status == true){
                return require("../../assets/Innova/Louvers/suntrackeron.png");
            }
            else{
                return require("../../assets/Innova/Louvers/suntrackeroff.png");
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
        padding-bottom: 10%;
    }
    .master-icon{
        flex:0.7;
        width: 35%;
    }
    .icon{
        flex:0.9;
    }
    .press-class {
        flex:1;
        flex-direction:column;
        justify-content: center;
        align-items: center;
    }
    .icon-container {
        flex:1;
        flex-direction: column;
    }
    .icon-sm{
        flex:0.5;
    }
    .icon-xl{
        flex:1;
    }
    .icon-xl-2{
        flex:2;
    }
</style>