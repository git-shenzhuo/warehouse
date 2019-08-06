<template>
    <div class=" ticket-box">
        <mt-button type="danger" class="btn">特惠购票</mt-button>
        <div class="jieshao" ref="jieshao">
            <p class="p1" ref='jieshaoP'>{{dsc}}</p>
            <p class="p2" @click="clickIsan"><span ref="jieshaoSpan"></span></p>
        </div>
    </div>
</template>

<script>

export default {
	props:['dsc'],
    data() {
        return {
            jieshao:'',
            isan:true,

        }
    },
    methods: {
        clickIsan(){
            if(this.isan){
                this.$refs.jieshao.style.height = (this.$refs.jieshaoP.offsetHeight + 20) + 'px';
                this.$refs.jieshaoSpan.style.transform = 'translateY(-5px) rotate(45deg)';
                this.$refs.jieshaoSpan.style.borderRightColor = 'transparent';
                this.$refs.jieshaoSpan.style.borderBottomColor = 'transparent';
                this.$refs.jieshaoSpan.style.borderTopColor = '#999';this.$refs.jieshaoSpan.style.borderLeftColor = '#999';
                this.isan = !this.isan
            }else{
                this.$refs.jieshao.style.height = 80 + 'px'
                this.$refs.jieshaoSpan.style.transform = 'translateY(-5px) rotate(45deg)';
                this.$refs.jieshaoSpan.style.borderRightColor = '#999';
                this.$refs.jieshaoSpan.style.borderBottomColor = '#999';
                this.$refs.jieshaoSpan.style.borderTopColor = 'transparent';this.$refs.jieshaoSpan.style.borderLeftColor = 'transparent';
                this.isan = !this.isan
            }
        }
    },
}
</script>

<style lang="scss" scoped>
.ticket-box{
    margin: 0 0 10px;
    padding: 16px 16px 0;
    .btn{
        width: 385px;
        border-radius: 5px;
        margin-bottom: 10px;
        text-align: center;
    }
    .jieshao{
    	font-size: .3rem;
    	line-height: .4rem;
    	color: #555;
        height: 80px;
        overflow: hidden;
        position: relative;
        .p1{
            font-size: 16px;
            line-height: 20px;
            margin:0;
            padding:0;
        }
        .p2{
            position: absolute;
            bottom: 0;
            left: 0;
            right: 0;
            padding-top: 10px;
            box-sizing: border-box;
            background-color: #fff;
            height: 20px;
            span{
                display: inline-block;
                margin-left: 185px;
                width: 8px;
                height: 8px;
                transform-origin: 50% 50%;
                transform: rotate(45deg) translateY(-5px);
                border: 1px solid transparent;
                border-right-color: #999;
                border-bottom-color: #999;
            }
        }
    }
}
    
</style>