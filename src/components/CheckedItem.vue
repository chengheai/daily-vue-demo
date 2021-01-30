<template>
  <div>
    <div
      class="checked-item"
      :class="{ 'is-checked': checked, 'is-disabled': disabled }"
      @click.stop="handleClick"
    >
      <img :src="dataSource.url" class="item-img" />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    checked: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    },
    dataSource: {
      type: Object,
      default() {
        return null;
      }
    }
  },
  data() {
    return {};
  },
  methods: {
    handleClick() {
      if (this.disabled) return;
      this.$emit("change", !this.checked, this.dataSource);
    }
  }
};
</script>

<style lang="less" scoped>
.checked-item {
  display: inline-block;
  position: relative;
  width: 270px;
  padding: 10px;
  margin: 0 16px 16px 0;
  border: 1px solid #eee;
  border-radius: 4px;
  .item-img {
    width: 100%;
  }
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
