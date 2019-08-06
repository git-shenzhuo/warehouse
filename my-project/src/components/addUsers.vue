<template>
  <el-form
    :model="ruleForm"
    :rules="rules"
    ref="ruleForm"
    label-width="100px"
    class="demo-ruleForm"
  >
    <el-form-item label="用户名" prop="username">
      <el-input v-model="ruleForm.username"></el-input>
    </el-form-item>
    <el-form-item label="昵称" prop="name">
      <el-input v-model="ruleForm.name"></el-input>
    </el-form-item>
    <el-form-item label="密码" prop="password">
      <el-input v-model="ruleForm.password"></el-input>
    </el-form-item>
    <el-form-item label="确认密码" prop="pass">
      <el-input v-model="ruleForm.pass"></el-input>
    </el-form-item>
    <el-row :gutter="20">
      <el-col :span="11">
        <el-form-item label="手机" prop="tel">
          <el-input v-model="ruleForm.tel"></el-input>
        </el-form-item>
      </el-col>
      <el-col :span="11">
        <el-form-item label="性别">
          <el-select v-model="ruleForm.region" placeholder="请选择">
            <el-option label="男" value="nan"></el-option>
            <el-option label="女" value="nv"></el-option>
          </el-select>
        </el-form-item>
      </el-col>
    </el-row>
    <el-form-item label="生日">
      <el-col :span="11">
        <el-date-picker type="date" placeholder="选择日期" v-model="ruleForm.date" style="width: 100%;"></el-date-picker>
      </el-col>
    </el-form-item>
    <el-form-item label="邮箱地址" prop="email">
      <el-input v-model="ruleForm.email"></el-input>
    </el-form-item>
    <el-form-item label="备注" prop="desc">
    <el-input type="textarea" v-model="ruleForm.desc"></el-input>
  </el-form-item>
  <el-form-item>
    <el-button type="primary" @click="submitForm('ruleForm')">确认</el-button>
  </el-form-item>
  </el-form>
</template>

<script>
export default {
   data() {
      return {
        ruleForm: {
        username:'',
          name: '',
          password: '',
          pass:'',
          tel: '',
          region: '',
          date:'',
          email: '',
          desc: ''
        },
        rules: {
          username: [
            { required: true, message: '请输入用户名', trigger: 'blur' },
            { min: 3, max: 8, message: '长度在 3 到 8 个字符', trigger: 'blur' }
          ],
          name: [
            { required: true, message: '请输入昵称', trigger: 'blur' }
          ],
          password: [
            {  required: true, message: '请输入密码', trigger: 'blur' }
          ],
          pass: [
            {  required: true, message: '请确认密码', trigger: 'blur' }
          ],
          tel: [
            {  required: true, message: '请输入手机号', trigger: 'blur' }
          ],
          region: [
            {  required: true, message: '请选择', trigger: 'blur' }
          ],
          data: [
            { type: 'date', required: true, message: '请选择生日', trigger: 'blur' }
          ],
          email: [
            { required: true, message: '请输入邮箱', trigger: 'blur' }
          ],
          desc: [
            { required: false, message: '请填写备注', trigger: 'blur' }
          ]
        }
      };
    },
    methods: {
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            alert('submit!');
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      }
    }
  
};
</script>

<style scoped>
.demo-ruleForm{
    width: 700px;
}
</style>


