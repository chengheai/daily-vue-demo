<template>
  <div>
    <div @focusout="inputBlur" @focusin="inputFocus">
      <input type="tel" placeholder="请输入手机号" />
      <input type="number" placeholder="请输入验证码" />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      timer: null,
    };
  },
  methods: {
    inputBlur(e) {
      if (e && e.target && e.target.tagName && e.target.tagName.toLowerCase() === 'input') {
        this.timer = setTimeout(() => {
          window.scrollTo(0, 0);
        }, 0);
      }
    },
    inputFocus(e) {
      if (e && e.target && e.target.tagName && e.target.tagName.toLowerCase() === 'input') {
        clearTimeout(this.timer);
      }
    },
  },
};
</script>

<style lang="scss" scoped>
</style>
