import vue from 'vue'
import vueRouter from 'vue-router'
vue.use(vueRouter)


const routes=[
    {
        path:"",
        redirect:"/home"
    },
    {
        path:"/home",
        component:()=>import('@/msg.vue')
    },
    {
        path:"/num",
        component:()=>import('@/telpone.vue')
    },
    {
        path:"/pyq",
        component:()=>import('@/pyq.vue')
    },  
    {
        path:"/myinfo",
        component:()=>import('@/my.vue')
    }
]
const router = new vueRouter({
    routes,
    mode:'history'
})



export default router