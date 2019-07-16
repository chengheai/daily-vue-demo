<template>
  <div>
     <a href="https://chengheai.github.io/2019/07/16/%E4%BB%A3%E7%A0%81%E6%B3%A8%E9%87%8A%E5%90%84%E7%A7%8D%E5%9B%BE%E5%83%8F/" target="_blank">代码注释各种图像</a>
  </div>
</template>

<script>
/* eslint-disable */
export default {

}
</script>

<style lang='less' scoped>
  div{
    display: flex;
    justify-content: center;
    align-items: center;
    height: calc(100vh - 100px);
    width: 100%;
    a{
      text-decoration: none;
      padding: 5px 25px;
      color: rgb(209, 12, 209);
      display: inline-block;
      font-size: 20px;
      background: #FEA001;
      position: relative;
      &:hover{
        box-shadow: none;
      }
      &:after{
        content: "";
        position: absolute;
        bottom: 5px;
        right: 40px;
        width: 65%;
        height: 45%;
        background-color: #bbb;
        box-shadow: 0 0 10px 10px #bbb;
        -webkit-transform: skew(30deg,4deg);
        transform: skew(30deg,4deg);
        z-index: -1;
      }
    }
  }
</style>
