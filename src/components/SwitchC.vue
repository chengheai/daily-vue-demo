<template>
  <div class="weui-div" @click.stop="toggle">
    <span class="weui-switch" :class="{'weui-switch-on' : me_checked}" :value="value" >
      <div v-if='!value' class="weui-div-2">OFF</div>
      <div v-if='value' class="weui-div-1">ON</div>
    </span>

  </div>
</template>

<script>
export default {
  props: {
    value: {
      type: Boolean,
      default: true
    },
    handle: {
      type: Boolean,
      default: true
    }
  },
  data() {
    return {
      me_checked: this.value
    };
  },
  watch: {
    value() {
      this.me_checked = this.value;
    }
  },
  methods: {
    toggle() {
      // 是否可点击
      if (this.handle === true) {
        this.me_checked = !this.me_checked;
        this.$emit('update:value', this.me_checked);
      }
    }
  }
};
</script>

<style>
  .weui-div{
    position:relative;
    font-weight: bold;
    cursor:pointer;
    width: 82px;
    height: 32px;
  }
  .weui-div-1{
    position:absolute;
    left:10px;
    top:0;
    line-height:32px;
    font-size:12px;
    color:#ffffff;
  }
  .weui-div-2{
    position:absolute;
    right:11px;
    top:0;
    line-height:32px;
    font-size:12px;
    color:#999;
  }
  .weui-switch {
    display: block;
    position: relative;
    width: 82px;
    height: 32px;
    border: 1px solid #DFDFDF;
    outline: 0;
    border-radius: 16px;
    box-sizing: border-box;
    background-color: #DFDFDF;
    transition: background-color 0.1s, border 0.1s;
    cursor: pointer;
  }
  .weui-switch:before {
    content: " ";
    position: absolute;
    top: 2px;
    left: 2px;
    width: 26px;
    height: 26px;
    border-radius: 13px;
    background-color: #E6E6E6;
    transition: transform 0.35s cubic-bezier(0.45, 1, 0.4, 1);
  }
  .weui-switch:after {
    content: " ";
    position: absolute;
    top: 2px;
    left: 2px;
    width: 26px;
    height: 26px;
    border-radius: 13px;
    background-color: #FFFFFF;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.4);
    transition: transform 0.35s cubic-bezier(0.4, 0.4, 0.25, 1.35);
  }
  .weui-switch-on {
    border-color: #468fcc;
    background-color: #468fcc;
  }
  .weui-switch-on:before {
    border-color: #468fcc;
    background-color: #468fcc;
  }
  .weui-switch-on:after {
    transform: translateX(50px);
  }
</style>
