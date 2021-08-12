<template>
        <div class="tarbaritem" @click="changeItem">
           <div v-if="!isActive"><slot name="icon"></slot></div>
            <div v-else><slot name="active_text"></slot></div>
            <div  :style="isColor"><slot name="text" ></slot></div>
        </div>
</template>

<script>
export default {
      props:
      {
      color:{
          default:'green',
          type:String
      },
      path:String
      
  },
    data(){
        return{
              
        }
    },
    computed:{
            isActive(){
                // console.log(this.$route.path,this.path);
                return this.$route.path.indexOf(this.path)!==-1;

             
            },
            isColor(){
                return this.isActive?{color:this.color}:{}
            }
    },

  methods:{
      changeItem(){
    
        //   this.$router.replace(this.path)
//         this.$router.push(this.path, () => {}, (e) => {
//     console.log('输出报错',e) 
// })
this.$router.push(this.path).catch(err => {
    console.log('输出报错','不用管')
})
          
      }
  }

}
</script>

<style>
.tarbaritem{
    flex: 1;
    height: 49px;
    text-align: center;
  
}

.tarbaritem img{
    width: 24px;
    height: 24px;
}
</style>