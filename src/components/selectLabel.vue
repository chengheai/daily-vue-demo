<template>
  <el-select v-model="value" popper-class='my-sel' placeholder="请选择">
    <el-option
      v-for="item in cities"
      :key="item.value"
      :label="item.label"
      :value="item.value"
       :style="{height:('REQUEST_TIME' === item.value?'84px':'108px')}"
      >
      <span style="line-height: 28px;">{{ item.label }}</span>
      <div class="select-item-desc">
      <span>{{ item.tips }}</span>
      </div>
    </el-option>
  </el-select>
</template>

<script>
export default {
  data() {
    return {
      cities: [{
        value: 'REQUEST_TIME',
        label: "广告播放口径",
        tips: "转化数据统计至广告播放时间点。<br>适合场景：广告赔付考察、广告整体生命周期表现"
      }, {
        value: 'REPORTING_TIME',
        label: "转化回传口径",
        tips: "转化数据统计至行为上报时间点。<br>适合场景：实时查看当日上报数据情况",
      }],
      value: ''
    }
  }
}
</script>
<style lang="less" scoped>

  .my-sel{
    .select-item-desc{
      display: block;
      padding-top: 4px;
      padding-bottom: 0;
      margin-right: 70px;
      span{
            line-height: 20px;
    color: #999;
    display: block;
    padding-right: 20px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
      }
    }
    // .el-select-dropdown__item{
    //   height: 108px;
    // }
  }

</style>
