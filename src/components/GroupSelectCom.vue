<template>
  <el-select
    :value="selfValue"
    popper-class="xm-multiple-options"
    filterable
    v-bind="$attrs"
    multiple
    style="width: 200px;"
    @change="handleChange"
  >
    <div v-for="group in dataSource" :key="group[selfProps.label]" class="el-select-group__wrap">
      <div
        class="el-select-group__title"
        :class="{ selected: group.checked }"
        @click="selectAll(!group.checked, group[selfProps.label])"
      >
        {{ group[selfProps.label] }}
      </div>
      <el-option
        v-for="item in group.options"
        :key="item[selfProps.value]"
        :label="item[selfProps.label]"
        :value="item[selfProps.value]"
      />
    </div>
  </el-select>
</template>

<script>
export default {
  model: {
    prop: 'value',
    event: 'change'
  },
  props: {
    dataSource: {
      type: Array,
      default: () => []
    },
    value: {
      type: Array,
      default: () => []
    },
    props: {
      type: Object,
      default: () => {}
    }
  },
  data() {
    return {
      selfValue: []
    };
  },
  computed: {
    selfProps() {
      return { label: 'label', value: 'value', ...this.props };
    }
  },
  watch: {
    value: {
      deep: true,
      immediate: true,
      handler(val) {
        this.selfValue = val;
      }
    }
  },
  methods: {
    selectAll(checked, label) {
      const arr = this.dataSource.find(item => item[this.selfProps.label] === label).options.map(m => m[this.selfProps.value]);
      if (checked) {
        arr.map(item => {
          if (!this.selfValue.includes(item)) {
            this.selfValue.push(item);
          }
        });
      } else {
        this.selfValue.forEach((item, index) => {
          // console.log('121')
          if (arr.includes(item)) {
            this.selfValue.splice(index, 1, '');
          }
        });
      }
      this.selfValue = this.selfValue.filter(f => f !== '');
      this.dataSource.find(item => item[this.selfProps.label] === label).checked = checked;
      this.$emit('change', this.selfValue);
    },
    handleChange(val) {
      this.dataSource.forEach(item => {
        const arr = item.options.map(m => m.value);
        item.checked = arr.every(v => {
          return val.some(s => s === v);
        });
      });
      this.$emit('change', val);
    }
  }
};
</script>

<style lang="less" scoped>
.xm-multiple-options {
  .el-select-group__title {
    cursor: pointer;
    &.hover,
    &.selected::after {
      position: absolute;
      right: 20px;
      color: #409eff;
      font-family: element-icons;
      content: '\E6DA';
      font-size: 12px;
      font-weight: 700;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
    }
  }
}
</style>
