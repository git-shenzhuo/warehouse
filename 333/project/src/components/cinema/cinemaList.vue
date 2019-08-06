<template>
    <div>
        <ul>
            <li v-for="item in cinemalist" :key="item.id" :id="item.id" @click="goto(item.id)">
                <p>
                    <b>{{item.nm}}</b>
                    <span>{{item.sellPrice}}</span>
                    <span>元起</span>
                </p>
                <p>
                    <span>{{item.addr}}</span>
                    <span>{{item.distance}}</span>
                </p>
                <p>
                    <span>小吃</span>
                    <span>折扣卡</span>
                    <span>IMAX厅</span>
                    <span>社比全景声厅</span>
                    <span>临景音厅</span>
                </p>
                <p>
                    <span>卡</span>
                    <span>开卡特惠，首单2张减6元</span>
                </p>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
	props:['cinemalist'],
	created(){
		console.log(this.cinemalist)
	},
    data() {
        return {
            
        }
    },
    methods: {
        goto(id){
            this.$router.push({name:'detilesindex',query:{id}})
        }
    },
    
}
</script>

<style scoped>
    ul{
        margin: 0;
        padding: 0;
        margin-bottom: 53px;
    }
    ul li{
        list-style: none;
        border-top: 1px solid #eee;
        margin: 0 0 0 15px;
        padding: 13px 15px 13px 0;
    }
    li p{
        margin: 0;
        padding: 0;
    }
    li p:nth-of-type(1) b{
        font-size: 16px;
        line-height: 22px;
    }
    li p:nth-of-type(1) span{
        font-size: 18px;
        line-height: 24px;
        color: red;
        margin-left: 8px;
    }
    li p:nth-of-type(1) span:nth-of-type(2){
        font-size: 12px;
        line-height: 16px;
        margin-left: 3px;
    }
    li p:nth-of-type(2){
        display: flex;
        justify-content: space-between;
    }
    li p:nth-of-type(2) span{
        display: inline-block;
        font-size: 14px;
        line-height: 20px;
        color: #666;
    }
    li p:nth-of-type(2) span:nth-of-type(1){
        flex: 9;
        white-space:nowrap;
        overflow:hidden;
        text-overflow:ellipsis;
    }
    li p:nth-of-type(2) span:nth-of-type(2){
        flex: 1;
    }
    li p:nth-of-type(3) span{
        font-size: 12px;
        line-height: 16px;
        margin: 0 5px 0 0;
        padding: 0 3px;
        color: #589daf;
        border: 1px solid #589daf;
        border-radius: 2px;
    }
    li p:nth-of-type(4){
        font-size: 12px;
        line-height: 18px;
        color: #999;
        margin-top: 2px;
    }
    li p:nth-of-type(4) span:nth-of-type(1){
        display: inline-block;
        width: 18px;
        height: 18px;
        margin-right: 5px;
        border-radius: 2px;
        background-color: blue;
        color: #fff;
        text-align: center;

    }
</style>
