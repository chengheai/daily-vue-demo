<template>
  <div style="padding:20px">
    <el-checkbox
      style="margin-right: 10px;"
      :value="checkedAll"
      v-show="isData"
      @change="handleCheckedAllChange"
      >全选</el-checkbox
    >
    <div style="display:flex">
      <checked-item
        v-for="item in arr"
        :key="item.id"
        :checked="ids.includes(item.id)"
        :data-source="item"
        @change="handleChangeChecked"
      />
    </div>
  </div>
</template>

<script>
import CheckedItem from "./CheckedItem";
export default {
  components: {
    CheckedItem
  },
  data() {
    return {
      selections: [],
      arr: [
        {
          id: 1,
          url:
            "https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1355153719,3297569375&fm=26&gp=0.jpg"
        },
        {
          id: 2,
          url:
            "https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=3461177213,1528805342&fm=26&gp=0.jpg"
        },
        {
          id: 3,
          url:
            "https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=2114611637,2615047297&fm=26&gp=0.jpg"
        }
      ]
    };
  },
  computed: {
    isData() {
      return this.arr.length > 0;
    },
    ids() {
      return this.selections.map(item => item.id);
    },
    isDiasbled() {
      return this.selections.length === 0;
    },
    checkedAll() {
      const count = this.arr.length;
      return this.selections.length === count && !this.isDiasbled;
    }
  },
  methods: {
    // 全选
    handleCheckedAllChange(checked) {
      const selections = this.arr;

      this.selections = checked ? selections : [];
    },
    // 单选
    handleChangeChecked(checked, row) {
      if (checked) {
        this.selections.push(row);
      } else {
        this.selections = this.selections.filter(item => item.id !== row.id);
      }
    }
  }
};
</script>

<style lang="less" scoped>
.item {
  display: inline-block;
  position: relative;
  width: 270px;
  padding: 10px;
  margin: 0 16px 16px 0;
  border: 1px solid #eee;
  border-radius: 4px;

  &::before {
    position: absolute;
    top: 6px;
    right: 6px;
    content: "";
    width: 18px;
    height: 18px;
    cursor: pointer;
    background-color: #fff;
    border: 1px solid #dcdfe6;
    border-radius: 2px;
    transition: border-color 0.25s cubic-bezier(0.71, -0.46, 0.29, 1.46),
      background-color 0.25s cubic-bezier(0.71, -0.46, 0.29, 1.46);
  }

  &::after {
    position: absolute;
    top: 8px;
    right: 12px;
    z-index: 9;
    content: "";
    width: 6px;
    height: 10px;
    border: 1px solid #fff;
    border-top: 0;
    border-left: 0;
    transform: rotate(45deg) scaleY(0);
    transition: transform 0.15s ease-in 0.05s;
    transform-origin: center;
  }

  &.is-checked {
    &::before {
      background-color: #409eff;
      border-color: #409eff;
    }

    &::after {
      transform: rotate(45deg) scaleY(1);
    }
  }

  &.is-disabled {
    cursor: no-drop;

    &::before {
      background-color: #edf2fc;
      border-color: #dcdfe6;
    }

    &::after {
      transform: scaleY(0);
    }
  }
}
</style>
