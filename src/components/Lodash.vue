<template>
  <div style="background: #333; color: #fff;">
    <el-row>
      <el-col :span="11">{{results}}</el-col>
      <el-col class="heals" :span="2"></el-col>
      <el-col :span="11">
        <el-col :span='24'>
          <h3>
            <el-row>_.take(results, 3)</el-row>
          </h3>
          <el-row>{{result1}}</el-row>
          <h3>
            <el-row>_.each(results, function(values, key, items){})</el-row>
          </h3>
          <el-row>{{result2}}</el-row>
        </el-col>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import { results } from './../mock/mock.js'
import _ from 'lodash';

export default {
  data() {
    return {
      results: [],
      result1: [],
      result2: []
    }
  },
  mounted() {
    this.init()
  },
  methods: {
    init() {
      this.results = results;
      this.result1 = _.take(results, 3);
      this.result2 = _.each(this.result1, function(values, key, items) {
        console.log(values)
        console.log(key)
        console.log(items)
        if (values.id === '1205') {
          values.value = false
        } else if (values.id === 'sss') {
          values.value = true
        } else {
          values.value = values.value
        }
      });
      // return (this.results = results);
    }
  }
}
</script>

<style scoped>
  .heals{
    margin: 0 5px;
    width: 10px;
    height: 3600px;
    border: 1px solid #FFC0CB;
    /* border-radius: 5px; */
    box-shadow: 0 1px 2px rgba(0, 0, 0, .3);
    background-image:linear-gradient(#FFC0CB, #FF69B4);
    animation: breath 2500ms infinite ease-in-out alternate;
  }
  @keyframes breath {
  0% {
    opacity: .2;
    box-shadow: 0 1px 2px rgba(255, 255, 255, 0.1);
  }
  100% {
    opacity: 1;
    border: 1px solid rgba(255, 192, 203, 1);
    box-shadow: 0 1px 30px rgba(255, 192, 203, 1);
  }
}
</style>
