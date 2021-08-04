
<template>
<div>
  <el-form
    :model="ruleForm"
    class="form"
    status-icon
    label-suffix=":"
    :rules="rules"
    ref="ruleForm"
    label-width="100px"
  >
    <el-form-item label="正则">
      <el-input type="text" v-model="reg">
        <template slot="prepend">/</template>
        <template slot="append">/</template>
      </el-input>
      转化后：{{format}}
    </el-form-item>
    <el-form-item label="信息">
      <el-input type="text" v-model="msg"></el-input>
    </el-form-item>
    <el-form-item label="字段" prop="pass">
      <el-input type="text" v-model="ruleForm.pass"></el-input>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="submitForm('ruleForm')">提交</el-button>
      <el-button @click="resetForm('ruleForm')">重置</el-button>
    </el-form-item>
  </el-form>
</div>

</template>
<script>
export default {
  name: 'Reg',
  data() {
    return {
      // eslint-disable-next-line no-useless-escape
      reg: `^1[3-9]\\d{9}$`,
      msg: "请输入正确的手机号",
      ruleForm: {
        pass: ""
      },
      // rules: {pass: [
      //   { required: true, message: '这是必填项', trigger: 'blur' },
      //   { pattern: /^1[3-9]\d{9}$/, message: '请输入正确的手机号', trigger: "blur" }]}
    }
  },
  computed: {
    format() {
      // eslint-disable-next-line no-eval
      return eval(`/${this.reg}/`)
    },
    rules() {
      return {pass: [
        { required: true, message: '这是必填项', trigger: 'blur' },
        // eslint-disable-next-line no-eval
        { pattern: this.format, message: this.msg, trigger: "change" }]}
    }
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          alert("submit!");
        } else {
          console.log("error submit!!");
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
<style lang="less" scoped>
.form{
  width: 500px;
  margin: 50px auto;
}

</style>
