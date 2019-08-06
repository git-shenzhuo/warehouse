<template>
  <el-table :data="userlist" border style="width: 100%">
    <el-table-column type="selection" width="55"></el-table-column>
    <el-table-column type="index" width="50"></el-table-column>
    <el-table-column prop="name" label="用户名" width="120"></el-table-column>
    <el-table-column prop="gender" label="性别" sortable width="80"></el-table-column>
    <el-table-column prop="city" label="城市" width="100"></el-table-column>
    <el-table-column prop="signature" label="签名"></el-table-column>
    <el-table-column prop="profession" label="职业" width="80"></el-table-column>
    <el-table-column prop="graded" label="评分" sortable width="120"></el-table-column>
    <el-table-column prop="time" label="注册时间" sortable width="120"></el-table-column>
    <el-table-column label="操作" width="120">
      <template slot-scope="scope">
        <el-button size="mini" type="primary" icon="el-icon-edit"></el-button>
        <el-button
          size="mini"
          icon="el-icon-delete-solid"
          @click.native.prevent="remove(scope.$index,userlist)"
        ></el-button>
      </template>
    </el-table-column>
  </el-table>
</template>
<script>
export default {
  data() {
    return {
      userlist: [
        {
          name: "laoxie",
          gender: "boy",
          city: "guangzhou",
          signature: "laoxie",
          profession: "teache",
          graded: "345",
          time: "2016-11-11"
        },
        {
          name: "jingjing",
          gender: "girl",
          city: "guangzhou",
          signature: "wenjing",
          profession: "teache",
          graded: "35",
          time: "2016-11-11"
        }
      ],
      title1: "",
      title2: ""
    };
  },
  methods: {
    remove(index, row) {
      row.splice(index, 1);
    }
  },
  created() {
    console.log(this.$route.params.title1, this.$route.params.title2);

    this.title1 = this.$route.params.title1;
    this.title2 = this.$route.params.title2;
  }
};
</script>