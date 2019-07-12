<template>
  <div class="app">
    <div ref="msgDiv">{{msg}}</div>
    <div v-if="msg1">Message got outside $nextTick: {{msg1}}</div>
    <div v-if="msg2">Message got inside $nextTick: {{msg2}}</div>
    <div v-if="msg3">Message got outside $nextTick: {{msg3}}</div>
    <el-button type="primary" @click="changeMsg">Change the Message</el-button>

    <el-divider></el-divider>
    <el-button type="danger" @click="add">add</el-button>
    {{count}}
    <ul ref="ul">
      <li v-for="(item, index) in list" :key="index">{{item}}</li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      list: [],
      count: 0,
      msg: 'Hello Vue.',
      msg1: '',
      msg2: '',
      msg3: ''
    };
  },
  mounted() {
    console.log(this.$parent)
    this.changeMsg();
    this.log1();
    this.log2();
    this.log3();
  },
  methods: {
    add() {
      this.count += 1;
      this.list.push(this.count);
      // let li = this.$refs.ul.querySelectorAll('li');
      /***
       * 以上的代码，期望在每次新增一个列表项时都使得列表项的字体是红色的，但实际上新增的列表项字体仍是黑色的
       * 。尽管data已经更新，但新增的 li 元素并不立即插入到 DOM 中
       * 。如果希望在 DOM 更新后再更新样式，可以在nextTick的回调中执行更新样式的操作。
       *  */
      // li.forEach(item => {
      //   item.style.color = 'red';
      // });
      /**
       *修改为：
       */
      // dom 更新后再执行
      this.$nextTick(() => {
        let li = this.$refs.ul.querySelectorAll('li');
        li.forEach(item => {
          item.style.color = 'red';
        });
      });
    },
    log1() {
      console.log(1);
    },
    log2() {
      console.log(2);
    },
    log3() {
      setTimeout(() => {
        console.log(3);
      }, 2000);
    },
    changeMsg() {
      this.msg = 'Hello world.';
      this.msg1 = this.$refs.msgDiv.innerHTML;
      this.$nextTick(() => {
        this.msg2 = this.$refs.msgDiv.innerHTML;
        console.log('nextTick');
      });
      this.msg3 = this.$refs.msgDiv.innerHTML;
    }
  }
};
</script>
<style>
</style>
