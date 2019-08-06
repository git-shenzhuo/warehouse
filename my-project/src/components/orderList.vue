<template>
    <div>
        <el-table :data="orderlist" border style="width: 100%">
        <el-table-column type="selection" width="55"></el-table-column>
        <el-table-column type="index" width="50"></el-table-column>
        <el-table-column prop="name" label="商品名称" width="120"></el-table-column>
        <el-table-column prop="price" label="价格" sortable width="80"></el-table-column>
        <el-table-column prop="num" label="数量" width="100"></el-table-column>
        <el-table-column prop="fright" label="运费" width="100"></el-table-column>
        <el-table-column prop="amount" label="商品总额" width="80"></el-table-column>
        <el-table-column prop="rentel" label="订单总额" sortable width="120"></el-table-column>
        <el-table-column prop="time" label="下单时间" sortable width="120"></el-table-column>
        <el-table-column label="操作" width='60'>
            <template slot-scope="scope">
            <el-button size="mini" icon='el-icon-delete-solid' @click.native.prevent='remove(scope.$index, orderlist)'></el-button>
            </template>
        </el-table-column>
        </el-table>
    </div>
</template>

<script>
export default {
    data() {
        return {
            list:[{
                name:'iponth-8',
                price:9980,
                num:8,
                fright:15,
                time:'2011-09-18'
            },{
                name:'iponth-6',
                price:5980,
                num:14,
                fright:8,
                time:'2011-09-18'
            },{
                name:'iponth-9',
                price:19980,
                num:3,
                fright:75,
                time:'2011-09-18'
            }]
        }
    },
    computed: {
        orderlist(){
            return this.list.map(item=>{
                item.amount = item.price * item.num;
                item.rentel = item.amount + item.fright
                return item
            })
        }
    },
    methods:{
        remove(index,row){
            row.splice(index,1)
        }
    }
}
</script>