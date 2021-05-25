<template>
<div>
  <el-select
    poper-class='my-options'
    multiple
    collapse-tags
    filterable
    clearable
    v-bind='$attrs'
    :value='value'
    @change="handleChagne"
  >
    <div
      key="select-all"
      class="el-select-dropdown__item"
      :class="{selected: checkedAll}"
      @click="handleCheckedAll(!checkedAll)"
    >全选</div>
    <el-option
      v-for="item in dataSource"
      :key="item[selfProps.value]"
      :label="item[selfProps.label]"
      :value="item[selfProps.value]">
    </el-option>
  </el-select>
</div>
</template>

<script>
export default {
  model: {
    props: 'value',
    event: 'change'
  },
  props: {
    value: {
      type: Array,
      default: () => []
    },
    dataSource: {
      type: Array,
      default: () => []
    },
    props: {
      type: Object,
      default: () => {}
    }
  },
  computed: {
    selfProps() {
      return {label: 'label', value: 'value', ...this.props}
    },
    checkedAll() {
      return this.value.length === this.dataSource.length && this.dataSource.length > 0
    }

  },
  methods: {
    handleCheckedAll(checked) {
      const all = checked ? this.dataSource.map(item => item[this.selfProps.value]) : []
      this.$emit('change', all)
    },
    handleChagne(val) {
      this.$emit('change', val)
    }
  }

}
</script>

<style lang="less" scoped>
.my-options {
  &.is-multiple {
    .el-select-dropdown__item {
      &.hover,
      &.selected.hover {
        background-color: #fff;
      }

      &:hover,
      &.selected:hover {
        background-color: #f5f7fa;
      }
    }
  }
}
</style>
