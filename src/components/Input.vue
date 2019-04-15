<template>
  <div>
    <el-form :model="form" class="demo-form-inline" label-width="220px">
      <el-form-item label="可以输入特殊字符">
        <el-input v-model="form.user" placeholder="不过滤特殊字符"></el-input>===>
        <h3>{{form.user}}</h3>
      </el-form-item>
      <el-form-item label="-_-禁止输入特殊字符" prop="newText">
        <el-input
          :value="form.name"
          @input="e => form.name = validSe(e)"
          maxlength="10"
          placeholder="过滤特殊字符长度10"
        ></el-input>===>
        <h3>{{form.name}}</h3>
      </el-form-item>
      <el-form-item label="活动区域">
        <el-select v-model="form.region" placeholder="活动区域">
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
      form: {
        user: "",
        newText: "",
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

