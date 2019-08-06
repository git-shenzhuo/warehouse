<template>
    <div>
        <div class="nav">
            <div class="nav-two">
                <div class="nav-header" ref="nav">
                    <mt-navbar v-model="selected">
                        <mt-tab-item class="tab-item"
                        v-for="(item,index) in timelist" 
                        :id="index"
                        :class="index==selected?'selectcolor':''"
                        @click.native='clickTime(index)'
                        :key="item.id"
                        ><span class="date">{{item.dateShow}}</span></mt-tab-item>
                    </mt-navbar>
                </div>
            </div>
        </div>
        <!--<mt-tab-container v-model="selected">-->
        <mt-tab-container>
            <!--<mt-tab-container-item id="1">-->
            <mt-tab-container-item>
                <ul>
                    <li v-for="item in home">
                        <div class="left">
                            <p>{{item.tm}}</p>
                            <p>{{endtime}}散场</p>
                        </div>
                        <div class="lang">
                            <p>{{item.lang}}&nbsp{{item.tp}}</p>
                            <p>{{item.th}}</p>
                        </div>
                        <div class="fdw">
                            <p>￥<span>{{item.vipPrice ? (item.vipPrice * 1.2).toFixed(0)+'.9': ('39.9' * 1.2).toFixed(0)+'.9'}}</span></p>
                            <p class="zdw">
                                <span class="zk">折扣卡</span>
                                <span class="vip">￥{{item.vipPrice?item.vipPrice:'39.9'}}</span>
                            </p>
                        </div>
                        <div>
                            <mt-button size="small" type="danger" class="buy">购票</mt-button>
                        </div>
                    </li>
                </ul>
            </mt-tab-container-item>
        </mt-tab-container>
    </div>
</template>

<script>
export default {
    data() {
        return {
        	endtime:'',
        	timelist:[],
            selected:'0',
            home:[],
            times:[
                {id:1},
                {id:2},
                {id:3},
                {id:4},
                {id:5}
            ],
            list:[{
                start:"10:30",
                dismissal:'12:40',
                screens:'2D',
                price:39.90       
            },{
                start:"11:30",
                dismissal:'13:40',
                screens:'3D',
                price:39.90       
            },{
                start:"13:00",
                dismissal:'15:10',
                screens:'2D',
                price:39.90       
            },{
                start:"13:50",
                dismissal:'16:00',
                screens:'3D',
                price:39.90       
            },{
                start:"15:30",
                dismissal:'17:40',
                screens:'2D',
                price:39.90       
            }]
        }
    },
    computed: {
//      timelist(){
//          return this.times.map(item=>{
//              let da = new Date();
//              // 根据id确定时间
//              da.setDate(da.getDate()+item.id-1);
//              // 获取月日周
//              let m = da.getMonth()+1;
//              let d = da.getDate();
//              let w = da.getDay();
//              item.time = m + '月' + d + "日" + '周' + w;
//              return item
//          })
//      },
	
        select(){
    		return this.$store.state.selectmv
    	},
    	timer(){
    		return this.$store.state.timer
    	},
    	//计算时间
    	
    },
    methods: {
//      // loadMore() {
//      // this.loading = true;
//      //     setTimeout(() => {
//      //         let last = this.list[this.list.length - 1];
//      //         for (let i = 1; i <= 4; i++) {
//      //         this.list.push(last + i);
//      //         }
//      //         this.loading = false;
//      //     }, 2500);
//      // },
        clickTime(index){
        	this.selected = index;
        	this.home = this.timelist[index].plist
        	console.log(index,this.home)
//          let left = 60 * (index - 1)
//          this.$refs.nav.style.marginLeft = -left + 'px';
			//点击时间切换影厅信息
			
        }
    },
    watch:{
    	select(to,from){
    		this.timelist = to;
    		this.home = this.timelist[0].plist
    		//切换影片时重置选择日期
    		this.selected = '0'
    	},
    	timer(to,from){
    		//计算时间
    		this.endtime = to
    	}
    },

}
</script>

<style lang='scss' scoped>
.desc{
	position: absolute;
}
.zk{
	float: left;
	display: block;
	padding: 2px 0 2px 2px;
	font-size: 12px;
	/*transform: scale(0.8);*/
}
.vip{
	padding: 2px 0 2px 2px;
	float: left;
	display: block;
}
.lang{
	margin-left: 20px;
}
.left{
	width: 58px;
	flex:0
}
.buy{
	background: #f03d37;
	position: relative;
	bottom: 22px;
	left: 10px;
	width: 50px;
	height: 27px;
	font-size: 12px;
}
.fdw{
	position: relative;
}
.zdw{
	border-radius: 2px;
	width: 125px;
	position: absolute;
	top: 5px;
	right: -50px;
}
.mint-navbar{
	display: block;
}
.mint-tab-item {
	display: block;
	width: 90px;
	float: left;
	margin-left: 15px;
}
.nav{

    border-top: 1px solid #ccc; 
    height: 50px;
    overflow: hidden;
    .nav-two{
        overflow: auto;
        height: 60px;
        .nav-header{
        width: 600px;
        }
        .tab-item{
        font-size: 14px;
        line-height: 45px;
        display: block;
        }
        .selectcolor{
        	color: #f03d37;
        	border-bottom: 2px solid #f03d37;
        }
    }
}
ul{
    margin: 0;
    padding: 0;
}
ul li{
    list-style: none;
    border-bottom: 1px solid #ccc;
    display: flex;
    margin: 0 0 0 12px;
    padding: 17px 0;
    color: #333;
    height: 45px;
}
li div{
    flex: 1;
}
li div p{
    margin: 0;
}
li div:nth-of-type(1) p:nth-of-type(1){
    font-size: 19px;
    font-weight: bolder;
}
li div:nth-of-type(1) p:nth-of-type(2){
    color: #999;
    font-size: 12px;
    margin: 10px 0;
}
li div:nth-of-type(2) p:nth-of-type(1){
	margin-top: 5px;
    font-size: 13px;
    color: #333;
}
li div:nth-of-type(2) p:nth-of-type(2){
    color: #999;
    font-size: 12px;
    margin: 7px 0 0;
}
li div:nth-of-type(3) p:nth-of-type(1){
    font-size: 16px;
    color: #f03d37;
}
li div:nth-of-type(3) p:nth-of-type(1) span{
    font-size: 20px;
}
li div:nth-of-type(3) p:nth-of-type(2){
    font-size: 0;
    transform:scale(0.6) 
}
li div:nth-of-type(3) p:nth-of-type(2) span{
    font-size: 18px;
    line-height: 14px;
    border: 1px solid #ff9900; 
}
li div:nth-of-type(3) p:nth-of-type(2) span:nth-of-type(1){
    background-color: #ff9900;
    color: #fff;
}
li div:nth-of-type(3) p:nth-of-type(2) span:nth-of-type(2){
    background-color: #fff;
    color: #ff9900;
}
li div:nth-of-type(4) {
    text-align: center;
    line-height: 90px;
}
/*.zprice{
	position: relative;
	left: 57px;
	top: -13px;
}*/
.date{
	
	font-size: 14px;
}


</style>
