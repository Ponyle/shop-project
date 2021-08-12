<template>
    <div class="main">
        <div v-for="(item,index) in navlist" class="mainitem"  @click="msg(index)">
           <span :class="{'active':currIndex===index}">{{item}}</span>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Navlist",
        props:{
            navlist:{
                type:Array
            },
        },
        data(){
            return{
                currIndex:0
            }
        },

        methods:{
            msg(index){
                this.currIndex = index
                this.$emit('category',index)
            }
        }
    }
</script>

<style scoped>
    .main{
        display: flex;
        text-align: center;
    }
    .mainitem{
        flex: 1;
    }
    .active{
        border-bottom: 3px solid pink;
        font-size: 16px;
    }
</style>