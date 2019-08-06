<template>
    <div class="box">
        <div class="btn" @click="gotocity()">
            {{searchCity}}<span></span>
        </div>
        <div class="search">
            <input type="text" placeholder="搜影院">
        </div>
    </div>
</template>

<script>
export default {
    props:['city'],
    data() {
        return {
            value:'',
            searchCity:'广州'
        }
    },
    created() {
        if(this.city != undefined){
            this.searchCity = this.city
        }   
    },
    methods: {
        gotocity(){
            this.$router.push({name:'cinemacity'})   
        }
    },
}
</script>

<style  scoped>
    .box{
        display: flex;
        height: 44px;
        background-color: #f5f5f5;
        justify-content: space-around;
    }
    .btn{
        font-size: 14px;
        line-height: 44px;
        position: relative;
    }
    .btn span{
        border: 4px solid transparent;
        border-top-color: #666;
        position: absolute;
        top: 22px;
    }
    .search input{
        width: 290px;
        height: 30px;
        margin: 0;
        text-align: center;
        background-color: #fff;
        margin: 5px 10px;
        outline: none;
        border: 0 solid #fff;
        border-radius: 5px;
    }
</style>