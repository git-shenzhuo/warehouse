<template>
  <div>
    <el-container>
      <el-main>
          <el-table :data="tableData" border style="width: 100%">
      <el-table-column type="selection" width="55"></el-table-column>
      <el-table-column type="index" width="50"></el-table-column>
      <el-table-column prop="name" label="商品名称" width="180"></el-table-column>
      <el-table-column prop="address" label="分类" sortable width="80"></el-table-column>
      <el-table-column prop="originalprice" label="原价" width="80"></el-table-column>
      <el-table-column prop="price" label="现价" width="80"></el-table-column>
      <el-table-column prop="inventory" label="库存" width="60"></el-table-column>
      <el-table-column prop="status" label="状态" sortable width="60"></el-table-column>
      <el-table-column prop="time" label="添加时间" sortable width="120"></el-table-column>
      <el-table-column label="操作">
        <template slot-scope='scope'>
          <el-button size="mini" type="primary" icon='el-icon-edit'></el-button>
          <el-button size="mini" icon='el-icon-delete-solid' @click.native.prevent="remove(scope.$index,tableData)"></el-button>
          <el-button size="mini">下架</el-button>
        </template>
      </el-table-column>
    </el-table>
      </el-main>
      <el-footer>
          <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="currentPage"
      :page-size="10"
      layout="total, sizes, prev, pager, next, jumper"
      :total="400">
    </el-pagination>
      </el-footer>
    </el-container>   
  </div>
</template>

<script>

import {mapMutations} from 'vuex'



export default {
  data() {
    return {
      tablelist: [
        {
          name: "iponth-8",
          address: "手机",
          originalprice: 9980,
          inventory: 444,
          status: 951,
          time: "2019-07-15"
        },{
          name: "iponth-7",
          address: "手机",
          originalprice: 998,
          inventory: 344,
          status: 51,
          time: "2019-07-15"
        },{
          name: "iponth-6",
          address: "手机",
          originalprice: 990,
          inventory: 24,
          status: 91,
          time: "2019-07-15"
        },
        
      ],
      currentPage:4
    };
  },
  computed: {
    tableData() {
      return this.tablelist.map(item => {
        item.price = (item.originalprice * 0.8).toFixed(2);
        return item;
      });
    },
    ...mapMutations(['remove'])
  },
  methods: {
      handleSizeChange(){},
      handleCurrentChange(){},
  },
};
</script>

<style lang="scss" scoped>
</style>