<template>
    <div class="login-box">
        <div class="login-top">
            <img src="../assets/logo.png" alt="">
            <span>后台管理系统</span>
        </div>
        <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" class="login-form">
        <el-form-item  prop="username" class="formitem">
            <span></span>
            <el-input type="text" v-model="ruleForm.pass" class="input"></el-input>
        </el-form-item>
        <el-form-item  prop="password" class="formitem">
            <span></span>
            <el-input type="password" v-model="ruleForm.checkPass" class="input"></el-input>
        </el-form-item>
        <div class="formitem">
            <el-form-item  prop="text" class="formitem">
                <span></span>
                <el-input v-model.number="ruleForm.age" class="input"></el-input>
            </el-form-item>
        </div>
        
        <el-form-item>
            <el-button type="primary" @click="submitForm('ruleForm')">提交</el-button>
        </el-form-item>
        </el-form>
        <!-- <form class="login-form">
            <div class="formitem">
                <span></span>
                <input type="text" placeholder="用户名">
            </div>
            <div class="formitem">
                <span></span>
                <input type="passwode" placeholder="密码">
            </div>
            <div class="formtu">
                <div class="formitem">
                    <span></span>
                    <input type="text" placeholder="图形验证码">
                </div>
                <span class="span"></span>
            </div>
            <div class="formcheck">
               <p><input type="checkbox" class="checkbox"><span>记住密码</span></p>
               <a href="###">忘记密码？</a>
            </div>
            <div class="formitem">
               <button @click="goto()">登入</button>
            </div>
        </form> -->
    </div>
</template>

<script>
export default {
    data() {
        return {
            ruleForm:'',
            rules:''
        }
    },
    methods: {
        // goto(){
        //     this.$route.push({name:'home'})
        // },
        submitForm(){
            this.$router.push({name:'home'})
        }
    },
}
</script>

<style lang="scss" scoped>
    .login-box{
        width: 600px;
        height: 565px;
        background-color: #f2f2f2;
        margin: 30px auto;
        .login-top{
            text-align: center;
            font-size: 38px;
            line-height: 150px;
            color: #333;

            img{
                width: 120px;
                height: 60px;
                border: 3px solid #ccc;
                vertical-align: middle;
            }
            span{
                margin-left: 40px;
                vertical-align: middle;
            }
        }
        .login-form{
            display: flex;
            flex-direction: column;
            align-items: center;
            .formitem{
                width: 450px;
                height: 50px;
                background-color: #fff;
                margin-bottom: 20px;
                .input{
                    margin: 0;
                    padding: 0;
                    width: 390px;
                    height: 32px;
                    border: 1px solid #ccc;
                    vertical-align: middle;
                    border: 0 solid #000;
                    color: #ccc;
                }
                span{
                    display: inline-block;
                    width: 30px;
                    height: 30px;
                    margin: 10px;
                    background-color: pink;
                    vertical-align: middle;
                } 
                button{
                    width: 100%;
                    height: 100%;
                    background-color: #009688;
                    border: 0 solid #000;
                }
                
            }
            .formtu{
                width: 450px;
                display: flex;
                justify-content: space-between;
                .formitem{
                    width: 280px;
                    .input{
                        width: 210px;
                    }
                }
                .span{
                    display: inline-block;
                    width: 150px;
                    height: 50px;
                    background-color: #fff;
                }
            }
            .formcheck{
                width: 450px;
                display: flex;
                justify-content: space-between;
                align-items: center;
                .checkbox{
                    background-color: #fff;
                    width: 20px;
                    height: 20px;
                    vertical-align: middle;
                } 
                span{
                    vertical-align: middle;
                }  
            }
        }
    }
</style>