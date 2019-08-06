<template>
  <div>
    <el-form
      :model="ruleForm"
      :rules="rules"
      ref="ruleForm"
      label-width="100px"
      class="demo-ruleForm"
    >
      <el-form-item label="影片名称" prop="name">
        <el-input v-model="ruleForm.name"></el-input>
      </el-form-item>
      <el-form-item label="影片介绍" prop="title">
        <el-input v-model="ruleForm.title"></el-input>
      </el-form-item>
      <el-row :gutter="20">
        <el-col :span="11">
          <el-form-item label="影片价格" prop="price">
            <el-input v-model="ruleForm.price"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="11">
          <el-form-item label="折扣价格" prop="morket">
            <el-input v-model="ruleForm.morket"></el-input>
          </el-form-item>
        </el-col>
      </el-row>
      <el-form-item label="影片类型">
        <el-select v-model="ruleForm.region" placeholder="请选择">
          <el-option label="剧情" value="juqing"></el-option>
          <el-option label="动作" value="dongzuo"></el-option>
          <el-option label="悬疑" value="xuanyi"></el-option>
          <el-option label="爱情" value="anqing"></el-option>
          <el-option label="动画" value="donghua"></el-option>
          <el-option label="喜剧" value="xiju"></el-option>
          <el-option label="恐怖" value="kongbu"></el-option>
          <el-option label="都市" value="dushi"></el-option>
          <el-option label="R21" value="r21"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="影片图片" prop="img">
        <el-row :gutter="20">
          <el-col :span="5">
            <el-upload
              action="https://jsonplaceholder.typicode.com/posts/"
              list-type="picture-card"
            >
              <i class="el-icon-plus"></i>
            </el-upload>
            <el-dialog :visible.sync="dialogVisible">
              <img width="100%" :src="dialogImageUrl" alt />
            </el-dialog>
          </el-col>
          <el-col :span="5">
            <el-upload
              action="https://jsonplaceholder.typicode.com/posts/"
              list-type="picture-card"
            >
              <i class="el-icon-plus"></i>
            </el-upload>
            <el-dialog :visible.sync="dialogVisible">
              <img width="100%" :src="dialogImageUrl" alt />
            </el-dialog>
          </el-col>
          <el-col :span="5">
            <el-upload
              action="https://jsonplaceholder.typicode.com/posts/"
              list-type="picture-card"
            >
              <i class="el-icon-plus"></i>
            </el-upload>
            <el-dialog :visible.sync="dialogVisible">
              <img width="100%" :src="dialogImageUrl" alt />
            </el-dialog>
          </el-col>
          <el-col :span="5">
            <el-upload
              action="https://jsonplaceholder.typicode.com/posts/"
              list-type="picture-card"
            >
              <i class="el-icon-plus"></i>
            </el-upload>
            <el-dialog :visible.sync="dialogVisible">
              <img width="100%" :src="dialogImageUrl" alt />
            </el-dialog>
          </el-col>
        </el-row>
      </el-form-item>
      <el-form-item label="上架">
        <el-row>
          <el-col :span="3">
            <el-switch v-model="value" active-color="#13ce66" inactive-color="#ccc"></el-switch>
          </el-col>
        </el-row>
      </el-form-item>
      <el-form-item label="影片描述" prop="desc">
        <el-input type="textarea" v-model="ruleForm.desc"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm('ruleForm')">确认</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      rules: "",
      ruleForm: "",
      value: true,
      dialogVisible:false,
        dialogImageUrl:''
    };
  }
};
</script>