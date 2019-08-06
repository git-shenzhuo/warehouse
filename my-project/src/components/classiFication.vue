<template>
  <div>
    <el-table :data="classData" border style="width: 100%">
      <el-table-column type="selection" width="55"></el-table-column>
      <el-table-column type="index" width="50"></el-table-column>
      <el-table-column prop="address" label="分类" sortable></el-table-column>
      <el-table-column prop="time" label="添加时间" sortable width="120"></el-table-column>
      <el-table-column label="操作" width='120'>
        <template slot-scope='scope'>
          <el-button size="mini" type="primary" icon='el-icon-edit'></el-button>
          <el-button size="mini" icon='el-icon-delete-solid' @click.native.prevent='remove(scope.$index.classData)'></el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>

export default {
    data() {
        return {
            classData:[{
                address:'手机',
                time:'2019-07-15'
            }]
        }
    },
    methods: {
      remove(index,row){
        row.splice(index,1)
      }
    },
};
</script>

<style lang="scss" scoped>
</style>