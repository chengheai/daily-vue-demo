<template>
  <div>
    <el-form :inline="true" :model="formInline" class="demo-form-inline">
      <el-form-item label="需复制文本">
        <el-input style="width: 400px;" v-model="formInline.text" placeholder="需复制文本"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" :disabled="formInline.text === ''" @click="handleCopy">复制</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      formInline: {
        text: "需复制文本"
      }
    };
  },
  methods: {
    handleCopy() {
      this.copyToClipboard(this.formInline.text);
      this.$message.success(`${this.formInline.text} 复制成功！！`);
    },
    // 复制文本
    copyToClipboard(text) {
      if (window.clipboardData && window.clipboardData.setData) {
        return window.clipboardData.setData("Text", text);
      } else if (
        document.queryCommandSupported &&
        document.queryCommandSupported("copy")
      ) {
        const textarea = document.createElement("textarea");
        textarea.textContent = text;
        textarea.style.position = "fixed";
        textarea.style.bottom = "0";
        textarea.style.zIndex = "99999";
        document.body.appendChild(textarea);
        textarea.select();
        try {
          return document.execCommand("copy");
        } catch (ex) {
          // eslint-disable-next-line
          console.warn("Copy to clipboard failed.", ex);
          return false;
        } finally {
          document.body.removeChild(textarea);
        }
      }
    }
  }
};
</script>

<style>
</style>
