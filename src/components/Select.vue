<template>
  <div>
    <el-form :model="ruleForm" ref="ruleForm" label-width="100px" class="demo-ruleForm">
      <div v-for="(item, index) in ruleForm.list" :key="index">
        <el-select
          v-model="item.type"
          clearable
          @change="selectChange(item.type,index)"
          placeholder="请选择"
        >
          <el-option
            v-for="(item,optionIndex)  in options"
            :key="optionIndex"
            :label="item.label"
            :disabled="getDisable(item.value)"
            :value="item.value"
          ></el-option>
        </el-select>
        <i
          v-if="index === 0 && ruleForm.list[0].type !== '' && ruleForm.list.length<2"
          class="el-icon-circle-plus-outline ico"
          @click="add"
        ></i>
        <i v-if="index !==0" class="el-icon-remove-outline ico" @click="del(index)"></i>
      </div>
    </el-form>
  </div>
</template>

<script>
/* eslint-disable */
// 添加数组自定义事件 用来删除数组中的某一项
Array.prototype.indexOf = function(val) {
  for (var i = 0; i < this.length; i++) {
    if (this[i] === val) {
      return i;
    }
  }
  return -1;
};
Array.prototype.remove = function(val) {
  var index = this.indexOf(val);
  if (index > -1) {
    this.splice(index, 1);
  }
};
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
      selectedOptions: [],
    };
  },
  methods: {
    selectChange(value, index) {
      console.log(arguments);
      console.log(value, index);
      this.selectedOptions[index] = value;
    },
    getDisable(value) {
      if (this.selectedOptions.indexOf(value) >= 0) {
        return true;
      } else {
        return false;
      }
    },
    add() {
      this.ruleForm.list.push({
        type: '',
      });
    },
    del(index) {
      // 删除时恢复可选
      if (this.ruleForm.list[index] || this.ruleForm.list[index] == 0) {
        this.selectedOptions.remove(this.ruleForm.list[index].type);
      }
      console.log(this.selectedOptions);
      this.ruleForm.list.splice(index, 1);
    },
  },
};
</script>

<style lang="less" scoped>
.ico {
  font-size: 40px;
}
</style>
