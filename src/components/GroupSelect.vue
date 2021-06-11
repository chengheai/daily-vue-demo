<template>
  <div>
    <GroupSelect placeholder='请输入xxx' :data-source='options' v-model="value"></GroupSelect>
    {{value}}
  </div>
</template>

<script>
import GroupSelect from './GroupSelectCom.vue'
export default {
  components: {
    GroupSelect,
  },
  data () {
    return {
      options: [{
        label: '热门城市',
        checked: false,
        options: [{
          value: 'Shanghai',
          label: '上海'
        }, {
          value: 'Beijing',
          label: '北京'
        }]
      }, {
        label: '城市名',
        checked: false,
        options: [{
          value: 'Chengdu',
          label: '成都'
        }, {
          value: 'Shenzhen',
          label: '深圳'
        }, {
          value: 'Guangzhou',
          label: '广州'
        }, {
          value: 'Dalian',
          label: '大连'
        }]
      }],
      value: [],
    }
  },
  methods: {

  }
}

</script>
