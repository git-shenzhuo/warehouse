<template>
  <div class="box">
    <div class="nav">
        <div class="nav-two">
            <div class="nav-header" ref="nav">
                <mt-navbar v-model="selected">
                <mt-tab-item
                    class="tab-item"
                    v-for="(item,index) in timelist"
                    :id="index"
                    :class="index==selected?'selectcolor':''"
                    @click.native="clickTime(index)"
                    :key="item.id"
                >{{item.time}}</mt-tab-item>
                </mt-navbar>
            </div>
        </div>
    </div>
    <mt-tab-container v-model="selected">
        <mt-tab-container-item id="1">
        </mt-tab-container-item>
    </mt-tab-container>
    
  </div>
</template>

<script>
export default {
    data() {
        return {
            selected:'0',
            times:[
                {id:1},
                {id:2},
                {id:3},
                {id:4},
                {id:5}
            ],
        }
    },
    computed: {
        timelist(){
            return this.times.map(item=>{
                let da = new Date();
                // 根据id确定时间
                da.setDate(da.getDate()+item.id-1);
                // 获取月日周
                let m = da.getMonth()+1;
                let d = da.getDate();
                let w = da.getDay();
                item.time = m + '月' + d + "日" + '周' + w;
                return item
            })
        }
    },
    methods: {
        clickTime(id){
            let left = -(60 * (id - 1))

//          this.$refs.nav.style.transform = `translateX(${left}px)`
            // this.$refs.nav.style.left = left + 'px'
        }
    },
};
</script>

<style lang='scss' scoped>
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
        
    }
    
} 
.tab-item{
        font-size: 14px !important;
        line-height: 45px;
        }
.selectcolor {
    border-bottom: 3px solid #f03d37 !important;
    color: #f03d37 !important;
    margin-bottom: -3px;

   }
</style>
