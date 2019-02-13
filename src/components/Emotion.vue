<template>
  <div>
    <img v-for="(item, index) in list" :key="index" :src="item.url" alt>
  </div>
</template>

<script>
/* eslint-disable */
export default {
  data() {
    return {
      list: [],
      timer: null,
      timer1: null
    };
  },
  mounted() {
    this.pushData();
  },
  distroyed: function() {
    clearInterval(this.timer);
  },
  methods: {
    pushData() {
      let that = this;
      const item1 = {
        url:
          "https://res.wx.qq.com/mpres/htmledition/images/icon/emotion/97.gif"
      };
      const item = {
        url:
          "https://res.wx.qq.com/mpres/htmledition/images/icon/emotion/66.gif"
      };
      that.timer = setInterval(() => {
        that.list.push(item);
        if (that.list.length === 250) {
          that.$notify({
            title: "提示",
            type: "success",
            message: "这里是250个❤️❤️❤️❤️❤️",
            duration: 0,
            onClose: function() {
              that.timer1 = setInterval(() => {
                that.list.push(item1);
                if (that.list.length === 520) {
                  that.$notify({
                    title: "提示",
                    type: "success",
                    message: "这里总共520个",
                    duration: 0,
                    onClose: function() {
                      that
                        .$confirm("🐷🐷🐷🐷🐷🐷，好玩吗?", "提示", {
                          confirmButtonText: "好玩",
                          cancelButtonText: "不好玩",
                          type: "warning"
                        })
                        .then(() => {
                          that.$message({
                            type: "success",
                            message: "猪🐷🐷 ！！！"
                          });
                        })
                        .catch(() => {
                          that.$message({
                            type: "success",
                            message: "猪🐷🐷 ！！！！！"
                          });
                        });
                    }
                  });
                  clearInterval(that.timer1);
                }
              }, 10);
            }
          });
          clearInterval(this.timer);
        }
      }, 10);
    }
  }
};
</script>

<style lang='css' scoped>
div {
  width: 100vw;
  height: calc(100vh - 83px);
  background: #fff;
}
</style>
