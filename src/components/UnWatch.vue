<template>
  <div>
    <el-form :inline="true" :model="formInline" class="demo-form-inline">
  <el-form-item label="审批人">
    <el-input v-model="formInline.user" placeholder="审批人"></el-input>
  </el-form-item>
  <el-form-item label="活动区域">
    <el-select v-model="formInline.region" placeholder="活动区域">
      <el-option label="区域一" value="shanghai"></el-option>
      <el-option label="区域二" value="beijing"></el-option>
    </el-select>
  </el-form-item>
  <el-form-item>
    <el-button type="primary" @click="onSubmit(1)">watch</el-button>
    <el-button type="primary" :loading="isWatching">watching</el-button>
    <el-button type="primary" @click="onSubmit(2)">unwatch</el-button>
  </el-form-item>
</el-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isWatching: true,
      formInline: {
        user: "",
        region: ""
      }
    };
  },
  watch: {
    formInline: {
      deep: true,
      handler() {
        this.isWatching = true;
      }
    }
  },
  methods: {
    onSubmit(type) {
      if (type === 1) {
      } else {
      }
    }
  },
  created() {
    var unwatch = this.$watch();
  }
};
</script>

<style lang="less" scoped>

</style>
