<template>
  <div>
    <el-form :model="formInline" class="demo-form-inline" label-width="220px">
      <el-form-item label="可以输入特殊字符">
        <el-input v-model="formInline.user" placeholder="不过滤特殊字符"></el-input> ===>
        <h3>{{formInline.user}}</h3>
      </el-form-item>
      <el-form-item label="禁止输入特殊字符" prop="newText">
        <el-input
          :value="formInline.newText"
          @input="e => formInline.newText = validForbid(e, 10)"
          maxlength="10"
          placeholder="过滤特殊字符长度10"
        ></el-input> ===>
        <!-- <h3>{{formInline.newText}}</h3> -->
      </el-form-item>
      <el-form-item label="活动区域">
        <el-select v-model="formInline.region" placeholder="活动区域">
          <el-option label="区域一" value="shanghai"></el-option>
          <el-option label="区域二" value="beijing"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">查询</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
/* eslint-disable */
export default {
  data() {
    return {
      formInline: {
        user: "",
        newText : "",
        region: ""
      }
    };
  },
  methods: {
    onSubmit() {
      console.log("submit!");
    }
  }
};
</script>
<style lang="less" scoped>
.demo-form-inline {
  // width: 500px;
  h3 {
    display: inline-block;
  }
  .el-input {
    width: 250px;
  }
}
</style>

