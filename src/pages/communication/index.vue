<template>
  <div style="padding: 0px 50px">
    <el-tabs v-model="activeName" @tab-click="handleClick">
      <el-tab-pane label="props" name="1"><c1></c1></el-tab-pane>
      <el-tab-pane label="emit" name="2"><c2></c2></el-tab-pane>
      <el-tab-pane label="ref" name="3"><c3></c3></el-tab-pane>
      <el-tab-pane label="bus" name="4"><c4></c4></el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
import c1 from "./components/c1";
import c2 from "./components/c2";
import c3 from "./components/c3";
import c4 from "./components/c4";
import bg from "./../../assets/bg.png";
export default {
  components: {
    c1,
    c2,
    c3,
    c4
  },
  data() {
    return {
      activeName: "1"
    };
  },
  methods: {
    createMsg() {
      const appendNode = document.createElement("img");
      appendNode.className = "c-b";
      appendNode.setAttribute("src", bg);
      const pNode = document.querySelector("body");

      pNode.insertBefore(appendNode, pNode.childNodes[0]);
      // pNode.append(appendNode)
    },
    handleClick(tab, event) {
      if (tab.name === "1") {
        // this.createMsg();
      }
    }
  }
};
</script>
<style lang="less" scoped></style>
