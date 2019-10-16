<template>
  <div>
    <el-form :model="ruleForm" ref="ruleForm" label-width="100px" class="demo-ruleForm">
      <div v-for="(item, index) in ruleForm.list" :key="index">
        <el-select v-model="item.type" @focus="handle" placeholder="请选择">
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :disabled="item.disabled"
            :value="item.value"
          ></el-option>
        </el-select>
        <i v-if="index === 0 && ruleForm.list[0].type !== '' && ruleForm.list.length<2" class="el-icon-circle-plus-outline ico" @click="add"></i>
        <i v-if="index !==0" class="el-icon-remove-outline ico" @click="del(index)"></i>
      </div>
    </el-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      ruleForm: {
        list: [
          {
            type: '',
          },
        ],
      },
      options: [
        {
          label: '中国',
          value: 1,
        },
        {
          label: '美国',
          value: 2,
        },
      ],
    };
  },
  methods:{
    handle(){
      if(this.ruleForm.list.length < 2) {
        this.options.forEach(v => {
            v.disabled = false;
        })
      } else {
      this.ruleForm.list.forEach(item => {
        this.options.forEach(v => {
          if(item.type == v.value) {
            v.disabled = true;
          }
        })
      })
      }

    },
    add(){
      this.ruleForm.list.push({
        type: '',
      })
    },
    del(index){
      this.ruleForm.list.splice(index, 1)
    }
  }
};
</script>

<style lang="less" scoped>
.ico{
  font-size: 40px;
}
</style>
