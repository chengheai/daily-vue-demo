<template>
  <el-form
    :model="ruleForm"
    :rules="rules"
    ref="ruleForm"
    label-width="150px"
    class="demo-ruleForm"
  >
    <el-form-item label="大于当前时间" prop="mytime">
      <el-date-picker
        type="datetime"
        placeholder="选择日期"
        value-format="timestamp"
        :picker-options="pickerOptions"
        v-model="ruleForm.mytime"
      ></el-date-picker>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="submitForm('ruleForm')">立即创建</el-button>
      <el-button @click="resetForm('ruleForm')">重置</el-button>
    </el-form-item>
  </el-form>
</template>
<script>
export default {
  data() {
    var validateTime = (rule, value, callback) => {
      if (value <= Date.now()) {
        callback(new Error('选择时间必须大于当前时间'));
      } else {
        callback();
      }
    };
    return {
      pickerOptions: {
        // 限制收货时间不让选择今天以前的
        disabledDate(time) {
          return time.getTime() < Date.now() - 8.64e7;
        },
      },
      ruleForm: {
        mytime: '',
      },
      rules: {
        mytime: [
          { required: true, message: '请选择时间', trigger: 'change' },
          { validator: validateTime, trigger: 'blur' },
        ],
      },
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
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
    },
  },
};
</script>
