<template>
  <div>
    <pre>
      <span style="color: red">Vue.prototype.$EventBus</span> = new Vue()
      <span style="color:#c678dd">this.$EventBus.$emit</span>('sendMsg',"这是组件A发送的消息！")
      this.$EventBus.$on('sendMsg',(msg)=>{
        console.log(msg);//这是组件A发送的消息！
      })
    </pre>
  </div>
</template>

<script>
export default {};
</script>
<style lang="css" scoped>
pre{
  background: #282c34;
  color:#61aeee;
  font-size: 20px;
  padding: 50px 0;
}
</style>
