<template>
    <view v-bind:class="{'icon-container':!master, 'master-icon-container':master}">
        <Pressable class="press-class" :on-press='() => switchToggle()'>
            <image v-bind:class="{'icon':size=='md' && !master, 'icon-sm':size=='sm' && !master, 
                'icon-xl':size=='lg' && !master, 'icon-xl-2':size=='xl'&&master, 'master-icon':master}" 
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
            data.name = this.name;
            data.value = this.initialState;
            this.$emit('update-status', data);;
        }
    },
    computed:{
        imageSource: function(){
            let $vm = this;
            
            if($vm.status == true){
                return require("../../assets/Innova/Climate/acon.png");
            }
            else{
                return require("../../assets/Innova/Climate/acoff.png");
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
        flex:0.8;
        width: 80%;
        flex-direction: column;
        justify-content: center;
        align-items: center; 
    }
    .icon-container {
        flex:1;
        flex-direction: row;
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
    .press-class {
        flex:1;
        flex-direction:column;
        justify-content: center;
        align-items: center;
        padding-top:1%;
        padding-bottom: 1%;
    }
</style>