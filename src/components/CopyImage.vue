<template>
  <div class="img-w">
      <div :key="item" v-for="(item,index) in imgs">
        <img :src="item" alt="" :ref='index'  @click="handleClick(index)" />
      </div>

    <!-- <img @click="handleClick('my')" ref="my" src="https://img2.baidu.com/it/u=2784663868,2334020525&fm=26&fmt=auto&gp=0.jpg" alt=""> -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      imgs: [
        "https://img0.baidu.com/it/u=561041293,259965800&fm=26&fmt=auto&gp=0.jpg",
        "https://img2.baidu.com/it/u=2510891666,2454567058&fm=26&fmt=auto&gp=0.jpg",
        "https://img0.baidu.com/it/u=2394090642,2278676572&fm=26&fmt=auto&gp=0.jpg"
      ]
    };
  },
  methods: {
    SelectText(element) {
      var doc = document;
      if (doc.body.createTextRange) {
        var range = document.body.createTextRange();
        range.moveToElementText(element);
        range.select();
      } else if (window.getSelection) {
        var selection = window.getSelection();
        range = document.createRange();
        range.selectNodeContents(element);
        selection.removeAllRanges();
        selection.addRange(range);
      }
    },
    handleClick(id) {
      this.$nextTick(() => {
        // console.log(this.$refs)
        let myImage = this.$refs[id][0];
        console.log('myImage: ', myImage);
        myImage.setAttribute("contenteditable", true);
        this.SelectText(myImage);
        document.execCommand("copy");
        window.getSelection().removeAllRanges();
        // myImage.removeAttribute("contenteditable");
        this.$message.success("复制成功");
      })
    }
  }
};
</script>

<style lang="less" scoped>
.img-w {
  display: flex;
  justify-content: center;
  align-items: center;
  img {
    width: 300px;
    height: 300px;
    object-fit: contain;
    padding: 10px;
    background: #fff;
  }
}
</style>
