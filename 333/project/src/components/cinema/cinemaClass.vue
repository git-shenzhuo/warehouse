<template>
    <div class="box">
        <div @click="gotoregion">全城<span></span></div>
        <div @click="gotobread">品牌<span></span></div>
        <div @click="gotofeatures">特色<span></span></div>
    </div>
</template>

<script>
export default {
    methods: {
        gotoregion(){

        },
        gotobread(){

        },
        gotofeatures(){

        }
    },
}
</script>

<style  scoped>
    .box{
        height: 20px;
        display: flex;
        font-size: 14px;
        line-height: 20px;
        margin: 10px 0;
    }
    .box div{
        position: relative;
        width: 138px;
        text-align: center;
    }
    .box div:nth-of-type(2){
        border-left: 1px solid #ddd;
        border-right: 1px solid #ddd;
    }
    .box div span{
        position: absolute;
        border: 4px solid transparent;
        border-top-color: #666;
        top: 8px;
        margin-left: 3px;
    }
</style>

