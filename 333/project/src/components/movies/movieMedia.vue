<template>
    <div>
        <h3>媒体库</h3>
        <div class="media">
            <div>
                <ul :style="mediaUlWidth">
                    <li v-for="item in img">
                        <img :src="item.replace('w.h','130.180')" alt="">
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
export default {
	props:['img'],
    data() {
        return {
            mediaList:[
                {imgurl:'http://p1.meituan.net/movie/a66031be71b0238207add0b903bb106326240.jpg@250w_140h_1e_1c.webp'},
                {imgurl:'http://p0.meituan.net/movie/50bf988b72f242f785c4c985f15998fd582803.jpg@180w_140h_1e_1c.webp'},
                {imgurl:'http://p1.meituan.net/movie/3ab09178ccd3e2466a58c8c1cbf43214205900.jpg@180w_140h_1e_1c.webp'},
                {imgurl:'http://p0.meituan.net/movie/06a189eaa93993c50bae31383ac8e41f464529.jpg@180w_140h_1e_1c.webp'},
                {imgurl:'http://p1.meituan.net/movie/425706440e7956a59a98f9a38183c157342347.jpg@180w_140h_1e_1c.webp'},
                {imgurl:'http://p0.meituan.net/movie/e851e26b1f69b2243e7ccd04fe1edc54233667.jpg@180w_140h_1e_1c.webp'},
                {imgurl:'http://p0.meituan.net/movie/6a0f6ac24fbb06abc1fe5e82786fd283123877.jpg@180w_140h_1e_1c.webp'},
                {imgurl:'http://p0.meituan.net/mmdb/39ab08bc110ad1736c4817c0deeab6ab322636.jpg@180w_140h_1e_1c.webp'},
                {imgurl:'http://p1.meituan.net/movie/7e4b278a610299e0ad7938e08366e552622434.jpg@180w_140h_1e_1c.webp'},
                {imgurl:'http://p1.meituan.net/movie/d694a5f82e776db94c16a8711ba78762530436.jpg@180w_140h_1e_1c.webp'},
                {imgurl:'http://p0.meituan.net/movie/4c0641aca8a356c3c5fa90e0596f961a266943.jpg@180w_140h_1e_1c.webp'},
                {imgurl:'http://p1.meituan.net/movie/737f58815d86d826bcaa588e7a6b219d280671.jpg@180w_140h_1e_1c.webp'},
                {imgurl:'http://p1.meituan.net/movie/9671ea3b2b2445a4ff4f48e27672779d267618.jpg@180w_140h_1e_1c.webp'},
                {imgurl:'http://p1.meituan.net/movie/2237a5649b1ece15a64252399de64d7b283091.jpg@180w_140h_1e_1c.webp'},
                {imgurl:'http://p0.meituan.net/movie/cbb515a6af4c8f08ab3e8db017f3e6dc285962.jpg@180w_140h_1e_1c.webp'},
                {imgurl:'http://p1.meituan.net/movie/ee7fed8e6e1a1ccdb166bd1448fa4afb410338.jpg@180w_140h_1e_1c.webp'},
                {imgurl:'http://p1.meituan.net/mmdb/0485e30c3d32a72753d6cfe90cccb0e8653869.jpg@180w_140h_1e_1c.webp'},
                {imgurl:'http://p0.meituan.net/movie/9d1a0bf4f808a2ddc456a00a1048247c452234.jpg@180w_140h_1e_1c.webp'},
                {imgurl:'http://p1.meituan.net/movie/f52ce6fbeca59bb24a7e5ad21610f4be512957.jpg@180w_140h_1e_1c.webp'},
                {imgurl:'http://p0.meituan.net/movie/68d00e45552690189271f089d09f07b4546426.jpg@180w_140h_1e_1c.webp'},
                {imgurl:'http://p0.meituan.net/movie/c620038707b49aa063b06514a3c1b3c8425606.jpg@180w_140h_1e_1c.webp'}
            ],
            mediaUlWidth:{width:''}
        }
    },
    created() {
    	
    },
    beforeUpdate(){
        let width = this.img.length * 100
        this.mediaUlWidth.width = width + 'px'
    }
}
</script>

<style lang="scss" scoped>
h3{
    margin: 0;
    padding: 13px 15px;
}
.media{
    overflow: hidden;
    height: 72px;
    div{
        height: 75px;
        overflow: auto;
        ul{
            padding: 0;
            margin: 0;
            display: flex;
            li{
                list-style: none;
                width: 92px;
                height: 72px;
                margin-left: 8px;
                img{
                    width: 100%;
                    height: 100%;
                }
            }
        }
    }
}
    
</style>