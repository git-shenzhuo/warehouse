<template>
    <div class="detiles-food-box">
       <p>{{titel}}</p>
       <ul>
           <li v-for="item in food">
               <div>
                   <img :src='item.imageUrl' alt="">
               </div>
               <div class="food">
                   <p class="food-p1"><span>{{item.recommendPersonNum==2?'双人':'单人'}}</span>{{item.title}}</p>
                   <p class="food-p2">{{item.curNumberDesc}}</p>
                   <p class="food-p3">
                       <span>￥{{item.price}}</span>
                       <mt-button class="btn" size="small" type="danger">去购买</mt-button>
                   </p>
               </div>
           </li>
       </ul>
    </div>
</template>

<script>
export default {
    props:['foodlist'],
    data() {
        return {
            titel:'影院超级套餐',
            // foodlist:[{
            //     imgurl:'http://p0.meituan.net/440.0/movie/f22f47d63a6e3c63aeaac8ee04772922906960.jpg@388w_388h_1e_1c',
            //     mans:'双人',
            //     name:'85oz爆米花1桶+22oz可乐2杯',
            //     price:'43.75',
            //     nums:'2345'
            // },{
            //     imgurl:'http://p1.meituan.net/440.0/movie/3f01f2cae26f02babe1f93dbe1e8fc9b5403544.jpg@388w_388h_1e_1c',
            //     mans:'双人',
            //     name:'85oz爆米花1桶+12oz蜜桃茶2杯',
            //     price:'42.2',
            //     nums:'368'
            // },{
            //     imgurl:'http://p1.meituan.net/440.0/movie/2a185596b85642d3e6c4cbd76b9a10f3222115.jpg@388w_388h_1e_1c',
            //     mans:'双人',
            //     name:'啪啪通薯片2包+14蜜桃茶2杯',
            //     price:'28.9',
            //     nums:'139'
            // },{
            //     imgurl:'http://p0.meituan.net/440.0/movie/a9874397ffbf6f057e08d3fab74c3ac5139487.jpg@750w_750h_1e_1c',
            //     mans:'双人',
            //     name:'64oz爆米花*1+元気森林汽水*2',
            //     price:'45',
            //     nums:'23'
            // },{
            //     imgurl:'http://p0.meituan.net/440.0/movie/567869bfe6ddea748aa25327d0ea78e9197278.jpg@750w_750h_1e_1c',
            //     mans:'单人',
            //     name:'乐爆套餐: （16oz可乐*1+64oz爆米花*1）',
            //     price:'28.9',
            //     nums:'469'
            // },{
            //     imgurl:'http://p0.meituan.net/440.0/movie/4627499126d3a0b9c2207412856504a2154521.jpg@388w_388h_1e_1c',
            //     mans:'单人',
            //     name:'烤肠2根+新的果汁1杯',
            //     price:'22.5',
            //     nums:'128'
            // },{
            //     imgurl:'http://p1.meituan.net/440.0/movie/132025f71f15bc199ad8d1948ed6403f990066.jpg@388w_388h_1e_1c',
            //     mans:'多人',
            //     name:'85oz爆米花1桶+16oz可乐3杯+奥嘉莱印尼虾片/蟹片1包',
            //     price:'54.9',
            //     nums:'236'
            // }],
            // foodlist:[]
            
        }
    },
    // async created() {
    //     let {data} = await this.$axios.get('https://www.easy-mock.com/mock/5d26d4c010775e6f90913909/maoyandianying/maoyanyingyuan')
    //     console.log(data.data[0].dealList.dealList[0].imageUrl)
    //     this.foodlist = data.data[0].dealList.dealList;
    // },
    computed: {
        food(){
            return this.foodlist.dealList.dealList.map(item=>{
                item.imageUrl = item.imageUrl.replace('w.h','440.0');
                return item
            })
        }
    },
}
</script>

<style scoped>
    .detiles-food-box{
        margin: 5px 0 20px;
    }
    p{
        font-size: 16px;
        line-height: 45px;
        margin: 0 13px;
    }
    ul{
        margin: 0;
        padding: 0;
    }
    ul li{
        padding: 13px 13px;
        height: 92px;
        list-style: none;
        display: flex;
        border-top: 1px solid #ccc;
    }
    li img{
        width: 92px;
        height: 92px;
    }
    li .food{
        flex:1;
        margin-left: 10px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }
    li .food p{
        margin: 0;
    }
    li .food .food-p1{
        font-size: 14px;
        line-height: 18px;
        color: #333;
    }
    li .food .food-p1 span{
        background-color: #f90;
        color: #fff;
        margin: 0 7px 0 0;
        padding: 0 4px;
        font-size: 12px
    }
    li .food .food-p2{
        font-size: 12px;
        line-height: 16px;
        color: #999;
        text-align: right;
    }
    li .food .food-p3{
        font-size: 12px;
        line-height: 14px;
        color: #f03d37;
        display: flex;
        justify-content: space-between;
    }
    li .food .food-p3 span{
        font-size: 14px;
        line-height: 28px;
    }
    li .btn{
        width: 60px;
        height: 28px;
        font-size: 12px;
    }
</style>
