<template>
  <div>
    <el-row>
      <el-col :span="12">{{results}}</el-col>
      <el-col :span="12">
        <h2>result:
          <el-col :span='24'>123</el-col>
          <el-col :span='24'>123</el-col>
          <el-col :span='24'>123</el-col>
          <el-col :span='24'>123</el-col>
          <el-col :span='24'>123</el-col>
          <el-col :span='24'>123</el-col>
        </h2>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import { results } from './../mock/mock.js'

export default {
  data() {
    return {
      results: []
    }
  },
  mounted() {
    this.init()
  },
  methods: {
    init() {
      return (this.results = results);
    }
  }
}
</script>

<style>

</style>
