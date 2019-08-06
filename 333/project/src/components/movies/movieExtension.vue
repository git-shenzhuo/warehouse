<template>
    <div class="extension-box">
        <p><span>正版周边</span><span>全部   &gt;</span></p>
        <div class="extension">
            <div>
                <ul>
                    <li>
                        <img src="http://p0.meituan.net/movie/647c60cec01e9e3f2e43c129566782d4164501.jpg.webp">
                        <h4></h4>
                        <p>
                            <span class="spanColor">39.9</span>
                            <span class="spanColor">元</span>
                            <span>零售价</span>
                            <span>49.9</span>
                            <span>元</span>
                        </p>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            extensionList:[{
                imgurl:'http://p0.meituan.net/movie/6370d6b8604cf763dc2f90e6b7351fee186227.jpg.webp',
                name:'狮子王双语版',
                price:'39.5',
                retailPrice:'45'
            },{
                imgurl:'http://p0.meituan.net/movie/13b08f7796b5844311bb9c51b96a6ba1119952.jpg.webp',
                name:'狮子王吸管杯',
                price:'39',
                retailPrice:'99'
            },{
                imgurl:'http://p0.meituan.net/movie/7f076a6d5146b1e9d5c546df522c80e171088.jpg.webp',
                name:'丛林爆米花桶',
                price:'49',
                retailPrice:'99'
            },{
                imgurl:'http://p0.meituan.net/movie/1466984d675569b565cd1b1bd3df947093981.jpg.webp',
                name:'雄狮钥匙扣',
                price:'49',
                retailPrice:'79'
            },{
                imgurl:'http://p1.meituan.net/movie/4a919a85cbb676d742c9e4a3e61124de115348.jpg.webp',
                name:'狮子王爆米花桶',
                price:'39',
                retailPrice:'99'
            },{
                imgurl:'http://p1.meituan.net/movie/5abe9c95a91974a120fef81a8981a94a277636.jpg.webp',
                name:'狮子王钥匙扣杯',
                price:'39',
                retailPrice:'99'
            },{
                imgurl:'http://p1.meituan.net/movie/b1e393d7c79bcd05f82f6697a83c3d9f640078.jpg.webp',
                name:'狮子王儿童帽子',
                price:'96',
                retailPrice:'99'
            },{
                imgurl:'http://p0.meituan.net/movie/93ec0de42e35a65baebdb579af48f8ca85414.jpg.webp',
                name:'狮子王运动水杯',
                price:'39',
                retailPrice:'99'
            },{
                imgurl:'http://p0.meituan.net/movie/4ce3aa58b499a624275565fbf9c9f76b159645.jpg.webp',
                name:'狮子王辛巴帽',
                price:'65',
                retailPrice:'99'
            },{
                imgurl:'http://p1.meituan.net/movie/040a9774ba2e4d4448d68735eb4c1089142164.jpg.webp',
                name:'狮子王英文原版',
                price:'39',
                retailPrice:'49'
            },{
                imgurl:'http://p0.meituan.net/movie/13c60c49ce9b0f553fce3a16d9463c2c190275.jpg.webp',
                name:'狮子王娜娜帽',
                price:'65',
                retailPrice:'99'
            },{
                imgurl:'http://p1.meituan.net/movie/d32cdd7f9e40c00ec081949d1727c0b1285730.jpg.webp',
                name:'狮子王电影小说',
                price:'65',
                retailPrice:'67'
            },{
                imgurl:'http://p1.meituan.net/movie/07519c884c1e9f58ad851b4155d341eb112988.jpg.webp',
                name:'6寸雄狮毛绒公仔',
                price:'79',
                retailPrice:'99'
            },{
                imgurl:'http://p0.meituan.net/movie/ab2e2cba9c431d2f7f56ee9142f8fadd121829.jpg.webp',
                name:'10寸雄狮手偶',
                price:'199',
                retailPrice:'259'
            },{
                imgurl:'http://p0.meituan.net/movie/e44fc00cffe5509980b66c5e1364f61d250634.jpg.webp',
                name:'狮子王电影设定集',
                price:'338',
                retailPrice:'375'
            }]
        }
    },
}
</script>

<style lang="scss" scoped>
    .extension-box{
        margin: 0 0 10px;
        padding: 0 15px 10px;
        p{
            margin: 0;
            padding: 0;
            font-size: 14px;
            line-height: 40px;
            color: #999;
            display: flex;
            justify-content: space-between;
        }
        .extension{
            height: 215px;
            margin-right: 10px;
            overflow: hidden;
            div{
                height: 220px;
                overflow: auto;
                ul{
                    height: 215px;
                    display: flex;
                    margin: 0;
                    padding: 0;
                    li{
                        list-style: none;
                        width: 130px;
                        height: 200px;
                        margin-right: 10px;
                        text-align: center;
                        img{
                            width: 130px;
                            height: 130px;
                        }
                        h4{
                            font-size: 16px;
                            line-height: 44px;
                        }
                        p{
                            font-size: 0px;
                            color: #999;
                            span{
                                font-size: 12px;
                                line-height: 14px;
                            }
                            .spanColor{
                                color:#e54847;
                            }
                        }
                    }
                }
            }
        }
    }
</style>

