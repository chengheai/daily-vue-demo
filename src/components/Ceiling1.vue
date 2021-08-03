<template>
  <div id="container">
    {{ot}}
    <h1>实现多个标题的吸顶</h1>
    <section>
      <h2 class="box">header1</h2>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
    </section>
    <section>
      <h2 class="box" style="background:#67C23A">header2</h2>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
    </section>
    <section>
      <h2 class="box" style="background:#E6A23C">header3</h2>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
    </section>
    <section>
      <h2 class="box" style="background:#F56C6C">header4</h2>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
    </section>

    <section>
      <h2 class="box" style="background:#909399">header5</h2>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      ot: [],
      len: 0
    };
  },
  mounted() {
    this.$nextTick(() => this.getBox())
    window.addEventListener("scroll", this.handleScroll);
  },
  methods: {
    getBox() {
      let box = document.getElementsByClassName('box') // 获取所有需要吸顶效果的标题
      let section = document.getElementsByTagName('section'); // 获取所有子列表

      this.len = box.length; // 标题的个数
      // 60 + 23
      for (let i = 0; i < this.len; i++) {
        this.ot.push((box[i].offsetTop)); // 获取每个标题的offsetTop
      }

      // 获取最后一个子列表的高度，为了设置最后一个吸顶标题的位置
      // section[len-1].getBoundingClientRect().height
      // 此方法返回一个number

      this.ot.push(box[this.len - 1].offsetTop + section[this.len - 1].getBoundingClientRect().height);
    },
    handleScroll() {
      var st = document.documentElement.scrollTop || document.body.scrollTop;
      console.log('st: ', st);
      console.log(this.ot)
      let box = document.getElementsByClassName('box') // 获取所有需要吸顶效果的标题
      for (let i = 0; i < this.len; i++) {
        if (st > (this.ot[i] + 20) && st < this.ot[i + 1]) { // 滚动时监听位置，为标题的吸顶设置一个现实范围
          box[i].className = 'box box1';
        } else {
          box[i].className = 'box';
        }
      }
    }
  }
};
</script>

<style lang="less" scoped>
#container{
  width: 100%;
  height: 5000px;
}
ul {
  width: 100%;
}
li {
  color: white;
  margin-bottom: 20px;
  list-style: none;
  background: #89a2ee;
  text-align: center;
}
h2 {
  width: 100%;
  height:50px;
  color: white;
  background: #ee728b;
  margin-bottom: 20px;
}
.box1 {
  position: -webkit-sticky;
  position: -moz-sticky;
  position: -ms-sticky;
  position: sticky;
  top: 0;
  z-index: 888;
}
</style>
