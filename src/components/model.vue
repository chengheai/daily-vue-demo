<template>
  <div>
    <el-divider content-position="left">:value="msg" @input="msg = $event.target.value"</el-divider>
    <input type="text" :value="msg" @input="msg = $event.target.value">
    <p>msg:{{msg}}</p>
    <el-divider content-position="left">childModel</el-divider>
    <childModel v-model="child" @change="handleChange"></childModel>
    <p>child:{{child}}</p>
    <el-divider content-position="left">自定义model多选</el-divider>
    <muSelect v-model="selValues" placeholder='attr....' :data-source='list' :props="{label:'name', value:'id'}" @change="handleSelChange"></muSelect>
    <p>{{selValues}}</p>

    <el-divider content-position="left">自定义model v-bind='$attrs' v-on="$listeners"</el-divider>
    <listeners v-model="listener" @change="handleListenChange" @blur="testBlur" clearable @clear=handleClear placeholder='输入点点滴滴'></listeners>
    <p>listener:{{listener}}</p>
  </div>
</template>

<script>
import childModel from './child-model'
import muSelect from './mu-select'
import listeners from './listeners'
export default {
  components: {
    childModel,
    muSelect,
    listeners
  },
  data() {
    return {
      listener: '',
      list: [{
        id: '选项1',
        name: '黄金糕'
      }, {
        id: '选项2',
        name: '双皮奶'
      }, {
        id: '选项3',
        name: '蚵仔煎'
      }, {
        id: '选项4',
        name: '龙须面'
      }, {
        id: '选项5',
        name: '北京烤鸭'
      }],
      selValues: [],
      msg: '',
      child: ''
    }
  },
  methods: {
    handleListenChange(val) {
      console.log('listener:', val)
    },
    handleClear() {
      this.$message.success('清除了...')
    },
    testBlur() {
      this.$message.success('el-input blur失焦了...')
      console.log('blur')
    },
    handleSelChange(val) {
      console.log(val)
    },
    handleChange(val) {
      console.log('val: ', val);
    }
  }

}
</script>

<style lang="less" scoped>

</style>
