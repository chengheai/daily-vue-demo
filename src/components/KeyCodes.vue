<template>
  <div class="s1">
    <el-row>
      <el-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
        <div class="grid-content bg-purple">
          <el-input
            v-model="text"
            placeholder="长按按键显示..."
            @keydown.native="noNumbers($event)"
            @keyup.native="clear"
            style="margin-bottom: 10px;"
          ></el-input>
          <el-alert
            :title="keynum || '无'"
            :closable="false"
            type="info"
            effect="dark"
            style="margin-bottom: 10px;"
          ></el-alert>
          <el-alert :title="keyText || '没有输入'" :closable="false" type="warning" effect="dark"></el-alert>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      text: '',
      keynum: '',
      keyText: ''
    };
  },
  methods: {
    noNumbers(e) {
      this.text = '';
      this.keynum = '';
      this.keyText = '';
      console.log(e);
      this.keynum = `keyCode： ${e.keyCode.toString()}`;
      this.keyText = `keyName：${e.code.toString()}`
    },
    clear() {
      setTimeout(() => {
        this.text = '';
        this.keynum = '';
        this.keyText = '';
      }, 1000);
    }
  }
};
</script>

<style lang="less" scoped>
.s1{
  height: calc(100vh - 60px);
}
.el-row {
  margin-top: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
