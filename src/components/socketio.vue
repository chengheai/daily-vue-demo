<template>
  <div v-if="chartData">
    <ve-histogram :data="chartData"></ve-histogram>
    {{chartData}}
    <!-- <el-button type="primary" @click="clickButton">发送</el-button> -->
  </div>
    <el-alert
    v-else
    title="Please start server.js on your computer terminal"
    type="error">
  </el-alert>
</template>

<script>
import SocketIO from "vue-socket.io";
import Vue from "vue";
Vue.use(
  new SocketIO({
    debugger: true,
    connection: "http://localhost:2000"
  })
);
export default {
  name: "socket",
  data() {
    return {
      chartData: ""
    };
  },
  mounted() {
    // console.log(this.$socket);
  },
  sockets: {
    chaTmessage(data) {
      this.chartData = data;
      // 'chaTmessage'事件返回值
      console.log("接收");
      console.log(data);
    }
  },
  methods: {
    clickButton() {
      this.$socket.emit("hello", { roomName: "aaa", message: "你好" }); // 发送信息到后台hello事件
    }
  }
};
</script>

<style lang="less" scoped></style>
