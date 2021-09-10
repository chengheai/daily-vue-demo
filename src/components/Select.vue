<template>
  <div>
    <el-form
      :model="ruleForm"
      ref="ruleForm"
      label-width="100px"
      class="demo-ruleForm"
    >
      <div v-for="(item, index) in ruleForm.list" :key="index">
        <el-select
          v-model="item.type"
          clearable
          @change="selectChange(item.type, index)"
          placeholder="请选择"
        >
          <el-option
            v-for="(item, optionIndex) in options"
            :key="optionIndex"
            :label="item.label"
            :disabled="selectedOptions.includes(item.value)"
            :value="item.value"
          ></el-option>
        </el-select>
        <el-button
        circle
          v-if="ruleForm.list.length < options.length"
          icon="el-icon-plus"
          @click="add"
        ></el-button>
        <el-button
        circle
          v-if="index !== 0"
          icon="el-icon-minus"
          @click="del(index)"
        ></el-button>
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
            type: ""
          }
        ]
      },
      options: [
        {
          label: "中国",
          value: 1
        },
        {
          label: "美国",
          value: 2
        },
        {
          label: "英国",
          value: 3
        }
      ],
      selectedOptions: []
    };
  },

  methods: {
    getDisable(value) {
      return this.selectedOptions.indexOf(value) !== -1;
    },
    selectChange(value, index) {
      this.selectedOptions[index] = value;
    },

    add() {
      this.ruleForm.list.push({
        type: ""
      });
    },
    del(index) {
      // 删除时恢复可选
      let index1 = this.selectedOptions.findIndex(
        item => item === this.ruleForm.list[index].type
      );
      console.log("index1: ", index1);
      this.selectedOptions.splice(index1, 1);

      this.ruleForm.list.splice(index, 1);
    }
  }
};
</script>

<style lang="less" scoped>
.ico {
  font-size: 40px;
}
</style>
