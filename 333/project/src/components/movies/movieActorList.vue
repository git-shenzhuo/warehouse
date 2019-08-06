<template>
    <div>
        <div class="actor">
            <div>
                <ul :style="ulWidth">
                    <li v-for="item in actorList">
                        <img :src="item.imgurl" alt="">
                        <h4>{{item.name}}</h4>
                        <p>{{item.role}}</p>
                    </li>
                </ul>
            </div>
        </div>
        <p class="p"><span>全体演职人员</span><span>&gt;</span></p>
    </div>
</template>

<script>
export default {
    data() {
        return {
            actorList:[{
                imgurl:'http://p1.meituan.net/moviemachine/a36a95ccb733e324163f031538f41a32162940.jpg@130w_180h.webp',
                name:'乔恩·费儒',
                role:'导演'
            },{
                imgurl:'http://p0.meituan.net/moviemachine/06aac9253642a491754cff510a8a710b165012.jpg@130w_180h.webp',
                name:'唐纳德·格洛弗',
                role:'辛巴（配音）Simba（voice）'
            },{
                imgurl:'http://p1.meituan.net/moviemachine/773e9166d68d9857e5218c6348621e52192618.jpg@130w_180h.webp',
                name:'塞斯·罗根',
                role:'疣猪彭彭（配音）Pumbaa（voice）'
            },{
                imgurl:'http://p0.meituan.net/movie/d33e08b61c0afafa70efd50b0e39cde353444.jpg@130w_180h.webp',
                name:'詹姆斯·厄尔·琼斯',
                role:'老狮王木法沙（配音）Mufasa（voice）'
            },{
                imgurl:'http://p1.meituan.net/moviemachine/2bff3d4e33750d6e5b443b8390d0de8d185856.jpg@130w_180h.webp',
                name:'比利·艾希纳',
                role:'猫釉丁满（配音）Timon（voice）'
            },{
                imgurl:'http://p0.meituan.net/moviemachine/d0ba11accebc293690084ad93908e899190907.jpg@130w_180h.webp',
                name:'切瓦特·埃加福特',
                role:'刀疤（配音）Scar（voice）'
            },{
                imgurl:'http://p1.meituan.net/moviemachine/f00a73a0b5fdc5a7a46213e141d98976203862.jpg@130w_180h.webp',
                name:'阿尔法·伍达德',
                role:'辛巴母亲沙拉碧（配音）Sarabi（voice）'
            },{
                imgurl:'http://p0.meituan.net/movie/960bf8612b6e9f102a99f3cda355d28c56173.jpg@130w_180h.webp',
                name:'碧昂丝·诺尔斯',
                role:'娜娜（配音）Nala（voice）'
            },{
                imgurl:'http://p1.meituan.net/moviemachine/b8967b74c00f69082d91611b78bb69c9176271.jpg@130w_180h.webp',
                name:'约翰·奥利弗',
                role:'犀鸟沙祖（配音）Zazu（voice）'
            },{
                imgurl:'http://p1.meituan.net/movie/8cb63aad3387eb8a9c94a636c6c38e9628884.jpg@130w_180h.webp',
                name:'约翰·卡尼',
                role:'山魈巫师拉菲奇（配音）Rafiki（voice）'
            },{
                imgurl:'http://p1.meituan.net/moviemachine/8f39fe11e49594cc536c107a289677f9145999.jpg@130w_180h.webp',
                name:'JD·麦克拉里',
                role:'幼年辛巴（配音）Young Simba（voice）'
            },{
                imgurl:'http://p0.meituan.net/moviemachine/1e158f0fa1c16cd0ce900377bafb8317177411.jpg@130w_180h.webp',
                name:'莎哈迪·赖特·约瑟夫',
                role:'幼年娜娜（配音）Young Nala（voice）'
            },{
                imgurl:'http://p1.meituan.net/moviemachine/0e69115d8440608b8585617055b1cb5d167608.jpg@130w_180h.webp',
                name:'埃里克·安德烈',
                role:'土狼阿齐兹（配音）Azizi（voice）'
            },{
                imgurl:'http://p1.meituan.net/moviemachine/9fb4a4500fab475271e96c2327a24ac8153157.jpg@130w_180h.webp',
                name:'弗洛伦丝·卡松巴',
                role:'土狼桑琪（配音）Shenzi（voice）'
            },{
                imgurl:'http://p0.meituan.net/movie/0bf4344d1617e3051c9be9c0a38ed64c41646.jpg@130w_180h.webp',
                name:'科甘-迈克尔·凯',
                role:'卡马利（配音）Kamari（voice）'
            },{
                imgurl:'http://p0.meituan.net/movie/8af6b88c1c3e1d45d1793f09f4b3ae1e31517.jpg@130w_180h.webp',
                name:'艾米·塞德丽丝',
                role:'娜娜（配音）Nala（voice）'
            }],
            ulWidth:{width:''}
        }
    },
    created() {
        let width = this.actorList.length * 75
        this.ulWidth.width = width + 'px'
    },
}
</script>

<style lang="scss" scoped>
.actor{
    height: 165px;
    overflow: hidden;
    div{
        overflow: auto;
        height: 175px;
        ul{
            margin: 0;
            padding: 15px 0 5px 15px;
            // width: 1600px;
            display: flex;
            li{
                list-style: none;
                margin-right: 5px;
                width: 70px;
                height: 140px;
                text-align: center;
                font-size: 12px;
                line-height: 18px;
                font-weight: bolder;
                white-space:nowrap;
                overflow:hidden;
                text-overflow:ellipsis;
                img{
                    width: 70px;
                    height: 95px;
                    margin-bottom: 5px;
                }
                h4{
                    margin: 0;
                    padding: 0;
                }
                p{
                    margin: 0;
                    padding: 0;
                    color:#999;
                }
            }
        }
    }
}
.p{
    margin: 0;
    padding: 0 15px;
    font-size: 14px;
    line-height: 44px;
    display: flex;
    justify-content: space-between;
    border-top: 1px solid #ccc;
}
    
</style>