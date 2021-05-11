<template>
    <view v-bind:class="{'icon-container':!master, 'master-icon-container':master}">
        <Pressable class="press-class" :on-press='() => switchToggle()'>
            <image v-bind:class="{'icon':size=='md' && !master, 'icon-sm':size=='sm' && !master, 
                'icon-xl':size=='lg' && !master, 'icon-xl-2':size=='xl'&&!master, 'master-icon':master}" 
                :resizeMode="resizeStyle" 
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
        },
        louverNumber: {
            Type: Number,
            default: 0,
        }
    },
    methods:{
        switchToggle: function(){
            var data = {};
            this.initialState = !this.initialState;
            if(this.master){
                data.name = "louvers";
            }
            else{
                data.name = this.louverNumber;
            }
            data.value = this.initialState;
            this.$emit('update-status', data);
            // console.log(data.zone);
        }
    },
    computed:{
        imageSource: function(){
            let $vm = this;
            if($vm.initialState == true || $vm.status == true){
                return require("../../assets/Innova/Louvers/louverson.png");
            }
            else{
                return require("../../assets/Innova/Louvers/louversoff.png");
            }
        },
        resizeStyle: function(){
            let $vm = this;
            if(!$vm.master)
            {
                return "contain";
            }
            else{
                return "stretch";
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
        flex-direction: column;
    }
    .master-icon{
        flex:0.8;
        width: 70%;
        flex-direction: column;
        justify-content: center;
        align-items: center;        
    }
    .icon{
        flex:0.8;
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