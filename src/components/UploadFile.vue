<template>
  <div>
    <a href="javascript:;" class="file">
      上传文件夹
      <i class="el-icon-upload2 el-icon--right"></i>
      <input type="file" ref="file" name="file" webkitdirectory @change.stop="handleFileChanged">
    </a>
    <a href="javascript:;" class="file">
      上传文件
      <i class="el-icon-upload2 el-icon--right"></i>
      <input type="file" ref="upload" name="file" @change.stop="handleFileChanged">
    </a>
    <!--  -->
    <el-progress :text-inside="true" :stroke-width="18" :percentage="percentage"></el-progress>
    <el-progress
      :text-inside="true"
      :stroke-width="18"
      :percentage="percentage"
      color="rgba(142, 113, 199, 0.7)"
    ></el-progress>
    <el-progress :text-inside="true" :stroke-width="18" :percentage="percentage" status="success"></el-progress>
    <el-progress :text-inside="true" :stroke-width="18" :percentage="percentage" status="exception"></el-progress>
  </div>
</template>
<script>
/* eslint-disable */
import axios from "axios";
import { mapState, mapGetters, mapActions, mapMutations } from "vuex";
export default {
  data() {
    return {
      file: null
    };
  },
  computed: {
    ...mapGetters({
      percentage: "uploadPercentage"
    })
  },
  methods: {
    handleFileChanged(event) {
      const file = event.target.files[0];
      this.$store.dispatch("upload", file);
    }
  }
};
</script>
<style lang="less" scoped>
.el-progress {
  margin-top: 10px;
}
.file {
  position: relative;
  display: inline-block;
  background: #1890ff;
  border-radius: 4px;
  padding: 4px 12px;
  overflow: hidden;
  color: #fff;
  text-decoration: none;
  text-indent: 0;
  line-height: 20px;
  font-size: 14px;
  input {
    position: absolute;
    font-size: 14px;
    right: 0;
    top: 0;
    opacity: 0;
    cursor: pointer;
  }
  i {
    float: left;
    font-size: 16px;
    margin-top: 2px;
    margin-right: 4px;
    margin-left: -6px;
  }
}
</style>

