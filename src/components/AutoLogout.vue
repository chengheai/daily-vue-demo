<template>
  <div>
    <el-form
      :model="ruleForm"
      :rules="rules"
      ref="ruleForm"
      label-width="100px"
      class="demo-ruleForm"
    >
      <el-form-item label="失效时间" prop="seconds">
        <el-input-number
          v-model="ruleForm.seconds"
          :min="1"
          label="秒值"
        ></el-input-number
        >秒
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm('ruleForm')"
          >立即创建</el-button
        >
        <el-button @click="resetForm('ruleForm')">重置</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      timer: null,
      ruleForm: {
        seconds: 5
      },
      rules: {
        seconds: [{ required: true, message: "请输入失效时间", trigger: "blur" }]
      }
    };
  },
  methods: {
    handleLogout() {
      let currentTime = 0;
      let lastTime = 0
      lastTime = new Date().getTime()
      window.document.addEventListener('cilck', function() {
        console.log('clicked...')
        lastTime = new Date().getTime()
      })
      clearInterval(this.timer)
      this.timer = setInterval(() => {
        currentTime = new Date().getTime(); // 更新当前时间
        console.log('didi')
        if ((currentTime - lastTime) > (this.ruleForm.seconds * 1000)) {
          this.$notify({
            title: '提示',
            message: '时间到了，我要退出了',
            duration: 0
          });
          clearInterval(this.timer)
        }
      }, 1000)
    },
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          this.handleLogout()
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    }
  },
  mounted() {
    // this.handleLogout()
  },
  // 本页面测试，正式不加
  beforeDestroy() {
    clearInterval(this.timer)
  }
};
</script>

<style lang="less" scoped></style>
