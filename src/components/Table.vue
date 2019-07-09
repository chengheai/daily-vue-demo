<template>
  <div>
    <el-table
      :data="list"
      v-loading="loading"
      style="width: 100%">
      <el-table-column
        prop="date"
        label="日期"
        width="180">
      </el-table-column>
      <el-table-column
        prop="name"
        label="姓名"
        width="180">
      </el-table-column>
      <el-table-column
        prop="address"
        label="地址">
      </el-table-column>
    </el-table>
    <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :page-sizes="pageSizes"
      :pager-count="pagerCount"
      :layout="pageLayout"
      :total="total">
    </el-pagination>
  </div>
</template>

<script>
import mixin from '@/mixins/list' // 引入
export default {
  name: 'mixins-demo',
  mixins: [mixin], // 使用mixins
  data () {
    return {
      searchForm: {
        // age: 18,
        // six: 'male'
      }
    }
  },
  methods: {
    // 加载列表
    getList () {
      this.loading = true;
      const params = { ...this.searchForm, ...this.pageParam }
      this.$http.get('https://www.easy-mock.com/mock/5d23ef5f43a94773511e15e6/table/list', {params}).then(res => {
        if (res.data.code === 0) {
          this.listSuccessCb(res).then((list) => {
            this.list = list
          }).catch((err) => {
            this.listExceptionCb(err)
            // console.log(err)
          })
        }
      })
    }
  },
  created() {
    console.log('我是组件自己的created');
  },
  mounted() {
    this.getList()
  }
}
</script>

<style>

</style>
