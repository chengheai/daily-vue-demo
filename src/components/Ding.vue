<template>
  <el-row>
    <el-form
      :model="form"
      :rules="rules"
      ref="ruleForm"
      label-width="100px"
      label-suffix="："
    >
      <el-form-item label="token">
        <el-input v-model="form.token"></el-input>
      </el-form-item>
      <el-form-item label="推送模式">
        <el-radio-group v-model="form.type">
          <el-radio-button label="1">链接模式</el-radio-button>
          <el-radio-button label="2">@某个人</el-radio-button>
          <el-radio-button label="3">@所有人</el-radio-button>
        </el-radio-group>
      </el-form-item>
      <div v-if="form.type === '1'">
        <el-form-item label="链接标题">
          <el-input v-model="form.title"></el-input>
        </el-form-item>
        <el-form-item label="链接内容">
          <el-input
            v-model="form.content"
            type="textarea"
            placeholder="末尾添加一个！"
          ></el-input>
        </el-form-item>
        <el-form-item label="链接地址">
          <el-input v-model="form.url"></el-input>
        </el-form-item>
      </div>
      <el-form-item label="手机号" v-else-if="form.type === '2'">
        <el-input v-model="form.phone" type="textarea"></el-input>
      </el-form-item>
      <el-form-item label="内容" v-else>
        <el-input v-model="form.content" type="textarea"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm('ruleForm')"
          >立即创建</el-button
        >
        <el-button @click="resetForm('ruleForm')">重置</el-button>
      </el-form-item>
    </el-form>
  </el-row>
</template>

<script>
import DingRobot from "ding-robot";
console.log(DingRobot);
export default {
  data() {
    return {
      form: {
        token:
          "c8d51beb420c651fc6edf0aaeb1979503d44605eebbf1a5c208b98ad592bb994",
        type: "3",
        title: "",
        content: "",
        url: "",
        phone: ""
      },
      rules: {
        token: [{ required: true, message: "请输入token", trigger: "blur" }],
        type: [{ required: true, message: "请选择推送模式", trigger: "blur" }],
        content: [
          { required: true, message: "请输入推送内容", trigger: "blur" }
        ]
      }
    };
  },
  methods: {
    submitForm(formName) {
      const { token, type, title, content, url, phone } = this.form;
      const robot = new DingRobot(this.token);
      const content1 = content.indexOf("！") > -1 ? content : `${content}！`;
      this.$refs[formName].validate(valid => {
        if (valid) {
          if (type === "1") {
            robot.link(title, content1, url);
          } else if (type === "2") {
            robot.at(phone).text(content);
          } else {
            robot.atAll(true).text(content);
          }
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

<style lang="less" scoped></style>
