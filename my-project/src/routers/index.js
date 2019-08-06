import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)


import Login from '../components/login.vue'
import Home from '../components/home.vue'
import classiFication from '../components/classiFication.vue'
import productList from '../components/productList.vue'
import addProduct from '../components/addProduct.vue'
import usersList from '../components/usersList.vue'
import addUsers from '../components/addUsers.vue'
import orderList from '../components/orderList.vue'

const router = new VueRouter({
    routes:[
        {
            path:'/',
            redirect:{
                name:'login'
            }
        },
        {
            name:'login',
            path:'/login',
            component: Login
        },
        {
            name:'home',
            path:'/home',
            component:Home,
            children:[{
                name:'classification',
                path:'classification',
                component:classiFication
            },{
                name:'productlist',
                path:'productlist',
                component:productList
            },{
                name:'addproduct',
                path:'addproduct',
                component:addProduct
            },{
                name:'userslist',
                path:'userslist',
                component:usersList
            },{
                name:'addusers',
                path:'addusers',
                component:addUsers
            },{
                name:'orderlist',
                path:'orderlist',
                component:orderList
            }]
        }
    ]
});

export default router